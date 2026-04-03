/* =====================================================
   WHEN STARS FALL — Game Engine
   ===================================================== */

// ── Constellation Catalogue ───────────────────────────
// All 12 constellations. type controls how faction is derived.

const CONSTELLATION_CATALOGUE = [
  // Story-earned (appear in player column when constellationLog[key] is set)
  {
    key: 'scorpio', name: 'Scorpio', aka: 'Blake', type: 'story',
    location: 'Hudson River Yards, Manhattan',
    desc: 'Hidden things. Depth. The knowledge that lives below the surface.'
  },
  {
    key: 'leo', name: 'Leo', type: 'story',
    location: 'Astor Place Theatre, Manhattan',
    desc: 'Presence, the crowd, performance. Eight hundred people, and they were there for him.'
  },
  {
    key: 'gemini', name: 'Gemini', aka: 'Cas and Pol', type: 'story',
    location: 'Bleecker Street, Manhattan',
    desc: 'Communication, translation. Two halves of a sentence.'
  },
  // Quiz-earned (appear in player column when quizDone[key] is true)
  {
    key: 'cancer', name: 'Cancer', type: 'quiz',
    location: 'The French Quarter, New Orleans',
    desc: 'She feeds people. Far south, very warm, near the sea. She is exactly where she means to be.'
  },
  {
    key: 'sagittarius', name: 'Sagittarius', type: 'quiz',
    location: 'The Sierra Nevada, California',
    desc: 'Moved west without stopping. The gold fields, the open ground.'
  },
  {
    key: 'capricorn', name: 'Capricorn', type: 'quiz',
    location: 'New Court, London',
    desc: 'Where power is oldest. Centuries of accumulated authority, something that compounds.'
  },
  {
    key: 'pisces', name: 'Pisces', type: 'quiz',
    location: 'The Society Islands, Kingdom of Tahiti',
    desc: 'Water in every direction. The difference between sky and sea becomes academic at certain hours.'
  },
  // Dynamic — faction resolved at invocation based on path choices
  {
    key: 'libra', name: 'Libra', type: 'dynamic',
    location: 'Washington, D.C.',
    desc: 'Law and balance. Reached by Cas and Pol, but has not yet responded.',
    playerIf: 'pathI', playerVal: 'I', elseFaction: 'vdz'
  },
  {
    key: 'aquarius', name: 'Aquarius', type: 'dynamic',
    location: 'Unknown — moving',
    desc: 'Cannot be located. Will not take the safe route.',
    playerIf: 'pathC', playerVal: 'C', elseFaction: 'lunardi'
  },
  {
    key: 'virgo', name: 'Virgo', type: 'dynamic',
    location: 'Confirmed — location undisclosed',
    desc: 'Found settled ground in the first week and confirmed herself immediately. She has been waiting.',
    playerIf: 'pathE', playerVal: 'F', elseFaction: 'lunardi'
  },
  // Fixed Van der Zon (absorbed early; never changes)
  {
    key: 'aries', name: 'Aries', type: 'vdz',
    location: 'Absorbed by the Van der Zons',
    desc: 'They chose it. Or were persuaded to.'
  },
  {
    key: 'taurus', name: 'Taurus', type: 'vdz',
    location: 'Absorbed by the Van der Zons',
    desc: 'They chose it. Or were persuaded to.'
  }
];

// Scene awards: which scenes grant or reveal constellation events
const SCENE_CONSTELLATION_AWARDS = {
  'scene-1':  { type: 'earn',   key: 'scorpio' },
  'scene-7':  { type: 'earn',   key: 'leo'     },
  'scene-8':  { type: 'earn',   key: 'gemini'  },
  'scene-18': { type: 'betray', key: 'leo'     }
};

// ── Game State ──────────────────────────────────────

