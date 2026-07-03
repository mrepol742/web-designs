import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const milestones = [
  {
    year: "2018",
    title: "Founded",
    desc: "Elena Marchetti opens a 400 sq ft shop in Brooklyn with 30 hand-picked products.",
  },
  {
    year: "2019",
    title: "First Supplier Trip",
    desc: "Elena visits 12 producers across Italy and Spain, forging direct relationships.",
  },
  {
    year: "2020",
    title: "Online Launch",
    desc: "Pivoted to online ordering and local delivery, serving 2,000+ customers.",
  },
  {
    year: "2021",
    title: "Events Program",
    desc: "Launched wine tastings, cheese workshops, and cooking classes.",
  },
  {
    year: "2023",
    title: "The Expansion",
    desc: "Moved to a larger storefront with a tasting bar and event space.",
  },
  {
    year: "2024",
    title: "200+ Products",
    desc: "Now curating from over 60 artisan producers across 12 countries.",
  },
];

const values = [
  {
    emoji: "🌍",
    title: "Direct Sourcing",
    desc: "We buy directly from producers — no middlemen. Better prices for you, fairer pay for them.",
  },
  {
    emoji: "🔍",
    title: "Taste Everything",
    desc: "Every product is tasted and approved by our team before it hits the shelf. No exceptions.",
  },
  {
    emoji: "🤝",
    title: "Real Relationships",
    desc: "We know our producers by name. We visit their farms, their caves, their kitchens.",
  },
  {
    emoji: "♻️",
    title: "Minimal Waste",
    desc: "Sustainable packaging, local suppliers where possible, and compostable shipping materials.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — The Pantry</title>
        <meta
          name="description"
          content="Learn about The Pantry's story, our founder Elena Marchetti, and our philosophy of curated gourmet sourcing."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-burgundy-800 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <span className="text-gold text-sm uppercase tracking-[4px]">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mt-3 mb-4">
            About <span className="text-gold italic">The Pantry</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            A curated gourmet shop born from a simple belief: that the best food
            comes from people who care deeply about what they make.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-up">
            <span className="text-gold-dark text-sm uppercase tracking-[4px] font-semibold">
              How It Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy-800 mt-3 mb-6">
              From a Suitcase of Cheese to a Brooklyn Institution
            </h2>
            <div className="space-y-4 text-burgundy-800/70 leading-relaxed">
              <p>
                In 2018, Elena Marchetti returned from a trip through the
                Italian countryside with an oversized suitcase full of cheese,
                olive oil, and cured meats — none of which she could find in
                Brooklyn.
              </p>
              <p>
                What started as sharing with friends became a pop-up, then a
                small shop, then a passion project that grew into something much
                bigger. Elena realized that Americans were hungry for the real
                thing — not mass-produced approximations, but genuine artisan
                products made by people with centuries of tradition behind them.
              </p>
              <p>
                Today, The Pantry curates over 200 products from more than 60
                producers across 12 countries. Every item is sourced directly,
                tasted personally, and chosen because it tells a story worth
                sharing.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="200" className="relative">
            <div className="bg-gradient-to-br from-burgundy-100 to-cream-dark rounded-2xl p-12 text-center border border-gold/20">
              <div className="text-8xl mb-6">👩‍🍳</div>
              <h3 className="font-display text-2xl font-bold text-burgundy-800 mb-1">
                Elena Marchetti
              </h3>
              <p className="text-gold-dark text-sm uppercase tracking-widest mb-4">
                Founder &amp; Head Curator
              </p>
              <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
              <p className="text-burgundy-800/60 text-sm italic leading-relaxed">
                &ldquo;I don&apos;t just pick products. I pick people. When you
                taste something made with that kind of love, you&apos;ll never
                go back to the generic version.&rdquo;
              </p>
              <div className="mt-6 flex justify-center gap-6 text-sm text-burgundy-800/50">
                <div>
                  <div className="text-2xl font-bold text-burgundy-800">12</div>
                  <div className="text-xs uppercase tracking-wider">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-burgundy-800">
                    60+
                  </div>
                  <div className="text-xs uppercase tracking-wider">
                    Producers
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-burgundy-800">
                    200+
                  </div>
                  <div className="text-xs uppercase tracking-wider">
                    Products
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-gold-dark text-sm uppercase tracking-[4px] font-semibold">
              What We Believe
            </span>
            <h2 className="font-display text-4xl font-bold text-burgundy-800 mt-3">
              Our Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <div
                key={val.title}
                data-aos="flip-up"
                data-aos-delay={i * 100}
                className="bg-cream rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{val.emoji}</div>
                <h3 className="font-display text-xl font-bold text-burgundy-800 mb-3">
                  {val.title}
                </h3>
                <p className="text-burgundy-800/60 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-dark text-sm uppercase tracking-[4px] font-semibold">
            Our Journey
          </span>
          <h2 className="font-display text-4xl font-bold text-burgundy-800 mt-3">
            Milestones
          </h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gold/30" />

          {milestones.map((m, i) => (
            <div
              key={m.year}
              data-aos={i % 2 === 0 ? "fade-up" : "fade-up"}
              data-aos-delay={i * 100}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}
              >
                <span className="text-gold font-display text-2xl font-bold">
                  {m.year}
                </span>
                <h3 className="font-display text-lg font-bold text-burgundy-800 mt-1">
                  {m.title}
                </h3>
                <p className="text-sm text-burgundy-800/60 mt-1">{m.desc}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-cream z-10" />

              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
