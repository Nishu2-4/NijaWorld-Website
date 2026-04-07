import { Jimp } from "jimp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const logoPath = path.join(publicDir, "nija-logo.png");
const textPath = path.join(publicDir, "nija-world-green.png");
const outputPath = path.join(publicDir, "nija-footer-stacked.png");

async function createStackedLogo() {
  try {
    const logo = await Jimp.read(logoPath);
    const text = await Jimp.read(textPath);

    const logoWidth = logo.width;
    const logoHeight = logo.height;
    const textWidth = text.width;
    const textHeight = text.height;

    const gap = 20; // Vertical spacing

    const canvasWidth = Math.max(logoWidth, textWidth);
    const canvasHeight = logoHeight + textHeight + gap;

    const canvas = new Jimp({ width: canvasWidth, height: canvasHeight, color: 0x00000000 }); // Transparent

    const logoX = (canvasWidth - logoWidth) / 2;
    const logoY = 0;

    const textX = (canvasWidth - textWidth) / 2;
    const textY = logoHeight + gap;

    canvas.composite(logo, logoX, logoY);
    canvas.composite(text, textX, textY);

    await canvas.write(outputPath);
    console.log(`Created stacked logo at ${outputPath}`);
  } catch (error) {
    console.error("Error creating stacked logo:", error);
    process.exit(1);
  }
}

createStackedLogo();
