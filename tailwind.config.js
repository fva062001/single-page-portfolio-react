/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth:{
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '10px'
    },
    fontSize:{
      sm:'1.125rem',
      base:'2rem',
      m:'2.5rem',
      xl:'3.5rem'
    },
    extend: {},
  },
  plugins: [],
}
