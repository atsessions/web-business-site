"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
        className="sticky top-0 z-50 backdrop-blur-lg"
        style={{
          background: "linear-gradient(135deg, #8BA9B5 0%, #7A9AA6 50%, #9B7A63 100%)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.15)",
        }}
      >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 font-bold text-white tracking-tight group">
          {/* Cactus logo */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/cactus-logo.svg" alt="Desert Web Development Logo" className="h-10 w-10 text-white drop-shadow-lg" />
          </motion.div>
          <span className="text-lg sm:text-2xl drop-shadow-md text-left">
            Desert Web Development
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex relative space-x-1 bg-black/20 backdrop-blur-sm rounded-full p-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative"
              >
                <motion.div
                  className={`font-semibold px-5 py-2 rounded-full relative z-10
                    ${isActive
                      ? "text-[#668B96]"
                      : "text-white/90 hover:text-white"}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Sliding background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white shadow-lg rounded-full"
                      style={{ zIndex: -1 }}
                      transition={{
                        type: "tween",
                        duration: 0.4,
                        ease: "easeInOut",
                        layout: { duration: 0.4 }
                      }}
                    />
                  )}
                  {link.label}
                </motion.div>
              </Link>
            );
          })}
        </div>
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden px-6 pb-6 pt-4 space-y-2 bg-gradient-to-b from-[#7A9AA6] to-[#9B7A63] border-t border-white/10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-semibold transition-all text-lg px-4 py-3 rounded-lg ${
                    pathname === link.href
                      ? "text-[#668B96] bg-white shadow-md"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}