
var TEXTS = window.TEXTS_DATA;

/* ════════════════════════════════════════════════════════
   STRATEGIES (French, no AI)
════════════════════════════════════════════════════════ */
var STRATEGIES = [
  {
    id:'skim', name:'Survoler', ico:'&#128240;', color:'#1E40AF', bg:'#EFF6FF',
    what:'Lis rapidement sans t’arrêter sur chaque mot. L’objectif : comprendre le sujet général.',
    task:'Sans relire, écris 2–3 phrases : de quoi parle ce texte ? Quel est le message principal ? Quel type de texte est-ce ?',
    tips:[
      'Lis le titre et le premier mot de chaque paragraphe en premier.',
      'Ne cherche pas à tout comprendre : cherche l\'essentiel.',
      'Laisse-toi guider par les mots que tu reconnais.'
    ],
    feedbacks:{
      short:'Tu as écrit peu — c\'est normal pour un premier survol ! Essaie quand même d\'ajouter : quel type de texte est-ce ? (histoire, article, dialogue…). Conseil : lis d\'abord le titre et la première phrase de chaque paragraphe.',
      medium:'Bien ! Tu as identifié le thème général. Pour aller plus loin : peux-tu deviner le ton du texte (mystérieux, informatif, émotionnel…) ? Le survol efficace capture aussi l\'atmosphère.',
      long:'Excellent travail de survol ! Tu as capturé les idées clés. Attention : pour le SKIMMING, l\'objectif est la rapidité — n\'hésite pas à faire confiance à ta première impression sans trop détailler.'
    }
  },
  {
    id:'scan', name:'Chercher', ico:'&#128269;', color:'#065F46', bg:'#D1FAE5',
    what:'Parcours le texte des yeux pour trouver une information précise. Pas besoin de tout lire.',
    task:'Trouve et copie une information précise dans le texte (un nom, une date, un lieu, un chiffre). Explique exactement où tu l\'as trouvée et comment tu l\'as repérée.',
    tips:[
      'Utilise les majuscules, les chiffres et les mots en italique comme repères visuels.',
      'Ne lis pas tout : fais glisser ton regard jusqu\'au mot que tu cherches.',
      'Si tu cherches un nom propre, regarde les majuscules.'
    ],
    feedbacks:{
      short:'Tu as trouvé une information — bien ! Mais n\'oublie pas d\'expliquer COMMENT tu l\'as repérée. Quels indices visuels t\'ont guidé (chiffre, majuscule, mot connu) ?',
      medium:'Bon travail ! Tu as localisé l\'information et donné des indices sur ta méthode. Pour aller plus loin : peux-tu trouver une deuxième information sans relire tout le texte depuis le début ?',
      long:'Excellente réponse ! Tu montres bien comment fonctionne le scanning. Rappel : dans un vrai examen, cette stratégie te fait gagner beaucoup de temps — pas besoin de tout comprendre pour trouver une réponse précise.'
    }
  },
  {
    id:'infer', name:'Déduire', ico:'&#129504;', color:'#7C3AED', bg:'#EDE9FE',
    what:'L’auteur ne dit pas tout. Utilise les indices du texte pour comprendre ce qui est sous-entendu.',
    task:'Trouve UNE chose que le texte implique sans la dire directement. Qu\'est-ce que l\'auteur suggère ? Quels indices as-tu utilisés ?',
    tips:[
      'Pose-toi la question : pourquoi l\'auteur a-t-il choisi CE mot plutôt qu\'un autre ?',
      'Les émotions des personnages sont souvent montrées par leurs actions, pas nommées.',
      'Le choix du vocabulaire (fort, doux, violent…) révèle le ton.'
    ],
    feedbacks:{
      short:'Tu as repéré une implication, mais essaie d\'expliquer les INDICES qui t\'ont mené à cette conclusion. Quels mots ou actions du texte te permettent de le déduire ?',
      medium:'Bonne déduction ! Tu as identifié un sous-entendu et cité des indices. Pour aller plus loin : demande-toi pourquoi l\'auteur a CHOISI de ne pas dire cette chose directement — quel effet cela produit-il ?',
      long:'Excellent travail d\'inférence ! Tu montres une vraie lecture entre les lignes. Prochaine étape : cherche si d\'autres parties du texte confirment ou nuancent ta déduction.'
    }
  },
  {
    id:'vocab', name:'Deviner les mots', ico:'&#128218;', color:'#92400E', bg:'#FEF3C7',
    what:'Utilise le contexte autour d\'un mot inconnu pour deviner son sens AVANT de vérifier le glossaire.',
    task:'Choisis UN mot souligné que tu ne connais pas. AVANT de cliquer dessus, écris ce que tu penses qu\'il signifie grâce à la phrase. Ensuite vérifie le glossaire. Avais-tu raison ? Qu\'est-ce qui t\'a aidé ?',
    tips:[
      'Lis la phrase entière : souvent, le mot d\'avant ou d\'après donne un indice.',
      'Le mot appartient-il à une catégorie que tu connais (verbe d\'action, adjectif négatif…) ?',
      'Même si tu te trompes, l\'effort de deviner renforce ta mémoire du mot.'
    ],
    feedbacks:{
      short:'Tu as tenté une devinette — c\'est déjà très bien ! Précise : qu\'est-ce qui dans la phrase t\'a aidé à deviner ? (un mot connu voisin, la structure de la phrase, la logique de la situation)',
      medium:'Bonne stratégie ! Tu as expliqué ta démarche et comparé avec le glossaire. Conseil : quand tu lis un texte seul, mémorise ta première intuition avant de chercher — elle est souvent proche !',
      long:'Excellent travail de stratégie lexicale ! Tu montres exactement ce qu\'il faut faire. Prochaine étape : essaie avec un deuxième mot et note si le même type d\'indice t\'a aidé.'
    }
  },
  {
    id:'struct', name:'Analyser le texte', ico:'&#128336;', color:'#374151', bg:'#F3F4F6',
    what:'Obsèrve comment le texte est organisé : comment les paragraphes fonctionnent, où le ton change.',
    task:'Décris la fonction de chaque paragraphe en une phrase (ex : « Le paragraphe 1 introduit le personnage… Le paragraphe 3 crée une tension par… »). Combien de parties distincts le texte a-t-il ?',
    tips:[
      'Chaque paragraphe a généralement UN rôle : introduire, développer, retourner la situation, conclure.',
      'Où le texte change-t-il d\'atmosphère ou de point de vue ?',
      'Les connecteurs logiques (then, however, finally…) marquent les transitions.'
    ],
    feedbacks:{
      short:'Bon début ! Essaie de couvrir tous les paragraphes, pas seulement un ou deux. Chaque paragraphe a un rôle — même court.',
      medium:'Bonne analyse ! Tu as identifié plusieurs fonctions. Pour aller plus loin : y a-t-il un moment dans le texte où le ton ou la direction change clairement ? C’est souvent le pivot du texte.',
      long:'Excellente analyse de structure ! Tu montres une lecture vraiment active. Prochaine étape : peux-tu identifier la phrase ou le paragraphe le plus important de tout le texte ? Pourquoi ?'
    }
  },
  {
    id:'intent', name:'L’auteur', ico:'&#9997;&#65039;', color:'#991B1B', bg:'#FEE2E2',
    what:'Interroge les CHOIX de l\'auteur : pourquoi ce mot, cette structure, ce détail et pas un autre ?',
    task:'Choisis UN mot, UNE phrase ou UN détail que tu penses être un choix délibéré de l\'auteur. Pourquoi l\'a-t-il choisi ? Quel effet cela produit-il sur le lecteur ?',
    tips:[
      'Les répétitions sont rarement accidentelles.',
      'Pourquoi l\'auteur finit-il sur CETTE image ou CE mot ?',
      'Un détail qui semble anodin peut avoir une fonction symbolique.'
    ],
    feedbacks:{
      short:'Tu as identifié un choix d\'auteur — bien ! Maintenant va plus loin : quel EFFET ce choix produit-il sur toi en tant que lecteur ? (surprise, malaise, émotion, humour…)',
      medium:'Bonne analyse d\'intention ! Tu as lié le choix de l\'auteur à son effet. Pour aller plus loin : peux-tu imaginer ce que le texte dirait avec un mot ou une structure différents ? Qu\'est-ce qui changerait ?',
      long:'Excellente analyse ! Tu démontres une lecture vraiment littéraire. Ce type d\'analyse — interroger les choix de l\'auteur — est exactement ce qu\'on demande aux niveaux B2 et au lycée. Bien joué !'
    }
  }
];

