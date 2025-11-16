"use client";
import React from "react";
import { motion } from "framer-motion";

interface PortfolioProjectProps {
  title: string;
  description: string;
  siteUrl: string;
  imageSide?: "left" | "right";
  screenshotPath: string;
  index?: number;
}

export default function PortfolioProject({
  title,
  description,
  siteUrl,
  imageSide = "right",
  screenshotPath,
  index = 0,
}: PortfolioProjectProps) {
  const isImageLeft = imageSide === "left";

  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 py-16 md:py-16">
      {/* Screenshot side */}
      <motion.div
        className={`flex-1 flex justify-center items-center w-full order-1 ${isImageLeft ? "md:order-1" : "md:order-2"}`}
        initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div
          className="
            border border-[#e5e5e5] bg-white overflow-hidden
            w-full
            max-w-[750px]
            h-[60vw] max-h-[500px]
            md:w-[750px] md:h-[500px] md:max-w-[750px]
            hover:border-black/20
            transition-colors duration-500
            flex flex-col
          "
          style={{ aspectRatio: "3/2" }}
        >
          {/* Browser Bar */}
          <div className="flex items-center h-12 px-5 bg-[#fafafa] border-b border-[#e5e5e5]">
            <div className="flex items-center gap-2 mr-4">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
            </div>
            <div className="flex-1 h-8 bg-white border border-[#e5e5e5] px-4 flex items-center text-xs text-[#737373] font-light truncate">
              {siteUrl.replace(/^https?:\/\//, "")}
            </div>
          </div>
          {/* Screenshot */}
          <div className="flex-1 relative bg-[#fafafa]">
            <img
              src={screenshotPath}
              alt={`Screenshot of ${title}`}
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        className={`flex-1 order-2 ${isImageLeft ? "md:order-2" : "md:order-1"} min-w-[250px] max-w-xl`}
        initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-black mb-6 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-[#737373] text-base md:text-lg font-light leading-relaxed mb-8">
          {description}
        </p>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block text-black font-light text-base transition-colors duration-300 hover:text-[#666666]"
        >
          Visit Website
          <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </a>
      </motion.div>
    </section>
  );
}