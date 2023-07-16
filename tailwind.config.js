const defaultConfig = require('./node_modules/example-kit-dev/tailwind.config');
const { mauve, violet, red, blackA } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        ...defaultConfig.theme.extend.boxShadow,
      },
      animation: {
        ...defaultConfig.theme.extend.animation,
        fadeInDrop: 'fadeInDrop .2s ease-in-out forwards',
        fadeOutDrop: 'fadeOutDrop .2s ease-in-out forwards',
        fadeIn: 'fadeIn .2s ease-in-out',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        ...defaultConfig.theme.extend.keyframes,

        fadeInDrop: {
          '0%': { backdropFilter: 'blur(0px);' },
          '100%': { backdropFilter: 'blur(30px);' },
        },
        fadeOutDrop: {
          '0%': { backdropFilter: 'blur(30px);' },
          '100%': { backdropFilter: 'blur(0px);' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        'custom-white': '#FFFFFF',
        ...mauve,
        ...violet,
        ...red,
        ...blackA,
      },
      fontFamily: {
        ...defaultConfig.theme.extend.fontFamily,
        'roboto-Condensed': ['Roboto Condensed', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
