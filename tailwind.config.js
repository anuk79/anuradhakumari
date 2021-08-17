module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        link: 'var(--link)',
        primaryBg: 'var(--bg-primary)',
        secondaryBg: 'var(--bg-secondary)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