const state = {
  scene: 'prologue',
  pathI: null,   // 'I' or 'II'  — Scene 3 (Truth vs Logic)
  pathC: null,   // 'C' or 'D'  — Scene 10 (Follow vs Wait)
  pathE: null,   // 'E' or 'F'  — Scene 14 (Fight vs Reckon)
  constellations:  0, // player count — kept in sync by updateScoreboard()
  constellationLog: {}, // { scorpio: true, leo: true, leo_betrayed: true, gemini: true }
  dynamicResolved:  false, // true once dynamic allegiances are allocated at the invocation
  quizDone:     {},  // { cancer: true, … } — snapshotted
  quizAnswered: {},  // { cancer: { correct } } — NOT snapshotted; survives back navigation
  history: [],       // NOT snapshotted
  visited:  []       // NOT snapshotted
};

// ── Faction Logic ─────────────────────────────────────

// Returns the current faction for a catalogue entry:
// 'player' | 'vdz' | 'lunardi' | 'uncommitted' | 'unmet'
function getConstellationFaction(c) {
  switch (c.type) {
    case 'story':
      if (!state.constellationLog[c.key]) return 'unmet';
      if (c.key === 'leo' && state.constellationLog.leo_betrayed) return 'vdz';
      return 'player';

    case 'quiz':
      if (state.quizDone[c.key]) return 'player';
      // After the invocation, any unreached constellation is absorbed by Van der Zon
      if (state.dynamicResolved) return 'vdz';
      return 'unmet';

    case 'dynamic':
      if (!state.dynamicResolved) return 'uncommitted';
      return state[c.playerIf] === c.playerVal ? 'player' : c.elseFaction;

    case 'vdz':
      return 'vdz';

    default:
      return 'unmet';
  }
}

function getScoreboardCounts() {
  let player = 0, vdz = 0, lunardi = 0;
  CONSTELLATION_CATALOGUE.forEach(c => {
    const f = getConstellationFaction(c);
    if (f === 'player')  player++;
    if (f === 'vdz')     vdz++;
    if (f === 'lunardi') lunardi++;
  });
  return { player, vdz, lunardi };
}

// ── State Snapshots ──────────────────────────────────

function snapshotState() {
  return {
    scene:            state.scene,
    pathI:            state.pathI,
    pathC:            state.pathC,
    pathE:            state.pathE,
    constellations:   state.constellations,
    constellationLog: Object.assign({}, state.constellationLog),
    dynamicResolved:  state.dynamicResolved,
    quizDone:         Object.assign({}, state.quizDone)
    // quizAnswered, history, visited intentionally omitted
  };
}

function restoreSnapshot(snapshot) {
  state.pathI            = snapshot.pathI;
  state.pathC            = snapshot.pathC;
  state.pathE            = snapshot.pathE;
  state.constellationLog = Object.assign({}, snapshot.constellationLog);
  state.dynamicResolved  = snapshot.dynamicResolved;
  state.quizDone         = Object.assign({}, snapshot.quizDone);
  updateScoreboard();
}

// ── Navigation ──────────────────────────────────────

