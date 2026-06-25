// SavedBuilds.jsx — Historial de builds guardadas

import { useSavedBuilds } from '../hooks/useSavedBuilds'
import { PerkCard } from '../components/PerkCard'

export function SavedBuilds() {
  const { builds, deleteBuild, clearAll } = useSavedBuilds()

  if (builds.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-ash-100 mb-2">💾 Builds Guardadas</h1>
        <p className="text-ash-400 mb-12">Tus builds se guardan localmente en este navegador.</p>
        <div className="text-center py-20">
          <span className="text-6xl">📭</span>
          <p className="text-ash-400 mt-4">Todavía no tienes builds guardadas.</p>
          <p className="text-ash-400 text-sm mt-1">
            Genera una build en la sección Survivor o Killer y guárdala con el botón 💾.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-ash-100">💾 Builds Guardadas</h1>
          <p className="text-ash-400 mt-1">{builds.length} build{builds.length !== 1 ? 's' : ''} guardada{builds.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => {
            if (confirm('¿Borrar todas las builds guardadas?')) clearAll()
          }}
          className="btn-secondary text-sm px-3 py-1.5 hover:border-blood-500 hover:text-blood-400"
        >
          🗑 Borrar todo
        </button>
      </div>

      {/* Lista de builds */}
      <div className="space-y-6">
        {builds.map(build => (
          <div key={build.id} className="card space-y-4">
            {/* Header del build */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-ash-100 font-semibold">{build.label}</h3>
                <p className="text-ash-400 text-xs mt-0.5">
                  {build.role === 'killer' ? '🔪 Killer' : '🧍 Survivor'}
                  {' · '}
                  {new Date(build.createdAt).toLocaleDateString('es-CL', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}
                </p>
              </div>
              <button
                onClick={() => deleteBuild(build.id)}
                className="text-ash-400 hover:text-blood-400 transition-colors text-sm p-1"
                title="Eliminar build"
              >
                🗑
              </button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {build.perks.map((perk, i) => (
                <PerkCard key={i} perk={perk} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
