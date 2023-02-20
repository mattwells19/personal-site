/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        // used in resume.astro for the download btn
        "bounce-twice": "bounce 1s 2.5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
