/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "gradient": "linear-gradient(200deg, #252525, #1C1F15)",
        "suma": "#CEEF82",
        "resta": "#5D9999"
      }
    },
    fontFamily: {
      "inter": ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}

