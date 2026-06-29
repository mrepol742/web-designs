import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";
import PackageCard from "./components/PackageCard";
import ProjectLink from "@/components/ProjectLink";

const featuredDestinations = [
  {
    name: "Bali",
    country: "Indonesia",
    duration: "8 Days / 7 Nights",
    price: 1899,
    description:
      "Ancient temples, lush rice terraces, and vibrant coral reefs await in the Island of the Gods.",
    image: "/images/bali.jpg",
  },
  {
    name: "Maldives",
    country: "Republic of Maldives",
    duration: "6 Days / 5 Nights",
    price: 3499,
    description:
      "Crystal-clear lagoons, overwater villas, and pristine white sand beaches in paradise.",
    image: "/images/maldives.jpg",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    duration: "7 Days / 6 Nights",
    price: 2799,
    description:
      "Majestic mountain peaks, charming villages, and world-class alpine experiences.",
    image: "/images/switzerland.jpg",
  },
];

const popularPackages = [
  {
    name: "Romantic Getaway",
    duration: "7 Days / 6 Nights",
    price: 2499,
    description:
      "An intimate escape designed for couples seeking romance, relaxation, and breathtaking sunsets.",
    highlights:
      "Private beach dinners, couples spa treatments, sunset yacht cruise, and luxury overwater villa accommodation.",
    inclusions: [
      "Round-trip flights",
      "5-star resort stay",
      "Private transfers",
      "Daily breakfast & dinner",
      "Couples massage",
    ],
    tag: "Most Popular",
  },
  {
    name: "Family Adventure",
    duration: "10 Days / 9 Nights",
    price: 1999,
    description:
      "Action-packed itinerary the whole family will treasure. Bond over unique experiences and shared discoveries.",
    highlights:
      "Wildlife safari, zip-lining, snorkeling lessons, cultural workshops, and family-friendly beach resort.",
    inclusions: [
      "Family suite accommodation",
      "All park entrance fees",
      "Kid-friendly guides",
      "Airport transfers",
      "Travel insurance",
    ],
    tag: "Best Value",
  },
  {
    name: "Solo Explorer",
    duration: "12 Days / 11 Nights",
    price: 1599,
    description:
      "For the independent spirit. Curated solo experiences with the freedom to explore at your own pace.",
    highlights:
      "Guided city walks, cooking classes, off-the-beaten-path excursions, hostel & boutique hotel mix.",
    inclusions: [
      "Flexible accommodation",
      "Welcome orientation",
      "2 guided excursions",
      "Local SIM card",
      "24/7 support line",
    ],
    tag: "Trending",
  },
];

const trustBadges = [
  { icon: "🌍", title: "50+ Destinations", desc: "Across 6 continents" },
  { icon: "🏆", title: "12+ Years", desc: "Of crafting journeys" },
  { icon: "👥", title: "15,000+ Travelers", desc: "Happy explorers served" },
  { icon: "⭐", title: "4.9/5 Rating", desc: "On Trustpilot" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Voyage &amp; Co. Travel — Crafting Journeys Since 2012</title>
        <meta
          name="description"
          content="Discover your next adventure with Voyage & Co. Travel. Premium travel packages to Bali, Maldives, Switzerland, and more."
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero background */}
        <div className="absolute inset-0 image-placeholder">
          <div className="absolute inset-0 bg-ocean-800" />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/90 via-ocean-800/70 to-ocean-700/80" />

          {/* Decorative circles */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sunset-500/10 blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full bg-ocean-400/10 blur-3xl animate-float"
            style={{ animationDelay: "-3s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div data-aos="fade-up" data-aos-delay="100">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-sunset-500 animate-pulse" />
              Crafting Journeys Since 2012
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight text-balance"
          >
            Discover Your
            <br />
            <span className="text-gradient">Next Adventure</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg md:text-xl text-ocean-200 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Handcrafted travel experiences to the world&apos;s most
            extraordinary destinations. Let us turn your wanderlust into
            unforgettable memories.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ProjectLink
              href="/packages"
              className="btn-primary text-base px-10 py-4"
            >
              Explore Packages
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ProjectLink>
            <ProjectLink
              href="/destinations"
              className="btn-secondary text-base px-10 py-4"
            >
              View Destinations
            </ProjectLink>
          </div>

          {/* Scroll indicator */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-16 animate-bounce"
          >
            <svg
              className="w-6 h-6 text-white/40 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl mb-2 block">{badge.icon}</span>
                <p className="font-display font-bold text-ocean-800 text-lg">
                  {badge.title}
                </p>
                <p className="text-gray-500 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-sunset-500 font-semibold text-sm uppercase tracking-widest">
            Explore
          </span>
          <h2 className="section-title mt-2">Featured Destinations</h2>
          <p className="section-subtitle mt-3">
            From tropical paradises to alpine wonderlands — find the escape that
            speaks to your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest, i) => (
            <DestinationCard key={dest.name} destination={dest} index={i} />
          ))}
        </div>

        <div data-aos="fade-up" className="text-center mt-12">
          <ProjectLink href="/destinations" className="btn-outline">
            All Destinations
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </ProjectLink>
        </div>
      </section>

      {/* Popular Packages Preview */}
      <section className="py-24 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="text-sunset-500 font-semibold text-sm uppercase tracking-widest">
              Packages
            </span>
            <h2 className="section-title mt-2">Popular Travel Packages</h2>
            <p className="section-subtitle mt-3">
              Curated experiences for every kind of traveler. All-inclusive,
              hassle-free, and designed to inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.map((pkg, i) => (
              <PackageCard key={pkg.name} pkg={pkg} index={i} />
            ))}
          </div>

          <div data-aos="fade-up" className="text-center mt-12">
            <ProjectLink href="/packages" className="btn-primary">
              View All Packages
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* Testimonial / Aspiration Quote */}
      <section className="py-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-sunset-500/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-ocean-300/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in">
            <svg
              className="w-12 h-12 text-sunset-500/40 mx-auto mb-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
            </svg>
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white mb-8 leading-relaxed text-balance">
              &ldquo;The world is a book, and those who do not travel read only
              one page.&rdquo;
            </p>
            <p className="text-sunset-400 font-semibold">— Saint Augustine</p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="relative bg-gradient-to-br from-ocean-800 to-ocean-700 rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sunset-500/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-ocean-400/10 blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Get Travel Inspiration
            </h2>
            <p className="text-ocean-200 mb-8 text-lg">
              Join 15,000+ explorers. Get exclusive deals, hidden gems, and
              destination guides delivered weekly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-ocean-300 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
              />
              <button className="btn-primary px-8 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-ocean-400 text-xs mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
