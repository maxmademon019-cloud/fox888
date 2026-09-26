const url = new URL(process.env.SITE_URL ?? "https://fox888-amp.pages.dev/").href;

export default {
  name: "FOX888",
  alternateName: "fox888 ทางเข้า",
  brandMark: { primary: "FOX", accent: "888" },
  url,
  lang: "th",
  locale: "th_TH",
  themeColor: "#060914",
  ga4Id: process.env.GA4_ID ?? "G-XXXXXXXXXX",
  logo: {
    src: "https://ik.imagekit.io/1ugh3tng8/fox888.com.png?updatedAt=1788434380394",
    width: 400,
    height: 400,
    alt: "โลโก้ FOX888",
  },
  heroImage: {
    src: "https://ik.imagekit.io/0no3lpxln/J/fox888.png",
    width: 600,
    height: 600,
    alt: "FOX888 ทางเข้า แพลตฟอร์มออนไลน์ยอดนิยม ใช้งานง่ายทุกอุปกรณ์",
  },
  links: {
    register: process.env.REGISTER_URL ?? "#register",
    login: process.env.LOGIN_URL ?? "#register",
  },
};
