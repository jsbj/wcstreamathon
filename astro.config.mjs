import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/act": "https://5calls.org/issue/climate-weather-research-funding-cuts/",
    "/watch": "https://www.youtube.com/@wclivestream/live",
    "/live": "https://www.youtube.com/@wclivestream/live",
    "/catchup": "https://www.youtube.com/watch?v=CcWR6CdJnvQ&list=PLDDEU7mKb6z0RD8V9eXw8TH_qJ1Jtb5u_",
    "/tumblr": "https://www.tumblr.com/communities/weather-n-climate-livestreams",
    "/blorbo": "https://www.tumblr.com/communities/weather-n-climate-livestreams"
  },
  site: "https://foxi.netlify.app/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
