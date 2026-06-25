// pages/Home.jsx — Página de inicio
//
// useNavigate: hook de React Router para navegar por código (no con Link)

import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  const modes = [
    {
      to: '/survivors',
      icon: '🧍',
      title: 'Build de Survivor',
      description: 'Selecciona los supervivientes que tienes desbloqueados y genera una build aleatoria con sus perks.',
      color: 'hover:border-blue-500/60',
      accent: 'text-blue-400',
    },
    {
      to: '/killers',
      icon: '🔪',
      title: 'Build de Killer',
      description: 'Elige los asesinos que posees y obtén 4 perks aleatorias de su pool disponible.',
      color: 'hover:border-blood-500/60',
      accent: 'text-blood-400',
    },
    {
      to: '/manual',
      icon: '⚙️',
      title: 'Constructor Manual',
      description: 'Elige cada perk una por una con búsqueda y filtros. Bloquea las que quieras y randomiza el resto.',
      color: 'hover:border-hook-400/60',
      accent: 'text-hook-300',
    },
    {
      to: '/saved',
      icon: '💾',
      title: 'Builds Guardadas',
      description: 'Revisa el historial de builds que guardaste en sesiones anteriores.',
      color: 'hover:border-green-500/60',
      accent: 'text-green-400',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[600px] h-[600px] rounded-full 
                          bg-blood-500/5 blur-[120px]" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          <p className="text-blood-400 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            Dead by Daylight
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ash-100 mb-6 leading-tight">
            Build
            <span className="text-blood-400"> Randomizer</span>
          </h1>
          <p className="text-ash-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Genera builds aleatorias basadas en los personajes que tienes desbloqueados.
            Rompe tu rutina y prueba combinaciones nuevas.
          </p>

          {/* CTA principal */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => navigate('/survivors')}
              className="btn-primary text-base px-8 py-3"
            >
              🧍 Survivor Build
            </button>
            <button
              onClick={() => navigate('/killers')}
              className="btn-secondary text-base px-8 py-3"
            >
              🔪 Killer Build
            </button>
          </div>
        </div>
      </section>

      {/* Cards de modos */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="font-display text-ash-400 text-xs uppercase tracking-widest text-center mb-8">
          Elige un modo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modes.map(({ to, icon, title, description, color, accent }) => (
            <button
              key={to}
              onClick={() => navigate(to)}
              className={`card ${color} border text-left group transition-all duration-200 hover:-translate-y-1`}
            >
              <span className="text-3xl mb-3 block">{icon}</span>
              <h3 className={`font-display text-sm font-semibold mb-2 ${accent}`}>
                {title}
              </h3>
              <p className="text-ash-400 text-xs leading-relaxed">
                {description}
              </p>
            </button>
          ))}
        </div>

        {/* Instrucciones rápidas */}
        <div className="mt-12 card border-fog-700">
          <h3 className="font-display text-ash-100 text-sm font-semibold mb-4">
            ¿Cómo funciona?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '1', text: 'Selecciona qué personajes tienes desbloqueados en el juego.' },
              { step: '2', text: 'Sus perks únicas se suman automáticamente a tu pool de perks disponibles.' },
              { step: '3', text: 'Genera una build aleatoria de 4 perks del pool. ¡Bloquea las que te gusten y re-roll el resto!' },
            ].map(({ step, text }) => (
              <div key={step} className="flex gap-3">
                <span className="font-display text-blood-400 text-2xl font-bold shrink-0 leading-none mt-0.5">
                  {step}
                </span>
                <p className="text-ash-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
