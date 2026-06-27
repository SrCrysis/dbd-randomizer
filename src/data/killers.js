

export const killers = [

  {
    id: 'trapper',
    name: 'El Trampero',
    isDefault: true,
    perks: [
      { id: 'agitation', name: 'Agitation', desc: 'Al cargar a un superviviente, ganas Haste y tu radio de terror aumenta.' },
      { id: 'iron_grasp', name: 'Iron Grasp', desc: 'El wiggle de los supervivientes es más lento y tu radio de terror aumenta.' },
      { id: 'unnerving_presence', name: 'Unnerving Presence', desc: 'Los supervivientes en tu radio de terror tienen skill checks más difíciles.' },
    ]
  },
  {
    id: 'wraith',
    name: 'El Espectro',
    isDefault: true,
    perks: [
      { id: 'bloodhound', name: 'Bloodhound', desc: 'Los charcos de sangre son más visibles para ti.' },
      { id: 'predator_k', name: 'Predator', desc: 'Los scratch marks de los supervivientes están más juntos.' },
      { id: 'shadowborn', name: 'Shadowborn', desc: 'Tienes un campo de visión más amplio.' },
    ]
  },
  {
    id: 'hillbilly',
    name: 'El HillBilly',
    isDefault: true,
    perks: [
      { id: 'enduring', name: 'Enduring', desc: 'La reducción de velocidad tras golpear pallets se recupera más rápido.' },
      { id: 'lightborn', name: 'Lightborn', desc: 'Eres inmune a las linternas y te adaptas más rápido al deslumbramiento.' },
      { id: 'tinkerer', name: 'Tinkerer', desc: 'Cuando un gen llega al 70%, recibes una notificación de ruido y ganas Undetectable por 12s.' },
    ]
  },
  {
    id: 'nurse',
    name: 'La Enfermera',
    isDefault: true,
    perks: [
      { id: 'a_nurses_calling', name: "A Nurse's Calling", desc: 'Ves las auras de supervivientes que se están curando a 28/30/32m.' },
      { id: 'castledown', name: 'Castdown', desc: 'Al golpear al Obsession, todos los supervivientes pierden un token de perks de protección.' },
      { id: 'thanatophobia', name: 'Thanatophobia', desc: 'Por cada superviviente herido/moribundo, el resto repara gens más lento.' },
    ]
  },
  {
    id: 'shape',
    name: 'La Forma',
    isDefault: false,
    perks: [
      { id: 'play_with_food', name: 'Play With Your Food', desc: 'Romper una persecución sin matar da tokens de Haste.' },
      { id: 'save_best_for_last', name: 'Save the Best for Last', desc: 'Golpear a no-Obsession da tokens de velocidad de golpe.' },
      { id: 'haunted_ground', name: 'Haunted Ground', desc: 'Hex: dos totems son Hex del Terror. Limpiarlos revela tu aura.' },
    ]
  },
  {
    id: 'hag',
    name: 'La Bruja',
    isDefault: false,
    perks: [
      { id: 'hex_ruin', name: 'Hex: Ruin', desc: 'Hex: todos los good/great skill checks en gens causan retroceso.' },
      { id: 'hex_third_seal', name: 'Hex: The Third Seal', desc: 'Hex: supervivientes golpeados no pueden ver auras.' },
      { id: 'devour_hope', name: 'Hex: Devour Hope', desc: 'Hex: tokens por hooking dan velocidad y eventualmente muerte 1 golpe.' },
    ]
  },
  {
    id: 'doctor',
    name: 'El Doctor',
    isDefault: false,
    perks: [
      { id: 'overwhelming_presence', name: 'Overwhelming Presence', desc: 'Supervivientes en tu radio agotan sus objetos más rápido.' },
      { id: 'monitor_abuse', name: 'Monitor & Abuse', desc: 'Fuera de persecución, tu radio de terror es 8m más pequeño.' },
      { id: 'forced_hesitation', name: 'Forced Hesitation', desc: 'Al derribar a un superviviente, los supervivientes cercanos sufren Hindered por 4s.' },
    ]
  },
  {
    id: 'huntress',
    name: 'La Cazadora',
    isDefault: false,
    perks: [
      { id: 'beast_of_prey', name: 'Beast of Prey', desc: 'Al ganar Bloodlust, ganas Undetectable por 30/35/40s.' },
      { id: 'hex_huntress', name: 'Territorial Imperative', desc: 'Hex: ves el aura de supervivientes en el sótano desde cualquier lugar.' },
      { id: 'hex_lullaby', name: 'Hex: Huntress Lullaby', desc: 'Hex: tokens por hooks hacen los skill checks más difíciles.' },
    ]
  },
  {
    id: 'cannibal',
    name: 'El Canibal',
    isDefault: false,
    perks: [
      { id: 'bbq', name: 'Barbecue & Chili', desc: 'Al enganchar, ves auras de supervivientes a 60m por 4s.' },
      { id: 'franklyns', name: "Franklin's Demise", desc: 'Golpear a un superviviente hace que caiga su objeto.' },
      { id: 'knock_out', name: 'Knock Out', desc: 'Los supervivientes que derribas no pueden ser vistos por sus compañeros.' },
    ]
  },
  {
    id: 'nightmare',
    name: 'La Pesadilla',
    isDefault: false,
    perks: [
      { id: 'blood_warden', name: 'Blood Warden', desc: 'Al ser enganchado el último superviviente, bloquea las salidas por 30s.' },
      { id: 'fire_up', name: 'Fire Up', desc: 'Por cada gen completado, ganas velocidad en acciones.' },
      { id: 'remember_me', name: 'Remember Me', desc: 'El Obsession aumenta el tiempo de apertura de salidas.' },
    ]
  },
  {
    id: 'pig',
    name: 'La Cerda',
    isDefault: false,
    perks: [
      { id: 'make_your_choice', name: 'Make Your Choice', desc: 'Al desengancharse solo un superviviente, el rescatador queda Exposed por 60s.' },
      { id: 'hangmans_trick', name: "Hangman's Trick", desc: 'Ves las auras de supervivientes cerca de ganchos.' },
      { id: 'surveillance', name: 'Surveillance', desc: 'Los gens regresivos se muestran como blancos cuando los supervivientes los retoman.' },
    ]
  },
  {
    id: 'clown',
    name: 'El Payaso',
    isDefault: false,
    perks: [
      { id: 'bamboozle', name: 'Bamboozle', desc: 'Al saltar una ventana, se bloquea para supervivientes por 8/12/16s.' },
      { id: 'coulrophobia', name: 'Coulrophobia', desc: 'Los supervivientes en tu radio de terror se curan un 50% más lento.' },
      { id: 'pop_goes_weasel', name: 'Pop Goes the Weasel', desc: 'Tras enganchar, el siguiente gen golpeado pierde 25% de progreso.' },
    ]
  },
  {
    id: 'spirit',
    name: 'La Espiritu',
    isDefault: false,
    perks: [
      { id: 'haunted_grounds', name: 'Haunted Ground', desc: 'Copia de The Shape.' },
      { id: 'hex_no_one', name: 'Hex: No One Escapes Death', desc: 'Hex: al activarse las salidas, los supervivientes quedan Exposed.' },
      { id: 'spirit_fury', name: 'Spirit Fury', desc: 'Tras romper 2 pallets, el siguiente pallet que uses contra ti se rompe automáticamente.' },
    ]
  },
  {
    id: 'legion',
    name: 'La Legion',
    isDefault: false,
    perks: [
      { id: 'discordance', name: 'Discordance', desc: 'Cuando 2+ supervivientes reparan el mismo gen, ves su aura por 8s.' },
      { id: 'iron_maiden', name: 'Iron Maiden', desc: 'Abres lockers más rápido. Los supervivientes que salgan quedan Exposed por 30s.' },
      { id: 'mad_grit', name: 'Mad Grit', desc: 'Cargando a un superviviente, no tienes reducción de velocidad al golpear.' },
    ]
  },
  {
    id: 'plague',
    name: 'La Plaga',
    isDefault: false,
    perks: [
      { id: 'corrupt_intervention', name: 'Corrupt Intervention', desc: 'Al inicio, los 3 gens más lejanos de ti se bloquean por 120s.' },
      { id: 'dark_devotion', name: 'Dark Devotion', desc: 'Al golpear al Obsession, tu radio de terror se transfiere a él.' },
      { id: 'infectious_fright', name: 'Infectious Fright', desc: 'Al derribar a un superviviente, todos los cercanos gritan y revelan su posición.' },
    ]
  },
  {
    id: 'ghostface',
    name: 'Ghost Face',
    isDefault: false,
    perks: [
      { id: 'i_m_all_ears', name: "I'm All Ears", desc: 'Al romper un pallet, ves el aura del superviviente más cercano por 6s.' },
      { id: 'furtive_chase', name: 'Furtive Chase', desc: 'Al enganchar al Obsession, cambias de Obsession y ganas un token de radio de terror reducido.' },
      { id: 'thrilling_tremors', name: 'Thrilling Tremors', desc: 'Tras enganchar, los gens no en progreso se bloquean por 16s.' },
    ]
  },
  {
    id: 'demogorgon',
    name: 'El Demogorgon',
    isDefault: false,
    perks: [
      { id: 'cruel_limits', name: 'Cruel Limits', desc: 'Al completar un gen, todas las ventanas cercanas se bloquean por 20s.' },
      { id: 'fearmonger', name: 'Fearmonger', desc: 'Al iniciar persecución, el superviviente queda ciego y Exhausted.' },
      { id: 'surge', name: 'Surge', desc: 'Al derribar a un superviviente con un ataque de potencia, los gens cercanos explotan.' },
    ]
  },
  {
    id: 'oni',
    name: 'El Oni',
    isDefault: false,
    perks: [
      { id: 'blood_echo', name: 'Blood Echo', desc: 'Al activar el poder, todos los supervivientes heridos quedan Exhausted.' },
      { id: 'hex_war', name: 'Hex: Wretched Fate', desc: 'Hex: supervivientes enganchados pierden progreso en curación.' },
      { id: 'zanshin_tactics', name: 'Zanshin Tactics', desc: 'Ves las auras de pallets, ventanas y paredes a 16m.' },
    ]
  },
  {
    id: 'deathslinger',
    name: 'El Arponero',
    isDefault: false,
    perks: [
      { id: 'gearhead', name: 'Gearhead', desc: 'Al derribar a un superviviente, los great skill checks en gens revelan su aura.' },
      { id: 'hex_retribution', name: 'Hex: Retribution', desc: 'Hex: limpiar un tótem aplica Oblivious al limpiador. Revelar tu aura aplica Exposed.' },
      { id: 'dead_mans_switch', name: "Dead Man's Switch", desc: 'Al enganchar al Obsession, el gen en el que más trabajó se bloquea.' },
    ]
  },
  {
    id: 'executioner',
    name: 'El Verdugo',
    isDefault: false,
    perks: [
      { id: 'forced_penance', name: 'Forced Penance', desc: 'Supervivientes que protegen a otros quedan Broken por 80s.' },
      { id: 'trail_of_torment', name: 'Trail of Torment', desc: 'Al dañar un gen, ganas Undetectable hasta que el gen empiece a regresar.' },
      { id: 'punishment', name: 'Punishment of the Damned', desc: 'Al golpear a un superviviente a través de una pared de llamas, queda Exposed.' },
    ]
  },
  {
    id: 'blight',
    name: 'El Deterioro',
    isDefault: false,
    perks: [
      { id: 'dragon_breath', name: "Dragon's Grip", desc: 'Al dañar un gen, queda con trampas. El primer superviviente que lo toque grita y queda Exposed.' },
      { id: 'hex_blood_favour', name: 'Hex: Blood Favour', desc: 'Hex: al golpear a un superviviente, todos los pallets cercanos se bloquean.' },
      { id: 'pwr_struggle', name: 'Power Struggle', desc: 'Golpear a un superviviente en una pared activa una acción especial.' },
    ]
  },
  {
    id: 'twins',
    name: 'Los Mellizos',
    isDefault: false,
    perks: [
      { id: 'coup_de_grace', name: 'Coup de Grâce', desc: 'Por cada gen completado, un token que alarga tu próximo ataque de lunge.' },
      { id: 'hex_plaything', name: 'Hex: Plaything', desc: 'Hex: al enganchar a un superviviente, gana un tótem de maldición personal. Queda Oblivious hasta limpiarlo.' },
      { id: 'oppression', name: 'Oppression', desc: 'Al dañar un gen, 3 gens aleatorios también retrocedenss.' },
    ]
  },
  {
    id: 'trickster',
    name: 'El Embaucador',
    isDefault: false,
    perks: [
      { id: 'hex_crowd_control', name: 'Hex: Crowd Control', desc: 'Hex: los supervivientes que saltan ventanas las bloquean por 20s.' },
      { id: 'no_way_out', name: 'No Way Out', desc: 'Al enganchar al Obsession, la salida se bloquea por 12s al activarse.' },
      { id: 'starstruck', name: 'Starstruck', desc: 'Cargando a un superviviente, los cercanos quedan Exposed.' },
    ]
  },
  {
    id: 'nemesis',
    name: 'El Nemesis',
    isDefault: false,
    perks: [
      { id: 'awakened_awareness', name: 'Awakened Awareness', desc: 'Cargando a un superviviente, ves los auras de supervivientes cercanos.' },
      { id: 'lethal_pursuer', name: 'Lethal Pursuer', desc: 'Al inicio, ves las auras de todos los supervivientes por 9s.' },
      { id: 'nowhere_to_hide', name: 'Nowhere to Hide', desc: 'Al dañar un gen, ves las auras de supervivientes cercanos por 6s.' },
    ]
  },
  {
    id: 'cenobite',
    name: 'El Cenobita',
    isDefault: false,
    perks: [
      { id: 'hex_plaything_c', name: 'Hex: Plaything', desc: 'Copia de The Twins.' },
      { id: 'hex_pentimento', name: 'Hex: Pentimento', desc: 'Hex: al limpiar un tótem, puedes colocar un Pentimento que da efectos por cantidad limpiada.' },
      { id: 'scourge_gift', name: 'Scourge Hook: Gift of Pain', desc: 'Scourge: al desengancharse, el superviviente queda Broken hasta curar.' },
    ]
  },
  {
    id: 'artist',
    name: 'La Artista',
    isDefault: false,
    perks: [
      { id: 'birds_of_omen', name: 'Grim Embrace', desc: 'Tras enganchar cada superviviente una vez, bloqueas todos los gens por 40s y ves al Obsession.' },
      { id: 'hex_war_crowa', name: 'Hex: Wretched Fate', desc: 'Copia de The Oni.' },
      { id: 'scourge_floods', name: 'Scourge Hook: Floods of Rage', desc: 'Scourge: al enganchar, ves las auras de todos los supervivientes por 10s.' },
    ]
  },
  {
    id: 'onryo',
    name: 'La Onryō',
    isDefault: false,
    perks: [
      { id: 'call_darkness', name: 'Call of Brine', desc: 'Al dañar un gen, queda bajo efecto Call of Brine: great skill checks lo explotan.' },
      { id: 'merciless_storm', name: 'Merciless Storm', desc: 'Al llegar un gen al 90%, los skill checks se vuelven continuos hasta que falle o se complete.' },
      { id: 'floods_of_rage', name: 'Scourge Hook: Floods of Rage', desc: 'Copia del Artist.' },
    ]
  },
  {
    id: 'dredge',
    name: 'La Draga',
    isDefault: false,
    perks: [
      { id: 'dissolution', name: 'Dissolution', desc: 'Tras romper un pallet, los supervivientes que lo usen por 15s lo romperán al usarlo.' },
      { id: 'gift_pain', name: 'Scourge Hook: Gift of Pain', desc: 'Copia de The Cenobite.' },
      { id: 'septic_touch', name: 'Septic Touch', desc: 'Los supervivientes que curen dentro de tu radio de terror quedan ciegos y Exhausted.' },
    ]
  },
  {
    id: 'mastermind',
    name: 'La Mente Maestra',
    isDefault: false,
    perks: [
      { id: 'awakened_awareness_m', name: 'Awakened Awareness', desc: 'Copia de The Nemesis.' },
      { id: 'superior_anatomy', name: 'Superior Anatomy', desc: 'Tras que un superviviente salte una ventana, vaultas 30% más rápido por 12s.' },
      { id: 'you_are_going_to_be', name: "You're Going to Be Okay", desc: 'Al enganchar, el superviviente más herido fuera de tu radio se estabiliza por 30s.' },
    ]
  },
  {
    id: 'knight',
    name: 'El Caballero',
    isDefault: false,
    perks: [
      { id: 'nowhere_to_hide_k', name: 'Nowhere to Hide', desc: 'Copia de The Nemesis.' },
      { id: 'hex_dark_devotion', name: 'Hex: Dark Devotion', desc: 'Copia de The Plague.' },
      { id: 'hubris_k', name: 'Hubris', desc: 'Al ser aturdido, quedas inmune y puedes atacar al superviviente más cercano.' },
    ]
  },
  {
    id: 'skull_merchant',
    name: 'El Comerciante de Calaveras',
    isDefault: false,
    perks: [
      { id: 'nowhere_to_hide_sm', name: 'Nowhere to Hide', desc: 'Copia de The Nemesis.' },
      { id: 'leverage_sm', name: 'Leverage', desc: 'Copia de Meg.' },
      { id: 'game_afoot', name: 'Game Afoot', desc: 'El superviviente más rápido al inicio de la partida queda marcado.' },
    ]
  },
  {
    id: 'singularity',
    name: 'La Singularidad',
    isDefault: false,
    perks: [
      { id: 'genetic_limits', name: 'Genetic Limits', desc: 'Al dañar un gen con poder, los supervivientes en él quedan Exhausted.' },
      { id: 'machine_learning', name: 'Machine Learning', desc: 'Al completar un gen con tu poder activado, ganas Undetectable y copias el gen.' },
      { id: 'forced_hesitation_s', name: 'Forced Hesitation', desc: 'Copia de The Doctor.' },
    ]
  },
  {
    id: 'xenomorph',
    name: 'El Xenomorfo',
    isDefault: false,
    perks: [
      { id: 'alien_instinct', name: 'Alien Instinct', desc: 'Al enganchar, el superviviente más lejano herido queda Oblivious y ves su aura.' },
      { id: 'hex_plaything_x', name: 'Hex: Plaything', desc: 'Copia de The Twins.' },
      { id: 'ultimate_weapon', name: 'Ultimate Weapon', desc: 'Al abrir un locker, todos los supervivientes en tu radio gritan y quedan ciegos.' },
    ]
  },
  {
    id: 'good_guy',
    name: 'El Buen Chico',
    isDefault: false,
    perks: [
      { id: 'batteries_included', name: 'Batteries Included', desc: 'Cerca de un gen completado, ganas +5% de Haste.' },
      { id: 'friends_till_end', name: "Friends 'til the End", desc: 'Al enganchar a un superviviente que no es el Obsession, cambia el Obsession al enganchado.' },
      { id: 'hex_two_can_play', name: 'Hex: Two Can Play', desc: 'Hex: al ser cegado, el superviviente queda ciego también.' },
    ]
  },
  {
    id: 'unknown',
    name: 'Lo Desconocido',
    isDefault: false,
    perks: [
      { id: 'hex_two_can_play_u', name: 'Hex: Two Can Play', desc: 'Copia de The Good Guy.' },
      { id: 'unforeseen', name: 'Unforeseen', desc: 'Al dañar un gen, los supervivientes en él quedan con tu radio de terror en vez del tuyo.' },
      { id: 'unbound', name: 'Unbound', desc: 'Subiendo o bajando desde una ventana, ganas Haste por 8s.' },
    ]
  },
  {
    id: 'lich',
    name: 'El Liche',
    isDefault: false,
    perks: [
      { id: 'hex_blood_warden', name: 'Hex: Blood Warden', desc: 'Copia mejorada de The Nightmare.' },
      { id: 'languid_touch', name: 'Languid Touch', desc: 'Supervivientes que salgan de lockers quedan Exhausted por 14s.' },
      { id: 'spellcraft', name: 'Spellcraft', desc: 'Usar un poder de hechizo da efectos sobre el escenario durante 40s.' },
    ]
  },
  {
    id: 'dark_lord',
    name: 'El Señor Oscuro',
    isDefault: false,
    perks: [
      { id: 'hex_monstrous', name: 'Hex: Monstrous Shrine', desc: 'Hex: engancharse en el sótano lleva más tiempo y da desventajas.' },
      { id: 'dominance', name: 'Dominance', desc: 'Al golpear con tu poder, el superviviente queda Hindered y con velocidad reducida.' },
      { id: 'dark_arrogance', name: 'Dark Arrogance', desc: 'Eres inmune a los stuns de caída desde alturas.' },
    ]
  },
  {
    id: 'houndmaster',
    name: 'La Maestra de Perros',
    isDefault: false,
    perks: [
      { id: 'all_shaking', name: 'All-Shaking Thunder', desc: 'Tras caer de altura, tus ataques de lunge son más largos por 15s.' },
      { id: 'scourge_hound', name: 'Scourge Hook: Hound', desc: 'Scourge: al enganchar, liberas un perro que patrulla el área.' },
      { id: 'ultimate_weapon_h', name: 'Ultimate Weapon', desc: 'Copia de The Xenomorph.' },
    ]
  },
  {
    id: 'vecna',
    name: 'El Primero',
    isDefault: false,
    perks: [
      { id: 'languid_touch_v', name: 'Languid Touch', desc: 'Copia.' },
      { id: 'hex_misfits', name: "Hex: Misfits", desc: 'Hex: supervivientes que vean a supervivientes heridos quedan Oblivious.' },
      { id: 'spellcraft_v', name: 'Spellcraft', desc: 'Copia.' },
    ]
  },
  {
    id: 'ghoul',
    name: 'El Ghoul',
    isDefault: false,
    perks: [
      { id: 'predatory_omen', name: 'Predatory Omen', desc: 'Ves el aura de los supervivientes que te han visto en los últimos 8s.' },
      { id: 'dark_hunger', name: 'Dark Hunger', desc: 'Cada golpe de poder te da un token para acciones más rápidas.' },
      { id: 'insatiable', name: 'Insatiable', desc: 'Herir al mismo superviviente varias veces en una persecución da Haste.' },
    ]
  },
  {
    id: 'springtrap',
    name: 'El Animatronico',
    isDefault: false,
    perks: [
      { id: 'end_transmission', name: 'End Transmission', desc: 'Ves auras de supervivientes que han reparado más del 50% de un gen.' },
      { id: 'nowhere_run', name: 'Nowhere to Run', desc: 'Al recoger a un superviviente, los supervivientes cercanos quedan cegados.' },
      { id: 'animatronic_instinct', name: 'Animatronic Instinct', desc: 'Ves las auras de supervivientes cuando entran en ganchos especiales de Springtrap.' },
    ]
  },
  {
    id: 'jason',
    name: 'The Slasher (Jason)',
    isDefault: false,
    perks: [
      { id: 'relentless', name: 'Relentless', desc: 'Al fallar un ataque, no sufres penalización de movimiento.' },
      { id: 'dead_focus', name: 'Dead Focus', desc: 'Cuantos más supervivientes mueran, más aumenta tu velocidad de persecución.' },
      { id: 'cold_blooded', name: 'Cold-Blooded', desc: 'Eres inmune a efectos de ralentización temporales durante persecuciones.' },
    ]
  },
  {
    id: 'krasue',
    name: 'El Krasue',
    isDefault: false,
    perks: [
      { id: 'float_like', name: 'Float Like a Butterfly', desc: 'En forma flotante, eres Undetectable pero tienes radio de visión limitado.' },
      { id: 'visceral_canker', name: 'Visceral Canker', desc: 'Al golpear con tu poder especial, el superviviente queda marcado.' },
      { id: 'dark_shroud', name: 'Dark Shroud', desc: 'Al cambiar de forma, los supervivientes a 16m quedan ciegos temporalmente.' },
    ]
  },
]
