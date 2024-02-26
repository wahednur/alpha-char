/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Inter", "Anton", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        inter: ["Poppins", "Inter", "sans-serif"],
      },
    },
    backgroundColor: {
      "bg-black": "#010313",
      "bg-black-a": "#010313cc",
    },
  },
  plugins: [require("daisyui")],
};
