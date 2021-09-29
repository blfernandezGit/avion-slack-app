module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {custom: '#18191d', white: '#fff', pink: '#ea1646', lightGrey: '#bebeb4', yellowishWhite: '#e3e2c4', DarkRed: '#c71340'},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
