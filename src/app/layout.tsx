// src/app/layout.tsx

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

// 1) Your fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// 2) Your site metadata (optional but recommended)
export const metadata: Metadata = {
  title: "Your Business Name",
  description: "Professional web management & design",
}

import Navbar from "../components/Navbar"  // <-- make sure path is correct
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 scroll-smooth flex flex-col min-h-screen`}
      >
        {/* 3) Navbar goes inside <body> */}
        <Navbar />

        {/* 4) All your pages */}
        {children}
        <section className="w-full bg-[#b6deee] min-h-10">
        </section>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
