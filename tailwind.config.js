// tailwind.config.js
import plugin from "tailwindcss/plugin";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        benzin: ["Benzin", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        poiretOne: ["PoiretOne", "sans-serif"],
        foxMino: ["FoxMino", "sans-serif"],
        foxMinoRegular: ["FoxMinoRegular", "sans-serif"],
        fthabitRegular: ["FTHabitRegular", "sans-serif"],
        fthabitBold: ["FTHabitBold", "sans-serif"],
        fthabitLight: ["FTHabitLight", "sans-serif"],
        fthabitMedium: ["FTHabitMedium", "sans-serif"],
        brandonRegular: ["BrandonRegular", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": { textShadow: "1px 1px 2px rgba(0,0,0,0.5)" },
        ".text-shadow-md": { textShadow: "3px 3px 5px rgba(0,0,0,0.5)" },
        ".text-shadow-lg": { textShadow: "5px 5px 10px rgba(0,0,0,0.7)" },
      });
    }),
    scrollbarHide,
  ],
};
