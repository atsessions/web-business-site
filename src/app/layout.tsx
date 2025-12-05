// src/app/layout.tsx

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

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
  metadataBase: new URL('https://desertwebaz.com'),
  title: "Desert Web Development",
  description: "Professional web development and management services in Page, Arizona. Building and maintaining high-quality websites for businesses, government, and organizations.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://desertwebaz.com',
    siteName: 'Desert Web Development',
    title: 'Desert Web Development',
    description: 'Professional web development and management services in Page, Arizona. Building and maintaining high-quality websites for businesses, government, and organizations.',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Desert Web Development - Page, Arizona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desert Web Development',
    description: 'Professional web development and management services in Page, Arizona. Building and maintaining high-quality websites for businesses, government, and organizations.',
    images: ['/hero.jpg'],
  },
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

        {/* 4) All your pages - flex-1 makes it grow to fill space */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>

        <section className="w-full bg-[#454545 min-h-0.5">
        </section>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
