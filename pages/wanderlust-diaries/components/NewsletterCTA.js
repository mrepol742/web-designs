import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sand-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Compass Icon */}
        <div
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center"
          data-aos="zoom-in"
        >
          <svg
            className="w-8 h-8 text-ocean-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2
          className="font-[Playfair_Display] text-3xl md:text-4xl font-bold text-white mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Join 12,000+ Wanderers
        </h2>
        <p
          className="text-ocean-100 text-lg mb-8 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get weekly travel stories, destination guides, and insider tips
          delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-sand-400 text-white font-semibold rounded-xl hover:bg-sand-500 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            {submitted ? "✓ Subscribed!" : "Subscribe"}
          </button>
        </form>

        <p
          className="text-ocean-200/60 text-xs mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          No spam. Unsubscribe anytime. We respect your inbox.
        </p>
      </div>
    </section>
  );
}
