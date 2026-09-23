import crypto from "node:crypto";

const DB=process.env.APPWRITE_DATABASE_ID||'ai-engineering';
const LESSONS='protected_lessons_v1';
const EVIDENCE='lesson_evidence';
const UNLOCKS='phase_unlocks';
const CORE=['00','01','02','03','04','06','07','08','10','11','13','14','15','16','17','18','19'];

const json=(res,body,status=200)=>res.json(body,status,{'Cache-Control':'private, no-store'});
const q=(a,v)=>JSON.stringify({method:'equal',attribute:a,values:[v]});

async function supabaseUser(req){
  const auth=req.headers?.authorization||req.headers?.Authorization||'';
  const m=/^Bearer\s+(.+)$/i.exec(auth);const url=req.headers?.['x-supabase-url'];const key=req.headers?.['x-supabase-publishable-key'];
  if(!m||!url||!key||!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)||!String(key).startsWith('sb_publishable_'))return null;
  const r=await fetch(url.replace(/\/$/,'')+'/auth/v1/user',{headers:{Authorization:'Bearer '+m[1],apikey:key}});return r.ok?r.json():null;
}
function headers(){const key=process.env.APPWRITE_FUNCTION_API_KEY||'';if(!key)throw new Error('APPWRITE_FUNCTION_API_KEY unavailable');return {'X-Appwrite-Project':process.env.APPWRITE_FUNCTION_PROJECT_ID,'X-Appwrite-Key':key,'Content-Type':'application/json'};}
async function list(table,queries=[]){
  const url=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows?total=true&'+queries.map(x=>'queries[]='+encodeURIComponent(x)).join('&');
  const r=await fetch(url,{headers:headers()});const t=await r.text();let d={};try{d=JSON.parse(t)}catch(_){}if(!r.ok)throw new Error('Appwrite '+r.status+': '+(d.message||t));return d;
}
async function create(table,rowId,data){
  const url=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows';
  const r=await fetch(url,{method:'POST',headers:headers(),body:JSON.stringify({rowId,data})});const t=await r.text();let d={};try{d=JSON.parse(t)}catch(_){}if(!r.ok)throw new Error('Appwrite '+r.status+': '+(d.message||t));return d;
}
async function update(table,rowId,data){
  const url=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows/'+encodeURIComponent(rowId);
  const r=await fetch(url,{method:'PATCH',headers:headers(),body:JSON.stringify({data})});const t=await r.text();let d={};try{d=JSON.parse(t)}catch(_){}if(!r.ok)throw new Error('Appwrite '+r.status+': '+(d.message||t));return d;
}
function previousCore(phase){const i=CORE.indexOf(phase);return i<=0?null:CORE[i-1];}
async function authorized(userId,phase){
  if(phase==='00')return true;const prev=previousCore(phase);if(!prev)return false;
  const rows=await list(UNLOCKS,[q('userId',userId),q('phaseId',prev)]);return (rows.rows||[]).length>0;
}

export default async ({req,res,error})=>{
  if(req.method!=='POST')return json(res,{error:'Method not allowed'},405);
  try{
    const user=await supabaseUser(req);if(!user?.id)return json(res,{error:'Authentication required'},401);
    let body={};try{body=JSON.parse(req.body||'{}')}catch(_){return json(res,{error:'Invalid JSON'},400);}
    const lessonId=String(body.lessonId||'').trim();const phaseId=String(body.phaseId||lessonId.split('-')[0]).trim();
    if(!/^\d{2}-\d{1,3}$/.test(lessonId)||!/^(?:0\d|1\d)$/.test(phaseId))return json(res,{error:'Invalid lesson id'},400);
    const lesson=await list(LESSONS,[q('lesson_id',lessonId),q('published',true)]);if(!lesson.rows?.length)return json(res,{error:'Lesson not found'},404);
    if(!await authorized(user.id,phaseId))return json(res,{error:'Phase locked',code:'phase-locked'},403);
    const fields=body.fields&&typeof body.fields==='object'?body.fields:{};
    const checks=body.checks&&typeof body.checks==='object'?body.checks:{};
    const cleaned={};
    for(const key of ['f0','f1','f2','f3']){const value=String(fields[key]||'').trim();if(value.length<25)return json(res,{error:'All four evidence fields must contain at least 25 characters.'},400);cleaned[key]=value;}
    if(Object.keys(checks).length<1||Object.values(checks).some(v=>v!==true))return json(res,{error:'Complete every success criterion before saving evidence.'},400);
    const evidence={title:String(body.title||'').slice(0,255),type:String(body.type||'Build').slice(0,64),fields:cleaned,checks,artifact:String(body.artifact||'').slice(0,1000)};
    const now=new Date().toISOString();
    const current=await list(EVIDENCE,[q('userId',user.id),q('lessonId',lessonId)]);
    if(current.rows?.length) await update(EVIDENCE,current.rows[0].$id,{evidenceType:evidence.type,evidenceJson:JSON.stringify(evidence),verified:false,submittedAt:now});
    else await create(EVIDENCE,crypto.randomUUID(),{userId:user.id,lessonId,phaseId,evidenceType:evidence.type,evidenceJson:JSON.stringify(evidence),verified:false,submittedAt:now});
    return json(res,{ok:true,lessonId,phaseId,verified:false,submittedAt:now});
  }catch(e){error('Lesson evidence failed: '+(e?.message||e));return json(res,{error:'Evidence service unavailable'},500);}
};