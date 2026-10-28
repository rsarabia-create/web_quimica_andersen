// ==========================================================================
// Aplicació de Formulació Inorgànica 3r ESO
// ==========================================================================

// Estat global de l'aplicació
const state = {
  activeTab: 'inici',
  audioEnabled: true,
  // Formulador
  selectedCationIdx: 8, // Ferro(III) per defecte
  selectedAnionIdx: 0,  // Òxid per defecte
  // Quiz
  quizCategory: 'all',
  quizQuestions: [],
  currentQuestionIdx: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  quizAnswered: false,
  // Flashcards
  flashcardIdx: 0,
  isCardFlipped: false,
  // Cerca
  searchQuery: '',
  // Taula periòdica filtre
  elementFilter: 'all'
};

// ==========================================================================
// Sintetitzador d'Àudio Web (Sense fitxers externs)
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!state.audioEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  playSuccess() {
    if (!state.audioEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.08);
        osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
      });
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  playError() {
    if (!state.audioEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  playFanfare() {
    if (!state.audioEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        const start = this.ctx.currentTime + idx * 0.12;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.4);
      });
    } catch (e) {
      console.warn('Audio error', e);
    }
  }
}

const sfx = new SoundFX();

// ==========================================================================
// Navegació de Pestanyes
// ==========================================================================
function switchTab(tabId) {
  state.activeTab = tabId;
  sfx.playClick();

  // Actualitzar botons de navegació
  document.querySelectorAll('.nav-tab').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active', 'text-sky-600', 'font-bold');
      btn.classList.remove('text-slate-600');
    } else {
      btn.classList.remove('active', 'text-sky-600', 'font-bold');
      btn.classList.add('text-slate-600');
    }
  });

  // Amagar / Mostrar panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    if (pane.id === `pane-${tabId}`) {
      pane.classList.remove('hidden');
      pane.classList.add('animate-fadeIn');
    } else {
      pane.classList.add('hidden');
      pane.classList.remove('animate-fadeIn');
    }
  });

  // Inicialitzacions específiques de la pestanya
  if (tabId === 'laboratori') {
    renderLaboratori();
  } else if (tabId === 'valencies') {
    renderPeriodicElements();
  } else if (tabId === 'atomic') {
    renderAtomicTheories();
    renderAtomicExercises();
    renderMoellerExercises();
    initMoellerTrainer(35);
    calculateConfig(35);
  } else if (tabId === 'reforc') {
    renderReinforcement();
  } else if (tabId === 'ampliacio') {
    renderExtension();
  } else if (tabId === 'joc' && state.quizQuestions.length === 0) {
    startQuiz();
  } else if (tabId === 'flashcards') {
    renderFlashcard();
  } else if (tabId === 'cercador') {
    renderSearchResults();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// Secció: Laboratori Formulador Interactiu
// ==========================================================================
function renderLaboratori() {
  const cationContainer = document.getElementById('cation-selector');
  const anionContainer = document.getElementById('anion-selector');

  if (!cationContainer || !anionContainer) return;

  // Render Cations
  cationContainer.innerHTML = CHEMISTRY_DATA.builderCations.map((c, i) => {
    const isSelected = i === state.selectedCationIdx;
    return `
      <button onclick="selectCation(${i})" class="px-3 py-2 text-sm rounded-xl font-medium transition-all ${
        isSelected 
          ? 'bg-sky-600 text-white shadow-md shadow-sky-500/30 scale-105' 
          : 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-200'
      }">
        <span class="font-bold">${c.symbol}<sup>+${c.charge}</sup></span>
        <span class="text-xs block opacity-90">${c.name}</span>
      </button>
    `;
  }).join('');

  // Render Anions
  anionContainer.innerHTML = CHEMISTRY_DATA.builderAnions.map((a, i) => {
    const isSelected = i === state.selectedAnionIdx;
    return `
      <button onclick="selectAnion(${i})" class="px-3 py-2 text-sm rounded-xl font-medium transition-all ${
        isSelected 
          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 scale-105' 
          : 'bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200'
      }">
        <span class="font-bold">${a.symbol}<sup>-${a.charge}</sup></span>
        <span class="text-xs block opacity-90">${a.name}</span>
      </button>
    `;
  }).join('');

  // Calcular compost
  const cation = CHEMISTRY_DATA.builderCations[state.selectedCationIdx];
  const anion = CHEMISTRY_DATA.builderAnions[state.selectedAnionIdx];
  const result = buildCompound(cation, anion);

  // Actualitzar visualització del laboratori
  const displayContainer = document.getElementById('lab-result-display');
  if (displayContainer) {
    displayContainer.innerHTML = `
      <div class="space-y-6">
        <!-- Visualització del Creuament de Valències -->
        <div class="bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-100 rounded-2xl p-6 shadow-inner">
          <div class="text-xs font-semibold uppercase tracking-wider text-sky-800 text-center mb-4">
            Pas 1: Identificació i Creuament de Valències
          </div>
          <div class="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
            <!-- Catió -->
            <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-sky-200 min-w-[110px]">
              <div class="text-2xl font-black text-sky-700">${cation.symbol}<sup class="text-sm font-bold text-sky-500">+${cation.charge}</sup></div>
              <div class="text-xs text-slate-500 font-medium mt-1">${cation.name}</div>
              <div class="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full mt-2 inline-block">Catió (+)</div>
            </div>

            <!-- Símbol + -->
            <div class="text-2xl font-bold text-slate-400">+</div>

            <!-- Anió -->
            <div class="text-center p-4 bg-white rounded-xl shadow-sm border border-emerald-200 min-w-[110px]">
              <div class="text-2xl font-black text-emerald-700">${anion.symbol}<sup class="text-sm font-bold text-emerald-500">-${anion.charge}</sup></div>
              <div class="text-xs text-slate-500 font-medium mt-1">${anion.name}</div>
              <div class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full mt-2 inline-block">Anió (-)</div>
            </div>

            <!-- Fletxa de reacció -->
            <div class="text-2xl font-bold text-slate-400">➔</div>

            <!-- Fórmula resultant -->
            <div class="text-center p-4 bg-gradient-to-br from-indigo-500 to-sky-600 text-white rounded-2xl shadow-lg shadow-sky-500/25 min-w-[130px] transform hover:scale-105 transition-transform">
              <div class="text-3xl font-extrabold tracking-wide">${result.htmlFormula}</div>
              <div class="text-xs text-indigo-100 font-semibold mt-1">Fórmula final</div>
            </div>
          </div>

          <!-- Explicació de la simplificació -->
          <div class="mt-6 pt-4 border-t border-sky-200/60 text-sm text-slate-700 bg-white/70 rounded-xl p-4">
            <div class="font-bold text-slate-900 mb-1 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs">ℹ</span>
              Com hem obtingut aquesta fórmula?
            </div>
            <p class="leading-relaxed">
              1. La càrrega de l'anió (${anion.charge}) passa com a subíndex del catió (${cation.symbol}<sub>${result.subCation}</sub>).<br>
              2. La càrrega del catió (${cation.charge}) passa com a subíndex de l'anió (${anion.symbol}<sub>${result.subAnion}</sub>).<br>
              ${result.simplified 
                ? `<span class="text-amber-700 font-semibold">⚡ Simplificació:</span> Els subíndexs (${result.subCation} i ${result.subAnion}) són divisibles per ${result.divisor}, per tant es divideixen quedant en <strong>${result.rawFormula}</strong>.`
                : `<span class="text-emerald-700 font-semibold">✓ Fòrmula irreductible:</span> Els subíndexs no es poden simplificar més.`
              }
            </p>
          </div>
        </div>

        <!-- Targetes de les 2 Nomenclatures Oficials -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Sistemàtica (Prefixos) -->
          <div class="p-5 rounded-2xl bg-white border-2 border-indigo-100 shadow-sm hover:border-indigo-300 transition-colors">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">1. Sistemàtica (Prefixos IUPAC)</span>
              <span class="text-xs text-slate-400 font-medium">di-, tri-, tetra-...</span>
            </div>
            <div class="text-xl font-bold text-slate-900 mt-2">${result.nameSystematic}</div>
            <p class="text-xs text-slate-600 mt-2">
              S'anomena llegint la fórmula de dreta a esquerra utilitzant prefixos multiplicadors segons el nombre d'àtoms.
            </p>
          </div>

          <!-- Stock (Nombres Romans) -->
          <div class="p-5 rounded-2xl bg-white border-2 border-sky-100 shadow-sm hover:border-sky-300 transition-colors">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg">2. Nomenclatura de Stock</span>
              <span class="text-xs text-slate-400 font-medium">Nombres romans</span>
            </div>
            <div class="text-xl font-bold text-slate-900 mt-2">${result.nameStock}</div>
            <p class="text-xs text-slate-600 mt-2">
              ${cation.fixed 
                ? `<span class="text-emerald-600 font-semibold">Nota clau 3r ESO:</span> Com que el <strong>${cation.name}</strong> només té una valència possible, <strong>NO</strong> s'indica cap nombre romà.`
                : `<span class="text-sky-700 font-semibold">Nota clau 3r ESO:</span> Com que el ferro/coure/plom té més d'una valència, cal especificar <strong>(${cation.roman})</strong> en nombres romans.`
              }
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

function selectCation(idx) {
  state.selectedCationIdx = idx;
  sfx.playClick();
  renderLaboratori();
}

function selectAnion(idx) {
  state.selectedAnionIdx = idx;
  sfx.playClick();
  renderLaboratori();
}

// ==========================================================================
// Secció: Explorador d'Elements i Valències (Taula)
// ==========================================================================
function renderPeriodicElements() {
  const container = document.getElementById('elements-grid');
  if (!container) return;

  const filtered = CHEMISTRY_DATA.elements.filter(el => {
    if (state.elementFilter === 'all') return true;
    if (state.elementFilter === 'metalls') return el.type.includes('metall');
    if (state.elementFilter === 'nometalls') return el.type === 'no-metall' || el.type === 'halogen' || el.type === 'calcogen';
    if (state.elementFilter === 'transicio') return el.type === 'metall-transicio';
    return true;
  });

  const typeColors = {
    'metall-alcali': 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100',
    'metall-alcalinoterri': 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100',
    'metall-transicio': 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
    'metall': 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100',
    'no-metall': 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
    'halogen': 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100',
    'calcogen': 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100'
  };

  container.innerHTML = filtered.map(el => {
    const colorClass = typeColors[el.type] || 'bg-slate-50 text-slate-700 border-slate-200';
    return `
      <div onclick="showElementModal('${el.symbol}')" class="element-badge p-4 rounded-2xl border-2 ${colorClass} text-center shadow-sm relative group">
        <div class="text-xs text-slate-500 font-mono flex justify-between items-center mb-1">
          <span>${el.num}</span>
          <span class="text-[10px] font-semibold uppercase tracking-wider">${el.group.split(' ')[0]}</span>
        </div>
        <div class="text-3xl font-black mb-1">${el.symbol}</div>
        <div class="text-sm font-semibold truncate">${el.name}</div>
        <div class="mt-2 pt-2 border-t border-current/20 text-xs font-bold">
          Valències: <span class="font-mono text-sm">${el.commonValence}</span>
        </div>
        <div class="mt-1 text-[11px] opacity-75 line-clamp-2">
          ${el.tip}
        </div>
      </div>
    `;
  }).join('');
}

function filterElements(category, btnElement) {
  state.elementFilter = category;
  sfx.playClick();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-sky-600', 'text-white');
    btn.classList.add('bg-white', 'text-slate-700');
  });
  if (btnElement) {
    btnElement.classList.add('bg-sky-600', 'text-white');
    btnElement.classList.remove('bg-white', 'text-slate-700');
  }
  renderPeriodicElements();
}

