import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-neutral-900 text-neutral-300 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-2">
        {/* Branding & Copyright */}
        <div className="text-sm">
          <span className="font-semibold">Alex Sessions Web</span>
          <span className="mx-2">|</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        {/* Links */}
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          {/* Social Icons (optional) */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={18} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-white">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
