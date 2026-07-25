

export const killers = [

  {
    id: 'trapper',
    name: 'El Trampero',
    isDefault: true,
    perks: [
      { id: 'agitation', name: 'Agitacion', desc: 'Cuando cargas a un superviviente, aumentas tu velocidad de movimiento en un 6/12/18% y aumenta tu radio de terror en 12m.' },
      { id: 'iron_grasp', name: 'Fuerza Brutal', desc: 'Aumenta la vlocidad de accion para romper Paredes Rompibles, Pallets y dañar Generadores en un 10/15/20%' },
      { id: 'unnerving_presence', name: 'Presencia Perturbadora', desc: 'Los supervivientes en tu radio de terror sufren un aumento en la probabilidad de activar Skillchecks en un 10%. Disminuye las zonas de exito de las pruebas de habilidad en un 40/50/60%.' },
    ]
  },
  {
    id: 'wraith',
    name: 'El Espectro',
    isDefault: true,
    perks: [
      { id: 'bloodhound', name: 'Sabueso de Sangre', desc: 'Los Charcos de Sangre son más visibles para ti permanecen visibles durante 2/3/4s mas.' },
      { id: 'predator_k', name: 'Depredacion', desc: 'Cuando un Sobreviviente escapa de una persecusion se revela su Aura durante 4s. Tiempo de recarga 60/50/40s.' },
      { id: 'shadowborn', name: 'Hijo de las Sombras', desc: 'Cuando te cieguen de cualquier manera, obtienes un 6/8/10% de Haste durante 10s.' },
    ]
  },
  {
    id: 'hillbilly',
    name: 'El HillBilly',
    isDefault: true,
    perks: [
      { id: 'enduring', name: 'Resistente', desc: 'Reduce la duracion de los Aturdimientos de Pallets un 40/45/50%.' },
      { id: 'lightborn', name: 'Hijo de la Luz', desc: 'Los sobrevivientes que intenten cegarte revelaran sus Auras durante 6/8/10s y eres inmune a las cegueras causada por Linternas, Petardos, Granadas Aturdidoras y Minas Cegadoras.' },
      { id: 'tinkerer', name: 'Manitas', desc: 'Cuando un Generador se repara en un 70% se activa una notificacion de ruido revelando su ubicacion y te otorga el estado Indetectable durante 12/14/16s.' },
    ]
  },
  {
    id: 'nurse',
    name: 'La Enfermera',
    isDefault: true,
    perks: [
      { id: 'a_nurses_calling', name: "Vocacion de Enfermera", desc: 'Se te revelan las Auras de los Sobrevivientes que se esten curando o esten siendo curados si te encuentras en un radio de 28/30/32m.' },
      { id: 'stridor', name: 'Aliento', desc: 'Aumenta el volumen de los Gruñidos De Dolor de los Sobrevivientes heridos en un 30/40/50% ademas aumenta el volumen de la respiracion normal de los Sobrevivientes en un 15/20/25%.' },
      { id: 'thanatophobia', name: 'Tanatofobia', desc: 'Cada vez que un Sobreviviente este Herido, Agonizante o Colgado los Sobrevivientes sufren del siguiente efecto: Incurre en un 1/1.5/2% acumulable de penalizacion de velocidad de Accionr por Sobreviviente Herido. Si los cuatro Sobrevivientes estan heridos Aumenta la penalizacion en un 12% adicionar para un total de 16/18/20%' },
    ]
  },
  {
    id: 'shape',
    name: 'La Forma',
    isDefault: false,
    perks: [
      { id: 'play_with_food', name: 'Jugar con la Comida', desc: 'Perder a tu Obsesion en una persecusion te otorga un distintivo hasta un maximo de 3 y realizar cualquier ataque basico con el potencial de dañar a un sobreviviente hace que pierda 1 distintivo, mientras tengas 1 distintivo tendras un 3/4/5% de Haste acumulable por distintivo, hasta un maximo de 9/12/15%. Tiempo de recuperacion de 10s entre distintivos.' },
      { id: 'save_best_for_last', name: 'Lo Mejor para el Final', desc: 'Cada vez que golpees a un Sobreviviente que no sea la Obsesion ganaras un distintivo hasta un maximo de 6/7/8. Otorga una reduccion acumulable de -4% de tiempo de recarga de Hits Basicos exitosos por distintivo, hasta un maximo de 24/28/32%. Cada vez que golpeas a tu Obesesion pierdes 2 distintivos.' },
      { id: 'dying_light', name: 'Luz que Agoniza', desc: 'Cada vez que cuelgas a un Sobreviviente que no es tu Obsesison ganas 1 distintivo. Mientras tu Obsesion siga con vida el resto de Sobrevivientes sufre de un 2/2.5/3% de penalizacion den su velocidad de Accion, acumulable por distintivo hasta un maximo de 22/27.5/33% u 11 distintivos. La Obsesion no se ve afectada por la penalizacion en su lugar obtiene una bonificacion permanente del 33% en velocidad de Accion.' },
    ]
  },
  {
    id: 'hag',
    name: 'La Bruja',
    isDefault: false,
    perks: [
      { id: 'hex_ruin', name: 'Maleficio: Ruina', desc: 'Todos los Generadores que no esten siendo reparados comienzan a retroceder automaticamente un 100/125/150% de la tasa de Regresion por defecto.' },
      { id: 'hex_third_seal', name: 'Maleficio: El tercer Sello', desc: 'Los ultimos 2/3/4 Sobrevivientes que golpeas con un Hit Basico o Especial sufren el efecto de Ceguera permanente mientras el Totem de Maleficion siga en pie.' },
      { id: 'devour_hope', name: 'Maleficio: Devorador de Esperanza', desc: 'Cada vez que alguien rescata a un Sobreviviente del Gancho mientras estas a mas de 24m del Gancho ganas un distintivo hasta un maximo de 5. Con 2 distitntivos obtienes un 3/4/5% de Haste 10s despues de haber colgado a un Sobreviviente, 3  distintivos: Todos los Sobrevivientes sufren de forma permanente el estado Vulnerabilidad. 5 Distintivos: Otorga la habilidad de matar a todos los Sobrevivientes con tus propias manos. ' },
    ]
  },
  {
    id: 'doctor',
    name: 'El Doctor',
    isDefault: false,
    perks: [
      { id: 'overwhelming_presence', name: 'Presencia Abrumadora', desc: 'Los Supervivientes dentro de tu radio de terror agotan sus objetos 2/3/4s mas rapido.' },
      { id: 'monitor_abuse', name: 'Monitorizacion y Abuso', desc: 'Mientras estas persiguiendo a un Sobreviviente: Aumenta tu radio de terror en 5/10/15%. Fuera de persecución: tu radio de terror se reduce en 15/20/25%.' },
      { id: 'overcharge', name: 'Sobrecarga', desc: 'Al dañar un Generador se aplica el efecto de sobrecarga al mismo, cuando un Sobreviviente interactua con el Generador se activa un Skillcheck difici. Si no supera el Skillcheck el Generador instantaneamente pierde un 2/3/4% del progreso. Tambien al golpear el Generador se aumenta la regresion de un 85% a un 130% durante 30s.' },
    ]
  },
  {
    id: 'huntress',
    name: 'La Cazadora',
    isDefault: false,
    perks: [
      { id: 'beast_of_prey', name: 'Bestia de presa', desc: 'Cuando obtienes el Efecto Sed de Sangre, se activa Bestia de Presa durante 30/40/50%. Otorga el estado Indetectable.' },
      { id: 'territorial_imperative', name: 'Instinto Territorial', desc: 'Cada vez que un Sobreviviente entra al Sotano y estas a mas de 24m de su entrada, se activa Insitinto Territorial. El aura de ese sobreviviente se te revela durante 4/5/6s. Tiempo de recarga: 45s.' },
      { id: 'hex_lullaby', name: 'Maleficio: Arrullo de Cazadora', desc: 'Los sobrevivientes al realizar acciones de curacion o reparacion sufren de un aumento de penalizacion de progreso en las pruebas de habilidad fallidas en un 2/4/6%. Cada vez que un sobreviviente es colgado ganas un Token. Hasta un maximo de 5 Tokens. Los Sobrevivientes realizando acciones de Curacion o Reparacion sufren del siguiente efecto: Reduce el tiempo entre aviso sonoro que anuncia los Skillchecks dependiendo la cantidad de Tokens que tengas en ese momento.' },
    ]
  },
  {
    id: 'cannibal',
    name: 'El Canibal',
    isDefault: false,
    perks: [
      { id: 'bbq', name: 'Parrillada y Chile', desc: 'Tras colgar a un Sobreviviente, todos los Sobrevivientes que estan a mas de 60/50/40m de distancia de ese Gancho te revelan su Aura.' },
      { id: 'franklyns', name: "Muerte de Franklin", desc: 'Los Sobrevivientes golpeados por tu ataque basico botan cualquier objeto que el sobreviviente golpeado tenga equipado. Las auras de los objetos perdidos son revelados a menos de 32/48/64m.' },
      { id: 'knock_out', name: 'Noqueo', desc: 'Cada vez que el Sobreviviente se mueve mas alla de 6m de un Pallet. dentro de 6s de botarla, Noqueo se activa: Les inflinge de un -5% de Efecto de Entorpecimiento durante 3/4/5s. ' },
    ]
  },
  {
    id: 'nightmare',
    name: 'La Pesadilla',
    isDefault: false,
    perks: [
      { id: 'blood_warden', name: 'Guardian de Sangre', desc: 'Se te revelan las Auras de los Sobrevivientes que se encuentran en las Zonas de Salida. Una vez por partida, si cuelgas a un Sobreviviente mientras Guardian de Sangre esta activo, invocas Al Ente para que bloquee ambas salidas para todos los Sobrevivientes durante 40/50/60s.' },
      { id: 'fire_up', name: 'Enfurecimiento', desc: 'Cada vez que se complete un Generador, Enfurecimiento aumenta en poder y gana 1 Token, hasta un maximo de 5. Cada distintivo aplica una bonificacion acumulable de 4/5/6% por Token. Hasta un maximo de 20/25/30%, para las siguientes acciones. Recoger y soltar Sobrevivientes. Romper y dañar Paredes, Pallets y Generadores, Saltar ventanas.' },
      { id: 'remember_me', name: 'Recuerdame', desc: 'Cada vez que tu Obsesion pierde un Estado de Salud, Recuerdame gana un 1 Token hasta un maximo de 3/4/5. Aumenta el tiempo en que tardan en abrirse las Puertas de Salida en 6s por Token. Hasta un maximo de 18/24/30s para todos los Sobrevivientes que no sean la Obsesion.' },
    ]
  },
  {
    id: 'pig',
    name: 'La Cerda',
    isDefault: false,
    perks: [
      { id: 'make_your_choice', name: 'Toma una Decision', desc: '' },
      { id: 'hangmans_trick', name: 'Truco del Verdugo', desc: '' },
      { id: 'surveillance', name: 'Supervision', desc: '' },
    ]
  },
  {
    id: 'clown',
    name: 'El Payaso',
    isDefault: false,
    perks: [
      { id: 'bamboozle', name: 'Desconcierto', desc: 'Aumenta tu velocidad de salto en 5/10/15% ademas, cada vez que saltas una ventana esta se bloquea para todos los sobrevivientes durante 8/12/16s, saltarla nuevamente reinicia el temporizador. Saltar una diferente transfiere su efecto a esa.' },
      { id: 'coulrophobia', name: 'Coulrofobia', desc: 'Los sobrevivientes dentro de tu Radio de Terror reduce todas las velocidades de Curacion en un 30/40/50%. Aumenta la velocidad de la rotacion de los SkillChecks en un 50%' },
      { id: 'pop_goes_weasel', name: 'Pim,Pam,Pum', desc: 'Tras colgar a un Sobreviviente puedes golpear un generador y este se revierte instantaneamente un 20% de su progreso actual. Se mantiene activa durante 35/40/45s.' },
    ]
  },
  {
    id: 'spirit',
    name: 'La Espiritu',
    isDefault: false,
    perks: [
      { id: 'hex_haunted_ground', name: 'Maleficio: Tierra Embrujada', desc: 'Se iluminan 2 Totems de Maleficio al inicio de la Partida. Bendecir o Purificar cualquiera de los 2 Totems de Maleficio dispara la trampa y activa el siguiente efecto: Hace que todos los Sobrevivientes sufran del Estado Vulnerabilidad durante 40/50/60s.' },
      { id: 'rencor', name: 'Rencor', desc: 'Cada vez que se complete un Generador, se revela tu aura a la Obsesion durante 5/4/3s. La ubicacion de todos los Sobrevivientes te son revelados durante 3s. Cuando se activan las Puertas de Salida, la Obsesion sufre El Estado de Vulnerabilidad. Otorga la habilidad de matar a la Obsesion con tu propias manos.' },
      { id: 'spirit_fury', name: 'Furia Espiritual', desc: 'Despues de romper manualmente un total de 4/3/2 Pallets usados de cualquier forma se activa Furia Espiritual, instantaneamente rompe el siguiente Pallet usada por un superviviente y no afecta la duracion del Aturdimiento del Pallet.' },
    ]
  },
  {
    id: 'legion',
    name: 'La Legion',
    isDefault: false,
    perks: [
      { id: 'discordance', name: 'Discordancia', desc: 'Cualquier Generador dentro de un alcance de 64/96/128m que esten reparando 2 o mas Sobrevivientes marca su aura en Amarillo. Cuando el generador se ilumina por primera vez se te notifica con un Ruido Fuerte. Cuando el Generador este siendo reparado por un solo Sobreviviente o fuera del alcance el aura permanecera durante otros 4s.' },
      { id: 'iron_maiden', name: 'Doncella de Hierro', desc: 'Mientras se interactua con un Casillero vacio, aumenta tu velocidad de busqueda en un 30/40/50% cada vez que un sobreviviente sale de un Casillero hace que griten y activan una Notificacion de Ruido Fuerte en su ubicacion actual. Este efecto permanece durante 4s. Hace que sufran el Estado de Vulnerabilidad durante 30s. ' },
      { id: 'mad_grit', name: 'Furia Ciega', desc: 'Mientras cargas con un Sobreviviente remueve el tiempo de recuperacion de los Ataques Basicos fallidos. Pausa el progreso de Forcejeo de los sobrevivientes cargados durante 2/3/4s cada vez que aciertes un golpe a otro Sobreviviente.' },
    ]
  },
  {
    id: 'plague',
    name: 'La Plaga',
    isDefault: false,
    perks: [
      { id: 'corrupt_intervention', name: 'Intervencion Corrupta', desc: 'Al inicio de la partida, los 3 Generadores que esten ubicados mas lejos de ti son bloqueados por el Ente durante 80/100/120s.' },
      { id: 'dark_devotion', name: 'Devocion Oscura', desc: 'Cuando la Obsesion pierde un Estado de Salud de cualquier forma y resulta Herido tu Radio de Terror se transfiere a la Obsesion durante 35/40/45s y se establece un radio de 32m. Otorga el Estado Indetectable mientras dure.' },
      { id: 'infectious_fright', name: 'Terror Contagioso', desc: 'Cuando un Sobreviviente entra en Estado Agonizante, todos los otros Sobrevivientes dentro de tu Radio de Terror gritara y revelara su ubicacion actual durante 4/5/6s.' },
    ]
  },
  {
    id: 'ghostface',
    name: 'Ghost Face',
    isDefault: false,
    perks: [
      { id: 'i_m_all_ears', name: "Soy Todo Oidos", desc: 'Cualquier Sobreviviente que lleve a cabo una Accion rapida en un radio de 48m de tu ubicacion se te revela el Aura de ese Sobreviviente durante 8s. Soy Todo Oidos tiene un tiempo de recuperacion de 60/45/30s.' },
      { id: 'furtive_chase', name: 'Persecusion Furtiva', desc: 'Cuando cuelgas a tu Obsesion te beneficias de los siguientes efectos durante 14/16/18s: Estado Indetectable y un 5% de Haste. Cuando un Sobreviviente rescata a tu Obsesion de un Gancho, ese Sobreviviente se convierte en tu Obsesion. ' },
      { id: 'thrilling_tremors', name: 'Temblores Trepidantes', desc: 'Tras atrapar a un Sobreviviente. El Ente bloqueara todos los Generadores que  no esten siendo reparados en ese momento por los siguientes 16s. Las Auras de los generadores bloqueados apareceran iluminados en Blanco. Temblores Trepidantes tiene un tiempo de recuperacion de 100/80/60s.' },
    ]
  },
  {
    id: 'demogorgon',
    name: 'El Demogorgon',
    isDefault: false,
    perks: [
      { id: 'cruel_limits', name: 'Restriccion Cruel', desc: 'Cuando se completa un Generador se Bloquean todas las Ventanas para los Sobrevivientes durante 20/25/30s, ademas ves el Aura de todas las Ventanas Bloqueadas durante ese tiempo en Amarillo.' },
      { id: 'mindbreaker', name: 'Quebrantamentes', desc: 'Cuando reparan un Generador los Sobrevivientes reciben el Estado Ceguera y Agotado, ambos Estados se mantienen durante 3/4/5s despues de terminar la interaccion.' },
      { id: 'surge', name: 'Sobretension', desc: 'Al dejar Agonizante a un Sobreviviente con un Ataque Basico, todos los Generadores en un radio de 32m explotan al instante y comienzan a revertirse. Los Generadores afectados pierden un 6/7/8% de su progreso al instante.' },
    ]
  },
  {
    id: 'oni',
    name: 'El Oni',
    isDefault: false,
    perks: [
      { id: 'blood_echo', name: 'Eco de Sangre', desc: 'Al colgar a un Sobreviviente, todos los Sobrevivientes que esten Heridos sufriran del Estado Agotado y Hemorragia durante 20/25/30s.' },
      { id: 'nemesis', name: 'Nemesis', desc: 'El Sobreviviente que te haya cegado o aturdido usando un Pallet o un Casillero se convertira en tu Obsesion. Cada vez que un nuevo Sobreviviente se convierta en la Obsesion, sufrira el Estado de Inconsciencia durante 40/50/60s y revelara su Aura durante 4s.' },
      { id: 'zanshin_tactics', name: 'Tacticas de Zanshin', desc: 'Se te revelan las Auras de los Pallets y Ventanas en un radio de 32m. Cuando un Sobreviviente deja caer un Pallet se revela su Aura durante 3/4/5s.' },
    ]
  },
  {
    id: 'deathslinger',
    name: 'El Arponero',
    isDefault: false,
    perks: [
      { id: 'gearhead', name: 'Cabeza Dentada', desc: 'Despues de que el Sobreviviente pierda un Estado de Salud, se activara Cabeza Dentada durante 30s. Mientras Cabeza Dentada este activa, cada vez que un Sobreviviente supere una Prueba de Habilidad Superada mientras repara revela su Aura durante 6/7/8s.' },
      { id: 'hex_retribution', name: 'Maleficio: Retribucion', desc: 'Los Sobrevivientes que esten purificando o bendiciendo cualquier Totem sufrira el Estado de Incosciencia durante 35/40/45s. Despues de purificar o bendecir un Totem de Maleficio, las Auras de todos los Sobrevivientes se revelan durante 15s.' },
      { id: 'dead_mans_switch', name: "Interruptor del Hombre Muerto", desc: 'Despues de colgar a un Sobreviviente se Bloquea el primer Generador que cualquier Sobreviviente haya dejado de reparar durante 25/30/35s. El Generador Bloqueado se ilumina en Blanco.' },
    ]
  },
  {
    id: 'executioner',
    name: 'El Verdugo',
    isDefault: false,
    perks: [
      { id: 'forced_penance', name: 'Penitencia Forzada', desc: 'Cada vez que un Sobreviviente activa un Golpe Protector, sufren del siguiente efecto: Inflige el Estado Desesperanza durante 60/70/80s.' },
      { id: 'trail_of_torment', name: 'Senda del Tormento', desc: 'Realizar la accion de Dañar Generador otorga el Estado Indetectable hasta que el Generador deje de revertirse. Revela el Aura del Generador dañado a todos los Sobrevivientes en Amarillo. Senda del Tormento tiene un tiempo de recuperacion de 60/45/30s.' },
      { id: 'deathbound', name: 'Atadura Mortal', desc: 'Si un Sobreviviente cura a otro por el equivalente de 1 Estado de Salud, se activa Atadura Mortal: El Sanador grita y revela su ubicacion, El Sanador sufre del Estado inconsciencia cada vez que estan a mas de 12/8/4m del Sobreviviente que curaron.' },
    ]
  },
  {
    id: 'blight',
    name: 'El Deterioro',
    isDefault: false,
    perks: [
      { id: 'dragon_breath', name: 'Garra de Dragon', desc: 'El primer Sobreviviente que interactue con el Generador dañado gritara, revelando su ubicacion durante 4s, y sufre del Estado Vulnerabilidad durante 60s. Garra de Dragon tiene un tiempo de recuperacion de 60/45/30s.' },
      { id: 'hex_blood_favour', name: 'Maleficio: Favor de Sangre', desc: 'Favor de Sangre ilumina un Totem de Maleficio al inicio de la Partida, maldiciendo a los Sobrevivientes con sus Efectos de Maleficio. Cada vez que un Sobreviviente pierde un Estado de Salud de cualquier forma, Favor de Sangre activa su efecto durante 15s: Bloquea todos los Pallets verticales dentro de un radio de 24/28/32m de ese Sobreviviente. Los Pallets Bloqueados no pueden ser derribados por cualquier Sobreviviente.' },
      { id: 'hex_undying', name: 'Maleficio: Inmortal', desc: 'Cada vez que un Sobreviviente esta a 2/3/4m de un Totem Apagado, Inmortal activa su efecto primario: Se te revala su Aura mientras se maantenga dentro de ese rango. Cada vez que se purifica un Totem de Maleficio, Inmortal activa su efecto secundario: Transfiere el Maleficio purificado al Totem de Maleficio asociado con Maleficio: Inmortal en su lugar, reemplazandolo.' },
    ]
  },
  {
    id: 'twins',
    name: 'Los Mellizos',
    isDefault: false,
    perks: [
      { id: 'coup_de_grace', name: 'Golpe de Gracia', desc: 'Cada vez que se completa un Generador, Golpe de Gracia aumenta en poder. Obten +2 Tokens, hasta un maximo de 10 Tokens por Partida. Aumenta la distancia de tu proximo Ataque de Embestida en 70/75/80%. Lo que consume -1 Token. Golpe de Gracia solo puede mantener un maximo de 5 Tokens a la vez.' },
      { id: 'hoarder', name: 'Acumulador', desc: 'Acumulador activa una Notificacion de Ruido Fuerte durante 4s, cuando un Sobreviviente realiza un desbloqueo de Cofre o recoger un Objeto dentro de 32/48/64m de tu ubicacion. Acumulador hace aparecer 2 Cofres adicionales en la Partida.' },
      { id: 'oppression', name: 'Opresion', desc: 'Cuando Dañas un Generador se activan los siguientes efectos: Selecciona aleatoriamente hasta 4 Generadores adicionales que tambien comenzaran a revertirse. Activa un SkillCheck dificil para todos los Sobreviviente que esten actualmente reparandolos. Opresion tiene un tiempo de recuperacion de 45/40/35s.' },
    ]
  },
  {
    id: 'trickster',
    name: 'El Embaucador',
    isDefault: false,
    perks: [
      { id: 'hex_crowd_control', name: 'Maleficio: Control de Masas', desc: 'Se ilumina un Totem de Maleficio al inicio de la Partida, maldiciendo a los Sobrevivientes con sus Efectos de Maleficio. Cada vez que un Sobreviviente realiza una aaccion de Salto Apresurado en una Ventana. Maleficio: Control de Masas activa su efecto: Bloquea esa Ventana para todos los Sobrevivientes. Maleficion Control de Masas tiene un limite de 4/5/6 Ventanas que puede afectar a la vez.' },
      { id: 'no_way_out', name: 'Sin Salida', desc: 'Cada vez que cuelgas a un Sobreviviente por primera vez, Sin salida gana +1 Token. Una vez que se activan las Puertas de Salida, se activa Sin Salida: El primer Sobreviviente en interactuar con cualquiera de las Palancas de las Puertas de Salida activara una Notificacion de Ruido Fuerte en su ubicacion. Al activdar la Notificacion, Sin Salida invoca al Ente para el siguiente efecto: Bloquea ambas Palancas de las Puertas de Salida durante 12s. Este tiempo se extiende por un 6/9/12s adicional por Distintivo acumulado, hasta un maximo combinado de 36/48/60s.' },
      { id: 'starstruck', name: 'Deslumbrante', desc: 'Cada vez que cargas a un Sobreviviente, se activa Deslumbrante: Hace que todo los otros Sobrevivientes en tu Radio de Terror sufran del Estado Vulnerabilidad. Este efecto se mantiene durante 26/28/30s despues de que los Sobrevivientes afectados abandonen el Radio de Terror o se desactive Deslumbrante. Deslumbrante se desactiva despues de colgar o botar al Sobreviviente cargado y tiene un tiempo de recuperacion de 60s.' },
    ]
  },
  {
    id: 'nemesis',
    name: 'El Nemesis',
    isDefault: false,
    perks: [
      { id: 'hysteria', name: 'Histeria', desc: 'Cuando hieres a un Sobreviviente, todos los Sobrevivientes heridos reciben el Estado Inconsciencia durante 30/35/40s. Histeria tiene un tiempo de recuperacion de 30s.' },
      { id: 'lethal_pursuer', name: 'Perseguidor Letal', desc: 'Al inicio de la Partida, las Auras de todos los Sobrevivientes se revelan para ti durante 7/8/9s. Cada vez que el Aura de un Sobreviviente se muestra durante un tiempo, su duracion aumenta +2 Tokens.' },
      { id: 'eruption', name: 'Erupcion', desc: 'Luego de patear un Generador, se ilumina su Aura en Amarillo. Cada vez que un Sobreviviente quede en el Estado Agonizante de cualquier forma, Erupcion activa los siguientes efectos en todos los Generadores iluminados: Explotaran, recibiendo daño. Intantaneamente lo revierte al 10% de su Progreso total. Exmpiezan a revertirse despues de eso. Los sobrevivientes que lo esten reparando actualmente gritaran y revelaran su Aura durante 8/10/12s. Erupcion tiene un tiempo de recuperacion de 30s despues de activar sus efectos, lo que tambien reinicia las Auras resaltadas.' },
    ]
  },
  {
    id: 'cenobite',
    name: 'El Cenobita',
    isDefault: false,
    perks: [
      { id: 'hex_plaything', name: 'Maleficio: Tiempo de Jugar', desc: 'Si todavia queda un Totem Apagado en el entorno, Maleficio: Tiempo de Jugar ilumina un Totem de Maleficio cada vez que cuelgas a un Sobreviviente por primera vez, maldiciendolo con sus Efectos de Maleficio. Inflige el Estado de Inconsciencia, bloquea el Totem de Maleficio para todos los Sobrevivientes durante 90s. Los Totems de Maleficio Bloqueados no pueden ser purificados o bendecidos por los Sobrevivientes. Esto no afecta al Sobreviviente Maldito. El Aura del Totem de Maleficio se revela al Sobreviviente Maldito durante 24/20/16m.' },
      { id: 'deadlock', name: 'Callejon sin Salida', desc: 'Luego de que el Generador este reparado, El Ente bloqueara el Generador con mayor progreso durante 15/20/25s. Veras el Aura del Generador Bloqueado resaltado de Color Blanco.' },
      { id: 'scourge_gift', name: 'Gancho Torturador: Obsequio de Dolor', desc: 'Al inicio de la Partida, 4 Ganchos al azar son cambiados por Ganchos Torturadores: Las Auras de los Ganchos Torturadores te son revelados en Blanco. Cada vez que un Sobreviviente es desenganchado de un Gancho Torturador, se aplican los siguientes efectos: El Sobreviviente sufre del Estado Hemorragia y Destrozado durante 90s. La primera vez que se cura a un Sobreviviente, sufrira una penalizacion de velocidad del 10/13/16% para Reparar y Curar hasta que vuelve a recibir heridas.' },
    ]
  },
  {
    id: 'artist',
    name: 'La Artista',
    isDefault: false,
    perks: [
      { id: 'grim_embrace', name: 'Abrazo de la Muerte', desc: 'Cada vez que cuelgas a un Sobreviviente por primera vez ganas +1 Token y se activa cuando estas a mas de 16m del Gancho. 1-3 Tokens Bloquea todos los Generadores durante 6/8/10s, 4 Tokens Bloqea todos los Generadores duranate 40s y el Aura de la Obsesion se te revela durante 6s.' },
      { id: 'hex_pentimento', name: 'Maleficio: Arrepentimiento', desc: 'Ves el Aura de los Totems destruidos. Puedes revivir un Totem Roto. Por cada Totem Reavivado que este activo a la vez. Arrepentimiento gana un efecto adicional: 1 Totem, Reduce la velocidad de reparacion de los Sobrevivientes en 1/2/3%. 2 Totems Reduce la velocidad de curacion de los Sobrevivientes en un 1/2/3%. 3 Totems Reduce la velocidad de Recuperacion de los Sobrevivientes luego de ser derribados en un 1/2/3%. 4 Totems Reduce la velocidad de apertura de Puertas De Salida en un 1/2/3%. 5 Totems: Todos los Totems son bloqueados por El Ente.' },
      { id: 'scourge_pain', name: 'Gancho Torturador: Dolor Resonante', desc: 'Cuando cuelgas a un Sobreviviente en un Gancho Torturador por Primera Vez, consumes 1 Token y los siguientes efectos aplican: El Generador con mayor progreso explota e inmediatamente revierte el 10/15/20% de su progreso. La Regresion normal del Generador se aplica despues. Todos los Sobrevivientes que esten reparando ese Generador Gritaran, pero no revelaran su ubicacion. Cuando te quedes sin Tokens, Dolor Resonante se desactiva por el resto de la Partida.' },
    ]
  },
  {
    id: 'onryo',
    name: 'La Onryō',
    isDefault: false,
    perks: [
      { id: 'call_of_brine', name: 'Anuncio de Salmuera', desc: 'Luego de Dañar un Generador se activa Salmuera durante 60s. El Generador dañado se revierte un 115/120/125% de la velocidad normal de regresion y puedes ver su Aura en color Amarillo. Recibes una Notificacion de Ruido Fuerte cada vez que un Sobreviviente completa un SkillCheck en el Generador afectado.' },
      { id: 'merciless_storm', name: 'Tormenta Despiadada', desc: 'Cuando un Generador llega al 90% del progreso de Reparacion Todos los Sobrevivientes que esten reparando un Generador se enfrentan a SkillChecks de forma constante hasta que el Generador se complete. Si fallan un SkillCheck o dejan de repararlo, El Ente bloqueara el Generador por 16/18/20s.' },
      { id: 'scourge_floods_of_rage', name: 'Gancho Torturador: Torrente de Ira', desc: 'Cada vez que un Sobreviviente es desenganchado de un Gancho Torturador, se aplican los siguientes efectos: Las Auras de todos los otros Sobrevivientes se revelaran durante 5/6/7s.' },
    ]
  },
  {
    id: 'dredge',
    name: 'La Draga',
    isDefault: false,
    perks: [
      { id: 'dissolution', name: 'Disolucion', desc: '3 Segundos despues de lastimar a un Sobreviviente de cualquier forma, se activa Disolucion durante 12/16/20s. Intentaneamente rompe el siguiente Pallet en la que el Sobreviviente Salte Rapido dentro de tu Radio de Terror.' },
      { id: 'darkness_revealed', name: 'Oscuridad Revelada', desc: 'Al revisar un Casillero: Podras ver las Auras de los Sobrevivientes en un radio de 8m de un Casillero durante 6/7/8s. Oscuridad Revelada tiene un tiempo de recuperacion de 30s.' },
      { id: 'septic_touch', name: 'Contacto Septico', desc: 'Inflinge el Estado Ceguera y Agotado. Estos efectos persistiran por 20/25/30s tras interrumpir una accion de curacion de cualquier forma.' },
    ]
  },
  {
    id: 'mastermind',
    name: 'La Mente Maestra',
    isDefault: false,
    perks: [
      { id: 'awakened_awareness', name: 'Coincidencia de Estar Despiertos', desc: 'Puedes ver el Aura de otros Sobrevivientes en un radio de 16/18/20m de tu posicion.' },
      { id: 'superior_anatomy', name: 'Anatomia Superior', desc: 'Cuando un Sobreviviente realiza un Salto Rapido dentro de un radio de 8m de ti, se activa Anatomia Superior: Aumenta tu velocidad de salto en un 30/35/40% Anatomia Superior se desactiva despues de saltar, ademas tiene un tiempo de recuperacion de 30s.' },
      { id: 'terminus', name: 'Terminal', desc: 'Cuando se activan las Puertas de Salida, Todos los Sobrevivientes heridos, derribados o colgados quedan debilitados con el Estado de Desesperanza hasta que la Puerta de Salida se abra. Este efecto se mantiene por 35/40/45s adicionales.' },
    ]
  },
  {
    id: 'knight',
    name: 'El Caballero',
    isDefault: false,
    perks: [
      { id: 'nowhere_to_hide', name: 'No Hay Donde Esconderse', desc: 'Cada vez que Dañes un Generador revelas el Aura de todos los Sobrevivientes que se encuentren a 24m de tu posicion durante 3/4/5s.' },
      { id: 'hex_dark_devotion', name: 'Maleficio: Enfrentar a la Oscuridad', desc: 'Herir a un Sobreviviente del modo que sea enciende un Totem Apagado y todos los otros Sobrevivientes gritaran cada 35/30/25s, si estan fuera de tu Radio de Terror y revelaran sus ubicaciones y sus Auras durante 2s cada vez. El Maleficion se desactiva una vez que el Sobreviviente Maldito entra al Estado Agonizante o si se cura por completo, lo que apaga el Totem. El Maleficio se desactiva hasta el final de la Partida, si un Sobreviviente purifica su Totem de Maleficio. Los Efectos de Maleficio persisten hasta que el Totem es Bendecido o Purificado por un Sobreviviente, deshabilitandolo por el resto de la partida.' },
      { id: 'hubris_k', name: 'Soberbia', desc: 'Cuando un Sobreviviente te aturde, sufre del Estado Vulnerabilidad durante 20/25/30s. Soberbia tiene un tiempo de recuperacion de 20s.' },
    ]
  },
  {
    id: 'skull_merchant',
    name: 'El Comerciante de Calaveras',
    isDefault: false,
    perks: [
      { id: 'thwack', name: 'PLAF!', desc: 'Comienzas la Partida con 3 Tokens, cuando rompes una Pared Rompible o un Pallet usado, PLAF consume -1 Token y aplica el siguiente efecto: Los Sobrevivientes que esten a 36m gritan y revelan su ubicacion durante 4/5/6s. Al colgar a un Sobreviviente PLAF! recupera +1 Token.' },
      { id: 'leverage', name: 'Influencia', desc: 'Cuando un Sobreviviente realiza la accion de Descolgar, sufre del siguiente efecto durante 60s. Reduce sus velocidades de Curacion en un 20/25/30%.' },
      { id: 'game_afoot', name: 'Hora de la Caceria', desc: 'Cada vez que golpeas al Sobreviviente con mayor tiempo total de persecucion con un Ataque Basico, se convierte en la Obsesion. Mientras persigues a tu Obsesion obtienes un 5% de Haste durante 8/9/10s despues de dañar un Generador, romper una Pared Rompible o Pallet.' },
    ]
  },
  {
    id: 'singularity',
    name: 'La Singularidad',
    isDefault: false,
    perks: [
      { id: 'genetic_limits', name: 'Limites Geneticos', desc: 'Cada vez que un Sobreviviente pierde un Estado de Salud, sufre del Estado Agotado durante 6/7/8s.' },
      { id: 'machine_learning', name: 'Aprendizaje Automatizado', desc: 'Causa que ese Generador se transforme en un Generador Comprometido. Dañar otro Generador transfiere el estado a este. Se resalta el Aura del Generador Comprometido en Amarillo hasta que lo completes. Una vez que se complete el Generador Comprometido, te beneficias de los siguientes efectos durante 40/50/60s: Estado Indetectable +8% de Estado de Haste.' },
      { id: 'forced_hesitation_s', name: 'Duda Forzada', desc: 'Cuando un Sobreviviente entra en el Estado Agonizante de la forma que sea, todos los otros Sobrevivientes que esten dentro de 16m a su alrededor sufren de -20% de Estado Entorpecimiento durante 10s. Duda Forzada tiene un tiempo de recuperacion de 40/35/30s.' },
    ]
  },
  {
    id: 'xenomorph',
    name: 'El Xenomorfo',
    isDefault: false,
    perks: [
      { id: 'alien_instinct', name: 'Instinto Alienigena', desc: 'Cuando Cuelgas a un Sobreviviente, ves el Aura del Sobreviviente herido que esta mas lejos durante 5s. Ese Sobreviviente sufre del Efecto Inconsciencia por 40/50/60s.' },
      { id: 'rapid_brutality', name: 'Brutalidad Veloz', desc: 'Ya no podras obtener el Estado Sed de Sangre, Golpear a un Sobreviviente con un Ataque Basico te otorga un +5% de Estado Haste durante 8/9/10s.' },
      { id: 'ultimate_weapon', name: 'Arma Definitiva', desc: 'Cada vez que busques en un Casillero, todos los Sobrevivientes en un radio de 40m de tu ubicacion: Hace que griten y te revelen su ubiacion, inflinge el Estado Ceguera durante 30s. Arma Definitiva tiene un tiempo de recuperacion de 55/50/45s.' },
    ]
  },
  {
    id: 'good_guy',
    name: 'El Buen Chico',
    isDefault: false,
    perks: [
      { id: 'batteries_included', name: 'Baterias Incluidas', desc: 'Cuando estas a menos de 12m de un Generador completado, obtienes un +5% del Estado Haste. Este efecto se mantiene durante 1/3/5s despues de abandonar el alcance del Generador.' },
      { id: 'friends_till_end', name: 'Amigos Hasta el Fin', desc: 'Cuando cuelgas a cualquier Sobreviviente que no sea tu Obesison, revelas su Aura durante 6/8/10s. Sufren el Estado Vulnerabilidad durante 20s. Cuando cuelgas a la Obsesion, se aplican los siguientes efectos en un Sobreviviente al Azar: Grita y revela su ubicacion, se convierte en la nueva Obsesion.' },
      { id: 'hex_two_can_play', name: 'Maleficio: Yo Tambien Puedo Jugar', desc: 'Cada vez que un Sobreviviente te aturda o ciegue un total 4/3/2 veces,, y si no hay un Totem de Maleficio asociado  a Yo Tambien Puedo Jugar, un Totem Apagado se convierte en un Totem de Maleficio: Los Sobrevivientes que te aturdan o cieguen quedan Cegados durante 1.5s.' },
    ]
  },
  {
    id: 'unknown',
    name: 'Lo Desconocido',
    isDefault: false,
    perks: [
      { id: 'undone', name: 'Inacabado', desc: 'Cuando un Sobreviviente falla un SkillCheck mientras repara o cura a un Sobreviviente, ganas +3 Tokens, hasta un maximo de 18/24/30 Tokens. Dañar un Generador consume todos tus Tokens acumulados y aplica los siguientes efectos: Instantaneamente regresa un 1% del progreso del Generador por Token. Bloquea el Generador Dañado 1s por Token. El Daño al Generador comienza cuando el generador se Desbloquea. Inacabado tiene un tiempo de recuperacion de 60s. ' },
      { id: 'unforeseen', name: 'Imprevisto', desc: 'Luego de Dañar un Generador se activa Imprevisto durante 22/26/30s: Transfieres tu Radio de Terror al Generador dañado y su radio se ajusta a 32m. Obtienes el Estado Indetectable.' },
      { id: 'unbound', name: 'Desatado', desc: 'Cuando un Sobreviviente recibe heridas de cualquier forma, se activa Desatado durante 24/27/30s: Obtienes un +5% de Efecto Haste durante 10s luego de saltar por una Ventana.' },
    ]
  },
  {
    id: 'lich',
    name: 'El Liche',
    isDefault: false,
    perks: [
      { id: 'weave_attunement', name: 'Armonizacion de Tejido', desc: 'Cuando un Objeto se agota por Primera Vez, se cae automaticamente: Se te revelan las Auras de los Objetos de Sobreviviente, asi como las Auras de los Sobrevivientes que esten dentro de un radio de 8m de ellos. Los Sobreviviente afectados ven el Aura de ese Objeto tambien. Si un Sobreviviente toma un Objeto Caido sufrira del Estado Insconsciencia durante 20/25/30s.' },
      { id: 'languid_touch', name: 'Toque Languido', desc: 'Cuando un Sobreviviente dentro de los 36m de ti y asusta a un Cuervo, sufre del Estado Agotado durante 6/8/10s. Toque Languido tiene un tiempo de recuperacion de 5s.' },
      { id: 'dark_arrogance', name: 'Arrogancia Oscura', desc: 'Aumenta tu velocidad de salto o cambio de una mayor vulnerabilidad a ser cegado y aturdido: Aumenta permanentemente la duracion de cualquier accion que deje al Killer Cegado y la duracion de los Aturdimientos de Pallets en un +25%. Aumenta permanentemente tu velocida de salto en un 15/20/25%.' },
    ]
  },
  {
    id: 'dark_lord',
    name: 'El Señor Oscuro',
    isDefault: false,
    perks: [
      { id: 'hex_wretched_fate', name: 'Maleficio: Destino Miserable', desc: 'Despues de completar un Generador, se activa el Maleficio e ilumina un Totem Apagado aleatorio, maldiciendo a la Obsesion: Reduce su velocidad de reparacion en un 27/30/33%. Revela el Aura del Totem de Maleficion al Sobreviviente si esta en un radio de 12m.' },
      { id: 'dominance', name: 'Dominacion', desc: 'La primera vez que un Sobreviviente interactua con cada Cofre y cada Totem, Invoca al Ente para bloquearlo durante 8/12/16s. Puedes ver las Auras de los interactuables bloqueados en color Blanco.' },
      { id: 'human_greed', name: 'Codicia Humana', desc: 'Puedes patear Cofres abiertos y cerrarlos. Se te revelan las Auras de los Cofres sin abrir en todo momento. Se te revelan las Auras de los Sobrevivientes que esten en un radio de 8m de los Cofres Abiertos o cerrados durante 3s. La habilidad de patear los Cofres usados tiene un tiempo de recuperacion de 3/4/5s.' },
    ]
  },
  {
    id: 'houndmaster',
    name: 'La Maestra de Perros',
    isDefault: false,
    perks: [
      { id: 'all_shaking_thunder', name: 'Trueno Sismico', desc: 'Tras caer de cierta altura, se activa 15/20/25s. Aumenta el rango de tu Ataque de Embestida en un +75%. Trueno Sismico tiene un tiempo de recuperacion de 5s.' },
      { id: 'scourge_jagged_compass', name: 'Gancho Torturador: Brujula Irregular', desc: 'Cuando se descuelga a un Sobreviviente de un Gancho, el gancho se convierte en un Gancho Torturador. Despues de colgar a un Sobreviviente en un Gancho Torturador El Aura del Generador con el mayor progreso se ilumina en Amarillo durante 6/8/10s.' },
      { id: 'no_quarter', name: 'Sin Piedad', desc: 'Si un Sobreviviente alcanza el 75% del progreso de curacion, el Sobreviviente se enfrenta a SkillChecks constantes, hasta que termine de Autocurarse. Si falla un SkillCheck o interrumpe la accion de cualquier forma, sufren del Estado Desesperanza por 20/25/30s.' },
    ]
  },
  {
    id: 'vecna',
    name: 'El Primero',
    isDefault: false,
    perks: [
      { id: 'turn_back_the_clock', name: 'Retroceder El Tiempo', desc: 'Luego de colgar a un Sobreviviente durante 40/50/60s, Presiona el boton de habilidad para hacer que explote un generador objetivo en un radio de 20m, pierde un -10% de progreso y comience a revertirse.' },
      { id: 'secret_project', name: 'Proyecto Secreto', desc: 'Cuando se Bendice o Purifica un Totem, bloquea un Generador durante 20/25/30s. Cada vez que se bloquea 1 o mas Generadores, ganas el Estado Indetectable durante 30s.' },
      { id: 'hex_hive_mind', name: 'Maleficio: Mente Colmena', desc: 'La primera vez que cuelgas a un Sobreviviente, un Totem Apagado se convierte en un Totem de Maleficio, siempre que quede al menos un Totem Apagado en las Arenas de la Partida. Los Generadores se iluminan, la intensidad de su Aura revela su progreso de reparacion. Tan pronto como se haya completado 4 Generadores en la Partida: Todos los Generadores restantes explotan, pierden un 6/8/10% de progreso, y comienzan a revertirse. El Totem de Maleficio se apaga, y esta ventaja se deshabilita por el resto de la partida.' },
    ]
  },
  {
    id: 'ghoul',
    name: 'El Ghoul',
    isDefault: false,
    perks: [
      { id: 'hex_nothing_but_misery', name: 'Maleficio: Pura Miseria', desc: 'Despues de heriri a los Sobrevivientes 8 veces con Ataques Basicos, un Totem Apagado aleatorio se convierte en un Totem de Maleficio y los maldice a todos: Los Sobrevivientes heridos con un Ataque Basico Sufren de un -5% de Estado de Entorpecimiento durante 10/12.5/15s.' },
      { id: 'forever_entwined', name: 'Unidos Para Siempre', desc: 'Cuando un Sobreviviente recibe daño, obtienes +1 Token, hasta un maximo de 6/7/8 Tokens. Aumenta las velocidades de Colgar y Cargar Sobrevivientes en un +4% acumulable por Token, hasta un maximo de 24/28/32%.' },
      { id: 'none_are_free', name: 'Nadie es Libre', desc: 'Cuando un Sobreviviente recibe daño, obtienes +1 Token, hasta un maximo de 6/7/8 Tokens. Cuando se completan todos los Generadores, se llama al Ente para activar el siguiente efecto: Bloquea todas las ventanas y los Pallets en poscion vertical para todos durante 12/14/16s acumulables por Tokens, hasta un maximo de 48/56/64s.' },
    ]
  },
  {
    id: 'springtrap',
    name: 'El Animatronico',
    isDefault: false,
    perks: [
      { id: 'help_wanted', name: 'Pedido de Ayuda', desc: 'Despues de realizar la accion de Dañar un Generador, hace que el Generador se convierta en un Generador Comprometido. Una vez se complete el Generador Comprometido, te beneficias del siguiente efecto por 40/50/60s. Incrementa la velocidad de Recuperacion de tus Ataques Basicos exitosos en un +25%.' },
      { id: 'phantom_fear', name: 'Miedo Fantasmal', desc: 'Cuando te mira un Sobreviviente dentro de tu Radio de Terror, Gritan y revelan su Aura durante 2s. Miedo Fantasal tiene un tiempo de recuperacion de 80/70/60s.' },
      { id: 'haywire', name: 'Caos', desc: 'Cuando un Sobreviviente deja de abrir una Puerta de Salida despues de acumular al menos un 80% de Progreso, Caos lo revertira: Se revierte un 80/90/100% de la velocidad de Apertura de Puerta Normal. Mientras se revierten, los Sobrevivientes pueden ver como las luces de la puerta parpadean de forma aleatoria.' },
    ]
  },
  {
    id: 'jason',
    name: 'The Slasher (Jason)',
    isDefault: false,
    perks: [
      { id: 'hex_scared_to_death', name: 'Maleficio: Terror Hasta la Muerte', desc: 'Despues de colgar 3 Sobrevivientes diferentes, se enciende un Totem aleatorio y activa su efecto: Al romper de forma basica un Pallet durante una persecusion hace que todos los Sobrevivientes que esten a 13m de ti griten y obtienes un 11/12/13% del Estado Entorpecimiento durante 3s.' },
      { id: 'silent_shadow', name: 'Sombre Silenciosa', desc: 'Cada vez que cuelgues a un Sobreviviente, obtienes el Estado Indetectable durante 11/12/13s. Cuando se activan las Puertas de Salida, obtienes indetectable por el resto de la Partida.' },
      { id: 'rampage', name: 'Matanza', desc: 'Cada vez que rompes de forma basica un Pallet o una Pared Rompible, obtienes un Token hasta un maximo de 13. Cada vez que te cieguen o te aturda un Pallet obtienes un 1% de Haste por cada Token que tenga esta ventaja durante 13s. Esta ventaja tiene un tiempo de recuperacion de 30/25/20s despues de ser cegado o aturdido con un Pallet.' },
    ]
  },
  {
    id: 'krasue',
    name: 'El Krasue',
    isDefault: false,
    perks: [
      { id: 'ravenous', name: 'Voracidad', desc: 'Cuando cuelgues a un Sobreviviente por Primera Vez ganas +1 Token, hasta un maximo de 4 Tokens. Cuando tengas 4 Tokens, todos los Sobrevivientes sufren de los siguientes efectos: Gritan, inflige el Estado Vulnerabilidad durante 40/50/60s.' },
      { id: 'wandering_eye', name: 'Ojo Errante', desc: 'Cada vez que comiences a perseguir a un Sobreviviente, las Auras de todos los otros Sobrevivientes heridos en un radio de 20m de tu ubicacion te son revelados durante 5s. Ojo Errante tiene un tiempo de recuperacion de 40/35/30s.' },
      { id: 'hex_overture_of_doom', name: 'Maleficio: Obertura de la Perdicion', desc: 'Aparece un Totem de Maleficio que maldice el Generador mas lejano de su ubicacion: El Aura de Generador Madito es resaltado en Amarillo. Cuando un Sobreviviente repara el Generador Maldito durante al menos 5s, transfiere tu Radio de Terror al Generador Maldito. Este Radio de Teror se establece a 32m. Otorga el Estado Indetectable.' },
    ]
  },
]