function goTo(sceneId, stateUpdates) {

  // ── Back navigation ──────────────────────────────
  if (sceneId === '__back__') {
    if (state.history.length === 0) return;
    const snapshot = state.history.pop();
    restoreSnapshot(snapshot);
    state.scene = snapshot.scene;
    renderScene(snapshot.scene);
    return;
  }

  // ── Record history before leaving current scene ──
  const currentScene = STORY[state.scene];
  if (currentScene && !currentScene.isTitleScreen && currentScene.type !== 'quiz') {
    state.history.push(snapshotState());
  }

  // ── Apply state updates ──────────────────────────
  if (stateUpdates) Object.assign(state, stateUpdates);

  // ── Apply constellation awards for this scene ────
  const award = SCENE_CONSTELLATION_AWARDS[sceneId];
  if (award) applyConstellationAward(award, sceneId);

  // ── Resolve dynamic allegiances before routing ───
  if (sceneId === '__night_before__' || sceneId === '__ending__') {
    if (!state.dynamicResolved) resolveDynamicConstellations();
  }

  // Special: resolve night-before scene based on constellation count
  if (sceneId === '__night_before__') {
    if (state.constellations >= 8) sceneId = 'scene-17a';
    else if (state.constellations >= 5) sceneId = 'scene-17b';
    else sceneId = 'scene-17c';
  }

  // Special: resolve ending based on constellation count
  if (sceneId === '__ending__') {
    if (state.constellations >= 8) sceneId = 'ending-a';
    else if (state.constellations >= 5) sceneId = 'ending-b';
    else sceneId = 'ending-c';
  }

  // Auto-bypass quiz scenes the player has already answered.
  // quizAnswered is not snapshotted, so going back never clears it.
  while (true) {
    const dest = STORY[sceneId];
    if (!dest || dest.type !== 'quiz') break;
    const key = dest.constellation.toLowerCase();
    if (!state.quizAnswered[key]) break;
    if (state.quizAnswered[key].correct && !state.quizDone[key]) {
      state.quizDone[key] = true;
    }
    sceneId = dest.next;
  }

  updateScoreboard();
  state.scene = sceneId;

  // ── Record visited chapters (scenes with a title) ─
  const newScene = STORY[sceneId];
  if (newScene && newScene.title && !newScene.isTitleScreen && newScene.type !== 'quiz') {
    const alreadyVisited = state.visited.some(v => v.sceneId === sceneId);
    if (!alreadyVisited) {
      state.visited.push({
        sceneId,
        title:    newScene.title,
        location: newScene.location || null,
        snapshot: snapshotState()
      });
    }
  }

  renderScene(sceneId);
}

// ── Constellation Award Helpers ───────────────────────

function applyConstellationAward(award, sceneId) {
  if (award.type === 'earn') {
    if (!state.constellationLog[award.key]) {
      state.constellationLog[award.key] = true;
    }
  } else if (award.type === 'betray') {
    if (state.constellationLog[award.key] && !state.constellationLog[award.key + '_betrayed']) {
      state.constellationLog[award.key + '_betrayed'] = true;
      // Signal betrayal animation after scoreboard updates
      state._leoBetrayalPending = true;
    }
  }
}

function resolveDynamicConstellations() {
  state.dynamicResolved = true;
  // constellations count updated by the updateScoreboard() call in goTo
}

// ── Scene Renderer ────────────────────────────────────

