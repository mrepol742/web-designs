import Head from "next/head";
import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import DealCard from "./components/DealCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const categories = [
  { icon: "🍎", title: "Fruits & Vegetables", itemCount: 120 },
  { icon: "🥛", title: "Dairy & Eggs", itemCount: 48 },
  { icon: "🥩", title: "Meat & Seafood", itemCount: 64 },
  { icon: "🍞", title: "Bakery", itemCount: 36 },
  { icon: "🥤", title: "Beverages", itemCount: 85 },
  { icon: "🍿", title: "Snacks", itemCount: 92 },
];

const deals = [
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
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "FreshMart has the freshest produce in town! I've been shopping here for 5 years and never disappointed.",
    stars: 5,
  },
  {
    name: "David L.",
    text: "The weekly deals are unbeatable. Saved over $50 last month on my grocery haul.",
    stars: 5,
  },
  {
    name: "Priya K.",
    text: "Love the organic selection and the staff is always so friendly. My go-to grocery store!",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>FreshMart Grocery — Fresh to Your Door</title>
        <meta
          name="description"
          content="FreshMart Grocery — farm-fresh groceries delivered to your door. Since 2010."
        />
      </Head>

      <Header />

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🍊</div>
          <div className="absolute bottom-10 right-10 text-9xl">🥬</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem]">
            🍎
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 text-center">
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            data-aos="fade-up"
          >
            Fresh to Your Door 🚚
          </h1>
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Farm-fresh produce, pantry staples, and daily essentials — delivered
            with a smile since 2010.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link
              href="/categories"
              className="bg-white text-orange-500 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              Shop Now 🛒
            </Link>
            <Link
              href="/deals"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              View Deals 🔥
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-3xl font-extrabold text-center mb-3"
          data-aos="fade-up"
        >
          Shop by Category
        </h2>
        <p
          className="text-gray-500 text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Everything you need, organized for convenience
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c, i) => (
            <CategoryCard
              key={c.title}
              {...c}
              aos="fade-up"
              aosDelay={String(i * 80)}
            />
          ))}
        </div>
      </section>

      {/* ─── DAILY DEALS ─── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-center mb-3"
            data-aos="fade-up"
          >
            Today&apos;s Best Deals 🔥
          </h2>
          <p
            className="text-gray-500 text-center mb-10"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Limited-time offers — grab them before they&apos;re gone!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((d, i) => (
              <DealCard
                key={d.name}
                {...d}
                aos="zoom-in"
                aosDelay={String(i * 100)}
              />
            ))}
          </div>
          <div className="text-center mt-10" data-aos="fade-up">
            <Link
              href="/deals"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              See All Deals →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-3xl font-extrabold text-center mb-10"
          data-aos="fade-up"
        >
          What Our Customers Say 💬
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-aos="slide-right"
              data-aos-delay={String(i * 120)}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="text-orange-500 text-lg mb-2">
                {"⭐".repeat(t.stars)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-bold text-gray-800 text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        className="bg-gradient-to-r from-green-500 to-orange-500 text-white py-16 text-center"
        data-aos="zoom-in"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Freshness You Can Trust 🌿
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Over 500 products sourced from local farms. Free delivery on orders
            over $50.
          </p>
          <Link
            href="/about"
            className="inline-flex bg-white text-green-600 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            Our Story →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
