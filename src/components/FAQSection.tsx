"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "What are the must-have features for our website to keep visitors excited and engaged?",
    a: "Your website is your digital front door. From stunning visuals, to seamless booking options, we’ll help you pack your site with the right tools to turn visitors into loyal fans."
  },
  {
    q: "How can we make our website stand out in the bustling world of tourism?",
    a: "We focus on creating a unique visual identity, compelling storytelling, and integrating features that highlight your strengths in tourism."
  },
  {
    q: "What's the best way to make our website a smooth experience on mobile devices?",
    a: "Responsive design is a must. We ensure fast load times, thumb-friendly navigation, and mobile-first layouts."
  },
  {
    q: "How can we use data and analytics to keep improving our website?",
    a: "We set up analytics to track your visitors’ behaviors, and use these insights to guide ongoing improvements."
  },
  {
    q: "How often should we refresh our website’s content and design to keep it relevant?",
    a: "A good rule of thumb is to update your content at least quarterly, and plan a design refresh every 2–3 years, or as your brand evolves."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
          FAQs
        </h2>
        <div className="divide-y divide-neutral-200">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${idx}`}
                >
                  <span className="text-lg sm:text-xl font-semibold text-neutral-900 group-hover:text-[#668B96] transition-colors cursor-pointer">
                    {faq.q}
                  </span>
                  <FiChevronDown
                    size={24}
                    className={`ml-3 transition-transform duration-300 group-hover:text-[#668B96] ${
                      isOpen ? "rotate-180 text-[#668B96]" : "text-neutral-500"
                    }`}
                  />
                </button>
                <div
                  id={`faq-${idx}`}
                  className={`transition-all overflow-hidden duration-300 ease-in-out ${
                    isOpen ? "max-h-[400px] mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
