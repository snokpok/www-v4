import { defineConfig } from 'astro/config'; // import lit from '@astrojs/lit';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://astro-minimal-starter.netlify.app/",
  integrations: [sitemap()],
  redirects: {
    "/zoom": "https://usc.zoom.us/j/3359916674?pwd=RklnSDg4YjVZNENUa013aDEwY0J4dz09",
    "/chat": "https://cal.com/snokpok"
  }
});
