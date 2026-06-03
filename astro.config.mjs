import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  redirects: {
    //"/act": "https://5calls.org/issue/ncar-national-center-for-atmospheric-research/",
    "/call": "https://5calls.org/issue/weather-climate-science-funding/",
    "/watch": "https://www.youtube.com/@wclivestream/live",
    "/live": "https://www.youtube.com/@wclivestream/live",
    "/catchup": "https://www.youtube.com/watch?v=CcWR6CdJnvQ&list=PLDDEU7mKb6z0RD8V9eXw8TH_qJ1Jtb5u_",
    "/rewatch": "https://www.youtube.com/watch?v=CcWR6CdJnvQ&list=PLDDEU7mKb6z0RD8V9eXw8TH_qJ1Jtb5u_",
    "/tumblr": "https://www.tumblr.com/communities/weather-n-climate-livestreams",
    "/blorbo": "https://www.tumblr.com/communities/weather-n-climate-livestreams",
    "/more": "https://forms.gle/FLC8tiajqh4cQcTw8",
    "/survey": "https://forms.gle/FLC8tiajqh4cQcTw8",
    "/next": "https://docs.google.com/forms/d/10MdJwKvHYTS-7gaAECDfBX3mLN1a2OTd8YMX7eWyopU/preview",
    "/write": "https://forms.gle/hTom2HpDgw4yZBi69",
    "/ncar_letters": "/save-ncar", // keep this so that people with the old url will get to the right page
    "/letters": "/write",
    "/learn": "/science", // here for historical purposes
    "/speak": "https://docs.google.com/forms/d/e/1FAIpQLScDZmjBgEictxJeROviS1e7-S-4c_yCq7vMmZ_nMObxGL-Yrw/viewform?usp=sharing&ouid=110383510877769818410",
    "/volunteer": "/speak",
    "/speakers": "/speak"
  },
  site: "https://wclivestream.com/",
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
