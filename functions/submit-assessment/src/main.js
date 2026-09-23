import { Client, TablesDB, Query, ID } from "node-appwrite";
import { createHash } from "node:crypto";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID || "ai-engineering";
const QUESTIONS_TABLE = "practice_questions";
const ANSWERS_TABLE = "practice_answer_keys";
const ATTEMPTS_TABLE = "quiz_attempts";
const EVIDENCE_TABLE = "lesson_evidence";
const PROGRESS_TABLE = "learner_progress";
const UNLOCK_TABLE = "phase_unlocks";
const AUDIT_TABLE = "audit_events";
const PASS_PERCENT = Math.min(100, Math.max(1, Number.parseInt(process.env.PASS_PERCENT || "80", 10) || 80));
const SUPABASE_URL = String(process.env.SUPABASE_URL || "").replace(/\/$/, "");
const SUPABASE_PUBLISHABLE_KEY = String(process.env.SUPABASE_PUBLISHABLE_KEY || "");
const RATE_WINDOW_MS = 60_000;
const rateBuckets = new Map();

function response(res, body, status = 200) {
  return res.json(body, status, {
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff"
  });
}

function fail(res, code, message, status) {
  return response(res, { ok: false, error: message, code }, status);
}

function allowRate(key, limit) {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || now - bucket.startedAt >= RATE_WINDOW_MS) {
    rateBuckets.set(key, { startedAt: now, count: 1 });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

function appwriteClient() {
  return new TablesDB(
    new Client()
      .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_FUNCTION_API_KEY)
  );
}

async function authenticate(req) {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    return { error: "Authentication service is not configured.", status: 503 };
  }
  const raw = req.headers?.authorization || req.headers?.Authorization || "";
  const match = /^Bearer\s+(.+)$/i.exec(raw);
  if (!match) return { error: "Authentication required.", status: 401 };

  let result;
  try {
    result = await fetch(SUPABASE_URL + "/auth/v1/user", {
      headers: {
        Authorization: "Bearer " + match[1],
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });
  } catch {
    return { error: "Authentication service unavailable.", status: 503 };
  }

  if (!result.ok) return { error: "Authentication required.", status: 401 };
  const user = await result.json().catch(() => null);
  return user?.id ? { user } : { error: "Authentication required.", status: 401 };
}

function stableId(...parts) {
  return createHash("sha256").update(parts.join(":")).digest("hex").slice(0, 32);
}

function bodyJson(req) {
  if (req.bodyJson && typeof req.bodyJson === "object") return req.bodyJson;
  try { return JSON.parse(req.body || "{}"); } catch { return {}; }
}

function phaseConfig(phaseId) {
  return CURRICULUM[String(phaseId)] || null;
}

async function listRows(db, tableId, queries = [], limit = 500) {
  const result = await db.listRows({
    databaseId: DATABASE_ID,
    tableId,
    queries: [...queries, Query.limit(limit)],
    total: false
  });
  return result.rows || [];
}

async function queryUserPhase(db, tableId, userId, phaseId) {
  return listRows(db, tableId, [
    Query.equal("userId", [userId]),
    Query.equal("phaseId", [phaseId])
  ], 100);
}

async function isPhaseUnlocked(db, userId, phaseId) {
  if (String(phaseId) === "00") return true;
  const rows = await queryUserPhase(db, UNLOCK_TABLE, userId, String(phaseId));
  return rows.length > 0;
}

async function getState(userId) {
  const db = appwriteClient();
  const [progressRows, unlockRows, attemptRows] = await Promise.all([
    listRows(db, PROGRESS_TABLE, [
      Query.equal("userId", [userId]),
      Query.equal("status", ["completed"])
    ]),
    listRows(db, UNLOCK_TABLE, [Query.equal("userId", [userId])]),
    listRows(db, ATTEMPTS_TABLE, [
      Query.equal("userId", [userId]),
      Query.equal("passed", [true])
    ])
  ]);

  const lessonProgress = {};
  for (const row of progressRows) lessonProgress[row.lessonId] = true;

  const unlocked = new Set(["00"]);
  for (const row of unlockRows) unlocked.add(String(row.phaseId));

  const passedAssessments = {};
  for (const row of attemptRows) {
    if (String(row.quizId || "").startsWith("assessment-") && row.phaseId) {
      passedAssessments[String(row.phaseId)] = true;
    }
  }

  return {
    ok: true,
    authenticated: true,
    lessonProgress,
    unlockedPhases: Array.from(unlocked).sort(),
    passedAssessments
  };
}

async function upsertRow(db, tableId, rowId, data) {
  try {
    await db.createRow({ databaseId: DATABASE_ID, tableId, rowId, data, permissions: [] });
  } catch (error) {
    if (Number(error?.code) !== 409) throw error;
    await db.updateRow({ databaseId: DATABASE_ID, tableId, rowId, data, permissions: [] });
  }
}

