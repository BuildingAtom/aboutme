import { coreSettings } from './src/settings';
import tailwind_theme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: ['selector', `[data-theme="${coreSettings.darkModeTheme}"]`],
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("@csstools/postcss-oklab-function"), require("autoprefixer")],
  daisyui: {
    themes: coreSettings.themes,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...tailwind_theme.fontFamily.sans],
      },
    },
  },
};
