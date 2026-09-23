(function () {
  const cfg = window.PUNEETH_APPWRITE || {};
  const configured = Boolean(cfg.endpoint && cfg.projectId && window.Appwrite);
  let functions = null;

  if (configured) {
    const client = new Appwrite.Client()
      .setEndpoint(cfg.endpoint)
      .setProject(cfg.projectId);
    functions = new Appwrite.Functions(client);
  }

  async function supabaseAuthHeaders() {
    const sb = window.PuneethAuth?.client?.();
    const supabaseCfg = window.PUNEETH_SUPABASE || {};
    if (!sb) return { ok:false, reason:"not-authenticated" };
    const { data:{session} = {} } = await sb.auth.getSession();
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

  async function callGate({method="GET",path="/",body=""}={}) {
    if (!functions || !cfg.submitAssessmentFunctionId) return {ok:false,error:"Learning service is not configured."};
    const auth=await supabaseAuthHeaders();
    if (!auth.ok) return auth;
    const headers={...auth.headers};
    if (body) headers["content-type"]="application/json";
    try {
      const execution=await functions.createExecution({
        functionId:cfg.submitAssessmentFunctionId,
        body,
        async:false,
        method,
        path,
        headers
      });
      let payload={};
      try { payload=JSON.parse(execution.responseBody||"{}"); } catch (_) {}
      return {ok:execution.responseStatusCode<400,status:execution.responseStatusCode,...payload};
    } catch (error) {
      console.warn("Learning service call failed:",error);
      return {ok:false,error:error?.message||"service-call-failed"};
    }
  }

  async function currentUser() {
    const sb=window.PuneethAuth?.client?.();
    if (!sb) return null;
    try { const {data:{user}}=await sb.auth.getUser(); return user||null; } catch (_) { return null; }
  }

  function configured(){ return configured; }

  async function getLearningState() {
    return callGate({method:"GET",path:"/?action=state"});
  }

  async function getProtectedLesson(lessonId,version="v1") {
    if (!cfg.protectedLessonFunctionId) return {ok:false,error:"Protected lesson service is not configured."};
    const auth=await supabaseAuthHeaders();
    if (!auth.ok) return auth;
    if (!functions) return {ok:false,error:"Appwrite is not configured."};
    try {
      const execution=await functions.createExecution({
        functionId:cfg.protectedLessonFunctionId,
        body:"",
        async:false,
        method:"GET",
        path:"/?lessonId="+encodeURIComponent(lessonId)+"&version="+encodeURIComponent(version),
        headers:auth.headers
      });
      let payload={};
      try { payload=JSON.parse(execution.responseBody||"{}"); } catch (_) {}
      return {ok:execution.responseStatusCode<400,status:execution.responseStatusCode,...payload};
    } catch (error) {
      console.warn("Protected lesson call failed:",error);
      return {ok:false,error:error?.message||"protected-lesson-failed"};
    }
  }

  async function getAssessmentQuestions(phaseId) {
    return callGate({method:"GET",path:"/?action=questions&kind=assessment&phaseId="+encodeURIComponent(phaseId)});
  }

  async function getPracticeQuestions(quizId) {
    return callGate({method:"GET",path:"/?action=questions&kind=practice&quizId="+encodeURIComponent(quizId)});
  }

  async function submitQuiz(payload) {
    return callGate({method:"POST",path:"/",body:JSON.stringify({...payload,action:"quiz.submit"})});
  }

  async function saveLessonEvidence(payload) {
    return callGate({method:"POST",path:"/",body:JSON.stringify({...payload,action:"lesson.evidence"})});
  }

  async function completeLesson(payload) {
    const body=typeof payload==="string"?{lessonId:payload}:payload||{};
    return callGate({method:"POST",path:"/",body:JSON.stringify({...body,action:"lesson.complete"})});
  }

  window.PuneethAppwrite={
    configured,
    currentUser,
    getLearningState,
    getProtectedLesson,
    getAssessmentQuestions,
    getPracticeQuestions,
    submitQuiz,
    saveLessonEvidence,
    completeLesson
  };
})();