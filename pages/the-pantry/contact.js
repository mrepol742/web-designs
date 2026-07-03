import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 8:00 PM" },
  { day: "Saturday", time: "10:00 AM – 9:00 PM" },
  { day: "Sunday", time: "11:00 AM – 6:00 PM" },
];

const faqs = [
  {
    q: "Do you ship nationwide?",
    a: "Yes! We ship to all 48 contiguous states. Perishable items ship via overnight in insulated packaging.",
  },
  {
    q: "Can I order a custom gift basket?",
    a: "Absolutely. Visit the shop or call us to build a custom basket for any occasion.",
  },
  {
    q: "Do you offer catering?",
    a: "Yes — from intimate dinner parties to large corporate events. Fill out the catering inquiry below.",
  },
];

export default function Contact() {
  const [formType, setFormType] = useState("order");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Head>
        <title>Contact — The Pantry</title>
        <meta
          name="description"
          content="Get in touch with The Pantry. Place orders, inquire about catering, or visit our Brooklyn shop."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-burgundy-800 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <span className="text-gold text-sm uppercase tracking-[4px]">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mt-3 mb-4">
            Contact <span className="text-gold italic">Us</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Questions, orders, catering inquiries — we&apos;re here for all of
            it.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form - 3 cols */}
          <div className="lg:col-span-3" data-aos="fade-up">
            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              {[
                { key: "order", label: "Place an Order" },
                { key: "catering", label: "Catering Inquiry" },
                { key: "general", label: "General Message" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFormType(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    formType === tab.key
                      ? "bg-burgundy-800 text-cream"
                      : "bg-cream text-burgundy-800/50 hover:bg-burgundy-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold/10"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Elena"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Marchetti"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="elena@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="(718) 555-0000"
                  />
                </div>
              </div>

              {formType === "order" && (
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                    Product(s) &amp; Quantities
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    placeholder="e.g. 2x Aged Manchego DOP, 1x Truffle Pecorino, 1x Ibérico Ham"
                  />
                </div>
              )}

              {formType === "catering" && (
                <>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                        Guest Count
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="e.g. 30"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                      Event Type
                    </label>
                    <select className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                      <option>Birthday / Celebration</option>
                      <option>Corporate Event</option>
                      <option>Wedding Reception</option>
                      <option>Private Dinner Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                </>
              )}

              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-burgundy-800/60 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-cream border border-gold/20 rounded-lg text-burgundy-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  placeholder="Tell us about your order, event, or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-burgundy-800 text-cream font-bold uppercase tracking-wider rounded-xl hover:bg-gold hover:text-burgundy-800 transition-all duration-300 hover:shadow-lg"
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Sidebar - 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Location */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-2xl p-8 shadow-md border border-gold/10"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-display text-xl font-bold text-burgundy-800 mb-3">
                Find Us
              </h3>
              <p className="text-burgundy-800/70 leading-relaxed">
                789 Gourmet Lane
                <br />
                Brooklyn, NY 11201
              </p>
              <p className="text-sm text-burgundy-800/50 mt-2">
                Near the corner of Atlantic &amp; Gourmet — look for the
                burgundy awning.
              </p>
              <div className="mt-4 bg-cream rounded-xl h-40 flex items-center justify-center border border-gold/10">
                <span className="text-burgundy-800/30 text-sm uppercase tracking-wider">
                  Map Placeholder
                </span>
              </div>
            </div>

            {/* Hours */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-2xl p-8 shadow-md border border-gold/10"
            >
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="font-display text-xl font-bold text-burgundy-800 mb-4">
                Store Hours
              </h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-gold/10 last:border-0"
                  >
                    <span className="text-sm font-semibold text-burgundy-800">
                      {h.day}
                    </span>
                    <span className="text-sm text-burgundy-800/60">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-2xl p-8 shadow-md border border-gold/10"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-display text-xl font-bold text-burgundy-800 mb-4">
                Direct Contact
              </h3>
              <div className="space-y-3 text-sm">
                <p>
                  <span className="font-semibold text-burgundy-800">
                    Phone:
                  </span>{" "}
                  <span className="text-burgundy-800/60">(718) 555-0142</span>
                </p>
                <p>
                  <span className="font-semibold text-burgundy-800">
                    Email:
                  </span>{" "}
                  <span className="text-burgundy-800/60">
                    hello@thepantryfoods.com
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-burgundy-800">
                    Catering:
                  </span>{" "}
                  <span className="text-burgundy-800/60">
                    events@thepantryfoods.com
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-burgundy-800">
                    Instagram:
                  </span>{" "}
                  <span className="text-burgundy-800/60">
                    @thepantrybrooklyn
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-gold-dark text-sm uppercase tracking-[4px] font-semibold">
              FAQ
            </span>
            <h2 className="font-display text-3xl font-bold text-burgundy-800 mt-3">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-cream rounded-xl p-6 border border-gold/10"
              >
                <h4 className="font-display text-lg font-bold text-burgundy-800 mb-2">
                  {faq.q}
                </h4>
                <p className="text-sm text-burgundy-800/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