var currentStrategy = null;
var currentText = null;
var activeGlossWord = null;

/* ════════════════════════════════════════════════════════
   DYS SYSTEM
════════════════════════════════════════════════════════ */
var dysState = { font:false, spacing:false, fontSize:100, bg:'#FDFCF9', ruler:false, mask:false, syl:false };

function toggleDysPanel() {
  document.body.classList.toggle('dys-bar-open');
}

function toggleDys() {
  dysState.font = !dysState.font;
  document.body.classList.toggle('dys', dysState.font);
  document.getElementById('btnDysFont').classList.toggle('on', dysState.font);
  saveDys();
}

function toggleDysSpace() {
  dysState.spacing = !dysState.spacing;
  document.body.classList.toggle('dys-spacing', dysState.spacing);
  document.getElementById('btnDysSpace').classList.toggle('on', dysState.spacing);
  saveDys();
}

var fontSizes = [80, 90, 100, 110, 120, 135, 150];
var fontSizeIdx = 2;

function changeFontSize(dir) {
  fontSizeIdx = Math.max(0, Math.min(fontSizes.length - 1, fontSizeIdx + dir));
  dysState.fontSize = fontSizes[fontSizeIdx];
  document.body.classList.toggle('dys-large', dysState.fontSize > 110);
  // Apply directly via CSS variable override
  document.documentElement.style.setProperty('--r-size', (dysState.fontSize / 100) + 'rem');
  document.getElementById('fsVal').textContent = dysState.fontSize + '%';
  saveDys();
}

