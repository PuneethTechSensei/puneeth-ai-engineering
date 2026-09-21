(function(){
  const progressKey='puneeth-ai-progress-v2';
  const assessmentKey='puneeth-ai-assessments-v1';
  const getProgress=()=>JSON.parse(localStorage.getItem(progressKey)||'{}');
  const saveProgress=p=>{localStorage.setItem(progressKey,JSON.stringify(p));window.dispatchEvent(new CustomEvent('puneeth:progress',{detail:{progress:p}}));};
  const getAssessments=()=>JSON.parse(localStorage.getItem(assessmentKey)||'{}');
  const saveAssessments=p=>{localStorage.setItem(assessmentKey,JSON.stringify(p));window.dispatchEvent(new CustomEvent('puneeth:assessment',{detail:{assessments:p}}));};
  const completedLessons=phase=>phase[3].filter((_,i)=>getProgress()[`${phase[0]}-${i+1}`]).length;
  const assessmentPassed=id=>getAssessments()[id]===true;
  const optionalPhases=new Set(['05','09','12']);
  const isOptionalPhase=id=>optionalPhases.has(String(id));
  const phaseComplete=id=>{const p=phases.find(x=>x[0]===id);return !!p && completedLessons(p)===p[3].length && assessmentPassed(id)};
  const previousPhase=id=>{const i=phases.findIndex(p=>p[0]===id);for(let j=i-1;j>=0;j--)if(!isOptionalPhase(phases[j][0]))return phases[j];return null};
  const phaseUnlocked=id=>{const prev=previousPhase(id);return !prev || phaseComplete(prev[0]);};
  const overallStats=()=>{const total=phases.reduce((n,p)=>n+p[3].length,0);const done=Object.values(getProgress()).filter(Boolean).length;const unlocked=phases.filter(p=>phaseUnlocked(p[0])).length;return {total,done,unlocked,percent:Math.round(done/total*100)}};
  const labEvidenceKey=id=>`puneeth_lab_${id}`;
  const readLabEvidence=id=>{try{return JSON.parse(localStorage.getItem(labEvidenceKey(id))||'null')}catch(e){return null}};
  const saveLabEvidence=(id,data)=>localStorage.setItem(labEvidenceKey(id),JSON.stringify(data));
  const listLabEvidence=()=>Object.keys(localStorage).filter(k=>k.startsWith('puneeth_lab_')).map(k=>{try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}}).filter(Boolean);
  const competencyFor=id=>{try{return lessonData(id)[0]?.competency||{}}catch(e){return {}}};

  const labGuidance=type=>({
    Experiment:['Write your prediction before running the experiment.','Run at least two controlled variations.','Record the observation and explain the cause.'],
    Predict:['Commit to a prediction before execution.','Compare prediction with actual output.','Explain the mismatch, if any.'],
    Debug:['Reproduce the failure.','Identify the smallest root cause.','Verify the fix with a regression check.'],
    Build:['Define the input/output contract.','Implement the smallest working version.','Run a meaningful test and record the result.'],
    Compare:['Define the decision criteria first.','Measure or reason about both alternatives.','Explain the trade-off and chosen approach.'],
    Reason:['State the engineering decision.','Support it with evidence or calculations.','Describe one case where the decision could change.'],
    Incident:['Write the observed symptom.','Trace the likely root cause without changing everything at once.','Document the fix and prevention check.'],
    Design:['Write the requirements and constraints.','Sketch the smallest viable design.','Explain one trade-off and one failure mode.'],
    Break:['Create the failure deliberately.','Observe the exact symptom.','Explain the root cause and recovery.'],
    Prove:['Produce a reproducible result.','Show the key evidence requested by the mission.','Explain why the result demonstrates the skill.'],
    Review:['Audit the implementation step by step.','Identify one incorrect or risky assumption.','Propose and verify the correction.']
  })[type]||['Define the expected behavior.','Perform the task and record the result.','Explain the engineering decision and failure mode.'];
  const experiencePrompts=(type,x)=>({
    Experiment:[['Prediction','What do you expect before you run it?'],['Observation','What changed in the output or metric?'],['Causal explanation','Why did the result change?'],['Controlled variation','What did your second variation teach you?']],
    Predict:[['Prediction','Commit to a concrete output before execution.'],['Observed result','What actually happened?'],['Mismatch analysis','If you were wrong, what assumption failed?'],['Transfer','Where would this prediction skill help in another AI system?']],
    Debug:[['Symptom','What exact failure did you reproduce?'],['Root cause','What is the smallest cause you found?'],['Fix','What changed, and why does it address the root cause?'],['Regression proof','What test/check prevents the same bug returning?']],
    Build:[['Contract','What are the inputs, outputs and constraints?'],['Implementation evidence','What did you build and what result did it produce?'],['Failure case','What bad input or edge case did you test?'],['Engineering decision','What did you intentionally keep simple or avoid?']],
    Compare:[['Criteria','What makes one option better for this task?'],['Evidence','What did you measure or calculate?'],['Trade-off','What does the chosen approach give up?'],['Decision','Which approach would you use here, and why?']],
    Interpret:[['Prediction','What behavior do you expect from the model or system?'],['Trace','What intermediate evidence explains the behavior?'],['Risk','What assumption could make this interpretation misleading?'],['Conclusion','What would you change or keep based on the evidence?']],
    Reason:[['Decision','What engineering choice are you making?'],['Evidence','Which facts, calculations or observations support it?'],['Counterexample','When would your decision change?'],['Conclusion','State the rule you would carry into another project.']],
    Incident:[['Impact','What was the user/system impact?'],['Investigation','What evidence narrowed the search?'],['Root cause','What actually caused the incident?'],['Prevention','What check or design change prevents recurrence?']],
    Design:[['Requirements','What must the design guarantee?'],['Design','What is the smallest viable architecture?'],['Trade-off','What did you choose not to optimize yet?'],['Failure mode','How could this design fail and what is the mitigation?']],
    Break:[['Failure injected','What did you deliberately break?'],['Observed symptom','What did the system actually do?'],['Root cause','Why did that failure happen?'],['Recovery','How did you restore correct behavior and verify it?']],
    Prove:[['Reproduction','Give the exact steps needed to reproduce the result.'],['Evidence','What output, metric or artifact proves the skill?'],['Explanation','Why does the result demonstrate understanding?'],['Transfer','Where can you apply this skill next?']],
    Review:[['Audit finding','What did you inspect and what was wrong/risky?'],['Risk','Why does the finding matter?'],['Correction','What did you change?'],['Verification','How did you verify the correction?']]
  })[type] || [['Plan','What are you trying to demonstrate?'],['Result','What happened?'],['Explanation','Why did it happen?'],['Transfer','Where will you use this skill next?']];
  const renderLab=(data,esc)=>{const x=data.experience||{};const c=data.competency||{};const saved=readLabEvidence(data.id);const prompts=experiencePrompts(x.type,x);const fields=saved?.fields||{};const checks=saved?.checks||{};const artifact=saved?.artifact||'';return `<section class="lab-shell lab-v6" id="engineeringLab">
    <div class="lab-head"><div><div class="experience-kicker">ENGINEERING LAB · ${x.type||'BUILD'}</div><h2>${x.title||'Engineering Mission'}</h2><p>${x.task||''}</p><div class="lab-tags"><span>${c.difficulty||'Core'}</span><span>${c.time||x.time||'30–45 min'}</span><span>${c.artifact||'Evidence note'}</span></div></div><div class="lab-time"><span>Outcome</span><b>Demonstrate a skill</b></div></div>
    <div class="lab-grid"><div class="lab-panel">
      <div class="lab-section-title">Mission protocol</div><ol class="lab-steps">${labGuidance(x.type).map(g=>`<li>${g}</li>`).join('')}</ol>
      ${c.prerequisites?.length?`<div class="evidence"><b>Prerequisites</b><span>${c.prerequisites.join(' · ')}</span></div>`:''}
      <div class="evidence"><b>Required artifact</b><span>${c.artifact||x.evidence||'Show the result and explain the engineering decision.'}</span></div>
      <div class="success-criteria"><b>Success criteria</b>${(c.success||['Reproduce the behavior','Explain why it works','Diagnose one failure']).map(v=>`<label><input type="checkbox" data-success-check value="${esc(v)}" ${checks[v]?'checked':''}>${esc(v)}</label>`).join('')}</div>
      <div class="lab-break"><div class="lab-label">BREAK IT</div><b>${c.failureMode||x.breakIt||'Introduce one realistic failure and diagnose it.'}</b></div>
      <div class="transfer-box"><b>Why this skill matters later</b><span>${x.transfer||phaseTransfer(data.phase)}</span></div>
    </div><div class="lab-panel lab-submit">
      <div class="lab-section-title">Evidence record</div>
      <div class="proof-grid">${prompts.map((p,i)=>`<div class="proof-field"><label>${i+1}. ${p[0]}</label><textarea data-proof-field="f${i}" placeholder="${esc(p[1])}">${fields['f'+i]?esc(fields['f'+i]):''}</textarea></div>`).join('')}</div>
      <div class="artifact-field"><label>Artifact / link / file note <span>(optional)</span></label><input data-artifact value="${esc(artifact)}" placeholder="e.g. notebook path, Git commit, diagram name, test output…"></div>
      <div class="mastery-bar"><span>Self-check</span><strong>Evidence + criteria + artifact</strong></div>
      <button class="btn primary" id="saveLab">${saved?'✓ Update evidence':'Save proof of work'}</button><div id="labStatus" class="lab-status">${saved?'Saved locally. Re-open your evidence before marking the lesson complete.':'Write evidence from your actual work. Generic “done” notes are not useful.'}</div>
    </div></div></section>`};
  const phaseTransfer=id=>({
    '00':'This becomes your reproducibility habit for every project, from notebooks to production services.',
    '01':'These Python and data skills become the substrate for ML pipelines, evaluation harnesses and AI services.',
    '02':'These concepts reappear in optimization, embeddings, similarity search, loss functions and model evaluation.',
    '03':'Classical ML gives you the habits of baselines, leakage detection, metrics and error analysis used throughout AI.',
    '04':'Neural-network mechanics make later transformer, vision and multimodal architectures easier to debug.',
    '05':'Computer Vision is an optional specialization; it does not block the core AI Engineer path.',
    '06':'Text representations lead directly into attention, transformers, embeddings and language applications.',
    '07':'Transformers are the architectural foundation for modern language and many multimodal systems.',
    '08':'Generation controls become practical tools for reliable structured outputs and model applications.',
    '09':'Building a tiny model makes later LLM engineering decisions less of a black box.',
    '10':'LLM application engineering connects models to prompts, retrieval, tools, tests and product constraints.',
    '11':'RAG skills become the foundation for grounded assistants, enterprise search and agentic retrieval.',
    '09':'LLM Internals is an optional specialization for learners who want deeper model-training and optimization depth.',
    '12':'Multimodal AI is an optional specialization; it does not block the core AI Engineer path.',
    '13':'Reliable tools are the interface between models and the software systems agents must operate.',
    '14':'Agent engineering combines models, tools, state, recovery and evaluation into autonomous workflows.',
    '15':'Systems engineering turns AI demos into reliable asynchronous workflows and services.',
    '16':'AI QE turns quality from a manual opinion into repeatable datasets, tests, evaluation and release gates.',
    '17':'Production engineering covers deployment, observability, latency, cost and operational reliability.',
    '18':'Security and responsible AI are required to operate systems safely in real environments.',
    '19':'Capstones integrate the entire stack into evidence you can show to another engineer or employer.'
  }[String(id)] || 'Use this skill as a building block for the next phase and connect it to a real AI system.');


  const themeBtn=document.getElementById('themeBtn');
  if(themeBtn){const t=localStorage.getItem('puneeth-theme');if(t)document.documentElement.dataset.theme=t;themeBtn.onclick=()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('puneeth-theme',next)}}

  const navStats=document.getElementById('navStats');
  if(navStats){const s=overallStats();navStats.textContent=`${s.percent}% complete`;}

  const dashboardStats=document.getElementById('dashboardStats');
  const getCurrentPhase=()=>{
    const unlocked=phases.filter(p=>phaseUnlocked(p[0]) && !isOptionalPhase(p[0]));
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
  if(journey){journey.innerHTML=phases.map((p,i)=>{const done=completedLessons(p),complete=phaseComplete(p[0]),unlocked=phaseUnlocked(p[0]),optional=isOptionalPhase(p[0]);return `<div class="journey-row ${complete?'journey-complete':''}"><span class="journey-num">${complete?'✓':p[0]}</span><div class="journey-copy"><b>${p[1]}${optional?'<span class="optional-badge">Optional</span>':''}</b><span>${p[2]}</span><small>${done}/${p[3].length} lessons ${complete?'· Complete':unlocked?'· Available':optional?'· Optional':'· Locked'}</small></div><a class="btn" href="curriculum.html#phase-${p[0]}">${i===0?'Start':unlocked?'Open':'Preview'} →</a></div>`}).join('');}

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
          <div class="phase-title"><div><div class="eyebrow">PHASE ${p[0]} ${complete?'· COMPLETE':!unlocked?'· LOCKED':isOptionalPhase(p[0])?'· OPTIONAL SPECIALIZATION':''}</div><h2>${p[1]}${isOptionalPhase(p[0])?'<span class="optional-badge">Optional specialization</span>':''}</h2></div><div class="phase-summary"><small>${p[2]}</small><strong>${done}/${p[3].length} lessons</strong></div></div>
          ${!unlocked?`<div class="lock-banner"><span>🔒</span><div><b>Complete the previous core phase first.</b><p>This phase is visible in preview mode. Finish the prerequisite core phase to unlock it.</p></div><a class="btn" href="lesson.html?id=${p[0]}-1&preview=1">Preview phase →</a></div>`:''}${isOptionalPhase(p[0])&&unlocked?`<div class="callout"><b>Optional specialization</b><p>This phase is available after Phase ${previousPhase(p[0])?.[0]||'04'} but does not block the core AI Engineering path.</p></div>`:''}
          <div class="lessons">${matches.map((x,j)=>`<div class="lesson-row ${prog[x.id]?'done':''} ${!unlocked?'disabled':''}"><span class="idx">${String(j+1).padStart(2,'0')}</span>${unlocked?`<a class="title" href="lesson.html?id=${x.id}">${x.title}</a>`:`<a class="title" href="lesson.html?id=${x.id}&preview=1">${x.title}</a>`}<label class="tag"><input class="check" type="checkbox" data-id="${x.id}" ${prog[x.id]?'checked':''} ${!unlocked?'disabled':''}> ${prog[x.id]?'done':'complete'}</label></div>`).join('')}</div>
          <div class="phase-footer"><span>${complete?'✓ Assessment passed':isOptionalPhase(p[0])?'Optional assessment · does not block core progression':'Assessment required to unlock the next core phase'}</span><a href="assessment.html?phase=${p[0]}">${complete?'Review assessment':'Take assessment →'}</a></div>
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
    else {const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');const resources=(data.resources||[]).map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener">${r.label} ↗</a></li>`).join('');const gallery=data.gallery?`<section class="reference-visual"><div class="experience-kicker">REFERENCE VISUAL · LEARNER-SUPPLIED</div><h2>${data.gallery.title}</h2><figure><img src="${data.gallery.src}" alt="${data.gallery.title} reference diagram" loading="lazy"><figcaption>${data.gallery.caption}</figcaption></figure><div class="reference-note"><b>Use it actively:</b> redraw the system, identify boundaries, then challenge one assumption. The production atlas uses original diagrams so the curriculum is not dependent on third-party artwork.</div><small class="source-note">Reference image supplied in this conversation; credit visible in the source image. Not presented as original Puneeth AI Engineering artwork.</small></section>`:'';const originalVisual=data.originalVisual?`<section class="original-visual"><div class="experience-kicker">PUNEETH ORIGINAL MODEL</div><h2>System view</h2><img src="${data.originalVisual}" alt="Original system diagram for ${esc(data.title)}"><p class="muted">Use this version for the exercise: hide the labels, redraw it, and explain every arrow.</p></section>`:'';const saved=readLabEvidence(data.id);const needsLab=!!data.experience;lesson.innerHTML=`<div class="eyebrow">PHASE ${data.phase} · ${data.phaseName.toUpperCase()} ${preview?'· PREVIEW':''}</div><h1>${data.title}</h1><div class="meta">LESSON ${data.id} · LEARN / EXPERIMENT / BUILD / BREAK / PROVE</div>${preview&&!unlocked?'<div class="callout warning">Preview mode: this lesson is visible so you can see what is ahead. Complete the previous phase to unlock progress tracking.</div>':''}<p class="lead">${data.summary}</p><div class="lesson-quality-strip"><span><b>Level</b>${data.competency?.difficulty||'Core'}</span><span><b>Time</b>${data.competency?.time||'30–45 min'}</span><span><b>Artifact</b>${data.competency?.artifact||'Evidence note'}</span>${data.competency?.reviewed?`<span><b>Reviewed</b>${data.competency.reviewed}</span>`:''}${data.competency?.freshness?`<span class="freshness"><b>Freshness</b>${data.competency.freshness}</span>`:''}</div><div class="skill-card"><div><div class="skill-label">Skill target</div><h3>${data.experience?.title||data.title}</h3><p>${data.body}</p></div><div><div class="skill-label">Used later</div><h3>Transfer the skill</h3><p>${data.experience?.transfer||phaseTransfer(data.phase)}</p></div></div><h2>What you'll learn</h2><ul>${data.takeaways.map(x=>`<li>${x}</li>`).join('')}</ul><h2>Build it</h2><p>Start with the smallest useful implementation. Inspect intermediate values before adding abstractions.</p><pre><code>${esc(data.code)}</code></pre><div class="practice-brief"><div class="experience-kicker">HANDS-ON PRACTICE</div><h2>Do the work</h2><p>${data.practice}</p></div>${gallery}${originalVisual}${renderLab(data,esc)}<h2>Common mistakes</h2><ul>${(data.mistakes||['Skipping the prerequisite concept.','Copying code without understanding the output.','Measuring only whether code runs, not whether it is correct.']).map(x=>`<li>${x}</li>`).join('')}</ul>${resources?`<h2>Further reading</h2><ul>${resources}</ul>`:''}${unlocked?`<div class="completion-block"><div class="completion-copy"><div class="experience-kicker">PROGRESS GATE</div><b>${saved?'Evidence recorded.':'Complete the engineering lab before marking this lesson complete.'}</b><span>This is a self-reported mastery gate: provide concrete evidence and complete the success criteria. The platform does not claim to independently verify your work.</span></div><button id="complete" class="complete ${prog[data.id]?'done':''}" ${needsLab&&!saved?'disabled':''}>${prog[data.id]?'✓ Completed':saved?'Mark lesson complete':'Save lab evidence first'}</button></div>`:'<div class="callout">🔒 Complete the prerequisite phase to mark this lesson complete.</div>'}`;
      if(unlocked){
        const saveBtn=document.getElementById('saveLab');
        saveBtn?.addEventListener('click',()=>{const fields={};document.querySelectorAll('[data-proof-field]').forEach(el=>fields[el.dataset.proofField]=el.value.trim());const status=document.getElementById('labStatus');const short=Object.entries(fields).filter(([,v])=>v.length<25);const criteria=[...document.querySelectorAll('[data-success-check]')];const checks={};criteria.forEach(el=>checks[el.value]=el.checked);const artifact=document.querySelector('[data-artifact]')?.value.trim()||'';if(short.length){status.textContent=`Add concrete evidence to all four fields. ${short.length} field(s) still need more detail.`;status.className='lab-status error';return}if(criteria.length && criteria.some(el=>!el.checked)){status.textContent='Complete every success criterion after you have actually performed it.';status.className='lab-status error';return}saveLabEvidence(data.id,{fields,checks,artifact,savedAt:new Date().toISOString(),type:data.experience?.type||'Build',title:data.title});status.textContent='✓ Evidence saved locally. This is your self-reported learning record.';status.className='lab-status success';const complete=document.getElementById('complete');if(complete){complete.disabled=false;complete.textContent=prog[data.id]?'✓ Completed':'Mark lesson complete'}});
        document.getElementById('complete')?.addEventListener('click',()=>{const evidence=readLabEvidence(data.id);if(needsLab&&!evidence){document.getElementById('labStatus').textContent='Save your lab evidence first.';return}const p=getProgress();const nowComplete=!p[data.id];p[data.id]=nowComplete?1:0;if(!p[data.id])delete p[data.id];saveProgress(p);if(window.PuneethAuth?.logEvent)window.PuneethAuth.logEvent(nowComplete?'lesson_completed':'lesson_uncompleted',{lesson:data.id,phase:data.phase,labEvidence:!!evidence});location.reload()});
      }
    }

    const side=document.getElementById('lessonSide');if(side)side.innerHTML=`<div class="side-title">${phase[1]}</div>${phase[3].map((x,i)=>{const lid=`${phase[0]}-${i+1}`;return `<a class="side-link ${lid===data.id?'current':''}" href="lesson.html?id=${lid}${!unlocked?'&preview=1':''}">${prog[lid]?'✓ ':''}${x}</a>`}).join('')}<a class="side-link" href="assessment.html?phase=${phase[0]}">Assessment →</a><a class="side-link" href="curriculum.html">← Back to curriculum</a>`;
  }

  const assessment=document.getElementById('assessmentContent');
  if(assessment){const id=new URLSearchParams(location.search).get('phase')||'00';const phase=phases.find(p=>p[0]===id)||phases[0];const unlocked=phaseUnlocked(id);const questions=assessments[id]||[];const existing=assessmentPassed(id);const done=completedLessons(phase);const passMark=Math.ceil(questions.length*0.8);
    assessment.innerHTML=`<div class="eyebrow">PHASE ${id} ASSESSMENT</div><h1>${phase[1]}</h1><p class="lead">Complete all ${phase[3].length} lessons, then score at least <b>80%</b> to prove the phase${isOptionalPhase(id)?' as an optional specialization':' and unlock the next core phase'}.</p>${!unlocked&&id!=='00'?`<div class="callout warning">This phase is locked for progression. You can preview the assessment, but your result will not unlock this phase.</div>`:''}${isOptionalPhase(id)&&unlocked?`<div class="callout"><b>Optional specialization</b><p>Passing this assessment records your specialization progress but does not block the core path.</p></div>`:''}<div class="assessment-meta"><b>${done}/${phase[3].length}</b><span>lessons completed</span><b>${questions.length}</b><span>questions</span><b>${passMark}/${questions.length}</b><span>needed to pass</span></div>${questions.map((q,i)=>`<fieldset class="question"><legend>${i+1}. ${q.q}</legend>${q.options.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}</fieldset>`).join('')}<button class="btn primary" id="submitAssessment">${existing?'Retake assessment':'Submit assessment'}</button><div id="assessmentResult"></div>`;
    document.getElementById('submitAssessment').onclick=()=>{let score=0;questions.forEach((q,i)=>{const el=document.querySelector(`input[name="q${i}"]:checked`);if(el&&Number(el.value)===q.answer)score++});const passed=score>=passMark;const results=getAssessments();if(passed&&done===phase[3].length&&unlocked){results[id]=true;saveAssessments(results);if(window.PuneethAuth?.logEvent)window.PuneethAuth.logEvent('phase_completed',{phase:id,score,total:questions.length})}else if(window.PuneethAuth?.logEvent){window.PuneethAuth.logEvent('assessment_attempt',{phase:id,score,total:questions.length,passed})}const result=document.getElementById('assessmentResult');result.className=`result ${passed?'success':'retry'}`;result.innerHTML=passed&&done===phase[3].length&&unlocked?`<h3>🎉 Phase complete</h3><p>You scored ${score}/${questions.length}. You demonstrated the phase fundamentals, so the next phase is now unlocked.</p><a class="btn" href="${phases[Number(id)+1]?'curriculum.html#phase-'+phases[Number(id)+1][0]:'curriculum.html'}">Continue →</a>`:`<h3>${passed?'Assessment passed':'Keep practicing'}</h3><p>You scored ${score}/${questions.length}. ${done<phase[3].length?'Complete all lessons before the phase can be completed.':'You need at least '+passMark+' correct answers. Review the lessons, retry, and focus on explaining why each answer is correct.'}</p>`;}
  }

  window.PuneethPortfolio={init(){const list=document.getElementById('portfolioList'),summary=document.getElementById('portfolioSummary');const entries=()=>listLabEvidence().sort((a,b)=>String(b.savedAt).localeCompare(String(a.savedAt)));const render=()=>{const e=entries();summary.innerHTML=`<div class="portfolio-stat"><b>${e.length}</b><span>saved labs</span></div><div class="portfolio-stat"><b>${e.filter(x=>x.artifact).length}</b><span>with artifacts</span></div><div class="portfolio-stat"><b>${e.filter(x=>x.checks&&Object.values(x.checks).every(Boolean)).length}</b><span>self-checks complete</span></div>`;list.innerHTML=e.length?e.map(x=>{const id=x.id||'';const lesson=(()=>{try{return lessonData(id)[0]}catch(err){return null}})();const fields=Object.entries(x.fields||{}).map(([k,v])=>`<div><b>${k}</b><p>${String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}</p></div>`).join('');return `<article class="portfolio-card"><div class="eyebrow">${lesson?`PHASE ${lesson.phase} · ${lesson.title}`:'LAB'}</div><div class="portfolio-meta"><span>${x.type||'Build'}</span><span>${new Date(x.savedAt||Date.now()).toLocaleDateString()}</span></div>${x.artifact?`<div class="artifact-pill">Artifact: ${String(x.artifact).replaceAll('<','&lt;')}</div>`:''}<div class="portfolio-fields">${fields}</div>${lesson?`<a class="btn" href="lesson.html?id=${id}">Review lesson →</a>`:''}</article>`}).join(''):'<div class="no-results">No saved lab evidence yet. Complete an engineering lab and save your evidence here.</div>'};render();document.getElementById('exportPortfolio')?.addEventListener('click',()=>{const e=entries();const lines=['# Puneeth AI Engineering — Proof Portfolio','',`Exported: ${new Date().toISOString()}`,'','This is a self-reported learning record. It is not independently verified.',''];e.forEach(x=>{lines.push(`## ${x.title||x.id}`,`Type: ${x.type||''}`,`Saved: ${x.savedAt||''}`,'',...Object.entries(x.fields||{}).map(([k,v])=>`### ${k}\n${v}`),x.artifact?`### Artifact\n${x.artifact}`:'','');});const blob=new Blob([lines.join('\n')],{type:'text/markdown'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='puneeth-ai-engineering-proof-portfolio.md';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)});document.getElementById('clearPortfolio')?.addEventListener('click',()=>{if(confirm('Clear all locally saved lab evidence? This cannot be undone.')){Object.keys(localStorage).filter(k=>k.startsWith('puneeth_lab_')).forEach(k=>localStorage.removeItem(k));render()}})}};

})();
