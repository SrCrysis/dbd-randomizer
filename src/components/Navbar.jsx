// Navbar.jsx — Barra de navegación
//
// useLocation nos dice en qué ruta estamos para resaltar el link activo
// Link es el componente de React Router para navegar sin recargar la página

import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/',          label: '🏠 Inicio' },
  { to: '/survivors', label: '🧍 Survivors' },
  { to: '/killers',   label: '🔪 Killers' },
  { to: '/manual',    label: '⚙️ Manual' },
  { to: '/saved',     label: '💾 Guardadas' },
]

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-fog-900/95 backdrop-blur-sm border-b border-fog-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo / nombre del sitio */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-blood-400 text-xl">⚰️</span>
            <span className="font-display text-ash-100 text-sm font-semibold tracking-wider
                            group-hover:text-blood-300 transition-colors">
              DBD BUILDS
            </span>
          </Link>

          {/* Links de navegación */}
          <div className="flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              // isActive: si la ruta actual coincide con el link
              // Para '/' usamos exact match, para el resto basta con startsWith
              const isActive = to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(to)

              return (
                <Link
                  key={to}
                  to={to}
                  className={`
                    px-3 py-1.5 rounded-sm text-sm font-medium transition-all duration-150
                    ${isActive
                      ? 'bg-blood-500/20 text-blood-300 border border-blood-500/40'
                      : 'text-ash-400 hover:text-ash-100 hover:bg-fog-800'
                    }
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    </nav>
  )
}
