import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProjectLink from "@/components/ProjectLink";

const featuredProducts = [
  {
    name: "Aged Manchego DOP",
    origin: "Spain",
    weight: "200g",
    price: 24.99,
    emoji: "🧀",
    badge: "Staff Pick",
    description:
      "12-month aged sheep's milk cheese from La Mancha, nutty and buttery with caramel notes.",
  },
  {
    name: "Truffle Pecorino",
    origin: "Italy",
    weight: "150g",
    price: 32.5,
    emoji: "🧀",
    badge: "New Arrival",
    description:
      "Creamy Pecorino Toscano infused with black winter truffles from Umbria.",
  },
  {
    name: "Saffron Risotto Rice",
    origin: "Italy",
    weight: "500g",
    price: 18.75,
    emoji: "🍚",
    description:
      "Carnaroli rice from the Po Valley paired with genuine saffron threads.",
  },
  {
    name: "Aged Balsamic Tradizionale",
    origin: "Italy",
    weight: "100ml",
    price: 45.0,
    emoji: "🫒",
    badge: "Premium",
    description:
      "DOP certified 12-year aged balsamic from Modena. Dense, complex, unforgettable.",
  },
];

const chefRecommendations = [
  {
    name: "Ibérico Bellota Ham",
    origin: "Spain",
    price: 89.0,
    emoji: "🥩",
    description:
      "Free-range acorn-fed Ibérico pork, hand-carved. The pinnacle of charcuterie.",
  },
  {
    name: "White Truffle Oil",
    origin: "Italy",
    price: 38.5,
    emoji: "🫒",
    description:
      "Cold-pressed extra virgin olive oil with real white truffle essence from Alba.",
  },
  {
    name: "Single Origin Dark Chocolate",
    origin: "Ecuador",
    price: 14.99,
    emoji: "🍫",
    description:
      "72% Arriba Nacional cacao. Deep fruit notes with a clean, lingering finish.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>The Pantry — Curated Gourmet Since 2018</title>
        <meta
          name="description"
          content="The Pantry is a gourmet food shop offering artisan cheeses, charcuterie, imported olive oils, specialty sauces, and more."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-800 via-burgundy-900 to-burgundy-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <span className="inline-block text-gold text-sm uppercase tracking-[4px] mb-6 border border-gold/30 px-4 py-2 rounded-full">
                Est. 2018 &bull; Brooklyn, NY
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6">
                Taste the
                <span className="block text-gold italic">Difference</span>
              </h1>
              <p className="text-cream/70 text-lg leading-relaxed mb-8 max-w-lg">
                We travel the world to bring you extraordinary flavors — from
                small-batch artisan producers who pour their hearts into every
                bite. This is food worth savoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <ProjectLink
                  href="/shop"
                  className="px-8 py-4 bg-gold text-burgundy-800 font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 text-sm"
                >
                  Explore the Shop
                </ProjectLink>
                <ProjectLink
                  href="/events"
                  className="px-8 py-4 border-2 border-cream/30 text-cream font-bold uppercase tracking-wider rounded hover:border-gold hover:text-gold transition-all duration-300 text-sm"
                >
                  Upcoming Events
                </ProjectLink>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="hidden md:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                  <div className="w-64 h-64 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🧀</div>
                      <div className="font-display text-gold text-xl font-semibold">
                        Curated Finds
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-burgundy-800 border border-gold/30 rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-gold font-display text-sm font-semibold">
                    200+ Artisan Products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Strip */}
      <section className="bg-burgundy-800 py-8 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-8 md:justify-center whitespace-nowrap">
            {[
              { emoji: "🧀", label: "Cheeses" },
              { emoji: "🥩", label: "Charcuterie" },
              { emoji: "🫒", label: "Olive Oils" },
              { emoji: "🍝", label: "Pasta" },
              { emoji: "🍫", label: "Chocolate" },
              { emoji: "🍶", label: "Sauces" },
            ].map((cat, i) => (
              <ProjectLink
                key={cat.label}
                href="/shop"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors group"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">
                  {cat.emoji}
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold">
                  {cat.label}
                </span>
              </ProjectLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-dark text-sm uppercase tracking-[4px] font-semibold">
            Hand-Selected
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy-800 mt-3 mb-4">
            Featured Products
          </h2>
          <p className="text-burgundy-800/60 max-w-2xl mx-auto">
            Every item in our shop has been tasted, approved, and loved by our
            team. These are the ones we can&apos;t stop talking about.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.name} product={product} aos="fade-up" />
          ))}
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="bg-burgundy-800 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in">
            <span className="text-gold text-sm uppercase tracking-[4px]">
              Our Promise
            </span>
            <blockquote className="font-display text-3xl md:text-4xl text-cream italic mt-6 mb-8 leading-relaxed">
              &ldquo;We believe that extraordinary food doesn&apos;t just feed
              you — it connects you to a place, a tradition, a story worth
              sharing.&rdquo;
            </blockquote>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gold font-semibold text-lg">Elena Marchetti</p>
            <p className="text-cream/50 text-sm uppercase tracking-widest">
              Founder &amp; Head Curator
            </p>
          </div>
        </div>
      </section>

      {/* Chef Recommendations */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-dark text-sm uppercase tracking-[4px] font-semibold">
            Chef&apos;s Corner
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy-800 mt-3 mb-4">
            Chef Recommendations
          </h2>
          <p className="text-burgundy-800/60 max-w-2xl mx-auto">
            Our resident chef shares personal favorites — the ingredients she
            reaches for when cooking at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefRecommendations.map((rec, i) => (
            <div
              key={rec.name}
              data-aos="flip-up"
              data-aos-delay={i * 150}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gold/10 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {rec.emoji}
              </div>
              <span className="text-[11px] uppercase tracking-wider text-gold-dark font-semibold">
                {rec.origin}
              </span>
              <h3 className="font-display text-xl font-bold text-burgundy-800 mt-2 mb-3">
                {rec.name}
              </h3>
              <p className="text-sm text-burgundy-800/60 mb-4 leading-relaxed">
                {rec.description}
              </p>
              <span className="text-xl font-bold text-burgundy-800">
                ${rec.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-cream to-cream-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div data-aos="fade-up">
            <span className="text-gold-dark text-sm uppercase tracking-[4px] font-semibold">
              Stay Connected
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy-800 mt-3 mb-4">
              Join the Pantry
              <span className="text-gold italic"> Newsletter</span>
            </h2>
            <p className="text-burgundy-800/60 mb-8 max-w-xl mx-auto">
              Be the first to know about new arrivals, exclusive events, and
              seasonal specials. Plus, get 10% off your first order.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white border border-gold/30 rounded-lg text-burgundy-800 placeholder:text-burgundy-800/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <button className="px-8 py-4 bg-burgundy-800 text-cream font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold hover:text-burgundy-800 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-burgundy-800/40 mt-4">
              No spam. Just great food stories. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
