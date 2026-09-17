(function(){
  const progressKey='puneeth-ai-progress-v2';
  const assessmentKey='puneeth-ai-assessments-v1';
  const getProgress=()=>JSON.parse(localStorage.getItem(progressKey)||'{}');
  const saveProgress=p=>{localStorage.setItem(progressKey,JSON.stringify(p));window.dispatchEvent(new CustomEvent('puneeth:progress',{detail:{progress:p}}));};
  const getAssessments=()=>JSON.parse(localStorage.getItem(assessmentKey)||'{}');
  const saveAssessments=p=>{localStorage.setItem(assessmentKey,JSON.stringify(p));window.dispatchEvent(new CustomEvent('puneeth:assessment',{detail:{assessments:p}}));};
  const completedLessons=phase=>phase[3].filter((_,i)=>getProgress()[`${phase[0]}-${i+1}`]).length;
  const assessmentPassed=id=>getAssessments()[id]===true;
  const phaseComplete=id=>{const p=phases.find(x=>x[0]===id);return !!p && completedLessons(p)===p[3].length && assessmentPassed(id)};
  const previousPhase=id=>{const i=phases.findIndex(p=>p[0]===id);return i>0?phases[i-1]:null};
  const phaseUnlocked=id=>{const prev=previousPhase(id);return !prev || phaseComplete(prev[0]);};
  const overallStats=()=>{const total=phases.reduce((n,p)=>n+p[3].length,0);const done=Object.values(getProgress()).filter(Boolean).length;const unlocked=phases.filter(p=>phaseUnlocked(p[0])).length;return {total,done,unlocked,percent:Math.round(done/total*100)}};

  const themeBtn=document.getElementById('themeBtn');
  if(themeBtn){const t=localStorage.getItem('puneeth-theme');if(t)document.documentElement.dataset.theme=t;themeBtn.onclick=()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('puneeth-theme',next)}}

  const navStats=document.getElementById('navStats');
  if(navStats){const s=overallStats();navStats.textContent=`${s.percent}% complete`;}

  const dashboardStats=document.getElementById('dashboardStats');
  const getCurrentPhase=()=>{
    const unlocked=phases.filter(p=>phaseUnlocked(p[0]));
    const active=unlocked.find(p=>!phaseComplete(p[0]));
    return active || phases[phases.length-1];
  };
  if(dashboardStats){
    const s=overallStats();
    const active=getCurrentPhase();
    const activeDone=completedLessons(active);
    const activePct=Math.round(activeDone/active[3].length*100);
    dashboardStats.innerHTML=`<div class="dashboard-stat"><span class="stat-value">${s.percent}%</span><span class="stat-label">Course complete</span><span class="stat-note">Keep your streak moving</span></div><div class="dashboard-stat"><span class="stat-value">${s.done}</span><span class="stat-label">Lessons complete</span><span class="stat-note">Across ${phases.length} phases</span></div><div class="dashboard-stat"><span class="stat-value">${s.unlocked}/${phases.length}</span><span class="stat-label">Phases unlocked</span><span class="stat-note">Next unlock follows your assessment</span></div><div class="dashboard-stat"><span class="stat-value">${activePct}%</span><span class="stat-label">Current phase</span><span class="stat-note">${active[1]}</span></div>`;
    const ring=document.querySelector('.orb-ring'); if(ring) ring.style.setProperty('--progress',`${s.percent}%`);
    const hp=document.getElementById('heroPercent'); if(hp) hp.textContent=`${s.percent}%`;
    const hphase=document.getElementById('heroPhase'); if(hphase) hphase.textContent=`Phase ${active[0]}`;
    const htitle=document.getElementById('heroPhaseTitle'); if(htitle) htitle.textContent=active[1];
    const pill=document.getElementById('continuePill'); if(pill) pill.textContent=`PHASE ${active[0]}`;
    const title=document.getElementById('continueTitle'); if(title) title.textContent=active[1];
    const desc=document.getElementById('continueDescription'); if(desc) desc.textContent=active[2];
    const count=document.getElementById('continueCount'); if(count) count.textContent=`${activeDone} / ${active[3].length} lessons`;
    const pct=document.getElementById('continuePercent'); if(pct) pct.textContent=`${activePct}%`;
    const bar=document.getElementById('continueBar'); if(bar) bar.style.width=`${activePct}%`;
    const btn=document.getElementById('continueBtn'); if(btn) btn.href=`curriculum.html#phase-${active[0]}`;
  }

  const journey=document.getElementById('journey');
  if(journey){journey.innerHTML=phases.map((p,i)=>{const done=completedLessons(p),complete=phaseComplete(p[0]),unlocked=phaseUnlocked(p[0]);return `<div class="journey-row ${complete?'journey-complete':''}"><span class="journey-num">${complete?'✓':p[0]}</span><div class="journey-copy"><b>${p[1]}</b><span>${p[2]}</span><small>${done}/${p[3].length} lessons ${complete?'· Complete':unlocked?'· Available':'· Locked'}</small></div><a class="btn" href="curriculum.html#phase-${p[0]}">${i===0?'Start':unlocked?'Open':'Preview'} →</a></div>`}).join('');}

  const cloudStatus=document.getElementById('cloudStatus');
  if(cloudStatus){
    const setCloudStatus=(text)=>{cloudStatus.textContent=text;};
    window.addEventListener('puneeth:authready',e=>{setCloudStatus(e.detail?.user?'Your progress is synced to your free account.':'Your progress is currently saved in this browser. Create a free account if you want optional cloud sync.');});
    window.addEventListener('puneeth:authchange',e=>{setCloudStatus(e.detail?.user?'Your progress is synced to your free account.':'Your progress is currently saved in this browser. Create a free account if you want optional cloud sync.');});
    window.addEventListener('puneeth:cloudsynced',()=>setCloudStatus('Your progress is synced to your free account.'));
  }

  const grid=document.getElementById('phaseGrid');
  if(grid){grid.innerHTML=phases.map(p=>{const done=completedLessons(p), complete=phaseComplete(p[0]), unlocked=phaseUnlocked(p[0]);return `<a class="phase-card ${!unlocked?'locked':''}" href="curriculum.html#phase-${p[0]}"><span class="phase-num">${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p><div class="card-meta">${done}/${p[3].length} lessons ${complete?'· ✓ complete':!unlocked?'· 🔒 locked':''}</div></a>`}).join('')}

  const list=document.getElementById('curriculumList');
  if(list){
    const search=document.getElementById('search'), status=document.getElementById('status');
    const render=()=>{const q=(search?.value||'').toLowerCase();const st=status?.value||'all';const prog=getProgress();
      list.innerHTML=phases.map(p=>{
        const done=completedLessons(p), unlocked=phaseUnlocked(p[0]), complete=phaseComplete(p[0]);
        const matches=p[3].map((title,i)=>({id:`${p[0]}-${i+1}`,title})).filter(x=>(`${p[1]} ${p[2]} ${x.title}`).toLowerCase().includes(q)).filter(x=>st==='all'||(st==='done'?prog[x.id]:!prog[x.id]));
        if(!matches.length)return '';
        return `<section class="phase-block ${!unlocked?'is-locked':''}" id="phase-${p[0]}">
          <div class="phase-title"><div><div class="eyebrow">PHASE ${p[0]} ${complete?'· COMPLETE':!unlocked?'· LOCKED':''}</div><h2>${p[1]}</h2></div><div class="phase-summary"><small>${p[2]}</small><strong>${done}/${p[3].length} lessons</strong></div></div>
          ${!unlocked?`<div class="lock-banner"><span>🔒</span><div><b>Complete the previous phase first.</b><p>Preview the phase now, but lessons unlock after the previous phase's lessons and assessment are complete.</p></div><a class="btn" href="lesson.html?id=${p[0]}-1&preview=1">Preview phase →</a></div>`:''}
          <div class="lessons">${matches.map((x,j)=>`<div class="lesson-row ${prog[x.id]?'done':''} ${!unlocked?'disabled':''}"><span class="idx">${String(j+1).padStart(2,'0')}</span>${unlocked?`<a class="title" href="lesson.html?id=${x.id}">${x.title}</a>`:`<a class="title" href="lesson.html?id=${x.id}&preview=1">${x.title}</a>`}<label class="tag"><input class="check" type="checkbox" data-id="${x.id}" ${prog[x.id]?'checked':''} ${!unlocked?'disabled':''}> ${prog[x.id]?'done':'complete'}</label></div>`).join('')}</div>
          <div class="phase-footer"><span>${complete?'✓ Assessment passed':'Assessment required to unlock the next phase'}</span><a href="assessment.html?phase=${p[0]}">${complete?'Review assessment':'Take assessment →'}</a></div>
        </section>`;
      }).join('')||'<div class="no-results">No lessons match that search.</div>';
      document.querySelectorAll('.check').forEach(c=>c.onchange=()=>{const p=getProgress();if(c.checked)p[c.dataset.id]=1;else delete p[c.dataset.id];saveProgress(p);render()});
    };
    search?.addEventListener('input',render);status?.addEventListener('change',render);render();
  }

  const gloss=document.getElementById('glossary');
  if(gloss){const input=document.getElementById('glossarySearch');const render=()=>{const q=(input?.value||'').toLowerCase();gloss.innerHTML=glossary.filter(x=>x.join(' ').toLowerCase().includes(q)).map(x=>`<article class="term"><b>${x[0]}</b><p>${x[1]}</p></article>`).join('')||'<div class="no-results">No terms found.</div>'};input?.addEventListener('input',render);render()}

  const lesson=document.getElementById('lessonContent');
  if(lesson){
    const id=new URLSearchParams(location.search).get('id')||'00-1'; const preview=new URLSearchParams(location.search).get('preview')==='1';
    const phase=phases.find(p=>p[0]===id.split('-')[0])||phases[0]; const unlocked=phaseUnlocked(phase[0]); const data=lessonData(id).find(x=>x.id===id)||lessonData(`${phase[0]}-1`)[0]; const prog=getProgress();
    document.title=`${data.title} · Puneeth AI Engineering`;
    if(!unlocked&&!preview){lesson.innerHTML=`<div class="locked-page"><div class="lock-icon">🔒</div><div class="eyebrow">PHASE ${phase[0]} · LOCKED</div><h1>${phase[1]}</h1><p class="lead">Finish the previous phase's lessons and assessment to unlock this lesson.</p><a class="btn primary" href="curriculum.html">Return to curriculum →</a></div>`}
    else {const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');const resources=(data.resources||[]).map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener">${r.label} ↗</a></li>`).join('');lesson.innerHTML=`<div class="eyebrow">PHASE ${data.phase} · ${data.phaseName.toUpperCase()} ${preview?'· PREVIEW':''}</div><h1>${data.title}</h1><div class="meta">LESSON ${data.id} · LEARN / PRACTICE / PROVE</div>${preview&&!unlocked?'<div class="callout warning">Preview mode: this lesson is visible so you can see what is ahead. Complete the previous phase to unlock progress tracking.</div>':''}<p class="lead">${data.summary}</p><div class="callout"><b>Why this matters</b><p>${data.body}</p></div><h2>What you'll learn</h2><ul>${data.takeaways.map(x=>`<li>${x}</li>`).join('')}</ul><h2>Build it</h2><p>Start with the smallest useful implementation. Inspect intermediate values before adding abstractions.</p><pre><code>${esc(data.code)}</code></pre><h2>Practice</h2><div class="callout">${data.practice||'Change one part of the example, predict the result, run it, and explain what happened.'}</div><h2>Prove it</h2><div class="callout">${data.verify||'Define an expected result and test it with a small example. Explain the result in your own words.'}</div><h2>Common mistakes</h2><ul>${(data.mistakes||['Skipping the prerequisite concept.','Copying code without understanding the output.','Measuring only whether code runs, not whether it is correct.']).map(x=>`<li>${x}</li>`).join('')}</ul>${resources?`<h2>Further reading</h2><ul>${resources}</ul>`:''}${unlocked?`<button id="complete" class="complete ${prog[data.id]?'done':''}">${prog[data.id]?'✓ Completed':'Mark lesson complete'}</button>`:'<div class="callout">🔒 Complete the prerequisite phase to mark this lesson complete.</div>'}`;
      if(unlocked){document.getElementById('complete').onclick=()=>{const p=getProgress();const nowComplete=!p[data.id];p[data.id]=nowComplete?1:0;if(!p[data.id])delete p[data.id];saveProgress(p);if(window.PuneethAuth?.logEvent)window.PuneethAuth.logEvent(nowComplete?'lesson_completed':'lesson_uncompleted',{lesson:data.id,phase:data.phase});location.reload()}}
    }
    const side=document.getElementById('lessonSide');if(side)side.innerHTML=`<div class="side-title">${phase[1]}</div>${phase[3].map((x,i)=>{const lid=`${phase[0]}-${i+1}`;return `<a class="side-link ${lid===data.id?'current':''}" href="lesson.html?id=${lid}${!unlocked?'&preview=1':''}">${prog[lid]?'✓ ':''}${x}</a>`}).join('')}<a class="side-link" href="assessment.html?phase=${phase[0]}">Assessment →</a><a class="side-link" href="curriculum.html">← Back to curriculum</a>`;
  }

  const assessment=document.getElementById('assessmentContent');
  if(assessment){const id=new URLSearchParams(location.search).get('phase')||'00';const phase=phases.find(p=>p[0]===id)||phases[0];const unlocked=phaseUnlocked(id);const questions=assessments[id]||[];const existing=assessmentPassed(id);const done=completedLessons(phase);const passMark=Math.ceil(questions.length*0.8);
    assessment.innerHTML=`<div class="eyebrow">PHASE ${id} ASSESSMENT</div><h1>${phase[1]}</h1><p class="lead">Complete all ${phase[3].length} lessons, then score at least <b>80%</b> to prove the phase and unlock the next one.</p>${!unlocked&&id!=='00'?`<div class="callout warning">This phase is locked for progression. You can preview the assessment, but your result will not unlock this phase.</div>`:''}<div class="assessment-meta"><b>${done}/${phase[3].length}</b><span>lessons completed</span><b>${questions.length}</b><span>questions</span><b>${passMark}/${questions.length}</b><span>needed to pass</span></div>${questions.map((q,i)=>`<fieldset class="question"><legend>${i+1}. ${q.q}</legend>${q.options.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}</fieldset>`).join('')}<button class="btn primary" id="submitAssessment">${existing?'Retake assessment':'Submit assessment'}</button><div id="assessmentResult"></div>`;
    document.getElementById('submitAssessment').onclick=()=>{let score=0;questions.forEach((q,i)=>{const el=document.querySelector(`input[name="q${i}"]:checked`);if(el&&Number(el.value)===q.answer)score++});const passed=score>=passMark;const results=getAssessments();if(passed&&done===phase[3].length&&unlocked){results[id]=true;saveAssessments(results);if(window.PuneethAuth?.logEvent)window.PuneethAuth.logEvent('phase_completed',{phase:id,score,total:questions.length})}else if(window.PuneethAuth?.logEvent){window.PuneethAuth.logEvent('assessment_attempt',{phase:id,score,total:questions.length,passed})}const result=document.getElementById('assessmentResult');result.className=`result ${passed?'success':'retry'}`;result.innerHTML=passed&&done===phase[3].length&&unlocked?`<h3>🎉 Phase complete</h3><p>You scored ${score}/${questions.length}. You demonstrated the phase fundamentals, so the next phase is now unlocked.</p><a class="btn" href="${phases[Number(id)+1]?'curriculum.html#phase-'+phases[Number(id)+1][0]:'curriculum.html'}">Continue →</a>`:`<h3>${passed?'Assessment passed':'Keep practicing'}</h3><p>You scored ${score}/${questions.length}. ${done<phase[3].length?'Complete all lessons before the phase can be completed.':'You need at least '+passMark+' correct answers. Review the lessons, retry, and focus on explaining why each answer is correct.'}</p>`;}
  }
})();
