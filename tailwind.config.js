/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        peerconnectGreen: {
          lightest: '#D2FF72',
          lighter: '#73EC8B',
          medium: '#54C392',
          dark: '#15B392',
          darkBg: '#0f2f1f',
          darkAccent: '#2a6b4f',
        },
        backgroundLight: '#ffffff',
        backgroundDark: '#121212',
        textLight: '#000000',
        textDark: '#ffffff',
      },
    },
  },
  plugins: [],
}
