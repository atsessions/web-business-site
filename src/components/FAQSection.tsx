"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What features are essential for an effective business website?",
    a: "A good business website needs fast performance, mobile responsiveness, clear calls to action, SEO optimization, and analytics tracking. The specific features depend on your business goals and target audience."
  },
  {
    q: "How can my website stand out from competitors?",
    a: "Focus on clear messaging, fast load times, professional design, and unique content that speaks directly to your audience. Good UX and technical performance matter more than flashy design."
  },
  {
    q: "How do you ensure websites work well on mobile?",
    a: "All sites are built mobile-first with responsive layouts, optimized images, and touch-friendly navigation. Performance testing ensures fast load times across devices."
  },
  {
    q: "How can I track and improve my website's performance?",
    a: "Analytics tools like Google Analytics track visitor behavior, traffic sources, and conversion rates. Regular reviews of this data help identify areas for improvement."
  },
  {
    q: "How often should I update my website?",
    a: "Content should be updated regularly based on your business needs. Design refreshes typically happen every 2-3 years, or when technology and user expectations evolve."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-black mb-24 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Common questions
        </motion.h2>
        <div className="space-y-8">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div
                key={idx}
                className="border-b border-[#e5e5e5] pb-8 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex justify-between items-start text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${idx}`}
                >
                  <span className="text-xl font-normal text-black pr-8 transition-colors duration-300 group-hover:text-[#666666]">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 text-2xl font-light mt-0.5 transition-all duration-300 ${
                    isOpen ? 'text-black rotate-180' : 'text-[#737373]'
                  }`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-${idx}`}
                  className={`transition-all overflow-hidden duration-300 ease-in-out ${
                    isOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#737373] text-base leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
