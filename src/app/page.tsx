import Marquee from "react-fast-marquee";
import FeaturesGrid from "@/components/FeaturesGrid";
import BehindTheScenes from "@/components/BehindTheScenes";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SitePreview from "@/components/SitePreview";
import SitePreviewMicrolink from "@/components/SitePreviewMicrolink";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-10 sm:py-20 pb-26 sm:pb-40 grid md:grid-cols-2 items-center gap-12">
        {/* Left: Text content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-800 mb-6">
            Website management <br /> for modern businesses.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Expert website management that melds cutting-edge design with user-friendly features, ensuring your small business stands out.
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
        {/* Right: Image */}
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl aspect-[5/4] relative">
          <div
            className="absolute inset-0 bg-cover bg-center shadow-xl"
            style={{
              WebkitMaskImage: 'url(/blob-mask.svg)',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: '120% 120%', // make the blob larger than the container!
              WebkitMaskPosition: 'center 40%',
              maskImage: 'url(/blob-mask.svg)',
              maskRepeat: 'no-repeat',
              maskSize: '150% 150%',
              maskPosition: 'center 40%',
              backgroundImage: 'url(/hero.jpg)',
            }}
          ></div>
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
        title="Red Heritage"
        description="A cultural events website built for Red Heritage, using WordPress."
        siteUrl="https://red-heritage.com"
        portfolioUrl="/portfolio" // Optional, defaults to "/portfolio"
      />
      <CTASection />
      <FAQSection />
    </main>
  );
}
