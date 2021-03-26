module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        md: '60rem',
      },
      colors: {
        green: '#079607',
        interactive: '#0ac80a',
        black: '#000800',
        lightgrey: '#dadada',
        darkgrey: '#575757',
        errorred: '#e33030',
      },
      fontFamily: {
        sans: ['Dosis', 'sans-serif'],
      },
      maxWidth: {
        'screen-lg': '60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
