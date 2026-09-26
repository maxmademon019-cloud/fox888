import site from "./site.js";
import seo from "./seo.json" with { type: "json" };
import faq from "./faq.json" with { type: "json" };

const ref = (fragment) => `${site.url}#${fragment}`;

const organization = {
  "@type": "Organization",
  "@id": ref("organization"),
  name: site.name,
  alternateName: site.alternateName,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    "@id": ref("logo"),
    url: site.logo.src,
    contentUrl: site.logo.src,
    width: site.logo.width,
    height: site.logo.height,
    caption: site.name,
  },
  image: site.heroImage.src,
  description: seo.summary,
};

const website = {
  "@type": "WebSite",
  "@id": ref("website"),
  url: site.url,
  name: site.name,
  alternateName: site.alternateName,
  inLanguage: "th-TH",
  publisher: { "@id": ref("organization") },
};

const webpage = {
  "@type": "WebPage",
  "@id": ref("webpage"),
  url: site.url,
  name: seo.title,
  description: seo.description,
  inLanguage: "th-TH",
  isPartOf: { "@id": ref("website") },
  about: { "@id": ref("organization") },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: site.heroImage.src,
    width: site.heroImage.width,
    height: site.heroImage.height,
  },
};

export default {
  graph: {
    "@context": "https://schema.org",
    "@graph": [organization, website, webpage],
  },
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": ref("faq"),
    mainEntity: faq.items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
};
