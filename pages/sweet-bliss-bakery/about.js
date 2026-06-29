import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const milestones = [
  {
    year: "2015",
    event: "Sweet Bliss Bakery opens its doors in downtown Sugarville",
  },
  {
    year: "2017",
    event: 'Won "Best Custom Cake" at the State Baking Championship',
  },
  {
    year: "2019",
    event: "Expanded to a second location and hired 5 new bakers",
  },
  { year: "2021", event: "Launched our online ordering and delivery service" },
  {
    year: "2023",
    event: 'Named "Top 10 Bakeries in California" by Food & Flourish Magazine',
  },
  { year: "2024", event: "Celebrated our 10,000th custom cake order!" },
];

const values = [
  {
    emoji: "🌾",
    title: "Premium Ingredients",
    desc: "We source organic flour, Belgian chocolate, and fresh local dairy. No shortcuts, no substitutes.",
  },
  {
    emoji: "❤️",
    title: "Baked with Love",
    desc: "Every cake is handcrafted from scratch by our team. We pour our hearts into every layer.",
  },
  {
    emoji: "🎨",
    title: "Artistry in Every Detail",
    desc: "From hand-piped roses to sculpted fondant — each cake is a one-of-a-kind edible masterpiece.",
  },
  {
    emoji: "🌱",
    title: "Sustainable Practice",
    desc: "Eco-friendly packaging, minimal food waste, and partnerships with local farms and suppliers.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>
          About Us — Sweet Bliss Bakery | Our Story & Baking Philosophy
        </title>
        <meta
          name="description"
          content="Learn about Sweet Bliss Bakery — our story, head baker, baking philosophy, and what makes us the sweetest bakery in town since 2015."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-sweet text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blush/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-caramel/10 rounded-full blur-3xl" />
        <p className="section-subtitle relative z-10" data-aos="fade-up">
          Our Sweet Journey
        </p>
        <h1
          className="section-title text-5xl md:text-6xl relative z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Us
        </h1>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <p className="font-script text-2xl text-blush mb-3">Since 2015</p>
              <h2 className="font-display text-4xl text-chocolate mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-body text-chocolate/70 leading-relaxed">
                <p>
                  Sweet Bliss Bakery was born from a simple belief: everyone
                  deserves a cake that makes them feel special. What started as
                  weekend baking in a tiny home kitchen has grown into one of
                  Sugarville's most beloved bakeries.
                </p>
                <p>
                  Our founder, <strong>Elena Marchetti</strong>, left her
                  corporate job in 2015 to follow her passion for baking. Armed
                  with her grandmother's recipes, a stubborn spirit, and a whole
                  lot of butter, she opened the doors of Sweet Bliss with one
                  goal — to make every celebration a little sweeter.
                </p>
                <p>
                  Nine years later, we've baked over 10,000 cakes, served 2,000+
                  happy customers, and our team has grown to 12 talented bakers
                  who share the same passion. But the heart of Sweet Bliss
                  remains the same — handcrafted cakes made with love, premium
                  ingredients, and a sprinkle of magic.
                </p>
              </div>
            </div>

            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="aspect-square rounded-bakery bg-gradient-to-br from-blush-light to-frosting shadow-sweet-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-[100px] block">👩‍🍳</span>
                  <p className="font-display text-xl text-chocolate mt-4">
                    Elena Marchetti
                  </p>
                  <p className="font-script text-lg text-blush">
                    Founder & Head Baker
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-chocolate text-cream font-display text-sm px-6 py-3 rounded-full shadow-choco">
                🏆 Award Winning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head Baker Bio */}
      <section className="py-24 bg-cream">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <p className="section-subtitle">The Heart of Our Kitchen</p>
          <h2 className="section-title">Meet Elena</h2>
          <div className="mt-10 card-bakery p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blush to-blush-light flex items-center justify-center flex-shrink-0">
                <span className="text-6xl">👩‍🍳</span>
              </div>
              <div className="text-left">
                <p className="font-body text-chocolate/70 leading-relaxed">
                  "I believe every cake should be an experience — not just a
                  dessert. When someone cuts into a cake we've made, I want that
                  moment to feel like magic. That's why I personally taste-test
                  every recipe, source the finest ingredients, and make sure our
                  team never compromises on quality."
                </p>
                <p className="font-body text-chocolate/70 leading-relaxed mt-4">
                  Elena trained at Le Cordon Bleu in Paris and has 15+ years of
                  baking experience. Her specialty is wedding cakes, but her
                  true love is a perfectly baked croissant on a Sunday morning.
                  When she's not in the kitchen, she's probably experimenting
                  with new flavor combinations or teaching baking workshops at
                  the local community center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baking Philosophy / Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle" data-aos="fade-up">
            What We Stand For
          </p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Our Baking Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((val, i) => (
              <div
                key={val.title}
                className="card-bakery text-center"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <span className="text-5xl block mb-4">{val.emoji}</span>
                <h3 className="font-display text-lg text-chocolate mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-chocolate/60 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 gradient-choco">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-subtitle !text-blush/80" data-aos="fade-up">
            Our Journey
          </p>
          <h2
            className="section-title !text-cream"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Sweet Milestones
          </h2>

          <div className="mt-12 space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="flex items-start gap-6"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blush/20 flex items-center justify-center">
                  <span className="font-display text-blush text-sm">
                    {m.year}
                  </span>
                </div>
                <div className="pt-2">
                  <div className="w-3 h-3 bg-blush rounded-full -ml-[2.15rem] mb-3 ring-4 ring-chocolate" />
                  <p className="font-body text-cream/80">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
