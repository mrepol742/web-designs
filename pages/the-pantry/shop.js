import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

const categories = [
  "All",
  "Artisan Cheeses",
  "Charcuterie",
  "Imported Olive Oils",
  "Specialty Sauces",
  "Gourmet Pasta",
  "Chocolate & Sweets",
];

const products = [
  // Artisan Cheeses
  {
    name: "Aged Manchego DOP",
    origin: "Spain",
    weight: "200g",
    price: 24.99,
    emoji: "🧀",
    category: "Artisan Cheeses",
    badge: "Staff Pick",
    description:
      "12-month aged sheep's milk cheese from La Mancha with nutty, buttery depth.",
  },
  {
    name: "Truffle Pecorino",
    origin: "Italy",
    weight: "150g",
    price: 32.5,
    emoji: "🧀",
    category: "Artisan Cheeses",
    badge: "New",
    description:
      "Creamy Pecorino Toscano studded with black winter truffles from Umbria.",
  },
  {
    name: "Comté Réserve",
    origin: "France",
    weight: "250g",
    price: 28.0,
    emoji: "🧀",
    category: "Artisan Cheeses",
    description:
      "18-month aged Gruyère-family cheese from Jura. Caramel and hazelnut notes.",
  },
  {
    name: "Gorgonzola Dolce DOP",
    origin: "Italy",
    weight: "175g",
    price: 22.5,
    emoji: "🧀",
    category: "Artisan Cheeses",
    description: "Creamy, mild blue cheese. Perfect with honey and walnuts.",
  },
  {
    name: "Époisses de Bourgogne",
    origin: "France",
    weight: "120g",
    price: 26.0,
    emoji: "🧀",
    category: "Artisan Cheeses",
    badge: "Chef's Pick",
    description:
      "Washed-rind monastery cheese soaked in Marc de Bourgogne. Intensely aromatic.",
  },

  // Charcuterie
  {
    name: "Ibérico Bellota Ham",
    origin: "Spain",
    weight: "100g sliced",
    price: 45.0,
    emoji: "🥩",
    category: "Charcuterie",
    badge: "Premium",
    description:
      "Free-range acorn-fed Ibérico pork, hand-carved. The pinnacle of cured meats.",
  },
  {
    name: "Bresaola della Valtellina",
    origin: "Italy",
    weight: "100g",
    price: 18.5,
    emoji: "🥩",
    category: "Charcuterie",
    description:
      "Air-dried lean beef seasoned with juniper, cinnamon, and bay leaf.",
  },
  {
    name: "Duck Rillettes",
    origin: "France",
    weight: "180g jar",
    price: 16.75,
    emoji: "🦆",
    category: "Charcuterie",
    description:
      "Slow-cooked duck leg spread. Rich, silky, perfect with crusty bread.",
  },
  {
    name: "Nduja di Spilinga",
    origin: "Italy",
    weight: "150g",
    price: 14.5,
    emoji: "🌶️",
    category: "Charcuterie",
    description:
      "Spicy, spreadable Calabrian salami. Smoky heat that transforms everything.",
  },

  // Imported Olive Oils
  {
    name: "Aged Balsamic Tradizionale DOP",
    origin: "Italy",
    weight: "100ml",
    price: 45.0,
    emoji: "🫒",
    category: "Imported Olive Oils",
    badge: "Premium",
    description:
      "12-year aged balsamic from Modena. Dense, complex, unforgettable.",
  },
  {
    name: "Koroneiki Extra Virgin",
    origin: "Greece",
    weight: "500ml",
    price: 22.0,
    emoji: "🫒",
    category: "Imported Olive Oils",
    badge: "Best Seller",
    description:
      "First cold-pressed from single-origin Koroneiki olives. Peppery and grassy.",
  },
  {
    name: "White Truffle Oil",
    origin: "Italy",
    weight: "250ml",
    price: 38.5,
    emoji: "🫒",
    category: "Imported Olive Oils",
    description:
      "Extra virgin olive oil infused with real white truffle from Alba.",
  },
  {
    name: "Arbequina Organic EVOO",
    origin: "Spain",
    weight: "500ml",
    price: 19.99,
    emoji: "🫒",
    category: "Imported Olive Oils",
    description:
      "Mild, buttery Catalan olive oil. Perfect for finishing and dipping.",
  },

  // Specialty Sauces
  {
    name: "San Marzano Tomato Sauce",
    origin: "Italy",
    weight: "400g",
    price: 8.99,
    emoji: "🍅",
    category: "Specialty Sauces",
    description:
      "DOP certified tomatoes from Campania. The only sauce for authentic pizza.",
  },
  {
    name: "Pesto alla Genovese DOP",
    origin: "Italy",
    weight: "130g jar",
    price: 12.5,
    emoji: "🌿",
    category: "Specialty Sauces",
    description:
      "Traditional Ligurian basil pesto with PDO basil, pine nuts, and Parmigiano.",
  },
  {
    name: "Chimichurri Criollo",
    origin: "Argentina",
    weight: "200ml",
    price: 11.0,
    emoji: "🌿",
    category: "Specialty Sauces",
    description:
      "Herbaceous parsley-garlic sauce with oregano and red wine vinegar.",
  },
  {
    name: "Szechuan Chili Crisp",
    origin: "China",
    weight: "250g",
    price: 13.5,
    emoji: "🌶️",
    category: "Specialty Sauces",
    badge: "Trending",
    description:
      "Crunchy, savory, spicy condiment. Elevates noodles, eggs, pizza, everything.",
  },

  // Gourmet Pasta
  {
    name: "Paccheri di Gragnano IGP",
    origin: "Italy",
    weight: "500g",
    price: 9.5,
    emoji: "🍝",
    category: "Gourmet Pasta",
    description:
      "Bronze-die extruded tubes from Italy's pasta capital. Holds sauce beautifully.",
  },
  {
    name: "Saffron Risotto Rice",
    origin: "Italy",
    weight: "500g",
    price: 18.75,
    emoji: "🍚",
    category: "Gourmet Pasta",
    description:
      "Carnaroli rice from the Po Valley with genuine saffron threads.",
  },
  {
    name: "Truffle Tagliatelle",
    origin: "Italy",
    weight: "300g",
    price: 14.0,
    emoji: "🍝",
    category: "Gourmet Pasta",
    badge: "Staff Pick",
    description:
      "Fresh egg pasta infused with black truffle. Ready in 3 minutes.",
  },
  {
    name: "Spaghetti alla Chitarra",
    origin: "Italy",
    weight: "400g",
    price: 8.5,
    emoji: "🍝",
    category: "Gourmet Pasta",
    description:
      "Square-cut Abruzzese spaghetti with a rough texture that grips sauce.",
  },

  // Chocolate & Sweets
  {
    name: "Single Origin Dark 72%",
    origin: "Ecuador",
    weight: "80g",
    price: 14.99,
    emoji: "🍫",
    category: "Chocolate & Sweets",
    badge: "Award Winner",
    description:
      "Arriba Nacional cacao. Deep fruit notes with a clean, lingering finish.",
  },
  {
    name: "Sicilian Pistachio Spread",
    origin: "Italy",
    weight: "200g jar",
    price: 24.0,
    emoji: "🥜",
    category: "Chocolate & Sweets",
    badge: "Best Seller",
    description:
      "100% Bronte pistachios. No palm oil, no sugar added. Pure green gold.",
  },
  {
    name: "Turkish Delight — Rose & Pistachio",
    origin: "Turkey",
    weight: "200g box",
    price: 16.5,
    emoji: "🍬",
    category: "Chocolate & Sweets",
    description:
      "Hand-cut lokum from Istanbul's oldest confectioner. Fragrant and delicate.",
  },
  {
    name: "French Caramels au Beurre Salé",
    origin: "France",
    weight: "150g box",
    price: 18.0,
    emoji: "🍬",
    category: "Chocolate & Sweets",
    description:
      "Brittany salted butter caramels. Chewy, rich, dangerously addictive.",
  },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Shop — The Pantry</title>
        <meta
          name="description"
          content="Browse our curated selection of artisan cheeses, charcuterie, olive oils, sauces, pasta, and chocolate."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-burgundy-800 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <span className="text-gold text-sm uppercase tracking-[4px]">
            Our Collection
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mt-3 mb-4">
            The <span className="text-gold italic">Shop</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Over 200 curated products from artisan producers worldwide. Every
            item tasted and approved by our team.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gold/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-burgundy-800 text-cream"
                    : "bg-cream text-burgundy-800/60 hover:bg-burgundy-100 hover:text-burgundy-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-burgundy-800/50">
            Showing{" "}
            <span className="font-bold text-burgundy-800">
              {filtered.length}
            </span>{" "}
            products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              aos={i % 2 === 0 ? "fade-up" : "zoom-in"}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-burgundy-800/50 text-lg">
              No products in this category yet.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
