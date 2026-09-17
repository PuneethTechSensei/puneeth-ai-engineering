(function(){
  const form=document.getElementById('authForm'); if(!form)return;
  const email=document.getElementById('email'),password=document.getElementById('password'),msg=document.getElementById('authMessage');
  const signup=document.getElementById('signupBtn'),signin=document.getElementById('signinBtn'),signout=document.getElementById('signoutBtn'),title=document.getElementById('accountTitle'),copy=document.getElementById('accountCopy');
  const show=(text,ok=false)=>{msg.textContent=text;msg.className=`form-note ${ok?'success-text':'error-text'}`};
  const update=({user,configured})=>{
    if(!configured){show('Account sync is not configured yet. You can still use the site locally.');return;}
    if(user){title.textContent='You are signed in.';copy.textContent=`${user.email||'Learner'} · your progress can sync across devices.`;form.hidden=true;signout.hidden=false;show('Your account is active. Progress sync is enabled.',true)}
    else {title.textContent='Create your free account';copy.textContent='No subscription. No learner payment. Your core learning access remains public.';form.hidden=false;signout.hidden=true}
  };
  window.addEventListener('puneeth:authready',e=>update(e.detail));window.addEventListener('puneeth:authchange',e=>update({user:e.detail.user,configured:true}));
  form.addEventListener('submit',async e=>{e.preventDefault();const sb=window.PuneethAuth?.client();if(!sb){show('Account service is not configured.');return}show('Creating your account…');const {error}=await sb.auth.signUp({email:email.value.trim(),password:password.value,options:{emailRedirectTo:location.origin+'/account.html'}});if(error)show(error.message);else show('Account created. Check your email if confirmation is enabled, then sign in.',true)});
  signin.onclick=async()=>{const sb=window.PuneethAuth?.client();if(!sb){show('Account service is not configured.');return}show('Signing in…');const {error}=await sb.auth.signInWithPassword({email:email.value.trim(),password:password.value});if(error)show(error.message);else show('Signed in.',true)};
  signout.onclick=async()=>{const sb=window.PuneethAuth?.client();if(sb)await sb.auth.signOut();show('Signed out.',true)};
})();
