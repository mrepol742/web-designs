import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact / RFQ — Apex Manufacturing Co.</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-800/30 border-b border-steel-700/30 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(234,179,8,0.3) 50px),
                            repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(234,179,8,0.3) 50px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-subheading" data-aos="fade-up">
            Get In Touch
          </span>
          <h1
            className="section-heading text-4xl md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Request a <span className="text-industrial">Quote</span>
          </h1>
          <div
            className="industrial-divider"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <p
            className="text-steel-400 text-lg max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Upload your drawings or describe your requirements. Our engineering
            team reviews every RFQ and returns pricing within 24–48 hours.
          </p>
        </div>
      </section>

      {/* RFQ Form + Contact Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-up">
              {submitted ? (
                <div className="card-dark p-12 text-center">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-3">
                    RFQ Received
                  </h3>
                  <p className="text-steel-400 mb-6">
                    Our engineering team will review your request and respond
                    within 24–48 hours with a detailed quote.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another RFQ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-dark p-8 md:p-10">
                  <h2 className="font-heading text-2xl uppercase tracking-wider text-white mb-8">
                    Material <span className="text-industrial">RFQ</span>
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                        placeholder="john@acme.com"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Material *
                      </label>
                      <select
                        required
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                      >
                        <option value="">Select material</option>
                        <option>Carbon Steel (A36 / 1018 / 1045 / 4140)</option>
                        <option>Stainless Steel (304 / 316 / 17-4PH)</option>
                        <option>Aluminum (6061 / 7075 / 5052)</option>
                        <option>Titanium (Ti-6Al-4V)</option>
                        <option>Copper / Brass</option>
                        <option>Inconel</option>
                        <option>Tool Steel</option>
                        <option>Other (specify in notes)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Quantity *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                        placeholder="e.g. 500 pcs"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Dimensions
                      </label>
                      <input
                        type="text"
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                        placeholder="e.g. 50mm × 30mm × 10mm"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                        Secondary Operations
                      </label>
                      <input
                        type="text"
                        className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors"
                        placeholder="e.g. Powder coating, threading"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-steel-800 border border-steel-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-industrial transition-colors resize-none"
                      placeholder="Tolerances, drawing references, delivery timeline, etc."
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-steel-400 text-xs uppercase tracking-widest mb-2">
                      Upload Drawings (optional)
                    </label>
                    <div className="border-2 border-dashed border-steel-700 rounded p-8 text-center hover:border-industrial/50 transition-colors cursor-pointer">
                      <svg
                        className="w-8 h-8 text-steel-600 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-steel-500 text-sm">
                        Drop files here or click to upload
                      </p>
                      <p className="text-steel-600 text-xs mt-1">
                        PDF, DWG, STEP, STL — Max 25MB
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-center"
                  >
                    Submit RFQ
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="font-heading text-xl uppercase tracking-wider text-white mb-6">
                  Contact <span className="text-industrial">Information</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-industrial/10 border border-industrial/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-industrial"
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
                    </div>
                    <div>
                      <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-1">
                        Address
                      </h4>
                      <p className="text-steel-400 text-sm">
                        123 Industrial Blvd
                        <br />
                        Houston, TX 77001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-industrial/10 border border-industrial/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-industrial"
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
                    </div>
                    <div>
                      <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-steel-400 text-sm">(713) 555-0192</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-industrial/10 border border-industrial/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-industrial"
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
                    </div>
                    <div>
                      <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-1">
                        Email
                      </h4>
                      <p className="text-steel-400 text-sm">info@apexmfg.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-industrial/10 border border-industrial/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-industrial"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-1">
                        Hours
                      </h4>
                      <p className="text-steel-400 text-sm">
                        Mon – Fri: 7:00 AM – 5:00 PM CST
                        <br />
                        Sat – Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="card-dark overflow-hidden"
              >
                <div className="h-64 bg-steel-800 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-steel-600 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-steel-500 text-sm">
                      123 Industrial Blvd, Houston TX
                    </p>
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
