// src/app/portfolio/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import PortfolioProject from "@/components/PortfolioProject";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Title and Description */}
        <div className="py-20 md:py-22 md:pb-10 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-light text-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Portfolio
          </motion.h1>
          <motion.p
            className="text-[#737373] text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Selected projects from my web development work, including freelance sites and professional municipal web projects. Want to see more?{" "}
            <a href="/contact" className="group relative text-black transition-colors duration-300 hover:text-[#666666]">
              Contact me
              <span className="absolute bottom-0 left-0 w-full h-px bg-black group-hover:w-0 transition-all duration-300" />
            </a>
            {" "}for additional samples.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <div className="pb-20">
          <PortfolioProject
            title="Red Heritage Native American Dinner Show"
            description="Cultural event website for a Navajo-owned dinner theater in Page, Arizona, featuring ticketing, schedules, and information about authentic Native American performances and cuisine."
            siteUrl="https://red-heritage.com"
            imageSide="right"
            screenshotPath="/portfolio-screenshots/red-heritage.png"
            index={0}
          />

          <PortfolioProject
            title="Photography Portfolio"
            description="My professional photography portfolio website showcasing visual work and creative projects. Built for performance with a clean, image-focused design that highlights photographic content."
            siteUrl="https://atsessions.com"
            imageSide="left"
            screenshotPath="/portfolio-screenshots/atsessions.png"
            index={1}
          />
        </div>

        {/* Professional & Government Projects Section */}
        <section className="border-t border-[#e5e5e5] pt-20 pb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-black mb-8 md:mb-10 text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Professional & Government Web Projects
          </motion.h2>

          <div>
            <PortfolioProject
              title="City of Page, Arizona"
              description="Official municipal website for the City of Page, providing residents and visitors with access to city services, news, and government information."
              siteUrl="https://cityofpage.org"
              imageSide="right"
              screenshotPath="/portfolio-screenshots/cityofpage.png"
              index={2}
            />

            <PortfolioProject
              title="Page Events Portal"
              description="Comprehensive events platform for the City of Page, showcasing community activities, festivals, and public gatherings throughout the year."
              siteUrl="https://events.cityofpage.org"
              imageSide="left"
              screenshotPath="/portfolio-screenshots/events-cityofpage.png"
              index={3}
            />

            <PortfolioProject
              title="Page Police Department"
              description="Official website for the City of Page Police Department, featuring public safety information, community programs, and department resources."
              siteUrl="https://cityofpagepd.com"
              imageSide="right"
              screenshotPath="/portfolio-screenshots/cityofpagepd.png"
              index={4}
            />

            <PortfolioProject
              title="Page Fire Department"
              description="Public safety website for the Page Fire Department, providing emergency services information, fire prevention resources, and community education."
              siteUrl="https://pagefiredepartment.org"
              imageSide="left"
              screenshotPath="/portfolio-screenshots/pagefiredepartment.png"
              index={5}
            />

            <PortfolioProject
              title="Horseshoe Bend"
              description="Official visitor information site for Horseshoe Bend, one of Arizona's most iconic natural landmarks, featuring visiting hours, directions, and safety information."
              siteUrl="https://horseshoebend.co"
              imageSide="right"
              screenshotPath="/portfolio-screenshots/horseshoebend.png"
              index={6}
            />

            <PortfolioProject
              title="Page Public Library"
              description="Digital hub for the Page Public Library, offering access to library services, catalog search, program schedules, and community resources."
              siteUrl="https://pagepubliclibrary.org"
              imageSide="left"
              screenshotPath="/portfolio-screenshots/pagepubliclibrary.png"
              index={7}
            />

            <PortfolioProject
              title="Visit Page, Arizona"
              description="Tourism and visitor information website showcasing attractions, accommodations, dining, and activities in the Page, Arizona area."
              siteUrl="https://visitpageaz.com"
              imageSide="right"
              screenshotPath="/portfolio-screenshots/visitpageaz.png"
              index={8}
            />

            <PortfolioProject
              title="Lake Powell National Golf Course"
              description="Official website for Lake Powell National Golf Course, featuring course information, tee times, rates, and amenities for this scenic desert golf destination."
              siteUrl="https://lakepowellnationalgolfcourse.com"
              imageSide="left"
              screenshotPath="/portfolio-screenshots/lakepowellnationalgolfcourse.png"
              index={9}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
