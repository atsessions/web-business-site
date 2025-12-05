// src/app/contact/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Simple honeypot: a hidden input that real users won't fill out
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // The honeypot field: should be blank for humans
    if (data.get("company")) {
      setError("Submission blocked. (Are you a robot?)");
      return;
    }

    // Send form data to API
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          company: data.get('company'),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="py-20 md:py-32 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-light text-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Let's Work Together
          </motion.h1>
          <motion.p
            className="text-[#737373] text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Have a project in mind? Whether you need a new website, maintenance for an existing site, or web development consultation, I'd love to hear from you.
          </motion.p>
        </div>

        {/* Main Content Area */}
        <div className="pb-20 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column: Contact Info */}
          <motion.div
            className="flex flex-col gap-12 max-w-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-8 tracking-tight">Contact Information</h2>
              <div className="flex flex-col gap-6">
                <div className="border-l-2 border-black pl-6 pr-4 transition-colors duration-300 hover:border-[#666666]">
                  <h3 className="text-sm font-light text-[#737373] uppercase tracking-wider mb-2">Email</h3>
                  <a
                    href="mailto:alex.t.sessions@gmail.com"
                    className="text-black font-light text-base transition-colors duration-300 hover:text-[#666666]"
                  >
                    alex.t.sessions@gmail.com
                  </a>
                </div>
                <div className="border-l-2 border-black pl-6 pr-4 transition-colors duration-300 hover:border-[#666666]">
                  <h3 className="text-sm font-light text-[#737373] uppercase tracking-wider mb-2">Location</h3>
                  <p className="text-black font-light text-base">Page, Arizona</p>
                </div>
                <div className="border-l-2 border-black pl-6 pr-4 transition-colors duration-300 hover:border-[#666666]">
                  <h3 className="text-sm font-light text-[#737373] uppercase tracking-wider mb-2">Response Time</h3>
                  <p className="text-black font-light text-base">Typically within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-black mb-8 tracking-tight">Services Offered</h2>
              <ul className="space-y-4">
                {[
                  "Custom Website Development",
                  "Website Maintenance & Updates",
                  "Small Business Websites",
                  "Municipal & Government Websites",
                  "Performance Optimization",
                  "Web Consulting"
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    className="flex items-start gap-4 text-base group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                    <span className="text-[#404040] font-light leading-relaxed transition-colors duration-300 group-hover:text-black">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="border border-[#e5e5e5] bg-white p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-black mb-8 tracking-tight">Send a Message</h2>

            {!sent ? (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
                {/* Honeypot Field (hidden from humans) */}
                <div style={{ display: "none" }}>
                  <label>
                    Company (leave blank):
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-light text-[#737373] uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-[#e5e5e5] px-4 py-3 text-base text-black font-light outline-none transition-colors duration-300 focus:border-black bg-white"
                    required
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-[#737373] uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-[#e5e5e5] px-4 py-3 text-base text-black font-light outline-none transition-colors duration-300 focus:border-black bg-white"
                    required
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-[#737373] uppercase tracking-wider mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full border border-[#e5e5e5] px-4 py-3 text-base text-black font-light outline-none transition-colors duration-300 focus:border-black bg-white resize-none"
                    required
                    disabled={submitting}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-block border-2 border-black text-black font-light px-10 py-4 text-base hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={submitting}
                >
                  <span className="relative z-10">{submitting ? "Sending..." : "Send Message"}</span>
                  <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                {error && (
                  <div className="text-black text-center text-sm border-l-2 border-black pl-4 py-2">{error}</div>
                )}
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-6 py-12">
                <div className="text-3xl md:text-4xl text-black font-light">Thank you!</div>
                <div className="text-[#737373] text-center font-light leading-relaxed">
                  Your message has been sent. I'll get back to you soon.
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 group inline-block border-2 border-black text-black font-light px-10 py-3 text-base hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Send Another</span>
                  <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
