const DB=process.env.APPWRITE_DATABASE_ID||'ai-engineering';
const LESSONS='protected_lessons_v1',UNLOCKS='phase_unlocks';
const CORE=['00','01','02','03','04','06','07','08','10','11','13','14','15','16','17','18'];
const RATE=new Map(),RATE_LIMIT=60,WINDOW=60000;
const json=(res,body,status=200,extra={})=>res.json(body,status,{'Cache-Control':'private, no-store',...extra});
const q=(a,v)=>JSON.stringify({method:'equal',attribute:a,values:[v]});
async function user(req){const auth=req.headers?.authorization||req.headers?.Authorization||'';const m=/^Bearer\s+(.+)$/i.exec(auth);const url=req.headers?.['x-supabase-url'];const key=req.headers?.['x-supabase-publishable-key'];if(!m||!url||!key||!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)||!String(key).startsWith('sb_publishable_'))return null;const r=await fetch(url.replace(/\/$/,'')+'/auth/v1/user',{headers:{Authorization:'Bearer '+m[1],apikey:key}});return r.ok?r.json():null;}
function h(){const key=process.env.APPWRITE_FUNCTION_API_KEY||'';if(!key)throw new Error('APPWRITE_FUNCTION_API_KEY unavailable');return {'X-Appwrite-Project':process.env.APPWRITE_FUNCTION_PROJECT_ID,'X-Appwrite-Key':key,'Content-Type':'application/json'};}
async function list(table,queries=[]){const u=process.env.APPWRITE_FUNCTION_API_ENDPOINT+'/databases/'+encodeURIComponent(DB)+'/tables/'+encodeURIComponent(table)+'/rows?total=true&'+queries.map(x=>'queries[]='+encodeURIComponent(x)).join('&');const r=await fetch(u,{headers:h()});const t=await r.text();let d={};try{d=JSON.parse(t)}catch(_){}if(!r.ok)throw new Error('Appwrite '+r.status+': '+(d.message||t));return d;}
function prev(phase){const i=CORE.indexOf(phase);return i<=0?null:CORE[i-1];}
function limit(uid){const now=Date.now();let x=RATE.get(uid)||{start:now,count:0};if(now-x.start>=WINDOW)x={start:now,count:0};x.count++;RATE.set(uid,x);if(RATE.size>5000){for(const[k,v]of RATE)if(now-v.start>=WINDOW)RATE.delete(k);}return x.count>RATE_LIMIT?Math.ceil((WINDOW-(now-x.start))/1000):0;}
export default async ({req,res,error})=>{
 if(req.method!=='GET')return json(res,{error:'Method not allowed'},405);
 const lessonId=String(req.query?.lessonId||'').trim();const version=String(req.query?.version||'v1').trim();
 if(!/^\d{2}-\d{1,3}$/.test(lessonId)||!/^[A-Za-z0-9._-]{1,16}$/.test(version))return json(res,{error:'Invalid lesson request'},400);
 try{
  const u=await user(req);if(!u?.id)return json(res,{error:'Authentication required'},401);
  const retry=limit(u.id);if(retry)return json(res,{error:'Rate limit exceeded'},429,{'Retry-After':String(retry)});
  const phase=lessonId.split('-')[0];
  if(phase!=='00'){const p=prev(phase);if(!p)return json(res,{error:'Phase locked',code:'phase-locked'},403);const unlocked=await list(UNLOCKS,[q('userId',u.id),q('phaseId',p)]);if(!unlocked.rows?.length)return json(res,{error:'Phase locked',code:'phase-locked'},403);}
  const rows=await list(LESSONS,[q('lesson_id',lessonId),q('version',version),q('published',true)]);if(!rows.rows?.length)return json(res,{error:'Lesson not found'},404);
  let content;try{content=JSON.parse(rows.rows[0].data.payload)}catch(_){error('Invalid protected payload: '+lessonId);return json(res,{error:'Lesson content unavailable'},500);}
  return json(res,{ok:true,lessonId,version,content});
 }catch(e){error('Protected lesson retrieval failed: '+(e?.message||e));return json(res,{error:'Unable to retrieve lesson'},500);}
};