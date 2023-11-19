const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Norse-Bold', ...defaultTheme.fontFamily.sans],
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      height: { screen: '100dvh' },
      backgroundImage: {
        'hero-pattern': "url('/images/halie-west-25xggax4bSA-unsplash.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
