import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontSize: {
      s: ['0.675rem', '1.125rem'],
      sm: ['0.875rem', '1.125rem'],
      base: ['1rem', '1.125rem'],
      lg: ['1.5rem', '1.8rem'],
      xl: ['3rem', '3.6rem'],
      xxl: ['7.5rem', '9rem'],
    },

    fontFamily: {
      sans: ['Times New Roman', 'sans-serif'],
    },

    extend: {
      colors: {
        'button--disabled': '#393B42',
        'text-disabled': '#81838D',

        white: '#FFFFFF',
        black: '#0B0B0B',
        'gray-10': '#F5F5F5',
        'gray-20': '#D9D9D9',
        'gray-40': '#757575',
        'gray-100': '#2C2C2C',
      },

      transitionProperty: {
        height: 'height',
      },

      animation: {
        'fade-in-scale': 'fadeInScale 0.4s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
        'fade-background': 'fadeBackground 0.5s ease-in-out infinite alternate',
        'slide-in-bottom': 'slideInBottom 0.3s ease-out forwards',
        'slide-in-top': 'slideInTop 0.3s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.3s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-out-bottom': 'slideOutBottom 0.3s ease-out forwards',
        'fade-in-rotate': 'fadeInRotate 0.5s ease-out forwards',
        'fade-out-rotate': 'fadeOutRotate 0.5s ease-out forwards',
      },

      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideOutBottom: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInRotate: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            transformOrigin: 'center',
          },
        },
        fadeOutRotate: {
          '0%': {
            transform: 'scale(1) rotate(360deg)',
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'scale(0) rotate(0deg)',
            transformOrigin: 'center',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
