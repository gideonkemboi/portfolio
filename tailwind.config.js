import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "light-green": "#F1F6FA",
        graphite: "#1E1E21",
      },
    },
  },
  plugins: [forms],
};
