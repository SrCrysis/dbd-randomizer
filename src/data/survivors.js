// survivors.js — Todos los supervivientes de Dead by Daylight
// Cada personaje tiene 3 perks únicas + isDefault indica si viene en el juego base
// Las perks generales (teachable para todos) van en perks.js por separado

export const survivors = [
  // ═══════════════════════════════════════
  // SUPERVIVIENTES BASE (incluidos sin DLC)
  // ═══════════════════════════════════════
  {
    id: 'dwight',
    name: 'Dwight Fairfield',
    isDefault: true,
    perks: [
      { id: 'bond', name: 'Bond', desc: 'Ves las auras de los supervivientes cercanos a 20/28/36m.' },
      { id: 'prove_thyself', name: 'Prove Thyself', desc: 'Reparar con otros supervivientes te da +15% de velocidad.' },
      { id: 'leader', name: 'Leader', desc: 'Supervivientes a 8m se benefician de +15% de velocidad en acciones.' },
    ]
  },
  {
    id: 'meg',
    name: 'Meg Thomas',
    isDefault: true,
    perks: [
      { id: 'adrenaline', name: 'Adrenaline', desc: 'Al completar todos los gens, te curas y ganas Haste por 3s.' },
      { id: 'quick_quiet', name: 'Quick & Quiet', desc: 'Los saltos por ventanas son silenciosos.' },
      { id: 'sprint_burst', name: 'Sprint Burst', desc: 'Al correr, ganas 150% de Haste por 3s. Exhausted 60/50/40s.' },
    ]
  },
  {
    id: 'claudette',
    name: 'Claudette Morel',
    isDefault: true,
    perks: [
      { id: 'botany', name: 'Botany Knowledge', desc: 'Curar a otros supervivientes un 22/33/44% más rápido.' },
      { id: 'empathy', name: 'Empathy', desc: 'Ves las auras de supervivientes heridos a 64/96/128m.' },
      { id: 'self_care', name: 'Self-Care', desc: 'Puedes curarte sin kit médico al 50% de velocidad.' },
    ]
  },
  {
    id: 'jake',
    name: 'Jake Park',
    isDefault: true,
    perks: [
      { id: 'calm_spirit', name: 'Calm Spirit', desc: 'Los cuervos no te alertan y los gritos tienen 75% menos probabilidad.' },
      { id: 'iron_will', name: 'Iron Will', desc: 'Tus gemidos de dolor son 50/75/100% más silenciosos.' },
      { id: 'saboteur', name: 'Saboteur', desc: 'Puedes sabotear ganchos sin kit de herramientas.' },
    ]
  },
  {
    id: 'nea',
    name: 'Nea Karlsson',
    isDefault: true,
    perks: [
      { id: 'balanced_landing', name: 'Balanced Landing', desc: 'Al caer, ganas Haste por 3s y el stagger se reduce.' },
      { id: 'urban_evasion', name: 'Urban Evasion', desc: 'La velocidad de crouch se incrementa.' },
      { id: 'streetwise', name: 'Streetwise', desc: 'Las cargas de tus objetos duran más.' },
    ]
  },
  {
    id: 'laurie',
    name: 'Laurie Strode',
    isDefault: false,
    perks: [
      { id: 'decisive_strike', name: 'Decisive Strike', desc: 'Tras ser desenganchado, un mini juego te libera del asesino.' },
      { id: 'sole_survivor', name: 'Sole Survivor', desc: 'Cada superviviente muerto aumenta tu velocidad de acción.' },
      { id: 'object_obsession', name: 'Object of Obsession', desc: 'Compartes visión de aura con el asesino cuando éste te mira.' },
    ]
  },
  {
    id: 'ace',
    name: 'Ace Visconti',
    isDefault: false,
    perks: [
      { id: 'ace_in_hole', name: 'Ace in the Hole', desc: 'Los cofres siempre tienen add-ons y los conservas al escapar.' },
      { id: 'open_handed', name: 'Open-Handed', desc: 'Aumenta el rango de todos los efectos de aura en +4/6/8m.' },
      { id: 'up_the_ante', name: 'Up the Ante', desc: 'Por cada superviviente vivo, ganas 1/2/3% de suerte.' },
    ]
  },
  {
    id: 'bill',
    name: 'Bill Overbeck',
    isDefault: false,
    perks: [
      { id: 'borrowed_time', name: 'Borrowed Time', desc: 'El superviviente que desenganchas gana Deep Wound por 10/12/15s.' },
      { id: 'left_behind', name: 'Left Behind', desc: 'Siendo el último, ves el aura de la salida.' },
      { id: 'unbreakable', name: 'Unbreakable', desc: 'Puedes levantarte del suelo una vez por partida.' },
    ]
  },
  {
    id: 'feng',
    name: 'Feng Min',
    isDefault: false,
    perks: [
      { id: 'alert', name: 'Alert', desc: 'Ves el aura del asesino cuando rompe pallets/ventanas.' },
      { id: 'lithe', name: 'Lithe', desc: 'Tras saltar una ventana, ganas Haste por 3s. Exhausted 60/50/40s.' },
      { id: 'technician', name: 'Technician', desc: 'Los fallos de gen hacen menos ruido y no alertan al asesino.' },
    ]
  },
  {
    id: 'david',
    name: 'David King',
    isDefault: false,
    perks: [
      { id: 'dead_hard', name: 'Dead Hard', desc: 'Presiona botón activo para un dash invulnerable. Exhausted 40s.' },
      { id: 'we_re_gonna_live', name: "We're Gonna Live Forever", desc: 'Acciones valientes generan tokens para Bloodpoints.' },
      { id: 'no_mither', name: 'No Mither', desc: 'Empiezas herido pero tus gemidos son silenciosos y te puedes levantar.' },
    ]
  },
  {
    id: 'quentin',
    name: 'Quentin Smith',
    isDefault: false,
    perks: [
      { id: 'pharmacy', name: 'Pharmacy', desc: 'Abres cofres silenciosamente y el primero siempre da un med-kit.' },
      { id: 'resilience', name: 'Resilience', desc: 'Herido, todas tus acciones son 9% más rápidas.' },
      { id: 'wake_up', name: 'Wake Up!', desc: 'Al activarse las salidas, abre puertas y se ven tus auras.' },
    ]
  },
  {
    id: 'detective_tapp',
    name: 'Detective Tapp',
    isDefault: false,
    perks: [
      { id: 'tenacity', name: 'Tenacity', desc: 'Puedes arrastrarte más rápido y dejas menos charcos de sangre.' },
      { id: 'detective_hunch', name: "Detective's Hunch", desc: 'Ver el aura de gens/cofres/totems durante 5s tras completar un gen.' },
      { id: 'stake_out', name: 'Stake Out', desc: 'Cerca del asesino sin ser detectado, ganas tokens para great skill checks.' },
    ]
  },
  {
    id: 'kate',
    name: 'Kate Denson',
    isDefault: false,
    perks: [
      { id: 'windows_opp', name: 'Windows of Opportunity', desc: 'Ves auras de pallets, ventanas y breakable walls al inicio y tras golpes.' },
      { id: 'dance_with_me', name: 'Dance With Me', desc: 'Al correr, no dejas scratch marks por 3s tras saltar.' },
      { id: 'boil_over', name: 'Boil Over', desc: 'Dificultas que el asesino te lleve y te balancea con fuerza al ser cargado.' },
    ]
  },
  {
    id: 'adam',
    name: 'Adam Francis',
    isDefault: false,
    perks: [
      { id: 'autodidact', name: 'Autodidact', desc: 'Curar sin med-kit da tokens que aumentan el progreso de curación.' },
      { id: 'diversion', name: 'Diversion', desc: 'Tras estar quieto 4s, puedes lanzar una piedra para crear ruido.' },
      { id: 'deliverance', name: 'Deliverance', desc: 'Tras desengancharte tú mismo, el próximo intento es exitoso.' },
    ]
  },
  {
    id: 'jeff',
    name: 'Jeff Johansen',
    isDefault: false,
    perks: [
      { id: 'aftercare', name: 'Aftercare', desc: 'Ves auras de supervivientes con los que has interactuado.' },
      { id: 'breakdown', name: 'Breakdown', desc: 'Al ser desenganchado, el gancho se rompe.' },
      { id: 'distortion', name: 'Distortion', desc: 'Tokens que bloquean revelar tu aura al asesino.' },
    ]
  },
  {
    id: 'jane',
    name: 'Jane Romero',
    isDefault: false,
    perks: [
      { id: 'solidarity', name: 'Solidarity', desc: 'Curar a otros mientras estás herida también te cura a ti.' },
      { id: 'head_on', name: 'Head On', desc: 'Escondido en un locker 3s, salir aturde al asesino cercano.' },
      { id: 'poised', name: 'Poised', desc: 'Al completar un gen, no dejas scratch marks por 6s.' },
    ]
  },
  {
    id: 'ash',
    name: 'Ash Williams',
    isDefault: false,
    perks: [
      { id: 'buckle_up', name: 'Buckle Up', desc: 'Ves el aura de supervivientes moribundos y curar da Haste.' },
      { id: 'flip_flop', name: 'Flip-Flop', desc: 'El progreso de recuperación se convierte en progreso de Wiggle al ser cargado.' },
      { id: 'mettle_of_man', name: 'Mettle of Man', desc: '3 protecciones heroicas te dan un golpe de gracia.' },
    ]
  },
  {
    id: 'nancy',
    name: 'Nancy Wheeler',
    isDefault: false,
    perks: [
      { id: 'better_together', name: 'Better Together', desc: 'Reparando un gen, todos ven su aura y el de los supervivientes al caer.' },
      { id: 'inner_strength', name: 'Inner Strength', desc: 'Limpiar un totem te permite curar escondido en un locker.' },
      { id: 'second_wind', name: 'Second Wind', desc: 'Curar a otro superviviente completamente te cura a ti mismo al engancharte.' },
    ]
  },
  {
    id: 'steve',
    name: 'Steve Harrington',
    isDefault: false,
    perks: [
      { id: 'babysitter', name: 'Babysitter', desc: 'Al desengancharte, el superviviente gana Haste y no deja rastros.' },
      { id: 'camaraderie', name: 'Camaraderie', desc: 'Si hay otro superviviente en un gancho, el tuyo se pausa por 26s.' },
      { id: 'reassurance', name: 'Reassurance', desc: 'Cerca de un gancho, puedes pausar su temporizador por 20s.' },
    ]
  },
  {
    id: 'yui',
    name: 'Yui Kimura',
    isDefault: false,
    perks: [
      { id: 'any_means', name: 'Any Means Necessary', desc: 'Puedes levantar pallets caídos.' },
      { id: 'lucky_break', name: 'Lucky Break', desc: 'Herida, no dejas charcos de sangre por 60/90/120s.' },
      { id: 'quick_gambit', name: 'Quick Gambit', desc: 'Siendo perseguida, los supervivientes en gens reparados ganan +5% de velocidad.' },
    ]
  },
  {
    id: 'zarina',
    name: 'Zarina Kassir',
    isDefault: false,
    perks: [
      { id: 'for_the_people', name: 'For The People', desc: 'Sin med-kit, puedes curar instantáneamente a un superviviente moribundo pero quedas herida.' },
      { id: 'off_the_record', name: 'Off The Record', desc: 'Tras ser desenganchada, tu aura es invisible y ganas Endurance por 80s.' },
      { id: 'red_herring', name: 'Red Herring', desc: 'Reparando un gen, puedes crear una alerta de ruido falsa en otro gen.' },
    ]
  },
  {
    id: 'cheryl',
    name: 'Cheryl Mason',
    isDefault: false,
    perks: [
      { id: 'blood_pact', name: 'Blood Pact', desc: 'Al ser curada o curar al Obsession, ambos ganan Haste por 10s.' },
      { id: 'repressed_alliance', name: 'Repressed Alliance', desc: 'Tras 10s en un gen, puedes bloquearlo para el asesino por 30s.' },
      { id: 'soul_guard', name: 'Soul Guard', desc: 'Levantarte te da Endurance si hay un Hex activo.' },
    ]
  },
  {
    id: 'felix',
    name: 'Felix Richter',
    isDefault: false,
    perks: [
      { id: 'visionary', name: 'Visionary', desc: 'Ves las auras de los gens a 32m tras completar un gen.' },
      { id: 'desperate_measures', name: 'Desperate Measures', desc: 'Por cada superviviente herido/colgado, curar y desengancharte es 15% más rápido.' },
      { id: 'built_to_last', name: 'Built to Last', desc: 'Dentro de un locker, recargas tu objeto en 16s a 100/75/50% de carga.' },
    ]
  },
  {
    id: 'elodie',
    name: 'Elodie Rakoto',
    isDefault: false,
    perks: [
      { id: 'appraisal', name: 'Appraisal', desc: 'Registras cofres vacíos 2 veces más y más rápido.' },
      { id: 'deception', name: 'Deception', desc: 'Correr hacia un locker sin entrar crea una alerta de ruido falsa.' },
      { id: 'power_struggle', name: 'Power Struggle', desc: 'Siendo cargada, al completar un Wiggle, puedes tirar al asesino con un pallet.' },
    ]
  },
  {
    id: 'yun',
    name: 'Yun-Jin Lee',
    isDefault: false,
    perks: [
      { id: 'fast_track', name: 'Fast Track', desc: 'Cada superviviente enganchado te da tokens que aumentan el progreso de great skill checks.' },
      { id: 'smash_hit', name: 'Smash Hit', desc: 'Tras tirar un pallet al asesino, ganas Haste por 4s.' },
      { id: 'shark_in_water', name: 'Shark in the Water', desc: 'Al sprint de Exhaustion, ganas visión de aura del asesino durante Haste.' },
    ]
  },
  {
    id: 'jill',
    name: 'Jill Valentine',
    isDefault: false,
    perks: [
      { id: 'counterforce', name: 'Counterforce', desc: 'Limpias totems más rápido y cada limpieza te revela al totem más cercano.' },
      { id: 'resurgence', name: 'Resurgence', desc: 'Al engancharte por segunda fase, te curas un 50% instantáneamente.' },
      { id: 'blast_mine', name: 'Blast Mine', desc: 'Tras reparar 70% de un gen, puedes colocar una trampa que aturde al asesino.' },
    ]
  },
  {
    id: 'leon',
    name: 'Leon Kennedy',
    isDefault: false,
    perks: [
      { id: 'flashbang', name: 'Flashbang', desc: 'Tras reparar 50% de gens, crea una granada de luz en un locker.' },
      { id: 'rookie_spirit', name: "Rookie Spirit", desc: 'Al completar un gen, ves auras de gens en progreso por 10s.' },
      { id: 'scene_partner', name: 'Scene Partner', desc: 'Cuando el asesino te mira a 16m, gritas y ves su aura por 4s.' },
    ]
  },
  {
    id: 'mikaela',
    name: 'Mikaela Reid',
    isDefault: false,
    perks: [
      { id: 'boon_circle', name: 'Boon: Circle of Healing', desc: 'Tótem bendecido: los supervivientes se curan 40/45/50% más rápido en su radio.' },
      { id: 'boon_shadow', name: 'Boon: Shadow Step', desc: 'Tótem bendecido: no dejas aura ni scratch marks en su radio.' },
      { id: 'clairvoyance', name: 'Clairvoyance', desc: 'Al limpiar un tótem, ves auras de cofres/gens/salidas/ganchos por 8s.' },
    ]
  },
  {
    id: 'jonah',
    name: 'Jonah Vasquez',
    isDefault: false,
    perks: [
      { id: 'overcome', name: 'Overcome', desc: 'Al ser herido, ganas Haste por 5s. Exhausted 60/50/40s.' },
      { id: 'corrective_action', name: 'Corrective Action', desc: 'Gana tokens para convertir good skill checks en great skill checks.' },
      { id: 'friendly_competition', name: 'Friendly Competition', desc: 'Al completar un gen con otro superviviente, ambos reparan 5% más rápido por 45s.' },
    ]
  },
  {
    id: 'vittorio',
    name: 'Vittorio Toscano',
    isDefault: false,
    perks: [
      { id: 'boon_exponential', name: 'Boon: Exponential', desc: 'Tótem bendecido: los supervivientes se levantan del suelo un 40/50/60% más rápido.' },
      { id: 'potential_energy', name: 'Potential Energy', desc: 'Reparar gen con great skill checks da tokens que puedes usar para carga instantánea.' },
      { id: 'fogwise', name: 'Fogwise', desc: 'Hacer un great skill check en cualquier gen revela el aura del asesino por 6s.' },
    ]
  },
  {
    id: 'thalita',
    name: 'Thalita Lyra',
    isDefault: false,
    perks: [
      { id: 'blood_rush', name: 'Blood Rush', desc: 'Exhausto y herido tras estar 20s en un gen, te curas instantáneamente.' },
      { id: 'teamwork_power', name: 'Teamwork: Power of Two', desc: 'Al curar a alguien, ambos ganáis +5% de velocidad de movimiento.' },
      { id: 'low_profile', name: 'Low Profile', desc: 'Cuando eres el último superviviente, no dejas scratch marks ni charcos de sangre.' },
    ]
  },
  {
    id: 'renato',
    name: 'Renato Lyra',
    isDefault: false,
    perks: [
      { id: 'background_player', name: 'Background Player', desc: 'Cuando el asesino carga a otro superviviente, ganas Haste por 5s.' },
      { id: 'teamwork_collective', name: 'Teamwork: Collective Stealth', desc: 'Al curar a otro, ambos camináis silenciosamente por 10s.' },
      { id: 'boon_dark_theory', name: 'Boon: Dark Theory', desc: 'Tótem bendecido: velocidad de movimiento +0.2m/s en su radio.' },
    ]
  },
  {
    id: 'gabriel',
    name: 'Gabriel Soma',
    isDefault: false,
    perks: [
      { id: 'made_for_this', name: 'Made for This', desc: 'Herido, ganas +1% de velocidad de movimiento permanentemente.' },
      { id: 'chemistry', name: 'Chemistry', desc: 'Terminar una curación con otro superviviente activa la perk del otro por 20s.' },
      { id: 'reactive_healing', name: 'Reactive Healing', desc: 'Cuando otro superviviente recibe daño a 32m, progresas 15% en curación.' },
    ]
  },
  {
    id: 'nicolas',
    name: 'Nicolas Cage',
    isDefault: false,
    perks: [
      { id: 'plot_twist', name: 'Plot Twist', desc: 'Puedes tirarte al suelo silenciosamente y levantarte más rápido.' },
      { id: 'scene_partner_nc', name: 'Scene Partner', desc: 'Cuando el asesino te mira a 16m, gritas y ves su aura.' },
      { id: 'dramaturgy', name: 'Dramaturgy', desc: 'Correr da un efecto aleatorio: Haste, curación, Endurance o un grito.' },
    ]
  },
  {
    id: 'ellen',
    name: 'Ellen Ripley',
    isDefault: false,
    perks: [
      { id: 'chemical_trap', name: 'Chemical Trap', desc: 'Tras reparar 50% de un gen, coloca una trampa de ralentización en una ventana.' },
      { id: 'lucky_star', name: 'Lucky Star', desc: 'Escondido en un locker, te curas.' },
      { id: 'light_footed', name: 'Light-Footed', desc: 'Correr no produce sonido de pasos.' },
    ]
  },
  {
    id: 'alan',
    name: 'Alan Wake',
    isDefault: false,
    perks: [
      { id: 'boon_illumination', name: 'Boon: Illumination', desc: 'Tótem bendecido: ves auras de cofres y gens en su radio.' },
      { id: 'charge_ahead', name: 'Charge Ahead', desc: 'Reparar un gen con otro superviviente da Haste al completarlo.' },
      { id: 'deadline', name: 'Deadline', desc: 'Herido, los great skill checks dan más progreso en gens.' },
    ]
  },
  {
    id: 'sable',
    name: 'Sable Ward',
    isDefault: false,
    perks: [
      { id: 'wicked', name: 'Wicked', desc: 'Limpiar/bendecir tótems revela el aura de gens y supervivientes.' },
      { id: 'invocation_weaving', name: 'Invocation: Weaving Spiders', desc: 'En el sótano, repara 4% de todos los gens a cambio de una mano rota.' },
      { id: 'strength_in_shadows', name: 'Strength in Shadows', desc: 'Cerca de un tótem oscuro, te puedes curar completamente en 32s.' },
    ]
  },
  {
    id: 'aestri',
    name: 'Aestri Yazar',
    isDefault: false,
    perks: [
      { id: 'bardic_inspiration', name: 'Bardic Inspiration', desc: 'Toca una actuación para que supervivientes cercanos tengan mejor progreso en skill checks.' },
      { id: 'still_sight', name: 'Still Sight', desc: 'Estar quieto 4s te da visión de aura de supervivientes y asesino.' },
      { id: 'forbidden_knowledge', name: 'Forbidden Knowledge', desc: 'Bendecir o limpiar un tótem revela el aura del asesino por 8s.' },
    ]
  },
  {
    id: 'haddie',
    name: 'Haddie Kaur',
    isDefault: false,
    perks: [
      { id: 'inner_focus', name: 'Inner Focus', desc: 'Ves los scratch marks de los supervivientes y cuando uno es golpeado.' },
      { id: 'overzealous', name: 'Overzealous', desc: 'Limpiar un tótem te da +6% de velocidad de gen.' },
      { id: 'residual_manifest', name: 'Residual Manifest', desc: 'Limpiar un tótem ciega temporalmente al asesino.' },
    ]
  },
  {
    id: 'ada',
    name: 'Ada Wong',
    isDefault: false,
    perks: [
      { id: 'wiretap', name: 'Wiretap', desc: 'Tras reparar 50% de un gen, coloca un sensor que revela al asesino cercano.' },
      { id: 'w_e', name: 'W/E', desc: 'Interactuar con el entorno silencia los sonidos de tus acciones.' },
      { id: 'reactive_heal_ada', name: 'Reactive Healing', desc: 'Copia idéntica a la de Gabriel Soma.' },
    ]
  },
  {
    id: 'rebecca',
    name: 'Rebecca Chambers',
    isDefault: false,
    perks: [
      { id: 'better_than_new', name: 'Better Than New', desc: 'Al curar a otro, ganan +12/14/16% de velocidad en acciones hasta ser golpeados.' },
      { id: 'boon_exponential_reb', name: 'Boon: Exponential', desc: 'Copia idéntica a la de Vittorio.' },
      { id: 'hyperfocus', name: 'Hyperfocus', desc: 'Great skill checks dan tokens que aumentan el tamaño de la zona de great.' },
    ]
  },
  {
    id: 'mei',
    name: 'Mei Dhillon',
    isDefault: false,
    perks: [
      { id: 'boon_shadow_mei', name: 'Boon: Shadow Step', desc: 'Copia de Mikaela.' },
      { id: 'hubris', name: 'Hubris', desc: 'Si el asesino te falla, ganas Endurance y Haste por 4s.' },
      { id: 'leverage', name: 'Leverage', desc: 'Al engancharte, todos los supervivientes pierden 5/8/10% de progreso en sus acciones actuales.' },
    ]
  },
  {
    id: 'taurie',
    name: 'Taurie Cain',
    isDefault: false,
    perks: [
      { id: 'troubleshooter', name: 'Troubleshooter', desc: 'Siendo perseguida, ves el gen más regresado.' },
      { id: 'invocation_treacherous', name: 'Invocation: Treacherous Crows', desc: 'En el sótano, los cuervos del mapa alertan y revelan supervivientes al asesino.' },
      { id: 'dramaturgy_taurie', name: 'Dramaturgy', desc: 'Copia de Nicolas Cage.' },
    ]
  },
  {
    id: 'quincy',
    name: 'Quincy Atkins',
    isDefault: false,
    perks: [
      { id: 'corrective_action_q', name: 'Corrective Action', desc: 'Copia de Jonah.' },
      { id: 'marathon', name: 'Marathon', desc: 'Cerca de supervivientes moribundos ganas +5% de velocidad en acciones.' },
      { id: 'teamwork_power_q', name: 'Teamwork: Power of Two', desc: 'Copia de Thalita.' },
    ]
  },
  {
    id: 'lara',
    name: 'Lara Croft',
    isDefault: false,
    perks: [
      { id: 'predator', name: 'Predator', desc: 'Ves el aura de los gens y supervivientes al inicio de cada fase.' },
      { id: 'appraisal_lara', name: 'Appraisal', desc: 'Copia de Elodie.' },
      { id: 'resourceful', name: 'Resourceful', desc: 'Al abrir un cofre, tienes una alta probabilidad de obtener objetos adicionales.' },
    ]
  },
  {
    id: 'lisa',
    name: 'Lisa Garland',
    isDefault: false,
    perks: [
      { id: 'empathic_connection', name: 'Empathic Connection', desc: 'Supervivientes heridos ven tu aura y tú la suya a 32/64/96m.' },
      { id: 'hospital_horror', name: 'Hospital Horror', desc: 'Curar sin med-kit da más progreso de curación pero con efectos negativos.' },
      { id: 'invocation_binding', name: 'Invocation: Binding of Kin', desc: 'En el sótano, aplica Broken a todos los supervivientes pero aumentas la velocidad de reparación.' },
    ]
  },
  {
    id: 'rick',
    name: 'Rick Grimes',
    isDefault: false,
    perks: [
      { id: 'apocalyptic_ingenuity', name: 'Apocalyptic Ingenuity', desc: 'Tras registrar cofres, puedes crear pallets frágiles en pallets rotos.' },
      { id: 'a_place_for_us', name: 'A Place For Us', desc: 'Curar a otros da Elusive. Curar al Obsession da Elusive a ambos.' },
      { id: 'take_charge', name: 'Take Charge', desc: 'Al desengancharte, ganas un efecto de aceleración en acciones de equipo.' },
    ]
  },
  {
    id: 'dustin',
    name: 'Dustin Henderson',
    isDefault: false,
    perks: [
      { id: 'bada_bada_boom', name: 'Bada Bada Boom', desc: 'Tras reparar gens, puedes atrapar ventanas para ralentizar al asesino.' },
      { id: 'friendly_competition_d', name: 'Friendly Competition', desc: 'Copia de Jonah.' },
      { id: 'unnerving_presence_d', name: 'Floored', desc: 'Al ser tumbado, los supervivientes cercanos ven tu aura.' },
    ]
  },
  {
    id: 'portia',
    name: 'Portia Maye',
    isDefault: false,
    perks: [
      { id: 'rush', name: 'Rush', desc: 'Al caer desde una altura, ganas Haste y puedes accionar elementos más rápido.' },
      { id: 'furtive_chase_p', name: 'Furtive Chase (Survivor)', desc: 'Siendo el Obsession, los golpes te dan tokens para beneficios de sigilo.' },
      { id: 'boon_exodus', name: 'Boon: Exodus', desc: 'Tótem bendecido: las salidas se abren más rápido en su radio.' },
    ]
  },
  {
    id: 'kwon',
    name: 'Kwon Tae-young',
    isDefault: false,
    perks: [
      { id: 'a_place_for_us_kwon', name: 'A Place For Us', desc: 'Copia de Rick Grimes.' },
      { id: 'marathon_kwon', name: 'Marathon', desc: 'Copia de Quincy.' },
      { id: 'safeguard', name: 'Safeguard', desc: 'Aumenta la velocidad de sabotaje y desbloquea el sabotaje sin herramientas.' },
    ]
  },
  {
    id: 'ken',
    name: 'Ken Kaneki',
    isDefault: false,
    perks: [
      { id: 'blackout', name: 'Blackout', desc: 'Cuando eres golpeado, la zona del asesino se oscurece para todos por 30s.' },
      { id: 'predator_ken', name: 'Predator', desc: 'Copia de Lara Croft.' },
      { id: 'second_chance_ken', name: 'Second Chance', desc: 'Al escapar por primera vez de una persecución, ganas Haste.' },
    ]
  },
]
