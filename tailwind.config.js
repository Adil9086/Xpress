module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your project
  theme: {
    extend: {
      animation: {
        "rise-section": "riseSection 1.5s ease-out",
        rise: "riseFromDown 1.5s ease-out", // Animation for text and button
      },
      keyframes: {
        riseSection: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        riseFromDown: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
