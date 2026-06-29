import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectLink from "@/components/ProjectLink";

const featuredCakes = [
  {
    name: "Red Velvet Dream",
    price: "$55",
    emoji: "red_heart",
    desc: "Three layers of crimson heaven with cream cheese frosting",
  },
  {
    name: "Vanilla Rose Wedding Cake",
    price: "$450",
    emoji: "🌹",
    desc: "Five-tier masterpiece with delicate fondant roses",
  },
  {
    name: "Triple Chocolate Tower",
    price: "$75",
    emoji: "🍫",
    desc: "Dark, milk & white chocolate — pure indulgence",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    text: "They made the most beautiful wedding cake — our guests are still talking about it!",
    stars: 5,
  },
  {
    name: "James T.",
    text: "My daughter's birthday cupcakes were absolute perfection. Ordering again!",
    stars: 5,
  },
  {
    name: "Maria L.",
    text: "The Red Velvet Dream is hands down the best cake I've ever tasted. Pure bliss.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sweet Bliss Bakery — Custom Cakes & Pastries | Est. 2015</title>
        <meta
          name="description"
          content="Sweet Bliss Bakery crafts custom cakes, cupcakes, and pastries for every celebration. Wedding cakes, birthday cakes, and sweet treats made with love since 2015."
        />
      </Head>

      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center gradient-sweet overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blush/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blush/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-caramel/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Copy */}
            <div data-aos="fade-right">
              <p className="font-script text-2xl text-blush mb-4">
                ✨ Est. 2015
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-chocolate leading-tight mb-6">
                Where Every
                <span className="block text-gradient">Slice Tells</span>
                <span className="block">a Story</span>
              </h1>
              <p className="font-body text-lg text-chocolate/70 mb-8 max-w-lg leading-relaxed">
                Handcrafted cakes and pastries baked with love for your sweetest
                celebrations. From intimate gatherings to grand weddings — we
                make every moment delicious.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ProjectLink href="/menu" className="btn-choco text-center">
                  Explore Our Menu 🎂
                </ProjectLink>
                <ProjectLink href="/contact" className="btn-sweet text-center">
                  Order Custom Cake 🧁
                </ProjectLink>
              </div>
            </div>

            {/* Right — Hero visual */}
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-bakery bg-white shadow-sweet-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <span className="text-[120px] block animate-float">🎂</span>
                    <p className="font-display text-2xl text-chocolate mt-4">
                      Fresh Daily
                    </p>
                    <p className="font-script text-xl text-blush">
                      Baked with Love 💕
                    </p>
                  </div>
                </div>
                {/* Floating badges */}
                <div
                  className="absolute -top-4 -right-4 bg-chocolate text-cream font-display text-sm px-5 py-3 rounded-full shadow-choco animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  🏆 #1 Rated
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-blush text-chocolate-dark font-display text-sm px-5 py-3 rounded-full shadow-sweet animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  🍰 10K+ Cakes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CAKES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle" data-aos="fade-up">
            Our Sweetest Creations
          </p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Featured Cakes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredCakes.map((cake, i) => (
              <div
                key={cake.name}
                className="card-bakery group text-center"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="h-48 -mx-6 -mt-6 mb-5 rounded-t-bakery bg-gradient-to-br from-blush-light to-frosting flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                    {cake.emoji === "red_heart" ? "❤️" : cake.emoji}
                  </span>
                </div>
                <h3 className="font-display text-xl text-chocolate mb-2">
                  {cake.name}
                </h3>
                <p className="font-body text-chocolate/60 text-sm mb-4">
                  {cake.desc}
                </p>
                <p className="font-display text-2xl text-blush">{cake.price}</p>
                <ProjectLink
                  href="/menu"
                  className="inline-block mt-4 btn-sweet text-sm py-2 px-6"
                >
                  View Details
                </ProjectLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-16 gradient-choco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10+", label: "Years of Sweetness" },
              { num: "10K+", label: "Cakes Baked" },
              { num: "2K+", label: "Happy Customers" },
              { num: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={stat.label} data-aos="zoom-in" data-aos-delay={i * 100}>
                <p className="font-display text-4xl md:text-5xl text-blush mb-2">
                  {stat.num}
                </p>
                <p className="font-body text-cream/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle" data-aos="fade-up">
            What They Say
          </p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Sweet Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className="card-bakery relative"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="text-5xl text-blush/30 font-display absolute top-4 right-6">
                  "
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <span key={s} className="text-caramel text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="font-body text-chocolate/70 text-sm leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <p className="font-display text-chocolate text-sm">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-sweet relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-10" />
        <div
          className="max-w-3xl mx-auto px-4 text-center relative z-10"
          data-aos="zoom-in"
        >
          <span className="text-6xl block mb-6">🎂</span>
          <h2 className="font-display text-4xl md:text-5xl text-chocolate mb-6">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="font-body text-chocolate/70 text-lg mb-8 max-w-xl mx-auto">
            Tell us your vision and we'll bring it to life. Custom orders,
            wedding cakes, birthday treats — no dream is too sweet.
          </p>
          <ProjectLink
            href="/contact"
            className="btn-choco inline-block text-xl px-12 py-4"
          >
            Start Your Order 💌
          </ProjectLink>
        </div>
      </section>

      <Footer />
    </>
  );
}
