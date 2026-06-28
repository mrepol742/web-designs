import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsletterCTA from "./components/NewsletterCTA";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Wanderlust Diaries</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
            data-aos="fade-up"
          >
            Contact Us
          </h1>
          <p
            className="text-gray-500 text-lg mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We&apos;d love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <form className="space-y-4" data-aos="fade-right">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-gray-400 focus:border-[#0d9488] focus:outline-none shadow-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-gray-400 focus:border-[#0d9488] focus:outline-none shadow-sm"
              />
              <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 focus:border-[#0d9488] focus:outline-none shadow-sm">
                <option>I&apos;m reaching out about...</option>
                <option>General Inquiry</option>
                <option>Write for Us</option>
                <option>Partnership</option>
                <option>Advertising</option>
                <option>Just Saying Hi</option>
              </select>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1a1a1a] placeholder-gray-400 focus:border-[#0d9488] focus:outline-none shadow-sm resize-none"
              />
              <button
                type="button"
                className="bg-[#0d9488] hover:bg-[#0b7f75] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="space-y-6" data-aos="fade-left">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2">Write for Us</h3>
                <p className="text-gray-500 text-sm mb-3">
                  Got a story to share? We accept guest posts from fellow
                  travelers. Send us a pitch with your idea, a writing sample,
                  and a short bio.
                </p>
                <p className="text-[#0d9488] text-sm font-medium">
                  writers@wanderlustdiaries.com
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2">Follow Us</h3>
                <div className="flex gap-4 mt-3">
                  {["Instagram", "Twitter", "YouTube", "Pinterest"].map((s) => (
                    <span
                      key={s}
                      className="text-[#0d9488] text-sm font-medium hover:underline cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NewsletterCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
