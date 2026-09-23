(function () {
  const cfg = window.PUNEETH_APPWRITE || {};
  const configured = Boolean(cfg.endpoint && cfg.projectId && window.Appwrite);
  let functions = null;
  let tablesDB = null;

  if (configured) {
    const client = new Appwrite.Client()
      .setEndpoint(cfg.endpoint)
      .setProject(cfg.projectId);
    functions = new Appwrite.Functions(client);
    tablesDB = new Appwrite.TablesDB(client);
  }

  async function supabaseHeaders() {
    const sb = window.PuneethAuth?.client?.();
    const supabaseCfg = window.PUNEETH_SUPABASE || {};
    if (!sb) return { ok:false, reason:"not-authenticated" };
    const { data: { session } = {} } = await sb.auth.getSession();
    if (!session?.access_token) return { ok:false, reason:"not-authenticated" };
    if (!supabaseCfg.url || !supabaseCfg.publishableKey) return { ok:false, reason:"supabase-not-configured" };
    return {
      ok:true,
      headers:{
        Authorization:"Bearer " + session.access_token,
        "x-supabase-url":supabaseCfg.url,
        "x-supabase-publishable-key":supabaseCfg.publishableKey
      }
    };
  }

  async function executeFunction(functionId,{method="POST",path="/",body="",auth=true}={}) {
    if (!functions || !functionId) return { ok:false, reason:"not-configured" };
    const headers={};
    if (body) headers["content-type"]="application/json";
    if (auth) {
      const authResult=await supabaseHeaders();
      if (!authResult.ok) return authResult;
      Object.assign(headers,authResult.headers);
    }
    try {
      const execution=await functions.createExecution({
        functionId, body, async:false, method, path, headers
      });
      let responseBody={};
      try { responseBody=JSON.parse(execution.responseBody||"{}"); } catch (_) {}
      return { ok:execution.responseStatusCode<400, status:execution.responseStatusCode, ...responseBody };
    } catch (error) {
      console.warn("Appwrite function execution failed:",error);
      return { ok:false, reason:error?.message||"execution-failed" };
    }
  }

  async function currentUser() {
    const sb=window.PuneethAuth?.client?.();
    if (!sb) return null;
    try { const {data:{user}}=await sb.auth.getUser(); return user||null; } catch (_) { return null; }
  }

  async function getProtectedLesson(lessonId,version="v1") {
    return executeFunction(cfg.protectedLessonFunctionId,{
      method:"GET",
      path:"/?lessonId="+encodeURIComponent(lessonId)+"&version="+encodeURIComponent(version),
      auth:true
    }).then(r=>r.ok?{ok:true,content:r.content}:r);
  }

  async function completeLesson(lessonId) {
    return executeFunction(cfg.learnerProgressFunctionId,{
      body:JSON.stringify({lessonId,status:"completed"}),
      method:"POST",
      path:"/",
      auth:true
    }).then(r=>r.ok?{ok:true,progress:r.progress||null}:r);
  }

  async function submitAssessment(payload) {
    return executeFunction(cfg.submitAssessmentFunctionId,{
      body:JSON.stringify(payload),
      method:"POST",
      path:"/",
      auth:true
    }).then(r=>r.ok?{ok:true,...r}:r);
  }

  async function listPublicPracticeQuestions(quizId,version="v1") {
    if (!tablesDB || !cfg.practiceQuestionsTableId) return [];
    try {
      const result=await tablesDB.listRows({
        databaseId:cfg.databaseId,
        tableId:cfg.practiceQuestionsTableId,
        queries:[
          Appwrite.Query.equal("quizId",[quizId]),
          Appwrite.Query.equal("version",[version]),
          Appwrite.Query.limit(100)
        ],
        total:false
      });
      return result.rows||[];
    } catch(error) {
      console.warn("Public practice question load failed:",error);
      return [];
    }
  }

  window.PuneethAppwrite={
    configured:()=>configured,
    currentUser,
    getProtectedLesson,
    completeLesson,
    submitAssessment,
    listPublicPracticeQuestions
  };
})();