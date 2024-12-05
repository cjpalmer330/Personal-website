/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    ".public/index.html"
  ],
  theme: {
    extend:{
      fontFamily: {
        Hanuman: ['"Hanuman"'],
      }
    },
  },
  corePlugins: {
    boxShadow: true, // Ensure boxShadow is enabled
  },
  plugins: [],
  safelist: [/^bg-/,
    'rotate-45',
    'shadow-xl',
    'shadow-blue-500'
  ]
}
