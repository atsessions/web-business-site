// src/components/HowItWorks.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  // ... your steps data remains the same
  {
    title: "Consult & Assess",
    description:
      "Tell me your goals. Whether you need a fresh start or a new platform, we’ll discuss features, design, and what matters most to you.",
  },
  {
    title: "Transparent Quote",
    description:
      "Once I understand your vision, I’ll provide a clear quote—no surprises.",
  },
  {
    title: "Content & Planning",
    description:
      "You send any logos, content, and special requests. Together, we plan the perfect site structure.",
  },
  {
    title: "Build & Collaborate",
    description:
      "I develop your website, keeping you updated as we go. We refine it together until you love it.",
  },
  {
    title: "Launch, Analytics & Growth",
    description:
      "We launch! I set up analytics and SEO to help your site shine and attract new visitors.",
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
    <section className="relative py-16 md:py-24 pb-24 md:pb-32 bg-[#ffffff] overflow-hidden">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-800 mb-4">
          How It Works
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-neutral-700 mb-16 sm:mb-20 max-w-2xl mx-auto">
          My process is clear, collaborative, and tailored to your needs. Here’s
          what working with me looks like:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 gap-x-8 sm:gap-x-10 justify-items-center">
          {steps.map((step, i) => {
            const desktopAnimation = {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: [0.47, 1.64, 0.41, 0.8],
              }
            };

            const mobileAnimation = {
              initial: { opacity: 0 }, // Just fade-in
              whileInView: { opacity: 1 },
              transition: { // You can adjust duration/delay for mobile if needed
                delay: i * 0.1, // Faster delay for mobile if items stack
                duration: 0.5,
                ease: "easeInOut",
              }
            };

            const animationProps = isMobile ? mobileAnimation : desktopAnimation;

            return (
              <motion.div
                key={i}
                initial={animationProps.initial}
                whileInView={animationProps.whileInView}
                transition={animationProps.transition}
                viewport={{ once: true, amount: 0.3 }} // Keep viewport settings
                className="w-full max-w-[16rem] md:max-w-sm min-h-[15rem] cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105 flex flex-col items-center bg-gradient-to-br from-[#F2E6DD] via-white to-[#E2E8F0] shadow-[0_8px_32px_0_rgba(106,67,39,0.25)] px-5 py-10 sm:px-7 sm:py-12 rounded-2xl sm:rounded-3xl relative group"
              >
                {/* ... rest of your card content (number, line, title, description) ... */}
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white text-2xl sm:text-3xl font-bold shadow-lg border-4 border-white group-hover:scale-110 transition-transform cursor-pointer"
                  style={{
                    background: turquoise,
                    boxShadow:
                      "0 0 0 8px #F2E6DD, 0 6px 32px 0 rgba(102, 139, 150, 0.13)",
                    filter: "drop-shadow(0 0 12px #668B96cc)",
                  }}
                >
                  {i + 1}
                </div>
                <div
                  className="h-1 w-30 sm:w-30 rounded-full mb-4 mt-4 sm:mt-4"
                  style={{ background: turquoise, opacity: 0.9 }}
                />
                <div className="font-semibold text-neutral-900 text-base sm:text-lg mb-2 text-center">
                  {step.title}
                </div>
                <div className="text-neutral-700 text-sm text-center">
                  {step.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}