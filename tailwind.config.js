/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fff',
      'blue': '#1b457b',
      'yellow': '#ffcf01',
      'gray-dark': '#2d2d2d',
      'gray-light': '#919191',
      'gray-soft': '#f7f7f7',
      'gray-border': '#E6E6E6',
      'red': '#E92828',
      'red-light': '#E84E7E'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

