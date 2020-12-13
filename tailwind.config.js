module.exports = {
  theme: {
    extend: {
      colors: {
        futbol: {
          green: '#1F400E',
          'green-dark': '#192711',
          brown: '#D59F64',
        },
      },
      fontFamily: {
        title: ['Analogue', 'sans-serif'],
        dinamic: ['Optimus', 'sans-serif'],
        menu: ['Orbitron', 'sans-serif'],
      },
      fontSize: {
        huge: '8rem',
        giant: '16rem',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    whitelistPatterns: [/page-/, /layout-/],
  },
}
