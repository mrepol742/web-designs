import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

const products = [
  {
    name: "Ceramic Brake Pads",
    description:
      "High-performance ceramic compound, low dust, quiet operation.",
    price: 49.99,
    badge: "Best Seller",
    partNumber: "TM-BP-4421",
    compat: ["Honda", "Toyota", "Ford"],
    category: "brakes",
  },
  {
    name: "Synthetic Oil Filter",
    description:
      "Premium synthetic media, 99% filtration efficiency, 10K mile rating.",
    price: 12.99,
    badge: null,
    partNumber: "TM-OF-7783",
    compat: ["Universal", "Most Vehicles"],
    category: "engine",
  },
  {
    name: "Iridium Spark Plugs (Set/4)",
    description:
      "Fine-wire iridium tip for maximum spark. Improved fuel economy.",
    price: 34.99,
    badge: "New",
    partNumber: "TM-SP-2290",
    compat: ["Nissan", "Subaru", "Mazda"],
    category: "engine",
  },
  {
    name: "Performance Air Filter",
    description:
      "Washable high-flow filter. +15% airflow vs stock. Lifetime reusable.",
    price: 59.99,
    badge: null,
    partNumber: "TM-AF-6612",
    compat: ["Universal Fit"],
    category: "performance",
  },
  {
    name: "AGM Battery 750 CCA",
    description: "Absorbent glass mat. 3-year warranty. Extreme weather ready.",
    price: 189.99,
    badge: "Top Rated",
    partNumber: "TM-BT-1100",
    compat: ["Most Cars", "Trucks"],
    category: "engine",
  },
  {
    name: "Cat-Back Exhaust System",
    description:
      "304 stainless steel, mandrel-bent pipes. Deep aggressive tone.",
    price: 549.99,
    badge: "Pro",
    partNumber: "TM-EX-3350",
    compat: ["Mustang GT", "Camaro SS", "Challenger"],
    category: "performance",
  },
  {
    name: "Cold Air Intake Kit",
    description:
      "Dyno-tested +12 HP gains. Heat shield included. Easy bolt-on install.",
    price: 249.99,
    badge: null,
    partNumber: "TM-CAI-8820",
    compat: ["F-150", "Silverado", "RAM 1500"],
    category: "performance",
  },
  {
    name: "LED Headlight Conversion Kit",
    description: "6000K pure white, 12000 lumens. Plug-and-play. DOT approved.",
    price: 89.99,
    badge: "Hot",
    partNumber: "TM-LH-5500",
    compat: ["H11", "9005", "H13"],
    category: "lighting",
  },
];

const categories = [
  { key: "all", label: "All Parts" },
  { key: "brakes", label: "Brakes" },
  { key: "engine", label: "Engine" },
  { key: "performance", label: "Performance" },
  { key: "lighting", label: "Lighting" },
];

export default function Shop() {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <Head>
        <title>Shop Parts — TurboMax Auto Parts</title>
      </Head>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gunmetal-600 bg-hex-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              data-aos="fade-up"
              className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2"
            >
              50,000+ Parts in Stock
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-5xl font-heading uppercase tracking-wider"
            >
              The <span className="text-neon">Shop</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-steel mt-3 max-w-xl"
            >
              Premium parts from trusted brands. Same-day pickup available for
              in-stock items.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-gunmetal-100 sticky top-20 z-40 bg-gunmetal/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm whitespace-nowrap transition-all ${
                    filter === cat.key
                      ? "bg-neon text-black"
                      : "bg-gunmetal-100 text-steel hover:text-neon"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.partNumber} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-steel text-lg">
                  No parts found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
