"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-18 bg-[#fafafa]">
      <div className="mx-auto flex flex-col items-center text-center px-6">
        <motion.h3
          className="text-5xl md:text-6xl font-light text-black mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready to get started?
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="group inline-block border-2 border-black text-black font-light px-12 py-5 text-lg hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
