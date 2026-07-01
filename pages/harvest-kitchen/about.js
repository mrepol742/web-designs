import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const team = [
  {
    name: "Elena Vasquez",
    role: "Founder & Head Chef",
    emoji: "👩‍🍳",
    bio: "Former farmhand turned chef. Elena sources directly from the farms she grew up visiting.",
  },
  {
    name: "Marcus Chen",
    role: "Juice Bar Director",
    emoji: "🧑‍🔬",
    bio: "Cold-press obsessed. Marcus developed our 12 signature juices and keeps them rotating seasonally.",
  },
  {
    name: "Anika Patel",
    role: "Pastry & Bread",
    emoji: "👩‍🍳",
    bio: "Sourdough specialist who ferments our bread in-house daily. Her focaccia is legendary.",
  },
  {
    name: "Tomás Rivera",
    role: "Farm Liaison",
    emoji: "🧑‍🌾",
    bio: "Drives 200+ miles weekly visiting partner farms to select the best seasonal produce for our kitchen.",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Locally Sourced",
    text: "Every ingredient travels fewer than 50 miles from soil to plate. We know our farmers by name.",
  },
  {
    icon: "🍂",
    title: "Seasonally Driven",
    text: "Our menu changes with the harvest. When strawberries peak, we build around them. When squash arrives, the menu shifts.",
  },
  {
    icon: "♻️",
    title: "Zero Waste Kitchen",
    text: "Compostable packaging, kitchen scraps returned to our farm partners, and a strict no-plastic policy for dine-in.",
  },
  {
    icon: "🤝",
    title: "Community First",
    text: "We host monthly farm dinners, cooking workshops, and donate 2% of revenue to the Portland Food Bank.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Harvest Kitchen</title>
      </Head>
      <Header />

      {/* Page Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-wood-500 to-wood-700 text-white text-center px-4">
        <h1
          data-aos="fade-up"
          className="font-serif text-4xl md:text-5xl font-bold mb-4"
        >
          Our Story
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-green-200 text-lg max-w-xl mx-auto"
        >
          Born from a belief that food should be honest, local, and delicious.
        </p>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="bg-green-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-8xl">🏡</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="font-serif text-3xl font-bold text-green-700 mb-4">
              How It Started
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In 2018, Elena Vasquez left a Michelin-starred kitchen in San
              Francisco to return to Portland with a simple idea: what if a café
              could run like a farm?
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              She partnered with three local organic farms and opened Harvest
              Kitchen in a converted barn on Orchard Lane. The menu was one
              page, handwritten. The first smoothie was the Green Goddess —
              still our bestseller.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Six years later, we work with 12+ farms, serve 300+ guests daily,
              and the menu still changes with the seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Philosophy */}
      <section className="py-20 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            data-aos="fade-up"
            className="font-serif text-3xl font-bold text-green-700 text-center mb-12"
          >
            What We Believe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-green-100"
              >
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-serif font-bold text-green-700 text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            data-aos="fade-up"
            className="font-serif text-3xl font-bold text-green-700 text-center mb-12"
          >
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, i) => (
              <div
                key={person.name}
                data-aos="flip-left"
                data-aos-delay={i * 100}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-green-100"
              >
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">{person.emoji}</span>
                </div>
                <h3 className="font-serif font-bold text-green-700">
                  {person.name}
                </h3>
                <p className="text-sm text-wood-500 font-medium mb-2">
                  {person.role}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
