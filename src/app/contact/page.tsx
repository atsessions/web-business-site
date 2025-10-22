// src/app/contact/page.tsx
"use client";
import React from "react";

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
    <main className="flex-1 flex flex-col items-center justify-start px-4 py-12 bg-white">
      {/* Header Section */}
      <div className="w-full max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-neutral-800 mb-4 mt-4 md:mt-10">Let's Work Together</h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Have a project in mind? Whether you need a new website, maintenance for an existing site, or web development consultation, I'd love to hear from you.
        </p>
      </div>

      {/* Main Content Area with Two Columns */}
      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-[#668B96] to-[#557A84] rounded-2xl p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:alex.t.sessions@gmail.com" className="hover:underline">
                  alex.t.sessions@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p>Page, Arizona</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Response Time</h3>
                <p>I typically respond within 24-48 hours</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 rounded-2xl p-8 shadow-md border border-neutral-200">
            <h2 className="text-xl font-bold text-neutral-800 mb-3">Services Offered</h2>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start">
                <span className="text-[#668B96] mr-2">•</span>
                <span>Custom Website Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#668B96] mr-2">•</span>
                <span>Website Maintenance & Updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#668B96] mr-2">•</span>
                <span>Municipal & Government Websites</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#668B96] mr-2">•</span>
                <span>Performance Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#668B96] mr-2">•</span>
                <span>Web Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full rounded-2xl shadow-lg bg-white border-2 border-neutral-200 p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-neutral-800 text-center">Send a Message</h2>

        {!sent ? (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
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
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="rounded-lg border px-4 py-3 text-base text-neutral-600 outline-none border-neutral-300 focus:border-[#668B96] bg-white"
              required
              disabled={submitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="rounded-lg border px-4 py-3 text-base text-neutral-600 outline-none border-neutral-300 focus:border-[#668B96] bg-white"
              required
              disabled={submitting}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="rounded-lg border px-4 py-3 text-base text-neutral-600 outline-none border-neutral-300 focus:border-[#668B96] bg-white resize-none"
              required
              disabled={submitting}
            />
            <button
              type="submit"
              className="mt-2 rounded-xl bg-[#668B96] text-white font-semibold px-8 py-3 text-lg shadow-md hover:bg-[#6A4327] hover:text-white transition-colors duration-200 disabled:opacity-50"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
            {error && (
              <div className="text-red-600 text-center text-sm mt-2">{error}</div>
            )}
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <div className="text-2xl text-[#668B96] font-bold">Thank you!</div>
            <div className="text-neutral-700 text-center">Your message has been sent. I’ll get back to you soon.</div>
            <button
              onClick={() => setSent(false)}
              className="mt-4 rounded-xl bg-[#668B96] text-white font-semibold px-8 py-2 text-base shadow-md hover:bg-[#6A4327] transition-colors duration-200"
            >
              Send Another
            </button>
          </div>
        )}
        </div>
      </div>
    </main>
  );
}
