import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
