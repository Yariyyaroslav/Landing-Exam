/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // важливо!
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        textHead:'#D9E3EA',
        textMain:'#9BA9B4',
        buttonCol:'#5D5DFF',
        textSecond:'#C5D2DC',
        bgMain:'#151719',
      },
      screens: {
        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '520px',
      },
    },
  },
  plugins: [],
}
