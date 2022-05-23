import Unocss from "unocss/vite";
import adapter from "@sveltejs/adapter-static";
import { extractorSvelte } from "@unocss/core";
import preprocess from "svelte-preprocess";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetTypography from "@unocss/preset-typography";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetWind from "@unocss/preset-wind";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const dev = process.env.NODE_ENV === "development"; // eslint-disable-line @typescript-eslint/no-unused-vars

/** @type {import('@sveltejs/kit').Config} */
const config = {
  /*
   * Consult https://github.com/sveltejs/svelte-preprocess
   * for more information about preprocessors
   */
  extensions: [".svelte"],
  preprocess: [preprocess()],

  kit: {
    adapter: adapter({
      fallback: "200.html"
    }),

    // ? Vite Configuration
    vite: () => ({
      plugins: [
        Unocss({
          extractors: [extractorSvelte],
          transformers: [transformerDirective(), transformerVariantGroup()],
          presets: [
            presetWind(),
            presetIcons({ cdn: "https://esm.sh/" }),
            presetAttributify(),
            presetWebFonts({
              // Currently UnoCSS only supports Google Fonts as a fonts provider.
              provider: "google",
              fonts: {
                // The default fonts.
                sans: ["Inter"],
                mono: ["JetBrains Mono"],
                serif: ["EB Garamond"],
                title: ["Zilla Slab"],
                highlight: ["Zilla Slab Highlight"],
              },
            }),
            presetTypography(),
          ],
        }),
      ],
      resolve: {
        alias: {
          // Path aliases
          $audio: "/src/assets/audio",
          $raster: "/src/assets/rasters",
          $vector: "/src/assets/vectors",
          $video: "/src/assets/videos",
          $font: "/src/fonts",
          $styles: "/src/styles",
        },
      },
    }),
  },
};

export default config;
