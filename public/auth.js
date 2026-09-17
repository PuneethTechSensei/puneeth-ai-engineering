(function () {
  const cfg = window.PUNEETH_SUPABASE || {};
  const configured = cfg.url && !cfg.url.includes('YOUR-PROJECT') && cfg.publishableKey && !cfg.publishableKey.includes('YOUR_SUPABASE');
  let supabase = null;
  let syncTimer = null;

  const progressKey = 'puneeth-ai-progress-v2';
  const assessmentKey = 'puneeth-ai-assessments-v1';
  const read = key => JSON.parse(localStorage.getItem(key) || '{}');
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  const emit = (name, detail = {}) => window.dispatchEvent(new CustomEvent(name, { detail }));
  const trackLocal = (name, detail = {}) => {
    try {
      const key = 'puneeth-local-events-v1';
      const events = JSON.parse(localStorage.getItem(key) || '[]');
      events.push({ name, detail, at: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(events.slice(-100)));
    } catch (_) {}
  };

  async function loadCloud(user) {
    if (!supabase || !user) return;
    const { data, error } = await supabase.from('user_progress').select('progress, assessments').eq('user_id', user.id).maybeSingle();
    if (error) { console.warn('Could not load cloud progress:', error.message); return; }
    if (data) {
      const localProgress = read(progressKey);
      const cloudProgress = data.progress || {};
      const localAssessments = read(assessmentKey);
      const cloudAssessments = data.assessments || {};
      write(progressKey, { ...cloudProgress, ...localProgress });
      write(assessmentKey, { ...cloudAssessments, ...localAssessments });
      await syncCloud(user);
      emit('puneeth:cloudloaded');
    } else {
      await syncCloud(user);
    }
  }

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

  async function logEvent(name, detail = {}) {
    trackLocal(name, detail);
    if (!supabase) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const safeDetail = JSON.parse(JSON.stringify(detail || {}));
    const { error } = await supabase.from('user_events').insert({ user_id: user.id, event_name: name, event_data: safeDetail });
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
    if (!configured) {
      setAccountLinks(null);
      emit('puneeth:authready', { configured: false, user: null });
      return;
    }
    if (!window.supabase?.createClient) return;
    supabase = window.supabase.createClient(cfg.url, cfg.publishableKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user || null;
    setAccountLinks(user);
    emit('puneeth:authready', { configured: true, user });
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
  }

  window.PuneethAuth = {
    configured: () => configured,
    client: () => supabase,
    logEvent,
    syncNow: async () => {
      if (!supabase) return;
      const { data: { user } } = await supabase.auth.getUser();
      if (user) await syncCloud(user);
    },
    localEventCount: () => {
      try { return JSON.parse(localStorage.getItem('puneeth-local-events-v1') || '[]').length; } catch (_) { return 0; }
    }
  };

  document.addEventListener('DOMContentLoaded', init);
})();
