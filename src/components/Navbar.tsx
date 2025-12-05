"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 font-light text-black tracking-tight group">
          <img
            src="/cactus-logo.svg"
            alt="Desert Web Development Logo"
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-lg sm:text-xl sm:hidden">
            DesertWebAZ
          </span>
          <span className="text-lg sm:text-xl hidden sm:block">
            Desert Web Development
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-6 py-2 font-light text-base text-black transition-colors duration-300 hover:text-[#666666] group"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 focus:outline-none transition-colors duration-300 hover:bg-[#fafafa]"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-px bg-black transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-full h-px bg-black transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-px bg-black transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-[#e5e5e5] bg-[#fafafa] overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block font-light text-lg px-4 py-3 transition-all duration-300 border-l-2 ${
                  isActive
                    ? "text-black border-black"
                    : "text-[#737373] border-transparent hover:text-black hover:border-[#e5e5e5]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}