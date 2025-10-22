const puppeteer = require('puppeteer');
const path = require('path');

async function captureCityOfPage() {
  console.log('🚀 Starting screenshot capture for cityofpage.org...\n');

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 2560,
      height: 1440,
      deviceScaleFactor: 1,
    },
  });

  const page = await browser.newPage();

  try {
    console.log('📸 Navigating to cityofpage.org...');

    // Navigate to the page
    await page.goto('https://cityofpage.org', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    console.log('⏳ Waiting for page to be fully loaded...');

    // Wait for images specifically
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve);
          }))
      );
    });

    console.log('⏳ Waiting additional 5 seconds...');
    // Wait an additional 5 seconds for any animations or lazy loads
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Take screenshot
    const outputPath = path.join(__dirname, '../public/portfolio-screenshots/cityofpage.png');
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false,
    });

    console.log('✅ Screenshot saved successfully!\n');
  } catch (error) {
    console.error('❌ Failed to capture screenshot:', error.message);
  }

  await browser.close();
}

// Run the script
captureCityOfPage().catch(console.error);
