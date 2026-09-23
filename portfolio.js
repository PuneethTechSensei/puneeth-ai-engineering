(function(){
  const init=()=>window.PuneethPortfolio?.init?.();
  if(window.__PUNEETH_APP_READY__) init();
  else window.addEventListener('puneeth:appready',init,{once:true});
})();