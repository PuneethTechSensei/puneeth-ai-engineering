(function () {
  const cfg = window.PUNEETH_APPWRITE || {};
  const configured = Boolean(
    cfg.endpoint &&
    cfg.projectId &&
    cfg.databaseId &&
    window.Appwrite
  );

  let account = null;
  let functions = null;
  let tablesDB = null;

  if (configured) {
    const client = new Appwrite.Client()
      .setEndpoint(cfg.endpoint)
      .setProject(cfg.projectId);

    account = new Appwrite.Account(client);
    functions = new Appwrite.Functions(client);
    tablesDB = new Appwrite.TablesDB(client);
  }

  async function currentUser() {
    if (!account) return null;
    try {
      return await account.get();
    } catch (_) {
      return null;
    }
  }

  async function submitAssessment(payload) {
    const user = await currentUser();
    if (!user || !functions) {
      return { saved: false, reason: "not-authenticated" };
    }

    try {
      const execution = await functions.createExecution({
        functionId: cfg.submitAssessmentFunctionId,
        body: JSON.stringify(payload),
        async: false,
        method: "POST",
        headers: { "content-type": "application/json" }
      });

      let body = null;
      try { body = JSON.parse(execution.responseBody || "{}"); } catch (_) {}

      if (!body?.ok) {
        return {
          saved: false,
          reason: body?.error?.code || "assessment-rejected",
          response: body
        };
      }

      return { saved: true, result: body };
    } catch (error) {
      console.warn("Appwrite assessment submission failed:", error);
      return { saved: false, reason: error?.message || "submission-failed" };
    }
  }

  async function listPublicPracticeQuestions(quizId, version = "v1") {
    if (!tablesDB) return [];
    try {
      const result = await tablesDB.listRows({
        databaseId: cfg.databaseId,
        tableId: cfg.practiceQuestionsTableId,
        queries: [
          Appwrite.Query.equal("quizId", [quizId]),
          Appwrite.Query.equal("version", [version]),
          Appwrite.Query.limit(100)
        ]
      });
      return result.rows || [];
    } catch (error) {
      console.warn("Appwrite practice question load failed:", error);
      return [];
    }
  }

  window.PuneethAppwrite = {
    configured: () => configured,
    currentUser,
    submitAssessment,
    listPublicPracticeQuestions
  };
})();
