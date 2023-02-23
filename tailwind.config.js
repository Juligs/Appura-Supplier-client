/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lora: ["Lora"],
      },
      colors: {
        "dark-blue": "#020B50",
        "blue-l": "#5850EC",
        "light-green": "#C4E244",
        "light-blue": "#434B8D",
      },
    },
  },
  plugins: [],
};
