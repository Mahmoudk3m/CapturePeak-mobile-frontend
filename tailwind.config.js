/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff', // Lightest
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa', // Light
          500: '#3b82f6', // Base
          600: '#2563eb', // Dark
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a', // Darkest
        },
        secondary: {
          50: '#f5f3ff', // Lightest
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa', // Light
          500: '#8b5cf6', // Base
          600: '#7c3aed', // Dark
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95', // Darkest
        },
      },
      container: {
        padding: {
          DEFAULT: '0.75rem',
          sm: '0.75rem',
          lg: '1rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
};
