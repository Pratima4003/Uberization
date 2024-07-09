/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BonaNovaSC: ["Bona Nova SC", "static"],
        Ubuntu: ["Ubuntu", "static"],
        PTSerif: ["PT Serif", "static"],
      },
    },
  },
  plugins: [],
};
