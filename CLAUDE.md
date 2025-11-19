# Desert Web Development - Project Context

## Business Information
- **Business Name**: Desert Web Development
- **Owner**: Alex Sessions
- **Location**: Page, Arizona
- **Email**: alex.t.sessions@gmail.com
- **Services**: Web development, website management, and maintenance

## Brand Identity
- **Logo**: Custom saguaro cactus SVG (`/public/cactus-logo.svg`)
- **Primary Colors**:
  - Teal: #8BA9B5, #7A9AA6, #668B96
  - Brown: #9B7A63, #6A4327
- **Favicon**: Cactus logo with brand-colored background (`/public/favicon.svg`)

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Deployment**: Vercel
- **Email Service**: Resend (contact form)

## Key Features
1. **Portfolio Page**: Showcases 10 city government/municipal websites
   - Self-hosted screenshots in `/public/portfolio-screenshots/`
   - Automation scripts in `/scripts/` for capturing screenshots
   - Alternating left/right layout for visual interest

2. **Contact Page**: Two-column layout (desktop)
   - Contact info card with gradient background
   - Services list
   - Contact form (powered by Resend API)

3. **Navbar**: Gradient background with animated active link indicator
   - Sticky positioning
   - Smooth mobile menu (CSS transitions, no lag)
   - Cactus logo + business name

4. **How It Works Section** (`/src/components/HowItWorks.tsx`)
   - 5-step vertical timeline layout
   - Minimalist numbered boxes with 1px borders
   - Direct, professional copy explaining the process
   - Clean spacing with focus on readability

5. **Behind the Scenes Section** (`/src/components/BehindTheScenes.tsx`)
   - Live typing animation showing JavaScript code in a minimal code editor
   - Line numbers and syntax highlighting using prism-react-renderer
   - 4 feature items with simple bullet points (no icons)
   - Two-column layout: text content on left, code editor on right
   - Minimal styling with 1px borders and light gray backgrounds

6. **Features Grid** (`/src/components/FeaturesGrid.tsx`)
   - 2-column grid layout with left border accents
   - Simple text-based features (no icons)
   - Light typography with generous spacing
   - "What you get" heading

7. **FAQ Section** (`/src/components/FAQSection.tsx`)
   - Clean accordion with +/- indicators
   - Simple borders between questions
   - Rewritten copy to be more direct and professional
   - Minimal animations

8. **CTA Section** (`/src/components/CTASection.tsx`)
   - Simple centered text and button
   - Black border button with hover state (fills black background)
   - Placed on light gray background for subtle contrast

## Important Notes
- **Contact Form**: Requires `RESEND_API_KEY` environment variable in Vercel
  - Currently using Resend's test domain: `onboarding@resend.dev`
  - To switch to custom domain (when ready):
    1. Add and verify your domain in Resend dashboard (Domains section)
    2. Add required DNS records to your domain provider
    3. Update `/src/app/api/contact/route.ts` line 38:
       ```typescript
       from: 'Desert Web Development <contact@yourdomain.com>',
       ```
    4. Benefits: Professional sender address, better deliverability, brand consistency
- **Portfolio Screenshots**: Use Puppeteer scripts to regenerate if needed
- **Mobile Responsiveness**: Tested and optimized throughout
- **No Microlink API**: Switched to self-hosted screenshots for better performance

## Portfolio Sites Featured
1. Red Heritage Native American Dinner Show (red-heritage.com)
2. Photography Portfolio (atsessions.com)
3. City of Page, Arizona (cityofpage.org)
4. Page Events Portal (events.cityofpage.org)
5. Page Police Department (cityofpagepd.com)
6. Page Fire Department (pagefiredepartment.org)
7. Horseshoe Bend (horseshoebend.co)
8. Page Public Library (pagepubliclibrary.org)
9. Visit Page, Arizona (visitpageaz.com)
10. Lake Powell National Golf Course (lakepowellnationalgolfcourse.com)

## File Structure Highlights
- `/src/app/` - Next.js app router pages
- `/src/components/` - Reusable React components
- `/public/` - Static assets (images, logos, screenshots)
- `/scripts/` - Utility scripts (screenshot automation)

## Deployment
- **GitHub Repo**: Connected to Vercel
- **Auto-deploy**: Pushes to main branch trigger deployments
- **Environment Variables**: Set in Vercel dashboard (RESEND_API_KEY)

## Design Philosophy
- **Pure Minimalism**: Ultra-clean design emphasizing whitespace, simplicity, and essentials
- **Monochrome Color Palette**:
  - Primary: #000000 (black)
  - Secondary: #404040 (dark gray)
  - Accent: #666666 (medium gray)
  - Background: #ffffff (white)
  - Surface: #fafafa (off-white)
  - Text: #000000 (black)
  - Text Secondary: #737373 (gray)
  - Border: #e5e5e5 (light gray)
- **Typography**: Light font weights (300-400), generous line spacing, sans-serif, normal case
- **UI Elements**: Ultra-thin borders (1px), minimal shadows, focus on content over decoration
- **Copy**: Direct and professional, avoiding AI-sounding phrases, em dashes, and overly emotional language
- **Mobile-first**: Responsive design principles maintained throughout
