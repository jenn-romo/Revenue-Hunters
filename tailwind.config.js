/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#01236B',
          light: '#60B7E3',
          accent: '#A4D6EF',
          gray: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}