/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'layer-1': '#282828',
        'layer-2': '#c4c4c426',
      },
      colors: {
        gray: '#979797',
        blue: '#076AFE',
      },
    },
  },
  plugins: [],
};
