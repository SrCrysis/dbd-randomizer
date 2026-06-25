// CharacterGrid.jsx — Grid de personajes con toggle de desbloqueado
//
// Props:
//   characters: array de survivors o killers
//   unlockedIds: array de IDs desbloqueados
//   onToggle: función para togglear un personaje
//   onToggleAll: función para marcar/desmarcar todos

import { useState } from 'react'

export function CharacterGrid({ characters, unlockedIds, onToggle, onToggleAll }) {
  const [search, setSearch] = useState('')

  // Filtrar personajes por búsqueda
  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const allUnlocked = unlockedIds.length === characters.length
  const unlockedCount = unlockedIds.length

  return (
    <section className="space-y-4">
      {/* Header + controles */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="font-display text-ash-100 text-lg font-semibold">
            Personajes desbloqueados
          </h2>
          <p className="text-ash-400 text-xs mt-0.5">
            {unlockedCount} / {characters.length} desbloqueados
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Búsqueda */}
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar..."
            className="bg-fog-800 border border-fog-700 text-ash-100 text-sm 
                       px-3 py-1.5 rounded-sm w-36 focus:outline-none focus:border-blood-500
                       placeholder:text-ash-400"
          />

          {/* Botón todos/ninguno */}
          <button
            onClick={() => onToggleAll(!allUnlocked)}
            className="btn-secondary text-xs px-3 py-1.5"
          >
            {allUnlocked ? 'Ninguno' : 'Todos'}
          </button>
        </div>
      </div>

      {/* Grid de personajes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {filtered.map(character => {
          const isUnlocked = unlockedIds.includes(character.id)
          const isDefault = character.isDefault

          return (
            <button
              key={character.id}
              onClick={() => onToggle(character.id)}
              className={`
                relative p-3 rounded-sm border text-left transition-all duration-150 group
                ${isUnlocked
                  ? 'bg-fog-700 border-blood-500/60 hover:border-blood-400'
                  : 'bg-fog-900 border-fog-700 hover:border-fog-500 opacity-60 hover:opacity-80'
                }
              `}
            >
              {/* Indicador de desbloqueado */}
              <div className={`
                absolute top-1.5 right-1.5 w-2 h-2 rounded-full transition-colors
                ${isUnlocked ? 'bg-blood-400' : 'bg-fog-600'}
              `} />

              {/* Badge de base */}
              {isDefault && (
                <span className="absolute top-1.5 left-1.5 text-[9px] text-hook-400 font-medium">
                  BASE
                </span>
              )}

              {/* Nombre */}
              <p className={`
                text-xs font-medium leading-tight mt-2
                ${isUnlocked ? 'text-ash-100' : 'text-ash-400'}
              `}>
                {character.name}
              </p>

              {/* Cantidad de perks */}
              <p className="text-[10px] text-ash-400 mt-1">
                {character.perks.length} perks
              </p>
            </button>
          )
        })}
      </div>

      {/* Sin resultados */}
      {filtered.length === 0 && (
        <p className="text-ash-400 text-sm text-center py-8">
          No se encontraron personajes para "{search}"
        </p>
      )}
    </section>
  )
}
