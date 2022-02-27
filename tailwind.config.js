module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'secondary': 'Shadows Into Light',
      },
      colors: {
        'primary': '#0073e7',
        'red': '#ff6565'
      },
    },
  },
  plugins: [],
}