// BuildPage.jsx — Página reutilizable para Survivors y Killers
//
// Recibe `characters` y `role` como props, así el mismo componente
// sirve para ambos modos. Esto es uno de los conceptos clave de React:
// DRY (Don't Repeat Yourself) mediante componentes parametrizables.

import { usePerkPool } from '../hooks/usePerkPool'
import { useSavedBuilds } from '../hooks/useSavedBuilds'
import { CharacterGrid } from '../components/CharacterGrid'
import { BuildDisplay } from '../components/BuildDisplay'

export function BuildPage({ characters, role }) {
  const storageKey = `unlocked_${role}s` // 'unlocked_survivors' o 'unlocked_killers'

  // Nuestro custom hook maneja toda la lógica
  const {
    unlockedIds,
    perkPool,
    currentBuild,
    lockedPerks,
    toggleCharacter,
    toggleAll,
    generateBuild,
    rerollUnlocked,
    rerollSinglePerk,
    togglePerkLock,
    poolSize,
    unlockedCount,
    totalCount,
  } = usePerkPool(characters, storageKey)

  const { saveBuild } = useSavedBuilds()

  const title = role === 'survivor' ? '🧍 Survivor Build' : '🔪 Killer Build'
  const subtitle = role === 'survivor'
    ? 'Selecciona tus survivors desbloqueados para definir el pool de perks disponibles.'
    : 'Selecciona tus killers desbloqueados para definir el pool de perks disponibles.'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">

      {/* Header de la página */}
      <div>
        <h1 className="font-display text-3xl font-bold text-ash-100">{title}</h1>
        <p className="text-ash-400 mt-1">{subtitle}</p>
        <p className="text-ash-400 text-sm mt-1">
          {unlockedCount} personajes desbloqueados → <span className="text-hook-300">{poolSize} perks en el pool</span>
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-fog-700" />

      {/* Selector de personajes */}
      <CharacterGrid
        characters={characters}
        unlockedIds={unlockedIds}
        onToggle={toggleCharacter}
        onToggleAll={toggleAll}
      />

      {/* Divider */}
      <div className="border-t border-fog-700" />

      {/* Generador de build */}
      <BuildDisplay
        build={currentBuild}
        lockedPerks={lockedPerks}
        onGenerate={generateBuild}
        onReroll={rerollUnlocked}
        onRerollSingle={rerollSinglePerk}
        onLockToggle={togglePerkLock}
        onSave={(label) => saveBuild(currentBuild, role, label)}
        poolSize={poolSize}
      />

    </div>
  )
}
