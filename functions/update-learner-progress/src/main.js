import crypto from "node:crypto";

const DB=process.env.APPWRITE_DATABASE_ID||'ai-engineering';
const LESSONS='protected_lessons_v1',PROGRESS='learner_progress',EVIDENCE='lesson_evidence',UNLOCKS='phase_unlocks';
const CORE=['00','01','02','03','04','06','07','08','10','11','13','14','15','16','17','18','19'];
const json=(res,body,status=200)=>res.json(body,status,{'Cache-Control':'private, no-store'});
const q=(a,v)=>JSON.stringify({method:'equal',attribute:a,values:[v]});
async function user(req){const auth=req.headers?.authorization||req.headers?.Authorization||'';const m=/^Bearer\s+(.+)$/i.exec(auth);const url=req.headers?.['x-supabase-url'];const key=req.headers?.['x-supabase-publishable-key'];if(!m||!url||!key||!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)||!String(key).startsWith('sb_publishable_'))return null;const r=await fetch(url.replace(/\/$/,'')+'/auth/v1/user',{headers:{Authorization:'Bearer '+m[1],apikey:key}});return r.ok?r.json():null;}
function h(){const key=process.env.APPWRITE_FUNCTION_API_KEY||'';if(!key)throw new Error('APPWRITE_FUNCTION_API_KEY unavailable');return {'X-Appwrite-Project':process.env.APPWRITE_FUNCTION_PROJECT_ID,'X-Appwrite-Key':key,'Content-Type':'application/json'};}
async function list(table,queries=[]){const u=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows?total=true&'+queries.map(x=>'queries[]='+encodeURIComponent(x)).join('&');const r=await fetch(u,{headers:h()});const t=await r.text();let d={};try{d=JSON.parse(t)}catch(_){}if(!r.ok)throw new Error('Appwrite '+r.status+': '+(d.message||t));return d;}
async function write(table,rowId,data){const u=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows';const r=await fetch(u,{method:'POST',headers:h(),body:JSON.stringify({rowId,data})});const t=await r.text();let d={};try{d=JSON.parse(t)}catch(_){}if(!r.ok)throw new Error('Appwrite '+r.status+': '+(d.message||t));return d;}
async function patch(table,rowId,data){const u=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows/'+encodeURIComponent(rowId);const r=await fetch(u,{method:'PATCH',headers:h(),body:JSON.stringify({data})});const t=await r.text();if(!r.ok)throw new Error('Appwrite '+r.status+': '+t);return r.ok;}
function previousCore(phase){const i=CORE.indexOf(phase);return i<=0?null:CORE[i-1];}
async function authorized(uid,phase){if(phase==='00')return true;const prev=previousCore(phase);if(!prev)return false;return (await list(UNLOCKS,[q('userId',uid),q('phaseId',prev)])).rows?.length>0;}
export default async ({req,res,error})=>{
  if(req.method!=='POST')return json(res,{error:'Method not allowed'},405);
  try{
    const u=await user(req);if(!u?.id)return json(res,{error:'Authentication required'},401);
    let b={};try{b=JSON.parse(req.body||'{}')}catch(_){return json(res,{error:'Invalid JSON'},400);}
    const lessonId=String(b.lessonId||'').trim();if(!/^\d{2}-\d{1,3}$/.test(lessonId))return json(res,{error:'Invalid lesson id'},400);
    const lesson=await list(LESSONS,[q('lesson_id',lessonId),q('published',true)]);if(!lesson.rows?.length)return json(res,{error:'Lesson not found'},404);
    const phase=lessonId.split('-')[0];if(!await authorized(u.id,phase))return json(res,{error:'Phase locked',code:'phase-locked'},403);
    const ev=await list(EVIDENCE,[q('userId',u.id),q('lessonId',lessonId)]);if(!ev.rows?.length)return json(res,{error:'Save lesson evidence before completing it.'},400);
    const now=new Date().toISOString();const current=await list(PROGRESS,[q('userId',u.id),q('lessonId',lessonId)]);
    const data={userId:u.id,lessonId,phaseId:phase,status:'completed',progressPercent:100,completedAt:now,updatedAt:now};
    if(current.rows?.length)await patch(PROGRESS,current.rows[0].$id,data);else await write(PROGRESS,crypto.randomUUID(),data);
    const p=await list(PROGRESS,[q('userId',u.id),q('phaseId',phase),q('status','completed')]);
    return json(res,{ok:true,lessonId,phaseId:phase,state:{authenticated:true,lessonProgress:{[lessonId]:1},completedCount:p.total||0}});
  }catch(e){error('Lesson progress failed: '+(e?.message||e));return json(res,{error:'Progress service unavailable'},500);}
};