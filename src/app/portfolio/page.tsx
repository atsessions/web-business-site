// src/app/portfolio/page.tsx
"use client";
import React from "react";
import PortfolioProject from "@/components/PortfolioProject";

export default function PortfolioPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-start px-4 pt-6 pb-12 bg-white">
      <div className="w-full max-w-5xl mx-auto">
        {/* Title and Description (tight spacing) */}
        <h1 className="text-neutral-800 text-4xl font-bold mt-10 mb-6 text-center">Portfolio</h1>
        <p className="text-neutral-700 text-center mb-6 max-w-2xl mx-auto">
          Selected projects from my web development work, including freelance sites and professional municipal web projects. Want to see more? <a href="/contact" className="underline hover:text-[#668B96]">Contact me</a> for additional samples.
        </p>
        
        {/* Project cards and experience */}
        <div className="flex flex-col gap-16">
          {/* Project 1: Screenshot right (default) */}
          <PortfolioProject
            title="Modern Event Website"
            description="A sleek, user-friendly event platform for cultural organizations, featuring dynamic schedules, ticketing, and a mobile-first design. Built with Next.js and WordPress."
            siteUrl="https://red-heritage.com"
            imageSide="right"
          />

          {/* Project 2: Screenshot left */}
          <PortfolioProject
            title="Personal Portfolio & Blog"
            description="My personal site and technical blog, built for performance and elegant simplicity. Fully responsive, SEO-friendly, and includes a custom content publishing flow."
            siteUrl="https://atsessions.com"
            imageSide="left"
          />

          {/* Professional Experience / Government Projects */}
          <section>
            <h2 className="text-neutral-800 text-2xl font-semibold mb-2">Professional & Government Web Projects</h2>
            <div className="bg-neutral-50 rounded-xl shadow-md p-6">
              <ul className="list-disc ml-6 text-neutral-700 leading-relaxed">
                <li>
                  <span className="font-medium">City of Page, Arizona —</span> As a web developer for the city, I built and maintained more than 10 municipal and tourism-related websites, collaborating with city officials and local organizations to deliver reliable, accessible, and up-to-date information for the community.<br />
                  <span className="text-xs text-neutral-500">
                    (Details and screenshots available upon request. Public examples include <a href="https://cityofpage.org" target="_blank" className="underline hover:text-[#668B96]">cityofpage.org</a> and <a href="https://pagelibrary.org" target="_blank" className="underline hover:text-[#668B96]">pagelibrary.org</a>.)
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
