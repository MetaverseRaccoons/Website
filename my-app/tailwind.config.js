/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#29d695'
      },
      padding: {
        '1/2': '50%',
        'full': '100%'
      },
      fontFamily: {
        'custom': ['Roboto Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}