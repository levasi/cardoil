import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PurgeCSS } from "purgecss";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TRANSLO = path.join(ROOT, "src/styles/translo");
const MAIN = path.join(TRANSLO, "main.scss");
const BACKUP = path.join(TRANSLO, "main.full.scss");

const KEEP_FULL = new Set([
  "abstracts/_variables.scss",
  "abstracts/_mixins.scss",
  "base/_fonts.scss",
  "module-css/footer.scss",
  "module-css/services.scss",
  "module-css/about.scss",
  "module-css/banner.scss",
  "module-css/breadcrumb.scss",
  "module-css/contact.scss",
  "module-css/fact-counter.scss",
  "module-css/partner.scss",
  "module-css/testimonial.scss",
  "base/_brand.scss",
  "components/_site-header.scss",
  "components/_accordion.scss",
  "components/_cardoil-home.scss",
]);

const PURGE_SECTIONS = new Set([
  "overrides/_legacy-adjustments.scss",
  "responsive.scss",
  "style-main.scss",
]);

const SKIP = new Set([
  "all.min.scss",
  "module-css/header.scss",
  "module-css/blog.scss",
  "module-css/team.scss",
  "animate.min.scss",
]);

const ICOMOON_ICONS = [
  "icon-pin",
  "icon-paper-plane",
  "icon-out-call",
  "icon-right-arrow",
  "icon-left-arrow-5",
  "icon-right-arrow-5",
  "icon-check-marked-1",
  "icon-quote11",
  "icon-call",
  "icon-special-shipments",
  "icon-global-network",
  "icon-satisfied3",
  "icon-support",
  "icon-right-time-delivery-1",
  "icon-online-support",
  "icon-safe-package",
  "icon-right-arrow-5",
];

const FLOAT_ANIMATIONS = [
  "float-bob",
  "float-bob-x",
  "float-bob-y",
  "float-bob-x-2",
];

const SAFELIST = {
  standard: [
    "active",
    "has-children",
    "disable-scroll",
    "homeTwo",
    "fix",
    "body-dark-bg",
    "padding",
    "padding-bottom",
    "padding-top",
    "swiper-slide",
    "swiper-slide-visible",
    "swiper-wrapper",
    "swiper-container",
    "thm-swiper__slider",
    "odometer",
    "open",
    "rotate",
    "bg-white",
  ],
  deep: [
    /^site-header/,
    /^accordion-/,
    /^faq-one/,
    /^cardoil-/,
    /^main-slider/,
    /^about-two/,
    /^services-two/,
    /^fact-counter/,
    /^company-benefit/,
    /^cta-two/,
    /^footer-one/,
    /^page-header/,
    /^thm-/,
    /^swiper-/,
    /^icon-/,
    /^homeTwo/,
  ],
  greedy: [
    /main-slider-two/,
    /services-two/,
    /about-two/,
    /fact-counter-two/,
    /company-benefit-one/,
    /footer-widget/,
    /testimonial/,
    /partner/,
    /accordion-two/,
    /faq-one--two/,
    /cardoil-testimonial/,
    /site-header/,
    /sec-title-two/,
    /thm-btn/,
    /shape\d/,
    /image-layer/,
    /float-bob/,
    /swiper-nav-style1/,
    /logo-box/,
    /footer-bottom/,
    /single-footer/,
  ],
};

function parseSections(content) {
  const regex = /^\/\* ===== (.+?) ===== \*\/$/gm;
  const markers = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    markers.push({ name: match[1], start: match.index });
  }
  return markers.map((marker, index) => {
    const end =
      index + 1 < markers.length ? markers[index + 1].start : content.length;
    return {
      name: marker.name,
      content: content.slice(marker.start, end).trim(),
    };
  });
}

function extractIcomoon(sectionContent) {
  const parts = ["/* icomoon — used glyphs only */"];

  const fontFace = sectionContent.match(/@font-face\s*\{[\s\S]*?\n\}/);
  if (fontFace) parts.push(fontFace[0]);

  const baseRule = sectionContent.match(
    /\[class\^="icon-"\][\s\S]*?\[class\*=" icon-"\]\s*\{[\s\S]*?\n\}/
  );
  if (baseRule) parts.push(baseRule[0]);

  for (const icon of ICOMOON_ICONS) {
    const re = new RegExp(
      `\\.${icon.replace(/-/g, "\\-")}(?::[\\w-]+)?\\s*\\{[\\s\\S]*?\\n\\}`,
      "g"
    );
    const matches = sectionContent.match(re);
    if (matches) parts.push(...matches);
  }

  return parts.join("\n\n");
}

function extractCustomAnimate(sectionContent) {
  const blocks = sectionContent.split(/(?=\/\*\*\*)/);
  const kept = ["/* custom-animate — float animations only */"];

  for (const block of blocks) {
    if (FLOAT_ANIMATIONS.some((name) => block.includes(name))) {
      kept.push(block.trim());
    }
  }

  return kept.join("\n\n");
}

async function purgeCss(css) {
  const result = await new PurgeCSS().purge({
    content: [
      path.join(ROOT, "src/**/*.{tsx,ts}"),
      path.join(ROOT, "src/lib/content.ts"),
    ],
    css: [{ raw: css }],
    safelist: SAFELIST,
  });
  return result[0]?.css ?? "";
}

async function main() {
  if (!fs.existsSync(MAIN)) {
    console.error("main.scss not found");
    process.exit(1);
  }

  if (!fs.existsSync(BACKUP)) {
    fs.copyFileSync(MAIN, BACKUP);
    console.log("Backed up to main.full.scss");
  }

  const source = fs.readFileSync(BACKUP, "utf8");
  const sections = parseSections(source);
  const parts = [
    "// Cardoil theme — pruned (Tailwind handles shared utilities in globals.css)",
    "",
  ];

  for (const section of sections) {
    if (SKIP.has(section.name)) {
      console.log("skip:", section.name);
      continue;
    }

    if (section.name === "icomoon.scss") {
      parts.push(extractIcomoon(section.content));
      parts.push("");
      console.log("trim:", section.name);
      continue;
    }

    if (section.name === "custom-animate.scss") {
      parts.push(extractCustomAnimate(section.content));
      parts.push("");
      console.log("trim:", section.name);
      continue;
    }

    if (PURGE_SECTIONS.has(section.name)) {
      const purged = await purgeCss(section.content);
      parts.push(`/* ${section.name} (purged) */`);
      parts.push(purged);
      parts.push("");
      console.log("purge:", section.name, "→", purged.split("\n").length, "lines");
      continue;
    }

    if (KEEP_FULL.has(section.name)) {
      parts.push(section.content);
      parts.push("");
      console.log("keep:", section.name);
      continue;
    }

    console.log("unknown (skipped):", section.name);
  }

  const output = parts.join("\n");
  fs.writeFileSync(MAIN, output);
  const lines = output.split("\n").length;
  const fullLines = source.split("\n").length;
  console.log(`\nWrote main.scss: ${lines} lines (was ${fullLines}, −${Math.round((1 - lines / fullLines) * 100)}%)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
