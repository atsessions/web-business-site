"use client";

import { FaSearch, FaRocket, FaShieldAlt, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "SEO Optimization",
    icon: <FaSearch className="text-blue-500 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" size={32} />,
    description:
      "Boost your website’s visibility on Google and attract more customers with best-in-class SEO practices tailored for small businesses.",
  },
  {
    title: "Fast Performance",
    icon: <FaRocket className="text-blue-500 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" size={32} />,
    description:
      "Lightning-fast load times and optimizations ensure visitors stay engaged. Built for speed on every device and connection.",
  },
  {
    title: "Reliable Security",
    icon: <FaShieldAlt className="text-blue-500 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" size={32} />,
    description:
      "Advanced security features keep your site safe, your data protected, and your visitors confident.",
  },
  {
    title: "Effortless Updates",
    icon: <FaSyncAlt className="text-blue-500 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" size={32} />,
    description:
      "Never worry about stale content. Easily update your site or let us handle it for you with a hands-off approach.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 pt-20 sm:pt-40 bg-[#b6deee] -mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-16 text-center">
          A better way to start growing.
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {features.map((feature, i) => (
            <motion.div
            key={feature.title}
            className="group bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-200 cursor-pointer hover:scale-105"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
