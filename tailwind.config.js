/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
        secondary: "#FFF3E3",
        dark: "#333333",
        lightGray: "#F4F5F7",
      },
    },
  },
  plugins: [],
};