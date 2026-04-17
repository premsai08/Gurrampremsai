export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0a0d0a',
        surfaceSoft: '#0e130f',
        surfaceLime: '#b4ff39',
        surfaceLimeSoft: '#ccff0070',
        textMuted: '#a1a1a1',
      },
      boxShadow: {
        glow: '0 20px 120px rgba(180, 255, 57, 0.18)',
        soft: '0 24px 90px rgba(0, 0, 0, 0.28)',
      },
      backgroundImage: {
        'industrial-glow': 'radial-gradient(circle at top left, rgba(180,255,57,0.12), transparent 24%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.08), transparent 30%)',
      },
    },
  },
  plugins: [],
};
