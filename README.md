# FOX888 — AMP Landing Page

หน้า AMP หน้าเดียว build ด้วย Eleventy + Nunjucks โฮสต์บน Cloudflare Pages พร้อม GA4 และ Schema (FAQPage, Organization, WebSite)

## โครงสร้าง

```
src/
├── _data/             ข้อมูลทั้งหมดของหน้า
│   ├── site.js        ค่าตั้งของเว็บ: URL, GA4, รูป, ลิงก์ (แก้ผ่าน env ได้)
│   ├── seo.json       title, description
│   ├── landing.json   เนื้อหาจาก Content Doc (H1, section, รายการ)
│   ├── faq.json       คำถามที่พบบ่อย ใช้ทั้ง accordion และ JSON-LD
│   ├── nav.json       เมนู, สารบัญ, ลิงก์ท้ายเว็บ
│   ├── ui.json        ข้อความปุ่มและ aria-label
│   ├── schema.js      สร้าง JSON-LD จาก site + seo + faq
│   ├── analytics.js   ค่าตั้ง amp-analytics (GA4)
│   └── build.js       วันที่ build (เวลาไทย)
├── _includes/
│   ├── layouts/       โครง HTML หลักของ AMP
│   ├── head/          meta, OG/Twitter, สคริปต์ AMP, JSON-LD, boilerplate
│   ├── partials/      ส่วนต่างๆ ของหน้า
│   ├── components/    โลโก้, แบรนด์, ปุ่ม (macro)
│   └── icons/         ไอคอน SVG
├── styles/            CSS แยกตามคอมโพเนนต์ รวมเป็น <style amp-custom> ตอน build
├── static/            ไฟล์ที่ copy ไปตรงๆ (_headers)
├── index.njk          ประกอบหน้า
├── robots.njk
└── sitemap.njk
lib/                   ตัวช่วยตอน build: รวม CSS + เช็คลิมิต 75KB, JSON-LD, จัดรูปแบบ HTML
dist/                  ผลลัพธ์ที่ deploy (สร้างจาก npm run build)
screenshots/           ผลตรวจ AMP Validator และ Rich Results Test
```

## คำสั่ง

```bash
npm install
npm run dev        # http://localhost:8787
npm run build      # สร้าง dist/
npm run check      # build + ตรวจ AMP (ต้องได้ PASS)
npm run deploy     # check + deploy ด้วย Wrangler
```

## ค่าตั้ง (Environment variables)

| ตัวแปร | ค่าเริ่มต้น |
|---|---|
| `SITE_URL` | `https://fox888-amp.pages.dev/` |
| `GA4_ID` | `G-XXXXXXXXXX` |
| `REGISTER_URL` | `#register` |
| `LOGIN_URL` | `#register` |

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Environment variables: ตามตารางด้านบน
