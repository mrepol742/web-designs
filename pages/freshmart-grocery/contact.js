import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — FreshMart Grocery</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl font-bold text-[#1a1a1a] mb-4"
            data-aos="fade-up"
          >
            Contact Us
          </h1>
          <p className="text-gray-500 text-lg mb-12" data-aos="fade-up">
            We&apos;d love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="space-y-4" data-aos="fade-right">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] placeholder-gray-400 focus:border-[#f97316] focus:outline-none shadow-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] placeholder-gray-400 focus:border-[#f97316] focus:outline-none shadow-sm"
              />
              <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-400 focus:border-[#f97316] focus:outline-none shadow-sm">
                <option>I&apos;m interested in...</option>
                <option>Delivery Service</option>
                <option>Catering</option>
                <option>Partnership</option>
                <option>Feedback</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] placeholder-gray-400 focus:border-[#f97316] focus:outline-none shadow-sm resize-none"
              />
              <button
                type="button"
                className="bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-6" data-aos="fade-left">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2">📍 Location</h3>
                <p className="text-gray-500">
                  456 Market Street
                  <br />
                  Fresh District, CA 90210
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2">🕐 Hours</h3>
                <div className="text-gray-500 space-y-1 text-sm">
                  <p>Mon — Sat: 7:00 AM — 10:00 PM</p>
                  <p>Sunday: 8:00 AM — 9:00 PM</p>
                  <p>Delivery: 8:00 AM — 8:00 PM</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2">📞 Contact</h3>
                <p className="text-gray-500">Phone: (555) 456-7890</p>
                <p className="text-gray-500">Email: hello@freshmart.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
