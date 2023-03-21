/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        'body': '#111827'
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