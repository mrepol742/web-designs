import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    bio: "Former adventure travel journalist turned entrepreneur. 15+ years exploring 80+ countries.",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Destinations",
    bio: "Geography enthusiast who personally vets every destination and partner in our network.",
  },
  {
    name: "Priya Sharma",
    role: "Lead Travel Designer",
    bio: "Creates bespoke itineraries that blend cultural immersion with luxury comfort.",
  },
  {
    name: "James Okafor",
    role: "Client Experience Director",
    bio: "Ensures every journey exceeds expectations — from first inquiry to homecoming.",
  },
];

const awards = [
  {
    year: "2024",
    title: "World Travel Awards",
    desc: "Leading Tour Operator — South Pacific",
  },
  {
    year: "2023",
    title: "Condé Nast Traveler",
    desc: "Top Travel Specialist — Adventure",
  },
  {
    year: "2023",
    title: "TripAdvisor",
    desc: "Travelers' Choice — Best of the Best",
  },
  {
    year: "2022",
    title: "Travel + Leisure",
    desc: "World's Best Awards — Tour Operator",
  },
];

const values = [
  {
    title: "Authentic Experiences",
    desc: "We go beyond tourist traps. Every itinerary is designed to connect you with local culture, cuisine, and community in meaningful ways.",
    icon: "🌏",
  },
  {
    title: "Meticulous Planning",
    desc: "From airport lounge access to dinner reservations at hidden restaurants — every detail is handled before you even pack.",
    icon: "📋",
  },
  {
    title: "24/7 Support",
    desc: "Travel with confidence knowing our team is a phone call away, any time zone, any situation.",
    icon: "🛟",
  },
  {
    title: "Sustainable Travel",
    desc: "We partner with eco-conscious operators and offset carbon for every trip booked through us.",
    icon: "🌿",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Voyage &amp; Co. Travel</title>
        <meta
          name="description"
          content="Learn about Voyage & Co. Travel — crafting extraordinary journeys since 2012. Meet our team and discover our story."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-sunset-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-ocean-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            data-aos="fade-down"
            className="text-sunset-400 font-semibold text-sm uppercase tracking-widest"
          >
            Our Story
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6"
          >
            About Voyage & Co.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-ocean-200 text-lg max-w-2xl mx-auto"
          >
            Crafting journeys since 2012. Born from a belief that travel should
            transform, not just transport.
          </p>
        </div>
      </section>

      {/* Agency Story */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="text-sunset-500 font-semibold text-sm uppercase tracking-widest">
              Since 2012
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ocean-800 mt-3 mb-6">
              We Believe Travel Changes Lives
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Voyage & Co. was founded by Alexandra Chen after a life-changing
                solo journey across Southeast Asia. What started as a one-woman
                consultancy operating from a tiny office in Portland has grown
                into a globally recognized travel agency with offices in three
                countries.
              </p>
              <p>
                Our philosophy is simple: every trip should be more than a
                vacation. It should broaden perspectives, forge connections, and
                create stories worth telling. We don&apos;t sell generic package
                tours — we craft personalized journeys that reflect who you are
                and who you want to become.
              </p>
              <p>
                Today, our team of 40+ travel designers, local guides, and
                experience curators has sent over 15,000 travelers to 50+
                destinations across six continents. And we&apos;re just getting
                started.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="aspect-square rounded-3xl image-placeholder overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 text-white/30 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-white/40 text-sm mt-3">
                    Agency photo placeholder
                  </p>
                </div>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <p className="text-4xl font-display font-bold text-ocean-800">
                15,000+
              </p>
              <p className="text-gray-500 text-sm">
                Travelers served worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="text-sunset-500 font-semibold text-sm uppercase tracking-widest">
              Why Us
            </span>
            <h2 className="section-title mt-2">Why Choose Voyage & Co.</h2>
            <p className="section-subtitle mt-3">
              What sets us apart from every other travel agency you&apos;ve ever
              considered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <div
                key={val.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-4xl mb-4 block">{val.icon}</span>
                <h3 className="text-xl font-display font-bold text-ocean-800 mb-3">
                  {val.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-sunset-500 font-semibold text-sm uppercase tracking-widest">
            The Team
          </span>
          <h2 className="section-title mt-2">Meet the Experts</h2>
          <p className="section-subtitle mt-3">
            Passionate travelers turned professionals. Your journey is in the
            best hands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="text-center group"
            >
              <div className="w-36 h-36 rounded-full image-placeholder mx-auto mb-5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-display font-bold text-ocean-800">
                {member.name}
              </h3>
              <p className="text-sunset-500 text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-sunset-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <span className="text-sunset-400 font-bold text-sm">
                  {award.year}
                </span>
                <h4 className="text-white font-display font-bold text-lg mt-2 mb-1">
                  {award.title}
                </h4>
                <p className="text-ocean-200 text-sm">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
