/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131417',
        secondary: '#008080',
        whiteText: '#FFFFFF'
      },
      fontFamily: {
        customFont: ['Roboto Condensed', 'sans-serif'],
        secondFont: ['Playwrite RO']
      },
      height: {
        sectionHeight: '38rem',
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