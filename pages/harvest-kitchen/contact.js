import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [cateringSubmitted, setCateringSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCatering = (e) => {
    e.preventDefault();
    setCateringSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact — Harvest Kitchen</title>
      </Head>
      <Header />

      {/* Page Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-wood-500 text-white text-center px-4">
        <h1
          data-aos="fade-up"
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
        >
          Get in Touch
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-green-100 text-lg max-w-xl mx-auto"
        >
          Questions, reservations, catering inquiries — we'd love to hear from
          you.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-up">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
              <h2 className="font-serif text-2xl font-bold text-green-700 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-5xl block mb-4">✅</span>
                  <h3 className="font-serif text-xl font-bold text-green-700">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mt-2">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="(503) 555-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                      <option>General Inquiry</option>
                      <option>Reservation</option>
                      <option>Catering Request</option>
                      <option>Wholesale / Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                      placeholder="Tell us what you're thinking..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Location */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-xl p-6 shadow-sm border border-green-100"
            >
              <h3 className="font-serif text-lg font-bold text-green-700 mb-3">
                📍 Location
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                42 Orchard Lane
                <br />
                Portland, OR 97205
                <br />
                <span className="text-green-600 font-medium">
                  In the historic Pearl District barn
                </span>
              </p>
              <div className="mt-4 bg-green-50 rounded-lg h-40 flex items-center justify-center">
                <span className="text-4xl">🗺️</span>
              </div>
            </div>

            {/* Hours */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-xl p-6 shadow-sm border border-green-100"
            >
              <h3 className="font-serif text-lg font-bold text-green-700 mb-3">
                🕐 Hours
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium">7am – 8pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">8am – 9pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">8am – 6pm</span>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-xl p-6 shadow-sm border border-green-100"
            >
              <h3 className="font-serif text-lg font-bold text-green-700 mb-3">
                📞 Contact
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>(503) 555-0174</li>
                <li>hello@harvestkitchen.co</li>
                <li>@harvestkitchen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Inquiry */}
      <section className="py-16 bg-wood-500 px-4">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-wood-500">
            <h2 className="font-serif text-2xl font-bold text-green-700 mb-2">
              🍽️ Catering Inquiry
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Planning an event? We offer full-service organic catering for
              groups of 10–200. Seasonal menus, compostable ware, and full setup
              included.
            </p>

            {cateringSubmitted ? (
              <div className="text-center py-8">
                <span className="text-5xl block mb-4">🎉</span>
                <h3 className="font-serif text-xl font-bold text-green-700">
                  Catering Inquiry Sent!
                </h3>
                <p className="text-gray-500 mt-2">
                  Our events team will reach out within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCatering} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Guest Count
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                      <option>10–30 guests</option>
                      <option>30–75 guests</option>
                      <option>75–150 guests</option>
                      <option>150–200 guests</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
                    placeholder="Tell us about your event — venue, theme, dietary needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-wood-500 text-white font-bold rounded-full hover:bg-wood-600 transition shadow-md"
                >
                  Submit Catering Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
