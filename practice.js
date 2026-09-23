(function(){
  const boot=async()=>{
    const params=new URLSearchParams(location.search);
    const phase=params.get('phase')||'00';
    const root=document.getElementById('assessmentContent');
    if(!root||phase!=='00'||!window.PuneethAppwrite?.configured?.()) return;

    const setResult=await window.PuneethAppwrite.getPracticeQuestions('python-runtime-v1');
    if(!setResult.ok) return;

    const set={quizId:setResult.quizId,phaseId:setResult.phaseId,topic:setResult.topic,title:setResult.title,questions:setResult.questions||[]};
    const esc=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
    const stateKey='puneeth-practice-'+set.quizId;
    const saved=(()=>{try{return JSON.parse(localStorage.getItem(stateKey)||'{}')}catch{return{}}})();
    const section=document.createElement('section');
    section.className='practice-set';
    section.innerHTML='<div class="eyebrow">PRACTICE · '+esc(set.topic.toUpperCase())+'</div><h2>'+esc(set.title)+'</h2><p class="lead">Applied practice is separate from the phase gate. Work the scenario, submit your answers, then inspect the server-returned explanations and retry.</p><div id="practiceProgress" class="practice-progress"></div>'+set.questions.map((q,i)=>'<fieldset class="question practice-question"><legend>'+(i+1)+'. '+esc(q.questionText)+'</legend>'+q.options.map((o,j)=>'<label><input type="radio" name="practice-'+esc(q.questionId)+'" value="'+j+'"> '+esc(o)+'</label>').join('')+'<div class="practice-explanation" id="ex-'+esc(q.questionId)+'" hidden></div></fieldset>').join('')+'<button class="btn" id="checkPractice">Check practice answers</button><div id="practiceResult"></div>';
    root.appendChild(section);

    const progress=section.querySelector('#practiceProgress');
    if(saved.score!==undefined) progress.textContent='Latest attempt: '+saved.score+'/'+saved.maxScore+' · '+saved.elapsedSeconds+'s';
    let started=Date.now();

    section.querySelector('#checkPractice').onclick=async()=>{
      const answers={};
      set.questions.forEach(q=>{const el=section.querySelector('input[name="practice-'+q.questionId+'"]:checked');answers[q.questionId]=el?Number(el.value):null;});
      const elapsedSeconds=Math.max(1,Math.round((Date.now()-started)/1000));
      const button=section.querySelector('#checkPractice');
      button.disabled=true;button.textContent='Checking securely…';
      const result=await window.PuneethAppwrite.submitQuiz({kind:'practice',quizId:set.quizId,phaseId:set.phaseId,answers,elapsedSeconds});
      if(!result.ok){
        button.disabled=false;button.textContent='Check practice answers';
        const resultBox=section.querySelector('#practiceResult');resultBox.className='result retry';resultBox.innerHTML='<h3>Practice could not be submitted</h3><p>'+esc(result.error||'Try again after checking your session.')+'</p>';
        return;
      }
      (result.explanations||[]).forEach(item=>{const box=section.querySelector('#ex-'+item.questionId);if(box){box.hidden=false;box.innerHTML='<b>Why</b><p>'+esc(item.explanation||'')+'</p>';}});
      localStorage.setItem(stateKey,JSON.stringify({score:result.score,maxScore:result.maxScore,elapsedSeconds,completedAt:new Date().toISOString()}));
      progress.textContent='Latest attempt: '+result.score+'/'+result.maxScore+' · '+elapsedSeconds+'s';
      const resultBox=section.querySelector('#practiceResult');
      resultBox.className='result '+(result.score===result.maxScore?'success':'retry');
      resultBox.innerHTML='<h3>'+(result.score===result.maxScore?'✓ Practice complete':'Review, diagnose and retry')+'</h3><p>You scored '+result.score+'/'+result.maxScore+'. The explanation is revealed after the server has scored the submission.</p>';
      button.disabled=false;button.textContent='Check practice answers';started=Date.now();
    };
  };
  if(window.__PUNEETH_APP_READY__) boot();
  else window.addEventListener('puneeth:appready',boot,{once:true});
})();