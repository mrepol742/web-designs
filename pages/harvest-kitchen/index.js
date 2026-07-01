import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const featuredDishes = [
  {
    name: "Green Goddess Smoothie",
    desc: "Spinach, mango, banana, chia seeds & coconut water",
    price: "$8.95",
    emoji: "🥤",
  },
  {
    name: "Quinoa Power Bowl",
    desc: "Organic quinoa, roasted veggies, tahini dressing, avocado",
    price: "$12.50",
    emoji: "🥗",
  },
  {
    name: "Wild Mushroom Toast",
    desc: "Sourdough, sautéed mushrooms, truffle oil, microgreens",
    price: "$11.00",
    emoji: "🍄",
  },
  {
    name: "Cold-Pressed Citrus Sunrise",
    desc: "Orange, grapefruit, carrot, turmeric & ginger",
    price: "$7.50",
    emoji: "🍊",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    text: "Best organic café in Portland! The quinoa bowl is unreal.",
    stars: 5,
  },
  {
    name: "James K.",
    text: "Everything tastes so fresh. You can tell they source locally.",
    stars: 5,
  },
  {
    name: "Lina R.",
    text: "The green smoothie changed my mornings forever. 10/10.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Harvest Kitchen — Farm to Table Goodness</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-green-500 to-wood-500 overflow-hidden">
        {/* Background leaf pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 100 Q200 50 150 200 Q100 300 200 250 Q300 200 100 100Z"
              fill="white"
            />
            <path
              d="M600 400 Q700 350 650 500 Q600 600 700 550 Q800 500 600 400Z"
              fill="white"
            />
            <path
              d="M400 50 Q500 0 450 150 Q400 250 500 200 Q600 150 400 50Z"
              fill="white"
            />
            <path
              d="M50 450 Q150 400 100 550 Q50 650 150 600 Q250 550 50 450Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="100">
            <span className="inline-block text-6xl mb-4">🌿</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Farm to Table
              <br />
              Goodness
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Organic meals, cold-pressed juices & seasonal smoothies — sourced
              from local farms, crafted with care.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/menu"
              className="px-8 py-3 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition shadow-lg text-lg"
            >
              View Our Menu
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition text-lg"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              data-aos="fade-up"
              className="font-serif text-3xl md:text-4xl font-bold text-green-700 mb-3"
            >
              Today's Harvest Picks
            </h2>
            <div
              className="leaf-divider max-w-xs mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="text-green-500 text-xl">🍃</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, i) => (
              <div
                key={dish.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-xl p-6 shadow-sm border border-green-100 text-center menu-card"
              >
                <span className="text-4xl block mb-3">{dish.emoji}</span>
                <h3 className="font-serif font-bold text-green-700 text-lg">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {dish.desc}
                </p>
                <p className="mt-4 font-bold text-wood-500 text-lg">
                  {dish.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="bg-green-200 rounded-2xl aspect-square flex items-center justify-center shadow-inner">
              <span className="text-8xl">🧑‍🌾</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="font-serif text-3xl font-bold text-green-700 mb-4">
              Rooted in the Community
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We partner with 12+ local farms within 50 miles of Portland. Every
              dish starts with ingredients picked at peak freshness — no
              shortcuts, no compromises.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From our cold-pressed juices to our seasonal bowls, we let the
              harvest guide our menu.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-2 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            data-aos="fade-up"
            className="font-serif text-3xl md:text-4xl font-bold text-green-700 text-center mb-12"
          >
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="bg-white rounded-xl p-6 shadow-sm border border-green-100"
              >
                <div className="text-amber-400 mb-2">{"★".repeat(r.stars)}</div>
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  "{r.text}"
                </p>
                <p className="font-bold text-green-700 text-sm">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Banner */}
      <section className="py-12 bg-wood-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="font-serif text-2xl font-bold mb-4">
            📍 Visit Harvest Kitchen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-bold text-green-200">Weekdays</p>
              <p>7:00 AM – 8:00 PM</p>
            </div>
            <div>
              <p className="font-bold text-green-200">Saturday</p>
              <p>8:00 AM – 9:00 PM</p>
            </div>
            <div>
              <p className="font-bold text-green-200">Sunday</p>
              <p>8:00 AM – 6:00 PM</p>
            </div>
          </div>
          <p className="mt-4 text-green-200 text-sm">
            42 Orchard Lane, Portland, OR 97205
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
