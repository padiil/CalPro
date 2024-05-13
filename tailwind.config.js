/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#04364A',
        secondary: '#E57C23'
      },
      fontFamily: {
        Righteous: ['Righteous', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
