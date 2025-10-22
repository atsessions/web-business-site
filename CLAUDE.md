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

## Important Notes
- **Contact Form**: Requires `RESEND_API_KEY` environment variable in Vercel
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
- Professional yet approachable
- Desert/Arizona theme with cactus branding
- Focus on showcasing municipal/government website expertise
- Clean, modern UI with smooth animations
- Mobile-first responsive design
