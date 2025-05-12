/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ipad: '769px', // Ajoutez un breakpoint pour 820px
        ipad2: '1025px', // Ajoutez un breakpoint pour 820px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        adelia: ['Adelia', 'cursive'],
      },
    },
  },
  plugins: [],
};
