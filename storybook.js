/* MAKE ME READ · Visual rebuild · functional interactive layer */
(() => {
  'use strict';
  const genres=[['Toutes les histoires','all'],['Aventure','adventure'],['Mystère','mystery'],['Vie quotidienne','daily'],['Imaginaire','fantasy'],['Humour','humour'],['Amitié','friendship'],['Nature','nature']];
  const readStore=(key,fallback)=>{try {return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback));}catch(e){return fallback;}};
  const saveStore=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));}catch(e){}};
  let favourites=new Set(readStore('mmr_favs',[]));
  let finished=new Set(readStore('mmr_finished',[]));
  let last=Number(readStore('mmr_last',-1));
  let activeText=null, pageGroups=[], pageIndex=0, levelFilter='all',lengthFilter='all';
  const $=id=>document.getElementById(id);
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const originalGo=window.goHome, originalOpen=window.openText;
  function stopAudio(){try{if('speechSynthesis' in window)window.speechSynthesis.cancel()}catch(e){}}
  function navOn(page){document.querySelectorAll('.story-navigation .nav-link').forEach(el=>el.classList.toggle('active',el.dataset.page===page));}
  function exitReader(){stopAudio();originalGo();document.body.classList.remove('cozy-reader');}
  function route(page){exitReader();document.body.classList.remove('cozy-landing','cozy-explore','cozy-saved');document.body.classList.add('cozy-'+page);navOn(page==='saved'?'saved':page);window.scrollTo(0,0)}
  window.showLanding=()=>{route('landing');navOn('home')};
  window.showExplore=()=>{route('explore');navOn('explore');buildLevelView();buildGenreView();const tab=document.querySelector('.htab');if(tab)switchHomeTab('level',tab);window.filterCatalogue()};
  window.showSaved=(onlyFav=false)=>{route('saved');navOn(onlyFav?'favorites':'saved');showSavedBooks(onlyFav)};
  window.goHome=window.showLanding;
  function makeCard(text){
    const c=document.createElement('article');c.className='book-card'+(text.longRead?' long-read':'');c.dataset.level=text.level;c.dataset.genre=(text.eyebrow||'').toLowerCase();c.dataset.title=text.title.toLowerCase();c.dataset.id=text.id;c.tabIndex=0;c.setAttribute('role','button');c.setAttribute('aria-label','Lire '+text.title);
    c.innerHTML=`<div class="book-cover"><img src="assets/covers/cover-${text.id}.webp" alt="" loading="lazy">${text.longRead?`<span class="cover-title">${escape(text.title)}</span><span class="cover-long-tag">GRAND RÉCIT · ${escape(text.level)}</span>`:`<span class="cover-level">${escape(text.level)}</span>`}<button class="fav-toggle ${favourites.has(text.id)?'saved':''}" aria-label="${favourites.has(text.id)?'Retirer des':'Ajouter aux'} favoris" type="button">${favourites.has(text.id)?'♥':'♡'}</button></div><div class="book-info"><h3>${escape(text.title)}</h3><p>${escape(text.preview||'')}</p>${text.longRead?'<span class="long-read-indicator">✦ Nouvelle histoire longue</span>':''}<div class="book-meta"><span>✦ ${escape(text.eyebrow)}</span><span>◷ ${escape(text.readTime)}</span></div></div>`;
    c.addEventListener('click',e=>{if(e.target.closest('.fav-toggle')){toggleFav(text.id);return;}window.openText(text)});
    c.addEventListener('keydown',e=>{if(e.target===c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();window.openText(text);}});
    return c;
  }
  window.makeCard=makeCard;
  function toggleFav(id){if(favourites.has(id))favourites.delete(id);else favourites.add(id);saveStore('mmr_favs',[...favourites]);document.querySelectorAll('.book-card').forEach(card=>{if(Number(card.dataset.id)!==id)return;const btn=card.querySelector('.fav-toggle');btn.classList.toggle('saved',favourites.has(id));btn.textContent=favourites.has(id)?'♥':'♡';btn.setAttribute('aria-label',favourites.has(id)?'Retirer des favoris':'Ajouter aux favoris')});const f=$('favoriteReader');if(f&&activeText?.id===id){f.classList.toggle('on',favourites.has(id));f.textContent=favourites.has(id)?'♥':'♡'}if(document.body.classList.contains('cozy-saved'))showSavedBooks(document.querySelector('.nav-link[data-page="favorites"]')?.classList.contains('active'))}
  function showSavedBooks(onlyFav){const host=$('viewLevel');const collection=onlyFav?TEXTS.filter(t=>favourites.has(t.id)):[...TEXTS].filter(t=>finished.has(t.id)||favourites.has(t.id)||t.id===last);host.innerHTML=`<div class="level-heading"><h2 style="font-family:Georgia,serif">${onlyFav?'♡ Mes favoris':'📖 Mes lectures'}</h2></div><div class="text-grid" id="savedBooksGrid"></div>`;const grid=$('savedBooksGrid');if(!collection.length){grid.innerHTML=`<p style="grid-column:1/-1;padding:20px">${onlyFav?'Clique sur le cœur d’une histoire pour l’ajouter ici.':'Commence une histoire pour la retrouver dans cet espace.'}</p>`;}else{collection.forEach(t=>grid.append(makeCard(t)));}}
  window.showProgress=()=>{route('saved');navOn('');const host=$('viewLevel');host.innerHTML=`<div class="progress-surface"><h2>✦ Mon parcours de lecture ✦</h2><div class="progress-icons">🧭 &nbsp; 📖 &nbsp; ⭐ &nbsp; 🏆</div><p><strong>${finished.size}</strong> histoire${finished.size>1?'s':''} terminée${finished.size>1?'s':''} · <strong>${favourites.size}</strong> favori${favourites.size>1?'s':''}</p><p>Chaque histoire est une nouvelle aventure. Continue à explorer à ton rythme !</p><button class="primary-cta" onclick="showExplore()">Explorer les histoires →</button></div>`};
  window.setLengthFilter=value=>{lengthFilter=value;document.querySelectorAll('.filter-length').forEach(b=>b.classList.toggle('active',b.dataset.length===value));window.filterCatalogue()};
  window.setLevelFilter=lvl=>{levelFilter=lvl;document.querySelectorAll('.filter-level').forEach(b=>b.classList.toggle('active',b.dataset.lvl===lvl));window.filterCatalogue()};
  window.filterCatalogue=()=>{const term=($('bookSearch')?.value||'').trim().toLowerCase();document.querySelectorAll('#viewLevel .book-card,#viewGenre .book-card').forEach(c=>{c.hidden=(levelFilter!=='all'&&c.dataset.level!==levelFilter)||(lengthFilter==='long'&&!TEXTS.some(t=>t.id===Number(c.dataset.id)&&t.longRead))||(lengthFilter==='short'&&TEXTS.some(t=>t.id===Number(c.dataset.id)&&t.longRead))||!!(term&&!(c.dataset.title+' '+c.dataset.genre).includes(term));c.style.display=c.hidden?'none':'';});};
  function readerTools(){const el=document.createElement('aside');el.className='reader-tools';el.setAttribute('aria-label','Outils de lecture');el.innerHTML=`<button type="button" data-tool="size" aria-label="Augmenter la taille du texte"><span class="tool-ico">Aa</span>Taille du texte</button><button type="button" data-tool="color" aria-label="Changer le fond de lecture"><span class="tool-ico">◉</span>Fond</button><button type="button" data-tool="dys"><span class="tool-ico">📖</span>Mode DYS</button><button type="button" data-tool="audio"><span class="tool-ico">◖))</span>Écouter</button><button type="button" data-tool="gloss"><span class="tool-ico">▤</span>Glossaire</button><button type="button" data-tool="strategies"><span class="tool-ico">✦</span>Stratégies</button>`;
    el.addEventListener('click',e=>{const target=e.target.closest('[data-tool]');if(!target)return;const tool=target.dataset.tool;
      if(tool==='size'){window.changeFontSize(1);return;}
      if(tool==='color'){window.toggleDysPanel();return;}
      if(tool==='dys'){window.toggleDys();return;}
      if(tool==='audio'){if(!('speechSynthesis' in window)){toast('Lecture audio indisponible dans ce navigateur.');return;}stopAudio();const utter=new SpeechSynthesisUtterance(activeText.paragraphs.map(p=>p.replace(/<[^>]*>/g,'')).join(' '));utter.lang='en-GB';utter.rate=.88;window.speechSynthesis.speak(utter);toast('Lecture audio en cours');return;}
      if(tool==='gloss'){document.querySelector('.gloss-sidebar')?.scrollIntoView({behavior:'smooth',block:'center'});return;}
      if(tool==='strategies'){document.querySelector('.strat-section')?.scrollIntoView({behavior:'smooth',block:'start'});return;}
    });return el;}
  function buildBook(){const article=$('articleBody');if(!article)return;const originalParagraphs=[...article.querySelectorAll(':scope > p')];pageGroups=[];let group=[],count=0;const maxWords=window.matchMedia('(max-width: 640px)').matches?185:90;
    for(const p of originalParagraphs){const words=(p.textContent||'').trim().split(/\s+/).filter(Boolean).length; if(group.length && count+words>maxWords){pageGroups.push(group);group=[];count=0;}group.push(p.outerHTML);count+=words;}if(group.length)pageGroups.push(group);if(!pageGroups.length)pageGroups=[['<p>Cette histoire ne contient pas encore de texte.</p>']];pageIndex=0;
    const parent=article.closest('.reader-panel');const wrap=document.createElement('div');wrap.className='open-book-wrap';const book=document.createElement('div');book.className='open-book';book.setAttribute('aria-label','Livre ouvert');const left=document.createElement('div');left.className='left-page';left.innerHTML='<div class="book-chapter">'+(activeText.longRead?'THE LONG READ COLLECTION · '+escape(activeText.level):'A STORY TO ENJOY')+'</div><div class="book-chapter-title">'+escape(activeText.title)+'</div>';left.append(article);const leaf=document.createElement('div');leaf.className='page-foil';leaf.id='bookPageNumber';left.append(leaf);const right=document.createElement('div');right.className='right-page';const sceneSrc=`assets/reading-scenes/scene-${activeText.id}.webp`;
    const sceneAlt=`Illustration de l’histoire ${activeText.title}`;
    const sceneCaption=escape(activeText.preview||'An illustrated moment from this story.');
    const sceneTitle=escape(activeText.title);
    // A compact printed illustration preserves the actual source detail.
    // Large areas are beautifully typeset instead of enlarging low-resolution pixels.
    right.innerHTML=`<div class="storybook-art-page" style="--scene:url('${sceneSrc}')">
      <div class="art-page-ornament" aria-hidden="true">✦ &nbsp; ❦ &nbsp; ✦</div>
      <div class="art-page-picture"><img class="story-scene-image" src="${sceneSrc}" alt="${escape(sceneAlt)}" decoding="async" fetchpriority="high"></div>
      <div class="art-page-divider" aria-hidden="true">❧ &nbsp; ✧ &nbsp; ❧</div>
      <h3 class="art-page-title">${sceneTitle}</h3>
      <p class="art-page-caption">${sceneCaption}</p>
    </div>`;
    const pocket=document.createElement('details');
    pocket.className='mobile-scene';
    pocket.innerHTML=`<summary>Voir l’illustration de cette histoire</summary><div class="mobile-illustration-print"><img src="${sceneSrc}" alt="${escape(sceneAlt)}" loading="lazy" decoding="async"><p>${sceneTitle}</p></div>`;
    left.insertBefore(pocket,article);
book.append(left,right);wrap.append(book,readerTools());parent.insertBefore(wrap,document.querySelector('.strat-section'));
    const nav=document.createElement('div');nav.className='page-controls';nav.innerHTML='<button id="prevPage" type="button" title="Page précédente" aria-label="Page précédente">←</button><div class="page-progress" aria-hidden="true"><i id="progressBar"></i></div><span id="pageStatus" aria-live="polite"></span><button id="nextPage" type="button" title="Page suivante" aria-label="Page suivante">→</button>';wrap.after(nav);$('prevPage').addEventListener('click',()=>setPage(pageIndex-1,true));$('nextPage').addEventListener('click',()=>setPage(pageIndex+1,true));const lastPage=Number(readStore('mmr_page_'+activeText.id,0));setPage(Number.isFinite(lastPage)?lastPage:0);
  }
  function setPage(to,shouldScroll=false){pageIndex=Math.max(0,Math.min(to,pageGroups.length-1));const article=$('articleBody');article.innerHTML=pageGroups[pageIndex].join('');article.scrollTop=0;if(window.dysState?.syl)window.applySyllabation?.(article);if(activeText)saveStore('mmr_page_'+activeText.id,pageIndex);$('pageStatus').textContent=`${pageIndex+1} / ${pageGroups.length}`;$('bookPageNumber').textContent=pageIndex+1;$('prevPage').disabled=pageIndex===0;$('nextPage').disabled=pageIndex===pageGroups.length-1;$('progressBar').style.width=(((pageIndex+1)/pageGroups.length)*100)+'%';if(pageIndex===pageGroups.length-1&&activeText && (pageGroups.length===1 || to>0)){finished.add(activeText.id);saveStore('mmr_finished',[...finished]);}if(shouldScroll && window.matchMedia('(max-width:640px)').matches){const top=document.querySelector('#readerScreen .open-book');if(top){const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;top.scrollIntoView({behavior:reduce?'instant':'smooth',block:'start'});}}}
  window.openText=t=>{stopAudio();originalOpen(t);activeText=t;last=t.id;saveStore('mmr_last',t.id);document.body.classList.remove('cozy-landing','cozy-explore','cozy-saved');document.body.classList.add('cozy-reader');navOn('');$('readerBookTitle').textContent=t.title;const f=$('favoriteReader');f.textContent=favourites.has(t.id)?'♥':'♡';f.classList.toggle('on',favourites.has(t.id));buildBook();window.scrollTo(0,0);};
  // Reliable feedback dispatch from a dynamically created strategy panel. Only one handler, in capture phase.
  document.addEventListener('click',e=>{const button=e.target.closest('#stratSubmit');if(!button)return;e.preventDefault();e.stopPropagation();if(typeof window.submitStrategy==='function')window.submitStrategy();else if(typeof submitStrategy==='function')submitStrategy();},true);
  $('favoriteReader')?.addEventListener('click',()=>{if(activeText)toggleFav(activeText.id)});
  function selectCategory(index,label){window.showExplore();if(index===0)return;const genreMap={1:'Contemporary Fiction',2:'Crime & Detective',3:'Contemporary Fiction',4:'Fantasy',5:'Contemporary Fiction',6:'Contemporary Fiction',7:'Fantasy'};const tab=document.querySelectorAll('.htab')[1];if(tab){switchHomeTab('genre',tab);let key=genreMap[index];let choice=[...document.querySelectorAll('.genre-btn')].find(b=>b.dataset.genre===key);if(choice)choice.click();}const heading=document.querySelector('.explore-banner h1');if(heading)heading.textContent=label;}
  function init(){document.body.classList.add('cozy-landing');const tilehost=$('genreTiles');genres.forEach(([name],i)=>{const button=document.createElement('button');button.type='button';button.className='genre-tile';button.setAttribute('aria-label','Explorer : '+name);const src=i===0?'assets/category-0.webp':`assets/category-${i}.webp`;button.innerHTML=`<span class="tile-image"><img src="${src}" alt="" decoding="async"></span><span class="tile-name">${name}</span>`;button.addEventListener('click',()=>selectCategory(i,name));tilehost.append(button);});const featured=$('featuredShelf');const picks=TEXTS.filter(t=>t.longRead).slice(0,8);picks.forEach(t=>featured.append(makeCard(t)));window.showLanding();}
  window.addEventListener('load',init,{once:true});
})();
