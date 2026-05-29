/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bodoni Moda"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#F4F2EC',
        ink: '#1A1916',
        muted: '#6F6B61',
        faint: '#A8A296',
        accent: '#27408B',
        line: 'rgba(26, 25, 22, 0.14)',
        rule: 'rgba(26, 25, 22, 0.85)',
      },
      maxWidth: {
        page: '1180px',
      },
    },
  },
  plugins: [],
};
