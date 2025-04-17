
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Page directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        barlow: ['Barlow Condensed'],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}