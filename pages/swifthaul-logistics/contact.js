import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const vehicleTypes = [
  "Sprinter Van",
  "Box Truck (20ft)",
  "Box Truck (26ft)",
  "Flatbed Truck",
  "Refrigerated Truck",
  "18-Wheeler (53ft)",
  "Not Sure — Need Help",
];

const serviceTypes = [
  "Freight Shipping",
  "Last-Mile Delivery",
  "Cold Chain Logistics",
  "Warehouse & Storage",
  "Moving Services",
  "Cargo Insurance",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    origin: "",
    destination: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    vehicleType: "",
    specialReqs: "",
    timeline: "",
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
        <title>Contact — SwiftHaul Logistics</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-navy-900 to-navy-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="max-w-3xl">
            <span className="text-accent font-heading text-sm font-bold uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-5">
              REQUEST A <span className="text-accent">QUOTE</span>
            </h1>
            <p className="text-navy-400 text-lg leading-relaxed">
              Tell us about your shipment and we&apos;ll get back to you with a
              detailed quote in under 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-6 bg-navy-800/50 border-y border-navy-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="tel:5559114285"
              className="flex items-center gap-3 text-accent hover:text-accent-light transition-colors"
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="text-xs text-navy-500 uppercase tracking-wider">
                  24/7 Dispatch
                </p>
                <p className="font-bold">(555) 911-HAUL</p>
              </div>
            </a>
            <a
              href="mailto:dispatch@swifthaul.com"
              className="flex items-center gap-3 text-navy-300 hover:text-accent transition-colors"
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-xs text-navy-500 uppercase tracking-wider">
                  Email
                </p>
                <p className="font-medium">dispatch@swifthaul.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 text-navy-300">
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="text-xs text-navy-500 uppercase tracking-wider">
                  HQ
                </p>
                <p className="font-medium">
                  321 Logistics Way, Dallas TX 75201
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form + Chat */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  data-aos="zoom-in"
                  className="bg-navy-800/50 border border-accent/30 rounded-xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-white mb-3">
                    QUOTE REQUESTED
                  </h3>
                  <p className="text-navy-400 max-w-md mx-auto">
                    Our dispatch team will review your shipment details and
                    respond with a detailed quote within 30 minutes during
                    business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "",
                        origin: "",
                        destination: "",
                        weight: "",
                        length: "",
                        width: "",
                        height: "",
                        vehicleType: "",
                        specialReqs: "",
                        timeline: "",
                      });
                    }}
                    className="mt-6 px-6 py-3 border border-navy-600 hover:border-accent text-white text-sm font-bold uppercase tracking-wider rounded transition-all"
                  >
                    Submit Another Quote
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  data-aos="fade-up"
                  className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-6 lg:p-8"
                >
                  <h3 className="font-heading text-2xl font-bold text-white mb-6">
                    QUICK QUOTE FORM
                  </h3>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Phone *
                      </label>
                      <input
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Company
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-300 mb-3 mt-2">
                    Shipment Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Service Type *
                      </label>
                      <select
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select service...</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Vehicle Type
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select vehicle...</option>
                        {vehicleTypes.map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Origin City/Zip *
                      </label>
                      <input
                        required
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="Dallas, TX 75201"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Destination City/Zip *
                      </label>
                      <input
                        required
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="Chicago, IL 60601"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Total Weight (lbs) *
                      </label>
                      <input
                        required
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="5,000"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Timeline
                      </label>
                      <input
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="e.g., Pickup by Friday"
                      />
                    </div>
                  </div>

                  {/* Dimensions */}
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-300 mb-3">
                    Dimensions (optional)
                  </h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Length (ft)
                      </label>
                      <input
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="48"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Width (ft)
                      </label>
                      <input
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="8"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                        Height (ft)
                      </label>
                      <input
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors"
                        placeholder="9"
                      />
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div className="mb-6">
                    <label className="block text-navy-400 text-xs uppercase tracking-wider mb-1.5">
                      Special Requirements
                    </label>
                    <textarea
                      name="specialReqs"
                      value={formData.specialReqs}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-navy-900/80 border border-navy-600/50 rounded-lg px-4 py-3 text-white text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Hazmat, liftgate, inside delivery, appointment required..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wider rounded transition-all hover:shadow-xl hover:shadow-accent/25 text-sm"
                  >
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Live Chat Placeholder */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="font-heading text-lg font-bold text-white">
                    LIVE CHAT
                  </h3>
                </div>
                <p className="text-navy-400 text-sm mb-4">
                  Our dispatch team is online right now. Chat with a live
                  representative for instant assistance.
                </p>
                <button className="w-full py-3 bg-accent/10 border border-accent/30 hover:bg-accent/20 text-accent font-bold uppercase tracking-wider rounded text-sm transition-all">
                  Start Chat
                </button>
              </div>

              {/* Emergency */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-accent/10 border border-accent/30 rounded-xl p-6"
              >
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  ⚠️ EMERGENCY DISPATCH
                </h3>
                <p className="text-navy-400 text-sm mb-4">
                  Breakdowns, delays, and urgent shipments — 24/7.
                </p>
                <a
                  href="tel:5559114285"
                  className="block text-accent font-heading text-2xl font-bold hover:text-accent-light transition-colors"
                >
                  (555) 911-HAUL
                </a>
              </div>

              {/* Hours */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-6"
              >
                <h3 className="font-heading text-lg font-bold text-white mb-4">
                  HOURS
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-400">Dispatch</span>
                    <span className="text-white font-medium">24/7/365</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Office</span>
                    <span className="text-white font-medium">
                      Mon-Fri 7AM-7PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Warehouse</span>
                    <span className="text-white font-medium">
                      Mon-Sat 6AM-10PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Quotes</span>
                    <span className="text-accent font-medium">
                      Within 30 min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
