/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1A3129',
        'lime-green': '#CBEA7B',
        'light-lime': '#F6FBE9',
        'border-green': '#E5F5BD',
        'footer-green': '#2C5446',
      }
    },
  },
  plugins: [],
}

