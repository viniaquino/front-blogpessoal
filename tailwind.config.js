/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-500': '#9f7aea',
        'violet-500': '#805ad5',
        'pink-500': '#d53f8c',
      },
    },
  },
  plugins: [],
}



