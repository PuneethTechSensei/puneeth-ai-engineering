import { Client, Account, TablesDB, Query } from "node-appwrite";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID || "ai-engineering";
const TABLE_ID = process.env.APPWRITE_LESSONS_TABLE_ID || "protected_lessons_v1";

function response(res, body, status = 200) {
  return res.json(body, status, { "Cache-Control": "private, no-store" });
}

export default async ({ req, res, error }) => {
  if (req.method !== "GET") return response(res, { error: "Method not allowed" }, 405);

  const jwt = req.headers["x-appwrite-user-jwt"];
  if (!jwt) return response(res, { error: "Authentication required" }, 401);

  const lessonId = String(req.query?.lessonId || "").trim();
  const version = String(req.query?.version || "v1").trim();

  if (!/^\\d{2}-\\d{1,3}$/.test(lessonId)) return response(res, { error: "Invalid lesson id" }, 400);
  if (!/^[A-Za-z0-9._-]{1,16}$/.test(version)) return response(res, { error: "Invalid version" }, 400);

  try {
    const client = new Client()
      .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setJWT(jwt);

    await new Account(client).get();

    const result = await new TablesDB(client).listRows({
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

    if (!result.rows?.length) return response(res, { error: "Lesson not found" }, 404);

    let content;
    try {
      content = JSON.parse(result.rows[0].payload);
    } catch {
      error("Invalid protected payload: " + lessonId);
      return response(res, { error: "Lesson content unavailable" }, 500);
    }

    return response(res, { lessonId, version, content });
  } catch (e) {
    error("Protected lesson retrieval failed: " + (e?.message || e));
    return response(res, { error: "Unable to retrieve lesson" }, 500);
  }
};