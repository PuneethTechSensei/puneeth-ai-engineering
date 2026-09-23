const DB=process.env.APPWRITE_DATABASE_ID||'ai-engineering';
const PROGRESS='learner_progress',ATTEMPTS='quiz_attempts',UNLOCKS='phase_unlocks';
const json=(res,body,status=200)=>res.json(body,status,{'Cache-Control':'private, no-store'});
const q=(a,v)=>JSON.stringify({method:'equal',attribute:a,values:[v]});
async function user(req){
  const auth=req.headers?.authorization||req.headers?.Authorization||'';const m=/^Bearer\s+(.+)$/i.exec(auth);const url=req.headers?.['x-supabase-url'];const key=req.headers?.['x-supabase-publishable-key'];
  if(!m||!url||!key||!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)||!String(key).startsWith('sb_publishable_'))return null;
  const r=await fetch(url.replace(/\/$/,'')+'/auth/v1/user',{headers:{Authorization:'Bearer '+m[1],apikey:key}});return r.ok?r.json():null;
}
function h(){const key=process.env.APPWRITE_FUNCTION_API_KEY||'';if(!key)throw new Error('APPWRITE_FUNCTION_API_KEY unavailable');return {'X-Appwrite-Project':process.env.APPWRITE_FUNCTION_PROJECT_ID,'X-Appwrite-Key':key,'Content-Type':'application/json'};}
async function list(table,queries=[]){const u=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows?total=true&'+queries.map(x=>'queries[]='+encodeURIComponent(x)).join('&');const r=await fetch(u,{headers:h()});const t=await r.text();let d={};try{d=JSON.parse(t)}catch(_){}if(!r.ok)throw new Error('Appwrite '+r.status+': '+(d.message||t));return d;}
export default async ({req,res,error})=>{
  if(req.method!=='GET')return json(res,{error:'Method not allowed'},405);
  try{
    const u=await user(req);if(!u?.id)return json(res,{error:'Authentication required'},401);
    const [p,a,un]=await Promise.all([
      list(PROGRESS,[q('userId',u.id),q('status','completed')]),
      list(ATTEMPTS,[q('userId',u.id),q('passed',true)]),
      list(UNLOCKS,[q('userId',u.id)])
    ]);
    const lessonProgress={};for(const row of p.rows||[])lessonProgress[row.data.lessonId]=1;
    const passedAssessments={};for(const row of a.rows||[]){const phase=row.data.phaseId;const quiz=row.data.quizId;if(/^phase-\d{2}-assessment-v1$/.test(quiz))passedAssessments[phase]=true;}
    const unlockedPhases=new Set(['00']);for(const row of un.rows||[])unlockedPhases.add(String(row.data.phaseId));
    return json(res,{ok:true,authenticated:true,lessonProgress,passedAssessments,unlockedPhases:[...unlockedPhases]});
  }catch(e){error('Learning state failed: '+(e?.message||e));return json(res,{error:'Learning state unavailable'},500);}
};