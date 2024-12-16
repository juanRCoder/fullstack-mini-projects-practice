/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      roboto: ["Roboto", "sans-serif"],
      ptsans: ["PT Sans Narrow", "system-ui"],
      barlow: ["Barlow", "system-ui"],
      redHatText: ["Red Hat Text", "sans-serif"]
    },
  },
	plugins: [],
}
