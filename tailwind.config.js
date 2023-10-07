/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/index.html"],
    theme: {
      colors: {
        'white': '#EEEEEE',
        'blue': {
          '900': '#053B50',
          '700': '#252B48',
          '500': '#176B87',
          '300': '#64CCC5',
          ''  : '#053B50',
        },
        'light': '#EEEEEE',
        'black': '#191717',

      },
      fontFamily: {
        'sans': ['Ubuntu', 'sans-serif'],
        'serif': ['Ubuntu', 'serif'],
        'mono': ['Ubuntu', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      extend: {},
    },
    plugins: [],
  }

