/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        mygray: '#A0ACB0'
      }
    },
  },
  plugins: [],
}

