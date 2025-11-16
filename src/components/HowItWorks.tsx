// src/components/HowItWorks.tsx
"use client";

import { useState } from "react";
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

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative py-19 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center text-black mb-18 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          How it works
        </motion.h2>

        <div className="space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-12 items-start group"
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* Number */}
              <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center border-2 text-black text-lg font-light transition-all duration-300 ${
                hoveredStep === i ? 'border-black bg-black text-white' : 'border-[#e5e5e5]'
              }`}>
                {i + 1}
              </div>

              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-normal text-black mb-4 tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                  {step.title}
                </h3>
                <p className="text-[#737373] text-base leading-relaxed font-light max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}