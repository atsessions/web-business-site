"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="sm:py-16 pt-16 bg-white">
      <div className="mx-auto flex flex-col items-center text-center px-4"> {/* <-- ADDED px-4 */}
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-6">
          Ready to take your website to the next level?
        </h3>
        <Link
          href="/contact"
          className="inline-block rounded-xl bg-[#668B96] text-white font-semibold px-8 py-2 text-lg shadow-md hover:bg-[#6A4327] hover:text-white transition-colors duration-200"
        >
          Let’s Talk
        </Link>
      </div>
    </section>
  );
}
