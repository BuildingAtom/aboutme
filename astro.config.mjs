// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import postCssOklabPolyfill from '@csstools/postcss-oklab-function'
import autoprefixer from 'autoprefixer'
import Unfonts from 'unplugin-fonts/astro'

import { coreSettings } from './src/settings';


// https://astro.build/config
export default defineConfig({
  site: coreSettings.site,
  base: coreSettings.basepath,
  trailingSlash: 'ignore',
  integrations: [
    tailwind(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Open+Sans',
            styles: 'wght@400;500;600;700',
          },
          {
            name: 'Lato',
            styles: 'wght@400;500;600;700',
          }
        ],
      },
    }),
  ],
  vite: {
    css: {
      postcss: {
        plugins: [
          // postCssOklabPolyfill({
          //   preserve: true,
          // }),
          autoprefixer(),
        ],
      },
    },
  },
});
