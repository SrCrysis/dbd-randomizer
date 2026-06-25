// BuildDisplay.jsx — Muestra las 4 perks de la build actual
//
// Recibe la build, acciones para re-roll y guardar

import { useState } from 'react'
import { PerkCard } from './PerkCard'

export function BuildDisplay({
  build,
  lockedPerks,
  onGenerate,
  onReroll,
  onRerollSingle,
  onLockToggle,
  onSave,
  poolSize,
}) {
  const [saveLabel, setSaveLabel] = useState('')
  const [showSaveInput, setShowSaveInput] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    if (build.length < 4) return
    onSave(saveLabel)
    setSaved(true)
    setShowSaveInput(false)
    setSaveLabel('')
    setTimeout(() => setSaved(false), 2000)
  }

  const hasLockedPerks = lockedPerks && lockedPerks.size > 0

  return (
    <section className="space-y-4">
      {/* Header de la sección */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-ash-100 text-lg font-semibold">Tu Build</h2>
          <p className="text-ash-400 text-xs mt-0.5">
            {poolSize} perks disponibles en tu pool
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex items-center gap-2">
          {/* Re-roll solo los slots no bloqueados */}
          {hasLockedPerks && build.length === 4 && (
            <button
              onClick={onReroll}
              className="btn-secondary text-sm px-4 py-2"
            >
              🎲 Re-roll libres
            </button>
          )}

          {/* Generar build completa */}
          <button
            onClick={onGenerate}
            disabled={poolSize < 4}
            className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {build.length === 0 ? '🎲 Generar Build' : '🔄 Nueva Build'}
          </button>
        </div>
      </div>

      {/* Grid de 4 perks */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <PerkCard
            key={i}
            perk={build[i]}
            isEmpty={!build[i]}
            slotIndex={i}
            isLocked={build[i] && lockedPerks?.has(build[i].id)}
            onLockToggle={onLockToggle}
            onReroll={onRerollSingle}
          />
        ))}
      </div>

      {/* Aviso si no hay suficientes perks */}
      {poolSize < 4 && (
        <p className="text-blood-400 text-sm text-center">
          ⚠️ Necesitas al menos 4 perks en tu pool. Desbloquea más personajes.
        </p>
      )}

      {/* Guardar build */}
      {build.length === 4 && onSave && (
        <div className="flex items-center gap-2 pt-2">
          {showSaveInput ? (
            <>
              <input
                type="text"
                value={saveLabel}
                onChange={e => setSaveLabel(e.target.value)}
                placeholder="Nombre para la build (opcional)"
                className="flex-1 bg-fog-800 border border-fog-700 text-ash-100 text-sm 
                           px-3 py-2 rounded-sm focus:outline-none focus:border-blood-500
                           placeholder:text-ash-400"
                onKeyDown={e => e.key === 'Enter' && handleSave()}
                autoFocus
              />
              <button onClick={handleSave} className="btn-primary text-sm px-4 py-2">
                Guardar
              </button>
              <button onClick={() => setShowSaveInput(false)} className="btn-secondary text-sm px-3 py-2">
                ✕
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowSaveInput(true)}
              className="btn-secondary text-sm px-4 py-2"
            >
              {saved ? '✅ Guardada!' : '💾 Guardar build'}
            </button>
          )}
        </div>
      )}
    </section>
  )
}
