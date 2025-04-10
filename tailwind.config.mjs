import { coreSettings } from './src/settings';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: ['selector', `[data-theme="${coreSettings.darkModeTheme}"]`],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: coreSettings.themes,
  },
};
