/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        "noto-serif": ["Noto Serif", "serif"],
        "eb-garamond": ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
