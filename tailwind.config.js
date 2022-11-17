/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBlue: "#1967FF",
        customPink: "#EB4BB6",
        bgColor: "#F8FAFB",
        lightGray: "#EFEDFF",
        darkGray: "#e8e6f8",
        gray3: "#C5C5C5",
        gray4: "#f3f2fd",
        black1: "#464555",
        black2: "#6F7285",
        black3: "#9A99AA",
        lightPurple: "#A3A2D8",
      },
    },
  },
  plugins: [],
};
