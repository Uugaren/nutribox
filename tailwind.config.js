/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nutribox: {
          red: '#E41E26',
          dark: '#2D2D2D',
          gold: '#FFD700',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Satoshi', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
