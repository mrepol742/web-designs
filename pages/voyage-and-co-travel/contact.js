import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const destinationOptions = [
  "Bali, Indonesia",
  "Maldives",
  "Swiss Alps, Switzerland",
  "Marrakech, Morocco",
  "Kyoto & Tokyo, Japan",
  "Reykjavik, Iceland",
  "Custom / Not Sure Yet",
];

const budgetRanges = [
  "$1,000 – $2,000",
  "$2,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

const groupSizes = [
  "Solo (1 traveler)",
  "Couple (2 travelers)",
  "Small Group (3–5)",
  "Family (2 adults + kids)",
  "Large Group (6+)",
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    returnDate: "",
    budget: "",
    groupSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us — Voyage &amp; Co. Travel</title>
        <meta
          name="description"
          content="Start planning your dream trip. Contact Voyage & Co. Travel for a personalized travel consultation."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-sunset-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-ocean-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            data-aos="fade-down"
            className="text-sunset-400 font-semibold text-sm uppercase tracking-widest"
          >
            Let&apos;s Connect
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6"
          >
            Plan Your Journey
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-ocean-200 text-lg max-w-2xl mx-auto"
          >
            Tell us about your dream trip and our travel designers will craft a
            personalized proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2" data-aos="fade-right">
            {submitted ? (
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                <h2 className="text-3xl font-display font-bold text-ocean-800 mb-3">
                  Inquiry Received!
                </h2>
                <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                  Thank you, {form.firstName}! Our travel designers will review
                  your trip details and reach out within 24 hours with a
                  personalized proposal.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      destination: "",
                      travelDate: "",
                      returnDate: "",
                      budget: "",
                      groupSize: "",
                      message: "",
                    });
                  }}
                  className="btn-outline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
              >
                <h2 className="text-2xl font-display font-bold text-ocean-800 mb-2">
                  Trip Inquiry
                </h2>
                <p className="text-gray-500 mb-8">
                  Fields marked with * are required
                </p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition"
                      placeholder="Alexandra"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition"
                      placeholder="Chen"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition"
                      placeholder="alex@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Trip Details */}
                <h3 className="text-lg font-display font-semibold text-ocean-800 mb-4 pb-2 border-b border-gray-100">
                  Trip Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Destination *
                    </label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select a destination</option>
                      {destinationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={form.travelDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Return Date
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={form.returnDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Group Size *
                    </label>
                    <select
                      name="groupSize"
                      value={form.groupSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select group size</option>
                      {groupSizes.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us about your travel style, special occasions, dietary needs, or anything else we should know..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Submit Trip Inquiry
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6" data-aos="fade-left">
            {/* Contact Info Card */}
            <div className="bg-ocean-800 text-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-sunset-400"
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
                  </div>
                  <div>
                    <p className="text-ocean-200 text-sm">Phone</p>
                    <p className="font-medium">+1 (555) 924-7283</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-sunset-400"
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
                  </div>
                  <div>
                    <p className="text-ocean-200 text-sm">Email</p>
                    <p className="font-medium">hello@voyageandco.travel</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-sunset-400"
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
                  </div>
                  <div>
                    <p className="text-ocean-200 text-sm">Offices</p>
                    <p className="font-medium">
                      Portland, OR • London, UK • Singapore
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-sunset-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-ocean-200 text-sm">Hours</p>
                    <p className="font-medium">Mon – Fri: 8am – 7pm PST</p>
                    <p className="text-ocean-300 text-sm">
                      Emergency line: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Promise */}
            <div className="bg-sunset-50 rounded-2xl p-6 border border-sunset-100">
              <h4 className="font-display font-bold text-ocean-800 mb-3">
                Our Promise
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-sunset-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Response within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-sunset-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No obligation, no hidden fees
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-sunset-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Free cancellation up to 48 hours
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-sunset-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  ABTA & ATOL protected bookings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
