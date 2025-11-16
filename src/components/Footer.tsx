import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e5e5e5] bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/cactus-logo.svg"
                alt="Desert Web Development Logo"
                className="h-8 w-8"
              />
              <span className="text-lg font-light text-black tracking-tight">
                Desert Web Development
              </span>
            </div>
            <p className="text-[#737373] text-sm font-light leading-relaxed">
              Professional web development and website management for Page, Arizona businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-light text-black uppercase tracking-wider mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-[#737373] text-sm font-light hover:text-black transition-colors duration-300">
                Home
              </Link>
              <Link href="/portfolio" className="text-[#737373] text-sm font-light hover:text-black transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/contact" className="text-[#737373] text-sm font-light hover:text-black transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-light text-black uppercase tracking-wider mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:alex.t.sessions@gmail.com"
                className="text-[#737373] text-sm font-light hover:text-black transition-colors duration-300"
              >
                alex.t.sessions@gmail.com
              </a>
              <p className="text-[#737373] text-sm font-light">
                Page, Arizona
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#737373] text-xs font-light">
            &copy; {new Date().getFullYear()} Desert Web Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
