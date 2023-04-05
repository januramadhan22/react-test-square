/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        iris: { 60: "#A5A6F6", 75: "#7879F1" },
        primary: {
          black: "#110D17",
          grey: "#6D6D6D",
          blue: "#5D5FEF",
          orange: "#F17300",
          red: "#8F0A13",
        },
        secondary: {
          grey: "#98949E",
          blue: "#2F80ED",
          green: "#11998E",
          orange: "#F46B45",
          purple: "#7F00FF",
          red: "#F02D3A",
        },
        soft: {
          grey: "#FAFAFA",
          blue: "#56CCF2",
          green: "#38EF7D",
          orange: "#EEA849",
          purple: "#E100FF",
          red: "#FEF5F6",
        },
      },
    },
  },
  plugins: [],
};
