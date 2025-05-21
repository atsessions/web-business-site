// src/app/contact/page.tsx
"use client";
import React from "react";

export default function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Simple honeypot: a hidden input that real users won’t fill out
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // The honeypot field: should be blank for humans
    if (data.get("company")) {
      setError("Submission blocked. (Are you a robot?)");
      return;
    }

    // Simulate sending (replace with your API later)
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      form.reset();
    }, 1000);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-white">
      <div className="w-full max-w-xl rounded-3xl shadow-2xl bg-neutral-50 p-10 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-neutral-800 mb-2 text-center">Get in Touch</h1>
        <p className="text-neutral-600 text-center mb-6">
          Let’s work together or just say hi! Fill out the form and I’ll get back to you soon.
        </p>

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

        <div className="mt-6 text-center text-neutral-500 text-sm">
          Or email me directly: <a href="mailto:your@email.com" className="underline hover:text-[#668B96]">your@email.com</a>
        </div>
      </div>
    </main>
  );
}
