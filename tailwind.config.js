/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        'cyan': 'hsl(178, 100%, 50%)',
        'bg-very-dark-blue': 'hsl(217, 54%, 11%)',
        'card-very-dark-blue': 'hsl(216, 50%, 16%)',
        'line-very-dark-blue': 'hsl(215, 32%, 27%)',
        'white': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}