import { formatHtml } from "./lib/format-html.js";
import { inlineStyles } from "./lib/inline-styles.js";
import { jsonScript } from "./lib/json-script.js";

export default function (eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({ trimBlocks: true, lstripBlocks: true });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addShortcode("inlineStyles", inlineStyles);
  eleventyConfig.addFilter("jsonScript", jsonScript);
  eleventyConfig.addTransform("formatHtml", formatHtml);
}

export const config = {
  dir: {
    input: "src",
    includes: "_includes",
    layouts: "_includes/layouts",
    data: "_data",
    output: "dist",
  },
  templateFormats: ["njk"],
  htmlTemplateEngine: "njk",
};
