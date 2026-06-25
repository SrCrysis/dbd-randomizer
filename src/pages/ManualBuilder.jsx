// ManualBuilder.jsx — Constructor Manual
// El usuario elige perk por perk con un buscador

import { useState, useMemo } from 'react'
import { survivors } from '../data/survivors'
import { killers } from '../data/killers'
import { useSavedBuilds } from '../hooks/useSavedBuilds'
import { PerkCard } from '../components/PerkCard'

// Aplanar todos los personajes → perks para tener el pool completo del juego
function buildFullPool() {
  const pool = []
  const seen = new Set()

  const addPerks = (characters) => {
    characters.forEach(char => {
      char.perks.forEach(perk => {
        if (!seen.has(perk.id)) {
          seen.add(perk.id)
          pool.push({ ...perk, characterName: char.name, characterId: char.id })
        }
      })
    })
  }

  addPerks(survivors)
  addPerks(killers)
  return pool.sort((a, b) => a.name.localeCompare(b.name))
}

const FULL_POOL = buildFullPool()

// Tipos de perk para filtrar
const PERK_TYPES = ['Todos', 'Hex', 'Boon', 'Scourge', 'Invocation', 'Normal']

function getPerkType(name = '') {
  const n = name.toLowerCase()
  if (n.includes('hex:'))       return 'Hex'
  if (n.includes('boon:'))      return 'Boon'
  if (n.includes('scourge'))    return 'Scourge'
  if (n.includes('invocation')) return 'Invocation'
  return 'Normal'
}

