"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "SEO Optimization",
    description:
      "Increase visibility on search engines with technical SEO, clean code, and optimized content structure.",
  },
  {
    title: "Fast Performance",
    description:
      "Built with modern frameworks for lightning-fast load times across all devices and connections.",
  },
  {
    title: "Secure & Reliable",
    description:
      "Regular updates, SSL certificates, and security best practices to protect your site and data.",
  },
  {
    title: "Hands-Off Management",
    description:
      "Focus on your business. We handle updates, content changes, and ongoing maintenance.",
  },
];

export default function FeaturesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-black mb-18 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What you get
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <div
                className={`absolute -left-6 top-0 w-0.5 h-full bg-black transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-20'
                }`}
              />
              <h3 className="text-2xl font-normal text-black mb-4 tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                {feature.title}
              </h3>
              <p className="text-[#737373] text-base leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
