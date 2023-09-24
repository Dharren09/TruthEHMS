/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: "#0f172a",
        textColor: "#020617",
        redColor: "#991b1b",
        stoneColor: "#78716c",
        primaryColor: "#1e3a8a",
        cyanColor: "#c026d3",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      }
    },
  },
  plugins: [],
}

