const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      mainBlue: '#120129',
      mainRed: '#ff4a68',
      darkPurple: '#240046',
      goldie: '#ff9e00',
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      blueGray: colors.blueGray,
      Lime: colors.lime,
      CoolGray: colors.coolGray,
      Fuchsia: colors.fuchsia,
      purple: colors.purple,
      green: colors.green,
      pink: colors.pink,
      Rose: colors.rose,
      Indigo: colors.indigo,
      Sky: colors.sky,
      Amber: colors.amber,
      Cyan: colors.cyan,
      Emerald: colors.emerald,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
