// ==========================================================================
// Banc Oficial de 50 Activitats de Configuració Electrònica amb Diagrama de Moeller
// Currículum de Física i Química 3r d'ESO / LOMLOE (Generalitat de Catalunya)
// Elements de Z = 1 (Hidrogen) fins a Z = 86 (Radó)
// ==========================================================================

const MOELLER_50_EXERCISES = [
  // ------------------------------------------------------------------------
  // BLOC 1: Períodes 1 i 2 (Z = 1 a 10) - Fonaments dels subnivells s i p
  // ------------------------------------------------------------------------
  {
    id: 1,
    z: 1,
    symbol: 'H',
    name: 'Hidrogen',
    category: 'basic',
    period: 1,
    group: 1,
    activeSub: '1s',
    title: 'Act. 1: L\'inici de tot - L\'orbital 1s de l\'Hidrogen (Z = 1)',
    question: 'L\'àtom d\'hidrogen té Z = 1. Segons la primera fletxa diagonal del diagrama de Moeller, quina és la seva configuració electrònica?',
    options: [
      '1s¹ (1 sol electró a l\'orbital esfèric 1s)',
      '1s² (orbital complet)',
      '2s¹ (salta al segon nivell)',
      '1p¹ (l\'orbital p del primer nivell)'
    ],
    correctIndex: 0,
    explanation: 'El primer nivell quàntic (n=1) només té un subnivell possible: el subnivell s. Per tant, l\'únic electró de l\'hidrogen s\'allotja a l\'orbital 1s formant 1s¹.'
  },
  {
    id: 2,
    z: 2,
    symbol: 'He',
    name: 'Heli',
    category: 'basic',
    period: 1,
    group: 18,
    activeSub: '1s',
    title: 'Act. 2: El duet tancat de l\'Heli (Z = 2)',
    question: 'L\'Heli té Z = 2. Quants electrons caben com a màxim en l\'orbital 1s segons el principi d\'exclusió de Pauli?',
    options: [
      'Exactament 2 electrons amb espins oposats (1s²)',
      'Fins a 6 electrons com a qualsevol subnivell',
      '4 electrons (dues parelles)',
      '1 sol electró per orbital'
    ],
    correctIndex: 0,
    explanation: 'Qualsevol orbital s només admet com a màxim 2 electrons (amb espins contraris ↑↓). Amb 1s², l\'heli completa el primer nivell quàntic i és un gas noble d\'estabilitat màxima!'
  },
  {
    id: 3,
    z: 3,
    symbol: 'Li',
    name: 'Liti',
    category: 'basic',
    period: 2,
    group: 1,
    activeSub: '2s',
    title: 'Act. 3: Salt al nivell n = 2 - El Liti (Z = 3)',
    question: 'Un cop omplert l\'orbital 1s², cap a quin orbital apunta la segona fletxa diagonal de Moeller per al Liti (Z = 3)?',
    options: [
      '1s² 2s¹ (comença a omplir-se el nivell n = 2)',
      '1s² 2p¹ (directament als orbitals p)',
      '1s³ (els 3 electrons es queden al nivell 1)',
      '2p³ (tres electrons a p)'
    ],
    correctIndex: 0,
    explanation: 'Com que l\'orbital 1s ja està saturat amb 2 electrons, el tercer electró ha de passar al següent orbital de menor energia segons Moeller: el 2s, donant 1s² 2s¹.'
  },
  {
    id: 4,
    z: 4,
    symbol: 'Be',
    name: 'Beril·li',
    category: 'basic',
    period: 2,
    group: 2,
    activeSub: '2s',
    title: 'Act. 4: El Beril·li (Z = 4) i el subnivell 2s complet',
    question: 'Quina és la configuració de la capa de valència del Beril·li (Z = 4) i a quin grup de la taula periòdica pertany?',
    options: [
      '2s² (Grup 2: metalls alcalinoterris)',
      '2s¹ 2p¹ (Grup 13)',
      '1s⁴ (Grup 4)',
      '2p² (Grup 14)'
    ],
    correctIndex: 0,
    explanation: 'El beril·li té 4 electrons: 1s² 2s². La seva capa de valència és n=2 amb 2 electrons (2s²). Per això té valència +2 i pertany al grup 2 (alcalinoterris).'
  },
  {
    id: 5,
    z: 6,
    symbol: 'C',
    name: 'Carboni',
    category: 'basic',
    period: 2,
    group: 14,
    activeSub: '2p',
    title: 'Act. 5: El Carboni (Z = 6) i la Regla de Hund',
    question: 'El carboni té Z = 6 (1s² 2s² 2p²). Com es distribueixen els 2 electrons en els 3 orbitals 2p (px, py, pz) segons la regla de Hund?',
    options: [
      'Un electró a px i un altre a py amb espins paral·lels (↑)(↑)( )',
      'Tots dos aparellats al mateix orbital px (↑↓)( )( )',
      'Un a px i l\'altre torna al 2s',
      'Els electrons es fusionen al centre de l\'àtom'
    ],
    correctIndex: 0,
    explanation: 'Segons la regla de màxima multiplicitat de Hund, els electrons entren primer desaparellats en orbitals diferents amb espins paral·lels per minimitzar la repulsió elèctrica.'
  },
  {
    id: 6,
    z: 7,
    symbol: 'N',
    name: 'Nitrogen',
    category: 'basic',
    period: 2,
    group: 15,
    activeSub: '2p',
    title: 'Act. 6: Semiplenitud del Nitrogen (Z = 7)',
    question: 'Quina propietat fa especial la configuració del Nitrogen (Z = 7: 1s² 2s² 2p³)?',
    options: [
      'Té els tres orbitals 2p exactament semiplens (px¹ py¹ pz¹), fet que aporta estabilitat extra',
      'Té l\'octet complet de 8 electrons',
      'És un metall alcalí que perd 3 electrons fàcilment',
      'Té electrons als orbitals d'
    ],
    correctIndex: 0,
    explanation: 'Els tres orbitals 2p tenen un sol electró cadascun (semiplens). Les configuracions amb subnivells semiplens (p³, d⁵, f⁷) presenten una simetria de càrrega especialment estable.'
  },
  {
    id: 7,
    z: 8,
    symbol: 'O',
    name: 'Oxigen',
    category: 'basic',
    period: 2,
    group: 16,
    activeSub: '2p',
    title: 'Act. 7: L\'Oxigen (Z = 8) i la valència -2 en els òxids',
    question: 'L\'oxigen té configuració 1s² 2s² 2p⁴. Quants electrons li falten per aconseguir l\'octet noble del neó i quina valència tindrà en formar òxids?',
    options: [
      'Li falten 2 electrons per arribar a 2p⁶, per tant actua amb valència -2 com a ió òxid (O²⁻)',
      'Li falta 1 electró i actua amb valència -1',
      'Li sobren 4 electrons i actua amb valència +4',
      'Ja té l\'octet complet i no reacciona mai'
    ],
    correctIndex: 0,
    explanation: 'Té 6 electrons a la capa externa (2s² 2p⁴). Guanyant 2 electrons assoleix la configuració del neó (2p⁶), esdevenint l\'anió òxid (O²⁻). Això explica tota la formulació dels òxids!'
  },
  {
    id: 8,
    z: 9,
    symbol: 'F',
    name: 'Fluor',
    category: 'basic',
    period: 2,
    group: 17,
    activeSub: '2p',
    title: 'Act. 8: L\'avidesa electrònica del Fluor (Z = 9)',
    question: 'El Fluor té Z = 9 (1s² 2s² 2p⁵). Quants electrons de valència té a la seva capa n = 2?',
    options: [
      '7 electrons de valència (2 en 2s i 5 en 2p)',
      '5 electrons de valència (només els de 2p)',
      '9 electrons a la mateixa capa',
      '1 electró de valència'
    ],
    correctIndex: 0,
    explanation: 'La capa de valència és tot el nivell n = 2: 2s² + 2p⁵ = 7 electrons. Com que només li cal 1 electró per completar l\'octet, és l\'element més electronegatiu i sempre actua amb valència -1.'
  },
  {
    id: 9,
    z: 10,
    symbol: 'Ne',
    name: 'Neó',
    category: 'basic',
    period: 2,
    group: 18,
    activeSub: '2p',
    title: 'Act. 9: El Neó (Z = 10) i el tancament del Període 2',
    question: 'La configuració del Neó és 1s² 2s² 2p⁶. Per què s\'utilitza sovint la notació [Ne] en elements posteriors?',
    options: [
      'Perquè representa un bloc intern tancat i molt estable de 10 electrons que es manté inalterat',
      'Perquè el neó és l\'únic gas de l\'univers amb 10 neutrons',
      'Perquè evita haver d\'escriure nombres romans a la formulació',
      'Perquè el neó és radioactiu'
    ],
    correctIndex: 0,
    explanation: 'Els gasos nobles tenen capes completes molt estables que no participen en els enllaços. La notació [Ne] resumeix de manera neta i compacta els primers 10 electrons (1s² 2s² 2p⁶).'
  },

  // ------------------------------------------------------------------------
  // BLOC 2: Període 3 (Z = 11 a 18) - Formant la base de la química inorgànica
  // ------------------------------------------------------------------------
  {
    id: 10,
    z: 11,
    symbol: 'Na',
    name: 'Sodi',
    category: 'basic',
    period: 3,
    group: 1,
    activeSub: '3s',
    title: 'Act. 10: El Sodi (Z = 11) i la notació abreujada [Ne] 3s¹',
    question: 'Seguint el diagrama de Moeller, després de completar el 2p⁶ del neó, a quin orbital va l\'onzè electró del Sodi?',
    options: [
      'A l\'orbital 3s, formant [Ne] 3s¹ (valència +1)',
      'A l\'orbital 3p, formant [Ne] 3p¹',
      'A l\'orbital 3d, formant [Ne] 3d¹',
      'Torna a entrar al 2p formant 2p⁷'
    ],
    correctIndex: 0,
    explanation: 'La 3a fletxa diagonal de Moeller baixa de 2p directament a 3s. Per tant, el sodi té configuració [Ne] 3s¹. En perdre aquest únic electró 3s forma fàcilment el catió Na⁺.'
  },
  {
    id: 11,
    z: 12,
    symbol: 'Mg',
    name: 'Magnesi',
    category: 'basic',
    period: 3,
    group: 2,
    activeSub: '3s',
    title: 'Act. 11: El Magnesi (Z = 12) i el catió Mg²⁺',
    question: 'Quina és la configuració electrònica del catió Magnesi (Mg²⁺) un cop ha cedit els seus dos electrons de valència?',
    options: [
      '1s² 2s² 2p⁶ (idèntica a la del gas noble Neó)',
      '1s² 2s² 2p⁶ 3s²',
      '1s² 2s² 2p⁴',
      '[Ne] 3s²'
    ],
    correctIndex: 0,
    explanation: 'L\'àtom neutre té [Ne] 3s² (12 e⁻). En formar el catió Mg²⁺ perd els 2 electrons de la capa 3s, quedant amb 10 electrons i l\'estructura d\'octet estable del gas noble Neó!'
  },
  {
    id: 12,
    z: 13,
    symbol: 'Al',
    name: 'Alumini',
    category: 'basic',
    period: 3,
    group: 13,
    activeSub: '3p',
    title: 'Act. 12: L\'Alumini (Z = 13) i el subnivell 3p',
    question: 'A la fletxa de Moeller que creua 3s i 3p, quina configuració té l\'Alumini (Z = 13)?',
    options: [
      '1s² 2s² 2p⁶ 3s² 3p¹ ([Ne] 3s² 3p¹)',
      '1s² 2s² 2p⁶ 3s³',
      '[Ne] 3p³',
      '1s² 2s² 2p⁶ 3d³'
    ],
    correctIndex: 0,
    explanation: 'L\'orbital 3s només admet 2 electrons (3s²). El tretzè electró ha d\'entrar al subnivell següent segons Moeller: el 3p, donant [Ne] 3s² 3p¹ (3 electrons de valència, valència +3).'
  },
  {
    id: 13,
    z: 14,
    symbol: 'Si',
    name: 'Silici',
    category: 'basic',
    period: 3,
    group: 14,
    activeSub: '3p',
    title: 'Act. 13: El Silici (Z = 14) i el cor dels semiconductors',
    question: 'El Silici (Z = 14) té configuració [Ne] 3s² 3p². Quants electrons té a la seva capa de valència?',
    options: [
      '4 electrons de valència (2 en 3s i 2 en 3p)',
      '2 electrons de valència',
      '14 electrons de valència',
      '8 electrons de valència'
    ],
    correctIndex: 0,
    explanation: 'Els electrons de valència són tots els de l\'últim nivell (n = 3): 3s² + 3p² = 4 electrons. Igual que el carboni, forma 4 enllaços covalents característics.'
  },
  {
    id: 14,
    z: 15,
    symbol: 'P',
    name: 'Fòsfor',
    category: 'basic',
    period: 3,
    group: 15,
    activeSub: '3p',
    title: 'Act. 14: El Fòsfor (Z = 15) i els seus 5 electrons de valència',
    question: 'Segons el diagrama de Moeller, quina és la configuració del Fòsfor (Z = 15)?',
    options: [
      '[Ne] 3s² 3p³ (1s² 2s² 2p⁶ 3s² 3p³)',
      '[Ne] 3s¹ 3p⁴',
      '[Ar] 3s²',
      '1s² 2s² 2p⁶ 3d⁵'
    ],
    correctIndex: 0,
    explanation: 'Després de 3s² (12 e⁻), els 3 electrons restants entren al subnivell 3p (3p³). Té 5 electrons de valència, per la qual cosa en la formulació pot actuar amb valències -3, +3 i +5.'
  },
  {
    id: 15,
    z: 16,
    symbol: 'S',
    name: 'Sofre',
    category: 'basic',
    period: 3,
    group: 16,
    activeSub: '3p',
    title: 'Act. 15: El Sofre (Z = 16) i la formació de l\'anió Sulfur (S²⁻)',
    question: 'La configuració del Sofre és [Ne] 3s² 3p⁴. Quants electrons guanya per convertir-se en l\'anió sulfur present a sals com el FeS o Na₂S?',
    options: [
      'Guanya 2 electrons per completar el 3p⁶ (octet noble de l\'Argó)',
      'Guanya 4 electrons per fer 3p⁸',
      'Cedeix 6 electrons immediatament',
      'No guanya ni perd electrons'
    ],
    correctIndex: 0,
    explanation: 'Té 4 electrons en 3p. En guanyar 2 electrons omple el subnivell a 3p⁶ assolint l\'estabilitat de l\'argó. Per això l\'anió sulfur té càrrega -2 (S²⁻) a totes les sals binàries!'
  },
  {
    id: 16,
    z: 17,
    symbol: 'Cl',
    name: 'Clor',
    category: 'basic',
    period: 3,
    group: 17,
    activeSub: '3p',
    title: 'Act. 16: El Clor (Z = 17) a les portes de l\'Argó',
    question: 'El Clor té Z = 17 ([Ne] 3s² 3p⁵). Quants electrons desaparellats té en els seus orbitals 3p segons Hund?',
    options: [
      '1 sol electró desaparellat (dos orbitals p tenen parella ↑↓ i un en té un de sol ↑)',
      '3 electrons desaparellats',
      '5 electrons desaparellats',
      'Cap electró desaparellat'
    ],
    correctIndex: 0,
    explanation: 'Dels 5 electrons en 3p: px en té 2 (↑↓), py en té 2 (↑↓) i pz en té 1 (↑). Aquest únic electró desaparellat és el que comparteix o guanya per formar el clorur (Cl⁻)!'
  },
  {
    id: 17,
    z: 18,
    symbol: 'Ar',
    name: 'Argó',
    category: 'basic',
    period: 3,
    group: 18,
    activeSub: '3p',
    title: 'Act. 17: L\'Argó (Z = 18) - El gran tancament del Període 3',
    question: 'La configuració de l\'Argó és 1s² 2s² 2p⁶ 3s² 3p⁶. Tot i que el nivell n = 3 admet orbitals 3d, per què l\'Argó és tan estable?',
    options: [
      'Perquè té la capa de valència externa (3s² 3p⁶) amb 8 electrons completant un octet perfecte',
      'Perquè té els orbitals 3d completament plens',
      'Perquè té més neutrons que protons',
      'Perquè l\'orbital 4s ja està ple'
    ],
    correctIndex: 0,
    explanation: 'Els 8 electrons externs s² p⁶ constitueixen la màxima estabilitat química (regla de l\'octet). La notació [Ar] servirà com a nucli intern compacte per a tot el període 4!'
  },

  // ------------------------------------------------------------------------
  // BLOC 3: El salt al nivell 4s abans del 3d (Z = 19 a 20)
  // ------------------------------------------------------------------------
  {
    id: 18,
    z: 19,
    symbol: 'K',
    name: 'Potassi',
    category: 'basic',
    period: 4,
    group: 1,
    activeSub: '4s',
    title: 'Act. 18: El gran enigma de Moeller: El Potassi (Z = 19)',
    question: 'Després de l\'Argó (3p⁶), per què el 19è electró del Potassi va a l\'orbital 4s i NO al 3d?',
    options: [
      'Perquè segons la fletxa diagonal de Moeller, l\'orbital 4s té menor energia que el 3d (regla n + l)',
      'Perquè els orbitals 3d encara no existeixen a la natura',
      'Perquè el potassi és un gas noble',
      'Perquè l\'orbital 4s només cap al centre de l\'àtom'
    ],
    correctIndex: 0,
    explanation: 'És la clau del diagrama de Moeller! Per a 4s: n + l = 4 + 0 = 4. Per a 3d: n + l = 3 + 2 = 5. Com que 4 < 5, l\'orbital 4s té menys energia i s\'omple primer: [Ar] 4s¹.'
  },
  {
    id: 19,
    z: 20,
    symbol: 'Ca',
    name: 'Calci',
    category: 'basic',
    period: 4,
    group: 2,
    activeSub: '4s',
    title: 'Act. 19: El Calci (Z = 20) i la valència +2',
    question: 'El calci té configuració [Ar] 4s². Quants electrons té a la capa de valència i per què mai porta nombre romà a la nomenclatura de Stock?',
    options: [
      'Té 2 electrons de valència al 4s, i només té la valència +2 (per això mai es posa calç(II))',
      'Té 4 electrons i pot tenir valències +2 i +4',
      'Té 20 electrons de valència',
      'Té 1 electró i és un metall alcalí'
    ],
    correctIndex: 0,
    explanation: 'El calci és un alcalinoterri del grup 2 amb configuració [Ar] 4s². En perdre aquests 2 electrons queda amb la capa de l\'argó. Com que només té la valència +2, la IUPAC prohibeix posar romans!'
  },

  // ------------------------------------------------------------------------
  // BLOC 4: Els Metalls de Transició del Període 4 (Z = 21 a 30) - Bloc d
  // ------------------------------------------------------------------------
  {
    id: 20,
    z: 21,
    symbol: 'Sc',
    name: 'Escandi',
    category: 'dblock',
    period: 4,
    group: 3,
    activeSub: '3d',
    title: 'Act. 20: L\'obertura del Bloc d - L\'Escandi (Z = 21)',
    question: 'Seguint la diagonal de Moeller després del 4s², quin és el següent orbital que comença a omplir-se amb l\'Escandi (Z = 21)?',
    options: [
      'L\'orbital 3d, donant [Ar] 4s² 3d¹ (primer metall de transició)',
      'L\'orbital 4p, donant [Ar] 4s² 4p¹',
      'L\'orbital 5s, donant [Ar] 4s² 5s¹',
      'L\'orbital 4d'
    ],
    correctIndex: 0,
    explanation: 'La 5a fletxa diagonal de Moeller baixa directament per: 3d ➔ 4p ➔ 5s. Per tant, un cop omplert el 4s², s\'omplen els 5 orbitals 3d, inaugurant els metalls de transició!'
  },
  {
    id: 21,
    z: 22,
    symbol: 'Ti',
    name: 'Titani',
    category: 'dblock',
    period: 4,
    group: 4,
    activeSub: '3d',
    title: 'Act. 21: El Titani (Z = 22) i els aliatges aeroespacials',
    question: 'Quina és la configuració electrònica completa del Titani (Z = 22) seguint Moeller?',
    options: [
      '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d² ([Ar] 4s² 3d²)',
      '[Ar] 4s⁴',
      '[Ar] 3d⁴',
      '1s² 2s² 2p⁶ 3s² 3p⁶ 4p⁴'
    ],
    correctIndex: 0,
    explanation: 'L\'argó té 18 electrons. Després s\'afegeixen 2 al 4s (4s², suma 20) i els 2 restants al subnivell 3d (3d², suma 22). Per tant: [Ar] 4s² 3d².'
  },
  {
    id: 22,
    z: 23,
    symbol: 'V',
    name: 'Vanadi',
    category: 'dblock',
    period: 4,
    group: 5,
    activeSub: '3d',
    title: 'Act. 22: El Vanadi (Z = 23) i els múltiples colors dels seus ions',
    question: 'Quants electrons té el Vanadi (Z = 23: [Ar] 4s² 3d³) en el seu subnivell 3d?',
    options: [
      '3 electrons allotjats en 3 orbitals d diferents',
      '5 electrons',
      '2 electrons',
      '23 electrons'
    ],
    correctIndex: 0,
    explanation: 'El vanadi té 3 electrons en 3d. Com que hi ha 5 orbitals d disponibles, cadascun d\'aquests 3 electrons ocupa una caixa separada amb espí paral·lel segons la regla de Hund.'
  },
  {
    id: 23,
    z: 24,
    symbol: 'Cr',
    name: 'Crom',
    category: 'dblock',
    period: 4,
    group: 6,
    activeSub: '3d',
    title: 'Act. 23: L\'anomalia quàntica del Crom (Z = 24)',
    question: 'La configuració teòrica de Moeller seria [Ar] 4s² 3d⁴, però la realitat experimental és [Ar] 4s¹ 3d⁵. Per què es produeix aquesta promoció electrònica?',
    options: [
      'Perquè tenir el subnivell 3d exactament semiplè (3d⁵) amb tots els espins paral·lels aporta una estabilitat quàntica superior',
      'Perquè l\'orbital 4s s\'ha destruït per la calor',
      'Perquè el crom és un gas noble disfressat',
      'Per un error tipogràfic de Moeller'
    ],
    correctIndex: 0,
    explanation: 'És una de les anomalies més famoses de la química! Un electró del 4s salta al 3d perquè tenir tant el 4s com el 3d exactament semiplens (4s¹ 3d⁵) minimitza la repulsió electrònica.'
  },
  {
    id: 24,
    z: 25,
    symbol: 'Mn',
    name: 'Manganès',
    category: 'dblock',
    period: 4,
    group: 7,
    activeSub: '3d',
    title: 'Act. 24: El Manganès (Z = 25) i el rècord d\'estats d\'oxidació',
    question: 'La configuració del Manganès és [Ar] 4s² 3d⁵. Quants electrons pot arribar a mobilitzar en compostos com el permanganat (KMnO₄)?',
    options: [
      'Tots 7 electrons (els 2 del 4s i els 5 del 3d), donant valència màxima +7',
      'Només els 2 del 4s',
      'Només els 5 del 3d',
      'Cap, el manganès no té valències'
    ],
    correctIndex: 0,
    explanation: 'En els metalls de transició, els electrons 4s i 3d tenen energies molt properes. El manganès pot perdre o compartir des de 2 electrons (Mn²⁺) fins a tots 7 (com a MnO₄⁻, on actua amb +7).'
  },
  {
    id: 25,
    z: 26,
    symbol: 'Fe',
    name: 'Ferro',
    category: 'dblock',
    period: 4,
    group: 8,
    activeSub: '3d',
    title: 'Act. 25: El Ferro (Z = 26) - Deducció de Fe(II) i Fe(III)',
    question: 'La configuració del Ferro és [Ar] 4s² 3d⁶. Com s\'explica des de la configuració electrònica que tingui valències +2 i +3?',
    options: [
      'Perdent els dos 4s² dóna Fe²⁺; perdent a més un electró de 3d⁶ queda 3d⁵ semiplè i molt estable, donant Fe³⁺',
      'Perquè el ferro es divideix en dues partícules diferents',
      'Perquè té 26 electrons i 26 dividit per 2 dóna 13',
      'Perquè el ferro només pot formar òxids quan plou'
    ],
    correctIndex: 0,
    explanation: 'Genial connexió! Primer surten els dos electrons 4s (Fe²⁺, òxid de ferro(II), FeO). Si en perd un altre de 3d, s\'assoleix la configuració hiperestable 3d⁵ (Fe³⁺, òxid de ferro(III), Fe₂O₃)!'
  },
  {
    id: 26,
    z: 27,
    symbol: 'Co',
    name: 'Cobalt',
    category: 'dblock',
    period: 4,
    group: 9,
    activeSub: '3d',
    title: 'Act. 26: El Cobalt (Z = 27) i els pigments blaus',
    question: 'Quants electrons té el Cobalt (Z = 27) en el seu subnivell 3d segons la regla de Moeller ([Ar] 4s² 3d⁷)?',
    options: [
      '7 electrons (amb 3 caixes aparellades i 2 electrons desaparellats)',
      '9 electrons',
      '2 electrons',
      '5 electrons'
    ],
    correctIndex: 0,
    explanation: 'Amb 27 electrons: 18 de l\'Argó + 2 del 4s = 20 electrons. Els 7 electrons restants van al subnivell 3d: [Ar] 4s² 3d⁷.'
  },
  {
    id: 27,
    z: 28,
    symbol: 'Ni',
    name: 'Níquel',
    category: 'dblock',
    period: 4,
    group: 10,
    activeSub: '3d',
    title: 'Act. 27: El Níquel (Z = 28) i el ferromagnetisme',
    question: 'Seguint el diagrama de Moeller, quina és la configuració del Níquel (Z = 28)?',
    options: [
      '[Ar] 4s² 3d⁸ (1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸)',
      '[Ar] 4s¹ 3d⁹',
      '[Ar] 4s¹⁰',
      '[Ne] 3s² 3d⁸'
    ],
    correctIndex: 0,
    explanation: 'El níquel omple ordenadament el subnivell 3d amb 8 electrons: [Ar] 4s² 3d⁸. Té 2 electrons desaparellats als orbitals d, fet responsable de les seves propietats magnètiques.'
  },
  {
    id: 28,
    z: 29,
    symbol: 'Cu',
    name: 'Coure',
    category: 'dblock',
    period: 4,
    group: 11,
    activeSub: '3d',
    title: 'Act. 28: L\'anomalia del Coure (Z = 29) i el subnivell 3d complet',
    question: 'El Coure adopta la configuració [Ar] 4s¹ 3d¹⁰ en lloc de la teòrica [Ar] 4s² 3d⁹. Per què?',
    options: [
      'Perquè un subnivell d completament ple (3d¹⁰) proporciona una estabilitat quàntica màxima',
      'Perquè el coure no admet electrons en el nivell 4',
      'Perquè és el millor conductor elèctric',
      'Perquè l\'oxigen l\'obliga a canviar'
    ],
    correctIndex: 0,
    explanation: 'Igual que al crom, la proximitat energètica entre 4s i 3d fa que un electró del 4s passi al 3d per completar els 10 electrons de 3d¹⁰. D\'aquí vénen les valències +1 (Cu₂O) i +2 (CuO)!'
  },
  {
    id: 29,
    z: 30,
    symbol: 'Zn',
    name: 'Zinc',
    category: 'dblock',
    period: 4,
    group: 12,
    activeSub: '3d',
    title: 'Act. 29: El Zinc (Z = 30) - El subnivell 3d tancat',
    question: 'El Zinc té configuració [Ar] 4s² 3d¹⁰. Per què a la formulació inorgànica només té valència +2 (ZnO, ZnCl₂)?',
    options: [
      'Perquè només perd els 2 electrons del 4s²; el subnivell 3d¹⁰ és tan estable que no es trenca',
      'Perquè només té 2 electrons en total',
      'Perquè té 10 valències diferents',
      'Perquè és un no-metall'
    ],
    correctIndex: 0,
    explanation: 'El subnivell 3d¹⁰ està totalment saturat i és molt inert. Només es desprenen els dos electrons externs de 4s², per això el zinc sempre actua amb valència +2 i no porta nombres romans a Stock!'
  },

  // ------------------------------------------------------------------------
  // BLOC 5: Tancament del Període 4 (Z = 31 a 36)
  // ------------------------------------------------------------------------
  {
    id: 30,
    z: 31,
    symbol: 'Ga',
    name: 'Gal·li',
    category: 'period4',
    period: 4,
    group: 13,
    activeSub: '4p',
    title: 'Act. 30: El Gal·li (Z = 31) i el retorn als orbitals p',
    question: 'Un cop omplert el 3d¹⁰ del zinc, cap a quin orbital continua la fletxa de Moeller per al Gal·li (Z = 31)?',
    options: [
      'A l\'orbital 4p, formant [Ar] 4s² 3d¹⁰ 4p¹',
      'A l\'orbital 4d, formant [Ar] 4s² 3d¹¹',
      'A l\'orbital 5s',
      'A l\'orbital 4f'
    ],
    correctIndex: 0,
    explanation: 'Seguint la 5a diagonal de Moeller: 3d ➔ 4p ➔ 5s. Un cop acabat el 3d¹⁰, l\'electró 31 entra directament a l\'orbital 4p (4p¹). Els electrons de valència tornen a ser els del nivell 4: 4s² 4p¹ = 3.'
  },
  {
    id: 31,
    z: 32,
    symbol: 'Ge',
    name: 'Germani',
    category: 'period4',
    period: 4,
    group: 14,
    activeSub: '4p',
    title: 'Act. 31: El Germani (Z = 32) i la predicció de Mendeléiev',
    question: 'Quants electrons té a la capa de valència el Germani (Z = 32: [Ar] 4s² 3d¹⁰ 4p²)?',
    options: [
      '4 electrons de valència al nivell n = 4 (4s² + 4p²)',
      '14 electrons de valència',
      '2 electrons de valència',
      '10 electrons de valència'
    ],
    correctIndex: 0,
    explanation: 'Compte amb no confondre\'s! Els 10 electrons de 3d¹⁰ són d\'una capa interna (n=3) i no compten com a valència. La capa de valència és la més externa (n=4): 4s² + 4p² = 4 electrons.'
  },
  {
    id: 32,
    z: 33,
    symbol: 'As',
    name: 'Arsènic',
    category: 'period4',
    period: 4,
    group: 15,
    activeSub: '4p',
    title: 'Act. 32: L\'Arsènic (Z = 33) i la similitud amb el fòsfor',
    question: 'L\'Arsènic té configuració [Ar] 4s² 3d¹⁰ 4p³. A quin grup de la taula periòdica pertany?',
    options: [
      'Grup 15 (nitrogenoides, amb 5 electrons de valència: 4s² 4p³)',
      'Grup 3',
      'Grup 13',
      'Grup 5'
    ],
    correctIndex: 0,
    explanation: 'Té 5 electrons a la capa externa (4s² + 4p³ = 5), igual que el nitrogen (2s² 2p³) i el fòsfor (3s² 3p³). Per això comparteixen propietats químiques similars.'
  },
  {
    id: 33,
    z: 34,
    symbol: 'Se',
    name: 'Seleni',
    category: 'period4',
    period: 4,
    group: 16,
    activeSub: '4p',
    title: 'Act. 33: El Seleni (Z = 34) i la fotoconductivitat',
    question: 'Segons Moeller, quina és la configuració del Seleni (Z = 34) i quants electrons li manquen per a l\'octet?',
    options: [
      '[Ar] 4s² 3d¹⁰ 4p⁴; li falten 2 electrons per a l\'octet (actua amb valència -2 com a selenur)',
      '[Ar] 4s² 3d¹⁰ 4p²; li falten 4 electrons',
      '[Kr] 4s²',
      '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁴'
    ],
    correctIndex: 0,
    explanation: 'El seleni té 4 electrons en 4p (4p⁴). Com que és un calcogen (grup 16), guanya 2 electrons per completar 4p⁶, formant l\'anió selenur (Se²⁻).'
  },
  {
    id: 34,
    z: 35,
    symbol: 'Br',
    name: 'Brom',
    category: 'period4',
    period: 4,
    group: 17,
    activeSub: '4p',
    title: 'Act. 34: El Brom (Z = 35) - L\'únic no-metall líquid',
    question: 'El Brom (Z = 35) té configuració [Ar] 4s² 3d¹⁰ 4p⁵. Quina serà la seva fòrmula molecular en estat lliure com a substància simple a 3r d\'ESO?',
    options: [
      'Br₂ (molècula diatòmica que comparteix 1 parell d\'electrons per completar l\'octet)',
      'Br (àtom solitari com els metalls)',
      'Br₃ (ozó de brom)',
      'Br₄'
    ],
    correctIndex: 0,
    explanation: 'Amb 7 electrons de valència (4s² 4p⁵), dos àtoms de brom s\'uneixen per enllaç covalent compartint 1 electró cadascun per assolir 8 electrons, formant la molècula diatòmica Br₂!'
  },
  {
    id: 35,
    z: 36,
    symbol: 'Kr',
    name: 'Criptó',
    category: 'period4',
    period: 4,
    group: 18,
    activeSub: '4p',
    title: 'Act. 35: El Criptó (Z = 36) - Tancament triomfal del Període 4',
    question: 'La configuració del Criptó és [Ar] 4s² 3d¹⁰ 4p⁶. Quants electrons té en total cadascun dels seus 4 nivells quàntics (K, L, M, N)?',
    options: [
      'K: 2 | L: 8 | M: 18 | N: 8 (Total = 36 electrons)',
      'K: 2 | L: 8 | M: 8 | N: 18',
      'K: 4 | L: 10 | M: 12 | N: 10',
      'K: 2 | L: 18 | M: 8 | N: 8'
    ],
    correctIndex: 0,
    explanation: 'Nivell 1 (1s² = 2); Nivell 2 (2s² 2p⁶ = 8); Nivell 3 (3s² 3p⁶ 3d¹⁰ = 18); Nivell 4 (4s² 4p⁶ = 8). Suma total: 2 + 8 + 18 + 8 = 36 electrons!'
  },

  // ------------------------------------------------------------------------
  // BLOC 6: Període 5 (Z = 37 a 54) - Cap a la Plata i el Xenó
  // ------------------------------------------------------------------------
  {
    id: 36,
    z: 37,
    symbol: 'Rb',
    name: 'Rubidi',
    category: 'period5',
    period: 5,
    group: 1,
    activeSub: '5s',
    title: 'Act. 36: El Rubidi (Z = 37) i l\'inici del Període 5',
    question: 'Després de completar el 4p⁶ del Criptó, cap a quin orbital es dirigeix la fletxa de Moeller per al Rubidi (Z = 37)?',
    options: [
      'A l\'orbital 5s, donant [Kr] 5s¹',
      'A l\'orbital 4d, donant [Kr] 4d¹',
      'A l\'orbital 4f, donant [Kr] 4f¹',
      'A l\'orbital 5p, donant [Kr] 5p¹'
    ],
    correctIndex: 0,
    explanation: 'La 5a diagonal de Moeller acaba a 5s (3d ➔ 4p ➔ 5s). Per tant, el 37è electró entra a 5s¹, iniciant el període 5 com a metall alcalí.'
  },
  {
    id: 37,
    z: 38,
    symbol: 'Sr',
    name: 'Estronci',
    category: 'period5',
    period: 4,
    group: 2,
    activeSub: '5s',
    title: 'Act. 37: L\'Estronci (Z = 38) i el foc vermell',
    question: 'Quina és la configuració abreujada de l\'Estronci (Z = 38)?',
    options: [
      '[Kr] 5s² (alcalinoterri del període 5)',
      '[Ar] 5s²',
      '[Xe] 5s²',
      '[Kr] 4d²'
    ],
    correctIndex: 0,
    explanation: 'El Criptó compta 36 electrons. Els 2 electrons restants omplen l\'orbital 5s: [Kr] 5s².'
  },
  {
    id: 38,
    z: 40,
    symbol: 'Zr',
    name: 'Zirconi',
    category: 'period5',
    period: 5,
    group: 4,
    activeSub: '4d',
    title: 'Act. 38: El Zirconi (Z = 40) - La 6a diagonal cap al 4d',
    question: 'Un cop omplert el 5s², la 6a fletxa diagonal de Moeller comença omplint quin subnivell per al Zirconi (Z = 40)?',
    options: [
      'El subnivell 4d, donant [Kr] 5s² 4d²',
      'El subnivell 5p, donant [Kr] 5s² 5p²',
      'El subnivell 4f, donant [Kr] 5s² 4f²',
      'El subnivell 6s'
    ],
    correctIndex: 0,
    explanation: 'La 6a diagonal de Moeller comença a 4d i baixa cap a 5p i 6s (4d ➔ 5p ➔ 6s). Per tant, el Zirconi afegeix 2 electrons al 4d: [Kr] 5s² 4d².'
  },
  {
    id: 39,
    z: 42,
    symbol: 'Mo',
    name: 'Molibdè',
    category: 'period5',
    period: 5,
    group: 6,
    activeSub: '4d',
    title: 'Act. 39: L\'anomalia del Molibdè (Z = 42)',
    question: 'Igual que passava amb el crom al període 4, el Molibdè (Z = 42) presenta l\'anomalia de promoció: [Kr] 5s¹ 4d⁵ en lloc de [Kr] 5s² 4d⁴. Quin avantatge energètic té?',
    options: [
      'Presenta els dos subnivells 5s i 4d exactament semiplens amb espins paral·lels de màxima estabilitat',
      'Cap, és un fenomen purament aleatori',
      'Fa que l\'element sigui magnèticament transparent',
      'Evita que el nucli expulsi protons'
    ],
    correctIndex: 0,
    explanation: 'La simetria de tenir 5s¹ i 4d⁵ (tots dos semiplens) redueix l\'energia total del sistema, repetint exactament el comportament del crom al grup 6!'
  },
  {
    id: 40,
    z: 47,
    symbol: 'Ag',
    name: 'Plata',
    category: 'period5',
    period: 5,
    group: 11,
    activeSub: '4d',
    title: 'Act. 40: La Plata (Z = 47) - Per què sempre té valència +1?',
    question: 'La configuració de la Plata és [Kr] 5s¹ 4d¹⁰. Per què a la formulació inorgànica de 3r d\'ESO sempre té valència +1 (AgCl, Ag₂O)?',
    options: [
      'Perquè perd el seu únic electró del 5s¹, deixant el subnivell 4d¹⁰ completament intacte i estable com a Ag⁺',
      'Perquè té 47 neutrons que pesen molt',
      'Perquè és un metall alcalí',
      'Perquè el clor només accepta un enllaç'
    ],
    correctIndex: 0,
    explanation: 'La capa 4d¹⁰ és una closca electrònica molt estable que no es trenca fàcilment. Només es desprèn l\'electró solitari de 5s¹, originant exclusivament el catió Ag⁺ (valència única +1).'
  },
  {
    id: 41,
    z: 50,
    symbol: 'Sn',
    name: 'Estany',
    category: 'period5',
    period: 5,
    group: 14,
    activeSub: '5p',
    title: 'Act. 41: L\'Estany (Z = 50) - Justificació de SnO i SnO₂',
    question: 'L\'Estany té configuració [Kr] 5s² 4d¹⁰ 5p². Com explica la seva configuració que tingui valències +2 i +4 a la nomenclatura de Stock?',
    options: [
      'Pot perdre els 2 electrons de 5p² (dant Sn²⁺, SnO) o tots 4 electrons del nivell 5 (5s² + 5p², dant Sn⁴⁺, SnO₂)',
      'Perquè té 50 electrons i 50 és múltiple de 2',
      'Perquè perd electrons del subnivell 4d',
      'Perquè només reacciona amb l\'oxigen'
    ],
    correctIndex: 0,
    explanation: 'Molt clar! Pot perdre primer els 2 electrons del subnivell més extern 5p (Sn²⁺, òxid d\'estany(II)) o sumar la pèrdua dels dos 5s (Sn⁴⁺, òxid d\'estany(IV)).'
  },
  {
    id: 42,
    z: 53,
    symbol: 'I',
    name: 'Iode',
    category: 'period5',
    period: 5,
    group: 17,
    activeSub: '5p',
    title: 'Act. 42: El Iode (Z = 53) - L\'halogen sòlid que sublima',
    question: 'Quina és la configuració de la capa de valència del Iode (Z = 53: [Kr] 5s² 4d¹⁰ 5p⁵)?',
    options: [
      '5s² 5p⁵ (7 electrons de valència al nivell n = 5)',
      '4d¹⁰ 5p⁵ (15 electrons)',
      '5p⁵ (5 electrons)',
      '5s² 4d¹⁰ (12 electrons)'
    ],
    correctIndex: 0,
    explanation: 'Els electrons de valència pertanyen exclusivament al nivell més alt (n = 5): 5s² + 5p⁵ = 7 electrons. Com tots els halògens, guanya 1 e⁻ per formar l\'anió iodur (I⁻).'
  },
  {
    id: 43,
    z: 54,
    symbol: 'Xe',
    name: 'Xenó',
    category: 'period5',
    period: 5,
    group: 18,
    activeSub: '5p',
    title: 'Act. 43: El Xenó (Z = 54) - Tancament del Període 5',
    question: 'El Xenó té configuració [Kr] 5s² 4d¹⁰ 5p⁶. Quina serà la seva utilitat a partir del període 6?',
    options: [
      'Servirà com a bloc de referència abreujat [Xe] per a tots els elements des de Z = 55 fins a Z = 86',
      'S\'utilitza exclusivament per fer bombetes de cotxe',
      'Permet crear or artificialment',
      'Canvia de líquid a gas a 100°C'
    ],
    correctIndex: 0,
    explanation: 'El Xenó representa el paquet tancat de 54 electrons. A partir d\'aquí, tots els elements pesants s\'escriuen aprofitant el cor [Xe]!'
  },

  // ------------------------------------------------------------------------
  // BLOC 7: Període 6 i Lantanoides (Z = 55 a 70) - L'entrada del subnivell 4f
  // ------------------------------------------------------------------------
  {
    id: 44,
    z: 55,
    symbol: 'Cs',
    name: 'Cesi',
    category: 'period6',
    period: 6,
    group: 1,
    activeSub: '6s',
    title: 'Act. 44: El Cesi (Z = 55) - L\'element més electropositiu',
    question: 'Seguint la 6a diagonal de Moeller després del 5p⁶ del Xenó, quin orbital s\'omple per al Cesi (Z = 55)?',
    options: [
      'L\'orbital 6s, formant [Xe] 6s¹',
      'L\'orbital 4f, formant [Xe] 4f¹',
      'L\'orbital 5d, formant [Xe] 5d¹',
      'L\'orbital 6p'
    ],
    correctIndex: 0,
    explanation: 'La 6a fletxa diagonal de Moeller acaba a 6s (4d ➔ 5p ➔ 6s). Per tant, el Cesi comença el període 6 amb [Xe] 6s¹ (l\'àtom neutre més gran de la taula periòdica).'
  },
  {
    id: 45,
    z: 56,
    symbol: 'Ba',
    name: 'Bari',
    category: 'period6',
    period: 6,
    group: 2,
    activeSub: '6s',
    title: 'Act. 45: El Bari (Z = 56) a la cruïlla de Moeller',
    question: 'Quina és la configuració del Bari (Z = 56) i quin subnivell gegant començarà a omplir-se just després?',
    options: [
      '[Xe] 6s²; després s\'inicia la 7a diagonal amb el subnivell 4f (14 electrons)',
      '[Xe] 5d²; després ve el 6p',
      '[Xe] 4f²; després ve el 5d',
      '[Kr] 6s²'
    ],
    correctIndex: 0,
    explanation: 'El Bari omple el 6s (6s²). Segons la 7a diagonal de Moeller, el següent pas és l\'entrada triomfal del subnivell 4f dels lantanoides (4f ➔ 5d ➔ 6p).'
  },
  {
    id: 46,
    z: 57,
    symbol: 'La',
    name: 'Lantani',
    category: 'period6',
    period: 6,
    group: 3,
    activeSub: '5d',
    title: 'Act. 46: El Lantani (Z = 57) i l\'inici de les Terres Rares',
    question: 'El Lantani té configuració [Xe] 6s² 5d¹. A quina sèrie dóna nom a la part inferior de la taula periòdica?',
    options: [
      'Dóna nom als Lantanoides (o lantanis), la sèrie de 14 elements del bloc 4f',
      'Dóna nom als Actinoides',
      'Dóna nom als halògens pesants',
      'Dóna nom als gasos nobles'
    ],
    correctIndex: 0,
    explanation: 'El Lantani és el cap de fila dels Lantanoides. Immediatament després d\'ell, els següents 14 elements omplen progressivament els 7 orbitals del subnivell 4f.'
  },
  {
    id: 47,
    z: 70,
    symbol: 'Yb',
    name: 'Iterbi',
    category: 'period6',
    period: 6,
    group: 3,
    activeSub: '4f',
    title: 'Act. 47: L\'Iterbi (Z = 70) i la saturació del subnivell 4f',
    question: 'Quants electrons caben com a màxim en el subnivell 4f segons el diagrama de Moeller per a l\'Iterbi (Z = 70: [Xe] 6s² 4f¹⁴)?',
    options: [
      '14 electrons en total (7 orbitals f × 2 electrons cadascun)',
      '10 electrons en total',
      '6 electrons en total',
      '18 electrons en total'
    ],
    correctIndex: 0,
    explanation: 'Els subnivells f tenen 7 orbitals orientats en l\'espai. Com que a cada orbital hi caben 2 electrons amb espins oposats: 7 × 2 = 14 electrons com a màxim (4f¹⁴)!'
  },

  // ------------------------------------------------------------------------
  // BLOC 8: Metalls Pesants i Tancament a Z = 86 (Radó)
  // ------------------------------------------------------------------------
  {
    id: 48,
    z: 79,
    symbol: 'Au',
    name: 'Or',
    category: 'period6',
    period: 6,
    group: 11,
    activeSub: '5d',
    title: 'Act. 48: L\'Or (Z = 79) - El rei dels metalls preciosos',
    question: 'L\'Or té Z = 79 ([Xe] 6s¹ 4f¹⁴ 5d¹⁰). Quants electrons té en total sumant els subnivells 4f i 5d?',
    options: [
      '24 electrons (14 en 4f i 10 en 5d)',
      '10 electrons',
      '79 electrons',
      '18 electrons'
    ],
    correctIndex: 0,
    explanation: 'L\'or té el subnivell 4f completament saturat (14 e⁻) i el subnivell 5d completament ple (10 e⁻). Aquesta configuració compacta li atorga la seva llegendària resistència a la corrosió!'
  },
  {
    id: 49,
    z: 82,
    symbol: 'Pb',
    name: 'Plom',
    category: 'period6',
    period: 6,
    group: 14,
    activeSub: '6p',
    title: 'Act. 49: El Plom (Z = 82) - La formulació dels òxids PbO i PbO₂',
    question: 'El Plom té Z = 82 ([Xe] 6s² 4f¹⁴ 5d¹⁰ 6p²). Quants electrons té a la capa de valència (n = 6) i com es relaciona amb els seus noms de Stock?',
    options: [
      'Té 4 electrons de valència (6s² + 6p²), generant l\'òxid de plom(II) [PbO] i l\'òxid de plom(IV) [PbO₂]',
      'Té 14 electrons de valència i només fa una valència',
      'Té 2 electrons de valència i només forma Pb₂O',
      'Té 82 electrons de valència'
    ],
    correctIndex: 0,
    explanation: 'Els electrons de valència són els del nivell 6: 6s² + 6p² = 4 e⁻. Pot perdre els dos 6p (donant Pb²⁺, òxid de plom(II)) o els quatre 6s i 6p (donant Pb⁴⁺, òxid de plom(IV)).'
  },
  {
    id: 50,
    z: 86,
    symbol: 'Rn',
    name: 'Radó',
    category: 'period6',
    period: 6,
    group: 18,
    activeSub: '6p',
    title: 'Act. 50: La Gran Fita Final: El Radó (Z = 86) i el tancament del Període 6',
    question: 'El Radó (Z = 86) tanca la 7a diagonal de Moeller. Quina és la seva configuració completa i per què clou el període 6 com a gas noble?',
    options: [
      '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶, perquè omple el subnivell 6p i assoleix l\'octet complet de 8 electrons externs (6s² 6p⁶)',
      '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6d⁶',
      '[Kr] 6s² 6p⁶',
      '[Xe] 4f¹⁴ 5d¹²'
    ],
    correctIndex: 0,
    explanation: 'Felicitats per arribar a Z = 86! Amb els 6 electrons finals entrant a 6p, la capa de valència n=6 suma 6s² 6p⁶ = 8 electrons (octet noble). El radó clou perfectament la 7a diagonal de Moeller!'
  }
];
