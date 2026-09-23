(function () {
  const cfg = window.PUNEETH_APPWRITE || {};
  const configured = Boolean(cfg.endpoint && cfg.projectId && window.Appwrite);
  let functions = null;

  if (configured) {
    const client = new Appwrite.Client().setEndpoint(cfg.endpoint).setProject(cfg.projectId);
    functions = new Appwrite.Functions(client);
  }

  async function sessionHeaders() {
    const sb = window.PuneethAuth?.client?.();
    if (!sb) return null;
    try {
      const { data: { session } = {} } = await sb.auth.getSession();
      return session?.access_token ? { Authorization: "Bearer " + session.access_token } : null;
    } catch (_) { return null; }
  }

  async function execute(functionId, { method = "GET", path = "/", body = "" } = {}) {
    if (!functions || !functionId) return { ok:false, status:503, error:"Learning service is not configured." };
    const headers = await sessionHeaders();
    if (!headers) return { ok:false, status:401, error:"Authentication required" };
    try {
      const execution = await functions.createExecution({
        functionId, body, async:false, method, path,
        headers: body ? { ...headers, "content-type":"application/json" } : headers
      });
      let payload = {};
      try { payload = JSON.parse(execution.responseBody || "{}"); } catch (_) {}
      return { ok: Number(execution.responseStatusCode || 500) < 400 && payload.ok !== false, status:execution.responseStatusCode, ...payload };
    } catch (error) {
      console.warn("Learning service call failed:", error);
      return { ok:false, status:500, error:error?.message || "service-call-failed" };
    }
  }

  async function getLearningState(){ return execute(cfg.submitAssessmentFunctionId,{method:"GET",path:"/?action=state"}); }
  async function getAssessmentQuestions(phaseId){ return execute(cfg.submitAssessmentFunctionId,{method:"GET",path:"/?action=questions&kind=assessment&phaseId="+encodeURIComponent(phaseId)}); }
  async function getPracticeQuestions(quizId){ return execute(cfg.submitAssessmentFunctionId,{method:"GET",path:"/?action=questions&kind=practice&quizId="+encodeURIComponent(quizId)}); }
  async function submitQuiz(payload){ return execute(cfg.submitAssessmentFunctionId,{method:"POST",path:"/",body:JSON.stringify({...payload,action:"quiz.submit"})}); }
  async function saveLessonEvidence(payload){ return execute(cfg.submitAssessmentFunctionId,{method:"POST",path:"/",body:JSON.stringify({...payload,action:"lesson.evidence"})}); }
  async function completeLesson(payload){ return execute(cfg.submitAssessmentFunctionId,{method:"POST",path:"/",body:JSON.stringify({...payload,action:"lesson.complete"})}); }

  async function sendTutorMessage(payload) {
    return execute(cfg.submitAssessmentFunctionId, {
      method:"POST",
      path:"/",
      body:JSON.stringify({...payload,action:"tutor.chat"})
    });
  }

  async function getProtectedLesson(lessonId,version="v1") {
    if (!functions || !cfg.protectedLessonFunctionId) return {ok:false,status:503,error:"Protected lesson service is not configured."};
    const headers=await sessionHeaders();
    if(!headers) return {ok:false,status:401,error:"Authentication required"};
    try {
      const execution=await functions.createExecution({
        functionId:cfg.protectedLessonFunctionId,body:"",async:false,method:"GET",
        path:"/?lessonId="+encodeURIComponent(lessonId)+"&version="+encodeURIComponent(version),headers
      });
      let payload={}; try{payload=JSON.parse(execution.responseBody||"{}")}catch(_){}
      return {ok:Number(execution.responseStatusCode||500)<400 && Boolean(payload.content),status:execution.responseStatusCode,...payload};
    } catch(error) { console.warn("Protected lesson call failed:",error); return {ok:false,status:500,error:error?.message||"protected-lesson-failed"}; }
  }

  window.PuneethAppwrite={configured:()=>configured,getLearningState,getAssessmentQuestions,getPracticeQuestions,submitQuiz,saveLessonEvidence,completeLesson,getProtectedLesson,sendTutorMessage};
})();