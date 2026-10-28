// ==========================================================================
// Dades de Formulació Inorgànica per a 3r d'ESO (Currículum LOMLOE / Catalunya)
// ==========================================================================

const CHEMISTRY_DATA = {
  // Elements principals necessaris per a 3r d'ESO
  elements: [
    // Metalls valència única
    { symbol: 'H', name: 'Hidrogen', num: 1, type: 'no-metall', valencies: [+1, -1], commonValence: '+1 / -1', group: 'Grup 1', tip: 'Actua amb +1 amb no-metalls i amb -1 amb metalls.' },
    { symbol: 'Li', name: 'Liti', num: 3, type: 'metall-alcali', valencies: [+1], commonValence: '+1', group: 'Alcalins (Grup 1)', tip: 'Metall alcalí molt reactiu, sempre té valència +1.' },
    { symbol: 'Na', name: 'Sodi', num: 11, type: 'metall-alcali', valencies: [+1], commonValence: '+1', group: 'Alcalins (Grup 1)', tip: 'Sempre +1. Forma la sal comuna: NaCl.' },
    { symbol: 'K', name: 'Potassi', num: 19, type: 'metall-alcali', valencies: [+1], commonValence: '+1', group: 'Alcalins (Grup 1)', tip: 'Alcalí típic, sempre valència +1.' },
    { symbol: 'Be', name: 'Beril·li', num: 4, type: 'metall-alcalinoterri', valencies: [+2], commonValence: '+2', group: 'Alcalinoterris (Grup 2)', tip: 'Sempre valència +2.' },
    { symbol: 'Mg', name: 'Magnesi', num: 12, type: 'metall-alcalinoterri', valencies: [+2], commonValence: '+2', group: 'Alcalinoterris (Grup 2)', tip: 'Metall lleuger, sempre valència +2 (MgO).' },
    { symbol: 'Ca', name: 'Calci', num: 20, type: 'metall-alcalinoterri', valencies: [+2], commonValence: '+2', group: 'Alcalinoterris (Grup 2)', tip: 'Present als ossos i closques, sempre valència +2.' },
    { symbol: 'Ba', name: 'Bari', num: 56, type: 'metall-alcalinoterri', valencies: [+2], commonValence: '+2', group: 'Alcalinoterris (Grup 2)', tip: 'Alcalinoterri, sempre valència +2.' },
    { symbol: 'Al', name: 'Alumini', num: 13, type: 'metall', valencies: [+3], commonValence: '+3', group: 'Grup 13', tip: 'Metall lleuger, sempre té valència +3 (Al₂O₃).' },
    { symbol: 'Zn', name: 'Zinc', num: 30, type: 'metall-transicio', valencies: [+2], commonValence: '+2', group: 'Transició', tip: 'Metall de transició amb només una valència: sempre +2.' },
    { symbol: 'Ag', name: 'Plata', num: 47, type: 'metall-transicio', valencies: [+1], commonValence: '+1', group: 'Transició', tip: 'Metall noble, sempre té valència +1.' },
    { symbol: 'Cd', name: 'Cadmi', num: 48, type: 'metall-transicio', valencies: [+2], commonValence: '+2', group: 'Transició', tip: 'Metall de transició, sempre +2.' },

    // Metalls amb diverses valències
    { symbol: 'Fe', name: 'Ferro', num: 26, type: 'metall-transicio', valencies: [+2, +3], commonValence: '+2, +3', group: 'Transició', tip: 'Té dues valències: +2 i +3. Cal indicar-les en la nomenclatura de Stock!' },
    { symbol: 'Co', name: 'Cobalt', num: 27, type: 'metall-transicio', valencies: [+2, +3], commonValence: '+2, +3', group: 'Transició', tip: 'Valències +2 i +3, igual que el ferro.' },
    { symbol: 'Ni', name: 'Níquel', num: 28, type: 'metall-transicio', valencies: [+2, +3], commonValence: '+2, +3', group: 'Transició', tip: 'Valències +2 i +3.' },
    { symbol: 'Cu', name: 'Coure', num: 29, type: 'metall-transicio', valencies: [+1, +2], commonValence: '+1, +2', group: 'Transició', tip: 'Molt comú: valència +1 (Cu₂O) i valència +2 (CuO).' },
    { symbol: 'Hg', name: 'Mercuri', num: 80, type: 'metall-transicio', valencies: [+1, +2], commonValence: '+1, +2', group: 'Transició', tip: 'Líquid a temperatura ambient. Valències +1 i +2.' },
    { symbol: 'Au', name: 'Or', num: 79, type: 'metall-transicio', valencies: [+1, +3], commonValence: '+1, +3', group: 'Transició', tip: 'Metall preciós. Valències +1 i +3.' },
    { symbol: 'Sn', name: 'Estany', num: 50, type: 'metall', valencies: [+2, +4], commonValence: '+2, +4', group: 'Grup 14', tip: 'Valències +2 i +4 (SnO, SnO₂).' },
    { symbol: 'Pb', name: 'Plom', num: 82, type: 'metall', valencies: [+2, +4], commonValence: '+2, +4', group: 'Grup 14', tip: 'Valències +2 i +4 (PbO, PbO₂).' },
    { symbol: 'Pt', name: 'Platí', num: 78, type: 'metall-transicio', valencies: [+2, +4], commonValence: '+2, +4', group: 'Transició', tip: 'Valències +2 i +4.' },

    // No-metalls comuns
    { symbol: 'F', name: 'Fluor', num: 9, type: 'halogen', valencies: [-1], commonValence: '-1', group: 'Halògens (Grup 17)', tip: 'L\'element més electronegatiu. Sempre valència -1 en compostos binaris.' },
    { symbol: 'Cl', name: 'Clor', num: 17, type: 'halogen', valencies: [-1, +1, +3, +5, +7], commonValence: '-1 (+1, +3, +5, +7)', group: 'Halògens (Grup 17)', tip: 'En sals binàries és -1 (clorur). Amb oxigen pot fer +1, +3, +5, +7.' },
    { symbol: 'Br', name: 'Brom', num: 35, type: 'halogen', valencies: [-1, +1, +3, +5, +7], commonValence: '-1 (+1, +3, +5, +7)', group: 'Halògens (Grup 17)', tip: 'En sals binàries i hidràcids és -1 (bromur).' },
    { symbol: 'I', name: 'Iode', num: 53, type: 'halogen', valencies: [-1, +1, +3, +5, +7], commonValence: '-1 (+1, +3, +5, +7)', group: 'Halògens (Grup 17)', tip: 'En sals binàries actua amb -1 (iodur).' },
    { symbol: 'O', name: 'Oxigen', num: 8, type: 'no-metall', valencies: [-2], commonValence: '-2', group: 'Calcògens (Grup 16)', tip: 'En tots els òxids actua amb valència -2!' },
    { symbol: 'S', name: 'Sofre', num: 16, type: 'calcogen', valencies: [-2, +2, +4, +6], commonValence: '-2 (+2, +4, +6)', group: 'Calcògens (Grup 16)', tip: 'En hidrurs i sals binàries és -2 (sulfur). Amb oxigen: +4, +6.' },
    { symbol: 'N', name: 'Nitrogen', num: 7, type: 'no-metall', valencies: [-3, +1, +2, +3, +4, +5], commonValence: '-3 (+1 a +5)', group: 'Grup 15', tip: 'En l\'amoníac (NH₃) actua amb -3.' },
    { symbol: 'P', name: 'Fòsfor', num: 15, type: 'no-metall', valencies: [-3, +3, +5], commonValence: '-3, +3, +5', group: 'Grup 15', tip: 'En hidrurs i fosfurs actua amb -3 (fosfur).' },
    { symbol: 'C', name: 'Carboni', num: 6, type: 'no-metall', valencies: [-4, +2, +4], commonValence: '+2, +4 (-4)', group: 'Grup 14', tip: 'En òxids: CO (monòxid de carboni, +2) i CO₂ (diòxid de carboni, +4).' },
    { symbol: 'Si', name: 'Silici', num: 14, type: 'no-metall', valencies: [+4, -4], commonValence: '+4', group: 'Grup 14', tip: 'Semiconductor clau. Forma SiO₂ (diòxid de silici).' }
  ],

  // Prefixos multiplicadors IUPAC
  prefixes: [
    { num: 1, prefix: 'mono-', note: 'Sovint s\'omet excepte en el monòxid de carboni o per evitar confusions.' },
    { num: 2, prefix: 'di-', note: 'Dues unitats de l\'àtom.' },
    { num: 3, prefix: 'tri-', note: 'Tres unitats de l\'àtom.' },
    { num: 4, prefix: 'tetra-', note: 'Quatre unitats.' },
    { num: 5, prefix: 'penta-', note: 'Cinc unitats.' },
    { num: 6, prefix: 'hexa-', note: 'Sis unitats.' },
    { num: 7, prefix: 'hepta-', note: 'Set unitats.' }
  ],

  // Exemples claus de compostos per a 3r d'ESO
  compounds: [
    // Substàncies simples
    { formula: 'H2', nameSys: 'Dihidrogen', nameStock: 'Hidrogen', category: 'simples', desc: 'Gas diatòmic combustible.' },
    { formula: 'O2', nameSys: 'Dioxigen', nameStock: 'Oxigen', category: 'simples', desc: 'Gas necessari per a la respiració.' },
    { formula: 'O3', nameSys: 'Trioxigen', nameStock: 'Ozó', category: 'simples', desc: 'Forma la capa d\'ozó protectora.' },
    { formula: 'N2', nameSys: 'Dinitrogen', nameStock: 'Nitrogen', category: 'simples', desc: 'Forma el 78% de l\'aire.' },
    { formula: 'Cl2', nameSys: 'Diclor', nameStock: 'Clor', category: 'simples', desc: 'Gas groc-verdós desinfectant.' },
    { formula: 'Fe', nameSys: 'Ferro', nameStock: 'Ferro', category: 'simples', desc: 'Metall sòlid pur.' },

    // Òxids
    { formula: 'Na2O', nameSys: 'Òxid de disodi (o monòxid de disodi)', nameStock: 'Òxid de sodi', category: 'oxids', desc: 'El sodi només té valència 1, per tant no es posa (I) a Stock!' },
    { formula: 'CaO', nameSys: 'Òxid de calci (o monòxid de calci)', nameStock: 'Òxid de calci', category: 'oxids', desc: 'Calç viva. València simplificada Ca₂O₂ -> CaO.' },
    { formula: 'Al2O3', nameSys: 'Triòxid de dialumini', nameStock: 'Òxid d\'alumini', category: 'oxids', desc: 'L\'alumini només té valència 3, a Stock no porta (III).' },
    { formula: 'FeO', nameSys: 'Monòxid de ferro', nameStock: 'Òxid de ferro(II)', category: 'oxids', desc: 'El ferro té valència +2 (es simplifica Fe₂O₂ a FeO).' },
    { formula: 'Fe2O3', nameSys: 'Triòxid de diferro', nameStock: 'Òxid de ferro(III)', category: 'oxids', desc: 'Rovell vermellós de ferro.' },
    { formula: 'Cu2O', nameSys: 'Òxid de dicoure', nameStock: 'Òxid de coure(I)', category: 'oxids', desc: 'El coure actua amb la seva valència petita (+1).' },
    { formula: 'CuO', nameSys: 'Monòxid de coure', nameStock: 'Òxid de coure(II)', category: 'oxids', desc: 'El coure actua amb la valència +2 (Cu₂O₂ -> CuO).' },
    { formula: 'CO', nameSys: 'Monòxid de carboni', nameStock: 'Òxid de carboni(II)', category: 'oxids', desc: 'Gas tòxic de combustions incompletes.' },
    { formula: 'CO2', nameSys: 'Diòxid de carboni', nameStock: 'Òxid de carboni(IV)', category: 'oxids', desc: 'Gas d\'efecte hivernacle i begudes amb gas.' },
    { formula: 'SO2', nameSys: 'Diòxid de sofre', nameStock: 'Òxid de sofre(IV)', category: 'oxids', desc: 'Gas picant de volcans i combustió de carbó.' },
    { formula: 'SO3', nameSys: 'Triòxid de sofre', nameStock: 'Òxid de sofre(VI)', category: 'oxids', desc: 'Precursor de l\'àcid sulfúric.' },
    { formula: 'Cl2O7', nameSys: 'Heptaòxid de diclor', nameStock: 'Òxid de clor(VII)', category: 'oxids', desc: 'El clor actua amb valència màxima +7.' },

    // Hidrurs
    { formula: 'NaH', nameSys: 'Hidrur de sodi', nameStock: 'Hidrur de sodi', category: 'hidrurs', desc: 'Hidrur metàl·lic (H amb càrrega -1).' },
    { formula: 'CaH2', nameSys: 'Dihidrur de calci', nameStock: 'Hidrur de calci', category: 'hidrurs', desc: 'Hidrur metàl·lic amb el calci (+2).' },
    { formula: 'FeH3', nameSys: 'Trihidrur de ferro', nameStock: 'Hidrur de ferro(III)', category: 'hidrurs', desc: 'El ferro actua amb la seva valència +3.' },
    { formula: 'HCl', nameSys: 'Clorur d\'hidrogen', nameStock: 'Àcid clorhídric (aq)', category: 'hidrurs', desc: 'Gas dissolt en aigua forma l\'àcid clorhídric (salfumant).' },
    { formula: 'HF', nameSys: 'Fluorur d\'hidrogen', nameStock: 'Àcid fluorhídric (aq)', category: 'hidrurs', desc: 'Molt corrosiu, dissol fins i tot el vidre.' },
    { formula: 'H2S', nameSys: 'Sulfur de dihidrogen', nameStock: 'Àcid sulfhídric (aq)', category: 'hidrurs', desc: 'Gas amb olor típica d\'ous podrits.' },
    { formula: 'NH3', nameSys: 'Trihidrur de nitrogen', nameStock: 'Amoníac (nom tradicional acceptat)', category: 'hidrurs', desc: 'Compost químic molt utilitzat en neteja i adobs.' },
    { formula: 'CH4', nameSys: 'Tetrahidrur de carboni', nameStock: 'Metà (nom tradicional acceptat)', category: 'hidrurs', desc: 'Gas natural que fem servir per escalfar o cuinar.' },

    // Sals binàries
    { formula: 'NaCl', nameSys: 'Clorur de sodi', nameStock: 'Clorur de sodi', category: 'sals', desc: 'Sal comuna de cuina.' },
    { formula: 'CaCl2', nameSys: 'Diclorur de calci', nameStock: 'Clorur de calci', category: 'sals', desc: 'Sal dessecant i que es llença a les carreteres per fondre neu.' },
    { formula: 'FeCl2', nameSys: 'Diclorur de ferro', nameStock: 'Clorur de ferro(II)', category: 'sals', desc: 'Sal de ferro amb valència +2.' },
    { formula: 'FeCl3', nameSys: 'Triclorur de ferro', nameStock: 'Clorur de ferro(III)', category: 'sals', desc: 'Sal de ferro amb valència +3 (òxid clòric).' },
    { formula: 'CuS', nameSys: 'Sulfur de coure', nameStock: 'Sulfur de coure(II)', category: 'sals', desc: 'Cu₂S₂ es simplifica a CuS (valències 2 i 2).' },
    { formula: 'Cu2S', nameSys: 'Sulfur de dicoure', nameStock: 'Sulfur de coure(I)', category: 'sals', desc: 'El coure actua amb valència +1.' },
    { formula: 'AlF3', nameSys: 'Trifluorur d\'alumini', nameStock: 'Fluorur d\'alumini', category: 'sals', desc: 'L\'alumini té valència +3 i el fluor -1.' },
    { formula: 'KBr', nameSys: 'Bromur de potassi', nameStock: 'Bromur de potassi', category: 'sals', desc: 'Compost format per K⁺¹ i Br⁻¹.' }
  ],

  // Banc de preguntes per al Joc / Test de 3r ESO
  questions: [
    {
      id: 1,
      type: 'formula_to_name',
      formula: 'Fe2O3',
      question: 'Com s\'anomena el compost Fe₂O₃ segons la nomenclatura de Stock?',
      options: [
        'Òxid de ferro(III)',
        'Òxid de ferro(II)',
        'Triòxid de diferro',
        'Òxid fèrric'
      ],
      correctIndex: 0,
      explanation: 'El ferro té valència +3 (creuada des de l\'oxigen Fe₂O₃). Segons Stock, s\'anomena "Òxid de ferro(III)". "Triòxid de diferro" seria la sistemàtica!'
    },
    {
      id: 2,
      type: 'formula_to_name',
      formula: 'CO2',
      question: 'Com s\'anomena el CO₂ segons la nomenclatura sistemàtica (prefixos multiplicadors)?',
      options: [
        'Diòxid de carboni',
        'Òxid de carboni(IV)',
        'Monòxid de dicarboni',
        'Àcid carbònic'
      ],
      correctIndex: 0,
      explanation: 'Té 2 àtoms d\'oxigen i 1 de carboni, per tant s\'usa el prefix "di-": Diòxid de carboni.'
    },
    {
      id: 3,
      type: 'name_to_formula',
      name: 'Monòxid de carboni',
      question: 'Quina és la fórmula química del monòxid de carboni?',
      options: ['CO', 'CO2', 'C2O', 'CH4'],
      correctIndex: 0,
      explanation: '"Mono-" indica 1 sol oxigen, per tant és CO.'
    },
    {
      id: 4,
      type: 'name_to_formula',
      name: 'Òxid de calci',
      question: 'Quina és la fórmula de l\'òxid de calci (recorda simplificar si cal)?',
      options: ['CaO', 'Ca2O', 'CaO2', 'Ca2O2'],
      correctIndex: 0,
      explanation: 'El calci té valència +2 i l\'oxigen -2: creuem valències Ca₂O₂ i simplifiquem dividint per 2 -> CaO.'
    },
    {
      id: 5,
      type: 'valency',
      element: 'Sodi (Na)',
      question: 'Quina és la valència del sodi (Na) en el compost NaCl?',
      options: ['+1', '+2', '-1', '0'],
      correctIndex: 0,
      explanation: 'El sodi és un metall alcalí (grup 1) i sempre actua amb valència +1.'
    },
    {
      id: 6,
      type: 'rule',
      question: 'Quan s\'ha d\'indicar la valència en nombres romans segons la nomenclatura de Stock?',
      options: [
        'Només quan l\'element té més d\'una valència possible',
        'Sempre, per a tots els elements',
        'Només si la fórmula té subíndex superior a 2',
        'Només en els gasos nobles'
      ],
      correctIndex: 0,
      explanation: 'Regla d\'or de la IUPAC: si l\'element té una única valència (com Na, Ca o Al), mai es posa el nombre romà.'
    },
    {
      id: 7,
      type: 'formula_to_name',
      formula: 'Al2O3',
      question: 'Quin és el nom de Stock correcte per a l\'Al₂O₃?',
      options: [
        'Òxid d\'alumini',
        'Òxid d\'alumini(III)',
        'Triòxid de dialumini',
        'Alumina pura'
      ],
      correctIndex: 0,
      explanation: 'Compte! L\'alumini només té la valència +3, per la qual cosa a la nomenclatura de Stock NO s\'hi posa (III). És directament "Òxid d\'alumini".'
    },
    {
      id: 8,
      type: 'name_to_formula',
      name: 'Trihidrur d\'alumini',
      question: 'Quina és la fórmula del trihidrur d\'alumini?',
      options: ['AlH3', 'Al3H', 'Al(OH)3', 'H3Al'],
      correctIndex: 0,
      explanation: 'El prefix "tri-" en l\'hidrogen indica 3 hidrogens: AlH₃.'
    },
    {
      id: 9,
      type: 'formula_to_name',
      formula: 'NaCl',
      question: 'Quin és el nom del compost NaCl?',
      options: [
        'Clorur de sodi',
        'Clorur de sodi(I)',
        'Monoclorur de sodi',
        'Sodiur de clor'
      ],
      correctIndex: 0,
      explanation: 'És una sal binària: l\'element no-metall acaba en "-ur" (clorur) seguit de "de sodi".'
    },
    {
      id: 10,
      type: 'formula_to_name',
      formula: 'Cu2O',
      question: 'Amb quina valència actua el coure en el compost Cu₂O?',
      options: ['+1', '+2', '+3', '-2'],
      correctIndex: 0,
      explanation: 'L\'oxigen té valència 2 (subíndex del coure Cu₂). El subíndex de l\'oxigen és 1, per tant el coure té valència +1.'
    },
    {
      id: 11,
      type: 'name_to_formula',
      name: 'Diclorur de ferro',
      question: 'Quina fórmula correspon al diclorur de ferro?',
      options: ['FeCl2', 'Fe2Cl', 'FeCl3', 'Fe2Cl3'],
      correctIndex: 0,
      explanation: '"Di-" clorur significa dos àtoms de clor: FeCl₂.'
    },
    {
      id: 12,
      type: 'formula_to_name',
      formula: 'NH3',
      question: 'Quin és el nom tradicional acceptat per la IUPAC per al compost NH₃?',
      options: ['Amoníac', 'Metà', 'Aigua', 'Ozó'],
      correctIndex: 0,
      explanation: 'El NH₃ és l\'amoníac (o trihidrur de nitrogen sistemàticament).'
    },
    {
      id: 13,
      type: 'name_to_formula',
      name: 'Diòxid de sofre',
      question: 'Quina és la fórmula del diòxid de sofre?',
      options: ['SO2', 'S2O', 'SO3', 'S2O3'],
      correctIndex: 0,
      explanation: 'Diòxid significa 2 oxígens: SO₂.'
    },
    {
      id: 14,
      type: 'formula_to_name',
      formula: 'CuO',
      question: 'Com s\'anomena el compost CuO segons la nomenclatura de Stock?',
      options: [
        'Òxid de coure(II)',
        'Òxid de coure(I)',
        'Monòxid de coure',
        'Òxid cuprós'
      ],
      correctIndex: 0,
      explanation: 'La fórmula simplificada prové de Cu₂O₂. Com que l\'oxigen sempre és -2, el coure aquí ha de ser +2. Per tant, Òxid de coure(II).'
    },
    {
      id: 15,
      type: 'rule',
      question: 'En un compost binari escrit en fórmula química (com NaCl o Fe₂O₃), quin element s\'escriu a l\'esquerra?',
      options: [
        'L\'element menys electronegatiu (més metàl·lic o catió)',
        'L\'element més electronegatiu (no-metall)',
        'Sempre l\'oxigen o hidrogen',
        'L\'element amb menor massa atòmica'
      ],
      correctIndex: 0,
      explanation: 'S\'escriu primer el més electropositiu (el metall o menys electronegatiu), i a la dreta el més electronegatiu (amb càrrega negativa).'
    },
    {
      id: 16,
      type: 'name_to_formula',
      name: 'Clorur d\'hidrogen',
      question: 'Quina és la fórmula del clorur d\'hidrogen (àcid clorhídric en solució)?',
      options: ['HCl', 'HCl2', 'H2Cl', 'ClH'],
      correctIndex: 0,
      explanation: 'L\'hidrogen té +1 i el clor té -1: HCl.'
    },
    {
      id: 17,
      type: 'formula_to_name',
      formula: 'PbO2',
      question: 'Quin és el nom de Stock del PbO₂?',
      options: [
        'Òxid de plom(IV)',
        'Òxid de plom(II)',
        'Diòxid de plom',
        'Òxid plòmbic'
      ],
      correctIndex: 0,
      explanation: 'Atenció! L\'oxigen és -2. Com que hi ha 2 oxígens, la càrrega negativa total és 2 x (-2) = -4. El plom ha de ser +4 per compensar: Òxid de plom(IV).'
    },
    {
      id: 18,
      type: 'formula_to_name',
      formula: 'CaF2',
      question: 'Quin és el nom sistemàtic de CaF₂?',
      options: [
        'Difluorur de calci',
        'Fluorur de calci',
        'Fluorur de calci(II)',
        'Difluorur de monocalci'
      ],
      correctIndex: 0,
      explanation: 'Amb prefixos: 2 fluors -> "Difluorur de calci".'
    },
    {
      id: 19,
      type: 'valency',
      element: 'Oxigen (O)',
      question: 'Quina és la valència habitual de l\'oxigen en els òxids?',
      options: ['-2', '-1', '+2', '+1'],
      correctIndex: 0,
      explanation: 'En els òxids binaris, l\'oxigen sempre té valència / nombre d\'oxidació -2.'
    },
    {
      id: 20,
      type: 'name_to_formula',
      name: 'Triòxid de sofre',
      question: 'Quina fórmula té el triòxid de sofre?',
      options: ['SO3', 'S3O', 'S2O3', 'SO6'],
      correctIndex: 0,
      explanation: 'Triòxid significa 3 àtoms d\'oxigen units al sofre: SO₃.'
    }
  ],

  // Targetes de memòria (Flashcards) per estudiar ràpidament
  flashcards: [
    { front: 'Sodi (Na)', back: 'València: +1\nMetall alcalí (grup 1). Sempre +1. Exemple: NaCl, Na₂O.' },
    { front: 'Potassi (K)', back: 'València: +1\nMetall alcalí (grup 1). Sempre +1. Exemple: KCl, K₂O.' },
    { front: 'Calci (Ca)', back: 'València: +2\nAlcalinoterri (grup 2). Sempre +2. Exemple: CaO, CaCl₂.' },
    { front: 'Magnesi (Mg)', back: 'València: +2\nAlcalinoterri (grup 2). Sempre +2. Exemple: MgO, MgH₂.' },
    { front: 'Alumini (Al)', back: 'València: +3\nGrup 13. Sempre +3 (sense nombres romans a Stock). Exemple: Al₂O₃, AlCl₃.' },
    { front: 'Ferro (Fe)', back: 'Valències: +2 i +3\nMetall de transició. Exemple: FeO (òxid de ferro(II)) i Fe₂O₃ (òxid de ferro(III)).' },
    { front: 'Coure (Cu)', back: 'Valències: +1 i +2\nExemple: Cu₂O (òxid de coure(I)) i CuO (òxid de coure(II)).' },
    { front: 'Plom (Pb)', back: 'Valències: +2 i +4\nExemple: PbO (òxid de plom(II)) i PbO₂ (òxid de plom(IV)).' },
    { front: 'Oxigen (O)', back: 'València en òxids: -2\nSempre creua el 2 al company: Fe³⁺ + O²⁻ -> Fe₂O₃.' },
    { front: 'Fluor (F), Clor (Cl), Brom (Br), Iode (I)', back: 'València en sals binàries: -1\nExemple: NaCl, KBr, CaF₂, FeI₃.' },
    { front: 'Sofre (S) en sals i hidrurs', back: 'València negativa: -2 (sulfur)\nExemple: H₂S (sulfur d\'hidrogen), FeS (sulfur de ferro(II)).' },
    { front: 'Regla del creuament', back: 'La valència del primer element passa a subíndex del segon, i la del segon al primer. Si són múltiples, es simplifiquen!' }
  ],

  // Ions per al constructor interactiu (Laboratori Virtual)
  builderCations: [
    { symbol: 'Na', name: 'Sodi', charge: 1, fixed: true },
    { symbol: 'K', name: 'Potassi', charge: 1, fixed: true },
    { symbol: 'Li', name: 'Liti', charge: 1, fixed: true },
    { symbol: 'Ag', name: 'Plata', charge: 1, fixed: true },
    { symbol: 'Ca', name: 'Calci', charge: 2, fixed: true },
    { symbol: 'Mg', name: 'Magnesi', charge: 2, fixed: true },
    { symbol: 'Zn', name: 'Zinc', charge: 2, fixed: true },
    { symbol: 'Al', name: 'Alumini', charge: 3, fixed: true },
    { symbol: 'Fe', name: 'Ferro(II)', charge: 2, fixed: false, roman: 'II' },
    { symbol: 'Fe', name: 'Ferro(III)', charge: 3, fixed: false, roman: 'III' },
    { symbol: 'Cu', name: 'Coure(I)', charge: 1, fixed: false, roman: 'I' },
    { symbol: 'Cu', name: 'Coure(II)', charge: 2, fixed: false, roman: 'II' },
    { symbol: 'Pb', name: 'Plom(II)', charge: 2, fixed: false, roman: 'II' },
    { symbol: 'Pb', name: 'Plom(IV)', charge: 4, fixed: false, roman: 'IV' }
  ],

  builderAnions: [
    { symbol: 'O', name: 'Òxid', charge: 2, type: 'oxid', stem: 'òxid' },
    { symbol: 'H', name: 'Hidrur', charge: 1, type: 'hidrur', stem: 'hidrur' },
    { symbol: 'Cl', name: 'Clorur', charge: 1, type: 'sal', stem: 'clorur' },
    { symbol: 'F', name: 'Fluorur', charge: 1, type: 'sal', stem: 'fluorur' },
    { symbol: 'Br', name: 'Bromur', charge: 1, type: 'sal', stem: 'bromur' },
    { symbol: 'I', name: 'Iodur', charge: 1, type: 'sal', stem: 'iodur' },
    { symbol: 'S', name: 'Sulfur', charge: 2, type: 'sal', stem: 'sulfur' }
  ],

  // ========================================================================
  // TEORIES ATÒMIQUES I ORBITALS ELECTRÒNICS (Currículum 3r ESO)
  // ========================================================================
  atomicTheories: [
    {
      id: 'dalton',
      name: 'Model de Dalton',
      year: '1808',
      author: 'John Dalton',
      concept: 'L\'àtom com una esfera massissa, indivisible i indestructible.',
      keyPoints: [
        'La matèria està formada per partícules minúscules i indivisibles anomenades àtoms.',
        'Els àtoms d\'un mateix element químic són absolutament idèntics en massa i propietats.',
        'Els compostos químics es formen per la unió d\'àtoms d\'elements diferents en proporcions senzilles.'
      ],
      limit: 'No podia explicar els fenòmens elèctrics (com l\'electricitat estàtica o el tub de raigs catòdics).',
      svgKey: 'daltonModel'
    },
    {
      id: 'thomson',
      name: 'Model de Thomson',
      year: '1897',
      author: 'Joseph John Thomson',
      concept: 'El model del "púding de panses" i descobriment de l\'electró.',
      keyPoints: [
        'Va descobrir l\'electró en estudiar els raigs catòdics: una partícula amb càrrega negativa present en tota la matèria.',
        'L\'àtom és una massa esfèrica uniforme de càrrega positiva.',
        'Els electrons (-) estan incrustats en aquesta massa com panses en un pastís per neutralitzar la càrrega.'
      ],
      limit: 'No podia explicar per què les partícules alfa rebotaven en l\'experiment de la làmina d\'or.',
      svgKey: 'thomsonModel'
    },
    {
      id: 'rutherford',
      name: 'Model de Rutherford',
      year: '1911',
      author: 'Ernest Rutherford',
      concept: 'Model Planetari: Nucli central diminut i escorça buida.',
      keyPoints: [
        'Experiment de la làmina d\'or: va bombardejar una làmina ultrafina d\'or amb partícules alfa (+).',
        'La gran majoria de partícules van travessar la làmina en línia recta: l\'àtom és gairebé tot espai buit!',
        'Unes poques partícules es van desviar o van rebotar: tota la càrrega positiva i gairebé tota la massa estan concentrades en un nucli central diminut.',
        'Els electrons giren al voltant del nucli en l\'escorça electrònica buida com planetes al voltant del Sol.'
      ],
      limit: 'Segons la física clàssica, un electró en gir hauria de perdre energia en forma de radiació i caure en espiral cap al nucli en una fracció de segon (inestabilitat).',
      svgKey: 'rutherfordModel'
    },
    {
      id: 'bohr',
      name: 'Model de Bohr',
      year: '1913',
      author: 'Niels Bohr',
      concept: 'Òrbites circulars d\'energia quantitzada i salts quàntics.',
      keyPoints: [
        'Els electrons només poden girar en determinades òrbites circulars permeses sense emetre energia (nivells estacionaris n = 1, 2, 3...).',
        'Cada òrbita té una energia fixa i quantitzada.',
        'Quan un electró salta d\'un nivell superior a un inferior, emet la diferència d\'energia en forma d\'un fotó de llum (explicació dels espectres atòmics discontinus).'
      ],
      limit: 'Només funcionava amb precisió matemàtica per a l\'àtom d\'hidrogen (1 sol electró).',
      svgKey: 'bohrModel'
    },
    {
      id: 'quantum',
      name: 'Model Mecanocuàntic',
      year: '1926-Actual',
      author: 'Schrödinger, Heisenberg i De Broglie',
      concept: 'D\'òrbites fixes a ORBITALS: núvols de probabilitat electrònica.',
      keyPoints: [
        'Principi d\'Incertesa de Heisenberg: és impossible conèixer simultàniament i amb precisió exacta la posició i la velocitat d\'un electró.',
        'Concepte d\'ORBITAL: regió de l\'espai al voltant del nucli on hi ha una probabilitat molt alta (superior al 90%) de trobar l\'electró.',
        'Orbitals s (esfèrics), p (forma de dos lòbuls), d (trèvol de quatre lòbuls) i f.'
      ],
      limit: 'És el model físic vigent i base de tota la química moderna.',
      svgKey: 'quantumOrbitalModel'
    }
  ],

  // Exercicis interactius d'orbitals i teories atòmiques (CADA UN AMB LA SEVA IMATGE)
  atomicExercises: [
    {
      id: 'at-1',
      title: 'Experiment de la Làmina d\'Or',
      imageKey: 'exRutherfordGoldFoil',
      question: 'En l\'experiment de Rutherford, la gran majoria de partícules alfa van travessar la làmina d\'or sense desviar-se. Quina conclusió fonamental se\'n deriva?',
      options: [
        'L\'àtom està pràcticament buit i la massa positiva està concentrada en un nucli diminut',
        'Els àtoms d\'or no tenen càrrega elèctrica i són esferes massisses com boles de billar',
        'Els electrons són tan pesants que repel·leixen totes les partícules alfa',
        'La massa de l\'àtom està repartida homogèniament per tota l\'esfera com un púding'
      ],
      correctIndex: 0,
      explanation: 'Exacte! Si la matèria fos compacta com proposava Thomson, les partícules haurien xocat. El fet que el 99,9% travessessin netament va demostrar que l\'àtom és quasi tot espai buit amb un nucli central ultraminúscul i pesat.'
    },
    {
      id: 'at-2',
      title: 'El Salt Quàntic de Bohr',
      imageKey: 'exBohrQuantumJump',
      question: 'Segons el model de Bohr, què passa exactament quan un electró cau d\'un nivell n = 3 a un nivell n = 2?',
      options: [
        'Emet energia en forma d\'un fotó de llum (ona electromagnètica)',
        'Absorbeix energia de l\'exterior i s\'atura al nucli',
        'Canvia la seva càrrega de negativa a positiva',
        'Es transforma en un neutró dins de l\'escorça'
      ],
      correctIndex: 0,
      explanation: 'Molt bé! En caure a un nivell més proper al nucli (menys energètic), l\'energia sobrant s\'allibera en forma d\'un paquet de llum o fotó (E = h·ν). Això explica els colors preciosos dels focs artificials i els espectres d\'emissió!'
    },
    {
      id: 'at-3',
      title: 'Forma i Orientació dels Orbitals p',
      imageKey: 'exOrbitalsPXYZ',
      question: 'Quants orbitals de tipus p existeixen en un mateix nivell energètic i quants electrons poden allotjar en total?',
      options: [
        '3 orbitals (px, py, pz) que allotgen fins a un màxim de 6 electrons (2 cadascun)',
        '1 sol orbital esfèric que allotja 2 electrons',
        '5 orbitals que allotgen fins a 10 electrons',
        '4 orbitals que allotgen 8 electrons'
      ],
      correctIndex: 0,
      explanation: 'Correcte! Els orbitals p tenen forma de dos lòbuls units pel centre i s\'orienten en els tres eixos de l\'espai (X, Y, Z). Com que cada orbital admet com a màxim 2 electrons (amb espins oposats), 3 × 2 = 6 electrons en total.'
    },
    {
      id: 'at-4',
      title: 'Configuració del Clor (Z = 17)',
      imageKey: 'exChlorineConfig',
      question: 'El clor té número atòmic Z = 17 (1s² 2s² 2p⁶ 3s² 3p⁵). Quants electrons té a la seva capa de valència (l\'últim nivell, n = 3)?',
      options: [
        '7 electrons (2 en el 3s i 5 en el 3p)',
        '5 electrons (només els del 3p)',
        '17 electrons a la mateixa capa',
        '8 electrons formant un octet perfecte'
      ],
      correctIndex: 0,
      explanation: 'Genial! La capa de valència és el nivell més extern (n = 3): 3s² + 3p⁵ = 7 electrons de valència. Per això el clor només necessita GUANYAR 1 electró per arribar a 8 (octet estable) i actua amb valència -1 com a clorur (Cl⁻)!'
    },
    {
      id: 'at-5',
      title: 'Descobriment de l\'Electró (Thomson)',
      imageKey: 'exThomsonElectron',
      question: 'Quina observació clau va permetre a J.J. Thomson demostrar que els raigs catòdics estaven formats per partícules amb càrrega negativa?',
      options: [
        'El raig es desviava cap a la placa positiva (+) en aplicar un camp elèctric',
        'El raig travessava blocs massissos de plom sense frenar',
        'El tub emetia llum verda sense necessitat d\'electricitat',
        'Les partícules rebotaven cap al càtode amb més velocitat'
      ],
      correctIndex: 0,
      explanation: 'Molt bé! Com que càrregues de signe oposat s\'atreuen, el fet que el feix de partícules es corbés cap a la placa positiva (+) va ser la prova definitiva que els electrons tenen càrrega elèctrica negativa.'
    },
    {
      id: 'at-6',
      title: 'Regla de Hund i Caixes d\'Orbitals',
      imageKey: 'exHundRule',
      question: 'Segons la regla de màxima multiplicitat de Hund, com s\'han d\'omplir tres orbitals p quan tenim 3 electrons disponibles?',
      options: [
        'Es col·loca un sol electró a cada caixa (px, py, pz) amb el mateix espín abans d\'aparellar-los',
        'S\'omple primer la caixa px amb 2 electrons i el tercer a la py',
        'Tots 3 electrons es fiquen a la mateixa caixa px',
        'Els electrons s\'aparellen sempre per ordre alfabètic amb espins contraris'
      ],
      correctIndex: 0,
      explanation: 'Exacte! Imagina un autobús buit: la gent prefereix seure primer en seients individuals abans de compartir seient amb un desconegut. Els electrons es repel·leixen entre ells i ocupen primer orbitals separats amb espins paral·lels!'
    }
  ],

  // ========================================================================
  // SUBNIVELLS DE MOELLER FINS A Z = 86 (Radó)
  // ========================================================================
  moellerSubshells: [
    { id: '1s', n: 1, l: 's', max: 2, cumulative: 2, nobleGas: 'He' },
    { id: '2s', n: 2, l: 's', max: 2, cumulative: 4 },
    { id: '2p', n: 2, l: 'p', max: 6, cumulative: 10, nobleGas: 'Ne' },
    { id: '3s', n: 3, l: 's', max: 2, cumulative: 12 },
    { id: '3p', n: 3, l: 'p', max: 6, cumulative: 18, nobleGas: 'Ar' },
    { id: '4s', n: 4, l: 's', max: 2, cumulative: 20 },
    { id: '3d', n: 3, l: 'd', max: 10, cumulative: 30 },
    { id: '4p', n: 4, l: 'p', max: 6, cumulative: 36, nobleGas: 'Kr' },
    { id: '5s', n: 5, l: 's', max: 2, cumulative: 38 },
    { id: '4d', n: 4, l: 'd', max: 10, cumulative: 48 },
    { id: '5p', n: 5, l: 'p', max: 6, cumulative: 54, nobleGas: 'Xe' },
    { id: '6s', n: 6, l: 's', max: 2, cumulative: 56 },
    { id: '4f', n: 4, l: 'f', max: 14, cumulative: 70 },
    { id: '5d', n: 5, l: 'd', max: 10, cumulative: 80 },
    { id: '6p', n: 6, l: 'p', max: 6, cumulative: 86, nobleGas: 'Rn' }
  ],

  // ========================================================================
  // BANC D'EXERCICIS DE CONFIGURACIÓ ELECTRÒNICA AMB DIAGRAMA DE MOELLER (FINS A Z = 86)
  // ========================================================================
  moellerExercises: [
    {
      id: 'moeller-1',
      title: 'Brom (Z = 35) - Càlcul de València amb Moeller',
      element: 'Brom (Br, Z = 35)',
      imageKey: 'exMoellerBromine',
      question: 'Seguint el diagrama de Moeller, quina és la configuració electrònica completa del Brom (Z = 35) i quants electrons té a la capa de valència?',
      options: [
        '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ (7 electrons de valència al nivell n = 4)',
        '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s⁵ (5 electrons de valència)',
        '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 4p¹⁵ (17 electrons de valència)',
        '[Ar] 4s² 4d¹⁰ 4p⁵ (15 electrons de valència)'
      ],
      correctIndex: 0,
      explanation: 'Segons Moeller, després de 3p⁶ s\'omple el 4s², després el 3d¹⁰ i finalment el 4p⁵. Els electrons de valència són els del nivell més alt (n = 4): 4s² + 4p⁵ = 7 electrons. Com que és un halogen, només necessita guanyar 1 e⁻ per completar l\'octet i actua amb valència -1 com a bromur (Br⁻)!'
    },
    {
      id: 'moeller-2',
      title: 'Plata (Z = 47) - Notació Abreviada i Bloc d',
      element: 'Plata (Ag, Z = 47)',
      imageKey: 'exMoellerSilver',
      question: 'Per al metall de transició Plata (Z = 47), quina és la seva configuració abreujada amb el gas noble precedent (Criptó, Z = 36) seguint el diagrama de Moeller?',
      options: [
        '[Kr] 5s¹ 4d¹⁰ (subnivell d complet de màxima estabilitat)',
        '[Ar] 4s² 3d¹⁰ 4p⁶ 5s⁹',
        '[Xe] 5s² 4d⁹',
        '[Kr] 4d¹¹'
      ],
      correctIndex: 0,
      explanation: 'El Criptó [Kr] compta els primers 36 electrons. Segons Moeller, els 11 electrons restants van als subnivells 5s i 4d. Com que un subnivell d completament ple (4d¹⁰) confereix una estabilitat quàntica excepcional, un electró del 5s passa al 4d quedant en [Kr] 5s¹ 4d¹⁰!'
    },
    {
      id: 'moeller-3',
      title: 'Bari (Z = 56) - La 6a Diagonal de Moeller',
      element: 'Bari (Ba, Z = 56)',
      imageKey: 'exMoellerBarium',
      question: 'En el diagrama de Moeller, quan s\'ha omplert l\'orbital 5p⁶ (que arriba al Xenó, Z = 54), quin és el següent orbital que s\'omple per al Bari (Z = 56)?',
      options: [
        'L\'orbital 6s (omplint-se com a 6s²)',
        'L\'orbital 4f (omplint-se com a 4f²)',
        'L\'orbital 5d (omplint-se com a 5d²)',
        'L\'orbital 6p (omplint-se com a 6p²)'
      ],
      correctIndex: 0,
      explanation: 'Molt important a Moeller! La 6a fletxa diagonal passa per 4d ➔ 5p ➔ 6s. Per tant, immediatament després de 5p⁶ s\'omple el 6s², donant [Xe] 6s². Com que té 2 electrons a l\'últim nivell (n = 6), el bari és un metall alcalinoterri (grup 2) amb valència fixa +2 (Ba²⁺)!'
    },
    {
      id: 'moeller-4',
      title: 'Or (Z = 79) - Entrada del Subnivell 4f',
      element: 'Or (Au, Z = 79)',
      imageKey: 'exMoellerGold',
      question: 'L\'àtom d\'Or té número atòmic Z = 79. Quants electrons té allotjats en el subnivell 4f que s\'omple segons la 7a diagonal de Moeller?',
      options: [
        '14 electrons (el subnivell 4f està completament ple: 4f¹⁴)',
        '10 electrons (el subnivell només allotja 4f¹⁰)',
        'Cap electró, perquè l\'or no arriba a omplir els orbitals f',
        '7 electrons (4f⁷)'
      ],
      correctIndex: 0,
      explanation: 'A la 7a diagonal de Moeller, després de 6s s\'entra al bloc dels lantanoides omplint completament el subnivell 4f amb els seus 14 electrons (4f¹⁴). Després s\'omple el 5d. Per tant, la configuració de l\'Or és [Xe] 6s¹ 4f¹⁴ 5d¹⁰ (54 + 1 + 14 + 10 = 79 electrons)!'
    },
    {
      id: 'moeller-5',
      title: 'Plom (Z = 82) - Deducció de les Valències +2 i +4',
      element: 'Plom (Pb, Z = 82)',
      imageKey: 'exMoellerLead',
      question: 'El plom té Z = 82 ([Xe] 6s² 4f¹⁴ 5d¹⁰ 6p²). Quants electrons té a la seva capa de valència (el nivell més extern, n = 6) i quines són les seves valències típiques?',
      options: [
        '4 electrons de valència (6s² + 6p²), per això té valències +2 i +4',
        '14 electrons de valència (els de l\'orbital 4f¹⁴)',
        '2 electrons de valència (només els de l\'orbital 6p²)',
        '10 electrons de valència (els de l\'orbital 5d¹⁰)'
      ],
      correctIndex: 0,
      explanation: 'La capa de valència és el nivell quàntic principal més alt, que aquí és n = 6: 6s² + 6p² = 4 electrons de valència. En reaccionar, pot perdre els 2 electrons p (valència +2, com a PbO) o tots 4 electrons s i p (valència +4, com a PbO₂). La connexió entre Moeller i la formulació és total!'
    },
    {
      id: 'moeller-6',
      title: 'Radó (Z = 86) - El Tancament del Període 6',
      element: 'Radó (Rn, Z = 86)',
      imageKey: 'exMoellerRadon',
      question: 'El Radó (Z = 86) és l\'últim element del període 6. Quina és la seva configuració electrònica completa i per què és un gas noble?',
      options: [
        '[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶, perquè té l\'última capa n = 6 amb 8 electrons completant l\'octet',
        '[Xe] 6s² 5d¹⁰ 6p⁴ amb 6 electrons de valència',
        '[Kr] 5s² 4d¹⁰ 5p⁶ 6s² 6p⁶',
        '[Xe] 4f¹⁴ 5d¹⁰ 6d⁸'
      ],
      correctIndex: 0,
      explanation: 'Exacte! El radó (Z = 86) omple completament l\'orbital 6p amb 6 electrons. La seva capa externa n = 6 té 6s² 6p⁶ = 8 electrons (octet complet). En completar la 7a diagonal de Moeller, tanca el període 6 amb la màxima estabilitat com a gas noble!'
    }
  ],

  // ========================================================================
  // APARTAT DE REFORÇ (Per a alumnes que tenen dificultats a 3r d'ESO)
  // ========================================================================
  reinforcement: {
    topErrors: [
      {
        num: 1,
        title: 'Posar nombres romans a elements de valència única',
        wrong: 'Òxid de sodi(I) o Òxid d\'alumini(III)',
        right: 'Òxid de sodi o Òxid d\'alumini',
        rule: 'Si l\'element només té una valència a la taula periòdica (com Na, K, Ca, Mg, Al, Zn, Ag), la IUPAC prohibeix terminantment posar el nombre romà a Stock.'
      },
      {
        num: 2,
        title: 'Oblidar simplificar la fórmula química',
        wrong: 'Ca₂O₂ o Pb₂O₄',
        right: 'CaO o PbO₂',
        rule: 'Sempre que tots els subíndexs es puguin dividir per 2 (o per 3), s\'han de simplificar obligatòriament a la seva fracció irreductible.'
      },
      {
        num: 3,
        title: 'Invertir l\'ordre en escriure la fórmula',
        wrong: 'ClNa o O₂C',
        right: 'NaCl o CO₂',
        rule: 'S\'escriu SEMPRE primer el metall o element més positiu (esquerra) i després el no-metall o oxigen (dreta).'
      },
      {
        num: 4,
        title: 'Confondre prefixos multiplicadors amb Stock',
        wrong: 'Diòxid de carboni(IV) (barreja incoherent!)',
        right: 'Diòxid de carboni (Sistemàtica) O BÉ Òxid de carboni(IV) (Stock)',
        rule: 'O fas servir prefixos (di-, tri-...) o fas servir nombres romans. Mai barregis les dues nomenclatures en una mateixa frase!'
      },
      {
        num: 5,
        title: 'Inventar terminacions en -ur per a l\'oxigen',
        wrong: 'Oxigur de calci o Oxidur de ferro',
        right: 'Òxid de calci o Òxid de ferro',
        rule: 'L\'oxigen mai acaba en -ur en català; el seu grup funcional es diu simplement ÒXID.'
      }
    ],

    // Exercicis guiats de reforç (CADA UN AMB LA SEVA IMATGE)
    exercises: [
      {
        id: 'ref-1',
        title: 'Balança elèctrica: Òxid de Calci',
        imageKey: 'refBalanceCharges',
        statement: 'Volem formar el compost entre el calci (Ca, valència +2) i l\'oxigen (O, valència -2). Escriu la seva fórmula pas a pas.',
        hint: 'Creua les valències com a subíndexs: Ca₂O₂. Es poden dividir els dos números per 2?',
        steps: [
          'Pas 1: Identifiquem les càrregues dels ions: Ca²⁺ i O²⁻.',
          'Pas 2: Creuem les valències sense signe: Ca₂O₂.',
          'Pas 3: Com que tots dos subíndexs són 2, simplifiquem dividint per 2: CaO.',
          'Pas 4: Nom de Stock: Òxid de calci (sense romans perquè el calci només té valència 2).'
        ],
        solutionFormula: 'CaO',
        solutionName: 'Òxid de calci (o monòxid de calci)'
      },
      {
        id: 'ref-2',
        title: 'Distingir valències: FeCl₂ vs FeCl₃',
        imageKey: 'refIronChlorides',
        statement: 'Observa aquests dos compostos de ferro i clor: FeCl₂ i FeCl₃. Quina valència té el ferro en cadascun segons la nomenclatura de Stock?',
        hint: 'Recorda que el clor en les sals binàries sempre té valència -1 (Cl⁻). El subíndex del clor prové directament del ferro!',
        steps: [
          'A FeCl₂: Hi ha 2 clors amb càrrega -1 cadascun (-2 en total). El ferro ha de ser +2 per compensar. Per tant: Clorur de ferro(II).',
          'A FeCl₃: Hi ha 3 clors amb càrrega -1 cadascun (-3 en total). El ferro ha de ser +3 per compensar. Per tant: Clorur de ferro(III).'
        ],
        solutionFormula: 'FeCl₂: ferro(II) | FeCl₃: ferro(III)',
        solutionName: 'Clorur de ferro(II) i Clorur de ferro(III)'
      },
      {
        id: 'ref-3',
        title: 'Cassa l\'error: "Òxid de sodi(I)"',
        imageKey: 'refNoRomanWarning',
        statement: 'Un company de classe ha escrit a l\'examen que la fòrmula Na₂O s\'anomena "Òxid de sodi(I)". Per què el professor li ha marcat una falta?',
        hint: 'Busca el sodi (Na) a la taula periòdica. Quantes valències diferents pot tenir?',
        steps: [
          'El sodi (Na) pertany al grup 1 (alcalins) i té ÚNICAMENT una sola valència: +1.',
          'Regla oficial IUPAC: Si no hi ha possible confusió perquè només té una valència, el nombre romà és redundant i està prohibit.',
          'La resposta correcta és simplement "Òxid de sodi" (a Stock) o "Òxid de disodi" (en sistemàtica).'
        ],
        solutionFormula: 'Na₂O',
        solutionName: 'Òxid de sodi (sense cap nombre romà!)'
      },
      {
        id: 'ref-4',
        title: 'El plom misteriós a PbO₂',
        imageKey: 'refLeadOxidePuzzle',
        statement: 'Com s\'anomena el PbO₂ a la nomenclatura de Stock? Compte amb la simplificació oculta!',
        hint: 'L\'oxigen SEMPRE val -2. Si hi ha 2 oxígens a la fórmula, quina és la càrrega negativa total?',
        steps: [
          'Cada oxigen té valència -2: tenim 2 àtoms d\'oxigen → 2 × (-2) = -4 càrregues negatives.',
          'Com que només hi ha 1 àtom de plom (Pb), ha de compensar totes les càrregues negatives: Pb = +4.',
          'La fórmula no simplificada era Pb₂O₄, que es va dividir per 2 quedant en PbO₂.',
          'Per tant, el plom actua amb valència IV: Òxid de plom(IV).'
        ],
        solutionFormula: 'PbO₂',
        solutionName: 'Òxid de plom(IV) (Stock) o Diòxid de plom (Sistemàtica)'
      }
    ]
  },

  // ========================================================================
  // APARTAT D'AMPLIACIÓ (Compostos ternaris i pont cap a 4t d'ESO)
  // ========================================================================
  extension: {
    topics: [
      {
        title: 'Hidròxids (Bases)',
        desc: 'Compostos ternaris formats per un metall unit al grup hidròxid (OH)⁻ que té càrrega total -1.',
        rules: 'S\'escriu el metall i entre parèntesis el grup (OH) amb el subíndex de la valència del metall. Exemples: NaOH (hidròxid de sodi), Ca(OH)₂ (hidròxid de calci), Fe(OH)₃ (hidròxid de ferro(III)).',
        application: 'Són compostos molt bàsics com la sosa càustica (NaOH) per desembussar o el Ca(OH)₂ a la construcció.'
      },
      {
        title: 'Peròxids (Enllaç peroxo)',
        desc: 'Compostos on dos àtoms d\'oxigen estan units entre si formant l\'anió peròxid (O₂)²⁻, on cada oxigen té un estat d\'oxidació de -1.',
        rules: 'MOLT IMPORTANT: El subíndex 2 de l\'oxigen NO es pot simplificar perquè forma part del pont peroxo. Exemple famós: H₂O₂ (peròxid d\'hidrogen o aigua oxigenada).',
        application: 'Desinfectant de ferides, blanquejador dental i oxidant en química industrial.'
      },
      {
        title: 'Introducció als Oxoàcids i Oxisals',
        desc: 'Compostos d\'Hidrogen + No-metall + Oxigen (àcids) o Metall + No-metall + Oxigen (oxisals).',
        rules: 'Són els àcids més famosos de la química: H₂SO₄ (àcid sulfúric), HNO₃ (àcid nítric), H₂CO₃ (àcid carbònic). Quan perden els hidrogens i s\'uneixen a metalls formen sals com el CaCO₃ (carbonat de calci).',
        application: 'Present a les bateries de cotxe (H₂SO₄), a les closques dels mol·luscs i roques calcàries (CaCO₃).'
      }
    ],

    // Exercicis de repte d'ampliació (CADA UN AMB LA SEVA IMATGE)
    exercises: [
      {
        id: 'amp-1',
        title: 'Llet de Magnèsia: Hidròxid de Magnesi',
        imageKey: 'ampHydroxideIon',
        statement: 'Formular l\'hidròxid de magnesi (usat habitualment a farmàcia com a antiàcid d\'estómac). El magnesi té valència +2 i el grup hidròxid té càrrega (OH)⁻¹.',
        hint: 'El grup (OH) es posa entre parèntesis si el subíndex és superior a 1.',
        steps: [
          'Catió: Mg²⁺ | Anió: (OH)⁻¹',
          'Creuem valències: el 1 de l\'hidròxid va al magnesi i el 2 del magnesi va a tot el grup (OH).',
          'Fórmula: Mg(OH)₂.',
          'Nomenclatura sistemàtica: Dihidròxid de magnesi. Nomenclatura de Stock: Hidròxid de magnesi.'
        ],
        solutionFormula: 'Mg(OH)₂',
        solutionName: 'Dihidròxid de magnesi / Hidròxid de magnesi'
      },
      {
        id: 'amp-2',
        title: 'El secret de l\'Aigua Oxigenada (H₂O₂)',
        imageKey: 'ampPeroxideBond',
        statement: 'Per què la fórmula de l\'aigua oxigenada s\'escriu H₂O₂ i no es simplifica mai a HO?',
        hint: 'Fixa\'t en l\'enllaç peroxo: els dos àtoms d\'oxigen estan units químicament entre ells com una sola unitat (O₂)²⁻.',
        steps: [
          'En els peròxids, la unitat bàsica és l\'ió peròxid (O₂)²⁻.',
          'Si simplifiquéssim a HO trencaríem conceptualment l\'enllaç oxigen-oxigen (-O-O-) que defineix la molècula.',
          'Per tant, H₂O₂ s\'ha d\'escriure sempre amb els dos subíndexs 2 intactes.'
        ],
        solutionFormula: 'H₂O₂',
        solutionName: 'Peròxid d\'hidrogen (Aigua oxigenada)'
      },
      {
        id: 'amp-3',
        title: 'Estat d\'oxidació del Sofre a l\'Àcid Sulfúric (H₂SO₄)',
        imageKey: 'ampSulfuricAcid',
        statement: 'A la molècula d\'àcid sulfúric H₂SO₄, calcula amb quin estat d\'oxidació actua l\'àtom central de sofre (S).',
        hint: 'Recorda: cada H té estat +1, cada O té estat -2, i la suma total de tots els àtoms ha de ser exactament 0.',
        steps: [
          'Contribució dels 2 Hidrogens: 2 × (+1) = +2.',
          'Contribució dels 4 Oxígens: 4 × (-2) = -8.',
          'Equació de neutralitat: (+2) + (Sofre) + (-8) = 0.',
          'Aïllem: Sofre = +8 - 2 = +6.',
          'Per tant, el sofre actua amb el seu estat d\'oxidació màxim: +6!'
        ],
        solutionFormula: 'S = +6',
        solutionName: 'Estat d\'oxidació +6 del Sofre'
      },
      {
        id: 'amp-4',
        title: 'El Carbonat de Calci (CaCO₃) a la natura',
        imageKey: 'ampCalciumCarbonate',
        statement: 'El marbre, les closques de cloïsses i les estalactites estan fets de CaCO₃. Identifica el metall, el catió i l\'anió oxoanió que formen aquesta sal.',
        hint: 'El metall és el calci (+2) i l\'anió és el grup carbonat (CO₃)²⁻.',
        steps: [
          'Catió metàl·lic: Ca²⁺ (ió calci, metall alcalinoterri).',
          'Anió poliatòmic: (CO₃)²⁻ (ió carbonat, procedent de l\'àcid carbònic H₂CO₃).',
          'La unió Ca²⁺ + (CO₃)²⁻ forma una xarxa cristal·lina sòlida molt resistent i poc soluble en aigua: CaCO₃.'
        ],
        solutionFormula: 'CaCO₃',
        solutionName: 'Carbonat de calci'
      }
    ]
  },

  // ========================================================================
  // LLICÈNCIES I DRETS D'AUTOR (Copyright & Legal)
  // ========================================================================
  legal: {
    ccLicense: 'Creative Commons Reconeixement-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0)',
    softwareLicense: 'Llicència de Codi Obert MIT (MIT License)',
    authorship: 'Projecte Educatiu QuimiESO 3r',
    institution: 'Adaptat al Currículum Oficial de Física i Química de 3r d\'ESO (Departament d\'Educació de la Generalitat de Catalunya / LOMLOE)',
    iupacReference: 'Nomenclatura oficial basada en la IUPAC (International Union of Pure and Applied Chemistry - Red Book 2005)',
    permissions: [
      'Ús educatiu lliure i gratuït a totes les aules, instituts i centres escolars.',
      'Permesa la còpia, distribució i adaptació del material sempre que se\'n reconegui l\'autoria.',
      'Prohibit qualsevol ús comercial o amb finalitats lucratives d\'aquests continguts.',
      'Si modifiqueu o creeu a partir d\'aquest recurs, heu de compartir la vostra obra sota la mateixa llicència.'
    ]
  }
};

