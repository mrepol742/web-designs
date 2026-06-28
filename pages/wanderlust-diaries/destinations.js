import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DestinationCard from "./components/DestinationCard";
import NewsletterCTA from "./components/NewsletterCTA";

const allDestinations = [
  {
    name: "Bali",
    country: "Indonesia",
    description:
      "Emerald rice terraces, ancient temples, world-class surf, and sunsets that set the ocean on fire. Bali is a spiritual and sensory feast.",
    slug: "bali",
  },
  {
    name: "Japan",
    country: "Japan",
    description:
      "A mesmerizing blend of neon-lit cities, serene zen gardens, centuries-old shrines, and food so good it'll ruin every other meal for the rest of your life.",
    slug: "japan",
  },
  {
    name: "Iceland",
    country: "Iceland",
    description:
      "Land of fire and ice — erupting geysers, massive glaciers, volcanic black sand beaches, and the northern lights dancing across Arctic skies.",
    slug: "iceland",
  },
  {
    name: "Morocco",
    country: "Morocco",
    description:
      "A sensory overload of spice-scented souks, labyrinthine medinas, Saharan dunes, and the warm hospitality of the Maghreb.",
    slug: "morocco",
  },
  {
    name: "Peru",
    country: "Peru",
    description:
      "Home to Machu Picchu, the Amazon basin, and a culinary scene that rivals the world's best. Peru is South America's crown jewel.",
    slug: "peru",
  },
  {
    name: "Santorini",
    country: "Greece",
    description:
      "Iconic blue-domed churches, white-washed villages cascading down volcanic cliffs, and sunsets over the Aegean that poets write about.",
    slug: "santorini",
  },
  {
    name: "Patagonia",
    country: "Argentina & Chile",
    description:
      "Raw, windswept wilderness at the bottom of the world. Towering granite peaks, turquoise glaciers, and endless empty trails.",
    slug: "patagonia",
  },
  {
    name: "Vietnam",
    country: "Vietnam",
    description:
      "From the limestone karsts of Ha Long Bay to the buzzing streets of Hoi An — Vietnam is a feast for the eyes, the stomach, and the soul.",
    slug: "vietnam",
  },
  {
    name: "New Zealand",
    country: "New Zealand",
    description:
      "Middle-earth brought to life. Fiordlands, volcanic plateaus, crystal-clear lakes, and some of the friendliest humans on the planet.",
    slug: "new-zealand",
  },
];

const regions = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania"];

export default function Destinations() {
  return (
    <>
      <Head>
        <title>Destinations — Wanderlust Diaries</title>
        <meta
          name="description"
          content="Explore our curated collection of travel destinations from around the world."
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-700 via-ocean-600 to-sand-400" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 border border-white/10"
              data-aos="fade-up"
            >
              ✦ 47 countries and counting
            </span>
            <h1
              className="font-[Playfair_Display] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Destinations
            </h1>
            <p
              className="text-lg text-white/80 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Handpicked places that left a mark on us. Each destination comes
              with honest guides, practical tips, and the stories you won&apos;t
              find in guidebooks.
            </p>
          </div>
        </section>

        {/* Region Filter (decorative) */}
        <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex gap-2 py-4 overflow-x-auto no-scrollbar"
              data-aos="fade-up"
            >
              {regions.map((region, i) => (
                <button
                  key={region}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    i === 0
                      ? "bg-ocean-600 text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-ocean-50 hover:text-ocean-600"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allDestinations.map((dest, i) => (
                <div key={dest.slug} data-aos="fade-up" data-aos-delay={i * 50}>
                  <DestinationCard {...dest} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterCTA />
      </main>

      <Footer />
    </>
  );
}
