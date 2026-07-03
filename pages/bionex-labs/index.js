import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";

const stats = [
  { value: 1200, suffix: "+", label: "Research Papers" },
  { value: 340, suffix: "+", label: "Clinical Trials" },
  { value: 85, suffix: "", label: "Active Patents" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
];

const highlights = [
  {
    title: "CRISPR Gene Editing",
    desc: "Pioneering next-generation CRISPR-Cas9 techniques for targeted genetic modifications with unprecedented precision.",
    image: "🧬",
  },
  {
    title: "mRNA Therapeutics",
    desc: "Developing novel mRNA-based therapeutic platforms for rare genetic disorders and personalized cancer treatments.",
    image: "💉",
  },
  {
    title: "AI-Driven Drug Discovery",
    desc: "Leveraging machine learning to accelerate drug candidate identification, reducing discovery timelines by 60%.",
    image: "🤖",
  },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Director of Research",
    specialty: "Genomics & Molecular Biology",
  },
  {
    name: "Dr. Marcus Webb",
    role: "Head of Chemistry",
    specialty: "Organic Synthesis & Drug Design",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Lead Bioinformatician",
    specialty: "Computational Biology & AI",
  },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Bionex Labs - Pioneering research since 2012. Advancing science to
          improve lives through innovative biotechnology solutions.
        </title>
      </Head>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bio-navy via-bio-navy-dark to-bio-teal" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-bio-teal rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-bio-teal-light rounded-full blur-3xl" />
          </div>
          {/* DNA Helix pattern */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-5 hidden lg:block">
            <svg viewBox="0 0 200 800" className="h-full w-full">
              <path
                d="M100 0 Q150 100 100 200 Q50 300 100 400 Q150 500 100 600 Q50 700 100 800"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M100 0 Q50 100 100 200 Q150 300 100 400 Q50 500 100 600 Q150 700 100 800"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div
                data-aos="fade-up"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
              >
                <span className="w-2 h-2 bg-bio-teal-light rounded-full animate-pulse" />
                <span className="text-sm text-white/80 font-medium">
                  BioNex Labs — Pioneering Research Since 2012
                </span>
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
              >
                Advancing Science,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bio-teal-light to-emerald-300">
                  Improving Lives
                </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
              >
                At BioNex Laboratories, we push the boundaries of bioscience and
                chemistry to develop breakthrough solutions that transform
                healthcare, agriculture, and environmental sustainability.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/research"
                  className="px-8 py-4 bg-bio-teal text-white font-bold rounded-xl hover:bg-bio-teal-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Explore Our Research
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4">
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-bio-navy mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Highlights */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-sm font-bold text-bio-teal uppercase tracking-wider">
                Research Highlights
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-bio-navy mt-3">
                Breakthrough Discoveries
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Our cutting-edge research programs are tackling the most
                pressing challenges in modern bioscience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-5">{h.image}</div>
                  <h3 className="text-xl font-bold text-bio-navy mb-3 group-hover:text-bio-teal transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Spotlight */}
        <section className="py-24 bg-bio-navy">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-sm font-bold text-bio-teal-light uppercase tracking-wider">
                Our Scientists
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-3">
                Meet the Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className="group text-center"
                >
                  <div className="w-28 h-28 bg-gradient-to-br from-bio-teal to-bio-teal-dark rounded-full mx-auto mb-5 flex items-center justify-center text-4xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-bio-teal-light font-medium text-sm mt-1">
                    {member.role}
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    {member.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-3xl md:text-5xl font-black text-bio-navy mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Whether you need specialized lab services, research partnerships,
              or consulting expertise — we&apos;re here to accelerate your
              scientific breakthroughs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-bio-teal text-white font-bold rounded-xl hover:bg-bio-teal-dark transition-all shadow-lg hover:shadow-xl"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-bio-navy text-white font-bold rounded-xl hover:bg-bio-navy-dark transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