function setBg(el, color) {
  dysState.bg = color;
  document.documentElement.style.setProperty('--r-bg', color);
  // Handle dark mode text
  if (color === '#1A1917') {
    document.documentElement.style.setProperty('--ink', '#F4F1EB');
    document.documentElement.style.setProperty('--ink2', '#ECEAE3');
  } else {
    document.documentElement.style.setProperty('--ink', '#1A1917');
    document.documentElement.style.setProperty('--ink2', '#3D3A36');
  }
  document.querySelectorAll('.bg-sw').forEach(function(s){ s.style.borderColor = 'transparent'; s.classList.remove('active'); });
  el.style.borderColor = '#1E40AF';
  el.classList.add('active');
  saveDys();
}

function toggleRuler() {
  dysState.ruler = !dysState.ruler;
  document.body.classList.toggle('ruler-on', dysState.ruler);
  document.getElementById('btnRuler').classList.toggle('on', dysState.ruler);
  if (dysState.ruler) {
    document.addEventListener('mousemove', moveRuler);
    document.addEventListener('touchmove', moveRulerTouch, {passive:true});
  } else {
    document.removeEventListener('mousemove', moveRuler);
    document.removeEventListener('touchmove', moveRulerTouch);
  }
  saveDys();
}

function moveRuler(e) {
  var r = document.getElementById('ruler');
  r.style.top = (e.clientY - 20) + 'px';
}

function moveRulerTouch(e) {
  if (e.touches.length) {
    var r = document.getElementById('ruler');
    r.style.top = (e.touches[0].clientY - 20) + 'px';
  }
}

function toggleMask() {
  dysState.mask = !dysState.mask;
  document.body.classList.toggle('mask-on', dysState.mask);
  document.getElementById('btnMask').classList.toggle('on', dysState.mask);
  if (dysState.mask) {
    document.addEventListener('mousemove', moveMask);
    document.addEventListener('touchmove', moveMaskTouch, {passive:true});
    moveMask({ clientY: 200 });
  } else {
    document.removeEventListener('mousemove', moveMask);
    document.removeEventListener('touchmove', moveMaskTouch);
  }
  saveDys();
}

function moveMask(e) {
  var y = e.clientY;
  var lh = 40;
  document.getElementById('maskTop').style.height = Math.max(0, y - lh) + 'px';
  document.getElementById('maskBot').style.top = (y + lh) + 'px';
}

function moveMaskTouch(e) {
  if (e.touches.length) moveMask({ clientY: e.touches[0].clientY });
}

var sylActive = false;
var sylOriginals = {};

function toggleSyl() {
  dysState.syl = !dysState.syl;
  sylActive = dysState.syl;
  document.getElementById('btnSyl').classList.toggle('on', dysState.syl);
  var body = document.getElementById('articleBody');
  if (!body) { saveDys(); return; }
  if (dysState.syl) {
    applySyllabation(body);
  } else {
    removeSyllabation(body);
  }
  saveDys();
}

function syllabify(word) {
  // Simple English syllable heuristic
  word = word.replace(/[^a-zA-Z]/g, function(m){ return '<span class="syl-punct">' + m + '</span>'; });
  // Split on vowel-consonant-vowel boundaries
  var syls = [];
  var vowels = 'aeiouyAEIOUY';
  var clean = word.replace(/<[^>]+>/g,'');
  var result = [];
  var i = 0;
  while (i < clean.length) {
    var start = i;
    // advance to end of consonant cluster
    while (i < clean.length && vowels.indexOf(clean[i]) < 0) i++;
    // advance through vowel cluster
    while (i < clean.length && vowels.indexOf(clean[i]) >= 0) i++;
    // one more consonant if available and not at end
    if (i < clean.length - 1 && vowels.indexOf(clean[i]) < 0) i++;
    result.push(clean.slice(start, i));
  }
  if (result.length <= 1) return clean;
  return result.map(function(s, idx){
    return '<span class="' + (idx % 2 === 0 ? 'syl-a' : 'syl-b') + '">' + s + '</span>';
  }).join('');
}

function applySyllabation(container) {
  var walker = document.createTreeWalker(container, 4, null, false);
  var nodes = [];
  var node;
  while ((node = walker.nextNode())) nodes.push(node);
  nodes.forEach(function(n) {
    if (n.parentNode && n.parentNode.className && n.parentNode.className.indexOf('gloss') >= 0) return;
    var words = n.textContent.split(/(\s+)/);
    var html = words.map(function(w) {
      if (/^\s+$/.test(w)) return w;
      if (w.length < 3) return w;
      return syllabify(w);
    }).join('');
    if (html !== n.textContent) {
      var span = document.createElement('span');
      span.innerHTML = html;
      n.parentNode.replaceChild(span, n);
    }
  });
}

