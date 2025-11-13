// src/components/HowItWorks.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery Call",
    description:
      "We discuss your goals, target audience, and required features. I'll ask about your timeline, budget, and any existing content or branding.",
  },
  {
    title: "Proposal & Quote",
    description:
      "You'll receive a detailed proposal outlining scope, timeline, and cost. We can adjust based on your priorities and budget.",
  },
  {
    title: "Design & Planning",
    description:
      "I'll create a sitemap and design mockups based on your brand. You provide feedback and we finalize the structure before development begins.",
  },
  {
    title: "Development",
    description:
      "I build your site using modern frameworks and best practices. You'll get regular updates and access to a staging site to review progress.",
  },
  {
    title: "Launch & Support",
    description:
      "After final testing and your approval, we go live. I'll configure analytics, set up hosting, and provide documentation for managing your site.",
  },
];

const turquoise = "#668B96";
const MOBILE_BREAKPOINT = 768; // Corresponds to Tailwind's 'md' breakpoint

export default function HowItWorks() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Ensures this runs client-side

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!hasMounted) {
    // Optional: Render nothing or a static version until client-side check is done
    // This helps avoid hydration mismatches if initial server render differs from client
    // For animations, it's often fine to just let them kick in after mount.
    // Or, you could return a version of the component without motion.divs.
    // For simplicity here, we'll let it render and animations will apply based on isMobile state.
  }

  return (
    <section className="relative py-16 md:py-24 pb-24 md:pb-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-800 mb-4">
          How It Works
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-neutral-700 mb-16 sm:mb-20 max-w-2xl mx-auto">
          A straightforward process from initial consultation to launch.
        </p>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#668B96]/30 to-transparent" style={{ top: '2rem' }} />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 gap-x-4 lg:gap-x-6 justify-items-center">
            {steps.map((step, i) => {
              const desktopAnimation = {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: {
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }
              };

              const mobileAnimation = {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: {
                  delay: i * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }
              };

              const animationProps = isMobile ? mobileAnimation : desktopAnimation;

              return (
                <motion.div
                  key={i}
                  initial={animationProps.initial}
                  whileInView={animationProps.whileInView}
                  transition={animationProps.transition}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full max-w-[18rem] md:max-w-none flex flex-col items-center relative group"
                >
                  {/* Number circle */}
                  <div
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-all duration-300 mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${turquoise} 0%, #7A9AA6 100%)`,
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group-hover:border-[#668B96]/30">
                    <h3 className="font-bold text-neutral-900 text-lg mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-[#668B96]/50 to-transparent mt-6" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}