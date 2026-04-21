/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2a4a7a',
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#e5c767',
        },
        neutral: {
          light: '#f7fafc',
          dark: '#2d3748',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
