"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SitePreviewMicrolinkProps {
  title: string;
  description: string;
  siteUrl: string;
  portfolioUrl?: string;
}

export default function SitePreviewMicrolink({
  title,
  description,
  siteUrl,
  portfolioUrl = "/portfolio",
}: SitePreviewMicrolinkProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    siteUrl
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <section className="w-full flex flex-col items-center py-40 px-6 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-20 w-full max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="flex-1 min-w-[250px] max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-black mb-8 tracking-tight leading-tight">{title}</h2>
          <p className="text-[#737373] text-lg font-light leading-relaxed mb-12">{description}</p>
          <Link
            href={portfolioUrl}
            className="group relative inline-flex items-center gap-3 text-black font-light text-lg hover:gap-5 transition-all duration-300"
          >
            <span className="relative">
              View Full Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
            </span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
        {/* Screenshot Preview with Browser UI */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full"
          initial={{ opacity: 0, x: 30 }}
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
              <div className="flex-1 h-8 bg-white border border-[#e5e5e5] px-4 flex items-center text-xs text-[#737373] font-light truncate">
                {siteUrl.replace(/^https?:\/\//, "")}
              </div>
            </div>
            {/* Screenshot */}
            <div className="flex-1 relative bg-[#fafafa]">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center text-[#737373] font-light text-sm animate-pulse">
                  Loading preview...
                </div>
              )}
              {imageError && !imageLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#737373] p-4 text-center font-light">
                  <p>Preview unavailable for:</p>
                  <p className="text-xs mt-1">{siteUrl.replace(/^https?:\/\//, "")}</p>
                </div>
              )}
              <img
                src={screenshotUrl}
                alt={`Screenshot of ${title}`}
                className={`object-cover w-full h-full ${imageLoading || imageError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                draggable={false}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}