import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    serviceType: "",
    message: "",
    formType: "inquiry",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Head>
        <title>Contact - BioNex Labs</title>
      </Head>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-bio-navy to-bio-teal">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span
              data-aos="fade-up"
              className="text-sm font-bold text-white/70 uppercase tracking-wider"
            >
              Get In Touch
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-black text-white mt-4 mb-6"
            >
              Contact Us
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Ready to start your next project? Reach out to discuss how BioNex
              Labs can support your research and development needs.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3" data-aos="slide-right">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                  {/* Form Type Tabs */}
                  <div className="flex gap-2 mb-8 bg-gray-50 p-1 rounded-xl">
                    {[
                      { value: "inquiry", label: "Project Inquiry" },
                      { value: "visit", label: "Lab Visit" },
                    ].map((tab) => (
                      <button
                        key={tab.value}
                        onClick={() =>
                          setFormData({ ...formData, formType: tab.value })
                        }
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                          formData.formType === tab.value
                            ? "bg-bio-teal text-white shadow-md"
                            : "text-gray-500 hover:text-bio-navy"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 bg-bio-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-bio-teal"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-bio-navy mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-500">
                        We&apos;ve received your{" "}
                        {formData.formType === "visit"
                          ? "lab visit request"
                          : "project inquiry"}{" "}
                        and will respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-bio-navy mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all"
                            placeholder="Dr. Jane Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-bio-navy mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all"
                            placeholder="jane@institution.edu"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-bio-navy mb-2">
                            Organization
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all"
                            placeholder="University or Company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-bio-navy mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all"
                            placeholder="(555) 000-0000"
                          />
                        </div>
                      </div>

                      {formData.formType === "inquiry" && (
                        <div>
                          <label className="block text-sm font-semibold text-bio-navy mb-2">
                            Service of Interest
                          </label>
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all text-gray-600"
                          >
                            <option value="">Select a service...</option>
                            <option value="dna">DNA Sequencing</option>
                            <option value="drug">Drug Discovery</option>
                            <option value="clinical">Clinical Trials</option>
                            <option value="chemical">Chemical Analysis</option>
                            <option value="consulting">
                              Biotech Consulting
                            </option>
                            <option value="environmental">
                              Environmental Testing
                            </option>
                            <option value="other">Other / Custom</option>
                          </select>
                        </div>
                      )}

                      {formData.formType === "visit" && (
                        <>
                          <div>
                            <label className="block text-sm font-semibold text-bio-navy mb-2">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              name="visitDate"
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-bio-navy mb-2">
                              Purpose of Visit
                            </label>
                            <select
                              name="visitPurpose"
                              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all text-gray-600"
                            >
                              <option value="">Select purpose...</option>
                              <option value="tour">Facility Tour</option>
                              <option value="meeting">Research Meeting</option>
                              <option value="training">
                                Equipment Training
                              </option>
                              <option value="audit">Audit / Inspection</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </>
                      )}

                      <div>
                        <label className="block text-sm font-semibold text-bio-navy mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bio-teal/30 focus:border-bio-teal transition-all resize-none"
                          placeholder={
                            formData.formType === "visit"
                              ? "Tell us about your visit requirements..."
                              : "Describe your project, timeline, and any specific requirements..."
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-bio-teal text-white font-bold rounded-xl hover:bg-bio-teal-dark transition-all shadow-lg hover:shadow-xl text-sm"
                      >
                        {formData.formType === "visit"
                          ? "Request Lab Visit"
                          : "Submit Inquiry"}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Location */}
                <div
                  data-aos="fade-up"
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-bio-navy mb-4">
                    Lab Location
                  </h3>
                  <div className="w-full h-48 bg-gradient-to-br from-bio-bg-alt to-gray-200 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-10 h-10 text-bio-teal mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-sm font-semibold text-bio-navy">
                        Map Placeholder
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-bio-teal mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-bio-navy">
                          456 Science Park Drive
                        </p>
                        <p className="text-sm text-gray-500">
                          BioTech District, CA 94025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-bio-teal shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        (555) 924-7100
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-bio-teal shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        info@bionexlabs.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-bio-navy mb-4">
                    Lab Hours
                  </h3>
                  <div className="space-y-2">
                    {[
                      { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                      { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
                      { day: "Sunday", hours: "Closed (Emergency Only)" },
                    ].map((h, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                      >
                        <span className="text-sm text-gray-500">{h.day}</span>
                        <span className="text-sm font-semibold text-bio-navy">
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="bg-gradient-to-br from-bio-teal/5 to-bio-navy/5 rounded-2xl p-8 border border-bio-teal/10"
                >
                  <h3 className="text-lg font-bold text-bio-navy mb-2">
                    24/7 Emergency Line
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    For urgent biosafety incidents or after-hours lab
                    emergencies:
                  </p>
                  <p className="text-xl font-black text-bio-teal">
                    (555) 924-7200
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
