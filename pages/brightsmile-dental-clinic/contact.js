import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inputClass =
  "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medical-teal/30 focus:border-medical-teal transition";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us — BrightSmile Dental Clinic</title>
      </Head>

      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-white via-teal-50/50 to-medical-blue section-padding">
          <div className="container-narrow text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-teal-100/60 text-medical-teal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Contact BrightSmile
            </h1>
            <p className="text-lg text-medical-muted max-w-2xl mx-auto">
              Have a question? Need to schedule an appointment? We&apos;d love
              to hear from you. Reach out anytime.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {[
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  title: "Our Location",
                  lines: ["123 Health Ave", "Medical District", "Suite 200"],
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  title: "Phone",
                  lines: ["(800) 555-1234", "Emergency: (800) 555-9999"],
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  title: "Email",
                  lines: [
                    "hello@brightsmiledental.com",
                    "appointments@brightsmiledental.com",
                  ],
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: "Hours",
                  lines: ["Mon–Fri: 8AM–6PM", "Sat: 9AM–2PM"],
                },
              ].map((card, i) => (
                <div
                  key={card.title}
                  className="card text-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-teal-50 text-medical-teal flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-sm text-medical-muted">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map + Form */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div data-aos="fade-up">
                <div className="card !p-0 h-full overflow-hidden min-h-[400px]">
                  <div className="w-full h-full bg-gradient-to-br from-teal-50 to-medical-blue flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-medical-teal/10 flex items-center justify-center text-medical-teal mb-4">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      123 Health Ave
                    </h3>
                    <p className="text-sm text-medical-muted mb-4">
                      Medical District, Suite 200
                    </p>
                    <p className="text-xs text-gray-400">
                      Google Maps embed — replace with your API key
                    </p>
                    <div className="mt-6 w-full h-40 bg-white/60 rounded-2xl border border-teal-100 flex items-center justify-center">
                      <span className="text-sm text-gray-400">
                        📍 Map Location
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div data-aos="fade-up" data-aos-delay="100">
                {submitted ? (
                  <div className="card !p-10 text-center h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-medical-muted">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="card !p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Send Us a Message
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className={labelClass}>First Name *</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name *</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Smith"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className={labelClass}>Email *</label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className={labelClass}>Phone</label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="mb-6">
                      <label className={labelClass}>Subject *</label>
                      <select className={inputClass} required defaultValue="">
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option>General Inquiry</option>
                        <option>Appointment Question</option>
                        <option>Insurance Question</option>
                        <option>Emergency</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className={labelClass}>Message *</label>
                      <textarea
                        rows={4}
                        className={inputClass}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary text-center"
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours Detail */}
        <section className="section-padding bg-gradient-to-b from-teal-50/30 to-white">
          <div className="container-narrow">
            <div className="max-w-lg mx-auto" data-aos="fade-up">
              <div className="card text-center">
                <span className="text-4xl mb-3 block">🕐</span>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Office Hours
                </h2>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        {h.day}
                      </span>
                      <span
                        className={`text-sm font-medium ${h.time === "Closed" ? "text-red-500" : "text-medical-teal"}`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-2xl">
                  <p className="text-sm text-red-600 font-semibold">
                    🚨 Dental Emergencies: Available 24/7 — Call (800) 555-9999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
