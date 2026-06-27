import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const hours = [
  { day: "Monday — Friday", time: "5:00 AM — 11:00 PM" },
  { day: "Saturday", time: "6:00 AM — 10:00 PM" },
  { day: "Sunday", time: "7:00 AM — 9:00 PM" },
  { day: "Holidays", time: "8:00 AM — 6:00 PM" },
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — IronPulse Gym</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fire-red/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p
            className="text-fire-red font-bold uppercase tracking-[0.2em] text-sm mb-3"
            data-aos="fade-down"
          >
            Get in Touch
          </p>
          <h1
            className="heading-uppercase text-5xl md:text-7xl mb-4"
            data-aos="zoom-in"
          >
            Contact <span className="text-fire-gradient">Us</span>
          </h1>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Questions? Comments? Ready to start? We're here for you.
          </p>
          <div className="fire-divider w-24 mx-auto mt-8" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="slide-left">
              <h2 className="heading-uppercase text-2xl mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="input-fire"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="input-fire"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="input-fire"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="input-fire"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Subject
                  </label>
                  <select className="input-fire">
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Class Schedule</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="input-fire resize-none"
                  />
                </div>
                <button type="submit" className="btn-fire w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div
                data-aos="fade-up"
                className="card-dark !p-0 overflow-hidden"
              >
                <div className="w-full h-64 bg-iron-card flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fire-red/5 to-fire-orange/5" />
                  <div className="relative z-10 text-center">
                    <svg
                      className="w-12 h-12 text-fire-red mx-auto mb-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">
                      Interactive Map
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      742 Fitness Ave, Iron District
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div
                className="card-dark"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-fire-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-fire-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
                      Location
                    </h3>
                    <p className="text-gray-400 text-sm">
                      742 Fitness Ave
                      <br />
                      Iron District, ID 83702
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="card-dark"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-fire-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-fire-orange"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-400 text-sm">
                      (555) 742-IRON (4766)
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="card-dark"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-fire-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-fire-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
                      Email
                    </h3>
                    <p className="text-gray-400 text-sm">info@ironpulse.gym</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="card-dark"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="font-bold uppercase tracking-wider text-sm mb-4">
                  Gym Hours
                </h3>
                <div className="space-y-3">
                  {hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-400">{h.day}</span>
                      <span className="text-white font-medium">{h.time}</span>
                    </div>
                  ))}
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
