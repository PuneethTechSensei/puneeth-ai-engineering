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

  function parseExecution(execution) {
    let body = {};
    try { body = JSON.parse(execution?.responseBody || '{}'); } catch (_) {}
    return { status: Number(execution?.responseStatusCode || 200), body };
  }

  async function sessionHeaders() {
    const client = window.PuneethAuth?.client?.();
    if (!client) return null;
    try {
      const { data: { session } } = await client.auth.getSession();
      return session?.access_token ? { Authorization: 'Bearer ' + session.access_token } : null;
    } catch (_) {
      return null;
    }
  }

  async function execute(path, method = 'GET', payload = null) {
    if (!functions || !cfg.submitAssessmentFunctionId) return { ok: false, status: 503, error: 'not-configured' };
    const headers = await sessionHeaders();
    if (!headers) return { ok: false, status: 401, error: 'Authentication required' };

    try {
      const execution = await functions.createExecution({
        functionId: cfg.submitAssessmentFunctionId,
        body: method === 'GET' ? '' : JSON.stringify(payload || {}),
        async: false,
        path,
        method,
        headers: method === 'GET' ? headers : { ...headers, 'content-type': 'application/json' }
      });
      const parsed = parseExecution(execution);
      return { ok: parsed.status < 400 && parsed.body?.ok !== false, status: parsed.status, ...parsed.body };
    } catch (error) {
      console.warn('Learner gate request failed:', error);
      return { ok: false, status: 500, error: error?.message || 'request-failed' };
    }
  }

  async function getLearningState() {
    return execute('/?action=state', 'GET');
  }

  async function getAssessmentQuestions(phaseId) {
    return execute('/?action=questions&kind=assessment&phaseId=' + encodeURIComponent(phaseId), 'GET');
  }

  async function getPracticeQuestions(quizId) {
    return execute('/?action=questions&kind=practice&quizId=' + encodeURIComponent(quizId), 'GET');
  }

  async function saveLessonEvidence(payload) {
    return execute('/?action=lesson.evidence', 'POST', payload);
  }

  async function completeLesson(payload) {
    return execute('/?action=lesson.complete', 'POST', payload);
  }

  async function submitQuiz(payload) {
    return execute('/?action=quiz.submit', 'POST', payload);
  }

  async function getProtectedLesson(lessonId, version = 'v1') {
    if (!functions || !cfg.protectedLessonFunctionId) return { ok: false, status: 503, error: 'not-configured' };
    const headers = await sessionHeaders();
    if (!headers) return { ok: false, status: 401, error: 'Authentication required' };

    try {
      const execution = await functions.createExecution({
        functionId: cfg.protectedLessonFunctionId,
        body: '',
        async: false,
        method: 'GET',
        path: '/?lessonId=' + encodeURIComponent(lessonId) + '&version=' + encodeURIComponent(version),
        headers
      });
      const parsed = parseExecution(execution);
      return { ok: parsed.status < 400 && Boolean(parsed.body?.content), status: parsed.status, ...parsed.body };
    } catch (error) {
      console.warn('Protected lesson load failed:', error);
      return { ok: false, status: 500, error: error?.message || 'lesson-load-failed' };
    }
  }

  window.PuneethAppwrite = {
    configured: () => configured,
    getLearningState,
    getAssessmentQuestions,
    getPracticeQuestions,
    saveLessonEvidence,
    completeLesson,
    submitQuiz,
    getProtectedLesson
  };
})();