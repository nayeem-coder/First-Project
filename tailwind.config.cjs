/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      colors: {
        deepBlack: '#09090B',
        electricBlue: '#0AB9FF',
        emerald: '#2ECC71',
        frostedWhite: 'rgba(255,255,255,0.08)'
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
