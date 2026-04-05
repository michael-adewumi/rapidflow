import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const input = 'public/logo.png';
const output = 'public/logo.png';

async function removeBg() {
  const image = sharp(input);
  const { width, height, channels } = await image.metadata();
  
  // Get raw pixel buffer
  const raw = await image.ensureAlpha().raw().toBuffer();
  
  // Threshold for "white" - any pixel with R,G,B all > 240 becomes transparent
  const threshold = 240;
  
  for (let i = 0; i < raw.length; i += 4) {
    const r = raw[i];
    const g = raw[i + 1];
    const b = raw[i + 2];
    
    // If pixel is near-white, make it transparent
    if (r > threshold && g > threshold && b > threshold) {
      raw[i + 3] = 0; // Set alpha to 0
    }
  }
  
  // Write back as PNG with transparency
  await sharp(raw, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile(output + '.tmp');
  
  // Replace original
  const tmpData = readFileSync(output + '.tmp');
  writeFileSync(output, tmpData);
  
  // Clean up
  const fs = await import('fs');
  fs.unlinkSync(output + '.tmp');
  
  console.log('✅ White background removed! Logo saved with transparency.');
}

removeBg().catch(console.error);
