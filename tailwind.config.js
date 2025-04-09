/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}'
  ],
  theme: {
    extend: {
      fontFamily: {
        oraelya: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        mysticBlack: '#1a1a2e',
        mysticPurple: '#53354a',
        goldLight: '#d4af37',
      },
      backgroundImage: {
        'mystic-gradient': 'linear-gradient(to bottom, #1a1a2e, #53354a)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
