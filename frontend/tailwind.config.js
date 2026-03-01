/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nijaGreen: '#2DBE7B',
        nijaPurple: '#6B4EFF',
        baseDark: '#0B0F14'
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'ui': ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
