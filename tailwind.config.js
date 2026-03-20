/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E31837',
          50: '#FDE8EC',
          100: '#FBD1D8',
          200: '#F7A3B1',
          300: '#F3758A',
          400: '#EF4763',
          500: '#E31837',
          600: '#C4142F',
          700: '#A51027',
          800: '#860D1F',
          900: '#670917',
        },
        'page-bg': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