// Funció d'utilitat per al màxim comú divisor (per simplificar fòrmules)
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Funció per calcular el compost a partir de catió i anió
function buildCompound(cation, anion) {
  let subCation = anion.charge;
  let subAnion = cation.charge;

  const divisor = gcd(subCation, subAnion);
  const simpCation = subCation / divisor;
  const simpAnion = subAnion / divisor;

  // Generar fórmula amb format HTML (subíndexs)
  const catText = cation.symbol + (simpCation > 1 ? `<sub>${simpCation}</sub>` : '');
  const anText = anion.symbol + (simpAnion > 1 ? `<sub>${simpAnion}</sub>` : '');
  const rawFormula = cation.symbol + (simpCation > 1 ? simpCation : '') + anion.symbol + (simpAnion > 1 ? simpAnion : '');
  const htmlFormula = catText + anText;

  // Prefixos
  const prefixMap = ['', '', 'di', 'tri', 'tetra', 'penta', 'hexa', 'hepta'];
  const anPrefix = simpAnion > 1 ? prefixMap[simpAnion] : (simpAnion === 1 && anion.type === 'oxid' && simpCation === 1 ? 'mon' : '');
  const catPrefix = simpCation > 1 ? prefixMap[simpCation] : '';

  // Nomenclatura Sistemàtica (prefixos)
  let sysAnionName = '';
  if (anion.type === 'oxid') {
    sysAnionName = simpAnion === 1 ? (simpCation === 1 ? 'Monòxid' : 'Òxid') : (prefixMap[simpAnion] + 'òxid');
  } else if (anion.type === 'hidrur') {
    sysAnionName = (simpAnion > 1 ? prefixMap[simpAnion] : '') + 'hidrur';
  } else {
    sysAnionName = (simpAnion > 1 ? prefixMap[simpAnion] : '') + anion.stem;
  }
  // Capitalitzar primera lletra
  sysAnionName = sysAnionName.charAt(0).toUpperCase() + sysAnionName.slice(1);

  let sysCationPart = cation.name.split('(')[0].toLowerCase();
  // Casos apostrofats: d'alumini, d'hidrogen...
  let prep = (sysCationPart.startsWith('a') || sysCationPart.startsWith('e') || sysCationPart.startsWith('i') || sysCationPart.startsWith('o') || sysCationPart.startsWith('u')) && !catPrefix ? "d'" : "de ";
  let fullSysCation = catPrefix ? 'de ' + catPrefix + sysCationPart : prep + sysCationPart;
  const nameSystematic = `${sysAnionName} ${fullSysCation}`;

  // Nomenclatura de Stock
  let stockAnion = anion.stem.charAt(0).toUpperCase() + anion.stem.slice(1);
  let baseCationName = cation.name.split('(')[0].toLowerCase();
  let catPrep = (baseCationName.startsWith('a') || baseCationName.startsWith('e') || baseCationName.startsWith('i') || baseCationName.startsWith('o') || baseCationName.startsWith('u')) ? "d'" : "de ";

  let nameStock = '';
  if (cation.fixed) {
    nameStock = `${stockAnion} ${catPrep}${baseCationName}`;
  } else {
    nameStock = `${stockAnion} ${catPrep}${baseCationName}(${cation.roman})`;
  }

  return {
    rawFormula,
    htmlFormula,
    subCation,
    subAnion,
    simpCation,
    simpAnion,
    simplified: divisor > 1,
    divisor,
    nameSystematic,
    nameStock
  };
}
