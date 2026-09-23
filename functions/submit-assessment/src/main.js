const sdk = require("node-appwrite");
const { Client, TablesDB, Query, ID } = sdk;
const { createHash } = require("node:crypto");

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
const rateBuckets = new Map();
const RATE_WINDOW_MS = 60_000;

function response(res, body, status = 200) {
  return res.json(body, status, { "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" });
}
function fail(res, code, message, status) { return response(res, { ok: false, error: message, code }, status); }
function allowRate(key, limit) {
  const now = Date.now(), bucket = rateBuckets.get(key);
  if (!bucket || now - bucket.startedAt >= RATE_WINDOW_MS) { rateBuckets.set(key, { startedAt: now, count: 1 }); return true; }
  if (bucket.count >= limit) return false;
  bucket.count += 1; return true;
}
function stableId(...parts) { return createHash("sha256").update(parts.join(":")).digest("hex").slice(0, 32); }
function appwriteClient() {
  return new TablesDB(new Client().setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT).setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID).setKey(process.env.APPWRITE_FUNCTION_API_KEY));
}
async function authenticate(req) {
  const raw = req.headers?.authorization || req.headers?.Authorization || "";
  const match = /^Bearer\s+(.+)$/i.exec(raw);
  if (!match) return { error: "Authentication required.", status: 401 };
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) return { error: "Authentication service is not configured.", status: 503 };
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(SUPABASE_URL)) return { error: "Invalid authentication service.", status: 503 };
  if (!SUPABASE_PUBLISHABLE_KEY.startsWith("sb_publishable_")) return { error: "Invalid authentication key.", status: 503 };
  try {
    const result = await fetch(SUPABASE_URL + "/auth/v1/user", { headers: { Authorization: "Bearer " + match[1], apikey: SUPABASE_PUBLISHABLE_KEY } });
    if (!result.ok) return { error: "Authentication required.", status: 401 };
    const user = await result.json().catch(() => null);
    return user?.id ? { user } : { error: "Authentication required.", status: 401 };
  } catch { return { error: "Authentication service unavailable.", status: 503 }; }
}
function bodyJson(req) {
  if (req.bodyJson && typeof req.bodyJson === "object") return req.bodyJson;
  try { return JSON.parse(req.body || "{}"); } catch { return {}; }
}
function phaseConfig(phaseId) { return CURRICULUM[String(phaseId)] || null; }
async function listRows(db, tableId, queries = [], limit = 500) {
  const result = await db.listRows({ databaseId: DATABASE_ID, tableId, queries: [...queries, Query.limit(limit)], total: false });
  return result.rows || [];
}
async function userPhaseRows(db, tableId, userId, phaseId) {
  return listRows(db, tableId, [Query.equal("userId", [userId]), Query.equal("phaseId", [String(phaseId)])], 100);
}
async function isPhaseUnlocked(db, userId, phaseId) {
  if (String(phaseId) === "00") return true;
  return (await userPhaseRows(db, UNLOCK_TABLE, userId, phaseId)).length > 0;
}
async function getState(userId) {
  const db = appwriteClient();
  const [progress, unlocks, attempts] = await Promise.all([
    listRows(db, PROGRESS_TABLE, [Query.equal("userId", [userId]), Query.equal("status", ["completed"])]),
    listRows(db, UNLOCK_TABLE, [Query.equal("userId", [userId])]),
    listRows(db, ATTEMPTS_TABLE, [Query.equal("userId", [userId]), Query.equal("passed", [true])])
  ]);
  const lessonProgress = {}, passedAssessments = {}, unlocked = new Set(["00"]);
  for (const row of progress) lessonProgress[row.lessonId] = true;
  for (const row of unlocks) unlocked.add(String(row.phaseId));
  for (const row of attempts) if (String(row.quizId || "").startsWith("assessment-") && row.phaseId) passedAssessments[String(row.phaseId)] = true;
  return { ok: true, authenticated: true, lessonProgress, unlockedPhases: [...unlocked].sort(), passedAssessments };
}
async function upsertRow(db, tableId, rowId, data) {
  try { await db.createRow({ databaseId: DATABASE_ID, tableId, rowId, data, permissions: [] }); }
  catch (e) { if (Number(e?.code) !== 409) throw e; await db.updateRow({ databaseId: DATABASE_ID, tableId, rowId, data, permissions: [] }); }
}
async function audit(db, userId, eventType, phaseId, resourceId, payload = {}) {
  try {
    await db.createRow({ databaseId: DATABASE_ID, tableId: AUDIT_TABLE, rowId: ID.unique(), data: { userId, eventType, phaseId: phaseId || null, resourceId: resourceId || null, payloadJson: JSON.stringify(payload), createdAt: new Date().toISOString() }, permissions: [] });
  } catch {}
}
async function loadQuestions(kind, phaseId, quizId) {
  const db = appwriteClient();
  if (kind === "assessment") { if (!phaseConfig(phaseId)) return { error: "Invalid phase.", status: 400 }; quizId = "assessment-" + phaseId; }
  else if (kind === "practice") { if (quizId !== "python-runtime-v1") return { error: "Unknown practice set.", status: 404 }; }
  else return { error: "Invalid question set.", status: 400 };
  const rows = await listRows(db, QUESTIONS_TABLE, [Query.equal("quizId", [quizId]), Query.equal("version", ["v1"]), Query.orderAsc("questionId")], 100);
  if (!rows.length) return { error: "Question set is empty.", status: 404 };
  const questions = rows.map(row => {
    let options = []; try { options = JSON.parse(row.optionsJson || "[]"); } catch {}
    return { questionId: row.questionId, questionText: row.questionText, options: Array.isArray(options) ? options : [], explanation: kind === "practice" ? row.explanation : undefined };
  });
  return { quizId, rows, questions };
}
async function submitQuiz(userId, payload) {
  const kind = String(payload.kind || ""), phaseId = String(payload.phaseId || ""), quizId = kind === "assessment" ? "assessment-" + phaseId : String(payload.quizId || "");
  const answers = payload.answers && typeof payload.answers === "object" ? payload.answers : {};
  const elapsedSeconds = Math.max(1, Math.min(86400, Number.parseInt(payload.elapsedSeconds, 10) || 1));
  if (!allowRate(userId + ":quiz", 10)) return { error: "Too many submissions. Please retry shortly.", status: 429 };
  if (kind === "assessment") {
    if (!phaseConfig(phaseId)) return { error: "Invalid phase.", status: 400 };
    if (!(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) return { error: "Phase is locked.", status: 403 };
  } else if (kind !== "practice") return { error: "Invalid quiz type.", status: 400 };

  const loaded = await loadQuestions(kind, phaseId, quizId);
  if (loaded.error) return loaded;
  const db = appwriteClient();
  const keyRows = await listRows(db, ANSWERS_TABLE, [Query.equal("quizId", [loaded.quizId]), Query.equal("version", ["v1"]), Query.equal("active", [true])], 100);
  const keys = new Map(keyRows.map(row => [row.questionId, Number(row.answerIndex)]));
  for (const q of loaded.questions) {
    if (!keys.has(q.questionId) || !Number.isInteger(keys.get(q.questionId)) || keys.get(q.questionId) < 0 || keys.get(q.questionId) >= q.options.length) return { error: "Assessment configuration is incomplete.", status: 500 };
  }
  const expected = new Set(loaded.questions.map(q => q.questionId));
  if (Object.keys(answers).some(id => !expected.has(id))) return { error: "Unknown question id supplied.", status: 400 };
  const normalizedAnswers = {}; let score = 0;
  for (const q of loaded.questions) {
    const value = Number(answers[q.questionId]), chosen = Number.isInteger(value) && value >= 0 && value < q.options.length ? value : null;
    normalizedAnswers[q.questionId] = chosen;
    if (chosen !== null && chosen === keys.get(q.questionId)) score += 1;
  }
  const maxScore = loaded.questions.length, percent = Math.round((score / maxScore) * 100), passed = percent >= PASS_PERCENT;

  if (kind === "assessment") {
    const phase = phaseConfig(phaseId);
    const progress = await userPhaseRows(db, PROGRESS_TABLE, userId, phaseId);
    const completed = new Set(progress.filter(row => row.status === "completed").map(row => row.lessonId));
    const allLessonsComplete = phase.lessons.every(id => completed.has(id));
    const canComplete = passed && allLessonsComplete;
    const attemptId = ID.unique();
    await db.createRow({ databaseId: DATABASE_ID, tableId: ATTEMPTS_TABLE, rowId: attemptId, data: { userId, attemptId, quizId: loaded.quizId, phaseId, topic: phase.name, score, maxScore, elapsedSeconds, answersJson: JSON.stringify(normalizedAnswers), passed, questionVersion: "v1", completedAt: new Date().toISOString() }, permissions: [] });
    if (canComplete && !phase.optional) {
      const ordered = Object.keys(CURRICULUM), index = ordered.indexOf(phaseId);
      let cursor = index + 1;
      while (cursor < ordered.length && CURRICULUM[ordered[cursor]].optional) {
        const nextPhase = ordered[cursor];
        await upsertRow(db, UNLOCK_TABLE, stableId("unlock", userId, nextPhase), { userId, phaseId: nextPhase, reason: "phase-assessment-complete", sourceAttemptId: attemptId, unlockedAt: new Date().toISOString() });
        cursor += 1;
      }
      if (cursor < ordered.length) {
        const nextPhase = ordered[cursor];
        await upsertRow(db, UNLOCK_TABLE, stableId("unlock", userId, nextPhase), { userId, phaseId: nextPhase, reason: "phase-assessment-complete", sourceAttemptId: attemptId, unlockedAt: new Date().toISOString() });
      }
    }
    await audit(db, userId, passed ? "assessment_passed" : "assessment_attempt", phaseId, loaded.quizId, { score, maxScore, percent, passed, canComplete });
    return { score, maxScore, percent, passed, allLessonsComplete, canComplete, state: await getState(userId) };
  }

  const explanations = loaded.questions.map(q => ({ questionId: q.questionId, explanation: q.explanation || "" }));
  const attemptId = ID.unique();
  await db.createRow({ databaseId: DATABASE_ID, tableId: ATTEMPTS_TABLE, rowId: attemptId, data: { userId, attemptId, quizId: loaded.quizId, phaseId: phaseId || "00", topic: "Applied practice", score, maxScore, elapsedSeconds, answersJson: JSON.stringify(normalizedAnswers), passed: score === maxScore, questionVersion: "v1", completedAt: new Date().toISOString() }, permissions: [] });
  await audit(db, userId, "practice_attempt", phaseId || "00", loaded.quizId, { score, maxScore });
  return { score, maxScore, percent, passed: score === maxScore, explanations, state: await getState(userId) };
}
async function saveEvidence(userId, payload) {
  const lessonId = String(payload.lessonId || ""), phaseId = String(payload.phaseId || ""), phase = phaseConfig(phaseId);
  if (!/^\d{2}-\d{1,3}$/.test(lessonId) || !phase?.lessons.includes(lessonId)) return { error: "Invalid lesson.", status: 400 };
  if (!(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) return { error: "Phase is locked.", status: 403 };
  if (!allowRate(userId + ":evidence", 30)) return { error: "Too many evidence writes. Please retry shortly.", status: 429 };
  const fields = payload.fields && typeof payload.fields === "object" ? payload.fields : {}, checks = payload.checks && typeof payload.checks === "object" ? payload.checks : {};
  const safeFields = {}, safeChecks = {};
  for (const key of ["f0","f1","f2","f3"]) safeFields[key] = String(fields[key] || "").slice(0, 4000);
  for (const key of Object.keys(checks).slice(0, 20)) safeChecks[key] = Boolean(checks[key]);
  if (Object.values(safeFields).some(v => v.length < 25)) return { error: "Evidence is too short.", status: 400 };
  if (Object.values(safeChecks).some(v => !v)) return { error: "Complete every success criterion.", status: 400 };
  const db = appwriteClient();
  await upsertRow(db, EVIDENCE_TABLE, stableId("evidence", userId, lessonId), { userId, lessonId, phaseId, evidenceType: "engineering-lab-v1", evidenceJson: JSON.stringify({ fields: safeFields, checks: safeChecks, artifact: String(payload.artifact || "").slice(0,1000) }), verified: false, submittedAt: new Date().toISOString() });
  await audit(db, userId, "lesson_evidence_saved", phaseId, lessonId, { evidenceType: "engineering-lab-v1" });
  return { saved: true };
}
async function completeLesson(userId, payload) {
  const lessonId = String(payload.lessonId || ""), phaseId = String(payload.phaseId || ""), phase = phaseConfig(phaseId);
  if (!/^\d{2}-\d{1,3}$/.test(lessonId) || !phase?.lessons.includes(lessonId)) return { error: "Invalid lesson.", status: 400 };
  if (!(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) return { error: "Phase is locked.", status: 403 };
  if (!allowRate(userId + ":complete", 30)) return { error: "Too many completion requests. Please retry shortly.", status: 429 };
  const db = appwriteClient();
  const evidence = await listRows(db, EVIDENCE_TABLE, [Query.equal("userId",[userId]), Query.equal("lessonId",[lessonId]), Query.equal("phaseId",[phaseId]), Query.equal("evidenceType",["engineering-lab-v1"])], 5);
  if (!evidence.length) return { error: "Save the lesson evidence before completing the lesson.", status: 400 };
  await upsertRow(db, PROGRESS_TABLE, stableId("progress", userId, lessonId), { userId, lessonId, phaseId, status: "completed", progressPercent: 100, completedAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  await audit(db, userId, "lesson_completed", phaseId, lessonId, { source: "server-gate" });
  return { saved: true, state: await getState(userId) };
}
async function handle(ctx) {
  const { req, res, error } = ctx;
  const auth = await authenticate(req);
  if (auth.error) return fail(res, "AUTHENTICATION_ERROR", auth.error, auth.status);
  const userId = auth.user.id;
  if (!allowRate(userId + ":request", 60)) return fail(res, "RATE_LIMITED", "Too many requests. Please retry shortly.", 429);

  if (req.method === "GET") {
    const action = String(req.query?.action || "state");
    if (action === "state") return response(res, await getState(userId));
    if (action === "questions") {
      const kind = String(req.query?.kind || ""), phaseId = String(req.query?.phaseId || ""), quizId = String(req.query?.quizId || "");
      if (kind === "assessment" && !(await isPhaseUnlocked(appwriteClient(), userId, phaseId))) return fail(res, "PHASE_LOCKED", "Phase is locked.", 403);
      const loaded = await loadQuestions(kind, phaseId, quizId);
      if (loaded.error) return fail(res, "QUESTIONS_ERROR", loaded.error, loaded.status);
      return response(res, { ok: true, kind, quizId: loaded.quizId, phaseId: phaseId || "00", topic: kind === "assessment" ? phaseConfig(phaseId).name : "Applied practice", title: kind === "assessment" ? phaseConfig(phaseId).name + " assessment" : "Practice Lab · Reproducible Python environments", passPercent: kind === "assessment" ? PASS_PERCENT : undefined, questions: loaded.questions.map(q => ({ questionId:q.questionId, questionText:q.questionText, options:q.options })) });
    }
    return fail(res, "INVALID_ACTION", "Unknown action.", 400);
  }
  if (req.method === "POST") {
    const body = bodyJson(req), action = String(body.action || req.query?.action || "");
    try {
      if (action === "quiz.submit") { const result = await submitQuiz(userId, body); return result.error ? fail(res, "REQUEST_REJECTED", result.error, result.status || 400) : response(res, { ok:true, ...result }); }
      if (action === "lesson.evidence") { const result = await saveEvidence(userId, body); return result.error ? fail(res, "REQUEST_REJECTED", result.error, result.status || 400) : response(res, { ok:true, ...result }); }
      if (action === "lesson.complete") { const result = await completeLesson(userId, body); return result.error ? fail(res, "REQUEST_REJECTED", result.error, result.status || 400) : response(res, { ok:true, ...result }); }
      return fail(res, "INVALID_ACTION", "Unknown action.", 400);
    } catch (e) { error?.("Learner gate operation failed: " + (e?.message || e)); return fail(res, "INTERNAL_ERROR", "Unable to complete the requested operation.", 500); }
  }
  return fail(res, "METHOD_NOT_ALLOWED", "Method not allowed.", 405);
}
let curriculum = {};
try { curriculum = require("./curriculum.js").CURRICULUM; } catch {}
const CURRICULUM = curriculum;
module.exports = async (ctx) => {
  try { return await handle(ctx); }
  catch (e) { ctx.error?.("Learner gate failed: " + (e?.message || e)); return fail(ctx.res, "INTERNAL_ERROR", "Unable to complete the request.", 500); }
};