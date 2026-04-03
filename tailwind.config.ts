import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#F6C343',
          'gold-hover': '#FFD466',
          dark: '#181C24',
          'dark-secondary': '#1E2530',
          card: '#262D38',
          elevated: '#2F3744',
        },
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
