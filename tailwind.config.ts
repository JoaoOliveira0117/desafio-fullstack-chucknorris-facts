import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        firacode: ['Fira Code', 'monospace'],
      },
      screens: {
        xs: '565px',
      },
      colors: {
        thistle: {
          default: '#D3C0CD',
        },
        jet: {
          light: '#4D4A5B',
          default: '#3D3A4B',
          dark: '#2D2A3B',
        },
        lavender: {
          light: '#F5F5FF',
          default: '#E3DFFF',
          dark: '#CCCCFF',
        },
        coral: {
          default: '#FF6F61',
        },
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
