import Head from "next/head";
import DealCard from "./components/DealCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const weeklyDeals = [
  {
    name: "Organic Bananas",
    image: "🍌",
    originalPrice: 2.49,
    salePrice: 1.49,
    unit: "per lb · organic",
  },
  {
    name: "Atlantic Salmon",
    image: "🐟",
    originalPrice: 12.99,
    salePrice: 8.99,
    unit: "per lb · fresh",
  },
  {
    name: "Sourdough Bread",
    image: "🍞",
    originalPrice: 5.49,
    salePrice: 3.99,
    unit: "per loaf · bakery",
  },
  {
    name: "Greek Yogurt",
    image: "🥛",
    originalPrice: 6.99,
    salePrice: 4.49,
    unit: "32 oz · plain",
  },
  {
    name: "Avocados (Hass)",
    image: "🥑",
    originalPrice: 1.99,
    salePrice: 0.99,
    unit: "each · ripe",
  },
  {
    name: "Chicken Breast",
    image: "🍗",
    originalPrice: 6.99,
    salePrice: 4.49,
    unit: "per lb · boneless",
  },
  {
    name: "Orange Juice",
    image: "🍊",
    originalPrice: 5.99,
    salePrice: 3.99,
    unit: "52 oz · fresh squeezed",
  },
  {
    name: "Dark Chocolate",
    image: "🍫",
    originalPrice: 4.99,
    salePrice: 2.99,
    unit: "3.5 oz · 72% cacao",
  },
  {
    name: "Quinoa Organic",
    image: "🌾",
    originalPrice: 7.99,
    salePrice: 5.49,
    unit: "16 oz · organic",
  },
  {
    name: "Frozen Berries",
    image: "🫐",
    originalPrice: 5.99,
    salePrice: 3.49,
    unit: "12 oz · mixed blend",
  },
  {
    name: "Sparkling Water",
    image: "💧",
    originalPrice: 5.99,
    salePrice: 3.99,
    unit: "12-pack · variety",
  },
  {
    name: "Granola Bars",
    image: "🥜",
    originalPrice: 5.49,
    salePrice: 3.29,
    unit: "6-pack · oat & honey",
  },
];

export default function Deals() {
  return (
    <>
      <Head>
        <title>Weekly Deals — FreshMart Grocery</title>
        <meta
          name="description"
          content="This week's best grocery deals at FreshMart — save up to 50% on fresh produce, meats, and pantry staples."
        />
      </Head>

      <Header />

      {/* Page header */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold mb-2" data-aos="fade-up">
          Weekly Specials 🔥
        </h1>
        <p
          className="text-white/80 mb-6"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Save big this week — deals expire Sunday at midnight!
        </p>

        {/* Countdown placeholder */}
        <div
          className="inline-flex gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          {[
            { val: "03", label: "Days" },
            { val: "14", label: "Hours" },
            { val: "27", label: "Mins" },
            { val: "52", label: "Secs" },
          ].map((t) => (
            <div key={t.label} className="text-center">
              <span className="block text-2xl font-extrabold">{t.val}</span>
              <span className="text-xs text-white/70">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Deals grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {weeklyDeals.map((d, i) => (
            <DealCard
              key={d.name}
              {...d}
              aos={
                i % 3 === 0
                  ? "fade-up"
                  : i % 3 === 1
                    ? "zoom-in"
                    : "slide-right"
              }
              aosDelay={String((i % 4) * 80)}
            />
          ))}
        </div>
      </section>

      {/* Promo banner */}
      <section
        className="bg-green-500 text-white py-12 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-2">Free Delivery 🚚</h2>
          <p className="text-white/80">
            On all orders over $50. Use code{" "}
            <span className="font-bold">FRESH50</span> at checkout.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
