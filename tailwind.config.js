/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-15deg)' },
        '50%': { transform: 'rotate(15deg)' },
      },
      slide: {
        from: {transform: 'translateX(100%)'},
        to: {transform: 'translateX(0)'}
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      slide: 'slide .50s ease-in-out',
    },
    fontFamily: {
      'notosans': ['Noto Sans', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}