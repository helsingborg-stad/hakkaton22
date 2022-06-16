/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'green': '#50811B',
        'green-background': '#C9D6C3',
        'green-lightest': '#F2F6EE',
      },
    },
  },
  plugins: [],
}
