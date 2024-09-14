/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1024px",
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
