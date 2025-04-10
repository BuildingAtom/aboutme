// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import { coreSettings } from './src/settings';


// https://astro.build/config
export default defineConfig({
  site: coreSettings.site,
  base: coreSettings.basepath,
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