async function audit(db, userId, eventType, phaseId = "", resourceId = "", payload = {}) {
  try {
    await db.createRow({
      databaseId: DATABASE_ID,
      tableId: AUDIT_TABLE,
      rowId: ID.unique(),
      data: {
        userId,
        eventType,
        phaseId: phaseId || null,
        resourceId: resourceId || null,
        payloadJson: JSON.stringify(payload),
        createdAt: new Date().toISOString()
      },
      permissions: []
    });
  } catch {
    // Audit logging must not make a valid learner operation fail.
  }
}

async function loadQuestions(kind, phaseId, quizId) {
  const db = appwriteClient();
  const safeKind = String(kind || "");
  if (safeKind === "assessment") {
    if (!phaseConfig(phaseId)) return { error: "Invalid phase.", status: 400 };
    quizId = "assessment-" + String(phaseId);
  } else if (safeKind === "practice") {
    if (String(quizId) !== "python-runtime-v1") return { error: "Unknown practice set.", status: 404 };
  } else {
    return { error: "Invalid question set.", status: 400 };
  }

  const rows = await listRows(db, QUESTIONS_TABLE, [
    Query.equal("quizId", [quizId]),
    Query.equal("version", ["v1"])
  ], 100);

  const questions = rows.map(row => {
    let options = [];
    try { options = JSON.parse(row.optionsJson || "[]"); } catch {}
    return {
      questionId: row.questionId,
      questionText: row.questionText,
      options: Array.isArray(options) ? options : [],
      explanation: safeKind === "practice" ? row.explanation : undefined
    };
  });

  return { quizId, rows, questions };
}

