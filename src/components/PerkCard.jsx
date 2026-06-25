// PerkCard.jsx — Tarjeta individual de perk
//
// Props: las "propiedades" que recibe un componente de React, equivalente a
// los parámetros de una función. Se definen con desestructuración { prop1, prop2 }

export function PerkCard({ perk, isLocked, onLockToggle, onReroll, slotIndex, isEmpty }) {
  // Estado vacío (slot sin perk asignada)
  if (isEmpty || !perk) {
    return (
      <div className="card flex flex-col items-center justify-center h-40 border-dashed border-fog-600 opacity-50">
        <span className="text-3xl mb-2">❓</span>
        <span className="text-ash-400 text-sm">Slot vacío</span>
      </div>
    )
  }

  // Determinar el color de la perk según tipo
  const getPerkColor = (name = '') => {
    const n = name.toLowerCase()
    if (n.includes('hex:'))       return 'border-l-4 border-l-purple-500'
    if (n.includes('boon:'))      return 'border-l-4 border-l-blue-400'
    if (n.includes('scourge'))    return 'border-l-4 border-l-orange-500'
    if (n.includes('invocation')) return 'border-l-4 border-l-green-500'
    return 'border-l-4 border-l-fog-600'
  }

  const getPerkType = (name = '') => {
    const n = name.toLowerCase()
    if (n.includes('hex:'))       return { label: 'Hex', color: 'bg-purple-900/50 text-purple-300' }
    if (n.includes('boon:'))      return { label: 'Boon', color: 'bg-blue-900/50 text-blue-300' }
    if (n.includes('scourge'))    return { label: 'Scourge', color: 'bg-orange-900/50 text-orange-300' }
    if (n.includes('invocation')) return { label: 'Invocation', color: 'bg-green-900/50 text-green-300' }
    return null
  }

  const perkType = getPerkType(perk.name)

  return (
    <div className={`
      card ${getPerkColor(perk.name)} relative group
      transition-all duration-200
      ${isLocked ? 'ring-1 ring-hook-400 bg-fog-700' : 'hover:bg-fog-700'}
    `}>
      {/* Cabecera: nombre + acciones */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-ash-100 text-sm font-semibold leading-tight truncate">
            {perk.name}
          </h3>
          <p className="text-ash-400 text-xs mt-0.5 truncate">
            {perk.characterName}
          </p>
        </div>

        {/* Botones de acción (visibles al hover) */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          {/* Botón bloquear/desbloquear slot */}
          {onLockToggle && (
            <button
              onClick={() => onLockToggle(perk.id)}
              title={isLocked ? 'Desbloquear slot' : 'Bloquear este slot'}
              className={`p-1 rounded text-xs transition-colors ${
                isLocked
                  ? 'bg-hook-500/30 text-hook-300 hover:bg-hook-500/50'
                  : 'bg-fog-700 text-ash-400 hover:text-ash-100'
              }`}
            >
              {isLocked ? '🔒' : '🔓'}
            </button>
          )}

          {/* Botón re-roll individual */}
          {onReroll && !isLocked && (
            <button
              onClick={() => onReroll(slotIndex)}
              title="Cambiar esta perk"
              className="p-1 rounded text-xs bg-fog-700 text-ash-400 hover:text-blood-300 transition-colors"
            >
              🎲
            </button>
          )}
        </div>
      </div>

      {/* Badge de tipo */}
      {perkType && (
        <span className={`perk-badge ${perkType.color} mb-2 inline-block`}>
          {perkType.label}
        </span>
      )}

      {/* Descripción */}
      <p className="text-ash-400 text-xs leading-relaxed line-clamp-3">
        {perk.desc}
      </p>

      {/* Indicador de bloqueado */}
      {isLocked && (
        <div className="absolute top-2 right-2 text-hook-400 text-xs">
          🔒
        </div>
      )}
    </div>
  )
}
