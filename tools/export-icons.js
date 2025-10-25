// tools/export-icons.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ICONS = [
  { name: "pie-chart", out: "finance-management" }, // Finance
  { name: "line-chart", out: "business-consulting" }, // Business
  { name: "globe-2", out: "capital-market" }, // Capital
];

const SIZES = [64, 96, 128];
const STROKE_COLOR = "#3B4E9E"; // samakan dengan desainmu
const STROKE_WIDTH = 2;

async function run() {
  const base = path.dirname(require.resolve("lucide-static/package.json"));
  const srcDir = path.join(base, "icons");
  const outDir = path.join(process.cwd(), "exported-icons");
  fs.mkdirSync(outDir, { recursive: true });

  for (const icon of ICONS) {
    const svgPath = path.join(srcDir, `${icon.name}.svg`);
    let svg = fs.readFileSync(svgPath, "utf-8");

    // Set warna & stroke-width konsisten
    svg = svg
      .replace(/stroke="[^"]*"/g, `stroke="${STROKE_COLOR}"`)
      .replace(/stroke-width="[^"]*"/g, `stroke-width="${STROKE_WIDTH}"`);

    for (const size of SIZES) {
      const outPng = path.join(outDir, `${icon.out}-${size}.png`);
      await sharp(Buffer.from(svg))
        .resize({
          width: size,
          height: size,
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png()
        .toFile(outPng);
      console.log("✓", outPng);
    }
  }
  console.log("Selesai. File ada di folder exported-icons/");
}

run().catch(console.error);
