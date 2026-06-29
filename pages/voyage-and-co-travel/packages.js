import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PackageCard from "./components/PackageCard";

const packages = [
  {
    name: "Romantic Getaway",
    duration: "7 Days / 6 Nights",
    price: 2499,
    description:
      "An intimate escape designed for couples seeking romance, relaxation, and breathtaking sunsets in the world's most romantic settings.",
    highlights:
      "Private beach dinners under the stars, couples spa treatments overlooking the ocean, sunset yacht cruise through hidden coves, and luxury overwater villa accommodation with panoramic views.",
    inclusions: [
      "Round-trip economy flights for two",
      "5-star overwater villa accommodation",
      "Private airport transfers",
      "Daily breakfast & 3 gourmet dinners",
      "60-minute couples massage",
      "Sunset sailing excursion",
      "Personal travel concierge",
    ],
    tag: "Most Popular",
  },
  {
    name: "Family Adventure",
    duration: "10 Days / 9 Nights",
    price: 1999,
    description:
      "Action-packed itinerary the whole family will treasure for a lifetime. Bond over unique experiences and cultural discoveries across two incredible destinations.",
    highlights:
      "Guided wildlife safari with expert naturalist, zip-line canopy tour through tropical rainforest, snorkeling lessons for all ages, hands-on cultural workshops, and a family-friendly beach resort with kids' club.",
    inclusions: [
      "Family suite accommodation (2 adults + 2 kids)",
      "All park & attraction entrance fees",
      "Certified kid-friendly guides",
      "Private airport transfers",
      "Comprehensive travel insurance",
      "Daily breakfast & lunch",
      "Activity equipment rental",
    ],
    tag: "Best Value",
  },
  {
    name: "Solo Explorer",
    duration: "12 Days / 11 Nights",
    price: 1599,
    description:
      "For the independent spirit who craves authentic, off-the-beaten-path experiences. Curated solo experiences with the freedom to explore entirely on your terms.",
    highlights:
      "Expert-led city walking tours through hidden neighborhoods, traditional cooking classes with local families, exclusive off-the-beaten-path excursions, and a curated mix of boutique hotels and social hostels.",
    inclusions: [
      "Flexible accommodation (mix of types)",
      "Welcome orientation & city map",
      "2 guided cultural excursions",
      "Local SIM card with data",
      "24/7 emergency support line",
      "2 cooking or craft workshops",
      "Airport pickup",
    ],
    tag: "Trending",
  },
  {
    name: "Luxury Escape",
    duration: "9 Days / 8 Nights",
    price: 4999,
    description:
      "The pinnacle of indulgence. Five-star everything — private villas, first-class transfers, personal butlers, and access to the world's most exclusive experiences.",
    highlights:
      "Private jet transfers between destinations, exclusive-use luxury villa with personal chef, Michelin-star dining experiences, private guided tours of cultural landmarks, and bespoke wellness retreat.",
    inclusions: [
      "First-class flights",
      "Private villa with pool & butler",
      "Personal chef for 4 dinners",
      "Private guided tours daily",
      "Michelin-star restaurant reservations",
      "Spa credits ($500 per person)",
      "VIP airport lounge access",
      "Bespoke itinerary planning",
    ],
    tag: "Premium",
  },
];

export default function Packages() {
  return (
    <>
      <Head>
        <title>Travel Packages — Voyage &amp; Co. Travel</title>
        <meta
          name="description"
          content="All-inclusive travel packages for every type of explorer — from romantic getaways to luxury escapes."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-sunset-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-ocean-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            data-aos="fade-down"
            className="text-sunset-400 font-semibold text-sm uppercase tracking-widest"
          >
            All-Inclusive Journeys
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6"
          >
            Travel Packages
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-ocean-200 text-lg max-w-2xl mx-auto"
          >
            Every detail handled. From flights to dinners, transfers to
            experiences — just show up and live the adventure.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sunset-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Need Something Custom?
            </h2>
            <p className="text-ocean-200 text-lg mb-8 max-w-xl mx-auto">
              We specialize in bespoke itineraries. Tell us your dream, and
              we&apos;ll build the journey of a lifetime.
            </p>
            <a href="/contact" className="btn-primary px-10">
              Start Planning
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
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
