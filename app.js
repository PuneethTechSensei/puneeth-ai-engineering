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
  if(dashboardStats){const s=overallStats();dashboardStats.innerHTML=`<div><b>${s.percent}%</b><span>course complete</span></div><div><b>${s.done}/${s.total}</b><span>lessons complete</span></div><div><b>${s.unlocked}/${phases.length}</b><span>phases unlocked</span></div>`;}

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
    else {lesson.innerHTML=`<div class="eyebrow">PHASE ${data.phase} · ${data.phaseName.toUpperCase()} ${preview?'· PREVIEW':''}</div><h1>${data.title}</h1><div class="meta">LESSON ${data.id} · LEARN / PRACTICE / PROVE</div>${preview&&!unlocked?'<div class="callout warning">Preview mode: this lesson is visible so you can see what is ahead. Complete the previous phase to unlock progress tracking.</div>':''}<p class="lead">${data.summary}</p><div class="callout">${data.body}</div><h2>What you'll learn</h2><ul>${data.takeaways.map(x=>`<li>${x}</li>`).join('')}</ul><h2>Build it</h2><p>Start with the smallest useful implementation. Inspect intermediate values before adding abstractions.</p><pre><code>${data.code.replaceAll('&','&amp;').replaceAll('<','&lt;')}</code></pre><h2>Verify it</h2><p>Don't stop when the code runs. Define expected behavior, create a small test case, and record what happened. For AI systems, pair functional tests with evaluation examples.</p>${unlocked?`<button id="complete" class="complete ${prog[data.id]?'done':''}">${prog[data.id]?'✓ Completed':'Mark lesson complete'}</button>`:'<div class="callout">🔒 Complete the prerequisite phase to mark this lesson complete.</div>'}`;
      if(unlocked){document.getElementById('complete').onclick=()=>{const p=getProgress();const nowComplete=!p[data.id];p[data.id]=nowComplete?1:0;if(!p[data.id])delete p[data.id];saveProgress(p);if(window.PuneethAuth?.logEvent)window.PuneethAuth.logEvent(nowComplete?'lesson_completed':'lesson_uncompleted',{lesson:data.id,phase:data.phase});location.reload()}}
    }
    const side=document.getElementById('lessonSide');if(side)side.innerHTML=`<div class="side-title">${phase[1]}</div>${phase[3].map((x,i)=>{const lid=`${phase[0]}-${i+1}`;return `<a class="side-link ${lid===data.id?'current':''}" href="lesson.html?id=${lid}${!unlocked?'&preview=1':''}">${prog[lid]?'✓ ':''}${x}</a>`}).join('')}<a class="side-link" href="assessment.html?phase=${phase[0]}">Assessment →</a><a class="side-link" href="curriculum.html">← Back to curriculum</a>`;
  }

  const assessment=document.getElementById('assessmentContent');
  if(assessment){const id=new URLSearchParams(location.search).get('phase')||'00';const phase=phases.find(p=>p[0]===id)||phases[0];const unlocked=phaseUnlocked(id);const questions=assessments[id];const existing=assessmentPassed(id);const done=completedLessons(phase);let selected={};
    assessment.innerHTML=`<div class="eyebrow">PHASE ${id} ASSESSMENT</div><h1>${phase[1]}</h1><p class="lead">Complete all ${phase[3].length} lessons, then pass this short assessment to unlock the next phase.</p>${!unlocked&&id!=='00'?`<div class="callout warning">This phase is locked for progression. You can preview the assessment, but your result will not unlock this phase.</div>`:''}<div class="assessment-meta"><b>${done}/${phase[3].length}</b><span>lessons completed</span></div>${questions.map((q,i)=>`<fieldset class="question"><legend>${i+1}. ${q.q}</legend>${q.options.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}</fieldset>`).join('')}<button class="btn primary" id="submitAssessment">${existing?'Retake assessment':'Submit assessment'}</button><div id="assessmentResult"></div>`;
    document.getElementById('submitAssessment').onclick=()=>{let score=0;questions.forEach((q,i)=>{const el=document.querySelector(`input[name="q${i}"]:checked`);if(el&&Number(el.value)===q.answer)score++});const passed=score===questions.length;const results=getAssessments();if(passed&&done===phase[3].length&&unlocked){results[id]=true;saveAssessments(results);if(window.PuneethAuth?.logEvent)window.PuneethAuth.logEvent('phase_completed',{phase:id,score})}else if(window.PuneethAuth?.logEvent){window.PuneethAuth.logEvent('assessment_attempt',{phase:id,score,passed})}const result=document.getElementById('assessmentResult');result.className=`result ${passed?'success':'retry'}`;result.innerHTML=passed&&done===phase[3].length&&unlocked?`<h3>🎉 Phase complete</h3><p>You scored ${score}/${questions.length}. The next phase is now unlocked.</p><a class="btn" href="${phases[Number(id)+1]?'curriculum.html#phase-'+phases[Number(id)+1][0]:'curriculum.html'}">Continue →</a>`:`<h3>${passed?'Assessment passed':'Keep practicing'}</h3><p>You scored ${score}/${questions.length}. ${done<phase[3].length?'Complete all lessons before the phase can be completed.':'Review the lessons and try again.'}</p>`;}
  }
})();
