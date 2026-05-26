import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        church: {
          deep: '#0b1641',
          gold: '#d4af37',
          soft: '#f7f7f8',
          slate: '#4b5563',
        }
      },
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.9)), url('/hero-bg.jpg')",
      }
    }
  },
  plugins: [],
};

export default config;
