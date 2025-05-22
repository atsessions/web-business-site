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
    <main className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-10 sm:py-20 pb-26 sm:pb-40 grid md:grid-cols-2 items-center gap-12">
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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-800 mb-6">
            Website management <br /> for modern businesses.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Tap into the power of a stunning, effective website without the headache. [Placeholder Business Name] specializes in helping Page businesses connect with a global audience and achieve local success.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="inline-block rounded-xl bg-[#668B96] text-white font-semibold px-8 py-3 text-lg shadow-md hover:bg-[#6A4327] hover:text-white transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Gray Divider Bar */}
      <div className="w-full h-20 bg-[#d9dbe1] relative z-10"></div>

      {/* Tech Stack Scrolling Marquee */}
      <section className="relative z-30 flex justify-center -mt-30">
        <div className="w-full px-2 sm:px-6 md:px-12 lg:px-16">
          <div className="bg-white rounded-3xl shadow-2xl py-8 px-4 sm:px-8 md:px-12 flex flex-col items-center w-full max-w-7xl border border-gray-200 mx-auto">
            <span className="text-gray-500 uppercase text-sm font-semibold mb-4 tracking-widest">
              Built With
            </span>
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
                    className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 transition mx-6"
                  />
                ))}
              </Marquee>
            </div>
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