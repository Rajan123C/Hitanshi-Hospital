const sharp = require('sharp');
const path = require('path');

async function processImage() {
  try {
    const inputPath = path.join(__dirname, 'apps/web/public/dr-rk-sharma.png'); // This has the original combined image
    
    // Get image dimensions
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width;
    const height = metadata.height;
    
    // Split the image: Dr Priti (Left), Dr RK (Right)
    const halfWidth = Math.floor(width / 2);
    
    await sharp(inputPath)
      .extract({ left: 0, top: 0, width: halfWidth, height: height })
      .toFile(path.join(__dirname, 'apps/web/public/dr-priti-sharma-actual.png'));
      
    await sharp(inputPath)
      .extract({ left: halfWidth, top: 0, width: halfWidth, height: height })
      .toFile(path.join(__dirname, 'apps/web/public/dr-rk-sharma-actual.png'));
      
    console.log('Images successfully cropped!');
  } catch (error) {
    console.error('Error cropping images:', error);
  }
}

processImage();
