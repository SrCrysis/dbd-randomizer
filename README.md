# DBD Build Randomizer

Generador de builds aleatorias para Dead by Daylight, basado en los personajes que tienes desbloqueados.

## Stack
- **React 18** + **Vite** — Frontend framework + bundler
- **TailwindCSS** — Estilos de utilidades
- **React Router v6** — Navegación entre páginas
- **GitHub Pages** — Hosting gratuito
- **localStorage** — Persistencia de datos (sin backend)

---

## Guía de instalación paso a paso

### 1. Instalar prerequisitos (si no los tienes)

```bash
# Verificar que tienes Node.js instalado
node --version  # Necesitas v18 o superior

# Si no lo tienes, en Nobara/Fedora:
sudo dnf install nodejs npm
```

### 2. Clonar o descargar el proyecto

```bash
# Opción A: clonar desde GitHub (después de subirlo)
git clone https://github.com/TU_USUARIO/dbd-randomizer.git
cd dbd-randomizer

# Opción B: ya tienes la carpeta descargada
cd dbd-randomizer
```

### 3. Instalar dependencias

```bash
npm install
# Esto lee package.json y descarga todo en la carpeta node_modules/
```

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
# Abre http://localhost:5173 en el navegador
# Hot reload: los cambios se ven al instante sin recargar
```

### 5. Construir para producción

```bash
npm run build
# Genera la carpeta /dist con los archivos optimizados
# dist/index.html + dist/assets/*.js + dist/assets/*.css
```

---

## Subir a GitHub y activar GitHub Pages

### Paso 1: Crear el repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repo: `dbd-randomizer` (exactamente igual al `base` en vite.config.js)
3. Déjalo público
4. NO inicialices con README (ya tienes uno)

### Paso 2: Subir el código

```bash
cd dbd-randomizer

git init
git add .
git commit -m "Initial commit: DBD Build Randomizer"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/dbd-randomizer.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: **GitHub Actions**
4. Guarda

### Paso 4: Ver el deploy
- GitHub Actions correrá automáticamente al hacer push
- Ve a la pestaña **Actions** para ver el progreso
- En ~2 minutos, tu sitio estará en: `https://TU_USUARIO.github.io/dbd-randomizer/`

### Paso 5: Futuros cambios

```bash
# Editar archivos...
git add .
git commit -m "Descripción del cambio"
git push
# GitHub Actions hace el deploy automáticamente
```

---

## Estructura del proyecto

```
dbd-randomizer/
├── .github/workflows/deploy.yml   ← CI/CD automático
├── src/
│   ├── data/
│   │   ├── survivors.js           ← Datos de todos los survivors
│   │   └── killers.js             ← Datos de todos los killers
│   ├── hooks/
│   │   ├── usePerkPool.js         ← Lógica principal (custom hook)
│   │   └── useSavedBuilds.js      ← Persistencia de builds
│   ├── components/
│   │   ├── Navbar.jsx             ← Navegación
│   │   ├── PerkCard.jsx           ← Tarjeta de perk individual
│   │   ├── CharacterGrid.jsx      ← Grid de selección de personajes
│   │   └── BuildDisplay.jsx       ← Muestra las 4 perks generadas
│   ├── pages/
│   │   ├── Home.jsx               ← Página de inicio
│   │   ├── BuildPage.jsx          ← Reutilizable para Survivor/Killer
│   │   ├── ManualBuilder.jsx      ← Constructor perk por perk
│   │   └── SavedBuilds.jsx        ← Historial de builds
│   ├── App.jsx                    ← Router principal
│   ├── main.jsx                   ← Punto de entrada
│   └── index.css                  ← Estilos globales + Tailwind
├── index.html                     ← HTML base
├── vite.config.js                 ← Configuración de Vite
├── tailwind.config.js             ← Configuración de Tailwind
└── package.json                   ← Dependencias y scripts
```

## Cómo agregar nuevos personajes

Edita `src/data/survivors.js` o `src/data/killers.js`:

```js
{
  id: 'nuevo_personaje',         // ID único, sin espacios
  name: 'Nombre del Personaje',  // Nombre que se muestra
  isDefault: false,              // true = viene en el juego base
  perks: [
    { id: 'perk_1', name: 'Nombre Perk', desc: 'Descripción...' },
    { id: 'perk_2', name: 'Nombre Perk', desc: 'Descripción...' },
    { id: 'perk_3', name: 'Nombre Perk', desc: 'Descripción...' },
  ]
}
```
