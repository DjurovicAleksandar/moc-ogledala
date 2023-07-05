/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#ffff",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217

        primaryBg: "#dcd0b8",

        purpleDark: "#bea79d",
        orangeDark: "#9a5d35",
        oliveDark: "#5a5844",
        yellowDark: "#C4BB7D",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