function renderScene(sceneId) {
  const content = document.getElementById('content');
  content.classList.add('fading');

  setTimeout(() => {
    content.innerHTML = buildSceneHTML(sceneId);
    content.classList.remove('fading');
    attachHandlers(sceneId);
    updateNavUI();

    // Trigger betrayal animation after scene fades in
    if (state._leoBetrayalPending) {
      state._leoBetrayalPending = false;
      setTimeout(() => flashBetrayalScore(), 600);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 350);
}

// ── HTML Builder ─────────────────────────────────────

function buildSceneHTML(sceneId) {
  const scene = STORY[sceneId];
  if (!scene) {
    console.warn('Unknown scene:', sceneId);
    return `<p>Scene not found: ${sceneId}</p>`;
  }

  if (scene.isTitleScreen) return buildTitleHTML(scene);
  if (scene.type === 'quiz') return buildQuizHTML(scene);

  let html = '';

  if (scene.endingLabel) {
    html += `<p class="ending-label">${scene.endingLabel}</p>`;
    html += `<h2 class="ending-title">${scene.title}</h2>`;
    html += `<p class="scene-location">${scene.location}</p>`;
  } else {
    if (scene.title)    html += `<h2 class="scene-title">${scene.title}</h2>`;
    if (scene.location) html += `<p class="scene-location">${scene.location}</p>`;
  }

  if (scene.image && scene.showImage) {
    html += `<div class="scene-image-wrap">
      <img class="scene-image" src="${scene.image}" alt=""
           onerror="this.closest('.scene-image-wrap').style.display='none'">
    </div>`;
  }

  if (scene.text)    html += renderText(scene.text);
  if (scene.choices && scene.choices.length > 0) html += renderChoices(scene.choices);

  return html;
}

// ── Title Screen ─────────────────────────────────────

function buildTitleHTML(scene) {
  return `
    <div class="title-screen">
      <h1 class="game-title">When Stars Fall</h1>
      <p class="game-subtitle"><em>New York City, 1853</em></p>
      ${renderText(scene.text)}
      ${renderChoices(scene.choices)}
    </div>
  `;
}

// ── Quiz Screen ──────────────────────────────────────

function buildQuizHTML(scene) {
  let html = '';

  if (scene.location) html += `<p class="scene-location">${scene.location}</p>`;
  if (scene.setup)    html += renderText(scene.setup);

  html += `<div class="quiz-block">
    <p class="quiz-constellation">✦ ${scene.constellation}</p>
    <p class="quiz-question">${scene.question}</p>
    <div class="quiz-options" id="quiz-options">`;

  scene.options.forEach((opt, i) => {
    const letter = String.fromCharCode(65 + i);
    html += `<button class="quiz-option" data-index="${i}">
      <strong>${letter}.</strong> ${opt}
    </button>`;
  });

  html += `</div>
    <div id="quiz-feedback" class="quiz-feedback" style="display:none"></div>
  </div>`;

  return html;
}

// ── Text Renderer ─────────────────────────────────────

function renderText(textArray) {
  if (!textArray || !textArray.length) return '';

  let html = '';
  let conditionalMode = null;

  for (const para of textArray) {
    if (para === '[IF_PATH_C]') { conditionalMode = state.pathC === 'C' ? 'show' : 'skip'; continue; }
    if (para === '[IF_PATH_D]') { conditionalMode = state.pathC === 'D' ? 'show' : 'skip'; continue; }
    if (para === '[IF_PATH_I]') { conditionalMode = state.pathI === 'I' ? 'show' : 'skip'; continue; }
    if (para === '[IF_PATH_II]') { conditionalMode = state.pathI === 'II' ? 'show' : 'skip'; continue; }
    if (para === '[IF_PATH_E]') { conditionalMode = state.pathE === 'E' ? 'show' : 'skip'; continue; }
    if (para === '[IF_PATH_F]') { conditionalMode = state.pathE === 'F' ? 'show' : 'skip'; continue; }
    if (para === '[END_IF]') { conditionalMode = null; continue; }

    if (conditionalMode === 'skip') continue;

    if (para === '---') {
      html += `<div class="divider">✦ &nbsp; ✦ &nbsp; ✦</div>`;
    } else if (typeof para === 'string' && para.startsWith('*') && para.endsWith('*') && para.length > 2) {
      html += `<p class="italic-para">${processInline(para.slice(1, -1))}</p>`;
    } else {
      html += `<p>${processInline(String(para))}</p>`;
    }
  }

  return html;
}

function processInline(text) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

// ── Choices Renderer ──────────────────────────────────

function renderChoices(choices) {
  if (!choices || !choices.length) return '';

  const isMulti = choices.length > 1;
  const wrapClass = isMulti ? 'choices choices--multi' : 'choices choices--single';
  const btnClass  = isMulti ? 'choice-btn--option'     : 'choice-btn--continue';

  let html = `<div class="${wrapClass}">`;
  choices.forEach((choice, i) => {
    html += `<button class="${btnClass}" data-index="${i}">${choice.label}</button>`;
  });
  html += '</div>';
  return html;
}

// ── Event Handlers ────────────────────────────────────

function attachHandlers(sceneId) {
  const scene = STORY[sceneId];
  if (!scene) return;

  if (scene.type === 'quiz') {
    attachQuizHandlers(scene);
    return;
  }

  document.querySelectorAll('.choice-btn--continue, .choice-btn--option').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      const choice = scene.choices[idx];
      if (!choice) return;

      const updates = {};
      if (choice.setPathI) updates.pathI = choice.setPathI;
      if (choice.setPathC) updates.pathC = choice.setPathC;
      if (choice.setPathE) updates.pathE = choice.setPathE;

      goTo(choice.next, Object.keys(updates).length ? updates : undefined);
    });
  });
}

