import { Client, TablesDB, Query } from "node-appwrite";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID || "ai-engineering";
const TABLE_ID = process.env.APPWRITE_LESSONS_TABLE_ID || "protected_lessons_v1";
const UNLOCK_TABLE = process.env.APPWRITE_UNLOCK_TABLE_ID || "phase_unlocks";
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

async function validateSupabaseSession(req) {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) return { error: "Authentication service is not configured.", status: 503 };

  const auth = req.headers?.authorization || req.headers?.Authorization || "";
  const match = /^Bearer\s+(.+)$/i.exec(auth);
  if (!match) return { error: "Authentication required.", status: 401 };

  try {
    const result = await fetch(SUPABASE_URL + "/auth/v1/user", {
      headers: {
        Authorization: "Bearer " + match[1],
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });
    if (!result.ok) return { error: "Authentication required.", status: 401 };
    const user = await result.json().catch(() => null);
    return user?.id ? { user } : { error: "Authentication required.", status: 401 };
  } catch {
    return { error: "Authentication service unavailable.", status: 503 };
  }
}

function appwriteClient() {
  return new TablesDB(
    new Client()
      .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_FUNCTION_API_KEY)
  );
}

export default async ({ req, res, error }) => {
  if (req.method !== "GET") return response(res, { error: "Method not allowed." }, 405);

  const lessonId = String(req.query?.lessonId || "").trim();
  const version = String(req.query?.version || "v1").trim();
  if (!/^\d{2}-\d{1,3}$/.test(lessonId)) return response(res, { error: "Invalid lesson id." }, 400);
  if (!/^[A-Za-z0-9._-]{1,16}$/.test(version)) return response(res, { error: "Invalid version." }, 400);

  const phaseId = lessonId.split("-")[0];
  const numericPhase = Number(phaseId);
  if (numericPhase < 0 || numericPhase > 19) return response(res, { error: "Invalid lesson id." }, 400);

  try {
    const auth = await validateSupabaseSession(req);
    if (auth.error) return response(res, { error: auth.error }, auth.status);

    const userId = auth.user.id;
    if (!allowRate(userId + ":lesson", 30)) return response(res, { error: "Too many requests. Please retry shortly." }, 429);

    const db = appwriteClient();
    if (phaseId !== "00") {
      const unlocks = await db.listRows({
        databaseId: DATABASE_ID,
        tableId: UNLOCK_TABLE,
        queries: [
          Query.equal("userId", [userId]),
          Query.equal("phaseId", [phaseId]),
          Query.limit(1)
        ],
        total: false
      });
      if (!unlocks.rows?.length) return response(res, { error: "Phase is locked." }, 403);
    }

    const result = await db.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [
        Query.equal("lesson_id", [lessonId]),
        Query.equal("version", [version]),
        Query.equal("published", [true]),
        Query.limit(1)
      ],
      total: false
    });

    if (!result.rows?.length) return response(res, { error: "Lesson not found." }, 404);

    let content;
    try {
      content = JSON.parse(result.rows[0].payload);
    } catch {
      error("Invalid protected payload: " + lessonId);
      return response(res, { error: "Lesson content unavailable." }, 500);
    }

    return response(res, { lessonId, version, content });
  } catch (e) {
    error("Protected lesson retrieval failed: " + (e?.message || e));
    return response(res, { error: "Unable to retrieve lesson." }, 500);
  }
};