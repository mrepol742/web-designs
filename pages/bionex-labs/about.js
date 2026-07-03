import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

const milestones = [
  {
    year: "2012",
    event:
      "BioNex Laboratories founded with a vision to bridge academic research and commercial biotechnology.",
  },
  {
    year: "2014",
    event:
      "First FDA-regulated clinical trial launched; genomics division established.",
  },
  {
    year: "2016",
    event:
      "ISO 17025 accreditation earned; environmental testing services launched.",
  },
  {
    year: "2018",
    event:
      "Expansion into AI-driven drug discovery with dedicated computational lab.",
  },
  {
    year: "2020",
    event:
      "Rapid COVID-19 diagnostic development and mRNA research partnership.",
  },
  {
    year: "2022",
    event:
      "Opened 50,000 sq ft research expansion; surpassed 1,000 publications milestone.",
  },
  {
    year: "2024",
    event: "CRISPR therapeutics program approved for Phase II clinical trials.",
  },
];

const certifications = [
  {
    name: "ISO 17025:2017",
    desc: "Accredited laboratory testing and calibration",
  },
  {
    name: "GLP Compliance",
    desc: "Good Laboratory Practice (FDA 21 CFR Part 58)",
  },
  {
    name: "GMP Certified",
    desc: "Good Manufacturing Practice for clinical-grade materials",
  },
  {
    name: "CLIA Certified",
    desc: "Clinical Laboratory Improvement Amendments compliance",
  },
  {
    name: "AAALAC Accredited",
    desc: "International animal care and use standards",
  },
  { name: "BSL-3 Certified", desc: "Biosafety Level 3 containment facility" },
];

const equipment = [
  "Illumina NovaSeq 6000 (High-throughput sequencer)",
  "Thermo Q Exactive HF-X (LC-MS/MS)",
  "Bruker Avance NEO 800 MHz (NMR Spectrometer)",
  "Agilent 7890B GC-MS System",
  "Beckman Coulter CytoFLEX (Flow Cytometer)",
  "Zeiss Lightsheet 7 (3D Microscopy)",
  "Hamamatsu PhenoImager HT (Digital Pathology)",
  "Sartorius Ambr 15 (Bioreactor System)",
  "Waters ACQUITY UPLC I-Class (Chromatography)",
  "Eppendorf ep Motion 5075 (Automated Liquid Handling)",
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Director of Research",
    area: "Genomics & Molecular Biology",
    initials: "SC",
  },
  {
    name: "Dr. Marcus Webb",
    role: "Head of Chemistry",
    area: "Organic Synthesis & Drug Design",
    initials: "MW",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Lead Bioinformatician",
    area: "Computational Biology & AI/ML",
    initials: "PS",
  },
  {
    name: "Dr. James Okafor",
    role: "Clinical Director",
    area: "Clinical Pharmacology & Trials",
    initials: "JO",
  },
  {
    name: "Dr. Elena Volkov",
    role: "Proteomics Lead",
    area: "Mass Spectrometry & Biomarkers",
    initials: "EV",
  },
  {
    name: "Dr. David Tanaka",
    role: "Environmental Science Head",
    area: "Ecotoxicology & Remediation",
    initials: "DT",
  },
  {
    name: "Dr. Amira Rashid",
    role: "Cell Biology Director",
    area: "Stem Cells & Tissue Engineering",
    initials: "AR",
  },
  {
    name: "Dr. Lucas Fernandez",
    role: "CTO",
    area: "Bioinformatics & Data Science",
    initials: "LF",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About - BioNex Labs</title>
      </Head>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-bio-navy via-bio-navy-dark to-bio-navy">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span
              data-aos="fade-up"
              className="text-sm font-bold text-bio-teal-light uppercase tracking-wider"
            >
              Who We Are
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-black text-white mt-4 mb-6"
            >
              About BioNex Labs
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-white/60 max-w-2xl mx-auto"
            >
              Over a decade of pushing scientific boundaries — from a small team
              of passionate researchers to a world-class bioscience institution.
            </p>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-sm font-bold text-bio-teal uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-bio-navy mt-3">
                Lab History
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bio-teal to-bio-navy" />

              {milestones.map((m, i) => (
                <div
                  key={i}
                  data-aos={i % 2 === 0 ? "slide-right" : "fade-up"}
                  data-aos-delay={i * 80}
                  className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}
                  >
                    <span className="inline-block px-3 py-1 bg-bio-teal/10 text-bio-teal font-bold text-sm rounded-lg">
                      {m.year}
                    </span>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-bio-teal rounded-full border-4 border-white shadow-md -translate-x-2 mt-1 z-10" />
                  <div className="md:hidden pl-10">
                    <span className="inline-block px-3 py-1 bg-bio-teal/10 text-bio-teal font-bold text-sm rounded-lg">
                      {m.year}
                    </span>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-bio-bg-alt px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-sm font-bold text-bio-teal uppercase tracking-wider">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-bio-navy mt-3">
                Certifications & Compliance
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-bio-teal/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-bio-teal"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-bio-navy">{cert.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-13">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-sm font-bold text-bio-teal uppercase tracking-wider">
                Our Arsenal
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-bio-navy mt-3">
                Lab Equipment
              </h2>
              <p className="text-gray-500 mt-3">
                World-class instrumentation for world-class science
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipment.map((eq, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                  className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-bio-teal/30 transition-colors"
                >
                  <div className="w-8 h-8 bg-bio-navy/5 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-bio-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-bio-navy">
                    {eq}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-bio-navy px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-sm font-bold text-bio-teal-light uppercase tracking-wider">
                Our People
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
                Scientific Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-bio-teal to-bio-teal-dark rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-bio-teal-light text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-white/40 text-xs mt-2">{member.area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