function attachQuizHandlers(scene) {
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx     = parseInt(btn.dataset.index, 10);
      const correct = idx === scene.correct;
      const quizKey = scene.constellation.toLowerCase();

      document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
      btn.classList.add(correct ? 'correct' : 'wrong');

      // Record permanently (survives back navigation)
      state.quizAnswered[quizKey] = { correct };

      if (correct) {
        state.quizDone[quizKey] = true;
        pulseScore();
      }

      updateScoreboard();

      const feedback = document.getElementById('quiz-feedback');
      feedback.style.display = 'block';
      const feedbackText  = correct ? scene.feedbackCorrect : scene.feedbackWrong;
      const feedbackClass = correct ? 'feedback-correct'    : 'feedback-wrong';
      feedback.innerHTML = `<div class="${feedbackClass}">${renderText(feedbackText)}</div>
        <div class="choices">
          <button class="choice-btn--continue" id="quiz-continue">Continue</button>
        </div>`;

      document.getElementById('quiz-continue').addEventListener('click', () => {
        goTo(scene.next);
      });
    });
  });
}

// ── Scoreboard Display ────────────────────────────────

function updateScoreboard() {
  const { player, vdz, lunardi } = getScoreboardCounts();
  state.constellations = player; // keep in sync for routing

  const pEl = document.getElementById('score-player');
  const vEl = document.getElementById('score-vdz');
  const lEl = document.getElementById('score-lunardi');
  if (pEl) pEl.textContent = player;
  if (vEl) vEl.textContent = vdz;
  if (lEl) lEl.textContent = lunardi;
}

function pulseScore() {
  const el = document.getElementById('score-player');
  if (!el) return;
  el.classList.remove('pulse');
  void el.offsetWidth;
  el.classList.add('pulse');
}

function flashBetrayalScore() {
  // Brief flash on the VdZ score to signal Leo's defection
  const el = document.getElementById('score-vdz');
  if (!el) return;
  el.classList.remove('betray-flash');
  void el.offsetWidth;
  el.classList.add('betray-flash');
}

// ── Nav UI (back button + TOC visibility) ─────────────

function updateNavUI() {
  const currentScene  = STORY[state.scene];
  const isQuiz        = currentScene && currentScene.type === 'quiz';
  const isTitleScreen = currentScene && currentScene.isTitleScreen;

  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.style.display =
      (state.history.length > 0 && !isQuiz && !isTitleScreen) ? '' : 'none';
  }

  const tocBtn = document.getElementById('toc-btn');
  if (tocBtn) {
    tocBtn.style.display = state.visited.length > 0 ? '' : 'none';
  }
}

// ── Table of Contents ─────────────────────────────────

function openTOC() {
  const list = document.getElementById('toc-list');
  list.innerHTML = '';

  state.visited.forEach(entry => {
    const btn = document.createElement('button');
    btn.className = 'toc-entry';
    btn.innerHTML = `<span class="toc-title">${entry.title}</span>${
      entry.location ? `<span class="toc-location">${entry.location}</span>` : ''
    }`;
    btn.addEventListener('click', () => {
      closeTOC();
      const cur = STORY[state.scene];
      if (cur && !cur.isTitleScreen && cur.type !== 'quiz') {
        state.history.push(snapshotState());
      }
      restoreSnapshot(entry.snapshot);
      state.scene = entry.sceneId;
      renderScene(entry.sceneId);
    });
    list.appendChild(btn);
  });

  document.getElementById('toc-overlay').classList.add('open');
}

