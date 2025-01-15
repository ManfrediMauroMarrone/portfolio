/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080',
        secondary: '#FCEEC9',
        whiteText: '#FFFFFF'
      },
      fontFamily: {
        customFont: ['Roboto Condensed', 'sans-serif']
      },
      height: {
        sectionHeight: '40rem',
      },
      margin: {
        negativeTop: -2
      },
      width: {
        itemListWidth: '50rem',
      },
    },
  },
  plugins: [],
}