"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

// Navbar links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav
        className="sticky top-0 z-50 bg-gray-100/95 backdrop-blur-md"
        style={{
          boxShadow: "0 8px 32px 0 rgba(34,56,112,0.07)",
          borderBottom: "1.5px solid #e2e8f0",
          background: undefined, // <--- ensure nothing overrides Tailwind!
        }}
      >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-gray-800 tracking-tight">
          {/* Optional fun icon */}
          <SparklesIcon className="h-7 w-7 text-[#668B96] animate-spin-slow" />
          Website Management
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex relative space-x-8">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`font-medium px-2 py-1 transition group
                    ${isActive
                      ? "text-[#668B96]"
                      : "text-gray-700 hover:text-[#668B96]"}
                  `}
                  style={{ position: "relative" }}
                >
                  {link.label}
                  {/* Animated indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-[#668B96] z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-[#668B96]"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 md:hidden px-4 pb-6 pt-4 space-y-4 bg-white/95 shadow rounded-b-xl z-40 backdrop-blur"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block font-medium transition text-lg ${
                  pathname === link.href
                    ? "text-[#668B96]"
                    : "text-gray-700 hover:text-[#668B96]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}