/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta temática de Dead by Daylight
        fog: {
          950: '#0a0a0f',
          900: '#11111a',
          800: '#1a1a28',
          700: '#242436',
        },
        blood: {
          500: '#c0392b',
          400: '#e74c3c',
          300: '#ff6b6b',
        },
        ash: {
          400: '#a0a0b0',
          300: '#c0c0d0',
          100: '#e8e8f0',
        },
        hook: {
          500: '#8b6914',
          400: '#c9962a',
          300: '#f0b429',
        }
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'fog-gradient': 'radial-gradient(ellipse at center, #1a1a28 0%, #0a0a0f 100%)',
      }
    },
  },
  plugins: [],
}
