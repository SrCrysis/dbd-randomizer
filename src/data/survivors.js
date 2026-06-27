// survivors.js — Todos los supervivientes de Dead by Daylight
// Cada personaje tiene 3 perks únicas + isDefault indica si viene en el juego base
// Las perks generales (teachable para todos) van en perks.js por separado

export const survivors = [
  
  {
    id: 'dwight',
    name: 'Dwight Fairfield',
    isDefault: true,
    perks: [
      { id: 'bond', name: 'Vinculo', desc: 'Ves las auras de los supervivientes cercanos a 20/28/36m.' },
      { id: 'prove_thyself', name: 'Demuestra lo que vales', desc: 'Reparar con otros supervivientes te da +15% de velocidad.' },
      { id: 'leader', name: 'Lider', desc: 'Supervivientes a 8m se benefician de +15% de velocidad en acciones.' },
    ]
  },
  {
    id: 'meg',
    name: 'Meg Thomas',
    isDefault: true,
    perks: [
      { id: 'adrenaline', name: 'Adrenalina', desc: 'Al completar todos los gens, te curas un estado de salud y ganas Haste por 3s.' },
      { id: 'quick_quiet', name: 'Velocidad Silenciosa', desc: 'Las Acciones rapidas son silenciosas. Se activa 1 vez cada 30/25/20s' },
      { id: 'sprint_burst', name: 'Esprint', desc: 'Al correr, ganas 150% de Haste por un maximo de 3s. Causa Agotamiento 60/50/40s.' },
    ]
  },
  {
    id: 'claudette',
    name: 'Claudette Morel',
    isDefault: true,
    perks: [
      { id: 'botany', name: 'Conocimientos de Botanica', desc: 'Curas a otros supervivientes un 22/33/44% más rápido.' },
      { id: 'empathy', name: 'Empatia', desc: 'Ves las auras de supervivientes heridos a 64/96/128m.' },
      { id: 'self_care', name: 'Autocuracion', desc: 'Puedes curarte sin kit médico al 50% de velocidad.' },
    ]
  },
  {
    id: 'jake',
    name: 'Jake Park',
    isDefault: true,
    perks: [
      { id: 'calm_spirit', name: 'Espiritu Calmado', desc: 'Reduce un 80/90/100 la probabilidad de alertar los cuervos, tambien permite controlar el impulso de gritar.' },
      { id: 'iron_will', name: 'Voluntad de Hierro', desc: 'Tus gemidos de dolor son 50/75/100% más silenciosos. (No funciona con Agotamiento. NO provoca Agotamiento)' },
      { id: 'saboteur', name: 'Sabotaje', desc: 'Puedes sabotear ganchos sin kit de herramientas. Tiempo de recarga de 60s' },
    ]
  },
  {
    id: 'nea',
    name: 'Nea Karlsson',
    isDefault: true,
    perks: [
      { id: 'balanced_landing', name: 'Caida Equilibrada', desc: 'Al caer de alturas, ganas Haste por maximo 3s y la recuperacion se reduce un 75%. Causa Agotamiento 60/50/40s.' },
      { id: 'urban_evasion', name: 'Evacion Urbana', desc: 'La velocidad al ir agachado se incrementa en 90/95/100%.' },
      { id: 'streetwise', name: 'Con Calle', desc: 'Las cargas de tus objetos duran 25% mas para ti y los aliados en un radio de 8m.' },
    ]
  },
  {
    id: 'laurie',
    name: 'Laurie Strode',
    isDefault: false,
    perks: [
      { id: 'decisive_strike', name: 'Golpe Decisivo', desc: 'Tras ser desenganchado, durante 60s estara activo, si el asesino te atrapa se activara un skillcheck que te libera del asesino. Esto lo aturde 3s' },
      { id: 'sole_survivor', name: 'Solo quedo yo', desc: 'Cada superviviente muerto otorga un distintivo, el Asesino no podra detectar tu aura en 20/22/24m. Tambien obtienes un 75% de velocidad al reparar y 50% de velocidad al abrir puertas de salida o la trampilla' },
      { id: 'object_obsession', name: 'Objecto de Obsesión', desc: 'Compartes visión de aura con el asesino cuando éste te mira, si eres la Obsesion el efecto se activa en un alcance de 56/64/72m, de lo contrario 44/56/64m.' },
    ]
  },
  {
    id: 'ace',
    name: 'Ace Visconti',
    isDefault: false,
    perks: [
      { id: 'ace_in_hole', name: 'As en la Manga', desc: 'Al sacar un Objeto de un Cofre, hay un 100% de probabilidades de que lleve un Accesorio Muy Raro o inferior y un 10/25/50% de probabilidades de que lleve un Accesorio Poco Comun o inferior.' },
      { id: 'open_handed', name: 'A Mano Descubierta', desc: 'Aumenta el alcance de la percepcion de Auras en 4/6/8m.' },
      { id: 'up_the_ante', name: 'Subir la apuesta', desc: 'Por cada Superviviente vivo, otorga un 1/2/3% de Suerte adicional al resto de Supervivientes.' },
    ]
  },
  {
    id: 'bill',
    name: 'Bill Overbeck',
    isDefault: false,
    perks: [
      { id: 'borrowed_time', name: 'Tiempo Prestado', desc: 'Los supervivientes que descuelgas: Mantienen su estado de Resisntencia durante 10s adicionales. Mantienen la bonificacion de velocidad de movimiento durante 10s adicionales.' },
      { id: 'left_behind', name: 'Abandonado A tu Suerte', desc: 'Si eres el ultimo supervivivente con vida en la Partida, podras ver el Aura de la Trampilla a una distancia de 24/28/32m.' },
      { id: 'unbreakable', name: 'Inquebrantable', desc: 'Podras recuperarte por completo del estado Agonizante Una Vez Por Partida. Aumenta en un 15/20/25% la velocidad de recuperacion cuando estas agonizante.' },
    ]
  },
  {
    id: 'feng',
    name: 'Feng Min',
    isDefault: false,
    perks: [
      { id: 'alert', name: 'Alerta', desc: 'Cuando el Killer rompe algo, puedes verlo durante 3/4/5s.' },
      { id: 'lithe', name: 'Agilidad', desc: 'Tras dar un salto rapido, aceleras a un 150% de tu velocidad normal de carrera durante un maximo de 3s. Causa Agotamiento durante 60/50/40s.' },
      { id: 'technician', name: 'Pericia Tecnica', desc: 'Tus reparaciones hacen menos ruido y la distancia a la que se oyen se reduce 8 metros. Con un Skillcheck de reparacion fallida el motor no explota.' },
    ]
  },
  {
    id: 'david',
    name: 'David King',
    isDefault: false,
    perks: [
      { id: 'dead_hard', name: 'Chungo', desc: 'Pulsando el boton de habilida mientras corres obtienes el estado Resistencia durante 1s. Causa el efecto Agotamiento durante 60/50/40s.' },
      { id: 'we_re_gonna_live', name: "Vamos a vivir para siempre", desc: 'Cuando cures a un superviviente Agonizante, tu velocidad de curacion aumenta un 100%. Cuando este activa si curas a otro Superviviente en estado Agonizante, obtendras el efecto Resistencia durante 10s.' },
      { id: 'no_mither', name: 'Me la pela', desc: 'Sufres el efecto de Desesperanza durante toda la partida. No dejas Charcos de Sangrem los Gruñidos de Dolor causados pro las heridas se reducen un 0/25/50% en todo momento. Te permite recuperarte completamente del estado Agonizante.' },
    ]
  },
  {
    id: 'quentin',
    name: 'Quentin Smith',
    isDefault: false,
    perks: [
      { id: 'pharmacy', name: 'Farmacia', desc: 'Puedes registrar Cofres un 40/60/80% mas rapido. Ademas, haces menos ruido, y la distancia desde la que se oye se reduce 8m. Te garantiza un botiquin de emergencia.' },
      { id: 'resilience', name: 'Vigilia', desc: 'Los aliados en un alcance de 8m y tu se recuperan de los estados: Agotamiento, Hemorragia, Laceracion, Entorpecimiento, Cegera, Vulnerabilidad, Desesperanza e Inconsciencia un 10/15/20% mas rapido. Una vez fuera del alcance, el efecto durara 15s.' },
      { id: 'wake_up', name: 'Despierta!', desc: 'Cuando se repare el ultimo Generador, veras las Puertas de Salida dentro de un radio de 128m. Mientras abres una puerta el resto de Supervivientes vera tu Aura. Abriras las puertas de salida un 15/20/25% mas rapido.' },
    ]
  },
  {
    id: 'detective_tapp',
    name: 'Detective Tapp',
    isDefault: false,
    perks: [
      { id: 'tenacity', name: 'Tenacidad', desc: 'Te permite arrastrarte un 50% mas rapido y recuperarte al mismo tiempo. Los Gruñidos de Dolor en estado agonizante se reducen un 75%.' },
      { id: 'detective_hunch', name: "Corazonada", desc: 'Cuando se complete un Generador podras ver el Aura de los Generadores, Cofres, Totems en un radio de 32/48/64m durante 10s.' },
      { id: 'stake_out', name: 'Bajo Vigilancia', desc: 'Cada 15s que estes dentro del Radio de Terror consigues un distintivo hasta aun maximo de 2/3/4. Cuando tienes al menos 1 Distintivo, los Skillchecks superados se consideran excelentes y consumen 1 distintivo.' },
    ]
  },
  {
    id: 'kate',
    name: 'Kate Denson',
    isDefault: false,
    perks: [
      { id: 'windows_opp', name: 'Oportunidades', desc: 'Se te revelan las Auras de Pallets y saltos a menos de 32m.' },
      { id: 'dance_with_me', name: 'Baila Conmigo', desc: 'Cuando haces una accion rapida, no dejas Marcas de Arañazos durante 3s. Baila conmigo tiene un tiempo de recarga de 60/50/40s.' },
      { id: 'boil_over', name: 'Arrebato', desc: 'Tus efectos de Forcejeo contra ael Killer aumentan en un 60/70/80% Nublas la habilidad del Killer de ver Auras de Gancho en un radio de 16m. Obtienes un 33% del progreso de forcejeo actual cuando el Killer caiga de una gran altura.' },
    ]
  },
  {
    id: 'adam',
    name: 'Adam Francis',
    isDefault: false,
    perks: [
      { id: 'autodidact', name: 'Autodidacta', desc: 'Por cada purba de habilidad completada al curar a un Superviviente, recibes un distintivo, hasta un maximo de 3/4/5. Cada uno te concede un 15% de progrecion adicional al competar un Skillcheck al curar supervivientes.' },
      { id: 'diversion', name: 'Distraccion', desc: 'Se activa cuando permaneces 30s en el Radio de Terror del Killer mientras no estas en persecusion. Al pulsar el boton de Habilidad estando agachado y sin moverte lanza una pieda que produce un ruido intenso para el asesino a una distancia de 10/15/20m.' },
      { id: 'deliverance', name: 'Liberacion', desc: 'Al realizar un rescate segurod a otro superviviente. Tienes un 100% de probabilidades de desengancharte cuando intentes escapar. Cuando te liberas del Gancho, sufres el efecto de Desesperanza durante 100/80/60s.' },
    ]
  },
  {
    id: 'jeff',
    name: 'Jeff Johansen',
    isDefault: false,
    perks: [
      { id: 'aftercare', name: 'Postratamiento', desc: 'Puedes ver el Aura de los Supervivientes que: Hayas rescatado de un Gancho o te rescaten de un Gancho. Cures con una accion completa o te curen con una accion completa. Podras ver el aura de hasta 1/2/3 Supervivientes.' },
      { id: 'breakdown', name: 'Ruptura', desc: 'Cada vez que te liberas del Gancho, el Gancho se rompe y revela el Aura del Killer por 4/5/6s. Un gancho roto con esta habilidad tarde 180s en reaparecer.' },
      { id: 'distortion', name: 'Distorsion', desc: 'Cuando el Asesino este a punto de ver tu Aura, Se te descuenta un distintivo y durante los proximos 6/8/10s El Killer no vera tu Aura y no dejaras Marcas de Arañazos.' },
    ]
  },
  {
    id: 'jane',
    name: 'Jane Romero',
    isDefault: false,
    perks: [
      { id: 'solidarity', name: 'Solidaridad', desc: 'Si te han herido, cuando curas a otro Superviviente sin usar un Botiquin tambien te curas a ti en un 40/45/50% de la velocidad normal.' },
      { id: 'head_on', name: 'De Frente', desc: 'Al entrar en un Locker por 3s y luego salir de la taquilla y usar De Frente. Si el Killer esta al alcance quedara aturdido durante 3s. Esto causa Agotamiento durante 60/50/40s.' },
      { id: 'poised', name: 'Serenidad', desc: 'Despues de completar un Generador no dejas Marcas de Arañazos por 6/8/10s.' },
    ]
  },
  {
    id: 'ash',
    name: 'Ash Williams',
    isDefault: false,
    perks: [
      { id: 'buckle_up', name: 'Sujetate', desc: 'Es posible distinguir lo avanzada que esta la recuperacion de los Supervivientes Agonizantes segun la intensidad de su Aura. Cuando cures a un SUperviviente Agonizante hasta que solo quede Herido. Tanto tu como el Superviviente podran ver el aura del Killer por 4/5/6s.' },
      { id: 'flip_flop', name: 'Hasta Otra', desc: 'Cuando estas Agonizante, un 50% de tu progreso de recuperacion se convierte en progreso de forcejeo cuando te recoge el Killer. Hasta un maximo del 40/45/50%.' },
      { id: 'mettle_of_man', name: 'Temple Del Hombre', desc: 'Despues de recibir 3 Golpes Protectores: Seras invulnerable a cualquier daño recibido que te hubiera dejado Agonizante cuando estes Herido. La proxima vez que te cures por completo tu Aura se le revelara al Killer si te encuentras a ma de 12/14/16m de el.' },
    ]
  },
  {
    id: 'nancy',
    name: 'Nancy Wheeler',
    isDefault: false,
    perks: [
      { id: 'better_together', name: 'Mejor Juntos', desc: 'El Aura del Generador que se esta reparando se revela a los demas Supervivientes que se encuentren en un radio de 32m. Si el Killer derriba a un Superviviente mientras esta reparando el Generador. Ves el aura de los demas Supervivientes por 8/9/10s.' },
      { id: 'inner_strength', name: 'Fuerza Interior', desc: 'Cada vez que purificas un Totem: Si estas heridos y te escondes en un Locker durante 10/9/8s te recuperas por completo.' },
      { id: 'Fixated', name: 'Fijacion', desc: 'Ves tus Marcas de Arañazos en todo momento, mientras no sufras heridas, caminas un 10/15/20% mas rapido.' },
    ]
  },
  {
    id: 'steve',
    name: 'Steve Harrington',
    isDefault: false,
    perks: [
      { id: 'babysitter', name: 'Canguro', desc: 'Cuando desenganchas a un Superviviente, este no deja Marcas de Arañazos ni Charcos de Sangre durante 4/6/8s. El Killer y tu podran ver sus respectivas Auras por 4s.' },
      { id: 'camaraderie', name: 'Camaraderia', desc: 'Si otro sobreviviente se encuentra dentro de tu radio de 16m, el temporizador se detiene deurante 26/30/34s.' },
      { id: 'second_wind', name: 'Segundo Aliento', desc: 'Luego de curar el equivalente a un estado de salud: Luego de que te desenganchen o desengancharte por tus propios medios sufres de Desesperanza, despues de 34/32/30s te curaras por completo. ' },
    ]
  },
  {
    id: 'yui',
    name: 'Yui Kimura',
    isDefault: false,
    perks: [
      { id: 'any_means_necessary', name: 'Cueste lo que Cueste', desc: 'Al pulsar el boton de habilidad durante 4s levantas un Pallet derribado para volver a dejarlo en su posicion original. Tiempo de recarga de 140/130/120s.' },
      { id: 'lucky_break', name: 'Golpe De Suerte', desc: 'Cuando te hieren: No dejas Charcos de Sangre por 120/150/180s.' },
      { id: 'breakout', name: 'Fuga', desc: 'Cuando estas a menos de 6m de un Superviviente con el que este cargando el Killer, se te aplica el efecto de estado Haste, que aumenta un 5/6/7% tu velocidad de movimiento. El Superviviente forcejea un 20% mas rapido.' },
    ]
  },
  {
    id: 'zarina',
    name: 'Zarina Kassir',
    isDefault: false,
    perks: [
      { id: 'for_the_people', name: 'Por la Gente', desc: 'Pulsa el boton de habilidad mientras curas a otro Superviviente sin un Botiquin para curarlo al momento de Agonizante a Herido o Herido a Ileso. A cambio tu sufres el efecto de Desesperanza por 110/100/90s.' },
      { id: 'off_the_record', name: 'Extraoficial', desc: 'Cuanto de desenganchen o te escapes del gancho, Extraoficial se activa durante 60/70/80s Obtienes el estado de Resistencia, no se mostrara tu Aura al asesino y los Gruñidos de Dolor se reducen un 100%' },
      { id: 'red_herring', name: 'Bulo', desc: 'Tras reparar un Generador por almenos 3s se iluminara con un Aura solo visible para ti. Al entrar en un Locker activara una alerta de ruido para el asesino en la ubicacion del Generador. Tiempo de recarga de 100/80/60s.' },
    ]
  },
  {
    id: 'cheryl',
    name: 'Cheryl Mason',
    isDefault: false,
    perks: [
      { id: 'blood_pact', name: 'Pacto de Sangre', desc: 'Cuando la Obsesion o tu estan heridos, ella ve tu Aura y tu la suya. Despues de completar la accion de curar a la Obsesion o que ella te cure a ti se les aplica a ambos un 7% del efecto de Haste durante 6/8/10s.' },
      { id: 'repressed_alliance', name: 'Supresion de Alianza', desc: 'Tras reparar un Generador un total de 80/70/60s, puedes usar el boton de habilidad para bloquear el Generador durante 30s.' },
      { id: 'soul_guard', name: 'Salvaguarda del alma', desc: 'Se te aplica el estado Resistencia por 4/6/8s despues de que te curen o de haberte recuperado tras estar Agonizante. Durante este tiempo, cualquier daño que te dejara agonizante te aplicara en su lugar Herida Profunda. Tendras 20s para sanarte.' },
    ]
  },
  {
    id: 'felix',
    name: 'Felix Richter',
    isDefault: false,
    perks: [
      { id: 'visionary', name: 'Vision de Futuro', desc: 'Ves las Auras de los Generadores a una distancia maxima de 32m. Se desactiva durante 20/18/16s cada vez que se completa un generador.' },
      { id: 'desperate_measures', name: 'Medidas Desesperadas', desc: 'Por cada sobreviviente heridos, enganchado o agonizante, la velocidad de tus acciones de curacion y desenganche aumenta un 10/12/14%.' },
      { id: 'built_to_last', name: 'Construccion Duradera', desc: 'Tras ocultarte en un Locker durante 12s con un objeto sin cargas, se rellenara con un 99% de las cargas. Cada vez que uses Construccion Duradera se reducen las cargas repuestas en un 33%.' },
    ]
  },
  {
    id: 'elodie',
    name: 'Elodie Rakoto',
    isDefault: false,
    perks: [
      { id: 'appraisal', name: 'Evaluacion', desc: 'Si ya se ha abierto un cofre, puedes gastar un distintivo para buscar un objeto en el. La velocidad a la que rebuscas en los cofres aumenta un 40/60/80%. ' },
      { id: 'deception', name: 'Engaño', desc: 'Si interactuas con un Locker, al esprintar se aactivara una notificacion de ruido y no dejaras Marca de Arañazos durante los proximos 3 segundos. Ya no podras entrar a los casilleros al esprintar mientras la habilidad este activa. Esta tiene un tiempo de recarga de 60/50/40s.' },
      { id: 'power_struggle', name: 'Lucha Intensa', desc: 'Cuando sufras el estado agonizante, veras el Aura de los Pallets disponibles. Cuando el asesino te lleva, forcejea hasta alcanzar un 25/20/15%. Cuando estes cerca de un Pallet fijo podras aturdir al Killer.' },
    ]
  },
  {
    id: 'yun',
    name: 'Yun-Jin Lee',
    isDefault: false,
    perks: [
      { id: 'fast_track', name: 'Primera Linea', desc: 'Cada vez que cuelguen a otro sobreviviente obtienes 3 distintivos. Cosumes todos los distintivos tras obtener un Skillcheck excelente en un generador. Cada distintivo consumido obtiene un progreso adicional de 1% con los Skillchecks excelentes al reparar generadores.' },
      { id: 'smash_hit', name: 'Exito Aplastante', desc: 'Tras aturidr al asesino con un Pallet, esprinta con un 150% de tu velocidad normal durante 4s. Provoca el estado de Agotamiento durante 40s.' },
      { id: 'self_preservation', name: 'Autoconservacion', desc: 'Cuando otro sobreviviente sufre un ataque basico o especial a 16m de ti. Tus Marcas de Arañazos, Charcos de Sangre y Gruñidos de Dolor se ocultan durante 10s.' },
    ]
  },
  {
    id: 'jill',
    name: 'Jill Valentine',
    isDefault: false,
    perks: [
      { id: 'counterforce', name: 'Contrafuerza', desc: 'Purificas totems un 20% mas rapido. Luego de purificar un totem vez el aura del Totem mas lejano durante 4s y obtienes un 20% de velocidad adicional para purificar totems para el resto de la partida.' },
      { id: 'resurgence', name: 'Resurgimiento', desc: 'Obtienes un 50% de progreso de curacion al instante despues de que alguien te desenganche o te desenganches por tus propios medios.' },
      { id: 'blast_mine', name: 'Mina Explosiva', desc: 'Tras reparar 66% de un Generador, con el boton de habilidad puedes colocar una trampa que permanece activa durante 45s. Cuando el asesino patea el Generador con la trampa, esta explota aturdiendo y cegando a quienes esten cerca.' },
    ]
  },
  {
    id: 'leon',
    name: 'Leon Kennedy',
    isDefault: false,
    perks: [
      { id: 'flashbang', name: 'Granada Aturdidora', desc: 'Tras reparar 50% de un Generador, entra en un casillero sin llevar nada y pulsa el boton de habilidad para fabricar una granada cegadora.' },
      { id: 'rookie_spirit', name: "Espiritu de Novato", desc: 'Al completar 3 Skillchecks normales o excelentes mientra reparas un Generador puedes activar la habilidad y ver por el resto de partida el Aura de los Generadores Revertidos.' },
      { id: 'bite_the_bullet', name: 'De Tripas Corazon', desc: 'Ni el superviviente que te esta curando ni tu emiten ningun sonido, ni gruñido. No hay notificacion de ruido en las Skillchecks fallidas y la curacion se revierte solo un 1%.' },
    ]
  },
  {
    id: 'mikaela',
    name: 'Mikaela Reid',
    isDefault: false,
    perks: [
      { id: 'boon_circle', name: 'Bendicion: Circulo de curacion', desc: 'Tótem bendecido: los supervivientes se curan 40/45/50% más rápido en su radio.' },
      { id: 'boon_shadow', name: 'Bendicion: Paso sombrio', desc: 'Tótem bendecido: en 24m todos los supervivientes podran ocultar sus Marcas de Arañazos y Auras. Este efecto dura 4s tras alejarse del totem.' },
      { id: 'clairvoyance', name: 'Clarividecia', desc: 'Luego de purificar un totem, cuando tengas las manos vacias manten el boton de habilidad para percibir Auras. Durante 10s, podras ver las Auras de las puertas de salida/Cofres/Tampilla a 64m.' },
    ]
  },
  {
    id: 'jonah',
    name: 'Jonah Vasquez',
    isDefault: false,
    perks: [
      { id: 'overcome', name: 'Sobreponerse', desc: 'Al ser herido, ganas Haste por 2s. Esto causa Agotamiento por 60/50/40s.' },
      { id: 'corrective_action', name: 'Medida Correctiva', desc: 'Cada Skillcheck excelente proporciona un distintivo hasta un maximo de 5. Cuando un superviviente falla un Skillcheck normal mientra coopera contigo se consume un distintivo y su Skillcheck se vuelve un Skillcheck superado.' },
      { id: 'boon_exponential', name: 'Bendicion: Exponencial', desc: 'Totem Bendecido: Alrededor de 24m todos los Supervivientes se recuperan un 100% mas rapido y se curan por completo del estado agonizante.' },
    ]
  },
  {
    id: 'vittorio',
    name: 'Vittorio Toscano',
    isDefault: false,
    perks: [
      { id: 'quick_gambit', name: 'Tecnica Rapida', desc: 'Cuando el Killer te persigue, ves el Aura de los Generadores a 36m. Los Sobrevivientes que esten reparando los generadores resaltados reciben un 6/7/8% de aumento de velocidad de reparacion.' },
      { id: 'potential_energy', name: 'Energia Potencial', desc: 'Tras reparar un Generador por 12/10/8s sin interrupcion, presiona el boton de habilidad, cuando estes reparando el generador cargara la ventaja en lugar de hacer el que el generador progrese. Por cada 1.5% de reparacion obtendras 1 distintivo hasta un maximo de 20. Mientras la ventaja tenga almenos 1 distintivo puedes presionar el boton de habilidad para consumir los distintivos y hacer que el generador progrese 1% por cada distintivo.' },
      { id: 'fogwise', name: 'Conocimiento de Niebla', desc: 'Despues de tener un Skillcheck excelente al reparar un Generador. Se revela el Ara del asesino por 4/5/6s.' },
    ]
  },
  {
    id: 'thalita',
    name: 'Thalita Lyra',
    isDefault: false,
    perks: [
      { id: 'friendly_competition', name: 'Competencia Amistosa', desc: 'Cada vez que termines de reparar un Generador con almenos 1 Superviviente mas. Tu y otros Sobrevivientes que terminen de reparar reciben un aumento de 5% por 45/60/75s en la velocidad de reparacion. ' },
      { id: 'teamwork_power', name: 'Trabajo en Equipo: El Poder de Dos', desc: 'Cuando termines de curar a otro superviviente, ambos se moveran un 5% mas rapido siempre y cuando esten a 12m del otro, esto se cancela al perder un estado de salud. Puede activarse una vez cada 180/160/140s.' },
      { id: 'cut_loose', name: 'Sueltate', desc: 'Despues de un salto rapido: Tus saltos rapidos se silencian durante 4/5/6s y logras con exito un salto rapido durante ese tiempo reinicia el temporizador. Esta tiene un tiempo de recuperacion de 45s.' },
    ]
  },
  {
    id: 'renato',
    name: 'Renato Lyra',
    isDefault: false,
    perks: [
      { id: 'background_player', name: 'Personaje Secundario', desc: 'Cuando el Killer atrapa a otro Superviviente: durante 10s comienzas a correr y aceleras un 200% de tu velocidad normal de carrera durante 5s. Esta ventaja causa el efecto de Agotado durante 40s.' },
      { id: 'teamwork_collective', name: 'Trabajo en Equipo: Sigilo Colectivo', desc: 'Cuando te terminan de curar, ninguno dejara Marcas de Arañazos, siempre y cuando esten a 12m del otro hasta que alguien pierda un estado de salud. Esta tiene un tiempo de recuperacion de 180/160/140s.' },
      { id: 'boon_dark_theory', name: 'Impulso Sangriento', desc: 'Cuando estas a un gancho de morir: Cuando no estes herido, corras y sufras de Agotamiento, presiona el boton de Accion para perder un estado de salud y recuperarte del Agotamiento instantaneamente, esto te dara Desesperanza por 28/24/20s. Luego de 20s, te curas de forma automatica y pasaras del estado herido a ileso. Caer en estado agonizante cancela el efecto de curacion.' }, //Editar
    ]
  },
  {
    id: 'gabriel',
    name: 'Gabriel Soma',
    isDefault: false,
    perks: [
      { id: 'made_for_this', name: 'Nacido para Esto', desc: 'Cuando estas herido: Al terminar de curar a otro superviviente obtienes Resistencia durante 6/8/10s. Mientras tengas Herida Profunda corres un 1/2/3% mas rapido.' },
      { id: 'troubleshooter', name: 'Solucionador de Problemas', desc: 'Cuando te persigue el Killer, Ves el aura del Generador con mayor progreso de reparacion. Ves el aura del Killer durante 4/5/6s luego de caer un Pallet. El efecto dura 10s Tras entrar en persecucion.' },
      { id: 'scavenger', name: 'Chatarrero', desc: 'Al sostener una caja de herramientas vacia: Al realizar con exito un Skillcheck excelente obtienes 1 y 5 distintivos, Al alcanzar el maximo los pierdes todos y se recarga tu caja de herramientas. La velocidad al reparar generadores es un 50% mas lenta durante 40/35/30s. ' },
    ]
  },
  {
    id: 'nicolas',
    name: 'Nicolas Cage',
    isDefault: false,
    perks: [
      { id: 'plot_twist', name: 'Giro Argumental', desc: 'Cuando te hieren: Presiona el boton de habilidad 2 mientras estas agachado y quieto para entrar en estado agonizante. Al realizar esto no dejas Charcos de Sangre y no haces ruido. Puedes recuperarte por completo de este estado, Al recuperarte te curas al instante y obtienes 50% de Haste durante 2/3/4s.' },
      { id: 'scene_partner_nc', name: 'Compa de Escena', desc: 'Dentro del Radio de Terror: Cuando miras en direccion del asesino, gritas y veras su aura durante 3/4/5s. Hay probabilidad de que el asesino te vea.de volver a gritar, si eso sucede veras el aura del asesino durante 2s mas. Esta tiene un tiempo de recuperacion de 60s.' },
      { id: 'dramaturgy', name: 'Dramaturgia', desc: 'Cuando estas ileso y corres presiona el boton de habilidad 2 para correr elevand las rodillas durante 0.5s y obten 25% de Haste durante 2s. Seguido de un efecto Random como: Quedas Expuesto por 12s. Obtienes 25% de Haste durante 2s. Gritas pero no pasa nada. Obten un Objeto Aleatorio soltando el objeto que tengas en mano. Genera efecto Agotamiento por 60/50/40s.' },
    ]
  },
  {
    id: 'ellen',
    name: 'Ellen Ripley',
    isDefault: false,
    perks: [
      { id: 'chemical_trap', name: 'Trampa Quimica', desc: 'Luego de reparar un generador por un total de 70/60/50%: Al pararte en un Pallet usado utiliza el boton de habilidad 2 para instalar una trampa que estara activa por 100/110/120s. Cuando el Killer la destruya se relentizara un 50% por 4s.' },
      { id: 'lucky_star', name: 'Estrella De La Suerte', desc: 'Cuando te escondes en un locker, suprime tus gruñidos de dolor y la creacion de charcos de sangre por 10s. Al salir: Vez las auras de los otros supervivientes y el aura del generador mas cercano a ti por 10s. Esta tiene un tiempod e recuperacion de 40/35/30s.' },
      { id: 'light_footed', name: 'Agil', desc: 'Mientras estes ileso: Silencia el sonido de tus pisadas cuando corres. Esta tiene un tiempo de recuperacion de 28/24/20s despues de ejecutar una accion rapida.' },
    ]
  },
  {
    id: 'alan',
    name: 'Alan Wake',
    isDefault: false,
    perks: [
      { id: 'boon_illumination', name: 'Bendicion: Iluminacion', desc: 'Los supervivientes dentro del alcance del totem bendecido ven las auras de todos los cofres y generadores en color azul.' },
      { id: 'champion_of_light', name: 'Campeon de la Luz', desc: 'Cuando enciendes una linterna obtenes un 50% de  Haste, cuando logras cegar al asesino, este tambien recibe un 20% del estado Entorpecimiento durante 6s. La ventaja tiene un tiempo de recuperacion de 60s.' },
      { id: 'deadline', name: 'Fecha Limite', desc: 'Cuando estas herido: Las pruebas de habilidad aparecen un 6/8/10% con mayor frecuencia cuando reparas o curas y aparecen en lugares al azar, la penalizacion por fallar pruebas de habilidad se reduce en un 50%.' },
    ]
  },
  {
    id: 'sable',
    name: 'Sable Ward',
    isDefault: false,
    perks: [
      { id: 'wicked', name: 'Malicia', desc: 'Por cada distintivo te recuperas del efecto Destrozado un 16/18/20% mas rapido, mientras te afecte el efecto Maldicion, tus reparaciones seran un 3% mas rapidas.' },
      { id: 'invocation_weaving', name: 'Invocacion: Arañas Tejedoras', desc: 'Cuando llegues al Sotano, cerca del circulo utilizando el boton de habilidad 1 comienzas la Invocacion. Obtienes el estado Expuesto por el resto de la partida. Todos los sobrevivientes obtienen permanentemente un 8/9/10% de velocidad de reparacion.' },
      { id: 'strength_in_shadows', name: 'Fuerza de las Sombras', desc: 'Te permite curarte sin botiquin un 70% de la velocidad normal de curacion. Cuando terminas una curacion en el Sotano, veras el aura del asesino durante 10s. ' },
    ]
  },
  {
    id: 'aestri',
    name: 'Aestri Yazar',
    isDefault: false,
    perks: [
      { id: 'bardic_inspiration', name: 'Inspiracion Bardica', desc: 'Toca una actuación para que supervivientes cercanos tengan mejor progreso en skill checks. Al completar o fallar una prueba de habilidad esta entra en recuperacion durante 110/100/90s. ' },
      { id: 'still_sight', name: 'Mirada Fija', desc: 'Estar quieto 6/5/4s te da visión de aura del Killer, Generadores y Cofres, en un radio de 24 metros. (El efecto dura 2s despues de moverte.). ' },
      { id: 'mirrored_illusion', name: 'Ilusion Reflejada', desc: 'Al presionar el boton de habilidad 2 cuando estes junto a un Gen, Totem, Cofre o Puerta de Salida puedes generar una ilusion estatica que dura 100/110/120s.' },
    ]
  },
  {
    id: 'haddie',
    name: 'Haddie Kaur',
    isDefault: false,
    perks: [
      { id: 'inner_focus', name: 'Consentracion Interna', desc: 'Puedes ver las marcas de otros supervivientes si pierden un estado de salud a 32m de ti, se te mostrara el aura del asesino durante 5s.' },
      { id: 'overzealous', name: 'Pasion', desc: 'Al purificar un totem tu velocidad de reparacion aumenta un 8%. Esta se duplica si purificas un totem de maleficio. Se desactiva cuando pierdes un estado de salud.' },
      { id: 'residual_manifest', name: 'Manifestacion Residual', desc: 'Si consigues cegar al Killer, este sufrira de el estado Ceguera durante 30s. Esta habilidad te permite inspeccionar un cofre abierto por partida y recibir una linterna basica.' },
    ]
  },
  {
    id: 'ada',
    name: 'Ada Wong',
    isDefault: false,
    perks: [
      { id: 'wiretap', name: 'Sistema de Espionaje', desc: 'Tras reparar 50% de un gen, tienes la habilidad de colocar un sensor que permanece activo durante 100s. Cuando el asesino ingresa dentro de los 14m del generador su aura se revela a todos los sobrevivientes.' },
      { id: 'low_profile', name: 'Perfil Bajo', desc: 'Cuando eres la ultima persona en pie esta ventaja oculta tus Marcas de Arañazos, Charcos de Sangre y Gruñidos de Dolor durante 70/80/90s.' },
      { id: 'reactive_healing', name: 'Curación Reactiva', desc: 'Cuando un Superviviente pierde un estado de salud en un radio de 32m alrededor de ti y estas herido, tu progreso de curacion aumenta en un 40/45/50% de la progresion de curacion faltante.' },
    ]
  },
  {
    id: 'rebecca',
    name: 'Rebecca Chambers',
    isDefault: false,
    perks: [
      { id: 'better_than_new', name: 'Mejor Que Nuevo', desc: 'Completar una curacion a otro Sobreviviente aumenta tu velocidad de accion para Bendecir/Purificar, Curar y Debloquear en un 12/14/16%.' },
      { id: 'reassurance', name: 'Consuelo', desc: 'Mientras estas en el radio de 6m de un sobreviviente colgado, presiona el boton de habilidad para activar los siguientes efectos durante 20/25/30s. Pausar el proceso de Sacrificio. Tambien pausa la habilidad de Forcejeo para los Sobrevivientes en la Fase de Forcejeo. El controno del Sobreviviente resalta en blanco.' },
      { id: 'hyperfocus', name: 'Hiperconsentracion', desc: 'Cuando superas un Skillcheck Excelente al reparar o curar recibes un distintivo, hasta un maximo de 6. Aumenta la probabilidad de que se active una prueba de habilidad y la velocidad aumenta en un 4% por cada distintivo hasta un maximo de 24%. Aumenta la bonificacion de los Skillcheck en un 10/20/30% hasta un maximo de 60/120/180%.' },
    ]
  },
  {
    id: 'lara',
    name: 'Lara Croft',
    isDefault: false,
    perks: [
      { id: 'hardened', name: 'Endurecida', desc: 'Cada vez qe gritas revelas el aura del Asesino durante 3/4/5s.' },
      { id: 'specialist', name: 'Especialista', desc: 'Cada vez que buscas en un Cofre obtienes 1 distintivo, cuando haces una prueba de habilidad excelente consumes todos los distintivos. Por cada distintivo se redure el progreso requerido de un generador a 2/3/4 cargas, con maximo 12/18/24 cargas.' },
      { id: 'finesse', name: 'Elegancia', desc: 'Tus saltos rapidos se vuelven un 20% mas rapidos. El tiempo de recuperacion es de 40/35/30s despues del salto rapido.' },
    ]
  },
  {
    id: 'trevor',
    name: 'Trevor Belmont',
    isDefault: false,
    perks: [
      { id: 'exultation', name: 'Exultacion', desc: 'Cuando eres golpeado, la zona del asesino se oscurece para todos por 30s.' },
      { id: 'moment_of_glory', name: 'Momento de Gloria', desc: 'Copia de Lara Croft.' },
      { id: 'eyes_of_belmont', name: 'Ojos de Belmont', desc: 'Al escapar por primera vez de una persecución, ganas Haste.' },
    ]
  },
  {
    id: 'taurie',
    name: 'Taurie Cain',
    isDefault: false,
    perks: [
      { id: 'clean_break', name: 'Punto y Aparte', desc: 'Siendo perseguida, ves el gen más regresado.' },
      { id: 'invocation_treacherous_crows', name: 'Invocacion: Cuervos Traicioneros', desc: 'En el sótano, los cuervos del mapa alertan y revelan supervivientes al asesino.' },
      { id: 'shoulder_the_burden', name: 'Cargar a Cuestas', desc: 'Copia de Nicolas Cage.' },
    ]
  },
  {
    id: 'orela',
    name: 'Orela Rose',
    isDefault: false,
    perks: [
      { id: 'do_no_harm', name: 'No Hagas Daño', desc: 'Aumenta la velocidad de curacion entre un 30% y 50% por cada etapa de gancho del superviviente curado hasta un 100% y añade un 3% a 6% de progreso en Skillchecks.' },
      { id: 'duty_of_care', name: 'Deber de Diligencia', desc: 'Al estar sano y recibir un golpe de proteccion le otorga a los sobrevivientes en un radio de 12m un aumento de velocidad del 25% durante 4/5/6s.' },
      { id: 'rapid_response', name: 'Respuesta Rapida', desc: 'Al ser afectado por Agotamiento, revela el aura del asesino por 2s. Ademas, realiza una accion rapida activa este efecto por 30/35/20s.' },
    ]
  },
{
    id: 'rick',
    name: 'Rick Grimes',
    isDefault: false,
    perks: [
      { id: 'apocalyptic_ingenuity', name: 'Ingenio Apocaliptico', desc: 'Se te revelan las auras de los Pallets rotos en un radio de 24/28/32m. Despues de desbloquear 2 cofres: Mientras estas junto a un Pallet presiona el boton de habilidad durante 8s para reconstruir el Pallet como Pallet Fragil.' },
      { id: 'come_and_get_me', name: 'Ven a Buscarme!', desc: 'Luego de desenganchar a un superviviente, mientras estas agachado e inmovil presiona el boton de habilidad para que se suprima tu creacion de Charcos de Sangre y Marcas de Arañazos para todos los sobrevivientes heridos o agonizantes en un radio de 24m por lo siguientes 10/12.5/15s. Gritas y revelas tu aura durante 5s.' },
      { id: 'teamwork_toughen_up', name: 'Trabajo en equipo: Entereza', desc: 'Cuando otro superviviente que este cerca aturde o ciega al Killer mientras estas herido, tus Gruñidos de Dolor, Arañazos y Charcos de Sangre se reducen por completo por 20/25/30s.' },
    ]
  },
  {
    id: 'michonne',
    name: 'Michonne Grimes',
    isDefault: false,
    perks: [
      { id: 'conviction', name: 'Conviccion', desc: 'Se activa tras curar a otro superviviente o a ti mismo. Si eres derribado a estado Agonizante, te permite recuperarte por completo tras hacerlo recibirar el efecto Destrozado y volveras al estado Agonizante despues de 20/25/30s.' },
      { id: 'last_stand', name: 'Ultima Resistencia', desc: 'Tras pasar 120/105/90s dentro del radio de terror del asesino sin ser perseguido, realizar un salto rapido aturdira al asesino 3 segundos si esta a menos de 2.5m ' },
      { id: 'teamwork_throw_down', name: 'Trabajo en Equipo: Derribo', desc: 'Cuando curas a otro sobreviviente: Tu o tu compañero aturden al Killer con un Pallet ambos reciben un aumento de velocidad temporal o efectos de ocultamiento mientras esten cera el uno del otro.' },
    ]
  },
  {
    id: 'vee',
    name: 'Vee Boonyasak',
    isDefault: false,
    perks: [
      { id: 'road_life', name: 'A Todo Gas', desc: 'Mientras estas herido reparando un generador, los Skillscheck tienen los siguientes efectos: Otorga 1 distintivo en Skillchecks excelentes, otorga 0 distintivos en Skillchecks normales y pierdes 1 distintivo cuando fallas un Skillcheck. Una vez que acumules 6/5/4 distintivos, consumes todos para beneficiarte de un aumento en la velocidad de curacion en un 100% hasta que dejes de curar.' },
      { id: 'one_two_three_four', name: 'UNO DOS TRES CUATRO!', desc: 'Mientras estas de pie y quieto presiona el boton de habilidad para tocar la pandereta. Dura hasta 15s, Empodera a los sobreviviventes dentro de un radio de 16m activa Skillchecks continuos. Despues de completar con exito la actuacion. Lo sobrevivientes empoderados realizan curacion o reparaciones un 20% ma rapido durante 90s. Tiempo de recarga de 110/100/90' },
      { id: 'ghost_notes', name: 'Notas Fantasmales', desc: 'Mientras subres el estado Agotamiento, te beneficias de: Tus Marcas de Arañazos desparecen un 50% mas rapido y aumenta tu tasa de recuperacion del efecto un 5/7.5/10% mas rapido.' },
    ]
  },
  {
    id: 'dustin',
    name: 'Dustin Henderson',
    isDefault: false,
    perks: [
      { id: 'bada_bada_boom', name: 'Bada, Bada, Bum', desc: 'Tras completar un 20% de un Generador: Al presionar el boton de habilidad junto a una ventana, instala una trampa que se mantiene activa durante 40/50/60s La trampa le inflige un 50% de efecto de Entorpecimiento al Asesino durante 6s.' },
      { id: 'change_of_plan', name: 'Cambio de Planes', desc: 'Al restar dentro de un casillero con una caja de herramientas que no es parte de un evento activa tu habiliad para usar 1 distintivo y transformar tu caja de herramientas en un botiquin con accesorio aleatorio, ambos de la misma rareza. El botiquin nuevo tiene un 80/90/100% de sus cargas.' },
      { id: 'teamwork_full_circuit', name: 'Trabajo en Equipo: Circuito Completo', desc: 'Por cada Sobreviviente que repare contigo, el tamaño de la prueba de habiliad buena aumenta en un 15/20/25%. Mientras estes reparando un generador con al menos 1 Sobreviviente lo haras un 5% mas rapido.' },
    ]
  },
  {
    id: 'eleven',
    name: 'Jane Hopper',
    isDefault: false,
    perks: [
      { id: 'extrasensory_perception', name: 'Percepcion Extrasensorial', desc: 'Al agacharte durante 4 segundos, revelas las Auras en un radio que se expande progresivamente hasta 44m. Al dejar de agacharte o pasar 11s. la ventaja entra en un tiempo de recarga de 40s.' },
      { id: 'we_see_you', name: 'Te Vemos', desc: 'Te otorga un distintivo cada vez que el Killer revela tu Aura. Al acumular 4 distintivos puedes consumirlos tanto tu como el resto de los Supervivientes y veran el Auradel asesino durante 15s.' },
      { id: 'teamwork_soft_spoken', name: 'Trabajo en Equipo: Voz Suave', desc: 'Cuando estas reparando un Generador con otro superviviente, tu velocidad de reparacion aumenta un 5%. Ademas disminuye el ruido de reparacion en un 25% por cada superviviente que repare junto a ti.' },
    ]
  },
  {
    id: 'yoichi',
    name: 'Yoichi Asakawa',
    isDefault: false,
    perks: [
      { id: 'parental_guidance', name: 'Consejo Paterno', desc: 'Al aturdir al asesino tus marcas, charcos de sangre y gruñidos se camuflan durante 7s. ' },
      { id: 'empathic_connection', name: 'Conexion Empatica', desc: 'Vez el aura de los supervivientes heridos dentro de un radio de 25/30/35m. Aumenta la velocidad de Curacion un 10%. ' },
      { id: 'boon_dark_theory', name: 'Bendicion: Teoria Oscura', desc: 'Tótem bendecido: Otorga 2% del efecto Haste en un radio de 24m  ' },
    ]
  },
  {
    id: 'kwon',
    name: 'Kwon Tae-young',
    isDefault: false,
    perks: [
      { id: 'a_place_for_us', name: 'Un Lugar Para Nosotros', desc: 'Al curar a otro superviviente obtienes el estado Esquiva: Cuando termines de curar a la Obsesion, el estado Esquiva se manatiene durante 20/25/30s.' },
      { id: 'flow_state', name: 'Estado de Flujo', desc: 'Cada vez que se repara un generador obtienes 1 distintivo, Cada distintivo aumenta la velocidad con la que bendices/purificas, curas y desenganchas a tus compañeros un 8/9/10% mas rapido por Distintivo.' },
      { id: 'five_moves_ahead', name: 'Cinco Pasos Por Delante', desc: 'Revela las auras de los 5 Pallets y ventanas mas cercanas sin limite de rango, se recarga en 20s cuando tiras un Pallet en persecusion.' },
    ]
  },
  {
    id: 'shane',
    name: 'Shane Wiigwaas',
    isDefault: false,
    perks: [
      { id: 'wide_open_throttle', name: 'Maxima Velocidad', desc: 'Cuando saltas rapido sobre un Pallet obtienes un 10/12.5/15% de Haste durante 3s. El Pallet se restablece inmediatamente y se bloquea por el ente durante 60s.' },
      { id: 'lead_a_hand', name: 'Echar Una Mano', desc: 'Una vez por partida y por Sobreviviente, mientras curas a un Sobreviviente, presiona Activar Habilidad para darle al Sobreviviente curado 2/3/4 cargas de curacion permamente.' },
      { id: 'cross_examination', name: 'Interrogatorio', desc: 'Al estar dentro del Radio de Terror, este deja Marcas De Luz detras que puedes ver. Las Marcas de Luz duran 10s. Si estas en las Marcas de Luz obtienes el efecto de Esquiva. Esto termina despues de 3/4/5s.' },
    ]
  },
]
