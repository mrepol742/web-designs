import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    duration: "8 Days / 7 Nights",
    price: 1899,
    description:
      "Ancient temples, lush rice terraces, vibrant coral reefs, and the warmest hospitality on Earth.",
    image: "/images/bali.jpg",
  },
  {
    name: "Maldives",
    country: "Republic of Maldives",
    duration: "6 Days / 5 Nights",
    price: 3499,
    description:
      "Crystal-clear lagoons, overwater villas, and some of the world's finest dive sites.",
    image: "/images/maldives.jpg",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    duration: "7 Days / 6 Nights",
    price: 2799,
    description:
      "Majestic mountain panoramas, charming alpine villages, and legendary Swiss precision.",
    image: "/images/switzerland.jpg",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    duration: "6 Days / 5 Nights",
    price: 1299,
    description:
      "A sensory feast of spice markets, ornate palaces, Sahara excursions, and rooftop riads.",
    image: "/images/morocco.jpg",
  },
  {
    name: "Kyoto & Tokyo",
    country: "Japan",
    duration: "10 Days / 9 Nights",
    price: 3899,
    description:
      "Ancient shrines meet neon streets. Cherry blossoms, bullet trains, and culinary perfection.",
    image: "/images/japan.jpg",
  },
  {
    name: "Reykjavik & Golden Circle",
    country: "Iceland",
    duration: "7 Days / 6 Nights",
    price: 2699,
    description:
      "Northern lights, volcanic landscapes, geothermal springs, and otherworldly beauty.",
    image: "/images/iceland.jpg",
  },
];

export default function Destinations() {
  return (
    <>
      <Head>
        <title>Destinations — Voyage &amp; Co. Travel</title>
        <meta
          name="description"
          content="Explore our curated destinations across the globe — from tropical islands to alpine peaks."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-sunset-500/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-ocean-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            data-aos="fade-down"
            className="text-sunset-400 font-semibold text-sm uppercase tracking-widest"
          >
            Where Will You Go?
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-display font-bold text-white mt-4 mb-6"
          >
            Our Destinations
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-ocean-200 text-lg max-w-2xl mx-auto"
          >
            Six continents, countless stories. Each destination is handpicked
            for its uniqueness, beauty, and the transformative experiences it
            offers.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.name} destination={dest} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-ocean-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in">
            <h2 className="section-title mb-4">Can&apos;t Decide?</h2>
            <p className="section-subtitle mb-8">
              Our travel experts will match you with the perfect destination
              based on your preferences, budget, and travel style.
            </p>
            <a href="/contact" className="btn-primary">
              Talk to an Expert
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
