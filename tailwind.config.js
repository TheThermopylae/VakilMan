/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        primary: '#E59F2E',
        secondary: '#001A46',
        tertiary: '#EAB250',
        quaternary: '#FFDDAB',
        'c-gray': '#A0AEC0'
      },
      fontFamily: {
        sans: ['YekanBakhFaNum-Regular']
      }
    }
  },
  plugins: []
}
