(function () {
  const cfg = window.PUNEETH_SUPABASE || {};
  const configured = Boolean(
    cfg.url &&
    !cfg.url.includes('YOUR-PROJECT') &&
    cfg.publishableKey &&
    !cfg.publishableKey.includes('YOUR_SUPABASE')
  );

  let supabase = null;
  let syncTimer = null;
  let resolveReady;
  const readyPromise = new Promise(resolve => { resolveReady = resolve; });

  const progressKey = 'puneeth-ai-progress-v3';
  const assessmentKey = 'puneeth-ai-assessments-v2';
  const oldProgressKey = 'puneeth-ai-progress-v2';
  const oldAssessmentKey = 'puneeth-ai-assessments-v1';

  const read = key => {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch (_) { return {}; }
  };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const emit = (name, detail = {}) => window.dispatchEvent(new CustomEvent(name, { detail }));

  function migrateLocalState() {
    const oldProgress = read(oldProgressKey);
    const currentProgress = read(progressKey);
    if (Object.keys(currentProgress).length === 0 && Object.keys(oldProgress).length) write(progressKey, oldProgress);

    const oldAssessments = read(oldAssessmentKey);
    const currentAssessments = read(assessmentKey);
    if (Object.keys(currentAssessments).length === 0 && Object.keys(oldAssessments).length) write(assessmentKey, oldAssessments);
  }

  const trackLocal = (name, detail = {}) => {
    try {
      const list = Array.isArray(read('puneeth-local-events-v2')) ? read('puneeth-local-events-v2') : [];
      list.push({ name, detail, at: new Date().toISOString() });
      write('puneeth-local-events-v2', list.slice(-100));
    } catch (_) {}
  };

  async function syncCloud(user) {
    if (!supabase || !user) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(async () => {
      const { error } = await supabase.from('user_progress').upsert({
        user_id: user.id,
        progress: read(progressKey),
        assessments: read(assessmentKey),
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
      if (error) console.warn('Cloud progress sync failed:', error.message);
      else emit('puneeth:cloudsynced');
    }, 250);
  }

  async function loadCloud(user) {
    if (!supabase || !user) return;
    const { data, error } = await supabase
      .from('user_progress')
      .select('progress, assessments')
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      console.warn('Could not load cloud progress:', error.message);
      return;
    }

    if (data) {
      const localProgress = read(progressKey);
      const localAssessments = read(assessmentKey);
      write(progressKey, { ...(data.progress || {}), ...localProgress });
      write(assessmentKey, { ...(data.assessments || {}), ...localAssessments });
      await syncCloud(user);
      emit('puneeth:cloudloaded');
    } else {
      await syncCloud(user);
    }
  }

  async function logEvent(name, detail = {}) {
    trackLocal(name, detail);
    if (!supabase) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const safeDetail = JSON.parse(JSON.stringify(detail || {}));
    const { error } = await supabase.from('user_events').insert({
      user_id: user.id,
      event_name: name,
      event_data: safeDetail
    });
    if (error) console.warn('Event logging failed:', error.message);
  }

  function setAccountLinks(user) {
    document.querySelectorAll('[data-account-status]').forEach(el => {
      el.textContent = user ? `Signed in · ${user.email || 'learner'}` : 'Free learner account';
    });
    document.querySelectorAll('[data-account-link]').forEach(el => {
      el.textContent = user ? 'Account' : 'Sign in';
    });
  }

  function injectNavLink() {
    document.querySelectorAll('nav').forEach(nav => {
      if (nav.querySelector('[data-account-link]')) return;
      const a = document.createElement('a');
      a.href = 'account.html';
      a.dataset.accountLink = 'true';
      a.textContent = 'Sign in';
      nav.insertBefore(a, nav.querySelector('#themeBtn') || null);
    });
  }

  async function init() {
    injectNavLink();
    migrateLocalState();

    if (!configured || !window.supabase?.createClient) {
      setAccountLinks(null);
      const state = { configured: false, user: null };
      emit('puneeth:authready', state);
      resolveReady(state);
      return;
    }

    try {
      supabase = window.supabase.createClient(cfg.url, cfg.publishableKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });

      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user || null;
      setAccountLinks(user);
      const readyState = { configured: true, user };
      emit('puneeth:authready', readyState);
      if (user) await loadCloud(user);

      supabase.auth.onAuthStateChange((event, nextSession) => {
        const nextUser = nextSession?.user || null;
        setAccountLinks(nextUser);
        emit('puneeth:authchange', { event, user: nextUser });
        if (nextUser) loadCloud(nextUser);
      });

      window.addEventListener('puneeth:progress', () => {
        supabase.auth.getUser().then(({ data }) => syncCloud(data.user));
      });
      window.addEventListener('puneeth:assessment', () => {
        supabase.auth.getUser().then(({ data }) => syncCloud(data.user));
      });

      resolveReady(readyState);
    } catch (error) {
      console.warn('Supabase initialization failed:', error);
      setAccountLinks(null);
      const state = { configured: false, user: null, reason: 'init-failed' };
      emit('puneeth:authready', state);
      resolveReady(state);
    }
  }

  window.PuneethAuth = {
    configured: () => configured,
    client: () => supabase,
    ready: () => readyPromise,
    logEvent,
    syncNow: async () => {
      if (!supabase) return;
      const { data: { user } } = await supabase.auth.getUser();
      if (user) await syncCloud(user);
    },
    localEventCount: () => {
      const events = read('puneeth-local-events-v2');
      return Array.isArray(events) ? events.length : 0;
    }
  };

  document.addEventListener('DOMContentLoaded', init);
})();