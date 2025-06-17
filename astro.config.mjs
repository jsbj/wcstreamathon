import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/act": "https://5calls.org/issue/climate-weather-research-funding-cuts/",
    "/watch": "https://www.youtube.com/@wclivestream",
    "/live": "https://www.youtube.com/@wclivestream",
    "/catchup": "https://www.youtube.com/watch?v=CcWR6CdJnvQ&list=PLDDEU7mKb6z0RD8V9eXw8TH_qJ1Jtb5u_",
    "/tumblr": "https://www.tumblr.com/communities/weather-n-climate-livestreams",
    "/blorbo": "https://www.tumblr.com/communities/weather-n-climate-livestreams",
    "/more": "https://docs.google.com/forms/d/10MdJwKvHYTS-7gaAECDfBX3mLN1a2OTd8YMX7eWyopU/preview",
    "/next": "https://docs.google.com/forms/d/10MdJwKvHYTS-7gaAECDfBX3mLN1a2OTd8YMX7eWyopU/preview"
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
