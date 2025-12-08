/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ted: {
          red: '#e62b1e',
          black: '#000000',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        // Ensure you import these fonts in index.css or index.html
        sans: ['Helvetica', 'Arial', 'sans-serif'], 
        heading: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}