/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                         linear-gradient(to top, rgba(255,255,255,0.2) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-pattern': '20px 20px',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-40px)' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 3s ease-out forwards',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide'),],
};
