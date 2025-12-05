// page.tsx
import Image from 'next/image'; // <--- Added this import
import Marquee from "react-fast-marquee";
import FeaturesGrid from "@/components/FeaturesGrid";
import BehindTheScenes from "@/components/BehindTheScenes";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SitePreview from "@/components/SitePreview"; // You had this import, kept it.
import SitePreviewMicrolink from "@/components/SitePreviewMicrolink";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-24 pb-16 sm:pb-32 grid md:grid-cols-2 items-center gap-12">
        {/* Image: top on mobile (order-1), right on desktop (md:order-2) */}
        <div className="order-1 md:order-2 w-full max-w-lg sm:max-w-xl md:max-w-2xl aspect-[5/4] relative">
          {/* This div will now act as the mask container and relative positioning context */}
          <div
            className="absolute inset-0 shadow-xl overflow-hidden" // Added overflow-hidden
            style={{
              WebkitMaskImage: 'url(/blob-mask.svg)',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: '120% 120%', // You might need to adjust these
              WebkitMaskPosition: 'center 40%',
              maskImage: 'url(/blob-mask.svg)',
              maskRepeat: 'no-repeat',
              maskSize: '150% 150%', // You might need to adjust these
              maskPosition: 'center 40%',
            }}
          >
            <Image
              src="/hero.jpg" // Ensure hero.jpg is in your /public folder
              alt="Hero image for Page, AZ website management services" // <<< --- CONSIDER UPDATING THIS ALT TEXT to be more specific
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Text: below image on mobile (order-2), left on desktop (md:order-1) */}
        <div className="order-2 md:order-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black mb-8 tracking-tight leading-[1.1]">
            Website management <br /> for modern businesses.
          </h1>
          <p className="text-lg sm:text-xl text-[#404040] mb-12 max-w-xl font-light leading-relaxed">
            High-performance websites, fully managed for you. Local design and support that keeps your Page business running smoothly 24/7.
          </p>
          <div className="flex gap-5">
            <a
              href="/contact"
              className="group inline-block border-2 border-black text-black font-light px-10 py-4 text-base hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Get started</span>
              <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#features"
              className="border-2 border-[#e5e5e5] text-[#737373] px-10 py-4 text-base font-light hover:border-black hover:text-black transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-[#fafafa] py-16 md:py-24 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#737373] text-xs font-light mb-12 text-center tracking-wider uppercase">
            Built with
          </p>
          <div
            className="w-full h-14 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {[
                "nextjs.svg",
                "react.svg",
                "wordpress.svg",
                "aws.svg",
                "google-analytics.svg",
                "apache.svg",
                "html.svg",
                "tailwindcss.svg",
                "github.svg",
                "figma.svg",
                "ubuntu.svg",
                "elementor.svg",
                "mysql.svg",
                "javascript.svg",
              ].map((logo, i) => (
                <img
                  key={i}
                  src={`/${logo}`}
                  alt={logo.replace(".svg", "")}
                  className="h-8 w-auto opacity-40 grayscale hover:opacity-60 transition mx-8"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <BehindTheScenes />
      <HowItWorks />
      <SitePreviewMicrolink
        title="See My Work in Action"
        description="Explore a selection of websites I've built and managed, showcasing a commitment to quality design, performance, and user experience."
        siteUrl="https://red-heritage.com"
        portfolioUrl="/portfolio" // Optional, defaults to "/portfolio"
      />
      <CTASection />
      <FAQSection />
    </main>
  );
}