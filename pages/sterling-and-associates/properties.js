import { useState } from "react";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PropertyCard from "./components/PropertyCard";

const allProperties = [
  {
    address: "1847 Beacon Hill Drive",
    city: "Greenwich, CT 06830",
    price: "$2,450,000",
    beds: 5,
    baths: 4,
    sqft: 4200,
    status: "For Sale",
    type: "sale",
  },
  {
    address: "320 Park Avenue, Unit 42A",
    city: "New York, NY 10022",
    price: "$12,500/mo",
    beds: 3,
    baths: 2,
    sqft: 1850,
    status: "For Rent",
    type: "rent",
  },
  {
    address: "95 Harbor View Lane",
    city: "Mamaroneck, NY 10543",
    price: "$1,875,000",
    beds: 4,
    baths: 3,
    sqft: 3100,
    status: "For Sale",
    type: "sale",
  },
  {
    address: "1100 Madison Avenue, PH-1",
    city: "New York, NY 10028",
    price: "$28,000/mo",
    beds: 4,
    baths: 4,
    sqft: 3800,
    status: "For Rent",
    type: "rent",
  },
  {
    address: "22 Cove Road",
    city: "Old Greenwich, CT 06870",
    price: "$3,200,000",
    beds: 6,
    baths: 5,
    sqft: 5400,
    status: "For Sale",
    type: "sale",
  },
  {
    address: "745 Fifth Avenue, Suite 1200",
    city: "New York, NY 10019",
    price: "$4,500,000",
    beds: 0,
    baths: 2,
    sqft: 2200,
    status: "For Sale",
    type: "commercial",
  },
  {
    address: "48 Prospect Street",
    city: "Stamford, CT 06901",
    price: "$6,800/mo",
    beds: 2,
    baths: 2,
    sqft: 1400,
    status: "For Rent",
    type: "rent",
  },
  {
    address: "321 Ocean Boulevard",
    city: "Middletown, NJ 07748",
    price: "$1,125,000",
    beds: 3,
    baths: 2,
    sqft: 2400,
    status: "For Sale",
    type: "sale",
  },
  {
    address: "500 Lexington Avenue, Floor 34",
    city: "New York, NY 10017",
    price: "$7,200,000",
    beds: 0,
    baths: 3,
    sqft: 4500,
    status: "For Sale",
    type: "commercial",
  },
];

const filters = [
  { label: "All Listings", value: "all" },
  { label: "For Sale", value: "sale" },
  { label: "For Rent", value: "rent" },
  { label: "Commercial", value: "commercial" },
];

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? allProperties
      : allProperties.filter((p) => p.type === activeFilter);

  return (
    <>
      <Head>
        <title>Properties — Sterling &amp; Associates</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-3 mb-6" data-aos="fade-up">
            <div className="gold-line" />
            <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
              Real Estate Division
            </span>
          </div>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Premium <span className="text-gold-400">Property Listings</span>
          </h1>
          <p
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Every listing is backed by our legal team — title verified, contract
            ready, and fully vetted for your protection.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      </section>

      {/* Filter Tabs + Listings */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12" data-aos="fade-up">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-6 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                  activeFilter === f.value
                    ? "bg-navy-900 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-navy-900 hover:text-navy-900"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-gray-500 text-sm mb-8">
            Showing{" "}
            <span className="font-semibold text-navy-900">
              {filtered.length}
            </span>{" "}
            properties
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property, i) => (
              <PropertyCard
                key={property.address}
                property={{ ...property, image: `Listing Photo ${i + 1}` }}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20" data-aos="fade-up">
              <p className="text-gray-500 text-lg">
                No properties match this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto" data-aos="zoom-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Looking for Something Specific?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our real estate attorneys can source off-market properties and
            handle every legal detail of your transaction.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Our Real Estate Team
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
