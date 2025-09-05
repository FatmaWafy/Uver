const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "./public";
const srcDir = "./src";

function convertImages(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      convertImages(filePath);
    } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const outputPath = path.join(dir, `${path.parse(file).name}.webp`);

      sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
          console.log(`✅ Converted: ${filePath} → ${outputPath}`);
          fs.unlinkSync(filePath);
        })
        .catch((err) => console.error(`❌ Error converting ${filePath}:`, err));
    }
  });
}

function updateCodeFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      updateCodeFiles(filePath);
    } else if (file.match(/\.(js|jsx|ts|tsx)$/i)) {
      let content = fs.readFileSync(filePath, "utf-8");
      const updated = content.replace(/\.(jpg|jpeg|png)/gi, ".webp");

      if (updated !== content) {
        fs.writeFileSync(filePath, updated, "utf-8");
        console.log(`🔄 Updated image refs in: ${filePath}`);
      }
    }
  });
}

convertImages(inputDir);
updateCodeFiles(srcDir);

console.log("🎉 All images converted to WebP and code updated!");
