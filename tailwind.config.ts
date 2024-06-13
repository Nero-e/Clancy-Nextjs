import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'raisin-black': {
          DEFAULT: '#231f20',
        },
        'redwood': {
          DEFAULT: '#A63D40',
        },
        'earth-yellow': {
          DEFAULT: '#E9B872',
        },
        'bone': {
          DEFAULT: '#D6D0C3',
        },
        'rich-black': {
          DEFAULT: '#0F1020',
        }
      },
      fontFamily: {
        alfredinoSemirounded: ['AlfredinoSemirounded', 'sans-serif'],
        alfredinoTuttocurvy: ['AlfredinoTuttocurvy', 'sans-serif'],
        alfredinoSemimono: ['AlfredinoSemimono', 'monospace'],
        satoshi: ['Satoshi', 'sans-serif'],
        satoshiItalic: ['SatoshiItalic', 'italic'],
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [],
};
export default config;
