/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#506882",
          gold: "#a48c4f",
        },
        sai: {
          dark: "#000000",
          light: "#f2f2f2",
          warm: "#f6f3ec",
          "guide-blue": "#dfecf8",
        },
        "text-secondary": "#616161",
        "text-tertiary": "#8c8c8c",
        "text-inactive": "#bebebe",
        "text-footer": "#303030",
        "text-pagination": "#7e7e7e",
        "border-card": "#dadada",
        "border-footer": "#8c8c8c",
        "border-footer-line": "#303030",
        "accent-gold": "#a48c4f",
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