function closeTOC() {
  document.getElementById('toc-overlay').classList.remove('open');
}

// ── Constellation Log ─────────────────────────────────

function openConstellationLog() {
  const list = document.getElementById('clog-list');
  list.innerHTML = '';

  const sections = [
    { id: 'player',      label: 'With you',        items: [] },
    { id: 'vdz',         label: 'Van der Zon',      items: [] },
    { id: 'lunardi',     label: 'Lunardis',         items: [] },
    { id: 'uncommitted', label: 'Allegiance unknown', items: [] }
  ];

  CONSTELLATION_CATALOGUE.forEach(c => {
    const faction = getConstellationFaction(c);
    // 'unmet' (not yet encountered) folds into the "Allegiance unknown" section
    const sectionId = faction === 'unmet' ? 'uncommitted' : faction;
    const sec = sections.find(s => s.id === sectionId);
    if (sec) sec.items.push(c);
  });

  sections.forEach(sec => {
    if (sec.items.length === 0) return;

    const header = document.createElement('p');
    header.className = 'clog-faction-label';
    header.textContent = `${sec.label}`;
    list.appendChild(header);

    sec.items.forEach(c => {
      const item = document.createElement('div');
      item.className = `clog-entry clog-entry--${sec.id}`;

      const marker = sec.id === 'player' ? '✦' : sec.id === 'uncommitted' ? '○' : '·';
      const nameLine = c.aka
        ? `<span class="clog-name">${c.name}</span><span class="clog-aka"> — ${c.aka}</span>`
        : `<span class="clog-name">${c.name}</span>`;

      const betrayedNote = (c.key === 'leo' && state.constellationLog.leo_betrayed)
        ? `<div class="clog-betrayed">Defected to the Van der Zons at the invocation.</div>`
        : '';

      item.innerHTML = `
        <div class="clog-name-row">${marker} ${nameLine}</div>
        <div class="clog-location">${c.location}</div>
        ${sec.id !== 'uncommitted' ? `<div class="clog-desc">${c.desc}</div>` : ''}
        ${betrayedNote}
      `;
      list.appendChild(item);
    });
  });

  // Count line
  const { player } = getScoreboardCounts();
  const countEl = document.getElementById('clog-count');
  if (countEl) countEl.textContent = `${player} signature${player !== 1 ? 's' : ''} for the Compact`;

  document.getElementById('clog-overlay').classList.add('open');
}

function closeConstellationLog() {
  document.getElementById('clog-overlay').classList.remove('open');
}

// ── Boot ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  updateScoreboard();

  // Back button
  const backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.addEventListener('click', () => goTo('__back__'));

  // TOC open button
  const tocBtn = document.getElementById('toc-btn');
  if (tocBtn) tocBtn.addEventListener('click', openTOC);

  // TOC close button
  const tocClose = document.getElementById('toc-close');
  if (tocClose) tocClose.addEventListener('click', closeTOC);

  // Click outside TOC panel to close
  const tocOverlay = document.getElementById('toc-overlay');
  if (tocOverlay) {
    tocOverlay.addEventListener('click', e => { if (e.target === tocOverlay) closeTOC(); });
  }

  // Scoreboard opens the constellation log
  const scoreboard = document.getElementById('scoreboard');
  if (scoreboard) scoreboard.addEventListener('click', openConstellationLog);

  // Constellation log close button
  const clogClose = document.getElementById('clog-close');
  if (clogClose) clogClose.addEventListener('click', closeConstellationLog);

  // Click outside constellation log panel to close
  const clogOverlay = document.getElementById('clog-overlay');
  if (clogOverlay) {
    clogOverlay.addEventListener('click', e => { if (e.target === clogOverlay) closeConstellationLog(); });
  }

  // Escape closes any open panel
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeTOC(); closeConstellationLog(); }
  });

  updateNavUI();
  goTo('prologue');
});
