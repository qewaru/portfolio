/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '426px',
      md: '769px',
      'semimd': '1025px',
      lg: '1281px'
    },
    extend: {
      colors: {
        'text': '#eee7f9',
        'background': '#110f15',
        'primary': '#301759',
        'secondary': '#0f071c',
        'accent': '#6e34cb',
        'accent-200': '#a885e0',
       },
       keyframes: {
        shimmer: {
          '100%': {transform: 'translateX(100%)'}
        },
        pulsate: {
          '0%': { borderColor: '#a885e0' },
          '50%': { borderColor: '#6e34cb' },
          '100%': { borderColor: '#a885e0' }
        },
        slide: {
          '100%': {transform: 'translateX(100%)'}
        },
        glitch: {
          '0%': {textShadow: '0.03em 0 rgba(255, 0, 0, .75), -0.02em 0 rgba(0, 255, 0, .75), -0.02em 0 rgba(0, 0, 255, .75)'},
          '33%': {textShadow: '0.03em 0 rgba(255, 0, 0, .75), 0.01em 0 rgba(0, 255, 0, .75), -0.02em 0 rgba(0, 0, 255, .75)'},
          '66%': {textShadow: '-0.01em 0 rgba(255, 0, 0, .75), -0.01em 0 rgba(0, 255, 0, .75), -0.05em 0 rgba(0, 0, 255, .75)'},
          '100%': {textShadow: '0.01em 0 rgba(255, 0, 0, .75), 0.02em 0 rgba(0, 255, 0, .75), 0.05em 0 rgba(0, 0, 255, .75)'},
        }
      },
      boxShadow: {
        'slider': '30px 0px 20px -1px #110f15'
      }
    },
  },
  plugins: [],
}

// colors: {
//   'text': '#edf8f8',
//   'background': '#0b1e1e',
//   'primary': '#41aaaa',
//   'secondary': '#123030',
//   'accent': '#51bdbd',
//  },

// colors: {
//   'text': {
//     50: '#edf8f8',
//     100: '#daf1f1',
//     200: '#b6e2e2',
//     300: '#91d4d4',
//     400: '#6cc6c6',
//     500: '#47b8b8',
//     600: '#399393',
//     700: '#2b6e6e',
//     800: '#1d4949',
//     900: '#0e2525',
//     950: '#071212',
//   },
//   'background': {
//     50: '#ecf8f8',
//     100: '#daf1f1',
//     200: '#b5e3e3',
//     300: '#8fd6d6',
//     400: '#6ac8c8',
//     500: '#45baba',
//     600: '#379595',
//     700: '#297070',
//     800: '#1c4a4a',
//     900: '#0e2525',
//     950: '#071313',
//   },
//   'primary': {
//     50: '#edf8f8',
//     100: '#daf1f1',
//     200: '#b5e3e3',
//     300: '#90d5d5',
//     400: '#6bc7c7',
//     500: '#46b9b9',
//     600: '#389494',
//     700: '#2a6f6f',
//     800: '#1c4a4a',
//     900: '#0e2525',
//     950: '#071212',
//   },
//   'secondary': {
//     50: '#edf8f8',
//     100: '#daf1f1',
//     200: '#b5e3e3',
//     300: '#90d5d5',
//     400: '#6bc7c7',
//     500: '#46b9b9',
//     600: '#389494',
//     700: '#2a6f6f',
//     800: '#1c4a4a',
//     900: '#0e2525',
//     950: '#071212',
//   },
//   'accent': {
//     50: '#edf8f8',
//     100: '#daf1f1',
//     200: '#b5e3e3',
//     300: '#90d5d5',
//     400: '#6bc7c7',
//     500: '#46b9b9',
//     600: '#389494',
//     700: '#2a6f6f',
//     800: '#1c4a4a',
//     900: '#0e2525',
//     950: '#071212',
//   },
//  },
 