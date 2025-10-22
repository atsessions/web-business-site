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
        <div className="flex flex-col md:gap-16">
          {/* Project 1: Screenshot right (default) */}
          <PortfolioProject
            title="Red Heritage Native American Dinner Show"
            description="Cultural event website for a Navajo-owned dinner theater in Page, Arizona, featuring ticketing, schedules, and information about authentic Native American performances and cuisine."
            siteUrl="https://red-heritage.com"
            imageSide="right"
            screenshotPath="/portfolio-screenshots/red-heritage.png"
          />

          {/* Project 2: Screenshot left */}
          <PortfolioProject
            title="Photography Portfolio"
            description="My professional photography portfolio website showcasing visual work and creative projects. Built for performance with a clean, image-focused design that highlights photographic content."
            siteUrl="https://atsessions.com"
            imageSide="left"
            screenshotPath="/portfolio-screenshots/atsessions.png"
          />

          {/* Professional Experience / Government Projects */}
          <section>
            <h2 className="text-neutral-800 text-3xl font-semibold text-center md:text-left pt-6">Professional & Government Web Projects</h2>

            <div className="flex flex-col md:gap-16">
              {/* City of Page */}
              <PortfolioProject
                title="City of Page, Arizona"
                description="Official municipal website for the City of Page, providing residents and visitors with access to city services, news, and government information."
                siteUrl="https://cityofpage.org"
                imageSide="right"
                screenshotPath="/portfolio-screenshots/cityofpage.png"
              />

              {/* Events Portal */}
              <PortfolioProject
                title="Page Events Portal"
                description="Comprehensive events platform for the City of Page, showcasing community activities, festivals, and public gatherings throughout the year."
                siteUrl="https://events.cityofpage.org"
                imageSide="left"
                screenshotPath="/portfolio-screenshots/events-cityofpage.png"
              />

              {/* Police Department */}
              <PortfolioProject
                title="Page Police Department"
                description="Official website for the City of Page Police Department, featuring public safety information, community programs, and department resources."
                siteUrl="https://cityofpagepd.com"
                imageSide="right"
                screenshotPath="/portfolio-screenshots/cityofpagepd.png"
              />

              {/* Fire Department */}
              <PortfolioProject
                title="Page Fire Department"
                description="Public safety website for the Page Fire Department, providing emergency services information, fire prevention resources, and community education."
                siteUrl="https://pagefiredepartment.org"
                imageSide="left"
                screenshotPath="/portfolio-screenshots/pagefiredepartment.png"
              />

              {/* Horseshoe Bend */}
              <PortfolioProject
                title="Horseshoe Bend"
                description="Official visitor information site for Horseshoe Bend, one of Arizona's most iconic natural landmarks, featuring visiting hours, directions, and safety information."
                siteUrl="https://horseshoebend.co"
                imageSide="right"
                screenshotPath="/portfolio-screenshots/horseshoebend.png"
              />

              {/* Public Library */}
              <PortfolioProject
                title="Page Public Library"
                description="Digital hub for the Page Public Library, offering access to library services, catalog search, program schedules, and community resources."
                siteUrl="https://pagepubliclibrary.org"
                imageSide="left"
                screenshotPath="/portfolio-screenshots/pagepubliclibrary.png"
              />

              {/* Visit Page AZ */}
              <PortfolioProject
                title="Visit Page, Arizona"
                description="Tourism and visitor information website showcasing attractions, accommodations, dining, and activities in the Page, Arizona area."
                siteUrl="https://visitpageaz.com"
                imageSide="right"
                screenshotPath="/portfolio-screenshots/visitpageaz.png"
              />

              {/* Golf Course */}
              <PortfolioProject
                title="Lake Powell National Golf Course"
                description="Official website for Lake Powell National Golf Course, featuring course information, tee times, rates, and amenities for this scenic desert golf destination."
                siteUrl="https://lakepowellnationalgolfcourse.com"
                imageSide="left"
                screenshotPath="/portfolio-screenshots/lakepowellnationalgolfcourse.png"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
