import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuCard from "./components/MenuCard";
import { useState } from "react";

const categories = [
  "All",
  "Wedding Cakes",
  "Birthday Cakes",
  "Cupcakes",
  "Pastries",
  "Custom Orders",
];

const menuItems = [
  // Wedding Cakes
  {
    name: "Vanilla Rose Wedding Cake",
    category: "Wedding Cakes",
    price: "$450",
    emoji: "🌹",
    description:
      "Five-tier vanilla sponge with rose-infused buttercream, adorned with handcrafted fondant roses and gold leaf accents.",
    popular: true,
  },
  {
    name: "Enchanted Garden Cake",
    category: "Wedding Cakes",
    price: "$380",
    emoji: "🌸",
    description:
      "Three-tier pistachio and raspberry cake with cascading sugar flowers and edible greenery.",
  },
  {
    name: "Classic Elegance",
    category: "Wedding Cakes",
    price: "$500",
    emoji: "💎",
    description:
      "Six-tier masterpiece with smooth white fondant, pearl detailing, and a delicate sugar lace overlay.",
  },

  // Birthday Cakes
  {
    name: "Red Velvet Dream",
    category: "Birthday Cakes",
    price: "$55",
    emoji: "❤️",
    description:
      "Three layers of crimson velvet with tangy cream cheese frosting and white chocolate shavings.",
    popular: true,
  },
  {
    name: "Triple Chocolate Tower",
    category: "Birthday Cakes",
    price: "$75",
    emoji: "🍫",
    description:
      "Dark chocolate ganache, milk chocolate mousse, white chocolate sponge — the ultimate chocolate lover's dream.",
  },
  {
    name: "Rainbow Explosion",
    category: "Birthday Cakes",
    price: "$65",
    emoji: "🌈",
    description:
      "Six colorful layers of vanilla sponge with swiss meringue buttercream in every color of the rainbow.",
  },
  {
    name: "Funfetti Celebration",
    category: "Birthday Cakes",
    price: "$45",
    emoji: "🎉",
    description:
      "Classic vanilla funfetti cake loaded with rainbow sprinkles and topped with cloud-like frosting.",
  },

  // Cupcakes
  {
    name: "Salted Caramel Cupcakes (6-pack)",
    category: "Cupcakes",
    price: "$24",
    emoji: "🧂",
    description:
      "Moist vanilla cupcakes with salted caramel buttercream and a drizzle of house-made caramel.",
  },
  {
    name: "Strawberry Shortcake Bites (12-pack)",
    category: "Cupcakes",
    price: "$36",
    emoji: "🍓",
    description:
      "Delicate sponge filled with fresh strawberry compote and topped with whipped cream frosting.",
  },
  {
    name: "Midnight Chocolate Cupcakes (6-pack)",
    category: "Cupcakes",
    price: "$27",
    emoji: "🌙",
    description:
      "Rich dark chocolate cupcakes with espresso ganache and a single dark chocolate curl.",
    popular: true,
  },

  // Pastries
  {
    name: "Butter Croissant (2-pack)",
    category: "Pastries",
    price: "$8",
    emoji: "🥐",
    description:
      "Flaky, golden French croissants with 48-hour fermented dough and European butter.",
  },
  {
    name: "Raspberry Danish",
    category: "Pastries",
    price: "$6",
    emoji: "🥧",
    description:
      "Buttery puff pastry with vanilla custard, fresh raspberries, and a light glaze.",
  },
  {
    name: "Cinnamon Roll Supreme",
    category: "Pastries",
    price: "$7",
    emoji: "🌀",
    description:
      "Oversized cinnamon roll with swirls of brown sugar and cream cheese icing.",
  },
  {
    name: "Lemon Tart",
    category: "Pastries",
    price: "$9",
    emoji: "🍋",
    description:
      "Buttery shortcrust filled with silky lemon curd, topped with torched meringue peaks.",
  },

  // Custom Orders
  {
    name: "Custom Tier Cake (per tier)",
    category: "Custom Orders",
    price: "$120+",
    emoji: "✨",
    description:
      "Design your dream cake from scratch. Flavors, colors, themes — we bring your vision to life.",
  },
  {
    name: "Character Cake",
    category: "Custom Orders",
    price: "$95",
    emoji: "🎨",
    description:
      "3D sculpted character cake for themed parties. From superheroes to Disney princesses.",
  },
  {
    name: "Macaron Tower (50 pcs)",
    category: "Custom Orders",
    price: "$85",
    emoji: "🗼",
    description:
      "Stunning tower of French macarons in your choice of flavors and custom color palette.",
    popular: true,
  },
  {
    name: "Dessert Table Package",
    category: "Custom Orders",
    price: "$350",
    emoji: "🍰",
    description:
      "Complete dessert spread: cupcakes, cookies, cake pops, mini tarts, and a centerpiece cake.",
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Head>
        <title>Menu — Sweet Bliss Bakery | Cakes, Cupcakes & Pastries</title>
        <meta
          name="description"
          content="Browse our full menu of wedding cakes, birthday cakes, cupcakes, pastries, and custom orders. Real prices, real delicious."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-sweet text-center">
        <p className="section-subtitle" data-aos="fade-up">
          Everything We Bake
        </p>
        <h1
          className="section-title text-5xl md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Menu
        </h1>
        <p
          className="font-body text-chocolate/60 max-w-xl mx-auto mt-4 px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From everyday treats to show-stopping celebration cakes — every item
          is made fresh with premium ingredients.
        </p>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-blush/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-chocolate text-cream shadow-choco"
                    : "bg-blush/20 text-chocolate hover:bg-blush/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🧁</span>
              <p className="font-display text-xl text-chocolate/50">
                No items in this category yet!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4" data-aos="fade-up">
          <span className="text-5xl block mb-4">💌</span>
          <h2 className="font-display text-3xl text-chocolate mb-4">
            Don't See What You Want?
          </h2>
          <p className="font-body text-chocolate/60 mb-8">
            We love custom orders! Tell us your dream cake and we'll make it
            happen.
          </p>
          <a href="/contact" className="btn-choco inline-block">
            Request Custom Order
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
