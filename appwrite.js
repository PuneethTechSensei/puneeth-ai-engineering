(function () {
  const cfg = window.PUNEETH_APPWRITE || {};
  const configured = Boolean(cfg.endpoint && cfg.projectId && cfg.databaseId && window.Appwrite);
  let functions = null;
  let tablesDB = null;

  if (configured) {
    const client = new Appwrite.Client().setEndpoint(cfg.endpoint).setProject(cfg.projectId);
    functions = new Appwrite.Functions(client);
    tablesDB = new Appwrite.TablesDB(client);
  }

  async function authHeaders() {
    const sb = window.PuneethAuth?.client?.();
    const supabaseCfg = window.PUNEETH_SUPABASE || {};
    if (!sb) return { ok:false, reason:"not-authenticated" };
    const { data:{session} = {} } = await sb.auth.getSession();
    if (!session?.access_token) return { ok:false, reason:"not-authenticated" };
    if (!supabaseCfg.url || !supabaseCfg.publishableKey) return { ok:false, reason:"supabase-not-configured" };
    return {
      ok:true,
      headers:{
        Authorization:"Bearer "+session.access_token,
        "x-supabase-url":supabaseCfg.url,
        "x-supabase-publishable-key":supabaseCfg.publishableKey
      }
    };
  }

  async function execute(functionId,{method="POST",path="/",body="",auth=true}={}) {
    if (!functions || !functionId) return { ok:false, reason:"not-configured" };
    const headers={};
    if (body) headers["content-type"]="application/json";
    if (auth) {
      const a=await authHeaders();
      if (!a.ok) return a;
      Object.assign(headers,a.headers);
    }
    try {
      const execution=await functions.createExecution({
        functionId, body, async:false, method, path, headers
      });
      let payload={};
      try { payload=JSON.parse(execution.responseBody||"{}"); } catch (_) {}
      return { ok:execution.responseStatusCode<400, status:execution.responseStatusCode, ...payload };
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

  async function getLearningState() {
    return execute(cfg.learningStateFunctionId,{method:"GET",path:"/",auth:true});
  }

  async function getProtectedLesson(lessonId,version="v1") {
    return execute(cfg.protectedLessonFunctionId,{
      method:"GET",
      path:"/?lessonId="+encodeURIComponent(lessonId)+"&version="+encodeURIComponent(version),
      auth:true
    });
  }

  async function getAssessmentQuestions(phaseId) {
    const quizId="phase-"+phaseId+"-assessment-v1";
    const rows=await listPublicPracticeQuestions(quizId,"v1");
    const questions=rows.map(r=>{
      const d=r.data||r;
      let options=[]; try { options=JSON.parse(d.optionsJson||"[]"); } catch (_) {}
      return {questionId:d.questionId,questionText:d.questionText,options};
    }).sort((a,b)=>String(a.questionId).localeCompare(String(b.questionId)));
    return questions.length ? {ok:true,questions,passPercent:80} : {ok:false,error:"Assessment not found"};
  }

  async function submitQuiz(payload) {
    return execute(cfg.submitAssessmentFunctionId,{
      body:JSON.stringify(payload),
      method:"POST",
      path:"/",
      auth:true
    });
  }

  async function saveLessonEvidence(payload) {
    return execute(cfg.lessonEvidenceFunctionId,{
      body:JSON.stringify(payload),
      method:"POST",
      path:"/",
      auth:true
    });
  }

  async function completeLesson(payload) {
    const body=typeof payload==="string"?{lessonId:payload}:payload||{};
    return execute(cfg.learnerProgressFunctionId,{
      body:JSON.stringify(body),
      method:"POST",
      path:"/",
      auth:true
    });
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
    } catch (error) {
      console.warn("Public assessment question load failed:",error);
      return [];
    }
  }

  window.PuneethAppwrite={
    configured:()=>configured,
    currentUser,
    getLearningState,
    getProtectedLesson,
    getAssessmentQuestions,
    submitQuiz,
    saveLessonEvidence,
    completeLesson,
    listPublicPracticeQuestions
  };
})();