async function submitQuiz(userId, payload) {
  const kind = payload.kind;
  const phaseId = String(payload.phaseId || "");
  const quizId = kind === "assessment" ? "assessment-" + phaseId : String(payload.quizId || "");
  const version = "v1";
  const answers = payload.answers && typeof payload.answers === "object" ? payload.answers : {};
  const elapsedSeconds = Math.max(1, Math.min(86_400, Number.parseInt(payload.elapsedSeconds, 10) || 1));

  if (!allowRate(userId + ":quiz", 10)) return { error: "Too many submissions. Please retry shortly.", status: 429 };

  if (kind === "assessment") {
    if (!phaseConfig(phaseId)) return { error: "Invalid phase.", status: 400 };
    if (!(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) {
      return { error: "Phase is locked.", status: 403 };
    }
  } else if (kind !== "practice") {
    return { error: "Invalid quiz type.", status: 400 };
  }

  const loaded = await loadQuestions(kind, phaseId, quizId);
  if (loaded.error) return loaded;

  const db = appwriteClient();
  const keyRows = await listRows(db, ANSWERS_TABLE, [
    Query.equal("quizId", [loaded.quizId]),
    Query.equal("version", [version]),
    Query.equal("active", [true])
  ], 100);
  const keys = new Map(keyRows.map(row => [row.questionId, Number(row.answerIndex)]));

  for (const q of loaded.questions) {
    if (!keys.has(q.questionId)) return { error: "Assessment configuration is incomplete.", status: 500 };
  }

  const expectedIds = new Set(loaded.questions.map(q => q.questionId));
  const normalizedAnswers = {};
  let score = 0;
  for (const q of loaded.questions) {
    const raw = answers[q.questionId];
    const chosen = Number.isInteger(raw) ? raw : (Number.isFinite(Number(raw)) ? Number(raw) : null);
    const safeChosen = chosen === null || chosen < 0 || chosen >= q.options.length ? null : chosen;
    normalizedAnswers[q.questionId] = safeChosen;
    if (safeChosen !== null && safeChosen === keys.get(q.questionId)) score += 1;
  }

  const extraneous = Object.keys(answers).filter(id => !expectedIds.has(id));
  if (extraneous.length > 0) return { error: "Unknown question id supplied.", status: 400 };

  const maxScore = loaded.questions.length;
  const percent = maxScore ? Math.round((score / maxScore) * 100) : 0;
  const passed = percent >= PASS_PERCENT;
  let canComplete = false;

  if (kind === "assessment") {
    const phase = phaseConfig(phaseId);
    const progressRows = await queryUserPhase(db, PROGRESS_TABLE, userId, phaseId);
    const completed = new Set(progressRows.filter(row => row.status === "completed").map(row => row.lessonId));
    const allLessonsComplete = phase.lessons.every(id => completed.has(id));
    canComplete = passed && allLessonsComplete;

    const attemptId = ID.unique();
    await db.createRow({
      databaseId: DATABASE_ID,
      tableId: ATTEMPTS_TABLE,
      rowId: attemptId,
      data: {
        userId,
        attemptId,
        quizId: loaded.quizId,
        phaseId,
        topic: phase.name,
        score,
        maxScore,
        elapsedSeconds,
        answersJson: JSON.stringify(normalizedAnswers),
        passed,
        questionVersion: version,
        completedAt: new Date().toISOString()
      },
      permissions: []
    });

    if (canComplete && !phase.optional) {
      const ordered = Object.keys(CURRICULUM);
      const index = ordered.indexOf(phaseId);
      if (index >= 0) {
        let cursor = index + 1;
        while (cursor < ordered.length && CURRICULUM[ordered[cursor]].optional) {
          await upsertRow(db, UNLOCK_TABLE, stableId("unlock", userId, ordered[cursor]),
            { userId, phaseId: ordered[cursor], reason: "phase-assessment-complete", sourceAttemptId: attemptId, unlockedAt: new Date().toISOString() });
          cursor += 1;
        }
        if (cursor < ordered.length) {
          await upsertRow(db, UNLOCK_TABLE, stableId("unlock", userId, ordered[cursor]),
            { userId, phaseId: ordered[cursor], reason: "phase-assessment-complete", sourceAttemptId: attemptId, unlockedAt: new Date().toISOString() });
        }
      }
    } else if (canComplete && phase.optional) {
      // Optional phases do not block core progression and therefore do not unlock another phase.
    }

    await audit(db, userId, passed ? "assessment_passed" : "assessment_attempt",
      phaseId, loaded.quizId, { score, maxScore, percent, passed, canComplete });

    return {
      score, maxScore, percent, passed, canComplete,
      allLessonsComplete,
      state: await getState(userId)
    };
  }

  const explanations = loaded.questions.map(q => ({
    questionId: q.questionId,
    explanation: q.explanation || ""
  }));

  const attemptId = ID.unique();
  await db.createRow({
    databaseId: DATABASE_ID,
    tableId: ATTEMPTS_TABLE,
    rowId: attemptId,
    data: {
      userId,
      attemptId,
      quizId: loaded.quizId,
      phaseId: phaseId || "00",
      topic: "Applied practice",
      score,
      maxScore,
      elapsedSeconds,
      answersJson: JSON.stringify(normalizedAnswers),
      passed: score === maxScore,
      questionVersion: version,
      completedAt: new Date().toISOString()
    },
    permissions: []
  });
  await audit(db, userId, "practice_attempt", phaseId || "00", loaded.quizId, { score, maxScore });

  return { score, maxScore, percent, passed: score === maxScore, explanations, state: await getState(userId) };
}

async function saveEvidence(userId, payload) {
  const lessonId = String(payload.lessonId || "");
  const phaseId = String(payload.phaseId || "");
  const phase = phaseConfig(phaseId);
  if (!/^\d{2}-\d{1,3}$/.test(lessonId) || !phase?.lessons.includes(lessonId)) {
    return { error: "Invalid lesson.", status: 400 };
  }
  if (!(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) return { error: "Phase is locked.", status: 403 };
  if (!allowRate(userId + ":evidence", 30)) return { error: "Too many evidence writes. Please retry shortly.", status: 429 };

  const fields = payload.fields && typeof payload.fields === "object" ? payload.fields : {};
  const checks = payload.checks && typeof payload.checks === "object" ? payload.checks : {};
  const safeFields = {};
  for (const key of ["f0", "f1", "f2", "f3"]) safeFields[key] = String(fields[key] || "").slice(0, 4000);
  const safeChecks = {};
  for (const key of Object.keys(checks).slice(0, 20)) safeChecks[key] = Boolean(checks[key]);
  const artifact = String(payload.artifact || "").slice(0, 1000);

  if (Object.values(safeFields).some(value => value.length < 25)) return { error: "Evidence is too short.", status: 400 };
  if (Object.values(safeChecks).some(value => !value)) return { error: "Complete every success criterion.", status: 400 };

  const db = appwriteClient();
  const rowId = stableId("evidence", userId, lessonId);
  await upsertRow(db, EVIDENCE_TABLE, rowId, {
    userId,
    lessonId,
    phaseId,
    evidenceType: "engineering-lab-v1",
    evidenceJson: JSON.stringify({ fields: safeFields, checks: safeChecks, artifact }),
    verified: false,
    submittedAt: new Date().toISOString()
  });
  await audit(db, userId, "lesson_evidence_saved", phaseId, lessonId, { evidenceType: "engineering-lab-v1" });
  return { saved: true };
}

async function completeLesson(userId, payload) {
  const lessonId = String(payload.lessonId || "");
  const phaseId = String(payload.phaseId || "");
  const phase = phaseConfig(phaseId);
  if (!/^\d{2}-\d{1,3}$/.test(lessonId) || !phase?.lessons.includes(lessonId)) return { error: "Invalid lesson.", status: 400 };
  if (!(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) return { error: "Phase is locked.", status: 403 };
  if (!allowRate(userId + ":complete", 30)) return { error: "Too many completion requests. Please retry shortly.", status: 429 };

  const db = appwriteClient();
  const evidenceRows = await listRows(db, EVIDENCE_TABLE, [
    Query.equal("userId", [userId]),
    Query.equal("lessonId", [lessonId]),
    Query.equal("phaseId", [phaseId]),
    Query.equal("evidenceType", ["engineering-lab-v1"])
  ], 10);
  if (!evidenceRows.length) return { error: "Save the lesson evidence before completing the lesson.", status: 400 };

  const rowId = stableId("progress", userId, lessonId);
  await upsertRow(db, PROGRESS_TABLE, rowId, {
    userId,
    lessonId,
    phaseId,
    status: "completed",
    progressPercent: 100,
    completedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  await audit(db, userId, "lesson_completed", phaseId, lessonId, { source: "server-gate" });
  return { saved: true, state: await getState(userId) };
}

async function handle({ req, res, error }) {
  if (req.method === "GET") {
    const auth = await authenticate(req);
    if (auth.error) return fail(res, "AUTHENTICATION_ERROR", auth.error, auth.status);
    const userId = auth.user.id;
    const action = String(req.query?.action || "state");

    if (!allowRate(userId + ":get", action === "questions" ? 60 : 30)) return fail(res, "RATE_LIMITED", "Too many requests. Please retry shortly.", 429);

    if (action === "state") return response(res, await getState(userId));

    if (action === "questions") {
      const kind = String(req.query?.kind || "");
      const phaseId = String(req.query?.phaseId || "");
      const quizId = String(req.query?.quizId || "");
      if (kind === "assessment" && !(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) {
        return fail(res, "PHASE_LOCKED", "Phase is locked.", 403);
      }
      const loaded = await loadQuestions(kind, phaseId, quizId);
      if (loaded.error) return fail(res, "QUESTIONS_ERROR", loaded.error, loaded.status);
      const passPercent = kind === "assessment" ? PASS_PERCENT : undefined;
      const questions = loaded.questions.map(q => ({
        questionId: q.questionId,
        questionText: q.questionText,
        options: q.options
      }));
      const phase = kind === "assessment" ? phaseConfig(phaseId) : null;
      return response(res, {
        ok: true,
        kind,
        quizId: loaded.quizId,
        phaseId: phaseId || "00",
        topic: phase?.name || "Python runtime & package management",
        title: kind === "assessment" ? (phase?.name + " assessment") : "Practice Lab · Reproducible Python environments",
        passPercent,
        questions
      });
    }

    return fail(res, "INVALID_ACTION", "Unknown action.", 400);
  }

  if (req.method === "POST") {
    const auth = await authenticate(req);
    if (auth.error) return fail(res, "AUTHENTICATION_ERROR", auth.error, auth.status);
    const userId = auth.user.id;
    const body = bodyJson(req);
    const action = String(body.action || req.query?.action || "");

    try {
      if (action === "quiz.submit") { const result = await submitQuiz(userId, body); if (result?.error) return fail(res, "REQUEST_REJECTED", result.error, result.status || 400); return response(res, { ok: true, ...result }); }
      if (action === "lesson.evidence") { const result = await saveEvidence(userId, body); if (result?.error) return fail(res, "REQUEST_REJECTED", result.error, result.status || 400); return response(res, { ok: true, ...result }); }
      if (action === "lesson.complete") { const result = await completeLesson(userId, body); if (result?.error) return fail(res, "REQUEST_REJECTED", result.error, result.status || 400); return response(res, { ok: true, ...result }); }
      return fail(res, "INVALID_ACTION", "Unknown action.", 400);
    } catch (e) {
      error("Learner gate operation failed: " + (e?.message || e));
      return fail(res, "INTERNAL_ERROR", "Unable to complete the requested operation.", 500);
    }
  }

  return fail(res, "METHOD_NOT_ALLOWED", "Method not allowed.", 405);
}

export default async (ctx) => {
  try {
    const config = CURRICULUM;
    void config;
    return await handle(ctx);
  } catch (e) {
    ctx.error?.("Learner gate failed: " + (e?.message || e));
    return fail(ctx.res, "INTERNAL_ERROR", "Unable to complete the request.", 500);
  }
};

// Kept separate from the handler so the curriculum is auditable without lesson content.
import { CURRICULUM } from "./curriculum.js";
