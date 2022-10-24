/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "luxury"],
  },
  plugins: [require("daisyui")],
};
