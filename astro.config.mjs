import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ly900.github.io/',
  base: '/lilly-astrojs',
  integrations: [react(), tailwind()]
});