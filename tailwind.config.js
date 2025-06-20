/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        pastel: {
          lavender: '#E6E6FA',
          mint: '#98FB98',
          rose: '#DDA0DD',
          blue: '#87CEEB',
          peach: '#FFDAB9',
          cream: '#FFF8DC',
        },
        accent: {
          purple: '#9D8DF1',
          teal: '#4FD1C7',
          pink: '#F093FB',
          blue: '#4FACFE',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(157, 141, 241, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(157, 141, 241, 0.8)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};