function showElementModal(symbol) {
  const el = CHEMISTRY_DATA.elements.find(e => e.symbol === symbol);
  if (!el) return;
  sfx.playClick();

  const modal = document.getElementById('element-modal');
  const modalContent = document.getElementById('element-modal-content');

  if (modal && modalContent) {
    modalContent.innerHTML = `
      <div class="text-center pb-4 border-b border-slate-100">
        <div class="inline-block p-4 rounded-2xl bg-sky-50 text-sky-600 text-4xl font-black mb-2 shadow-inner">
          ${el.symbol}
        </div>
        <h3 class="text-2xl font-bold text-slate-800">${el.name}</h3>
        <span class="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full mt-1 inline-block">
          Número atòmic: ${el.num} | ${el.group}
        </span>
      </div>

      <div class="py-4 space-y-4 text-sm">
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-900">
          <span class="font-bold block text-amber-800 mb-1">🔑 Valències / Estats d'oxidació per a 3r d'ESO:</span>
          <span class="text-lg font-mono font-bold">${el.commonValence}</span>
        </div>

        <div class="bg-sky-50 border border-sky-100 rounded-xl p-3 text-sky-900">
          <span class="font-bold block text-sky-800 mb-1">💡 Consell per a l'examen:</span>
          <p class="text-slate-700 leading-relaxed">${el.tip}</p>
        </div>

        <div class="text-xs text-slate-500">
          <strong>Tipus:</strong> ${el.type.replace('-', ' ')}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex justify-end">
        <button onclick="closeElementModal()" class="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-colors">
          Entès!
        </button>
      </div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeElementModal() {
  const modal = document.getElementById('element-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==========================================================================
// Secció: Joc d'Entrenament / Test (Quiz)
// ==========================================================================
function startQuiz() {
  // Barallar preguntes
  let qs = [...CHEMISTRY_DATA.questions];
  if (state.quizCategory !== 'all') {
    qs = qs.filter(q => q.type.includes(state.quizCategory));
    if (qs.length === 0) qs = [...CHEMISTRY_DATA.questions];
  }
  // Algorisme de Fisher-Yates per barrejar preguntes
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }

  state.quizQuestions = qs.slice(0, 10); // 10 preguntes per partida
  state.currentQuestionIdx = 0;
  state.score = 0;
  state.streak = 0;
  state.quizAnswered = false;

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  if (state.currentQuestionIdx >= state.quizQuestions.length) {
    renderQuizSummary();
    return;
  }

  const q = state.quizQuestions[state.currentQuestionIdx];
  state.quizAnswered = false;

  // Actualitzar barres i comptadors
  const progressPercent = ((state.currentQuestionIdx) / state.quizQuestions.length) * 100;

  container.innerHTML = `
    <div class="glass-panel p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto shadow-xl">
      <!-- Capçalera del Quiz -->
      <div class="flex items-center justify-between text-sm mb-4">
        <span class="font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
          Pregunta ${state.currentQuestionIdx + 1} de ${state.quizQuestions.length}
        </span>
        <div class="flex items-center gap-3">
          <span class="flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            <span class="flame-anim">🔥</span> Racha: ${state.streak}
          </span>
          <span class="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            ⭐ Punts: ${state.score}
          </span>
        </div>
      </div>

      <!-- Barra de progrés -->
      <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-6">
        <div class="bg-gradient-to-r from-sky-500 to-indigo-500 h-full transition-all duration-300" style="width: ${progressPercent}%"></div>
      </div>

      <!-- Pregunta -->
      <div class="mb-6">
        <h3 class="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
          ${q.question}
        </h3>
        ${q.formula ? `
          <div class="mt-4 inline-block bg-slate-900 text-sky-400 font-mono text-2xl px-6 py-2 rounded-2xl shadow-inner font-extrabold tracking-widest">
            ${formatFormula(q.formula)}
          </div>
        ` : ''}
      </div>

      <!-- Opcions -->
      <div class="grid grid-cols-1 gap-3" id="quiz-options">
        ${q.options.map((opt, idx) => `
          <button onclick="handleQuizAnswer(${idx})" id="opt-btn-${idx}" class="quiz-option-btn text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50/50 transition-all font-medium text-slate-700 flex items-center justify-between group">
            <span class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center font-bold text-sm text-slate-600 transition-colors">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span class="text-base font-semibold">${formatFormula(opt)}</span>
            </span>
            <span class="text-lg opacity-0 group-hover:opacity-100 transition-opacity">👉</span>
          </button>
        `).join('')}
      </div>

      <!-- Feedback / Explicació (amagat inicialment) -->
      <div id="quiz-feedback" class="mt-6 hidden"></div>
    </div>
  `;
}

function handleQuizAnswer(selectedIdx) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const q = state.quizQuestions[state.currentQuestionIdx];
  const isCorrect = selectedIdx === q.correctIndex;

  const optionsContainer = document.getElementById('quiz-options');
  const allBtns = optionsContainer.querySelectorAll('button');

  // Desactivar clics addicionals
  allBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.remove('border-slate-200', 'bg-white');
      btn.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-900', 'font-bold');
      btn.querySelector('.w-8').classList.add('bg-emerald-600', 'text-white');
    } else if (idx === selectedIdx) {
      btn.classList.remove('border-slate-200', 'bg-white');
      btn.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-900');
      btn.querySelector('.w-8').classList.add('bg-rose-600', 'text-white');
    }
  });

  const feedbackDiv = document.getElementById('quiz-feedback');

  if (isCorrect) {
    state.score += 10 + (state.streak * 2);
    state.streak += 1;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    sfx.playSuccess();

    feedbackDiv.innerHTML = `
      <div class="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-fadeIn">
        <div class="font-bold flex items-center gap-2 text-emerald-800 text-base mb-1">
          <span class="text-xl">🎉</span> Molt bé! Resposta Correcta!
        </div>
        <p class="text-sm leading-relaxed text-emerald-950">${q.explanation}</p>
        <button onclick="nextQuizQuestion()" class="mt-4 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors">
          Següent Pregunta ➔
        </button>
      </div>
    `;
  } else {
    state.streak = 0;
    sfx.playError();

    feedbackDiv.innerHTML = `
      <div class="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 animate-fadeIn">
        <div class="font-bold flex items-center gap-2 text-rose-800 text-base mb-1">
          <span class="text-xl">⚠️</span> Oh no! La resposta correcta era l'opció ${String.fromCharCode(65 + q.correctIndex)}.
        </div>
        <p class="text-sm leading-relaxed text-rose-950 mt-1">${q.explanation}</p>
        <button onclick="nextQuizQuestion()" class="mt-4 w-full py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl shadow-md transition-colors">
          Continuar ➔
        </button>
      </div>
    `;
  }

  feedbackDiv.classList.remove('hidden');
}

function nextQuizQuestion() {
  state.currentQuestionIdx++;
  sfx.playClick();
  renderQuizQuestion();
}

function renderQuizSummary() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const total = state.quizQuestions.length;
  const percentage = Math.round((state.score / (total * 10)) * 100);

  let title = 'Bon intent!';
  let icon = '🧪';
  let message = 'La formulació requereix una mica de pràctica. Revisa la secció de Teoria i torna-ho a provar!';

  if (percentage >= 90) {
    title = 'Excel·lent! Mestre de la Química!';
    icon = '🏆';
    message = 'Tens dominada la formulació de 3r d\'ESO! Les teves notes aniran sobre rodes!';
    sfx.playFanfare();
  } else if (percentage >= 70) {
    title = 'Molt bona feina!';
    icon = '🌟';
    message = 'Gairebé perfecte! Domines les regles principals.';
    sfx.playSuccess();
  } else if (percentage >= 50) {
    title = 'Aprovat!';
    icon = '👍';
    message = 'Vas pel bon camí. Recorda revisar bé la regla de si porta nombre romà a Stock o no.';
  }

  container.innerHTML = `
    <div class="glass-panel p-8 rounded-3xl max-w-lg mx-auto text-center shadow-xl animate-fadeIn">
      <div class="text-6xl mb-3">${icon}</div>
      <h2 class="text-3xl font-extrabold text-slate-800 mb-2">${title}</h2>
      <p class="text-slate-600 text-sm mb-6">${message}</p>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="p-4 bg-white rounded-2xl border border-slate-200">
          <div class="text-xs text-slate-400 font-semibold uppercase">Puntuació Final</div>
          <div class="text-3xl font-black text-sky-600 mt-1">${state.score} pts</div>
        </div>
        <div class="p-4 bg-white rounded-2xl border border-slate-200">
          <div class="text-xs text-slate-400 font-semibold uppercase">Ratxa Màxima</div>
          <div class="text-3xl font-black text-amber-500 mt-1">🔥 ${state.maxStreak}</div>
        </div>
      </div>

      <div class="space-y-3">
        <button onclick="startQuiz()" class="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl shadow-lg shadow-sky-500/25 transition-all transform hover:scale-[1.02]">
          Jugar de nou 🔄
        </button>
        <button onclick="switchTab('laboratori')" class="w-full py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border border-slate-200 transition-colors">
          Anar al Laboratori de Fòrmules 🔬
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// Secció: Targetes Flashcards
// ==========================================================================
function renderFlashcard() {
  const container = document.getElementById('flashcard-container');
  const countEl = document.getElementById('flashcard-counter');
  if (!container) return;

  const total = CHEMISTRY_DATA.flashcards.length;
  const current = CHEMISTRY_DATA.flashcards[state.flashcardIdx];

  if (countEl) {
    countEl.innerText = `${state.flashcardIdx + 1} de ${total}`;
  }

  state.isCardFlipped = false;

  container.innerHTML = `
    <div class="perspective-1000 w-full max-w-md h-72 mx-auto">
      <div id="active-card" onclick="toggleCardFlip()" class="card-inner relative w-full h-full rounded-3xl shadow-xl">
        <!-- Front -->
        <div class="card-front bg-gradient-to-br from-white to-sky-50 border-2 border-sky-100 p-8">
          <span class="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/60 px-3 py-1 rounded-full mb-4">
            Pregunta / Element
          </span>
          <div class="text-2xl sm:text-3xl font-black text-slate-800 my-auto">
            ${current.front}
          </div>
          <div class="text-xs text-slate-400 font-medium mt-auto flex items-center gap-1">
            <span>🔄 Fes clic a la targeta per veure la valència</span>
          </div>
        </div>

        <!-- Back -->
        <div class="card-back bg-gradient-to-br from-sky-600 to-indigo-700 text-white p-8 border-2 border-sky-400">
          <span class="text-xs font-bold uppercase tracking-wider text-sky-200 bg-white/20 px-3 py-1 rounded-full mb-4">
            Solució / València
          </span>
          <div class="text-lg sm:text-xl font-bold my-auto whitespace-pre-line leading-relaxed">
            ${current.back}
          </div>
          <div class="text-xs text-sky-200 font-medium mt-auto">
            Fes clic per girar novament
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleCardFlip() {
  const card = document.getElementById('active-card');
  if (!card) return;
  state.isCardFlipped = !state.isCardFlipped;
  sfx.playClick();
  if (state.isCardFlipped) {
    card.classList.add('flipped');
  } else {
    card.classList.remove('flipped');
  }
}

function nextFlashcard() {
  sfx.playClick();
  state.flashcardIdx = (state.flashcardIdx + 1) % CHEMISTRY_DATA.flashcards.length;
  renderFlashcard();
}

function prevFlashcard() {
  sfx.playClick();
  state.flashcardIdx = (state.flashcardIdx - 1 + CHEMISTRY_DATA.flashcards.length) % CHEMISTRY_DATA.flashcards.length;
  renderFlashcard();
}

// ==========================================================================
// Secció: Cercador de Fòrmules
// ==========================================================================
function renderSearchResults() {
  const input = document.getElementById('formula-search-input');
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  const query = (input ? input.value : state.searchQuery).trim().toLowerCase();
  state.searchQuery = query;

  const filtered = CHEMISTRY_DATA.compounds.filter(c => {
    if (!query) return true;
    return c.formula.toLowerCase().includes(query) ||
           c.nameSys.toLowerCase().includes(query) ||
           c.nameStock.toLowerCase().includes(query) ||
           c.desc.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div class="p-8 text-center bg-white rounded-3xl border border-slate-200 col-span-full">
        <span class="text-4xl">🔍</span>
        <h4 class="text-lg font-bold text-slate-700 mt-2">Cap compost trobat</h4>
        <p class="text-sm text-slate-500">Prova cercant fòrmules com 'CO2', 'Fe2O3', 'NaCl', o noms com 'òxid', 'clorur' o 'ferro'.</p>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = filtered.map(c => `
    <div class="glass-card p-5 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">
            ${c.category}
          </span>
          <span class="text-lg font-mono font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-xl">
            ${formatFormula(c.formula)}
          </span>
        </div>
        <div class="space-y-1.5 mt-3">
          <div>
            <span class="text-[11px] font-semibold text-slate-400 block uppercase">Sistemàtica:</span>
            <span class="text-sm font-bold text-slate-800">${c.nameSys}</span>
          </div>
          <div>
            <span class="text-[11px] font-semibold text-slate-400 block uppercase">Stock:</span>
            <span class="text-sm font-bold text-indigo-700">${c.nameStock}</span>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 italic">
        ${c.desc}
      </div>
    </div>
  `).join('');
}

// Utilitat per convertir p. ex. "Fe2O3" en "Fe₂O₃" amb subíndexs HTML
function formatFormula(str) {
  return str.replace(/([A-Z][a-z]?)(\d+)/g, '$1<sub>$2</sub>');
}

// ==========================================================================
// Secció: Teories Atòmiques i Orbitals Electrònics
// ==========================================================================
function renderAtomicTheories() {
  const container = document.getElementById('theories-timeline');
  if (!container) return;

  container.innerHTML = CHEMISTRY_DATA.atomicTheories.map((theory, idx) => `
    <div class="glass-card p-6 rounded-3xl border border-slate-200/90 relative overflow-hidden group">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-black uppercase tracking-wider px-3 py-1 bg-sky-100 text-sky-800 rounded-full">
          ${theory.year}
        </span>
        <span class="text-xs font-semibold text-slate-400">${theory.author}</span>
      </div>

      <!-- Il·lustració Vectorial SVG del Model -->
      <div class="bg-gradient-to-b from-slate-50 to-sky-50/40 rounded-2xl p-4 mb-5 border border-sky-100/60 flex items-center justify-center min-h-[190px]">
        ${SVG_ASSETS[theory.svgKey] || ''}
      </div>

      <h3 class="text-xl font-black text-slate-900 mb-2">${theory.name}</h3>
      <p class="text-sm font-semibold text-sky-700 mb-3">${theory.concept}</p>

      <ul class="text-xs text-slate-600 space-y-2 mb-4 leading-relaxed">
        ${theory.keyPoints.map(pt => `
          <li class="flex items-start gap-2">
            <span class="text-sky-500 font-bold">✓</span>
            <span>${pt}</span>
          </li>
        `).join('')}
      </ul>

      <div class="pt-3 border-t border-slate-100 text-[11px] text-amber-900 bg-amber-50/70 p-3 rounded-xl border border-amber-100">
        <strong>Límit del model:</strong> ${theory.limit}
      </div>
    </div>
  `).join('');

  // Renderitzar orbitals explicatius
  const orbitalsContainer = document.getElementById('orbitals-shapes');
  if (orbitalsContainer) {
    orbitalsContainer.innerHTML = `
      <div class="p-5 bg-white rounded-2xl border border-slate-200 text-center">
        ${SVG_ASSETS.orbitalS}
        <h4 class="text-base font-bold text-slate-800 mt-2">Orbital s</h4>
        <p class="text-xs text-slate-500 mt-1">Simetria esfèrica completa. Present en tots els nivells (1s, 2s, 3s...). Allotja com a màxim <strong>2 electrons</strong>.</p>
      </div>
      <div class="p-5 bg-white rounded-2xl border border-slate-200 text-center">
        ${SVG_ASSETS.orbitalP}
        <h4 class="text-base font-bold text-slate-800 mt-2">Orbitals p</h4>
        <p class="text-xs text-slate-500 mt-1">Forma de dos lòbuls orientats segons els eixos (px, py, pz). Allotgen fins a <strong>6 electrons</strong> (2 per orbital).</p>
      </div>
      <div class="p-5 bg-white rounded-2xl border border-slate-200 text-center">
        ${SVG_ASSETS.orbitalD}
        <h4 class="text-base font-bold text-slate-800 mt-2">Orbitals d</h4>
        <p class="text-xs text-slate-500 mt-1">5 orientacions espacials en forma de trèvol. Característics dels metalls de transició. Allotgen fins a <strong>10 electrons</strong>.</p>
      </div>
    `;
  }

  // Renderitzar gràfic de Moeller
  const moellerContainer = document.getElementById('moeller-display');
  if (moellerContainer) {
    moellerContainer.innerHTML = SVG_ASSETS.moellerDiagram;
  }
}

// Simulador interactiu de configuracions electròniques ampliat fins a Z = 86 (Radó)
function calculateConfig(zValue) {
  let z = parseInt(zValue) || 1;
  if (z < 1) z = 1;
  if (z > 86) z = 86;

  // Sincronitzar controls de la interfície
  const inputEl = document.getElementById('z-input');
  const sliderEl = document.getElementById('z-slider');
  if (inputEl) inputEl.value = z;
  if (sliderEl) sliderEl.value = z;

  const subshells = [
    { name: '1s', n: 1, l: 's', max: 2, cum: 2 },
    { name: '2s', n: 2, l: 's', max: 2, cum: 4 },
    { name: '2p', n: 2, l: 'p', max: 6, cum: 10 },
    { name: '3s', n: 3, l: 's', max: 2, cum: 12 },
    { name: '3p', n: 3, l: 'p', max: 6, cum: 18 },
    { name: '4s', n: 4, l: 's', max: 2, cum: 20 },
    { name: '3d', n: 3, l: 'd', max: 10, cum: 30 },
    { name: '4p', n: 4, l: 'p', max: 6, cum: 36 },
    { name: '5s', n: 5, l: 's', max: 2, cum: 38 },
    { name: '4d', n: 4, l: 'd', max: 10, cum: 48 },
    { name: '5p', n: 5, l: 'p', max: 6, cum: 54 },
    { name: '6s', n: 6, l: 's', max: 2, cum: 56 },
    { name: '4f', n: 4, l: 'f', max: 14, cum: 70 },
    { name: '5d', n: 5, l: 'd', max: 10, cum: 80 },
    { name: '6p', n: 6, l: 'p', max: 6, cum: 86 }
  ];

  let remaining = z;
  const configParts = [];
  const shellElectrons = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let maxN = 1;

  for (const sub of subshells) {
    if (remaining <= 0) break;
    const count = Math.min(remaining, sub.max);
    configParts.push(`${sub.name}<sup>${count}</sup>`);
    shellElectrons[sub.n] = (shellElectrons[sub.n] || 0) + count;
    if (sub.n > maxN && count > 0) maxN = sub.n;
    remaining -= count;
  }

  // Notació de gas noble abreujada
  let nobleCore = '';
  if (z === 86) {
    nobleCore = '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> = [Rn] (Octet tancat)';
  } else if (z > 54) {
    nobleCore = `[Xe] ${getSubshellSlice(54, z, subshells)}`;
  } else if (z === 54) {
    nobleCore = '[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> = [Xe]';
  } else if (z > 36) {
    nobleCore = `[Kr] ${getSubshellSlice(36, z, subshells)}`;
  } else if (z === 36) {
    nobleCore = '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> = [Kr]';
  } else if (z > 18) {
    nobleCore = `[Ar] ${getSubshellSlice(18, z, subshells)}`;
  } else if (z === 18) {
    nobleCore = '[Ne] 3s<sup>2</sup> 3p<sup>6</sup> = [Ar]';
  } else if (z > 10) {
    nobleCore = `[Ne] ${getSubshellSlice(10, z, subshells)}`;
  } else if (z === 10) {
    nobleCore = '[He] 2s<sup>2</sup> 2p<sup>6</sup> = [Ne]';
  } else if (z > 2) {
    nobleCore = `[He] ${getSubshellSlice(2, z, subshells)}`;
  } else if (z === 2) {
    nobleCore = '1s<sup>2</sup> = [He]';
  } else {
    nobleCore = '1s<sup>1</sup>';
  }

  // Cerca de l'element a ALL_ELEMENTS_86 o CHEMISTRY_DATA.elements
  const elFound = (typeof ALL_ELEMENTS_86 !== 'undefined' ? ALL_ELEMENTS_86.find(e => e.z === z) : null) ||
                  CHEMISTRY_DATA.elements.find(e => e.num === z) ||
                  { z, symbol: 'E' + z, name: 'Element Z=' + z, group: '-', period: '-', type: 'Element' };

  const valenceElectrons = shellElectrons[maxN];

  const resultContainer = document.getElementById('config-result');
  if (resultContainer) {
    resultContainer.innerHTML = `
      <div class="bg-gradient-to-r from-sky-50 via-teal-50 to-indigo-50 border-2 border-sky-200 rounded-3xl p-6 shadow-sm">
        <div class="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div class="flex items-center gap-4">
            <span class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-sky-500/20">
              ${elFound.symbol}
            </span>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="text-xl font-black text-slate-900">${elFound.name}</h4>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-sky-100 text-sky-800">Z = ${z}</span>
              </div>
              <span class="text-xs text-slate-500 font-medium">Període: ${elFound.period || maxN} | Grup: ${elFound.group || '-'} | Tipus: ${(elFound.type || '').replace('-', ' ')}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full border border-indigo-200">
              Capa de valència: n = ${maxN}
            </span>
            <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200">
              ${z <= 36 ? 'Bloc principal' : (z <= 56 ? 'Transició / d' : 'Lantanoides / f / p')}
            </span>
          </div>
        </div>

        <!-- Configuració Completa -->
        <div class="space-y-1 mb-4">
          <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Configuració Electrònica Completa (Moeller fins a Z=${z}):</span>
          <div class="p-4 bg-slate-950 text-sky-300 font-mono text-base sm:text-lg rounded-2xl font-bold tracking-wide overflow-x-auto shadow-inner border border-slate-800">
            ${configParts.join(' ')}
          </div>
        </div>

        <!-- Notació Abreviada de Gas Noble -->
        <div class="space-y-1 mb-4">
          <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Notació Abreviada amb Gas Noble:</span>
          <div class="p-3 bg-white border border-indigo-100 text-indigo-900 font-mono text-sm sm:text-base rounded-xl font-bold shadow-xs flex items-center gap-2">
            <span class="text-xs px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-md font-sans font-bold">Abreviada:</span>
            <span>${nobleCore}</span>
          </div>
        </div>

        <!-- Taula de distribució per capes K, L, M, N, O, P -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-2">
          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 text-center">
            <span class="text-slate-400 block font-semibold uppercase text-[10px]">Electrons València:</span>
            <span class="text-xl font-black text-sky-700">${valenceElectrons} e⁻</span>
            <span class="text-[10px] text-slate-500 block mt-0.5">al nivell n = ${maxN}</span>
          </div>
          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 text-center">
            <span class="text-slate-400 block font-semibold uppercase text-[10px]">Distribució per Capes:</span>
            <span class="text-xs font-mono font-bold text-slate-800 block mt-1">
              K:${shellElectrons[1]} | L:${shellElectrons[2]} | M:${shellElectrons[3]}<br>
              N:${shellElectrons[4]} | O:${shellElectrons[5]} | P:${shellElectrons[6]}
            </span>
          </div>
          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 text-center col-span-2">
            <span class="text-slate-400 block font-semibold uppercase text-[10px]">Deducció per a la Formulació Inorgànica:</span>
            <p class="text-xs font-semibold text-emerald-800 mt-1">
              ${getFormulationDeduction(z, valenceElectrons, elFound)}
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

// Funció auxiliar per a la notació abreujada
function getSubshellSlice(fromZ, toZ, subshells) {
  let rem = toZ;
  let skipped = fromZ;
  const parts = [];
  for (const s of subshells) {
    if (rem <= 0) break;
    if (skipped >= s.max) {
      skipped -= s.max;
      rem -= s.max;
      continue;
    }
    const available = s.max - skipped;
    skipped = 0;
    const count = Math.min(rem, available);
    if (count > 0) {
      parts.push(`${s.name}<sup>${count}</sup>`);
      rem -= count;
    }
  }
  return parts.join(' ');
}

// Funció auxiliar de connexió amb formulació
function getFormulationDeduction(z, valElectrons, el) {
  if (z === 2 || z === 10 || z === 18 || z === 36 || z === 54 || z === 86) {
    return 'Gas noble amb l\'octet complet. No sol formar compostos en condicions normals (valència 0).';
  }
  if (valElectrons === 1) {
    return 'Tendeix a cedir 1 electró per assolir l\'octet del gas noble anterior. València característica: +1.';
  }
  if (valElectrons === 2) {
    return 'Tendeix a cedir 2 electrons de l\'orbital s. València característica: +2.';
  }
  if (valElectrons === 7) {
    return 'Halogen: només li falta 1 electró per completar l\'octet. València en sals binàries: -1.';
  }
  if (valElectrons === 6) {
    return 'Calcogen: guanya 2 electrons com a anió (valència -2) o comparteix electrons en òxids (+4, +6).';
  }
  if (z >= 21 && z <= 30 || z >= 39 && z <= 48 || z >= 72 && z <= 80) {
    return 'Metall de transició amb orbitals d interns incomplets. Presenta diverses valències segons els electrons que mobilitza.';
  }
  return `Té ${valElectrons} electrons a l'últim nivell, definint les seves propietats d'enllaç i estats d'oxidació.`;
}

// ==========================================================================
// Entrenador Interactiu de Moeller Pas a Pas (Game / Interactive Trainer)
// ==========================================================================
function initMoellerTrainer(zTarget) {
  const z = parseInt(zTarget) || 35;
  const el = (typeof ALL_ELEMENTS_86 !== 'undefined' ? ALL_ELEMENTS_86.find(e => e.z === z) : null) ||
             CHEMISTRY_DATA.elements.find(e => e.num === z) ||
             { z, symbol: 'X', name: 'Element Z=' + z };

  state.trainer = {
    targetZ: z,
    element: el,
    currentSubIdx: 0,
    electronsPlaced: 0,
    configParts: [],
    isFinished: false,
    errorMsg: ''
  };

  renderMoellerTrainerUI();
}

function renderMoellerTrainerUI() {
  const container = document.getElementById('moeller-trainer-container');
  if (!container || !state.trainer) return;

  const t = state.trainer;
  const subshells = CHEMISTRY_DATA.moellerSubshells;
  const currentSub = subshells[t.currentSubIdx];
  const progressPct = Math.round((t.electronsPlaced / t.targetZ) * 100);

  container.innerHTML = `
    <div class="glass-panel p-6 sm:p-8 rounded-3xl border-2 border-indigo-200 space-y-6">
      <div class="flex items-center justify-between flex-wrap gap-4 border-b border-indigo-100 pb-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Entrenador Interactiu Moeller
          </span>
          <h3 class="text-2xl font-black text-slate-900 mt-2">
            Configura: <span class="text-indigo-600">${t.element.name} (${t.element.symbol}, Z = ${t.targetZ})</span>
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">Fes clic als orbitals en l'ordre exacte de les fletxes diagonals del diagrama de Moeller!</p>
        </div>

        <!-- Selector ràpid d'elements de repte -->
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="text-xs font-bold text-slate-400 mr-1">Provar:</span>
          <button onclick="initMoellerTrainer(17)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 17 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Cl (17)</button>
          <button onclick="initMoellerTrainer(26)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 26 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Fe (26)</button>
          <button onclick="initMoellerTrainer(35)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 35 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Br (35)</button>
          <button onclick="initMoellerTrainer(47)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 47 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Ag (47)</button>
          <button onclick="initMoellerTrainer(56)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 56 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Ba (56)</button>
          <button onclick="initMoellerTrainer(79)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 79 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Au (79)</button>
          <button onclick="initMoellerTrainer(82)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 82 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Pb (82)</button>
          <button onclick="initMoellerTrainer(86)" class="px-2.5 py-1 text-xs rounded-lg ${t.targetZ === 86 ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-200 text-slate-700'}">Rn (86)</button>
        </div>
      </div>

      <!-- Barra de progrés d'electrons -->
      <div>
        <div class="flex justify-between items-center text-xs font-bold mb-1.5">
          <span class="text-slate-600">Electrons col·locats: <strong class="text-indigo-700">${t.electronsPlaced}</strong> de <strong>${t.targetZ}</strong></span>
          <span class="text-indigo-600 font-mono">${progressPct}% completat</span>
        </div>
        <div class="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
          <div class="bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 h-full transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>
      </div>

      <!-- Caixa de visualització de la configuració en construcció -->
      <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-sky-300 font-mono text-lg min-h-[60px] flex items-center justify-between flex-wrap gap-2 shadow-inner">
        <div>
          ${t.configParts.length > 0 ? t.configParts.join(' ') : '<span class="text-slate-500 text-sm font-sans italic">Fes clic al primer orbital (1s) segons el diagrama de Moeller...</span>'}
        </div>
        ${t.isFinished ? '<span class="px-3 py-1 bg-emerald-500 text-white text-xs font-sans font-bold rounded-full animate-bounce">✓ CONFIGURACIÓ COMPLETA!</span>' : ''}
      </div>

      <!-- Missatge d'avís d'error si s'ha clicat l'orbital incorrecte -->
      ${t.errorMsg ? `
        <div class="p-3 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-xs font-medium animate-fadeIn flex items-center gap-2">
          <span class="text-base">⚠️</span>
          <span>${t.errorMsg}</span>
        </div>
      ` : ''}

      <!-- Àrea de treball: Botons d'orbitals i Diagrama de Moeller -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <!-- Columna 1: Teclat d'Orbitals de Moeller -->
        <div class="space-y-3">
          <span class="text-xs font-bold text-slate-700 block">Tria el següent orbital a omplir:</span>
          <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
            ${subshells.map((sub, idx) => {
              const isFilled = idx < t.currentSubIdx;
              const isNext = idx === t.currentSubIdx && !t.isFinished;
              return `
                <button onclick="handleTrainerOrbitalClick('${sub.id}')" ${t.isFinished ? 'disabled' : ''} class="p-3 rounded-xl border text-center transition-all ${
                  isFilled 
                    ? 'bg-slate-100 border-slate-300 text-slate-400 font-medium cursor-not-allowed opacity-60' 
                    : isNext 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white font-black shadow-md shadow-indigo-500/30 scale-105 ring-2 ring-indigo-400 ring-offset-2' 
                      : 'bg-white hover:bg-sky-50 border-slate-200 text-slate-700 font-bold hover:scale-102'
                }">
                  <span class="text-sm font-mono block">${sub.id}</span>
                  <span class="text-[10px] block opacity-80">(màx ${sub.max})</span>
                </button>
              `;
            }).join('')}
          </div>
          <div class="pt-2 flex justify-between items-center text-xs text-slate-500">
            <button onclick="initMoellerTrainer(${t.targetZ})" class="text-indigo-600 font-bold hover:underline">🔄 Reiniciar aquest element</button>
            <button onclick="initMoellerTrainer(Math.floor(Math.random() * 85) + 2)" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors">🎲 Element aleatori (Z=1..86)</button>
          </div>
        </div>

        <!-- Columna 2: Diagrama de Moeller de Referència -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-slate-800">Diagrama de Moeller de Suport:</span>
            <span class="text-[10px] font-bold px-2 py-0.5 bg-sky-100 text-sky-700 rounded-md">Fins a Z = 86</span>
          </div>
          <div class="max-h-[300px] overflow-hidden flex items-center justify-center">
            ${SVG_ASSETS.moellerDiagram}
          </div>
        </div>
      </div>
    </div>
  `;
}

function handleTrainerOrbitalClick(subId) {
  if (!state.trainer || state.trainer.isFinished) return;
  const t = state.trainer;
  const subshells = CHEMISTRY_DATA.moellerSubshells;
  const expectedSub = subshells[t.currentSubIdx];

  if (subId === expectedSub.id) {
    // Correcte!
    t.errorMsg = '';
    const remainingNeeded = t.targetZ - t.electronsPlaced;
    const electronsToAdd = Math.min(remainingNeeded, expectedSub.max);

    t.configParts.push(`${expectedSub.id}<sup>${electronsToAdd}</sup>`);
    t.electronsPlaced += electronsToAdd;
    t.currentSubIdx++;

    if (t.electronsPlaced >= t.targetZ) {
      t.isFinished = true;
      sfx.playFanfare();
    } else {
      sfx.playSuccess();
    }
    renderMoellerTrainerUI();
  } else {
    // Incorrecte!
    sfx.playError();
    t.errorMsg = `Atenció: segons les diagonals de Moeller no tocava '${subId}', sinó '${expectedSub.id}'! Fixa't en la fletxa que creua des de dalt a la dreta.`;
    renderMoellerTrainerUI();
  }
}

// ==========================================================================
// Banc d'Exercicis de Configuració amb Diagrama de Moeller (fins a Z = 86)
// ==========================================================================
function renderMoellerExercises() {
  const container = document.getElementById('moeller-exercises-container');
  if (!container) return;

  container.innerHTML = CHEMISTRY_DATA.moellerExercises.map((ex, idx) => `
    <div class="glass-card p-6 rounded-3xl border border-indigo-100 space-y-4 shadow-sm" id="moeller-card-${idx}">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Exercici Moeller ${idx + 1}: ${ex.element}
        </span>
        <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
          Diagrama Moeller inclòs
        </span>
      </div>

      <!-- Imatge dedicada de l'exercici amb el seu Diagrama de Moeller -->
      <div class="bg-gradient-to-b from-slate-50 to-indigo-50/40 rounded-2xl p-4 border border-indigo-100/80 flex items-center justify-center">
        ${SVG_ASSETS[ex.imageKey] || ''}
      </div>

      <h4 class="text-base font-bold text-slate-800 leading-snug">
        ${ex.question}
      </h4>

      <!-- Opcions -->
      <div class="grid grid-cols-1 gap-2.5" id="moeller-opts-${idx}">
        ${ex.options.map((opt, optIdx) => `
          <button onclick="handleMoellerExerciseAnswer(${idx}, ${optIdx})" class="text-left p-3.5 rounded-xl border border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/50 transition-all text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-3">
            <span class="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
              ${String.fromCharCode(65 + optIdx)}
            </span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      <!-- Feedback -->
      <div id="moeller-feedback-${idx}" class="hidden p-4 rounded-2xl text-xs sm:text-sm leading-relaxed"></div>
    </div>
  `).join('');
}

function handleMoellerExerciseAnswer(exIdx, selectedOptIdx) {
  const ex = CHEMISTRY_DATA.moellerExercises[exIdx];
  const container = document.getElementById(`moeller-opts-${exIdx}`);
  const feedback = document.getElementById(`moeller-feedback-${exIdx}`);
  if (!container || !feedback) return;

  const isCorrect = selectedOptIdx === ex.correctIndex;
  const buttons = container.querySelectorAll('button');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === ex.correctIndex) {
      btn.className = 'text-left p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold flex items-center gap-3 text-xs sm:text-sm';
    } else if (idx === selectedOptIdx) {
      btn.className = 'text-left p-3.5 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-900 flex items-center gap-3 text-xs sm:text-sm';
    }
  });

  if (isCorrect) {
    sfx.playSuccess();
    feedback.className = 'p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm animate-fadeIn block';
    feedback.innerHTML = `<strong>🎉 Molt bé! Resposta correcta:</strong> ${ex.explanation}`;
  } else {
    sfx.playError();
    feedback.className = 'p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm animate-fadeIn block';
    feedback.innerHTML = `<strong>⚠️ Compte:</strong> ${ex.explanation}`;
  }
}

// Exercicis d'Orbitals i Teories Atòmiques (AMB IMATGE A CADA EXERCICI)
function renderAtomicExercises() {
  const container = document.getElementById('atomic-exercises-container');
  if (!container) return;

  container.innerHTML = CHEMISTRY_DATA.atomicExercises.map((ex, idx) => `
    <div class="glass-card p-6 rounded-3xl border border-slate-200 space-y-4" id="at-card-${idx}">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
          Exercici ${idx + 1}: ${ex.title}
        </span>
        <span class="text-xs text-slate-400 font-medium">Teoria Atòmica</span>
      </div>

      <!-- Imatge dedicada de l'exercici -->
      <div class="bg-gradient-to-b from-slate-50 to-sky-50/40 rounded-2xl p-4 border border-sky-100 flex items-center justify-center">
        ${SVG_ASSETS[ex.imageKey] || ''}
      </div>

      <h4 class="text-base font-bold text-slate-800 leading-snug">
        ${ex.question}
      </h4>

      <!-- Opcions -->
      <div class="grid grid-cols-1 gap-2.5" id="at-opts-${idx}">
        ${ex.options.map((opt, optIdx) => `
          <button onclick="handleAtomicExerciseAnswer(${idx}, ${optIdx})" class="text-left p-3.5 rounded-xl border border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50/50 transition-all text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-3">
            <span class="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
              ${String.fromCharCode(65 + optIdx)}
            </span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      <!-- Feedback -->
      <div id="at-feedback-${idx}" class="hidden p-4 rounded-2xl text-xs sm:text-sm leading-relaxed"></div>
    </div>
  `).join('');
}

function handleAtomicExerciseAnswer(exIdx, selectedOptIdx) {
  const ex = CHEMISTRY_DATA.atomicExercises[exIdx];
  const container = document.getElementById(`at-opts-${exIdx}`);
  const feedback = document.getElementById(`at-feedback-${exIdx}`);
  if (!container || !feedback) return;

  const isCorrect = selectedOptIdx === ex.correctIndex;
  const buttons = container.querySelectorAll('button');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === ex.correctIndex) {
      btn.className = 'text-left p-3.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold flex items-center gap-3 text-xs sm:text-sm';
    } else if (idx === selectedOptIdx) {
      btn.className = 'text-left p-3.5 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-900 flex items-center gap-3 text-xs sm:text-sm';
    }
  });

  if (isCorrect) {
    sfx.playSuccess();
    feedback.className = 'p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm animate-fadeIn block';
    feedback.innerHTML = `<strong>🎉 Molt bé! Resposta correcta:</strong> ${ex.explanation}`;
  } else {
    sfx.playError();
    feedback.className = 'p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm animate-fadeIn block';
    feedback.innerHTML = `<strong>⚠️ Compte:</strong> ${ex.explanation}`;
  }
}

// ==========================================================================
// Secció: Reforç (Dificultats típiques i exercicis guiats)
// ==========================================================================
function renderReinforcement() {
  const errorsContainer = document.getElementById('reforc-errors');
  if (errorsContainer) {
    errorsContainer.innerHTML = CHEMISTRY_DATA.reinforcement.topErrors.map(err => `
      <div class="glass-card p-5 rounded-2xl border-l-4 border-l-rose-500 border border-slate-200">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
            ${err.num}
          </span>
          <h4 class="font-bold text-slate-800 text-sm sm:text-base">${err.title}</h4>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
          <div class="p-2.5 rounded-lg bg-rose-50 text-rose-900 font-mono">
            ❌ <strong>Error típic:</strong> ${err.wrong}
          </div>
          <div class="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 font-mono font-bold">
            ✓ <strong>Forma correcta:</strong> ${err.right}
          </div>
        </div>
        <p class="text-xs text-slate-600 mt-2 leading-relaxed">
          <span class="font-bold text-slate-800">Regla clau:</span> ${err.rule}
        </p>
      </div>
    `).join('');
  }

  // Renderitzar exercicis guiats de reforç (AMB IMATGE A CADA EXERCICI)
  const exercisesContainer = document.getElementById('reforc-exercises');
  if (exercisesContainer) {
    exercisesContainer.innerHTML = CHEMISTRY_DATA.reinforcement.exercises.map((ex, idx) => `
      <div class="glass-panel p-6 rounded-3xl border border-slate-200 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Exercici Guiat ${idx + 1}: ${ex.title}
          </span>
          <span class="text-xs text-slate-400 font-medium">Reforç 3r ESO</span>
        </div>

        <!-- Imatge dedicada de l'exercici de reforç -->
        <div class="bg-gradient-to-b from-slate-50 to-amber-50/30 rounded-2xl p-4 border border-amber-100 flex items-center justify-center">
          ${SVG_ASSETS[ex.imageKey] || ''}
        </div>

        <p class="text-sm font-semibold text-slate-800 leading-relaxed">${ex.statement}</p>

        <!-- Botons d'ajuda -->
        <div class="flex flex-wrap gap-2 pt-2">
          <button onclick="toggleReinforcementHint('${ex.id}')" class="px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-xs transition-colors flex items-center gap-1.5">
            💡 Mostra la Pista
          </button>
          <button onclick="toggleReinforcementSteps('${ex.id}')" class="px-3.5 py-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-semibold text-xs transition-colors flex items-center gap-1.5">
            👁️ Veure Raonament Pas a Pas
          </button>
        </div>

        <!-- Pista (oculta) -->
        <div id="hint-${ex.id}" class="hidden p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 animate-fadeIn">
          <strong>Pista:</strong> ${ex.hint}
        </div>

        <!-- Raonament pas a pas i solució (ocult) -->
        <div id="steps-${ex.id}" class="hidden p-4 bg-sky-50 rounded-2xl border border-sky-200 space-y-2 text-xs text-sky-950 animate-fadeIn">
          <span class="font-bold block text-sky-900 text-sm">Resolució Pas a Pas:</span>
          <ul class="space-y-1.5 list-disc list-inside">
            ${ex.steps.map(s => `<li>${s}</li>`).join('')}
          </ul>
          <div class="mt-3 pt-3 border-t border-sky-200 font-bold text-sm text-sky-900">
            Solució final: <span class="bg-white px-2 py-0.5 rounded-md border border-sky-300 font-mono">${ex.solutionFormula}</span> — ${ex.solutionName}
          </div>
        </div>
      </div>
    `).join('');
  }
}

function toggleReinforcementHint(id) {
  sfx.playClick();
  const el = document.getElementById(`hint-${id}`);
  if (el) el.classList.toggle('hidden');
}

function toggleReinforcementSteps(id) {
  sfx.playClick();
  const el = document.getElementById(`steps-${id}`);
  if (el) el.classList.toggle('hidden');
}

// ==========================================================================
// Secció: Ampliació (Compostos ternaris i pont cap a 4t d'ESO)
// ==========================================================================
function renderExtension() {
  const topicsContainer = document.getElementById('ampliacio-topics');
  if (topicsContainer) {
    topicsContainer.innerHTML = CHEMISTRY_DATA.extension.topics.map((top, idx) => `
      <div class="glass-card p-6 rounded-3xl border border-indigo-100 space-y-3">
        <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
          Tema ${idx + 1}
        </span>
        <h4 class="text-xl font-bold text-slate-800">${top.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${top.desc}</p>
        <div class="p-3 bg-indigo-50/70 rounded-xl text-xs font-mono text-indigo-950 border border-indigo-100">
          <strong>Com es formula:</strong> ${top.rules}
        </div>
        <p class="text-[11px] text-slate-500 italic">
          <strong>On ho trobem:</strong> ${top.application}
        </p>
      </div>
    `).join('');
  }

  // Renderitzar exercicis de repte d'ampliació (AMB IMATGE A CADA EXERCICI)
  const exercisesContainer = document.getElementById('ampliacio-exercises');
  if (exercisesContainer) {
    exercisesContainer.innerHTML = CHEMISTRY_DATA.extension.exercises.map((ex, idx) => `
      <div class="glass-panel p-6 rounded-3xl border border-indigo-200/80 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Repte d'Ampliació ${idx + 1}: ${ex.title}
          </span>
          <span class="text-xs text-slate-400 font-medium">Pont 4t ESO</span>
        </div>

        <!-- Imatge dedicada de l'exercici d'ampliació -->
        <div class="bg-gradient-to-b from-slate-50 to-indigo-50/30 rounded-2xl p-4 border border-indigo-100 flex items-center justify-center">
          ${SVG_ASSETS[ex.imageKey] || ''}
        </div>

        <p class="text-sm font-semibold text-slate-800 leading-relaxed">${ex.statement}</p>

        <div class="flex flex-wrap gap-2 pt-2">
          <button onclick="toggleExtensionSteps('${ex.id}')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5">
            🔍 Desplega la Resolució i Solució
          </button>
        </div>

        <div id="amp-steps-${ex.id}" class="hidden p-4 bg-indigo-50/80 rounded-2xl border border-indigo-200 space-y-2 text-xs text-indigo-950 animate-fadeIn">
          <span class="font-bold block text-indigo-900 text-sm">Resolució Científica:</span>
          <ul class="space-y-1.5 list-disc list-inside">
            ${ex.steps.map(s => `<li>${s}</li>`).join('')}
          </ul>
          <div class="mt-3 pt-3 border-t border-indigo-200 font-bold text-sm text-indigo-900">
            Fórmula / Conclusió: <span class="bg-white px-2 py-0.5 rounded-md border border-indigo-300 font-mono text-indigo-800">${ex.solutionFormula}</span> — ${ex.solutionName}
          </div>
        </div>
      </div>
    `).join('');
  }
}

function toggleExtensionSteps(id) {
  sfx.playClick();
  const el = document.getElementById(`amp-steps-${id}`);
  if (el) el.classList.toggle('hidden');
}

// ==========================================================================
// Modal de Llicències i Drets d'Autor
// ==========================================================================
function openLicenseModal() {
  sfx.playClick();
  const modal = document.getElementById('license-modal');
  const content = document.getElementById('license-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="text-center pb-4 border-b border-slate-100">
      <div class="inline-block p-3 rounded-2xl bg-slate-900 text-white mb-2 shadow-md">
        ${SVG_ASSETS.ccBadge}
      </div>
      <h3 class="text-2xl font-black text-slate-900">Llicències i Drets d'Autor</h3>
      <p class="text-xs text-slate-500 mt-1">Marc legal i pedagògic del projecte QuimiESO 3r</p>
    </div>

    <div class="py-4 space-y-4 text-xs sm:text-sm text-slate-700 max-h-[60vh] overflow-y-auto pr-2">
      <div class="p-4 bg-sky-50 rounded-2xl border border-sky-100">
        <h4 class="font-bold text-sky-900 text-sm mb-1 flex items-center gap-2">
          <span>📜</span> Llicència Educativa Creative Commons
        </h4>
        <p class="font-semibold text-sky-800 mb-2">${CHEMISTRY_DATA.legal.ccLicense}</p>
        <p class="text-xs text-slate-600 leading-relaxed">
          Aquest recurs educatiu ha estat creat per a l'ensenyament públic i obert. Ets lliure de compartir, copiar, distribuir i projectar aquest recurs a qualsevol centre educatiu sense cap cost.
        </p>
      </div>

      <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-900 text-sm mb-1 flex items-center gap-2">
          <span>💻</span> Codi Font Obert (Open Source)
        </h4>
        <p class="font-semibold text-emerald-800 mb-2">${CHEMISTRY_DATA.legal.softwareLicense}</p>
        <p class="text-xs text-slate-600 leading-relaxed">
          Tot el codi font HTML, CSS, JavaScript i les il·lustracions vectorials SVG estan sota llicència lliure MIT.
        </p>
      </div>

      <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-900 text-sm mb-2">Permisos i Condicions d'Ús:</h4>
        <ul class="space-y-1.5 text-xs text-slate-600">
          ${CHEMISTRY_DATA.legal.permissions.map(p => `
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 font-bold">✓</span>
              <span>${p}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="text-[11px] text-slate-500 space-y-1 pt-2 border-t border-slate-100">
        <p><strong>Currículum:</strong> ${CHEMISTRY_DATA.legal.institution}</p>
        <p><strong>Nomenclatura:</strong> ${CHEMISTRY_DATA.legal.iupacReference}</p>
      </div>
    </div>

    <div class="pt-3 border-t border-slate-100 flex justify-end">
      <button onclick="closeLicenseModal()" class="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors">
        Tancar
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeLicenseModal() {
  const modal = document.getElementById('license-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
function toggleAudio() {
  state.audioEnabled = !state.audioEnabled;
  const btn = document.getElementById('btn-audio-toggle');
  if (btn) {
    btn.innerHTML = state.audioEnabled ? '🔊 Sons: Activats' : '🔇 Sons: Desactivats';
    btn.classList.toggle('text-sky-700', state.audioEnabled);
    btn.classList.toggle('text-slate-400', !state.audioEnabled);
  }
}

// Inicialitzar quan carregui el DOM
document.addEventListener('DOMContentLoaded', () => {
  renderLaboratori();
  renderPeriodicElements();
  renderAtomicTheories();
  renderAtomicExercises();
  renderMoellerExercises();
  initMoellerTrainer(35);
  calculateConfig(35);
  renderReinforcement();
  renderExtension();
  renderFlashcard();
  renderSearchResults();

  // Cercador d'esdeveniment
  const searchInput = document.getElementById('formula-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderSearchResults();
    });
  }
});
