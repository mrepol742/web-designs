import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

const cakeTypes = [
  "Wedding Cake",
  "Birthday Cake",
  "Custom Tier Cake",
  "Cupcakes (6 or 12 pack)",
  "Character/Theme Cake",
  "Macaron Tower",
  "Dessert Table Package",
  "Other",
];

const budgetRanges = [
  "Under $50",
  "$50 – $100",
  "$100 – $250",
  "$250 – $500",
  "$500+",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    eventDate: "",
    budget: "",
    servings: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us — Sweet Bliss Bakery | Order Custom Cakes</title>
        <meta
          name="description"
          content="Contact Sweet Bliss Bakery to order custom cakes, wedding cakes, and party treats. Fill out our order inquiry form or visit us in Sugarville."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-sweet text-center">
        <p className="section-subtitle" data-aos="fade-up">
          Let's Make Something Sweet
        </p>
        <h1
          className="section-title text-5xl md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contact Us
        </h1>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Order Form */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <div className="card-bakery p-8 md:p-10">
                <h2 className="font-display text-2xl text-chocolate mb-2">
                  🍰 Order Inquiry
                </h2>
                <p className="font-body text-chocolate/60 text-sm mb-8">
                  Tell us about your dream cake and we'll get back to you within
                  24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12" data-aos="zoom-in">
                    <span className="text-7xl block mb-6">🎉</span>
                    <h3 className="font-display text-2xl text-chocolate mb-3">
                      Order Received!
                    </h3>
                    <p className="font-body text-chocolate/60 mb-6">
                      Thanks {formData.name || "sweet friend"}! We'll reach out
                      within 24 hours to discuss your order.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          cakeType: "",
                          eventDate: "",
                          budget: "",
                          servings: "",
                          message: "",
                        });
                      }}
                      className="btn-sweet text-sm"
                    >
                      Submit Another Order
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                     font-body text-chocolate focus:border-blush focus:outline-none
                                     transition-colors placeholder:text-chocolate/30"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                     font-body text-chocolate focus:border-blush focus:outline-none
                                     transition-colors placeholder:text-chocolate/30"
                          placeholder="jane@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                   font-body text-chocolate focus:border-blush focus:outline-none
                                   transition-colors placeholder:text-chocolate/30"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Cake Type & Servings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                          Cake Type *
                        </label>
                        <select
                          name="cakeType"
                          required
                          value={formData.cakeType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                     font-body text-chocolate focus:border-blush focus:outline-none
                                     transition-colors appearance-none"
                        >
                          <option value="">Select a cake type...</option>
                          {cakeTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                          Estimated Servings
                        </label>
                        <input
                          type="number"
                          name="servings"
                          value={formData.servings}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                     font-body text-chocolate focus:border-blush focus:outline-none
                                     transition-colors placeholder:text-chocolate/30"
                          placeholder="e.g. 50"
                          min="1"
                        />
                      </div>
                    </div>

                    {/* Event Date & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                     font-body text-chocolate focus:border-blush focus:outline-none
                                     transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                     font-body text-chocolate focus:border-blush focus:outline-none
                                     transition-colors appearance-none"
                        >
                          <option value="">Select budget range...</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-body font-semibold text-chocolate text-sm mb-1 block">
                        Tell Us About Your Dream Cake
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-bakery border-2 border-blush/30 bg-cream
                                   font-body text-chocolate focus:border-blush focus:outline-none
                                   transition-colors resize-none placeholder:text-chocolate/30"
                        placeholder="Describe your vision — colors, flavors, theme, special requests..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-choco w-full text-center"
                    >
                      Send Order Inquiry 💌
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Location */}
              <div
                className="card-bakery"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <span className="text-3xl block mb-3">📍</span>
                <h3 className="font-display text-lg text-chocolate mb-2">
                  Visit Our Bakery
                </h3>
                <p className="font-body text-chocolate/70 text-sm">
                  123 Vanilla Lane
                  <br />
                  Sugarville, CA 90210
                </p>
                <p className="font-body text-chocolate/50 text-xs mt-2">
                  Free parking in the back • Walk-ins welcome
                </p>
              </div>

              {/* Hours */}
              <div
                className="card-bakery"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <span className="text-3xl block mb-3">🕐</span>
                <h3 className="font-display text-lg text-chocolate mb-2">
                  Bakery Hours
                </h3>
                <div className="font-body text-chocolate/70 text-sm space-y-1">
                  <p>Monday – Friday: 7 AM – 7 PM</p>
                  <p>Saturday: 8 AM – 6 PM</p>
                  <p>Sunday: 9 AM – 3 PM</p>
                </div>
              </div>

              {/* Contact */}
              <div
                className="card-bakery"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <span className="text-3xl block mb-3">📞</span>
                <h3 className="font-display text-lg text-chocolate mb-2">
                  Get in Touch
                </h3>
                <div className="font-body text-chocolate/70 text-sm space-y-1">
                  <p className="font-semibold text-chocolate">(555) 123-CAKE</p>
                  <p>hello@sweetblissbakery.com</p>
                </div>
              </div>

              {/* Quick Note */}
              <div
                className="card-bakery bg-blush/10 border-2 border-blush/20"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <span className="text-3xl block mb-3">💌</span>
                <h3 className="font-display text-lg text-chocolate mb-2">
                  Order Notice
                </h3>
                <p className="font-body text-chocolate/70 text-sm leading-relaxed">
                  Custom cake orders require at least{" "}
                  <strong>1 week advance notice</strong>. Wedding cakes and
                  large events: <strong>2-4 weeks</strong>. Rush orders may be
                  available for an additional fee — just ask!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
