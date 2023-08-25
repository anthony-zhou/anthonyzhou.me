/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Helvetica Neue', ...fontFamily.sans],
        'righteous': ['Righteous', ...fontFamily.sans],
        'merriweather': ['Merriweather', ...fontFamily.serif]
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
