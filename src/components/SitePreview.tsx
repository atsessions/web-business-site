"use client";
import { useState } from "react";

interface SitePreviewProps {
  title: string;
  description: string;
  siteUrl: string;
  imageUrl: string;
}

export default function SitePreview({
  title,
  description,
  siteUrl,
  imageUrl,
}: SitePreviewProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl mx-auto my-12">
      {/* Text Side */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-neutral-700 mb-4">{description}</p>
      </div>
      {/* Preview Side */}
      <div
        className="flex-1 rounded-2xl shadow-xl border overflow-hidden relative transition-all duration-200 min-h-[240px] max-w-[500px] w-full aspect-video bg-neutral-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ minHeight: 240 }}
      >
        {!hovered ? (
          <img
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            className="object-cover w-full h-full transition-opacity duration-200"
            draggable={false}
          />
        ) : (
          <iframe
            src={siteUrl}
            title={`${title} Live Preview`}
            className="w-full h-full"
            loading="lazy"
            sandbox=""
            style={{ minHeight: 240, border: "none" }}
          />
        )}
        {/* Optional: Fake Browser Bar */}
        <div className="absolute top-0 left-0 w-full h-6 bg-neutral-200 flex items-center px-3 gap-1 z-10">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
