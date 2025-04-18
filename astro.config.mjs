// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://qybi.me",
  integrations: [
    tailwind(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ["*"],
        devicon: ["*"],
        maki: ["library", "racetrack", "car", "gaming"],
        "emojione-v1": ["*"],
        ph: ["headphones-fill"],
        "material-symbols": ["self-improvement-rounded"],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,
      },
    }),
  ],
});
