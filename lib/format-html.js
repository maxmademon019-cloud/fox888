import { format } from "prettier";

export async function formatHtml(content) {
  if (!this.page.outputPath?.endsWith(".html")) {
    return content;
  }

  return format(content, {
    parser: "html",
    printWidth: 140,
    htmlWhitespaceSensitivity: "ignore",
    embeddedLanguageFormatting: "off",
  });
}
