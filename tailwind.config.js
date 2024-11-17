/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3ffff",
        purple: "#757df9",
        purple_lighter: "#aab6fa",
        blue: "#71eaf9",
        blue_lighter: "#c3f8fe",
        black: "#515151",
      },
      fontFamily: {
        main: ["var(--montserrat)", "sans-serif"],
      },
      skew: {
        "-3": "-3deg",
      },
      screens: {
        mdCustom: "900px",
        xs: "500px",
      },
    },
  },
  plugins: [],
};
