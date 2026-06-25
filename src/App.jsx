// App.jsx — El componente raíz de la aplicación
//
// React Router v6:
// - BrowserRouter: provee el contexto de routing
// - Routes: el contenedor de rutas (reemplaza Switch de v5)
// - Route: define una ruta específica → componente
// - Navigate: redirección programática

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BuildPage } from './pages/BuildPage'
import { ManualBuilder } from './pages/ManualBuilder'
import { SavedBuilds } from './pages/SavedBuilds'
import { survivors } from './data/survivors'
import { killers } from './data/killers'

export default function App() {
  return (
    // BrowserRouter habilita la navegación con URLs reales (/survivors, /killers, etc.)
    // HashRouter sería alternativa si no tienes control del servidor (usa # en la URL)
    <BrowserRouter basename="/dbd-randomizer">
      <div className="min-h-screen bg-fog-950">

        {/* Navbar se muestra en TODAS las páginas */}
        <Navbar />

        {/* Main: el contenido cambia según la ruta */}
        <main>
          <Routes>
            {/* Ruta raíz */}
            <Route path="/" element={<Home />} />

            {/* BuildPage reutilizado para survivors y killers */}
            {/* Pasamos los datos como props — el componente es el mismo */}
            <Route
              path="/survivors"
              element={<BuildPage characters={survivors} role="survivor" />}
            />
            <Route
              path="/killers"
              element={<BuildPage characters={killers} role="killer" />}
            />

            <Route path="/manual" element={<ManualBuilder />} />
            <Route path="/saved"  element={<SavedBuilds />} />

            {/* Catch-all: cualquier ruta desconocida redirige al inicio */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
