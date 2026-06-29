import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const offices = [
  {
    name: "New York City (Headquarters)",
    address: "One Liberty Plaza, Suite 2400",
    city: "New York, NY 10006",
    phone: "(212) 555-0187",
    fax: "(212) 555-0188",
    hours: [
      "Monday – Friday: 8:30 AM – 6:30 PM",
      "Saturday: By Appointment",
      "Sunday: Closed",
    ],
  },
  {
    name: "Greenwich Office",
    address: "42 Round Hill Road, Suite 300",
    city: "Greenwich, CT 06831",
    phone: "(203) 555-0234",
    fax: "(203) 555-0235",
    hours: ["Monday – Friday: 9:00 AM – 5:30 PM", "Saturday – Sunday: Closed"],
  },
  {
    name: "Stamford Office",
    address: "100 Tresser Boulevard, Suite 1210",
    city: "Stamford, CT 06901",
    phone: "(203) 555-0312",
    fax: "(203) 555-0313",
    hours: ["Monday – Friday: 9:00 AM – 5:30 PM", "Saturday – Sunday: Closed"],
  },
];

const practiceAreas = [
  "Corporate Law",
  "Real Estate",
  "Family Law",
  "Criminal Defense",
  "Estate Planning",
  "Intellectual Property",
  "Other",
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Sterling &amp; Associates</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-3 mb-6" data-aos="fade-up">
            <div className="gold-line" />
            <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Schedule a <span className="text-gold-400">Consultation</span>
          </h1>
          <p
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your first consultation is complimentary. Reach out and let us
            understand how we can help.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">
                Send Us a Message
              </h2>
              <div className="gold-line mb-8" />

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="(212) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Practice Area *
                  </label>
                  <select className="form-input" required defaultValue="">
                    <option value="" disabled>
                      Select a practice area
                    </option>
                    {practiceAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Preferred Office
                  </label>
                  <select className="form-input" defaultValue="nyc">
                    <option value="nyc">New York City</option>
                    <option value="greenwich">Greenwich</option>
                    <option value="stamford">Stamford</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Tell Us About Your Matter *
                  </label>
                  <textarea
                    className="form-input h-36 resize-none"
                    placeholder="Please briefly describe your legal matter or inquiry..."
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs text-gray-500 leading-relaxed"
                  >
                    I agree that Sterling &amp; Associates may use the
                    information provided to respond to my inquiry. This form
                    does not create an attorney-client relationship.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-center"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2" data-aos="fade-left">
              {/* Emergency Contact */}
              <div className="bg-navy-900 rounded-sm p-8 mb-8">
                <h3 className="font-serif text-lg font-semibold text-white mb-2">
                  24/7 Emergency Legal Line
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  For urgent legal matters requiring immediate attention.
                </p>
                <a
                  href="tel:+12125550199"
                  className="text-gold-400 font-serif text-2xl font-bold hover:text-gold-300 transition-colors"
                >
                  (212) 555-0199
                </a>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-sm p-8 border border-gray-100 mb-8">
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-4">
                  General Inquiries
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-4 h-4 text-gold-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      info@sterlingassociates.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-4 h-4 text-gold-500 flex-shrink-0"
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
                    <span className="text-gray-700">(212) 555-0187</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-4 h-4 text-gold-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      One Liberty Plaza, Suite 2400, NY 10006
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gold-50 rounded-sm p-8 border border-gold-200">
                <p className="text-sm text-navy-900 leading-relaxed">
                  <strong>Confidentiality Notice:</strong> Communication via
                  this form does not constitute an attorney-client relationship.
                  Please do not send confidential or sensitive information until
                  a formal engagement has been established.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <div
                key={office.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-sm border border-gray-100 shadow-sm p-8"
              >
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-4">
                  {office.name}
                </h3>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-start space-x-2">
                    <svg
                      className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0"
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
                      <p>{office.address}</p>
                      <p>{office.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-gold-500 flex-shrink-0"
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
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-gold-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      />
                    </svg>
                    <span>Fax: {office.fax}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">
                    Office Hours
                  </h4>
                  <ul className="space-y-1">
                    {office.hours.map((h) => (
                      <li key={h} className="text-xs text-gray-500">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