function removeSyllabation(container) {
  container.querySelectorAll('.syl-a,.syl-b').forEach(function(el) {
    var parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });
}

function saveDys() {
  try {
    localStorage.setItem('mmr-dys', JSON.stringify(dysState));
    localStorage.setItem('mmr-fsidx', fontSizeIdx);
  } catch(e) {}
}

function loadDys() {
  try {
    var saved = localStorage.getItem('mmr-dys');
    var savedIdx = localStorage.getItem('mmr-fsidx');
    if (saved) {
      dysState = JSON.parse(saved);
      if (dysState.font) { document.body.classList.add('dys'); document.getElementById('btnDysFont').classList.add('on'); }
      if (dysState.spacing) { document.body.classList.add('dys-spacing'); document.getElementById('btnDysSpace').classList.add('on'); }
      if (dysState.ruler) toggleRuler();
      if (dysState.mask) toggleMask();
      if (savedIdx) {
        fontSizeIdx = parseInt(savedIdx);
        dysState.fontSize = fontSizes[fontSizeIdx];
        document.documentElement.style.setProperty('--r-size', (dysState.fontSize/100) + 'rem');
        document.getElementById('fsVal').textContent = dysState.fontSize + '%';
      }
      if (dysState.bg && dysState.bg !== '#FDFCF9') {
        var sw = document.querySelector('.bg-sw[data-bg="' + dysState.bg + '"]');
        if (sw) setBg(sw, dysState.bg);
      }
    }
  } catch(e) {}
}

