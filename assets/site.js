
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href')); if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}
}));
const search=document.querySelector('[data-doc-search]');
if(search){
 const items=[...document.querySelectorAll('[data-doc-item]')];
 search.addEventListener('input',()=>{const q=search.value.toLowerCase();items.forEach(i=>i.hidden=!i.textContent.toLowerCase().includes(q))});
}

const menuBtn=document.querySelector('.menu-btn'),navlinks=document.querySelector('.navlinks');
if(menuBtn&&navlinks){
 menuBtn.addEventListener('click',()=>{const open=navlinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
 navlinks.addEventListener('click',e=>{if(e.target.tagName==='A'){navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
 document.addEventListener('click',e=>{if(navlinks.classList.contains('open')&&!navlinks.contains(e.target)&&!menuBtn.contains(e.target)){navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navlinks.classList.contains('open')){navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.focus()}});
}
