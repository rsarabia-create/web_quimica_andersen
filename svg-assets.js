// ==========================================================================
// Fitxer d'Il·lustracions i Gràfics Vectorials SVG
// Gràfics 100% autònoms, nítids, lleugers i sense dependències externes
// ==========================================================================

const SVG_ASSETS = {
  // 1. Model de Dalton (1808) - Esfera massissa
  daltonModel: `
    <svg viewBox="0 0 240 180" class="w-full h-auto max-h-48 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="daltonGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#93c5fd" />
          <stop offset="45%" stop-color="#2563eb" />
          <stop offset="100%" stop-color="#1e3a8a" />
        </radialGradient>
        <filter id="shadowD" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#1e3a8a" flood-opacity="0.3"/>
        </filter>
      </defs>
      <circle cx="120" cy="85" r="55" fill="url(#daltonGrad)" filter="url(#shadowD)" />
      <ellipse cx="100" cy="65" rx="18" ry="10" fill="#ffffff" opacity="0.35" transform="rotate(-30 100 65)" />
      <text x="120" y="165" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Esfera massissa, indivisible i homogènia</text>
    </svg>
  `,

  // 2. Model de Thomson (1897) - Púding de panses
  thomsonModel: `
    <svg viewBox="0 0 240 180" class="w-full h-auto max-h-48 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="thomsonGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fca5a5" />
          <stop offset="70%" stop-color="#ef4444" />
          <stop offset="100%" stop-color="#991b1b" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="85" r="55" fill="url(#thomsonGrad)" opacity="0.85" />
      <!-- Símbols de càrrega positiva al fons -->
      <text x="85" y="75" font-family="monospace" font-size="16" font-weight="bold" fill="#ffffff" opacity="0.6">+</text>
      <text x="145" y="105" font-family="monospace" font-size="16" font-weight="bold" fill="#ffffff" opacity="0.6">+</text>
      <text x="120" y="55" font-family="monospace" font-size="16" font-weight="bold" fill="#ffffff" opacity="0.6">+</text>
      <text x="120" y="125" font-family="monospace" font-size="16" font-weight="bold" fill="#ffffff" opacity="0.6">+</text>
      <!-- Electrons incrustats (panses) -->
      <g>
        <circle cx="100" cy="70" r="11" fill="#1e3a8a" stroke="#ffffff" stroke-width="2"/>
        <text x="100" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">-</text>
      </g>
      <g>
        <circle cx="140" cy="75" r="11" fill="#1e3a8a" stroke="#ffffff" stroke-width="2"/>
        <text x="140" y="79" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">-</text>
      </g>
      <g>
        <circle cx="115" cy="105" r="11" fill="#1e3a8a" stroke="#ffffff" stroke-width="2"/>
        <text x="115" y="109" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">-</text>
      </g>
      <g>
        <circle cx="85" cy="100" r="9" fill="#1e3a8a" stroke="#ffffff" stroke-width="1.5"/>
        <text x="85" y="103" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">-</text>
      </g>
      <g>
        <circle cx="150" cy="105" r="9" fill="#1e3a8a" stroke="#ffffff" stroke-width="1.5"/>
        <text x="150" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">-</text>
      </g>
      <text x="120" y="165" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Massa positiva amb electrons (-) incrustats</text>
    </svg>
  `,

  // 3. Model de Rutherford (1911) - Model Planetari amb Nucli
  rutherfordModel: `
    <svg viewBox="0 0 240 180" class="w-full h-auto max-h-48 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Òrbites el·líptiques dels electrons -->
      <ellipse cx="120" cy="85" rx="75" ry="24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3" transform="rotate(30 120 85)" />
      <ellipse cx="120" cy="85" rx="75" ry="24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3" transform="rotate(-30 120 85)" />
      <ellipse cx="120" cy="85" rx="75" ry="24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3" transform="rotate(90 120 85)" />
      <!-- Nucli atòmic central (+) -->
      <circle cx="120" cy="85" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2" />
      <text x="120" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="black" fill="#ffffff">+</text>
      <!-- Electrons en òrbita -->
      <circle cx="175" cy="55" r="6" fill="#0284c7" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="65" cy="115" r="6" fill="#0284c7" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="120" cy="15" r="6" fill="#0284c7" stroke="#ffffff" stroke-width="1.5" />
      <text x="120" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Nucli petit (+) molt dens i escorça buida (-)</text>
    </svg>
  `,

  // 4. Model de Bohr (1913) - Nivells quantitzats i fotó
  bohrModel: `
    <svg viewBox="0 0 240 180" class="w-full h-auto max-h-48 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Nivells d'energia concèntrics -->
      <circle cx="110" cy="85" r="28" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2 2" />
      <circle cx="110" cy="85" r="48" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3" />
      <circle cx="110" cy="85" r="68" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3" />
      <!-- Labels nivells -->
      <text x="110" y="53" text-anchor="middle" font-family="monospace" font-size="9" fill="#64748b">n=1</text>
      <text x="110" y="33" text-anchor="middle" font-family="monospace" font-size="9" fill="#64748b">n=2</text>
      <text x="110" y="13" text-anchor="middle" font-family="monospace" font-size="9" fill="#64748b">n=3</text>
      <!-- Nucli -->
      <circle cx="110" cy="85" r="12" fill="#ef4444" />
      <text x="110" y="89" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">+</text>
      <!-- Salt quàntic (fletxa corba) -->
      <path d="M 160 85 Q 145 70 140 70" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="2 2" marker-end="url(#arrowBohr)" />
      <!-- Electró -->
      <circle cx="138" cy="71" r="5" fill="#8b5cf6" stroke="#ffffff" stroke-width="1" />
      <!-- Fotó emès (ona de llum) -->
      <path d="M 145 70 Q 155 60 165 70 T 185 70 T 205 70" fill="none" stroke="#f59e0b" stroke-width="2.5" />
      <text x="195" y="60" font-family="sans-serif" font-size="10" font-weight="bold" fill="#d97706">Fotó (hν)</text>
      <text x="120" y="170" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Òrbites circulars d'energia quantitzada</text>
    </svg>
  `,

  // 5. Model Mecanocuàntic (Actual) - Núvol d'Orbitals
  quantumOrbitalModel: `
    <svg viewBox="0 0 240 180" class="w-full h-auto max-h-48 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cloudGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.8" />
          <stop offset="30%" stop-color="#38bdf8" stop-opacity="0.5" />
          <stop offset="70%" stop-color="#bae6fd" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <!-- Núvol de probabilitat s -->
      <circle cx="120" cy="80" r="55" fill="url(#cloudGrad)" />
      <!-- Lòbuls de l'orbital p (forma de 8) -->
      <path d="M 120 80 C 100 40, 70 50, 90 80 C 105 100, 115 85, 120 80 Z" fill="#8b5cf6" opacity="0.45" />
      <path d="M 120 80 C 140 120, 170 110, 150 80 C 135 60, 125 75, 120 80 Z" fill="#8b5cf6" opacity="0.45" />
      <circle cx="120" cy="80" r="7" fill="#dc2626" />
      <text x="120" y="150" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#475569">Zona de màxima probabilitat electrònica (orbital)</text>
      <text x="120" y="168" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Model Quàntic: Schrödinger i Heisenberg</text>
    </svg>
  `,

  // Orbitals individuals: s, p, d
  orbitalS: `
    <svg viewBox="0 0 160 140" class="w-32 h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="orbS" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="60%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#0e7490" />
        </radialGradient>
      </defs>
      <!-- Eixos -->
      <line x1="15" y1="70" x2="145" y2="70" stroke="#cbd5e1" stroke-width="1.5" />
      <line x1="80" y1="10" x2="80" y2="130" stroke="#cbd5e1" stroke-width="1.5" />
      <circle cx="80" cy="70" r="38" fill="url(#orbS)" opacity="0.8" />
      <text x="80" y="75" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">s</text>
      <text x="80" y="125" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0e7490">Esfèric (màx 2 e⁻)</text>
    </svg>
  `,

  orbitalP: `
    <svg viewBox="0 0 160 140" class="w-32 h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="orbP1" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#c084fc" />
          <stop offset="100%" stop-color="#7e22ce" />
        </radialGradient>
        <radialGradient id="orbP2" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#c084fc" />
          <stop offset="100%" stop-color="#7e22ce" />
        </radialGradient>
      </defs>
      <line x1="15" y1="70" x2="145" y2="70" stroke="#cbd5e1" stroke-width="1.5" />
      <line x1="80" y1="10" x2="80" y2="130" stroke="#cbd5e1" stroke-width="1.5" />
      <!-- Lòbul superior -->
      <ellipse cx="80" cy="45" rx="20" ry="24" fill="url(#orbP1)" opacity="0.85" />
      <!-- Lòbul inferior -->
      <ellipse cx="80" cy="95" rx="20" ry="24" fill="url(#orbP2)" opacity="0.85" />
      <circle cx="80" cy="70" r="3" fill="#1e293b" />
      <text x="80" y="125" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6b21a8">2 lòbuls (màx 6 e⁻)</text>
    </svg>
  `,

  orbitalD: `
    <svg viewBox="0 0 160 140" class="w-32 h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="70" x2="145" y2="70" stroke="#cbd5e1" stroke-width="1.5" />
      <line x1="80" y1="10" x2="80" y2="130" stroke="#cbd5e1" stroke-width="1.5" />
      <!-- Quatre lòbuls en trèvol -->
      <ellipse cx="60" cy="50" rx="14" ry="18" fill="#f59e0b" opacity="0.8" transform="rotate(-35 60 50)" />
      <ellipse cx="100" cy="50" rx="14" ry="18" fill="#f59e0b" opacity="0.8" transform="rotate(35 100 50)" />
      <ellipse cx="60" cy="90" rx="14" ry="18" fill="#f59e0b" opacity="0.8" transform="rotate(35 60 90)" />
      <ellipse cx="100" cy="90" rx="14" ry="18" fill="#f59e0b" opacity="0.8" transform="rotate(-35 100 90)" />
      <circle cx="80" cy="70" r="3" fill="#1e293b" />
      <text x="80" y="125" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">4 lòbuls (màx 10 e⁻)</text>
    </svg>
  `,

  // Diagrama de Moeller Complet (Fins a n=7, cobrint fins a Z = 86 Radó i més enllà)
  moellerDiagram: `
    <svg viewBox="0 0 380 340" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <style>
        .m-sub { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: bold; fill: #1e293b; text-anchor: middle; dominant-baseline: central; }
        .m-arrow { stroke: #0284c7; stroke-width: 2.2; stroke-dasharray: 4 3; marker-end: url(#mArr86); }
        .m-badge { font-family: sans-serif; font-size: 9px; font-weight: bold; fill: #0369a1; }
      </style>
      <defs>
        <marker id="mArr86" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#0284c7"/>
        </marker>
        <filter id="glowSub" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#0284c7" flood-opacity="0.15"/>
        </filter>
      </defs>

      <!-- Fons suau -->
      <rect width="380" height="340" rx="16" fill="#f8fafc" />

      <!-- Capçaleres de columnes (subnivells s, p, d, f) -->
      <g font-family="sans-serif" font-size="11" font-weight="900" text-anchor="middle">
        <text x="65" y="20" fill="#0284c7">s (2)</text>
        <text x="135" y="20" fill="#9333ea">p (6)</text>
        <text x="205" y="20" fill="#d97706">d (10)</text>
        <text x="275" y="20" fill="#059669">f (14)</text>
      </g>

      <!-- Nivells verticals n=1..7 -->
      <g fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold">
        <text x="12" y="45">n=1</text>
        <text x="12" y="85">n=2</text>
        <text x="12" y="125">n=3</text>
        <text x="12" y="165">n=4</text>
        <text x="12" y="205">n=5</text>
        <text x="12" y="245">n=6</text>
        <text x="12" y="285">n=7</text>
      </g>

      <!-- Fletxes Diagonals d'Aufbau (creuant els orbitals fins a Z = 86) -->
      <!-- Diag 1: 1s -->
      <line x1="85" y1="25" x2="45" y2="65" class="m-arrow" />
      <!-- Diag 2: 2s -->
      <line x1="85" y1="65" x2="45" y2="105" class="m-arrow" />
      <!-- Diag 3: 2p -> 3s -->
      <line x1="155" y1="65" x2="45" y2="145" class="m-arrow" />
      <!-- Diag 4: 3p -> 4s -->
      <line x1="155" y1="105" x2="45" y2="185" class="m-arrow" />
      <!-- Diag 5: 3d -> 4p -> 5s -->
      <line x1="225" y1="105" x2="45" y2="225" class="m-arrow" />
      <!-- Diag 6: 4d -> 5p -> 6s (Z=56 Ba) -->
      <line x1="225" y1="145" x2="45" y2="265" class="m-arrow" />
      <!-- Diag 7: 4f -> 5d -> 6p (Z=86 Rn!) -> 7s -->
      <line x1="295" y1="145" x2="45" y2="305" class="m-arrow" stroke="#059669" stroke-width="2.5" />
      <!-- Diag 8: 5f -> 6d -> 7p -->
      <line x1="295" y1="185" x2="115" y2="305" class="m-arrow" opacity="0.4" />

      <!-- ORBITALS (CERCLES AMB IDENTIFICADOR) -->
      <!-- n=1 -->
      <circle cx="65" cy="45" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8" filter="url(#glowSub)"/>
      <text x="65" y="45" class="m-sub">1s</text>
      <text x="88" y="47" class="m-badge">[He]=2</text>

      <!-- n=2 -->
      <circle cx="65" cy="85" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="65" y="85" class="m-sub">2s</text>
      <circle cx="135" cy="85" r="15" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.8"/>
      <text x="135" y="85" class="m-sub">2p</text>
      <text x="158" y="87" class="m-badge">[Ne]=10</text>

      <!-- n=3 -->
      <circle cx="65" cy="125" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="65" y="125" class="m-sub">3s</text>
      <circle cx="135" cy="125" r="15" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.8"/>
      <text x="135" y="125" class="m-sub">3p</text>
      <text x="158" y="127" class="m-badge">[Ar]=18</text>
      <circle cx="205" cy="125" r="15" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="205" y="125" class="m-sub">3d</text>

      <!-- n=4 -->
      <circle cx="65" cy="165" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="65" y="165" class="m-sub">4s</text>
      <circle cx="135" cy="165" r="15" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.8"/>
      <text x="135" y="165" class="m-sub">4p</text>
      <text x="158" y="167" class="m-badge">[Kr]=36</text>
      <circle cx="205" cy="165" r="15" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="205" y="165" class="m-sub">4d</text>
      <circle cx="275" cy="165" r="15" fill="#ecfdf5" stroke="#059669" stroke-width="2.2"/>
      <text x="275" y="165" class="m-sub" fill="#047857">4f</text>

      <!-- n=5 -->
      <circle cx="65" cy="205" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="65" y="205" class="m-sub">5s</text>
      <circle cx="135" cy="205" r="15" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.8"/>
      <text x="135" y="205" class="m-sub">5p</text>
      <text x="158" y="207" class="m-badge">[Xe]=54</text>
      <circle cx="205" cy="205" r="15" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="205" y="205" class="m-sub">5d</text>
      <circle cx="275" cy="205" r="15" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="275" y="205" class="m-sub" fill="#64748b">5f</text>

      <!-- n=6 -->
      <circle cx="65" cy="245" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="65" y="245" class="m-sub">6s</text>
      <circle cx="135" cy="245" r="15" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" filter="url(#glowSub)"/>
      <text x="135" y="245" class="m-sub" fill="#15803d">6p</text>
      <text x="158" y="247" class="m-badge" fill="#15803d" font-weight="900">[Rn]=86 ⭐</text>
      <circle cx="205" cy="245" r="15" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="205" y="245" class="m-sub" fill="#64748b">6d</text>

      <!-- n=7 -->
      <circle cx="65" cy="285" r="15" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="65" y="285" class="m-sub" fill="#64748b">7s</text>
      <circle cx="135" cy="285" r="15" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="135" y="285" class="m-sub" fill="#64748b">7p</text>

      <!-- Peuet explicatiu -->
      <rect x="25" y="315" width="330" height="18" rx="6" fill="#e0f2fe" />
      <text x="190" y="327" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1">
        Ordre: 1s ➔ 2s ➔ 2p ➔ 3s ➔ 3p ➔ 4s ➔ 3d ➔ 4p ➔ 5s ➔ 4d ➔ 5p ➔ 6s ➔ 4f ➔ 5d ➔ 6p (fins a Z=86)
      </text>
    </svg>
  `,

  // --------------------------------------------------------------------------
  // IMATGES DEDICADES PER A CADA EXERCICI D'ORBITALS I TEORIES ATÒMIQUES
  // --------------------------------------------------------------------------
  // Exercici 1: Experiment de la làmina d'or
  exRutherfordGoldFoil: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Font de partícules alfa -->
      <rect x="15" y="60" width="35" height="30" rx="6" fill="#334155" />
      <text x="32" y="78" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">α</text>
      <!-- Feix de partícules alfa -->
      <line x1="50" y1="75" x2="135" y2="75" stroke="#38bdf8" stroke-width="3" />
      <!-- Làmina d'or fina -->
      <line x1="140" y1="20" x2="140" y2="130" stroke="#f59e0b" stroke-width="7" stroke-linecap="round" />
      <text x="140" y="15" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#d97706">Làmina d'or</text>
      <!-- Trajectòries de partícules -->
      <!-- La majoria rectes -->
      <line x1="140" y1="75" x2="245" y2="75" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="3 2" />
      <!-- Algunes desviades -->
      <line x1="140" y1="75" x2="235" y2="35" stroke="#ef4444" stroke-width="2" />
      <line x1="140" y1="75" x2="235" y2="115" stroke="#ef4444" stroke-width="2" />
      <!-- Poques reboten enrere! -->
      <line x1="140" y1="75" x2="70" y2="30" stroke="#dc2626" stroke-width="2.5" />
      <!-- Pantalla detectora circular -->
      <path d="M 230 20 A 110 110 0 0 1 230 130" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
      <text x="215" y="145" font-family="sans-serif" font-size="9" fill="#64748b">Pantalla detectora (ZnS)</text>
    </svg>
  `,

  // Exercici 2: Bohr i espectre d'emissió (salt d'electrons)
  exBohrQuantumJump: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Nivells plans d'energia E1, E2, E3 -->
      <line x1="40" y1="120" x2="240" y2="120" stroke="#64748b" stroke-width="2" />
      <text x="25" y="124" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">n=1</text>
      <line x1="40" y1="75" x2="240" y2="75" stroke="#64748b" stroke-width="2" />
      <text x="25" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">n=2</text>
      <line x1="40" y1="35" x2="240" y2="35" stroke="#64748b" stroke-width="2" />
      <text x="25" y="39" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">n=3</text>

      <!-- Fletxa de caiguda electró de n=3 a n=2 -->
      <path d="M 90 35 L 90 70" stroke="#8b5cf6" stroke-width="3" marker-end="url(#mArrBohr)" />
      <defs>
        <marker id="mArrBohr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 8 5 L 0 8 z" fill="#8b5cf6"/>
        </marker>
      </defs>
      <circle cx="90" cy="35" r="5" fill="#8b5cf6" />
      <!-- Fotó emès amb ona de color verd/cian -->
      <path d="M 95 72 Q 110 55 125 72 T 155 72 T 185 72" fill="none" stroke="#10b981" stroke-width="3" />
      <text x="135" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#059669">Emissió de Fotó (Llum)</text>
    </svg>
  `,

  // Exercici 3: Orbitals p en els 3 eixos (px, py, pz)
  exOrbitalsPXYZ: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Eix cartesià 3D -->
      <line x1="30" y1="75" x2="250" y2="75" stroke="#94a3b8" stroke-width="1.5" />
      <text x="255" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">X</text>
      <line x1="140" y1="10" x2="140" y2="140" stroke="#94a3b8" stroke-width="1.5" />
      <text x="140" y="9" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">Y</text>
      <line x1="80" y1="125" x2="200" y2="25" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2" />
      <text x="205" y="25" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">Z</text>
      <!-- px lòbuls horitzontals -->
      <ellipse cx="105" cy="75" rx="26" ry="14" fill="#8b5cf6" opacity="0.75" />
      <ellipse cx="175" cy="75" rx="26" ry="14" fill="#8b5cf6" opacity="0.75" />
      <!-- py lòbuls verticals -->
      <ellipse cx="140" cy="40" rx="14" ry="26" fill="#06b6d4" opacity="0.65" />
      <ellipse cx="140" cy="110" rx="14" ry="26" fill="#06b6d4" opacity="0.65" />
      <circle cx="140" cy="75" r="4" fill="#0f172a" />
      <text x="140" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">Tres orientacions espacials: px, py, pz</text>
    </svg>
  `,

  // Exercici 4: Configuració electrònica del Clor Z=17
  exChlorineConfig: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Caixes d'orbitals d'última capa 3s i 3p -->
      <!-- 3s -->
      <rect x="35" y="55" width="30" height="30" fill="#f8fafc" stroke="#0284c7" stroke-width="2" rx="3" />
      <text x="50" y="105" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#0369a1">3s²</text>
      <!-- espins 3s (up, down) -->
      <path d="M 44 75 L 44 63 M 41 67 L 44 63 L 47 67" stroke="#0284c7" stroke-width="2" />
      <path d="M 54 65 L 54 77 M 51 73 L 54 77 L 57 73" stroke="#0284c7" stroke-width="2" />

      <!-- 3p (3 caixes juntes) -->
      <g>
        <rect x="95" y="55" width="30" height="30" fill="#f8fafc" stroke="#9333ea" stroke-width="2" />
        <rect x="125" y="55" width="30" height="30" fill="#f8fafc" stroke="#9333ea" stroke-width="2" />
        <rect x="155" y="55" width="30" height="30" fill="#f8fafc" stroke="#9333ea" stroke-width="2" />
        <text x="140" y="105" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#7e22ce">3p⁵</text>
        <!-- espins 3p: caixa 1 (2 e-), caixa 2 (2 e-), caixa 3 (1 e-) -->
        <path d="M 104 75 L 104 63 M 101 67 L 104 63 L 107 67" stroke="#9333ea" stroke-width="2" />
        <path d="M 114 65 L 114 77 M 111 73 L 114 77 L 117 73" stroke="#9333ea" stroke-width="2" />

        <path d="M 134 75 L 134 63 M 131 67 L 134 63 L 137 67" stroke="#9333ea" stroke-width="2" />
        <path d="M 144 65 L 144 77 M 141 73 L 144 77 L 147 73" stroke="#9333ea" stroke-width="2" />

        <!-- L'últim electró desaparellat! -->
        <path d="M 166 75 L 166 63 M 163 67 L 166 63 L 169 67" stroke="#dc2626" stroke-width="2.5" />
      </g>

      <!-- Badge Clor -->
      <rect x="205" y="45" width="55" height="50" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
      <text x="232" y="65" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857">Z=17</text>
      <text x="232" y="85" text-anchor="middle" font-family="monospace" font-size="16" font-weight="black" fill="#047857">Cl</text>
      <text x="140" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">Total capa de valència: 2 + 5 = 7 electrons!</text>
    </svg>
  `,

  // Exercici 5: Model de Thomson púding i electró
  exThomsonElectron: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Tub de raigs catòdics amb desviació de partícules -->
      <rect x="30" y="45" width="180" height="60" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="2" />
      <rect x="40" y="55" width="12" height="40" fill="#3b82f6" />
      <text x="46" y="50" text-anchor="middle" font-family="monospace" font-size="9" fill="#1d4ed8">Càtode (-)</text>
      <rect x="70" y="55" width="12" height="40" fill="#ef4444" />
      <text x="76" y="50" text-anchor="middle" font-family="monospace" font-size="9" fill="#b91c1c">Ànode (+)</text>

      <!-- Plaques elèctriques deflectores -->
      <line x1="110" y1="35" x2="160" y2="35" stroke="#ef4444" stroke-width="4" />
      <text x="135" y="30" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#b91c1c">Placa (+)</text>
      <line x1="110" y1="115" x2="160" y2="115" stroke="#3b82f6" stroke-width="4" />
      <text x="135" y="127" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1d4ed8">Placa (-)</text>

      <!-- Raig d'electrons desviant-se cap a la placa positiva (+) -->
      <path d="M 85 75 Q 130 75 180 50" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="3 2" />
      <circle cx="180" cy="50" r="5" fill="#10b981" />
      <text x="235" y="55" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857">Electrons: càrrega (-)</text>
      <text x="140" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Descobriment de l'electró (J.J. Thomson, 1897)</text>
    </svg>
  `,

  // Exercici 6: Regla de Hund i caixes d'espins
  exHundRule: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- 3 caixes orbitals p -->
      <rect x="50" y="45" width="45" height="45" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
      <rect x="95" y="45" width="45" height="45" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
      <rect x="140" y="45" width="45" height="45" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
      <text x="72" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">px</text>
      <text x="117" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">py</text>
      <text x="162" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">pz</text>

      <!-- 3 electrons amb espins paral·lels (tots cap amunt segons Hund!) -->
      <path d="M 72 75 L 72 55 M 67 62 L 72 55 L 77 62" stroke="#0284c7" stroke-width="3" />
      <path d="M 117 75 L 117 55 M 112 62 L 117 55 L 122 62" stroke="#0284c7" stroke-width="3" />
      <path d="M 162 75 L 162 55 M 157 62 L 162 55 L 167 62" stroke="#0284c7" stroke-width="3" />

      <text x="140" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">
        Regla de Hund: Màxima multiplicitat (primer un a cada caixa!)
      </text>
    </svg>
  `,

  // --------------------------------------------------------------------------
  // IMATGES DEDICADES PER A L'APARTAT DE REFORÇ
  // --------------------------------------------------------------------------
  // Reforç 1: Balança de càrregues elèctriques
  refBalanceCharges: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Base de la balança -->
      <polygon points="140,40 130,120 150,120" fill="#475569" />
      <rect x="110" y="120" width="60" height="10" rx="3" fill="#334155" />
      <!-- Barra horitzontal en equilibri (càrrega neta = 0) -->
      <line x1="40" y1="45" x2="240" y2="45" stroke="#0284c7" stroke-width="4" stroke-linecap="round" />
      <circle cx="140" cy="45" r="6" fill="#0284c7" />

      <!-- Plat Esquerre: Ca2+ (+2) -->
      <line x1="60" y1="45" x2="60" y2="85" stroke="#94a3b8" stroke-width="1.5" />
      <rect x="35" y="85" width="50" height="35" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
      <text x="60" y="107" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="black" fill="#0369a1">Ca²⁺</text>

      <!-- Plat Dret: O2- (-2) -->
      <line x1="220" y1="45" x2="220" y2="85" stroke="#94a3b8" stroke-width="1.5" />
      <rect x="195" y="85" width="50" height="35" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
      <text x="220" y="107" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="black" fill="#047857">O²⁻</text>

      <text x="140" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="black" fill="#16a34a">
        (+2) + (-2) = 0 Càrrega Neutra!
      </text>
      <text x="140" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">
        Ca₂O₂ es simplifica a CaO
      </text>
    </svg>
  `,

  // Reforç 2: Comparativa FeCl2 vs FeCl3
  refIronChlorides: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Compost 1: FeCl2 -->
      <g>
        <rect x="15" y="25" width="115" height="95" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="55" cy="65" r="16" fill="#3b82f6" />
        <text x="55" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="black" fill="#ffffff">Fe²⁺</text>
        <circle cx="95" cy="50" r="11" fill="#10b981" />
        <text x="95" y="54" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">Cl⁻</text>
        <circle cx="95" cy="80" r="11" fill="#10b981" />
        <text x="95" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">Cl⁻</text>
        <text x="72" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a">FeCl₂: ferro(II)</text>
      </g>

      <!-- Compost 2: FeCl3 -->
      <g>
        <rect x="150" y="25" width="115" height="95" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="185" cy="65" r="16" fill="#8b5cf6" />
        <text x="185" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="black" fill="#ffffff">Fe³⁺</text>
        <circle cx="230" cy="45" r="10" fill="#10b981" />
        <text x="230" y="49" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">Cl⁻</text>
        <circle cx="230" cy="68" r="10" fill="#10b981" />
        <text x="230" y="72" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">Cl⁻</text>
        <circle cx="230" cy="91" r="10" fill="#10b981" />
        <text x="230" y="95" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">Cl⁻</text>
        <text x="207" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#581c87">FeCl₃: ferro(III)</text>
      </g>
      <text x="140" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">El nombre de clors indica la valència del metall</text>
    </svg>
  `,

  // Reforç 3: Alerta "No posis nombres romans a valència única"
  refNoRomanWarning: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Triangle d'alerta -->
      <polygon points="140,20 80,120 200,120" fill="#fef2f2" stroke="#ef4444" stroke-width="3" stroke-linejoin="round" />
      <text x="140" y="95" text-anchor="middle" font-family="sans-serif" font-size="42" font-weight="black" fill="#dc2626">!</text>
      <!-- Comparació -->
      <rect x="25" y="40" width="85" height="50" rx="8" fill="#fee2e2" stroke="#b91c1c" stroke-width="1.5" />
      <text x="67" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b">INCORRECTE</text>
      <text x="67" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" text-decoration="line-through" fill="#b91c1c">Òxid de sodi(I)</text>

      <rect x="170" y="40" width="85" height="50" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5" />
      <text x="212" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#166534">CORRECTE</text>
      <text x="212" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="black" fill="#15803d">Òxid de sodi</text>
      <text x="140" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">Si només té UNA valència, MAI s'hi posa nombre romà!</text>
    </svg>
  `,

  // Reforç 4: Càlcul de valència de Pb a PbO2
  refLeadOxidePuzzle: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Fòrmula PbO2 -->
      <rect x="30" y="30" width="75" height="50" rx="10" fill="#f8fafc" stroke="#334155" stroke-width="2" />
      <text x="67" y="62" text-anchor="middle" font-family="monospace" font-size="22" font-weight="black" fill="#0f172a">PbO₂</text>

      <!-- Fletxa de raonament -->
      <path d="M 115 55 L 145 55" stroke="#0284c7" stroke-width="3" marker-end="url(#mArrBohr)" />

      <!-- Càlcul de càrregues -->
      <rect x="155" y="25" width="105" height="60" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5" />
      <text x="207" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0369a1">2 àtoms d'Oxigen (O²⁻):</text>
      <text x="207" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">2 × (-2) = -4</text>
      <text x="207" y="76" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">Pb ha de ser +4!</text>
      <text x="140" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">Òxid de plom(IV) • Diòxid de plom</text>
      <text x="140" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">(Prové de Pb₂O₄ simplificat per 2)</text>
    </svg>
  `,

  // --------------------------------------------------------------------------
  // IMATGES DEDICADES PER A L'APARTAT D'AMPLIACIÓ (PONT A 4t ESO)
  // --------------------------------------------------------------------------
  // Ampliació 1: L'ió hidròxid (OH)-
  ampHydroxideIon: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Catió Mg2+ -->
      <circle cx="70" cy="75" r="22" fill="#0284c7" />
      <text x="70" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="black" fill="#ffffff">Mg²⁺</text>

      <text x="110" y="80" font-family="sans-serif" font-size="20" font-weight="bold" fill="#64748b">+</text>

      <!-- Dos grups OH- -->
      <g>
        <!-- Grup 1 OH- -->
        <rect x="135" y="40" width="55" height="30" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
        <text x="162" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">(OH)⁻</text>
        <!-- Grup 2 OH- -->
        <rect x="135" y="80" width="55" height="30" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
        <text x="162" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">(OH)⁻</text>
      </g>

      <path d="M 200 75 L 220 75" stroke="#64748b" stroke-width="2" marker-end="url(#mArrBohr)" />
      <!-- Fórmula Mg(OH)2 -->
      <text x="245" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="black" fill="#0f172a">Mg(OH)₂</text>
      <text x="140" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d">Dihidròxid de magnesi • Hidròxid de magnesi</text>
    </svg>
  `,

  // Ampliació 2: Peròxid d'hidrogen H2O2 (aigua oxigenada)
  ampPeroxideBond: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Pont peroxo -O-O- -->
      <circle cx="115" cy="70" r="18" fill="#ef4444" />
      <text x="115" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">O</text>
      <line x1="133" y1="70" x2="147" y2="70" stroke="#b91c1c" stroke-width="4" />
      <circle cx="165" cy="70" r="18" fill="#ef4444" />
      <text x="165" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">O</text>

      <!-- Hidrogens enllaçats -->
      <line x1="102" y1="82" x2="82" y2="98" stroke="#64748b" stroke-width="3" />
      <circle cx="75" cy="105" r="12" fill="#0284c7" />
      <text x="75" y="109" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">H</text>

      <line x1="178" y1="58" x2="198" y2="42" stroke="#64748b" stroke-width="3" />
      <circle cx="205" cy="35" r="12" fill="#0284c7" />
      <text x="205" y="39" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">H</text>

      <text x="140" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="black" fill="#dc2626">Enllaç peroxo -O-O- (valència O = -1)</text>
      <text x="140" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">H₂O₂ (Peròxid d'hidrogen / Aigua oxigenada)</text>
    </svg>
  `,

  // Ampliació 3: Àcid sulfúric H2SO4
  ampSulfuricAcid: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Àtom central de Sofre (S) -->
      <circle cx="140" cy="70" r="18" fill="#f59e0b" />
      <text x="140" y="75" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="black" fill="#ffffff">S</text>
      <!-- 4 Oxígens al voltant -->
      <circle cx="140" cy="25" r="14" fill="#ef4444" />
      <text x="140" y="29" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">O</text>
      <line x1="140" y1="52" x2="140" y2="39" stroke="#b91c1c" stroke-width="3" />

      <circle cx="140" cy="115" r="14" fill="#ef4444" />
      <text x="140" y="119" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">O</text>
      <line x1="140" y1="88" x2="140" y2="101" stroke="#b91c1c" stroke-width="3" />

      <circle cx="95" cy="70" r="14" fill="#ef4444" />
      <text x="95" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">O</text>
      <line x1="122" y1="70" x2="109" y2="70" stroke="#b91c1c" stroke-width="3" />

      <circle cx="185" cy="70" r="14" fill="#ef4444" />
      <text x="185" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">O</text>
      <line x1="158" y1="70" x2="171" y2="70" stroke="#b91c1c" stroke-width="3" />

      <!-- 2 Hidrogens enllaçats als oxígens laterals -->
      <circle cx="55" cy="70" r="10" fill="#0284c7" />
      <text x="55" y="73" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">H</text>
      <line x1="81" y1="70" x2="65" y2="70" stroke="#64748b" stroke-width="2" />

      <circle cx="225" cy="70" r="10" fill="#0284c7" />
      <text x="225" y="73" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">H</text>
      <line x1="199" y1="70" x2="215" y2="70" stroke="#64748b" stroke-width="2" />

      <text x="140" y="142" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">H₂SO₄ (Àcid sulfúric - Estat d'oxidació S = +6)</text>
    </svg>
  `,

  // Ampliació 4: Cristalls de CaCO3 (Carbonat de calci)
  ampCalciumCarbonate: `
    <svg viewBox="0 0 280 150" class="w-full h-auto max-h-40 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Xarxa cristal·lina iònica de CaCO3 -->
      <g stroke="#94a3b8" stroke-width="1.5">
        <line x1="80" y1="50" x2="150" y2="50" />
        <line x1="150" y1="50" x2="200" y2="50" />
        <line x1="80" y1="95" x2="150" y2="95" />
        <line x1="150" y1="95" x2="200" y2="95" />
        <line x1="80" y1="50" x2="80" y2="95" />
        <line x1="150" y1="50" x2="150" y2="95" />
        <line x1="200" y1="50" x2="200" y2="95" />
      </g>
      <!-- Ions Ca2+ -->
      <circle cx="80" cy="50" r="13" fill="#0284c7" />
      <text x="80" y="54" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">Ca²⁺</text>
      <circle cx="200" cy="50" r="13" fill="#0284c7" />
      <text x="200" y="54" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">Ca²⁺</text>
      <circle cx="150" cy="95" r="13" fill="#0284c7" />
      <text x="150" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">Ca²⁺</text>

      <!-- Ions CO3 2- -->
      <circle cx="150" cy="50" r="15" fill="#10b981" />
      <text x="150" y="54" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">CO₃²⁻</text>
      <circle cx="80" cy="95" r="15" fill="#10b981" />
      <text x="80" y="99" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">CO₃²⁻</text>
      <circle cx="200" cy="95" r="15" fill="#10b981" />
      <text x="200" y="99" text-anchor="middle" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">CO₃²⁻</text>

      <text x="140" y="25" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1">Oxisals: Catió metàl·lic + Anió oxoanió</text>
      <text x="140" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">CaCO₃: Carbonat de calci (pedra calcària i closques)</text>
    </svg>
  `,

  // --------------------------------------------------------------------------
  // IMATGES DEDICADES PER ALS EXERCICIS DE CONFIGURACIÓ ELECTRÒNICA (FINS A Z = 86)
  // AMB DIAGRAMA DE MOELLER INTEGRAT
  // --------------------------------------------------------------------------
  // Exercici Moeller 1: Brom (Z = 35)
  exMoellerBromine: `
    <svg viewBox="0 0 320 180" class="w-full h-auto max-h-44 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Panell esquerre: Element i valència -->
      <g>
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
        <text x="50" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="#dc2626">Z = 35</text>
        <text x="50" y="58" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="900" fill="#991b1b">Br</text>
        <text x="50" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#7f1d1d">Brom</text>
      </g>
      <!-- Mini Diagrama de Moeller amb el camí del Brom ressaltat -->
      <g transform="translate(100, 15)">
        <rect width="205" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="102" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1">Cami de Moeller fins a Z=35</text>
        <!-- Fletxa de Moeller activa -->
        <path d="M 25 35 L 55 55 L 45 75 L 85 95 L 65 115" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="3 2"/>
        <!-- Orbitals completats -->
        <g font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold" text-anchor="middle">
          <circle cx="25" cy="35" r="11" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/><text x="25" y="39" fill="#991b1b">1s²</text>
          <circle cx="25" cy="65" r="11" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/><text x="25" y="69" fill="#991b1b">2s²</text>
          <circle cx="65" cy="65" r="11" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/><text x="65" y="69" fill="#991b1b">2p⁶</text>
          <circle cx="25" cy="95" r="11" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/><text x="25" y="99" fill="#991b1b">3s²</text>
          <circle cx="65" cy="95" r="11" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/><text x="65" y="99" fill="#991b1b">3p⁶</text>
          <circle cx="25" cy="125" r="11" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/><text x="25" y="129" fill="#991b1b">4s²</text>
          <circle cx="105" cy="95" r="11" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/><text x="105" y="99" fill="#991b1b">3d¹⁰</text>
          <!-- Orbital final 4p5 -->
          <circle cx="65" cy="125" r="13" fill="#dc2626" stroke="#991b1b" stroke-width="2.5"/><text x="65" y="129" fill="#ffffff" font-weight="900">4p⁵</text>
        </g>
        <text x="102" y="145" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold" fill="#047857">[Ar] 4s² 3d¹⁰ 4p⁵ (7 e⁻ de valència)</text>
      </g>
      <!-- Nota d'ajuda -->
      <text x="50" y="120" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#64748b">Últim nivell: n=4</text>
      <text x="50" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0284c7">4s² + 4p⁵ = 7</text>
    </svg>
  `,

  // Exercici Moeller 2: Plata (Z = 47)
  exMoellerSilver: `
    <svg viewBox="0 0 320 180" class="w-full h-auto max-h-44 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <g>
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <text x="50" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="#0369a1">Z = 47</text>
        <text x="50" y="58" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="900" fill="#075985">Ag</text>
        <text x="50" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0c4a6e">Plata</text>
      </g>
      <g transform="translate(100, 15)">
        <rect width="205" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="102" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1">Diagrama Moeller: arribant a 4d</text>
        <!-- Bloc noble Kr (36) -->
        <rect x="15" y="30" width="175" height="25" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
        <text x="102" y="46" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold" fill="#475569">[Kr 36] = 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶</text>
        <!-- Següents orbitals segons Moeller -->
        <g font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold" text-anchor="middle">
          <!-- 5s -->
          <circle cx="55" cy="85" r="16" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <text x="55" y="89" fill="#0369a1">5s¹</text>
          <!-- Fletxa Aufbau diagonal cap a 4d -->
          <path d="M 75 85 L 115 85" fill="none" stroke="#0284c7" stroke-width="2" marker-end="url(#mArr86)"/>
          <!-- 4d9 / 4d10 -->
          <circle cx="145" cy="85" r="18" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
          <text x="145" y="89" fill="#92400e">4d¹⁰</text>
        </g>
        <text x="102" y="125" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#64748b">Anomalia d'estabilitat: subnivell d complet</text>
        <text x="102" y="142" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="black" fill="#0284c7">Configuració: [Kr] 5s¹ 4d¹⁰</text>
      </g>
      <text x="50" y="120" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#64748b">Bloc d</text>
      <text x="50" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#d97706">Metall transició</text>
    </svg>
  `,

  // Exercici Moeller 3: Bari (Z = 56)
  exMoellerBarium: `
    <svg viewBox="0 0 320 180" class="w-full h-auto max-h-44 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <g>
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
        <text x="50" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="#c2410c">Z = 56</text>
        <text x="50" y="58" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="900" fill="#9a3412">Ba</text>
        <text x="50" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#7c2d12">Bari</text>
      </g>
      <g transform="translate(100, 15)">
        <rect width="205" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="102" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1">Pas clau de Moeller: després de 5p ve 6s!</text>
        <g font-family="'JetBrains Mono', monospace" font-size="9" text-anchor="middle">
          <!-- Xenó 54 -->
          <rect x="20" y="30" width="165" height="24" rx="6" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
          <text x="102" y="46" font-weight="bold" fill="#6b21a8">[Xe 54] = ... 5s² 4d¹⁰ 5p⁶</text>
          <!-- Diagonal cap a 6s -->
          <path d="M 102 56 L 102 78" stroke="#ea580c" stroke-width="2" marker-end="url(#mArr86)"/>
          <circle cx="102" cy="100" r="18" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/>
          <text x="102" y="104" font-size="12" font-weight="900" fill="#c2410c">6s²</text>
        </g>
        <text x="102" y="132" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#15803d">Total: 54 + 2 = 56 electrons</text>
        <text x="102" y="145" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#475569">Alcalinoterri: valència +2 (Ba²⁺)</text>
      </g>
      <text x="50" y="120" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#64748b">Grup 2</text>
      <text x="50" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ea580c">2 e⁻ valència</text>
    </svg>
  `,

  // Exercici Moeller 4: Or (Z = 79)
  exMoellerGold: `
    <svg viewBox="0 0 320 180" class="w-full h-auto max-h-44 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <g>
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <text x="50" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="#a16207">Z = 79</text>
        <text x="50" y="58" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="900" fill="#854d0e">Au</text>
        <text x="50" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#713f12">Or</text>
      </g>
      <g transform="translate(100, 15)">
        <rect width="205" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="102" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1">Apareix el subnivell 4f (14 electrons!)</text>
        <!-- Esquema de blocs de Moeller -->
        <g font-family="'JetBrains Mono', monospace" font-size="9" text-anchor="middle">
          <rect x="15" y="28" width="55" height="22" rx="4" fill="#f3e8ff" stroke="#9333ea"/><text x="42" y="42" fill="#7e22ce">[Xe 54]</text>
          <path d="M 72 39 L 88 39" stroke="#64748b" stroke-width="1.5"/>
          <rect x="90" y="28" width="45" height="22" rx="4" fill="#e0f2fe" stroke="#0284c7"/><text x="112" y="42" fill="#0369a1">6s¹</text>
          <path d="M 137 39 L 153 39" stroke="#64748b" stroke-width="1.5"/>
          <!-- 4f14 -->
          <rect x="25" y="62" width="65" height="25" rx="5" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><text x="57" y="78" font-weight="bold" fill="#047857">4f¹⁴ (70)</text>
          <path d="M 92 74 L 110 74" stroke="#059669" stroke-width="2" marker-end="url(#mArr86)"/>
          <!-- 5d10 -->
          <rect x="115" y="62" width="65" height="25" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/><text x="147" y="78" font-weight="black" fill="#b45309">5d¹⁰ (79)</text>
        </g>
        <text x="102" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Suma: 54 + 1 + 14 + 10 = 79 electrons</text>
        <text x="102" y="130" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="bold" fill="#a16207">[Xe] 6s¹ 4f¹⁴ 5d¹⁰</text>
        <text x="102" y="144" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#64748b">El nivell 4f s'omple completament</text>
      </g>
      <text x="50" y="120" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#64748b">Període 6</text>
      <text x="50" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ca8a04">Metall noble</text>
    </svg>
  `,

  // Exercici Moeller 5: Plom (Z = 82)
  exMoellerLead: `
    <svg viewBox="0 0 320 180" class="w-full h-auto max-h-44 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <g>
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
        <text x="50" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="#334155">Z = 82</text>
        <text x="50" y="58" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="900" fill="#1e293b">Pb</text>
        <text x="50" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0f172a">Plom</text>
      </g>
      <g transform="translate(100, 15)">
        <rect width="205" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="102" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1">Quins són els electrons de valència?</text>
        <g font-family="'JetBrains Mono', monospace" font-size="9" text-anchor="middle">
          <!-- Core [Xe] 4f14 5d10 (80) -->
          <rect x="15" y="28" width="175" height="22" rx="4" fill="#f8fafc" stroke="#94a3b8"/><text x="102" y="42" fill="#64748b">[Xe] 4f¹⁴ 5d¹⁰ = 80 electrons interns</text>
          <!-- Electrons de l'últim nivell (n=6) -->
          <rect x="35" y="60" width="60" height="30" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <text x="65" y="78" font-size="11" font-weight="900" fill="#0369a1">6s²</text>
          <text x="105" y="78" font-size="14" font-weight="bold" fill="#475569">+</text>
          <rect x="115" y="60" width="60" height="30" rx="6" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
          <text x="145" y="78" font-size="11" font-weight="900" fill="#7e22ce">6p²</text>
        </g>
        <text x="102" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">Capa de valència (n=6): 2 + 2 = 4 e⁻</text>
        <text x="102" y="128" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">Per això el plom té valències +2 i +4!</text>
        <text x="102" y="143" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0284c7">Exemples: PbO (II) i PbO₂ (IV)</text>
      </g>
      <text x="50" y="120" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#64748b">Grup 14</text>
      <text x="50" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#334155">Valències 2, 4</text>
    </svg>
  `,

  // Exercici Moeller 6: Radó (Z = 86)
  exMoellerRadon: `
    <svg viewBox="0 0 320 180" class="w-full h-auto max-h-44 mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <g>
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="50" y="32" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="#059669">Z = 86</text>
        <text x="50" y="58" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="900" fill="#047857">Rn</text>
        <text x="50" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#065f46">Radó</text>
      </g>
      <g transform="translate(100, 15)">
        <rect width="205" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="102" y="16" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#059669">Completant la 7a diagonal de Moeller!</text>
        <g font-family="'JetBrains Mono', monospace" font-size="9" text-anchor="middle">
          <text x="102" y="36" fill="#475569">4f¹⁴ (70) ➔ 5d¹⁰ (80) ➔ 6p⁶ (86)</text>
          <!-- Caixa brillant octet 6s2 6p6 -->
          <rect x="25" y="48" width="155" height="35" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
          <text x="102" y="65" font-size="11" font-weight="900" fill="#065f46">6s² 6p⁶ = Octet Noble!</text>
          <text x="102" y="78" font-size="9" font-weight="bold" fill="#047857">8 electrons capa externa</text>
        </g>
        <text x="102" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0369a1">Configuració completa de Z = 86:</text>
        <text x="102" y="122" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="bold" fill="#1e293b">[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶</text>
        <text x="102" y="142" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#059669">Últim gas noble del període 6! 🏆</text>
      </g>
      <text x="50" y="120" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#64748b">Grup 18</text>
      <text x="50" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#059669">Gas noble</text>
    </svg>
  `,

  // Icones de llicències Creative Commons
  ccBadge: `
    <svg viewBox="0 0 120 42" class="h-8 w-auto inline-block" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="42" rx="6" fill="#1e293b"/>
      <!-- Símbol CC -->
      <circle cx="20" cy="21" r="11" fill="none" stroke="#ffffff" stroke-width="2"/>
      <text x="20" y="26" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">CC</text>
      <!-- Símbol BY (persona) -->
      <circle cx="46" cy="21" r="11" fill="none" stroke="#ffffff" stroke-width="2"/>
      <circle cx="46" cy="17" r="3" fill="#ffffff"/>
      <path d="M 40 28 C 40 24, 52 24, 52 28" fill="#ffffff"/>
      <!-- Símbol NC (moneda ratllada) -->
      <circle cx="72" cy="21" r="11" fill="none" stroke="#ffffff" stroke-width="2"/>
      <text x="72" y="25" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">$</text>
      <line x1="65" y1="14" x2="79" y2="28" stroke="#ffffff" stroke-width="2"/>
      <!-- Símbol SA (fletxa giratòria) -->
      <circle cx="98" cy="21" r="11" fill="none" stroke="#ffffff" stroke-width="2"/>
      <path d="M 94 20 A 4 4 0 1 1 101 23" fill="none" stroke="#ffffff" stroke-width="2"/>
      <polygon points="101,23 99,20 103,19" fill="#ffffff"/>
    </svg>
  `
};
