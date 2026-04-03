/* =====================================================
   WHEN STARS FALL — Game Engine
   ===================================================== */

// ── Game State ──────────────────────────────────────

const state = {
  scene: 'prologue',
  pathI: null,   // 'I' or 'II'  — Scene 3 (Truth vs Logic)
  pathC: null,   // 'C' or 'D'  — Scene 10 (Follow vs Wait)
  pathE: null,   // 'E' or 'F'  — Scene 14 (Fight vs Reckon)
  constellations: 4,
  quizDone: {},  // e.g. { cancer: true }
  history: [],   // stack of snapshots for ← back button
  visited: []    // ordered list of { sceneId, title, location, snapshot } for TOC
};

// ── State Snapshots ──────────────────────────────────

function snapshotState() {
  return {
    scene:         state.scene,
    pathI:         state.pathI,
    pathC:         state.pathC,
    pathE:         state.pathE,
    constellations: state.constellations,
    quizDone:      Object.assign({}, state.quizDone)
  };
}

function restoreSnapshot(snapshot) {
  state.pathI         = snapshot.pathI;
  state.pathC         = snapshot.pathC;
  state.pathE         = snapshot.pathE;
  state.constellations = snapshot.constellations;
  state.quizDone      = Object.assign({}, snapshot.quizDone);
  updateStarDisplay();
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

// ── Scene Renderer ────────────────────────────────────

function renderScene(sceneId) {
  const content = document.getElementById('content');
  content.classList.add('fading');

  setTimeout(() => {
    content.innerHTML = buildSceneHTML(sceneId);
    content.classList.remove('fading');
    attachHandlers(sceneId);
    updateNavUI();
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

  // Special: title screen
  if (scene.isTitleScreen) return buildTitleHTML(scene);

  // Special: quiz
  if (scene.type === 'quiz') return buildQuizHTML(scene);

  let html = '';

  // Ending label
  if (scene.endingLabel) {
    html += `<p class="ending-label">${scene.endingLabel}</p>`;
    html += `<h2 class="ending-title">${scene.title}</h2>`;
    html += `<p class="scene-location">${scene.location}</p>`;
  } else {
    // Scene title
    if (scene.title) {
      html += `<h2 class="scene-title">${scene.title}</h2>`;
    }
    // Location / date
    if (scene.location) {
      html += `<p class="scene-location">${scene.location}</p>`;
    }
  }

  // Image — only on first page of each chapter
  if (scene.image && scene.showImage) {
    html += `<div class="scene-image-wrap">
      <img class="scene-image" src="${scene.image}" alt=""
           onerror="this.closest('.scene-image-wrap').style.display='none'">
    </div>`;
  }

  // Body text
  if (scene.text) {
    html += renderText(scene.text);
  }

  // Choices
  if (scene.choices && scene.choices.length > 0) {
    html += renderChoices(scene.choices);
  }

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

  if (scene.location) {
    html += `<p class="scene-location">${scene.location}</p>`;
  }
  if (scene.setup) {
    html += renderText(scene.setup);
  }

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
  let conditionalMode = null; // null | 'show' | 'skip'

  for (const para of textArray) {

    // Conditional markers
    if (para === '[IF_PATH_C]') {
      conditionalMode = state.pathC === 'C' ? 'show' : 'skip';
      continue;
    }
    if (para === '[IF_PATH_D]') {
      conditionalMode = state.pathC === 'D' ? 'show' : 'skip';
      continue;
    }
    if (para === '[IF_PATH_I]') {
      conditionalMode = state.pathI === 'I' ? 'show' : 'skip';
      continue;
    }
    if (para === '[IF_PATH_II]') {
      conditionalMode = state.pathI === 'II' ? 'show' : 'skip';
      continue;
    }
    if (para === '[IF_PATH_E]') {
      conditionalMode = state.pathE === 'E' ? 'show' : 'skip';
      continue;
    }
    if (para === '[IF_PATH_F]') {
      conditionalMode = state.pathE === 'F' ? 'show' : 'skip';
      continue;
    }
    if (para === '[END_IF]') {
      conditionalMode = null;
      continue;
    }

    // Skip suppressed content
    if (conditionalMode === 'skip') continue;

    // Render paragraph
    if (para === '---') {
      html += `<div class="divider">✦ &nbsp; ✦ &nbsp; ✦</div>`;
    } else if (typeof para === 'string' && para.startsWith('*') && para.endsWith('*') && para.length > 2) {
      const inner = processInline(para.slice(1, -1));
      html += `<p class="italic-para">${inner}</p>`;
    } else {
      html += `<p>${processInline(String(para))}</p>`;
    }
  }

  return html;
}

// Inline markdown: **bold** and 'smart' quote normalisation
function processInline(text) {
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return text;
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
      const idx = parseInt(btn.dataset.index, 10);
      const correct = idx === scene.correct;

      // Disable all options
      document.querySelectorAll('.quiz-option').forEach(b => {
        b.disabled = true;
      });

      // Mark selected
      btn.classList.add(correct ? 'correct' : 'wrong');

      // Award constellation
      if (correct) {
        state.constellations += 1;
        state.quizDone[scene.constellation.toLowerCase()] = true;
        pulseStars();
      }

      updateStarDisplay();

      // Show feedback
      const feedback = document.getElementById('quiz-feedback');
      feedback.style.display = 'block';

      const feedbackText = correct ? scene.feedbackCorrect : scene.feedbackWrong;
      const feedbackClass = correct ? 'feedback-correct' : 'feedback-wrong';
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

// ── Constellation Display ─────────────────────────────

function updateStarDisplay() {
  const el = document.getElementById('stars-display');
  if (!el) return;

  const stars = Array(state.constellations).fill('✦').join(' ');
  el.textContent = stars;
}

function pulseStars() {
  const el = document.getElementById('stars-display');
  if (!el) return;
  el.classList.remove('pulse');
  // Force reflow
  void el.offsetWidth;
  el.classList.add('pulse');
}

// ── Nav UI (back button + TOC visibility) ─────────────

function updateNavUI() {
  const currentScene = STORY[state.scene];
  const isQuiz       = currentScene && currentScene.type === 'quiz';
  const isTitleScreen = currentScene && currentScene.isTitleScreen;

  // Back button: visible when history has entries and we're not on a quiz or title screen
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.style.display =
      (state.history.length > 0 && !isQuiz && !isTitleScreen) ? '' : 'none';
  }

  // TOC button: visible once at least one titled chapter has been visited
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

    let inner = `<span class="toc-title">${entry.title}</span>`;
    if (entry.location) {
      inner += `<span class="toc-location">${entry.location}</span>`;
    }
    btn.innerHTML = inner;

    btn.addEventListener('click', () => {
      closeTOC();
      // Save current position to history so player can back out
      const cur = STORY[state.scene];
      if (cur && !cur.isTitleScreen && cur.type !== 'quiz') {
        state.history.push(snapshotState());
      }
      // Restore the state as it was when this chapter was first reached
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

// ── Boot ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  updateStarDisplay();

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
    tocOverlay.addEventListener('click', e => {
      if (e.target === tocOverlay) closeTOC();
    });
  }

  // Escape key closes TOC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeTOC();
  });

  updateNavUI();
  goTo('prologue');
});
