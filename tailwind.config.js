/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'bg-yellow-500',
    'bg-brown-500',
    'bg-red-500'
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        dark: 'rgb(32, 32, 35)',
        light: '#fcfefd',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