/* ════════════════════════════════════════════════════════
   LOAD TEXT
════════════════════════════════════════════════════════ */
function loadText(text) {
  currentText = text;
  activeGlossWord = null;
  currentStrategy = null;

  var badge = document.getElementById('headerLevel');
  badge.textContent = text.level;
  badge.className = 'level-badge ' + text.levelClass;
  badge.style.display = '';

  // Build paragraphs
  var paragraphsHTML = '';
  for (var pi = 0; pi < text.paragraphs.length; pi++) {
    var p = text.paragraphs[pi];
    var html = p.replace(/<g word=['"]([^'"]+)['"]\s+ph=['"]([^'"]+)['"]\s+type=['"]([^'"]+)['"]\s+def=['"]([^'"]+)['"]\s+ex=['"]([^'"]+)['"]>(.*?)<\/g>/g,
      function(_, word, ph, type, def, ex, display) {
        return '<span class="gloss-word" data-word="' + word + '" onclick="showGloss(\'' + word.replace(/'/g, "\\'") + '\')">' + display + '</span>';
      });
    paragraphsHTML += '<p>' + html + '</p>';
  }

  // Glossary entries + pills
  var pillsHTML = '';
  var entriesHTML = '';
  for (var gi = 0; gi < text.glossary.length; gi++) {
    var g = text.glossary[gi];
    var gid = 'ge_' + g.word.replace(/[\s']/g, '_');
    var imgWrapId = 'gimg_' + gid;
    pillsHTML += '<span class="gloss-pill" onclick="showGloss(\'' + g.word.replace(/'/g, "\\'") + '\')">'
      + g.word + '</span>';
    entriesHTML += '<div class="gloss-entry" id="' + gid + '" data-word="' + g.word + '" data-type="' + g.type + '">'
      + '<div class="gloss-img-wrap" id="' + imgWrapId + '"></div>'
      + '<div class="gloss-word-title">' + g.word + '</div>'
      + '<div class="gloss-phonetic">' + g.ph + '</div>'
      + '<div class="gloss-type">' + g.type + '</div>'
      + '<div class="gloss-def">' + g.def + '</div>'
      + '<div class="gloss-example">\u201c' + g.ex + '\u201d</div>'
      + '</div>';
  }

  // Strategy buttons
  var stratBtnsHTML = '';
  for (var si = 0; si < STRATEGIES.length; si++) {
    var s = STRATEGIES[si];
    stratBtnsHTML += '<button class="strat-btn" data-sid="' + s.id + '" onclick="selectStrategy(\'' + s.id + '\')">'
      + s.ico + ' ' + s.name + '</button>';
  }

  var layout = document.getElementById('mainLayout');
  layout.innerHTML = '<div class="reader-panel">'
    + '<div class="text-header">'
    + '<div class="text-eyebrow">' + text.eyebrow + '</div>'
    + '<div class="text-title">' + text.title + '</div>'
    + (text.isOriginal ? '<div class="text-orig-badge">&#128218; Texte original / domaine public</div>' : '')
    + '<div class="text-meta"><span>&#128240; ' + text.source + '</span><span>&#9201; ' + text.readTime + '</span><span>&#128221; ' + text.words + ' mots</span></div>'
    + '</div>'
    + '<div class="article-body" id="articleBody">' + paragraphsHTML + '</div>'
    + '<div class="strat-section">'
    + '<div class="strat-header">'
    + '<div class="strat-header-label">Choisis une strat&#233;gie de lecture</div>'
    + '<div class="strat-btns">' + stratBtnsHTML + '</div>'
    + '</div>'
    + '<div class="strat-body" id="stratBody"></div>'
    + '</div></div>'
    + '<div class="gloss-sidebar">'
    + '<div class="gloss-panel">'
    + '<div class="gloss-ph"><span>&#128269;</span><span class="gloss-ph-title">Glossaire</span></div>'
    + '<div class="gloss-empty" id="glossEmpty">Tape sur un mot <span style="border-bottom:2px solid var(--amber);padding:0 2px">soulign&#233;</span> pour voir sa d&#233;finition.</div>'
    + entriesHTML + '</div>'
    + '<div class="gloss-list-section">'
    + '<div class="gloss-list-header">Vocabulaire cl&#233;</div>'
    + '<div class="gloss-list">' + pillsHTML + '</div>'
    + '</div></div>';

  // Apply syllabation if active
  if (dysState.syl) {
    var ab = document.getElementById('articleBody');
    if (ab) applySyllabation(ab);
  }
}

/* ════════════════════════════════════════════════════════
   STRATEGY SELECTION & FEEDBACK
════════════════════════════════════════════════════════ */
function selectStrategy(sid) {
  currentStrategy = sid;
  var s = null;
  for (var i = 0; i < STRATEGIES.length; i++) {
    if (STRATEGIES[i].id === sid) { s = STRATEGIES[i]; break; }
  }
  if (!s) return;

  document.querySelectorAll('.strat-btn').forEach(function(b){
    b.classList.remove('active');
    b.style.background = '';
    b.style.color = '';
    b.style.borderColor = '';
  });
  var ab = document.querySelector('.strat-btn[data-sid="' + sid + '"]');
  if (ab) { ab.classList.add('active'); ab.style.background = s.color; ab.style.color = '#fff'; ab.style.borderColor = s.color; }

  var tipsHTML = '<ul>';
  for (var ti = 0; ti < s.tips.length; ti++) tipsHTML += '<li>' + s.tips[ti] + '</li>';
  tipsHTML += '</ul>';

  var body = document.getElementById('stratBody');
  body.innerHTML = '<div class="strat-badge" style="background:' + s.bg + ';color:' + s.color + '">' + s.ico + ' ' + s.name + '</div>'
    + '<div class="strat-what">' + s.what + '</div>'
    + '<div class="strat-task">' + s.task + '</div>'
    + '<textarea class="strat-input" id="stratInput" placeholder="&#201;cris ta r&#233;ponse ici&#8230;" oninput="onStratInput()"></textarea>'
    + '<div class="strat-footer">'
    + '<span class="strat-wc" id="stratWc">0 mot</span>'
    + '<button class="strat-submit" id="stratSubmit" type="button" style="background:' + s.color + '">Voir le feedback &#10022;</button>'
    + '</div>'
    + '<div class="feedback-help" id="feedbackHelp">Clique sur Voir le feedback après avoir écrit ta réponse.</div>' + '<div class="strat-feedback" id="stratFeedback" role="status" aria-live="polite"></div>'
    + '<button class="strat-sol-btn" id="stratSolBtn" onclick="showSolution()" style="display:none;border-color:' + s.color + ';color:' + s.color + '">&#128065; Voir la solution</button>'
    + '<div class="strat-solution" id="stratSolution"></div>'
    + '<div class="strat-tips"><div class="strat-tips-title">&#128161; Conseils pour cette strat&#233;gie</div>' + tipsHTML + '</div>';

  body.classList.add('visible');
  if (window.innerWidth < 700) body.scrollIntoView({ behavior:'smooth', block:'start' });
}

function onStratInput() {
  var area = document.getElementById('stratInput');
  if (!area) return;
  var words = area.value.trim().split(/\s+/).filter(function(w){ return w.length > 0; });
  var n = words.length;
  var wc = document.getElementById('stratWc');
  if (wc) wc.textContent = n + ' mot' + (n > 1 ? 's' : '');
  var btn = document.getElementById('stratSubmit');
  if (btn) btn.disabled = false;
  var help = document.getElementById('feedbackHelp');
  if (help) help.textContent = n < 5 ? 'Tu peux demander un retour à tout moment. Une réponse détaillée permettra un conseil plus précis.' : 'Ta réponse est prête : clique sur Voir le feedback.';
}

function submitStrategy() {
  var input = document.getElementById('stratInput');
  if (!input || !currentStrategy || !currentText) { console.warn('Feedback: missing input, strategy or text'); return; }
  var answer = input.value.trim();
  if (!answer) { var help=document.getElementById('feedbackHelp'); if(help) help.textContent='Écris quelques mots avant de demander un retour.'; input.focus(); return; }

  var s = null;
  for (var i = 0; i < STRATEGIES.length; i++) {
    if (STRATEGIES[i].id === currentStrategy) { s = STRATEGIES[i]; break; }
  }
  if (!s) return;

  // Get text-specific strategy data
  var stratData = currentText.strategies ? currentText.strategies[currentStrategy] : null;
  var feedback = stratData ? stratData.feedback : '';
  var pistes = stratData ? stratData.pistes : [];

  // Generic fallback by word count
  if (!feedback) {
    var wc = answer.split(/\s+/).filter(function(w){ return w.length > 0; }).length;
    var fb = s.feedbacks || {};
    feedback = wc < 25 ? (fb.short || '') : wc < 65 ? (fb.medium || '') : (fb.long || '');
  }

  var pistesHTML = '';
  if (pistes.length) {
    pistesHTML = '<div class="strat-tips" style="margin-top:12px">'
      + '<div class="strat-tips-title">&#128161; Pistes de r\u00e9flexion pour ce texte</div><ul>';
    for (var pi = 0; pi < pistes.length; pi++) {
      pistesHTML += '<li>' + pistes[pi] + '</li>';
    }
    pistesHTML += '</ul></div>';
  }

  var btn = document.getElementById('stratSubmit');
  if (btn) { btn.textContent = 'Feedback affiché ✓'; btn.disabled = false; }

  var fbEl = document.getElementById('stratFeedback');
  if (!fbEl) { console.error('Feedback container missing'); return; }
  fbEl.style.background = s.bg;
  fbEl.style.border = '1.5px solid ' + s.color;
  fbEl.innerHTML = '<div class="strat-fb-header" style="color:' + s.color + ';border-bottom:1px solid ' + s.color + '44">'
    + s.ico + ' Feedback &mdash; ' + s.name + '</div>'
    + '<div class="strat-fb-body"><p>' + feedback + '</p>' + pistesHTML + '</div>';
  fbEl.classList.add('visible');
  fbEl.scrollIntoView({ behavior:'smooth', block:'nearest' });
  var help = document.getElementById('feedbackHelp'); if (help) help.style.display='none';

  // Show "Voir la solution" button
  var solBtn = document.getElementById('stratSolBtn');
  if (solBtn) solBtn.style.display = 'inline-flex';
}

/* ════════════════════════════════════════════════════════
   GLOSSARY
════════════════════════════════════════════════════════ */
function showGloss(word) {
  var key = word.replace(/[\s']/g, '_');
  var empty = document.getElementById('glossEmpty');
  if (empty) empty.style.display = 'none';
  document.querySelectorAll('.gloss-entry').forEach(function(e){ e.classList.remove('visible'); });
  document.querySelectorAll('.gloss-word').forEach(function(e){ e.classList.remove('active'); });
  document.querySelectorAll('.gloss-pill').forEach(function(p){ p.classList.remove('active'); });
  var entry = document.getElementById('ge_' + key);
  if (entry) entry.classList.add('visible');
  document.querySelectorAll('.gloss-word[data-word="' + word + '"]').forEach(function(e){ e.classList.add('active'); });
  document.querySelectorAll('.gloss-pill').forEach(function(p){
    if (p.textContent.trim() === word) p.classList.add('active');
  });
  activeGlossWord = word;
  var sidebar = document.querySelector('.gloss-sidebar');
  if (sidebar && window.innerWidth < 700) sidebar.scrollIntoView({ behavior:'smooth', block:'start' });
  // Load image for this word
  loadGlossImage(word);
}

/* ════════════════════════════════════════════════════════
   GENRE / LEVEL CONFIG
════════════════════════════════════════════════════════ */
var GENRE_CFG = {
  'Fantasy':              { icon:'\u2728', color:'#7C3AED', bg:'#EDE9FE' },
  'Science Fiction':      { icon:'\uD83D\uDE80', color:'#0369A1', bg:'#E0F2FE' },
  'Thriller & Suspense':  { icon:'\uD83D\uDD66', color:'#B45309', bg:'#FEF3C7' },
  'Crime & Detective':    { icon:'\uD83D\uDD0D', color:'#374151', bg:'#F3F4F6' },
  'Horror & Suspense':    { icon:'\uD83D\uDD6F', color:'#991B1B', bg:'#FEE2E2' },
  'Contemporary Fiction': { icon:'\uD83D\uDCAC', color:'#065F46', bg:'#D1FAE5' }
};

var LEVEL_CFG = {
  'A2': { cls:'a2', desc:'Basique — phrases simples et sujets familiers' },
  'B1': { cls:'b1', desc:'Intermédiaire — opinions et expérience personnelle' },
  'B2': { cls:'b2', desc:'Avancé — textes complexes et abstraits' }
};

function buildLevelView() {
  var el = document.getElementById('viewLevel');
  el.innerHTML = '';
  ['A2','B1','B2'].forEach(function(lv) {
    var cfg = LEVEL_CFG[lv];
    var txts = TEXTS.filter(function(t){ return t.level === lv; });
    if (!txts.length) return;
    var sec = document.createElement('div');
    sec.className = 'level-section';
    var gid = 'lvg' + lv;
    sec.innerHTML = '<div class="level-heading"><span class="lvl-pill ' + cfg.cls + '">' + lv + '</span>'
      + '<span class="lvl-desc">' + cfg.desc + ' &mdash; ' + txts.length + ' texte' + (txts.length > 1 ? 's' : '') + '</span></div>'
      + '<div class="text-grid" id="' + gid + '"></div>';
    el.appendChild(sec);
    var grid = document.getElementById(gid);
    txts.forEach(function(t){ grid.appendChild(makeCard(t, false)); });
  });
}

function buildGenreView() {
  var el = document.getElementById('viewGenre');
  el.innerHTML = '';
  var byGenre = {};
  TEXTS.forEach(function(t){ if (!byGenre[t.eyebrow]) byGenre[t.eyebrow]=[]; byGenre[t.eyebrow].push(t); });
  var order = Object.keys(GENRE_CFG).filter(function(k){ return byGenre[k]; });
  Object.keys(byGenre).forEach(function(k){ if (order.indexOf(k)<0) order.push(k); });

  // Filter row
  var row = document.createElement('div');
  row.className = 'genre-filter-row';
  var allBtn = document.createElement('button');
  allBtn.className = 'genre-btn active';
  allBtn.innerHTML = 'Tous';
  allBtn.style.background = '#1E40AF'; allBtn.style.color = '#fff'; allBtn.style.borderColor = '#1E40AF';
  allBtn.addEventListener('click', function(){ filterGenre('all', allBtn); });
  row.appendChild(allBtn);
  order.forEach(function(gk) {
    var cfg = GENRE_CFG[gk] || { icon:'\uD83D\uDCDA', color:'#374151', bg:'#F3F4F6' };
    var btn = document.createElement('button');
    btn.className = 'genre-btn';
    btn.dataset.genre = gk;
    btn.innerHTML = cfg.icon + ' ' + gk;
    btn.addEventListener('click', function(){ filterGenre(gk, btn); });
    row.appendChild(btn);
  });
  el.appendChild(row);

  order.forEach(function(gk) {
    var txts = byGenre[gk];
    var cfg = GENRE_CFG[gk] || { icon:'\uD83D\uDCDA', color:'#374151', bg:'#F3F4F6' };
    var sec = document.createElement('div');
    sec.className = 'genre-section';
    sec.dataset.genre = gk;
    var gid = 'gng' + gk.replace(/[^a-z0-9]/gi,'_');
    sec.innerHTML = '<div class="genre-heading" style="border-bottom-color:' + cfg.color + '44">'
      + '<span class="genre-ico">' + cfg.icon + '</span>'
      + '<span class="genre-lbl">' + gk + '</span>'
      + '<span class="genre-cnt">' + txts.length + ' textes</span></div>'
      + '<div class="text-grid" id="' + gid + '"></div>';
    el.appendChild(sec);
    var grid = document.getElementById(gid);
    txts.forEach(function(t){ grid.appendChild(makeCard(t, true)); });
  });
}

function filterGenre(genre, clickedBtn) {
  document.querySelectorAll('.genre-btn').forEach(function(b){
    b.classList.remove('active'); b.style.background=''; b.style.color=''; b.style.borderColor='';
  });
  clickedBtn.classList.add('active');
  if (genre === 'all') {
    clickedBtn.style.background='#1E40AF'; clickedBtn.style.color='#fff'; clickedBtn.style.borderColor='#1E40AF';
  } else {
    var cfg = GENRE_CFG[genre] || { color:'#374151' };
    clickedBtn.style.background=cfg.color; clickedBtn.style.color='#fff'; clickedBtn.style.borderColor=cfg.color;
  }
  document.querySelectorAll('.genre-section').forEach(function(sec){
    if (genre==='all'||sec.dataset.genre===genre) sec.classList.remove('hidden');
    else sec.classList.add('hidden');
  });
}

function makeCard(t, showLv) {
  var card = document.createElement('div');
  card.className = 'book-card';
  var cfg = GENRE_CFG[t.eyebrow] || {};
  var lvH = showLv ? '<span class="bc-lv ' + t.levelClass + '">' + t.level + '</span>' : '';
  var gnH = !showLv ? '<div class="bc-genre">' + (cfg.icon||'') + ' ' + t.eyebrow + '</div>' : '';
  var origBadge = t.isOriginal ? '<span class="bc-orig-badge">&#128218; Original</span>' : '';
  card.innerHTML = '<div class="bc-row"><div class="bc-title">' + t.title + '</div>' + lvH + origBadge + '</div>'
    + gnH
    + '<div class="bc-preview">' + t.preview + '</div>'
    + '<div class="bc-foot"><span class="bc-meta">&#9201; ' + t.readTime + '</span><span class="bc-meta">' + t.words + ' mots</span></div>';
  card.addEventListener('click', function(){ openText(t); });
  return card;
}

function switchHomeTab(which, btn) {
  document.querySelectorAll('.htab').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('viewLevel').style.display = which==='level' ? 'block' : 'none';
  document.getElementById('viewGenre').style.display = which==='genre' ? 'block' : 'none';
}

function openText(t) {
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('readerScreen').style.display = 'flex';
  document.getElementById('backBtn').style.display = '';
  loadText(t);
  window.scrollTo(0,0);
}


/* ── GLOSSARY IMAGE LOADER ── */
var ABSTRACT_TYPES = ['adjective','adverb','phrase','conjunction','pronoun','modal verb','ordinal number'];
var ABSTRACT_WORDS = ["consciousness","irony","integrity","ethics","virtue","wisdom","courage","justice","emotion","thought","feeling","idea","concept","principle","however","although","therefore","moreover","nevertheless","paradox","identity","meaning","truth","freedom","metaphor","provisional","approval","betrayal","loneliness","grief","anxiety","desperation","improvise","reckless","infuriating","tedious","inevitable","simultaneously","coherent","arbitrarily","sophisticated","accumulate","compensation","obligation","validity","threshold","autonomy"];

function isAbstract(word, type) {
  var w = word.toLowerCase();
  if (ABSTRACT_WORDS.indexOf(w) >= 0) return true;
  var t = (type || '').toLowerCase().split(/[\s\/,]/)[0];
  return ABSTRACT_TYPES.indexOf(t) >= 0;
}

function loadGlossImage(word) {
  var key = word.replace(/[\s']/g, '_');
  var entry = document.getElementById('ge_' + key);
  if (!entry) return;

  var wrapId = 'gimg_ge_' + key;
  var wrap = document.getElementById(wrapId);
  if (!wrap) return;

  if (wrap.dataset.tried === '1') return; // already attempted once
  wrap.dataset.tried = '1';

  var wordType = entry.dataset.type || '';
  if (isAbstract(word, wordType)) return;

  wrap.classList.add('loaded');
  wrap.innerHTML = '<div class="gloss-img-placeholder">&#8987; Recherche d\u2019image\u2026</div>';

  var cleanWord = word.replace(/[^a-zA-Z\s-]/g, '').trim();
  var searchUrl = 'https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=240&titles='
    + encodeURIComponent(cleanWord) + '&format=json';

  fetch(searchUrl)
    .then(function(r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.json();
    })
    .then(function(data) {
      var pages = (data && data.query && data.query.pages) ? data.query.pages : {};
      var keys = Object.keys(pages);
      var found = false;
      for (var i = 0; i < keys.length; i++) {
        var page = pages[keys[i]];
        if (page && page.thumbnail && page.thumbnail.source) {
          var img = document.createElement('img');
          img.alt = word;
          img.loading = 'lazy';
          img.onerror = function() { wrap.classList.remove('loaded'); wrap.innerHTML = ''; };
          img.src = page.thumbnail.source;
          wrap.innerHTML = '';
          wrap.appendChild(img);
          found = true;
          break;
        }
      }
      if (!found) {
        wrap.classList.remove('loaded');
        wrap.innerHTML = '';
      }
    })
    .catch(function(err) {
      wrap.classList.remove('loaded');
      wrap.innerHTML = '';
    });
}

function showSolution() {
  if (!currentText || !currentStrategy) return;
  var s = null;
  for (var i = 0; i < STRATEGIES.length; i++) {
    if (STRATEGIES[i].id === currentStrategy) { s = STRATEGIES[i]; break; }
  }
  var qs = currentText.questions || [];
  if (!qs.length) return;

  var solEl = document.getElementById('stratSolution');
  var solBtn = document.getElementById('stratSolBtn');
  if (!solEl) return;

  var html = '<div class="strat-sol-header">&#128218; Solutions &mdash; Réponses modèles</div>';
  for (var i = 0; i < qs.length; i++) {
    var frQ = qs[i].frQ || qs[i].q;
    var frModel = qs[i].frModel || qs[i].model;
    html += '<div class="strat-sol-q">'
      + '<div class="strat-sol-qnum">Question ' + (i+1) + '</div>'
      + '<div class="strat-sol-qtext">' + frQ + '</div>'
      + '<div class="strat-sol-ans">' + frModel + '</div></div>';
  }

  solEl.innerHTML = html;
  solEl.classList.add('visible');
  if (solBtn) solBtn.style.display = 'none';
  solEl.scrollIntoView({ behavior:'smooth', block:'start' });
}

function goHome() {
  document.getElementById('homeScreen').style.display = 'flex';
  document.getElementById('readerScreen').style.display = 'none';
  document.getElementById('backBtn').style.display = 'none';
  document.getElementById('headerLevel').style.display = 'none';
  window.scrollTo(0,0);
}

function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 2400);
}

window.addEventListener('load', function() {
  loadDys();
  buildLevelView();
  buildGenreView();
});
