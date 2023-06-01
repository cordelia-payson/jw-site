/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nanum)'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#FAEDCD',
          secondary: '#CCD5AE',
          'secondary-content': '#000000',
          accent: '#e7e5e4',
          neutral: '#e7e5e4',
          'base-100': '#Ffffff',
        },
      },
    ],
  },
};
