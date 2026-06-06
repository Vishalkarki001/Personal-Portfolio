/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#f97316',
          hover: '#ea580c',
        },
      },
      boxShadow: {
        glow: '0 10px 40px -10px rgba(249, 115, 22, 0.45)',
      },
    },
  },
  plugins: [],
}
