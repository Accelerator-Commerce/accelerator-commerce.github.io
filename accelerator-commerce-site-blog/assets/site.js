
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href')); if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}
}));
const search=document.querySelector('[data-doc-search]');
if(search){
 const items=[...document.querySelectorAll('[data-doc-item]')];
 search.addEventListener('input',()=>{const q=search.value.toLowerCase();items.forEach(i=>i.hidden=!i.textContent.toLowerCase().includes(q))});
}
