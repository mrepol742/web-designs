import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const team = [
  {
    name: "Emma Rodriguez",
    role: "Founder & Lead Writer",
    bio: "Full-time wanderer. 47 countries and counting. Emma started Wanderlust Diaries in 2021 after quitting her corporate job to travel the world.",
  },
  {
    name: "Jake Morrison",
    role: "Photographer & Editor",
    bio: "Chasing golden hours across continents. Jake turns sunrises into stories and landscapes into layouts.",
  },
  {
    name: "Sofia Lindgren",
    role: "Europe & Asia Correspondent",
    bio: "Based in Stockholm, Sofia covers everything from Scandinavian fjords to Japanese ryokans with equal passion.",
  },
  {
    name: "Omar Benali",
    role: "Africa & Middle East Correspondent",
    bio: "Born in Marrakech, Omar brings insider knowledge and cultural depth to every piece he writes.",
  },
];

const values = [
  {
    icon: "🌍",
    title: "Authentic Stories",
    desc: "We write from real experience, not from press releases.",
  },
  {
    icon: "💰",
    title: "Budget-Conscious",
    desc: "Travel doesn't have to break the bank. We prove it.",
  },
  {
    icon: "🤝",
    title: "Local First",
    desc: "Supporting local businesses, guides, and communities.",
  },
  {
    icon: "🌱",
    title: "Sustainable Travel",
    desc: "Leave places better than you found them.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Wanderlust Diaries</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
            data-aos="fade-up"
          >
            Our Story
          </h1>
          <p
            className="text-gray-500 text-lg mb-12 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Wanderlust Diaries started as a personal blog in 2021. Four years
            later, it&apos;s a community of 200K+ travelers who believe the best
            stories come from getting lost on purpose.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>

          <h2
            className="text-2xl font-bold text-[#1a1a1a] mb-8"
            data-aos="fade-up"
          >
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {team.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-[#0d9488]/10 flex items-center justify-center text-[#0d9488] font-bold text-xl">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a]">{t.name}</h3>
                    <p className="text-[#0d9488] text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
