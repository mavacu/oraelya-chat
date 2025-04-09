module.exports = {
  mode: 'jit',
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
    },
  },
  plugins: [],
};
