/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-red": "rgb(229, 9, 20);",
        "bg-trans-black": "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
