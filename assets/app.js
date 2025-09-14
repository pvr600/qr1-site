
const KEY='qr1_codes';
function getCodes(){ try{ return JSON.parse(localStorage.getItem(KEY)||'[]'); }catch(e){ return []; } }
function saveCodes(arr){ localStorage.setItem(KEY, JSON.stringify(arr)); }
function addCode(code){ const arr=getCodes(); arr.unshift(code); saveCodes(arr); localStorage.setItem('qr1_last_code_id', code.id); }
function lastCode(){ const id=localStorage.getItem('qr1_last_code_id'); const arr=getCodes(); return arr.find(c=>c.id===id) || arr[0]; }
function setLast(id){ localStorage.setItem('qr1_last_code_id', id); }
function uid(){ return 'qr_'+Date.now(); }
function demoScans(){ const n=7; return Array.from({length:n},()=>Math.floor(5+Math.random()*10)); }
function copy(text){ navigator.clipboard.writeText(text).then(()=>alert('Copied!')); }
// Nav active helper
(function highlightNav(){ const path=location.pathname.split('/').pop()||'index.html'; document.querySelectorAll('nav .links a').forEach(a=>{ if(a.getAttribute('href')===path) a.classList.add('active'); }); })();
