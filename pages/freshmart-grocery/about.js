import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const milestones = [
  {
    year: "2010",
    event:
      "FreshMart opens its doors at 456 Market Street with a simple promise: fresh food, fair prices.",
  },
  {
    year: "2014",
    event:
      "Launched our local sourcing program, partnering with 20+ farms within 100 miles.",
  },
  {
    year: "2017",
    event:
      "Expanded to include a full organic department — over 150 certified products.",
  },
  {
    year: "2020",
    event:
      "Introduced same-day delivery to serve our community during challenging times.",
  },
  {
    year: "2023",
    event:
      "Reached 500+ products, zero-waste packaging initiative, and 10,000 loyal customers.",
  },
];

const values = [
  {
    icon: "🌍",
    title: "Local First",
    desc: "We source from over 30 local farms and producers within 100 miles of our store, supporting the community and reducing food miles.",
  },
  {
    icon: "♻️",
    title: "Zero Waste Goal",
    desc: "By 2026, we aim to eliminate single-use plastics entirely. Our bulk section and compostable packaging are steps toward that goal.",
  },
  {
    icon: "🤝",
    title: "Fair Prices",
    desc: "No middlemen, no markups. We work directly with farmers so you get the freshest produce at the fairest price.",
  },
  {
    icon: "🌱",
    title: "Organic & Clean",
    desc: "Over 150 certified organic products, always free from artificial preservatives, colors, and flavors.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — FreshMart Grocery</title>
        <meta
          name="description"
          content="Learn about FreshMart Grocery — our story, local sourcing, and sustainability commitments since 2010."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 to-green-700 text-white py-20 text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          data-aos="fade-up"
        >
          Our Story 🌿
        </h1>
        <p
          className="text-white/80 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Since 2010, FreshMart has been more than a grocery store — we&apos;re
          a community hub for fresh, honest food.
        </p>
      </section>

      {/* Store story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="slide-right">
            <h2 className="text-3xl font-extrabold mb-4">
              From Seed to Shelf 🌱
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FreshMart started with a simple idea: people deserve to know where
              their food comes from. In 2010, we opened a small store at{" "}
              <strong>456 Market Street</strong> with 12 local farm partners and
              a passion for quality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, we work with over <strong>30 farms and producers</strong>,
              offering 500+ carefully curated products. Every item on our
              shelves has been chosen for its quality, freshness, and the story
              behind it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that when you buy food, you&apos;re not just filling a
              cart — you&apos;re supporting a farmer, a community, and a way of
              doing business that puts people first.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-gradient-to-br from-orange-100 to-green-100 rounded-3xl p-10 text-center"
          >
            <div className="text-7xl mb-4">🏬</div>
            <p className="text-gray-700 font-semibold text-lg">
              456 Market Street
            </p>
            <p className="text-gray-500 text-sm">Our home since 2010</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-center mb-10"
            data-aos="fade-up"
          >
            Our Journey 📅
          </h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                data-aos={i % 2 === 0 ? "slide-right" : "fade-up"}
                data-aos-delay={String(i * 100)}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 bg-orange-500 text-white font-bold text-sm px-3 py-1.5 rounded-full mt-0.5">
                  {m.year}
                </div>
                <p className="text-gray-600 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-3xl font-extrabold text-center mb-10"
          data-aos="fade-up"
        >
          What We Stand For 💚
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              data-aos="zoom-in"
              data-aos-delay={String(i * 100)}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-500 to-green-500 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "14+", label: "Years" },
            { num: "30+", label: "Farm Partners" },
            { num: "500+", label: "Products" },
            { num: "10K+", label: "Happy Customers" },
          ].map((s, i) => (
            <div
              key={s.label}
              data-aos="zoom-in"
              data-aos-delay={String(i * 100)}
            >
              <div className="text-3xl md:text-4xl font-extrabold">{s.num}</div>
              <div className="text-white/80 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
