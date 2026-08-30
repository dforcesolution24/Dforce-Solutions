/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0B1120",
        "cyan-accent": "#00D9FF",
      },
      spacing: {
        "safe-x": "max(1rem, env(safe-area-inset-left))",
      },
    },
  },
  plugins: [],
}
