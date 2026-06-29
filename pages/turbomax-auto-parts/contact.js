import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "9:00 AM – 3:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    vehicle: "",
    parts: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleQuote = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => setQuoteSubmitted(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact — TurboMax Auto Parts</title>
      </Head>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gunmetal-600 bg-hex-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              data-aos="fade-up"
              className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2"
            >
              We&apos;re Here to Help
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-5xl font-heading uppercase tracking-wider"
            >
              Contact <span className="text-neon">Us</span>
            </h1>
          </div>
        </section>

        {/* Info + Form Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Sidebar Info */}
              <div className="space-y-8">
                {/* Location */}
                <div data-aos="fade-up">
                  <h3 className="font-heading uppercase text-sm tracking-wider text-white mb-3">
                    📍 Location
                  </h3>
                  <p className="text-steel text-sm">742 Racing Blvd</p>
                  <p className="text-steel text-sm">Motor District, CA 90210</p>

                  {/* Map Placeholder */}
                  <div className="mt-4 bg-gunmetal-200 border border-gunmetal-100 rounded-sm h-48 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl block mb-2">🗺️</span>
                      <p className="text-steel text-xs">Map Integration</p>
                      <p className="text-steel text-[10px] mt-1">
                        Google Maps embed goes here
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div data-aos="fade-up" data-aos-delay="100">
                  <h3 className="font-heading uppercase text-sm tracking-wider text-white mb-3">
                    🕐 Hours
                  </h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-steel">{h.day}</span>
                        <span className="text-white font-mono text-xs">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <div data-aos="fade-up" data-aos-delay="200">
                  <h3 className="font-heading uppercase text-sm tracking-wider text-white mb-3">
                    📞 Phone
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="text-neon text-lg font-heading tracking-wider hover:underline"
                  >
                    (555) 123-4567
                  </a>
                  <p className="text-steel text-xs mt-1">
                    Parts orders & service scheduling
                  </p>

                  <a
                    href="tel:+15559876543"
                    className="text-white text-sm font-heading tracking-wider hover:text-neon transition-colors block mt-2"
                  >
                    (555) 987-6543
                  </a>
                  <p className="text-steel text-xs mt-1">
                    Performance & tuning hotline
                  </p>
                </div>

                {/* Email */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="font-heading uppercase text-sm tracking-wider text-white mb-3">
                    ✉️ Email
                  </h3>
                  <p className="text-neon text-sm">
                    parts@turbomaxautoparts.com
                  </p>
                  <p className="text-neon text-sm">
                    service@turbomaxautoparts.com
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="lg:col-span-2"
              >
                <div className="card-industrial">
                  <h3 className="font-heading uppercase text-lg tracking-wider text-white mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleContact} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="input-industrial w-full"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="input-industrial w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="input-industrial w-full"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                          Subject
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) =>
                            setForm({ ...form, subject: e.target.value })
                          }
                          className="input-industrial w-full"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="parts">Parts Question</option>
                          <option value="service">Service Booking</option>
                          <option value="performance">Performance Build</option>
                          <option value="warranty">Warranty Claim</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="input-industrial w-full resize-none"
                        placeholder="Tell us what you need..."
                      />
                    </div>
                    <button
                      type="submit"
                      className={`btn-neon w-full sm:w-auto ${submitted ? "bg-green-600" : ""}`}
                    >
                      {submitted ? "✓ Message Sent!" : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Request Quote */}
        <section className="py-20 bg-gunmetal-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-up" className="text-center mb-12">
              <p className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2">
                Need a Quote?
              </p>
              <h2 className="text-4xl font-heading uppercase tracking-wider">
                Request a <span className="text-neon">Quote</span>
              </h2>
              <p className="text-steel mt-3">
                Tell us about your vehicle and what you need. We&apos;ll get
                back to you within 24 hours.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="card-industrial"
            >
              <form onSubmit={handleQuote} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.name}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, name: e.target.value })
                      }
                      className="input-industrial w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={quoteForm.email}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, email: e.target.value })
                      }
                      className="input-industrial w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                    Vehicle (Year / Make / Model)
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.vehicle}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, vehicle: e.target.value })
                    }
                    className="input-industrial w-full"
                    placeholder="e.g. 2020 Ford F-150"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                    Parts / Service Needed
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.parts}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, parts: e.target.value })
                    }
                    className="input-industrial w-full"
                    placeholder="e.g. Full brake job, cold air intake install"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-steel mb-1 block">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    value={quoteForm.details}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, details: e.target.value })
                    }
                    className="input-industrial w-full resize-none"
                    placeholder="Any specific brands, budget range, or other notes..."
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-neon w-full sm:w-auto ${quoteSubmitted ? "bg-green-600" : ""}`}
                >
                  {quoteSubmitted
                    ? "✓ Quote Requested!"
                    : "Submit Quote Request"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
