import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GalleryCard from "./components/GalleryCard";

const galleryItems = [
  {
    emoji: "🌹",
    caption: "Rose Garden Wedding Cake",
    description:
      "Five-tier vanilla with fondant roses — the Martinez wedding, June 2024",
  },
  {
    emoji: "🍫",
    caption: "Triple Chocolate Tower",
    description: "Dark, milk & white chocolate layers with ganache drip",
  },
  {
    emoji: "🦋",
    caption: "Butterfly Dream Cake",
    description: "Whimsical children's cake with handcrafted sugar butterflies",
  },
  {
    emoji: "🎂",
    caption: "Classic Birthday Celebration",
    description:
      "Funfetti layers with rainbow buttercream — 8th birthday special",
  },
  {
    emoji: "🌸",
    caption: "Cherry Blossom Tower",
    description: "Japanese-inspired wedding cake with delicate sugar blossoms",
  },
  {
    emoji: "🗼",
    caption: "Macaron Tower (50 pcs)",
    description:
      "Assorted flavors in custom pastel palette for corporate event",
  },
  {
    emoji: "🧁",
    caption: "Cupcake Wall Display",
    description: "200 cupcakes arranged in an ombré gradient for a baby shower",
  },
  {
    emoji: "🎨",
    caption: "Abstract Art Cake",
    description:
      "Modern buttercream palette knife design — gallery opening centerpiece",
  },
  {
    emoji: "👑",
    caption: "Princess Castle Cake",
    description:
      "Three-tier castle with turrets, flags, and a sugar glass slipper",
  },
  {
    emoji: "🍋",
    caption: "Lemon Raspberry Elegant",
    description: "Smooth fondant with hand-painted watercolor floral design",
  },
  {
    emoji: "🎄",
    caption: "Holiday Gingerbread Tower",
    description: "Festive gingerbread house cake with royal icing snow details",
  },
  {
    emoji: "💍",
    caption: "Engagement Ring Cake",
    description: "Single-tier showpiece with edible diamond ring topper",
  },
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>
          Gallery — Sweet Bliss Bakery | Cake Inspiration & Portfolio
        </title>
        <meta
          name="description"
          content="Browse our gallery of handcrafted cakes, cupcakes, and pastries. Wedding cakes, birthday celebrations, and custom designs from Sweet Bliss Bakery."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-sweet text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-5" />
        <p className="section-subtitle relative z-10" data-aos="fade-up">
          A Feast for the Eyes
        </p>
        <h1
          className="section-title text-5xl md:text-6xl relative z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Gallery
        </h1>
        <p
          className="font-body text-chocolate/60 max-w-xl mx-auto mt-4 px-4 relative z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Every cake is a work of art. Here are some of our favorites from the
          past year.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, i) => (
              <div
                key={item.caption}
                className="break-inside-avoid"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <GalleryCard item={item} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4" data-aos="zoom-in">
          <span className="text-6xl block mb-6">📸</span>
          <h2 className="font-display text-3xl text-chocolate mb-4">
            Love What You See?
          </h2>
          <p className="font-body text-chocolate/60 mb-8">
            Every cake in our gallery started with a conversation. Let's start
            yours.
          </p>
          <a href="/contact" className="btn-choco inline-block">
            Design Your Dream Cake 🎨
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
