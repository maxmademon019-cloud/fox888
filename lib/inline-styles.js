import { readFileSync } from "node:fs";

const STYLES_DIR = new URL("../src/styles/", import.meta.url);
const AMP_CSS_LIMIT = 75000;

const STYLES = [
  "tokens",
  "base",
  "buttons",
  "card",
  "header",
  "ticker",
  "sidebar",
  "hero",
  "highlights",
  "layout",
  "steps",
  "games",
  "faq",
  "aside",
  "footer",
  "sticky-bar",
];

const minify = (css) =>
  css
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,>])\s*/g, "$1")
    .replace(/:\s+/g, ":")
    .replace(/;}/g, "}")
    .trim();

export function inlineStyles() {
  const source = STYLES.map((name) => readFileSync(new URL(`${name}.css`, STYLES_DIR), "utf8")).join("\n");
  const css = minify(source);
  const size = Buffer.byteLength(css);

  if (size > AMP_CSS_LIMIT) {
    throw new Error(`amp-custom CSS is ${size} bytes, over the ${AMP_CSS_LIMIT}-byte AMP limit`);
  }

  return css;
}
