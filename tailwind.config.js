const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        Secondary: ['#FF9C06'],
        third: ['#2F3D46'],
        forth: ['#1C252C'],
        Background: ['#2F3D46']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
