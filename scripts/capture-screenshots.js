const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Portfolio sites to screenshot
const sites = [
  { url: 'https://red-heritage.com', filename: 'red-heritage.png' },
  { url: 'https://atsessions.com', filename: 'atsessions.png' },
  { url: 'https://cityofpage.org', filename: 'cityofpage.png' },
  { url: 'https://events.cityofpage.org', filename: 'events-cityofpage.png' },
  { url: 'https://cityofpagepd.com', filename: 'cityofpagepd.png' },
  { url: 'https://pagefiredepartment.org', filename: 'pagefiredepartment.png' },
  { url: 'https://horseshoebend.co', filename: 'horseshoebend.png' },
  { url: 'https://pagepubliclibrary.org', filename: 'pagepubliclibrary.png' },
  { url: 'https://visitpageaz.com', filename: 'visitpageaz.png' },
  { url: 'https://lakepowellnationalgolfcourse.com', filename: 'lakepowellnationalgolfcourse.png' },
];

// Output directory
const outputDir = path.join(__dirname, '../public/portfolio-screenshots');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function captureScreenshots() {
  console.log('🚀 Starting screenshot capture...\n');

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 2560,
      height: 1440,
      deviceScaleFactor: 1,
    },
  });

  const page = await browser.newPage();

  for (const site of sites) {
    try {
      console.log(`📸 Capturing: ${site.url}`);

      // Navigate to the page
      await page.goto(site.url, {
        waitUntil: 'networkidle2',
        timeout: 30000,
      });

      // Wait an additional 3 seconds for any lazy-loaded images
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Take screenshot
      const outputPath = path.join(outputDir, site.filename);
      await page.screenshot({
        path: outputPath,
        type: 'png',
        fullPage: false, // Only capture viewport
      });

      console.log(`✅ Saved: ${site.filename}\n`);
    } catch (error) {
      console.error(`❌ Failed to capture ${site.url}:`, error.message);
      console.log('');
    }
  }

  await browser.close();
  console.log('🎉 All screenshots captured successfully!');
}

// Run the script
captureScreenshots().catch(console.error);
