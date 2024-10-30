/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {colors: {
        'blue-bar': '#1F2937',
      },},
  },
  plugins: [],
}

