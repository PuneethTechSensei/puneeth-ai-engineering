(async function(){
  const progressKey='puneeth-ai-progress-v3';
  const assessmentKey='puneeth-ai-assessments-v2';
  let serverState=null;

  const localProgress=()=>{try{return JSON.parse(localStorage.getItem(progressKey)||'{}')}catch{return{}}};
  const localAssessments=()=>{try{return JSON.parse(localStorage.getItem(assessmentKey)||'{}')}catch{return{}}};
  const getProgress=()=>serverState?.authenticated ? (serverState.lessonProgress||{}) : localProgress();
  const getAssessments=()=>serverState?.authenticated ? (serverState.passedAssessments||{}) : localAssessments();
  const authenticated=()=>serverState?.authenticated===true;
  const refreshServerState=async()=>{
    if(!window.PuneethAppwrite?.configured?.()) return;
    try{
      const next=await window.PuneethAppwrite.getLearningState();
      if(next?.ok) serverState=next;
    }catch(error){console.warn('Could not load server learning state:',error)}
  };

  await (window.PuneethAuth?.ready?.()||Promise.resolve());
  await refreshServerState();

  const optionalPhases=new Set(['05','09','12']);
  const isOptionalPhase=id=>optionalPhases.has(String(id));
  const completedLessons=phase=>phase[3].filter((_,i)=>getProgress()[`${phase[0]}-${i+1}`]).length;
  const assessmentPassed=id=>getAssessments()[id]===true;
  const phaseComplete=id=>{const p=phases.find(x=>x[0]===id);return !!p&&completedLessons(p)===p[3].length&&assessmentPassed(id)};
  const phaseUnlocked=id=>serverState?.authenticated ? (String(id)==='00'||serverState.unlockedPhases?.includes?.(String(id))||false) : (String(id)==='00'||localAssessments()[String(id)]===true);
  const overallStats=()=>{const total=phases.reduce((n,p)=>n+p[3].length,0);const done=Object.values(getProgress()).filter(Boolean).length;const unlocked=phases.filter(p=>phaseUnlocked(p[0])).length;return{total,done,unlocked,percent:total?Math.round(done/total*100):0}};
  const esc=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  const labKey=id=>`puneeth_lab_${id}`;
  const readLab=id=>{try{return JSON.parse(localStorage.getItem(labKey(id))||'null')}catch{return null}};
  const saveLab=(id,x)=>localStorage.setItem(labKey(id),JSON.stringify(x));
  const listLabs=()=>Object.keys(localStorage).filter(k=>k.startsWith('puneeth_lab_')).map(k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch{return null}}).filter(Boolean);

  const phaseTransfer=id=>({
    '00':'These habits make every later experiment reproducible and debuggable.','01':'These Python contracts become the building blocks for data pipelines, model code and evaluation harnesses.','02':'These data and mathematical tools let you inspect representations, metrics and model behavior instead of treating them as magic.','03':'These ML evaluation habits become the baseline for deep learning and AI-system regression work.','04':'These training and debugging skills prepare you to reason about modern model behavior and inference.','05':'These vision skills transfer to multimodal inputs and image/document evaluation.','06':'These representation and evaluation skills make tokenization, embeddings and Transformers easier to reason about.','07':'These architectural concepts explain how modern LLM inference transforms context into tokens.','08':'These inference concepts become practical controls for dependable LLM applications.','09':'This optional track gives you mechanistic intuition for the training systems behind foundation models.','10':'These application-engineering controls are reused in RAG, tools, agents and production services.','11':'These retrieval and grounding controls become core infrastructure for knowledge-heavy AI systems.','12':'These multimodal concepts extend the same engineering loop across visual, document and audio inputs.','13':'These contracts and boundaries are the foundation for safe tool use and agent autonomy.','14':'These agent design skills connect models, tools, context, state, evaluation and human control into one system.','15':'These reliability patterns keep AI workflows correct when retries, concurrency and partial failure occur.','16':'These evaluation practices become the quality gate for every model, prompt, retrieval or agent change.','17':'These production practices turn an AI prototype into an observable, recoverable service.','18':'These controls constrain the real-world blast radius of model and application failures.','19':'This capstone turns the curriculum into evidence you can explain, reproduce and defend.'}[String(id)]||'Use this skill in the next system you build.' );

  const guidance={Experiment:['Predict before running.','Change one meaningful variable at a time.','Record the observation and causal explanation.'],Debug:['Reproduce the failure.','Find the smallest violated contract.','Fix it and run a regression check.'],Build:['Define the input/output contract.','Implement the smallest useful version.','Test one realistic edge case.'],Break:['Deliberately violate one assumption.','Capture the exact symptom.','Explain and verify the recovery.'],Compare:['Define decision criteria first.','Measure or calculate both options.','Explain the trade-off.'],Design:['State requirements and constraints.','Sketch the smallest viable design.','Name one failure mode and mitigation.'],Prove:['Make the result reproducible.','Show the requested evidence.','Explain why it proves the capability.']};
  const prompts=[['Prediction / plan','What did you expect or decide before execution?'],['Evidence','What exact output, metric, trace or artifact did you observe?'],['Diagnosis','What caused the result or failure?'],['Transfer','Where would you apply this skill next?']];
  function renderLab(data){
    const x=data.experience||{}, c=data.competency||{}, saved=readLab(data.id), fields=saved?.fields||{}, checks=saved?.checks||{};
    const gs=guidance[x.type]||guidance.Build;
    return `<section class="lab-shell lab-v8" id="engineeringLab"><div class="lab-head"><div><div class="experience-kicker">ENGINEERING LAB · ${esc(x.type||'BUILD')}</div><h2>${esc(x.title||data.title)}</h2><p>${esc(x.task||data.practice)}</p><div class="lab-tags"><span>${esc(c.difficulty||'Core')}</span><span>${esc(c.time||'30–45 min')}</span><span>${esc(c.artifact||data.proof)}</span></div></div><div class="lab-time"><span>Outcome</span><b>Produce evidence</b></div></div><div class="lab-grid"><div class="lab-panel"><div class="lab-section-title">How to work</div><ol class="lab-steps">${gs.map(x=>`<li>${x}</li>`).join('')}</ol>${c.prerequisites?.length?`<div class="evidence"><b>Prerequisites</b><span>${c.prerequisites.map(esc).join(' · ')}</span></div>`:''}<div class="evidence"><b>Required proof</b><span>${esc(c.artifact||data.proof)}</span></div><div class="success-criteria"><b>Success criteria</b>${(c.success||[]).map(v=>`<label><input type="checkbox" data-success-check value="${esc(v)}" ${checks[v]?'checked':''}>${esc(v)}</label>`).join('')}</div><div class="lab-break"><div class="lab-label">BREAK IT</div><b>${esc(data.breakIt||c.failureMode)}</b></div><div class="transfer-box"><b>Why this matters later</b><span>${esc(x.transfer||data.usedLater||data.transfer||phaseTransfer(data.phase))}</span></div></div><div class="lab-panel lab-submit"><div class="lab-section-title">Proof record</div><div class="proof-grid">${prompts.map((p,i)=>`<div class="proof-field"><label>${i+1}. ${p[0]}</label><textarea data-proof-field="f${i}" placeholder="${esc(p[1])}">${fields['f'+i]?esc(fields['f'+i]):''}</textarea></div>`).join('')}</div><div class="artifact-field"><label>Artifact / link / file note <span>(optional)</span></label><input data-artifact value="${esc(saved?.artifact||'')}" placeholder="Git commit, notebook, test output, diagram, report…"></div><div class="mastery-bar"><span>Self-check</span><strong>Evidence + criteria + artifact</strong></div><button class="btn primary" id="saveLab">${saved?'✓ Update evidence':'Save proof of work'}</button><div id="labStatus" class="lab-status">${saved?'Evidence saved locally.':'Do the experiment first; do not write “done” as evidence.'}</div></div></div></section>`;
  }

  const themeBtn=document.getElementById('themeBtn');
  if(themeBtn){const t=localStorage.getItem('puneeth-theme');if(t)document.documentElement.dataset.theme=t;themeBtn.onclick=()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('puneeth-theme',next)}}
  const navStats=document.getElementById('navStats'); if(navStats){const s=overallStats();navStats.textContent=`${s.percent}% complete`;}

  const dashboardStats=document.getElementById('dashboardStats');
  const getCurrentPhase=()=>{const core=phases.filter(p=>!isOptionalPhase(p[0]));return core.find(p=>!phaseComplete(p[0]))||core[core.length-1]};
  if(dashboardStats){const s=overallStats(),active=getCurrentPhase(),done=completedLessons(active),pct=Math.round(done/active[3].length*100);dashboardStats.innerHTML=`<div class="dashboard-stat"><span class="stat-value">${s.percent}%</span><span class="stat-label">Course complete</span><span class="stat-note">Evidence-based progress</span></div><div class="dashboard-stat"><span class="stat-value">${s.done}</span><span class="stat-label">Lessons complete</span><span class="stat-note">Across ${phases.length} phases</span></div><div class="dashboard-stat"><span class="stat-value">${s.unlocked}/${phases.length}</span><span class="stat-label">Phases available</span><span class="stat-note">Assessment unlocks the next core phase</span></div><div class="dashboard-stat"><span class="stat-value">${pct}%</span><span class="stat-label">Current phase</span><span class="stat-note">${esc(active[1])}</span></div>`;document.querySelector('.orb-ring')?.style.setProperty('--progress',`${s.percent}%`);document.getElementById('heroPercent')?.replaceChildren(document.createTextNode(`${s.percent}%`));document.getElementById('heroPhase')?.replaceChildren(document.createTextNode(`Phase ${active[0]}`));document.getElementById('heroPhaseTitle')?.replaceChildren(document.createTextNode(active[1]));document.getElementById('continuePill')?.replaceChildren(document.createTextNode(`PHASE ${active[0]}`));document.getElementById('continueTitle')?.replaceChildren(document.createTextNode(active[1]));document.getElementById('continueDescription')?.replaceChildren(document.createTextNode(active[2]));document.getElementById('continueCount')?.replaceChildren(document.createTextNode(`${done} / ${active[3].length} lessons`));document.getElementById('continuePercent')?.replaceChildren(document.createTextNode(`${pct}%`));const bar=document.getElementById('continueBar');if(bar)bar.style.width=`${pct}%`;const btn=document.getElementById('continueBtn');if(btn)btn.href=`curriculum.html#phase-${active[0]}`;}

  const phaseGrid=document.getElementById('phaseGrid');if(phaseGrid)phaseGrid.innerHTML=phases.map(p=>{const d=completedLessons(p),u=phaseUnlocked(p[0]),c=phaseComplete(p[0]);return `<a class="phase-card ${!u?'locked':''}" href="curriculum.html#phase-${p[0]}"><span class="phase-num">${p[0]}</span><h3>${esc(p[1])}</h3><p>${esc(p[2])}</p><div class="card-meta">${d}/${p[3].length} lessons ${c?'· ✓ complete':!u?'· 🔒 locked':''}</div></a>`}).join('');
  const journey=document.getElementById('journey');if(journey)journey.innerHTML=phases.map((p,i)=>{const d=completedLessons(p),c=phaseComplete(p[0]),u=phaseUnlocked(p[0]),o=isOptionalPhase(p[0]);return `<div class="journey-row ${c?'journey-complete':''}"><span class="journey-num">${c?'✓':p[0]}</span><div class="journey-copy"><b>${esc(p[1])}${o?'<span class="optional-badge">Optional</span>':''}</b><span>${esc(p[2])}</span><small>${d}/${p[3].length} lessons ${c?'· Complete':u?'· Available':o?'· Optional':'· Locked'}</small></div><a class="btn" href="curriculum.html#phase-${p[0]}">${i===0?'Start':u?'Open':'Preview'} →</a></div>`}).join('');

  const grid=document.getElementById('phaseGrid');
  const list=document.getElementById('curriculumList');
  if(list){const search=document.getElementById('search'),status=document.getElementById('status');const render=()=>{const q=(search?.value||'').toLowerCase(),st=status?.value||'all',prog=getProgress();list.innerHTML=phases.map(p=>{const d=completedLessons(p),u=phaseUnlocked(p[0]),c=phaseComplete(p[0]);const matches=p[3].map((title,i)=>({id:`${p[0]}-${i+1}`,title})).filter(x=>(`${p[1]} ${p[2]} ${x.title}`).toLowerCase().includes(q)).filter(x=>st==='all'||(st==='done'?prog[x.id]:!prog[x.id]));if(!matches.length)return '';return `<section class="phase-block ${!u?'is-locked':''}" id="phase-${p[0]}"><div class="phase-title"><div><div class="eyebrow">PHASE ${p[0]} ${c?'· COMPLETE':!u?'· LOCKED':isOptionalPhase(p[0])?'· OPTIONAL SPECIALIZATION':''}</div><h2>${esc(p[1])}${isOptionalPhase(p[0])?'<span class="optional-badge">Optional specialization</span>':''}</h2></div><div class="phase-summary"><small>${esc(p[2])}</small><strong>${d}/${p[3].length} lessons</strong></div></div>${!u?`<div class="lock-banner"><span>🔒</span><div><b>Complete the previous core phase first.</b><p>This phase remains visible as a preview. Unlocking requires the prerequisite core phase assessment.</p></div><a class="btn" href="lesson.html?id=${p[0]}-1&preview=1">Preview phase →</a></div>`:''}<div class="lessons">${matches.map((x,j)=>`<div class="lesson-row ${prog[x.id]?'done':''} ${!u?'disabled':''}"><span class="idx">${String(j+1).padStart(2,'0')}</span><a class="title" href="lesson.html?id=${x.id}${!u?'&preview=1':''}">${esc(x.title)}</a><label class="tag"><input class="check" type="checkbox" data-id="${x.id}" ${prog[x.id]?'checked':''} disabled> ${prog[x.id]?'done':'complete'}</label></div>`).join('')}</div><div class="phase-footer"><span>${c?'✓ Assessment passed':isOptionalPhase(p[0])?'Optional assessment · does not block core progression':'Assessment required to unlock the next core phase'}</span><a href="assessment.html?phase=${p[0]}">${c?'Review assessment':'Take assessment →'}</a></div></section>`}).join('')||'<div class="no-results">No lessons match that search.</div>'};search?.addEventListener('input',render);status?.addEventListener('change',render);render();}

  const gloss=document.getElementById('glossary');if(gloss){const input=document.getElementById('glossarySearch');const render=()=>{const q=(input?.value||'').toLowerCase();gloss.innerHTML=glossary.filter(x=>x.join(' ').toLowerCase().includes(q)).map(x=>`<article class="term"><b>${esc(x[0])}</b><p>${esc(x[1])}</p></article>`).join('')||'<div class="no-results">No terms found.</div>'};input?.addEventListener('input',render);render();}

  const lesson=document.getElementById('lessonContent');
  if(lesson){
    const params=new URLSearchParams(location.search);
    const id=params.get('id')||'00-1';
    const preview=params.get('preview')==='1';
    const publicData=lessonData(id)[0]||lessonData('00-1')[0];

    if(!publicData){
      lesson.innerHTML='<div class="locked-page"><h1>Lesson not found</h1><p class="lead">The requested lesson could not be resolved.</p></div>';
    }else{
      const phase=phases.find(p=>p[0]===publicData.phase)||phases[0];
      const unlocked=phaseUnlocked(phase[0]);
      document.title=`${publicData.title} · AI Engineering by TechSensei`;

      const renderLesson=(data)=>{
        const prog=getProgress();
        const saved=readLab(data.id);
        const competency=data.competency||{};
        const experience=data.experience||{};
        const resources=(data.resources||[]).map(r=>{const label=Array.isArray(r)?r[0]:r?.label;const url=Array.isArray(r)?r[1]:r?.url;if(!label||!url)return '';return `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a></li>`;}).join('');
        const moduleBanners={'04':'assets/module-banners/module-04-deep-learning.svg','07':'assets/module-banners/module-07-transformers.svg','11':'assets/module-banners/module-11-rag.svg'};
        const moduleBanner=moduleBanners[data.phase]||'';
        lesson.innerHTML=`<div class="eyebrow">PHASE ${esc(data.phase)} · ${esc(data.phaseName).toUpperCase()} ${preview?'· PREVIEW':''}</div><h1>${esc(data.title)}</h1><div class="meta">LESSON ${esc(data.id)} · LEARN / EXPERIMENT / BUILD / BREAK / PROVE</div>${preview&&!unlocked?'<div class="callout warning">Preview mode: learn what is ahead, but progress remains locked until the prerequisite phase is complete.</div>':''}<p class="lead">${esc(data.summary)}</p>${moduleBanner?`<section class="module-banner" aria-label="Module visual"><img src="${moduleBanner}" alt="Module ${esc(data.phase)} visual for ${esc(data.phaseName)}" loading="eager"></section>`:''}<div class="skill-card lesson-skill-v9"><div><div class="skill-label">SKILL TARGET</div><h3>${esc(data.skillTarget||data.title)}</h3><p>By the end, you should be able to demonstrate this capability on a small real problem.</p></div><div><div class="skill-label">USED LATER</div><h3>Why this matters later</h3><p>${esc(data.usedLater||data.transfer||phaseTransfer(data.phase))}</p></div></div><div class="lesson-quality-strip"><span><b>Level</b>${esc(competency.difficulty||'Core')}</span><span><b>Time</b>${esc(competency.time||'30–45 min')}</span><span><b>Proof</b>${esc(competency.artifact||data.proof||'Observable evidence')}</span>${competency.reviewed?`<span><b>Reviewed</b>${esc(competency.reviewed)}</span>`:''}${competency.freshness?`<span class="freshness"><b>Freshness</b>${esc(competency.freshness)}</span>`:''}</div><section class="lesson-section why"><div class="section-kicker">01 · WHY THIS EXISTS</div><h2>Start with the engineering problem</h2><p>${esc(data.why)}</p></section><section class="lesson-section concept"><div class="section-kicker">02 · LEARN</div><h2>Build the mental model</h2><p>${esc(data.body)}</p><div class="worked-example"><b>Worked example</b><p>${esc(data.example)}</p><div class="decision-box"><b>Decision checkpoint</b><p>${esc(data.decision||'What engineering choice does this lesson require?')}</p></div></div></section><section class="lesson-section build"><div class="section-kicker">03 · BUILD / EXPERIMENT</div><h2>Do something observable</h2><p>${esc(data.practice)}</p>${(data.guidedSteps||[]).length?`<ol class="guided-steps">${data.guidedSteps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`:''}<pre><code>${esc(data.code)}</code></pre></section><section class="lesson-section break"><div class="section-kicker">04 · BREAK</div><h2>Challenge one assumption</h2><p>${esc(data.breakIt)}</p></section>${renderLab(data)}<section class="lesson-section proof"><div class="section-kicker">05 · PROVE</div><h2>What counts as evidence?</h2><p>${esc(data.proof)}</p><ul>${(data.takeaways||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><section class="lesson-section transfer"><div class="section-kicker">06 · TRANSFER</div><h2>Where this skill reappears</h2><p>${esc(data.transfer)}</p></section><section class="lesson-section mistakes"><div class="section-kicker">COMMON MISTAKES</div><ul>${(data.mistakes||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>${resources?`<section class="lesson-section resources"><div class="section-kicker">FURTHER READING</div><ul>${resources}</ul></section>`:''}<div class="completion-block"><div class="completion-copy"><div class="experience-kicker">PROGRESS GATE</div><b>${prog[data.id]?'Evidence recorded and lesson completed.':saved?'Local evidence found — save it to the server to enable completion.':'Finish the lab and save evidence before completion.'}</b><span>Completion is stored server-side after evidence is submitted; local notes are only a convenience cache.</span></div><button id="complete" class="complete ${prog[data.id]?'done':''}" disabled>${prog[data.id]?'✓ Completed':'Mark lesson complete'}</button></div>`;
      };

      if(!unlocked&&!preview){
        lesson.innerHTML=`<div class="locked-page"><div class="lock-icon">🔒</div><div class="eyebrow">PHASE ${phase[0]} · LOCKED</div><h1>${esc(phase[1])}</h1><p class="lead">Finish the prerequisite core phase and pass its assessment to unlock this protected lesson.</p><a class="btn primary" href="curriculum.html">Return to curriculum →</a></div>`;
      }else if(preview||!authenticated()){
        lesson.innerHTML=`<div class="locked-page"><div class="lock-icon">🔐</div><div class="eyebrow">PROTECTED LESSON</div><h1>${esc(publicData.title)}</h1><p class="lead">${preview?'This preview exposes curriculum metadata only.':'Sign in to access the full lesson content.'}</p><a class="btn primary" href="account.html">Sign in →</a></div>`;
      }else{
        lesson.innerHTML=`<div class="locked-page"><div class="lock-icon">🔐</div><div class="eyebrow">PROTECTED LESSON</div><h1>${esc(publicData.title)}</h1><p class="lead">Loading protected lesson content…</p></div>`;
        const result=await window.PuneethAppwrite.getProtectedLesson(publicData.id,'v1');
        if(result.ok){
          renderLesson({...publicData,...result.content});
          const complete=document.getElementById('complete');
          let serverEvidenceSaved=false;

          document.getElementById('saveLab')?.addEventListener('click',async()=>{
            const fields={};document.querySelectorAll('[data-proof-field]').forEach(el=>fields[el.dataset.proofField]=el.value.trim());
            const checks={};document.querySelectorAll('[data-success-check]').forEach(el=>checks[el.value]=el.checked);
            const artifact=document.querySelector('[data-artifact]')?.value.trim()||'';
            const status=document.getElementById('labStatus');
            if(Object.values(fields).some(v=>v.length<25)){status.textContent='Add concrete evidence to all four fields; each should describe what you actually observed or decided.';status.className='lab-status error';return}
            if(Object.values(checks).some(v=>!v)){status.textContent='Complete every success criterion after performing it.';status.className='lab-status error';return}
            status.textContent='Saving evidence securely…';status.className='lab-status';
            const savedResult=await window.PuneethAppwrite.saveLessonEvidence({lessonId:data.id,phaseId:data.phase,title:data.title,type:data.experience?.type||'Build',fields,checks,artifact});
            if(!savedResult.ok){status.textContent=savedResult.error||'Could not save evidence.';status.className='lab-status error';return}
            saveLab(data.id,{id:data.id,title:data.title,type:data.experience?.type||'Build',fields,checks,artifact,savedAt:new Date().toISOString()});
            serverEvidenceSaved=true;
            status.textContent='✓ Evidence saved to your learner record.';status.className='lab-status success';
            if(complete){complete.disabled=false;complete.textContent='Mark lesson complete'}
          });

          complete?.addEventListener('click',async()=>{
            if(!serverEvidenceSaved||getProgress()[data.id])return;
            complete.disabled=true;complete.textContent='Saving…';
            const doneResult=await window.PuneethAppwrite.completeLesson({lessonId:data.id,phaseId:data.phase});
            if(!doneResult.ok){complete.disabled=false;complete.textContent='Mark lesson complete';document.getElementById('labStatus').textContent=doneResult.error||'Could not complete lesson.';document.getElementById('labStatus').className='lab-status error';return}
            serverState=doneResult.state||serverState;
            window.PuneethAuth?.logEvent?.('lesson_completed',{lesson:data.id,phase:data.phase,serverVerified:true});
            location.reload();
          });

          const side=document.getElementById('lessonSide');
          if(side)side.innerHTML=`<div class="side-title">${esc(phase[1])}</div>${phase[3].map((t,i)=>{const lid=`${phase[0]}-${i+1}`;return `<a class="side-link ${lid===data.id?'current':''}" href="lesson.html?id=${lid}">${getProgress()[lid]?'✓ ':''}${esc(t)}</a>`}).join('')}<a class="side-link" href="assessment.html?phase=${phase[0]}">Assessment →</a><a class="side-link" href="curriculum.html">← Back to curriculum</a>`;
        }else{
          lesson.innerHTML=`<div class="locked-page"><div class="lock-icon">🔐</div><div class="eyebrow">PROTECTED LESSON</div><h1>${esc(publicData.title)}</h1><p class="lead">${esc(result.error||'Protected content is temporarily unavailable.')}</p><a class="btn primary" href="account.html">Sign in →</a></div>`;
        }
      }
    }
  }

  const assessment=document.getElementById('assessmentContent');
  if(assessment){
    const id=new URLSearchParams(location.search).get('phase')||'00';
    const phase=phases.find(p=>p[0]===id)||phases[0];
    const unlocked=phaseUnlocked(id);
    if(!authenticated()){
      assessment.innerHTML=`<div class="locked-page"><div class="lock-icon">🔐</div><div class="eyebrow">PHASE ${id} ASSESSMENT</div><h1>${esc(phase[1])}</h1><p class="lead">Sign in to load the assessment and keep the result in your secure learner record.</p><a class="btn primary" href="account.html">Sign in →</a></div>`;
    }else if(!unlocked){
      assessment.innerHTML=`<div class="locked-page"><div class="lock-icon">🔒</div><div class="eyebrow">PHASE ${id} · LOCKED</div><h1>${esc(phase[1])}</h1><p class="lead">Complete the prerequisite phase to unlock this assessment.</p><a class="btn" href="curriculum.html">Back to curriculum →</a></div>`;
    }else{
      assessment.innerHTML='<div class="locked-page"><div class="eyebrow">LOADING ASSESSMENT</div><p class="lead">Loading questions from the protected assessment service…</p></div>';
      const qResult=await window.PuneethAppwrite.getAssessmentQuestions(id);
      if(!qResult.ok){
        assessment.innerHTML=`<div class="locked-page"><h1>Assessment unavailable</h1><p class="lead">${esc(qResult.error||'Unable to load the assessment.')}</p></div>`;
      }else{
        const questions=qResult.questions||[];
        const passPercent=Number(qResult.passPercent||80);
        const passMark=Math.ceil(questions.length*passPercent/100);
        const done=completedLessons(phase);
        const existing=assessmentPassed(id);
        assessment.innerHTML=`<div class="eyebrow">PHASE ${id} ASSESSMENT</div><h1>${esc(phase[1])}</h1><p class="lead">You need ${passMark}/${questions.length} correct (${passPercent}%) and all lesson evidence completed to unlock the next phase.</p><div class="assessment-meta"><b>${done}/${phase[3].length}</b><span>lessons completed</span><b>${questions.length}</b><span>questions</span><b>${passMark}/${questions.length}</b><span>needed</span></div>${questions.map((q,i)=>`<fieldset class="question"><legend>${i+1}. ${esc(q.questionText)}</legend>${(q.options||[]).map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${esc(o)}</label>`).join('')}</fieldset>`).join('')}<button class="btn primary" id="submitAssessment">${existing?'Retake assessment':'Submit assessment'}</button><div id="assessmentResult"></div>`;
        const started=Date.now();
        document.getElementById('submitAssessment').onclick=async()=>{
          const answers={};
          questions.forEach((q,i)=>{const el=document.querySelector(`input[name="q${i}"]:checked`);answers[q.questionId]=el?Number(el.value):null});
          const button=document.getElementById('submitAssessment');
          button.disabled=true;button.textContent='Checking securely…';
          const result=await window.PuneethAppwrite.submitQuiz({kind:'assessment',phaseId:id,answers,elapsedSeconds:Math.max(1,Math.round((Date.now()-started)/1000))});
          const box=document.getElementById('assessmentResult');
          if(!result.ok){
            button.disabled=false;button.textContent=existing?'Retake assessment':'Submit assessment';
            box.className='result retry';box.innerHTML=`<h3>Assessment could not be submitted</h3><p>${esc(result.error||'Try again after checking your session.')}</p>`;
            return;
          }
          serverState=result.state||serverState;
          box.className='result '+(result.canComplete?'success':'retry');
          box.innerHTML=`<h3>${result.canComplete?'✓ Phase complete':result.passed?'Assessment passed':'Keep practicing'}</h3><p>You scored ${result.score}/${result.maxScore} (${result.percent}%). ${result.canComplete?'The next available phase is now unlocked.':result.passed?'Finish all lesson evidence to complete the phase.':'Review the protected lesson material and retry when ready.'}</p>`;
          button.disabled=false;button.textContent='Retake assessment';
          window.PuneethAuth?.logEvent?.('assessment_attempt',{phase:id,score:result.score,total:result.maxScore,passed:result.passed,serverCalculated:true});
        };
      }
    }
  }

  window.PuneethPortfolio={init(){const list=document.getElementById('portfolioList'),summary=document.getElementById('portfolioSummary');if(!list||!summary)return;const render=()=>{const e=listLabs().sort((a,b)=>String(b.savedAt).localeCompare(String(a.savedAt)));summary.innerHTML=`<div class="portfolio-stat"><b>${e.length}</b><span>saved labs</span></div><div class="portfolio-stat"><b>${e.filter(x=>x.artifact).length}</b><span>with artifacts</span></div><div class="portfolio-stat"><b>${e.filter(x=>x.checks&&Object.values(x.checks).every(Boolean)).length}</b><span>self-checks complete</span></div>`;list.innerHTML=e.length?e.map(x=>{const lesson=lessonData(x.id)?.[0],fields=Object.entries(x.fields||{}).map(([k,v])=>`<div><b>${esc(k)}</b><p>${esc(v)}</p></div>`).join('');return `<article class="portfolio-card"><div class="eyebrow">${lesson?`PHASE ${lesson.phase} · ${esc(lesson.title)}`:'LAB'}</div><div class="portfolio-meta"><span>${esc(x.type||'Build')}</span><span>${new Date(x.savedAt||Date.now()).toLocaleDateString()}</span></div>${x.artifact?`<div class="artifact-pill">Artifact: ${esc(x.artifact)}</div>`:''}<div class="portfolio-fields">${fields}</div>${lesson?`<a class="btn" href="lesson.html?id=${x.id}">Review lesson →</a>`:''}</article>`}).join(''):'<div class="no-results">No saved lab evidence yet. Complete an engineering lab and save your proof here.</div>'};render();document.getElementById('exportPortfolio')?.addEventListener('click',()=>{const lines=['# AI Engineering by TechSensei — Proof Portfolio','',`Exported: ${new Date().toISOString()}`,'','Self-reported learning evidence; not independently verified.',''];listLabs().forEach(x=>{lines.push(`## ${x.title||x.id}`,`Type: ${x.type||''}`,`Saved: ${x.savedAt||''}`,'',...Object.entries(x.fields||{}).map(([k,v])=>`### ${k}\n${v}`),x.artifact?`### Artifact\n${x.artifact}`:'','');});const blob=new Blob([lines.join('\n')],{type:'text/markdown'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='puneeth-ai-engineering-proof-portfolio.md';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)});document.getElementById('clearPortfolio')?.addEventListener('click',()=>{if(confirm('Clear all locally saved lab evidence?')){Object.keys(localStorage).filter(k=>k.startsWith('puneeth_lab_')).forEach(k=>localStorage.removeItem(k));render()}})}};
  window.__PUNEETH_APP_READY__=true;
  window.dispatchEvent(new CustomEvent('puneeth:appready'));
})();
