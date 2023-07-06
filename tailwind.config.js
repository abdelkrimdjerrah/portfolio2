/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        background: "var(--color-background)",
      },
      fontFamily: {
        body: "var(--font-inter), sans-serif",
        heading: "var(--font-cousine), serif",
      },
      screens: {
        // 'sm': '640px',  
        // 'md': '768px',
        // 'lg': '1024px',  
        // 'xl': '1280px',
      }
    },
  },
  plugins: [],
};
