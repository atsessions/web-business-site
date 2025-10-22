# Portfolio Screenshots

Place your portfolio project screenshots in this directory.

## Naming Convention
Use descriptive names that match your projects, for example:
- `cityofpage.png`
- `red-heritage.png`
- `atsessions.png`

## Recommended Specifications
- **Format**: PNG or JPEG
- **Resolution**: 2560x1440 or higher
- **Aspect Ratio**: 16:9 (to match the display container)
- **Content**: Screenshot of the website homepage or main page

## How to Take Screenshots
1. Open the website in a desktop browser
2. Set your browser window to full screen (or at least 1920px wide)
3. Take a screenshot of the viewport (not full page)
4. Save to this directory with a descriptive name

## Usage in Portfolio
In your portfolio page, add the `screenshotPath` prop:

```tsx
<PortfolioProject
  title="City of Page"
  description="Official website..."
  siteUrl="https://cityofpage.org"
  imageSide="right"
  screenshotPath="/portfolio-screenshots/cityofpage.png"
/>
```

If `screenshotPath` is not provided, it will fall back to using the Microlink API for automatic screenshots.
