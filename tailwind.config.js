/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        malachite: {
          50: '#f1fee7',
          100: '#e0fbcc',
          200: '#c2f89e',
          300: '#9af066',
          400: '#77e338',
          500: '#5eda1b',
          600: '#40a10f',
          700: '#327a11',
          800: '#2b6113',
          900: '#275215',
          950: '#102d06',
        },
      },
    },
  },
  plugins: [],
}
