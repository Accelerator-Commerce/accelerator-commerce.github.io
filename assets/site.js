
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href')); if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}
}));
const search=document.querySelector('[data-doc-search]');
if(search){
 const items=[...document.querySelectorAll('[data-doc-item]')];
 const empty=document.createElement('p');
 empty.className='search-empty';empty.hidden=true;
 const emptyText=document.createElement('span');
 empty.append(emptyText,' Try ');
 const supportLink=document.createElement('a');
 supportLink.href='/support.html';supportLink.textContent='Support';
 empty.append(supportLink,'.');
 search.insertAdjacentElement('afterend',empty);
 search.addEventListener('input',()=>{
  const q=search.value.trim().toLowerCase();
  let anyVisible=false;
  items.forEach(item=>{
   const links=item.querySelectorAll('.linklist li');
   if(links.length){
    let hasMatch=false;
    links.forEach(li=>{const m=!q||li.textContent.toLowerCase().includes(q);li.hidden=!m;if(m)hasMatch=true});
    item.hidden=!hasMatch;if(hasMatch)anyVisible=true;
   }else{
    const m=!q||item.textContent.toLowerCase().includes(q);
    item.hidden=!m;if(m)anyVisible=true;
   }
  });
  empty.hidden=anyVisible||!q;
  if(!empty.hidden)emptyText.textContent='No results for "'+search.value.trim()+'".';
 });
}

const menuBtn=document.querySelector('.menu-btn'),navlinks=document.querySelector('.navlinks');
if(menuBtn&&navlinks){
 menuBtn.addEventListener('click',()=>{const open=navlinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
 navlinks.addEventListener('click',e=>{if(e.target.tagName==='A'){navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
 document.addEventListener('click',e=>{if(navlinks.classList.contains('open')&&!navlinks.contains(e.target)&&!menuBtn.contains(e.target)){navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navlinks.classList.contains('open')){navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.focus()}});
}
