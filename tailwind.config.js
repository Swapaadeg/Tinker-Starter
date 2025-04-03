/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['raleway'],
        montserrat: ['montserrat'],
      },
      colors: {
        jaunetinker: '#F5C45D',
        bleutinker: '#3DC1CD',

      }
    },
  },
  plugins: [],
}

