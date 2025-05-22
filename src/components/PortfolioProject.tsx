"use client";
import React, { useState } from "react"; // Added useState

interface PortfolioProjectProps {
  title: string;
  description: string;
  siteUrl: string;
  imageSide?: "left" | "right";
}

export default function PortfolioProject({
  title,
  description,
  siteUrl,
  imageSide = "right",
}: PortfolioProjectProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    siteUrl
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  const isImageLeft = imageSide === "left";

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 my-10">
      {/* Screenshot side */}
      <div className={`flex-1 flex justify-center items-center order-1 ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
        <div
          className="
            rounded-2xl shadow-2xl border bg-neutral-100 overflow-hidden
            w-[95vw] max-w-full
            h-[56vw] max-h-[60vw]
            sm:h-[46vw] sm:max-h-[400px]
            md:w-[750px] md:h-[500px] md:max-w-[750px] md:max-h-[500px]
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
          <div className="flex-1 relative bg-gray-200"> {/* Added bg-gray-200 */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 animate-pulse">
                Loading preview...
              </div>
            )}
            {imageError && !imageLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-red-600 p-4 text-center">
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
      </div>
      {/* Text side */}
      <div className={`flex-1 order-2 ${isImageLeft ? "md:order-2" : "md:order-1"} min-w-[250px] max-w-xl`}>
        <h2 className="text-neutral-800 text-3xl font-bold mb-4">{title}</h2>
        <p className="text-neutral-700 text-lg mb-8">{description}</p>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-[#668B96] text-white font-semibold px-8 py-3 text-lg shadow-md hover:bg-[#6A4327] hover:text-white transition-colors duration-200"
        >
          Visit Website
        </a>
      </div>
    </section>
  );
}