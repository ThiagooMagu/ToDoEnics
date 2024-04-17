/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#141E33",
        },
        // Adicionando a nova paleta de cores
        white: {
          DEFAULT: "#FFFFFF",
          dim: "#F7F7F7",
        },
        red: {
          DEFAULT: "#FF0000", // Vermelho para destaque
          dark: "#B20000",
        },
      },
      screens: {
        "2xl": "1736px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