export function ManualBuilder() {
  // Los 4 slots del build
  const [slots, setSlots] = useState([null, null, null, null])
  // Qué slot estamos editando ahora (-1 = ninguno)
  const [activeSlot, setActiveSlot] = useState(-1)
  // Filtros del buscador
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('Todos')
  const [roleFilter, setRoleFilter] = useState('Todos')

  const { saveBuild } = useSavedBuilds()

  // IDs de perks ya en el build (para no poder seleccionarlas dos veces)
  const selectedIds = new Set(slots.filter(Boolean).map(p => p.id))

  // Filtrar el pool
  const filtered = useMemo(() => {
    return FULL_POOL.filter(perk => {
      const matchSearch = search === '' ||
        perk.name.toLowerCase().includes(search.toLowerCase()) ||
        perk.characterName.toLowerCase().includes(search.toLowerCase()) ||
        perk.desc.toLowerCase().includes(search.toLowerCase())

      const matchType = typeFilter === 'Todos' || getPerkType(perk.name) === typeFilter

      const matchRole = roleFilter === 'Todos' ||
        (roleFilter === 'Survivor' && survivors.some(s => s.id === perk.characterId)) ||
        (roleFilter === 'Killer'   && killers.some(k => k.id === perk.characterId))

      return matchSearch && matchType && matchRole
    })
  }, [search, typeFilter, roleFilter])

  // Seleccionar una perk para el slot activo
  const selectPerk = (perk) => {
    if (activeSlot < 0 || activeSlot > 3) return
    setSlots(prev => {
      const next = [...prev]
      next[activeSlot] = perk
      return next
    })
    // Avanzar al siguiente slot vacío automáticamente
    const nextEmpty = slots.findIndex((s, i) => i > activeSlot && s === null)
    setActiveSlot(nextEmpty)
  }

  // Limpiar un slot
  const clearSlot = (i) => {
    setSlots(prev => {
      const next = [...prev]
      next[i] = null
      return next
    })
  }

  // Randomizar un slot específico
  const randomizeSlot = (i) => {
    const available = FULL_POOL.filter(p =>
      !selectedIds.has(p.id) || slots[i]?.id === p.id
    )
    if (available.length === 0) return
    const perk = available[Math.floor(Math.random() * available.length)]
    setSlots(prev => {
      const next = [...prev]
      next[i] = perk
      return next
    })
  }

  // Randomizar todos los slots vacíos
  const randomizeEmpty = () => {
    const taken = new Set(slots.filter(Boolean).map(p => p.id))
    const available = [...FULL_POOL.filter(p => !taken.has(p.id))]
    // Mezclar
    for (let i = available.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [available[i], available[j]] = [available[j], available[i]]
    }
    let idx = 0
    setSlots(prev => prev.map(s => s ? s : available[idx++] || null))
  }

  const buildComplete = slots.every(Boolean)
  const buildRole = slots.some(p => killers.some(k => k.id === p?.characterId))
    ? 'killer' : 'survivor'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

      {/* Header */}
      <div>
        <h1 className="font-display text-3xl font-bold text-ash-100">⚙️ Constructor Manual</h1>
        <p className="text-ash-400 mt-1">
          Haz click en un slot, luego selecciona una perk del listado. Mezcla survivors y killers libremente.
        </p>
      </div>

      {/* ─── Slots del Build ─── */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-ash-100 text-lg font-semibold">Tu Build</h2>
          <div className="flex gap-2">
            <button onClick={randomizeEmpty} className="btn-secondary text-sm px-3 py-1.5">
              🎲 Randomizar vacíos
            </button>
            {buildComplete && (
              <button
                onClick={() => saveBuild(slots.filter(Boolean), buildRole, '')}
                className="btn-primary text-sm px-3 py-1.5"
              >
                💾 Guardar
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {slots.map((perk, i) => (
            <div key={i} className="space-y-1">
              {/* Botón del slot */}
              <button
                onClick={() => setActiveSlot(activeSlot === i ? -1 : i)}
                className={`
                  w-full p-2 rounded-sm border text-xs font-medium transition-all
                  ${activeSlot === i
                    ? 'bg-blood-500/20 border-blood-500 text-blood-300'
                    : 'bg-fog-800 border-fog-700 text-ash-400 hover:border-fog-500'
                  }
                `}
              >
                {activeSlot === i ? '▶ Slot activo' : `Slot ${i + 1}`}
              </button>

              {/* La perk del slot */}
              {perk ? (
                <div className="relative group">
                  <PerkCard perk={perk} />
                  {/* Controles */}
                  <div className="flex gap-1 mt-1">
                    <button
                      onClick={() => randomizeSlot(i)}
                      className="flex-1 text-xs py-1 bg-fog-800 hover:bg-fog-700 text-ash-400 
                                 hover:text-ash-100 rounded-sm transition-colors border border-fog-700"
                    >
                      🎲
                    </button>
                    <button
                      onClick={() => clearSlot(i)}
                      className="flex-1 text-xs py-1 bg-fog-800 hover:bg-fog-700 text-ash-400 
                                 hover:text-blood-400 rounded-sm transition-colors border border-fog-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setActiveSlot(i)}
                  className={`
                    card flex items-center justify-center h-32 border-dashed cursor-pointer
                    transition-colors
                    ${activeSlot === i ? 'border-blood-500/50 bg-blood-500/5' : 'border-fog-600 opacity-50 hover:opacity-80'}
                  `}
                >
                  <span className="text-ash-400 text-sm">
                    {activeSlot === i ? 'Elige una perk →' : '+ Vacío'}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-fog-700" />

      {/* ─── Buscador de Perks ─── */}
      <section>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h2 className="font-display text-ash-100 text-lg font-semibold">
            Perks disponibles
            <span className="text-ash-400 text-sm font-normal ml-2">({filtered.length})</span>
          </h2>

          {/* Instrucción contextual */}
          {activeSlot >= 0 && (
            <p className="text-blood-400 text-sm animate-pulse">
              ← Seleccionando para Slot {activeSlot + 1}
            </p>
          )}
          {activeSlot < 0 && (
            <p className="text-ash-400 text-sm">Selecciona un slot primero</p>
          )}
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar perk o personaje..."
            className="bg-fog-800 border border-fog-700 text-ash-100 text-sm 
                       px-3 py-1.5 rounded-sm w-56 focus:outline-none focus:border-blood-500
                       placeholder:text-ash-400"
          />

          {/* Filtro por tipo */}
          <div className="flex gap-1">
            {PERK_TYPES.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`text-xs px-2 py-1.5 rounded-sm border transition-colors ${
                  typeFilter === t
                    ? 'bg-blood-500/20 border-blood-500/60 text-blood-300'
                    : 'bg-fog-800 border-fog-700 text-ash-400 hover:text-ash-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Filtro por rol */}
          <div className="flex gap-1">
            {['Todos', 'Survivor', 'Killer'].map(r => (
              <button
                key={r}
                onClick={() => setRoleFilter(r)}
                className={`text-xs px-2 py-1.5 rounded-sm border transition-colors ${
                  roleFilter === r
                    ? 'bg-fog-700 border-ash-400/60 text-ash-100'
                    : 'bg-fog-800 border-fog-700 text-ash-400 hover:text-ash-100'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-h-[500px] overflow-y-auto">
          {filtered.map(perk => {
            const alreadySelected = selectedIds.has(perk.id)
            const isInActiveSlot = activeSlot >= 0 && slots[activeSlot]?.id === perk.id

            return (
              <button
                key={perk.id}
                onClick={() => !alreadySelected && activeSlot >= 0 && selectPerk(perk)}
                disabled={alreadySelected && !isInActiveSlot}
                className={`
                  text-left transition-all duration-150 rounded-sm
                  ${alreadySelected
                    ? 'opacity-30 cursor-not-allowed'
                    : activeSlot >= 0
                      ? 'cursor-pointer hover:ring-1 hover:ring-blood-500'
                      : 'cursor-default opacity-70'
                  }
                `}
              >
                <PerkCard perk={perk} />
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
