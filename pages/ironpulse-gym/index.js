import Head from "next/head";
import ProjectLink from "@/components/ProjectLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClassCard from "./components/ClassCard";
import TrainerCard from "./components/TrainerCard";

const stats = [
  { value: "15K+", label: "Members Strong" },
  { value: "200+", label: "Weekly Classes" },
  { value: "50+", label: "Expert Trainers" },
  { value: "98%", label: "Satisfaction Rate" },
];

const featuredClasses = [
  {
    name: "HIIT Inferno",
    time: "6:00 AM — 7:00 AM",
    trainer: "Marcus Steel",
    difficulty: "Advanced",
    description:
      "High-intensity interval training that torches calories and builds explosive power.",
    icon: "🔥",
  },
  {
    name: "Power Yoga",
    time: "7:30 AM — 8:30 AM",
    trainer: "Elena Voss",
    difficulty: "Intermediate",
    description:
      "Dynamic flow combining strength, flexibility, and mindful breathing.",
    icon: "🧘",
  },
  {
    name: "Boxing Bootcamp",
    time: "5:00 PM — 6:00 PM",
    trainer: "Kai Rodriguez",
    difficulty: "Advanced",
    description:
      "Technical boxing drills paired with brutal conditioning circuits.",
    icon: "🥊",
  },
];

const spotlightTrainers = [
  {
    name: "Marcus Steel",
    specialty: "Strength & Conditioning",
    certifications: ["NASM-CPT", "CSCS"],
    bio: "10+ years transforming bodies. Former D1 athlete turned elite coach.",
    socialLinks: [],
  },
  {
    name: "Elena Voss",
    specialty: "Yoga & Mobility",
    certifications: ["RYT-500", "FRC"],
    bio: "Blending ancient practice with modern sports science for total body mastery.",
    socialLinks: [],
  },
  {
    name: "Kai Rodriguez",
    specialty: "Combat Sports",
    certifications: ["USA Boxing", "ACE-CPT"],
    bio: "Pro boxer turned trainer. Specializes in fight prep and cardio conditioning.",
    socialLinks: [],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>IronPulse Gym — Push Your Limits</title>
      </Head>
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-iron-black via-iron-dark to-iron-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fire-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fire-orange/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p
            className="text-fire-red font-bold uppercase tracking-[0.3em] text-sm mb-6"
            data-aos="fade-down"
          >
            ⚡ Welcome to the Iron District
          </p>
          <h1
            className="heading-uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 text-fire-gradient"
            data-aos="zoom-in"
          >
            Burn. Build.
            <br />
            Dominate.
          </h1>
          <p
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            data-aos="fade-up"
          >
            Where raw determination meets world-class training. IronPulse Gym
            isn't just a gym — it's a crucible for champions.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            data-aos="bounce-in"
          >
            <ProjectLink href="/pricing" className="btn-fire text-lg">
              Start Your Transformation
            </ProjectLink>
            <ProjectLink href="/classes" className="btn-outline-fire text-lg">
              View Classes
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 border-y border-iron-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-4xl md:text-5xl font-black text-fire-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLASS PREVIEW ===== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-fire-red font-bold uppercase tracking-[0.2em] text-sm mb-3">
              Featured Classes
            </p>
            <h2 className="heading-uppercase text-4xl md:text-5xl mb-4">
              Train Like a Beast
            </h2>
            <div className="fire-divider w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredClasses.map((cls, i) => (
              <ClassCard key={i} {...cls} />
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <ProjectLink href="/classes" className="btn-outline-fire">
              View Full Schedule
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* ===== TRAINER SPOTLIGHT ===== */}
      <section className="py-24 bg-iron-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-fire-red font-bold uppercase tracking-[0.2em] text-sm mb-3">
              Meet the Crew
            </p>
            <h2 className="heading-uppercase text-4xl md:text-5xl mb-4">
              Elite Trainers
            </h2>
            <div className="fire-divider w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlightTrainers.map((trainer, i) => (
              <TrainerCard key={i} {...trainer} index={i} />
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <ProjectLink href="/trainers" className="btn-outline-fire">
              Meet All Trainers
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fire-red/20 via-fire-orange/10 to-fire-red/20" />
        <div className="relative z-10 text-center px-4">
          <h2
            className="heading-uppercase text-4xl md:text-6xl mb-6"
            data-aos="zoom-in"
          >
            Ready to <span className="text-fire-gradient">Ignite?</span>
          </h2>
          <p
            className="text-gray-400 text-lg max-w-xl mx-auto mb-8"
            data-aos="fade-up"
          >
            Your first week is on us. No contracts, no commitments — just pure,
            raw effort.
          </p>
          <ProjectLink
            href="/pricing"
            className="btn-fire text-lg"
            data-aos="bounce-in"
          >
            Claim Your Free Trial
          </ProjectLink>
        </div>
      </section>

      <Footer />
    </>
  );
}
