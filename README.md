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


