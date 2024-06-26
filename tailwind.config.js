/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-pattern': "url('../../../assets/images/nav_pattern.jpg')",
      },
      colors: {
        'background': '#FAFDF2',
        'dark-green': '#1A3129',
        'lime-green': '#CBEA7B',
        'light-lime': '#F6FBE9',
        'border-green': '#E5F5BD',
        'footer-green': '#2C5446',
        'numbers-green': '#468671',
        'blog-border': '#EEF8D3',
      }
    },
  },
  plugins: [],
}

