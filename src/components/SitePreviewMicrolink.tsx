"use client";
import React from "react";
import Link from "next/link";

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
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    siteUrl
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <section className="w-full flex flex-col items-center py-0 sm:py-16 px-4 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1 min-w-[250px] max-w-xl">
          <h2 className="text-neutral-800 text-4xl font-bold mb-4">{title}</h2>
          <p className="text-neutral-700 text-lg mb-8">{description}</p>
          <Link
            href={portfolioUrl}
            className="inline-block rounded-xl bg-[#668B96] text-white font-semibold px-8 py-3 text-lg shadow-md hover:bg-[#6A4327] hover:text-white transition-colors duration-200"
          >
            View Full Portfolio
          </Link>
        </div>
        {/* Screenshot Preview with Browser UI */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div
            className="
              rounded-2xl shadow-2xl border bg-neutral-100 overflow-hidden
              w-full
              max-w-[750px]
              h-[60vw] max-h-[500px]
              md:w-[750px] md:h-[500px] md:max-w-[750px]
              transition-all
              flex flex-col
            "
            style={{ aspectRatio: "3/2" }}
          >
            {/* Browser Bar */}
            <div className="flex items-center h-10 px-4 bg-gray-100 border-b border-gray-200">
              <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-300 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-green-400 mr-4"></span>
              <div className="flex-1 h-6 bg-white rounded-md border border-gray-300 px-3 flex items-center text-xs text-gray-500 truncate">
                {siteUrl.replace(/^https?:\/\//, "")}
              </div>
            </div>
            {/* Screenshot */}
            <div className="flex-1 relative">
              <img
                src={screenshotUrl}
                alt={`Screenshot of ${title}`}
                className="object-cover w-full h-full"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
