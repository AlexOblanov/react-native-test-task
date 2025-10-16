/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Abel-Regular'],

        abel: ['Abel-Regular'],
        'sf-pro': ['SFProDisplay-Regular'],
      },
      colors: {
        'surface-primary': '#fff',
        'surface-secondary': '#F7F7F7',

        'text-primary': '#000',
        'text-secondary': '#979797',
        'text-tertiary': '#9D9D9D',
        'text-inverted': '#fff',

        'button-primary': '#000',
        'button-secondary': '#fff',

        'border-primary': '#F5F5F5',

        'brand-primary': '#FED138',
      },
      spacing: {
        'container-x': '20px',
      },
    },
  },
  plugins: [],
}
