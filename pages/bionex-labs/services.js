import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    title: "DNA Sequencing",
    description:
      "Next-generation sequencing (NGS) services including whole genome, exome, and targeted panel sequencing. Our Illumina NovaSeq 6000 platform delivers high-throughput, high-accuracy results for genomic research and clinical diagnostics.",
    turnaround: "5–10 business days",
  },
  {
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    title: "Drug Discovery",
    description:
      "End-to-end drug discovery from target identification through lead optimization. Our integrated platform combines computational chemistry, high-throughput screening, and ADMET profiling to accelerate your pipeline from bench to bedside.",
    turnaround: "6–18 months (project-based)",
  },
  {
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    title: "Clinical Trials",
    description:
      "Comprehensive clinical trial support including protocol design, site management, patient recruitment, regulatory submissions, and data management. GMP-compliant facilities for Phase I–IV studies with real-time monitoring.",
    turnaround: "12–36 months (phase-dependent)",
  },
  {
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
    title: "Chemical Analysis",
    description:
      "Precision analytical chemistry using HPLC, GC-MS, LC-MS/MS, NMR, and ICP-MS instrumentation. From raw material characterization to finished product QC, we deliver accurate, reproducible results for regulatory compliance.",
    turnaround: "3–7 business days",
  },
  {
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
    title: "Biotech Consulting",
    description:
      "Strategic advisory for biotech startups and established pharma. Our consultants provide expertise in technology assessment, IP strategy, regulatory pathways, market access, and scientific due diligence for investors.",
    turnaround: "2–4 weeks (assessment)",
  },
  {
    icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    title: "Environmental Testing",
    description:
      "EPA-compliant environmental monitoring including water quality analysis, soil contamination testing, air particulate assessment, and bioassay services. Support for environmental impact assessments and remediation projects.",
    turnaround: "7–14 business days",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - BioNex Labs</title>
      </Head>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-bio-navy to-bio-navy-dark">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span
              data-aos="fade-up"
              className="text-sm font-bold text-bio-teal-light uppercase tracking-wider"
            >
              What We Offer
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-black text-white mt-4 mb-6"
            >
              Our Services
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-white/60 max-w-2xl mx-auto"
            >
              Comprehensive bioscience and chemistry services powered by
              state-of-the-art instrumentation and decades of scientific
              expertise.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <ServiceCard key={i} {...service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-bio-bg-alt px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-black text-bio-navy mb-4">
              Need a Custom Service Package?
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Every project is unique. Let&apos;s discuss how BioNex can tailor
              our capabilities to meet your specific research and development
              needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-bio-teal text-white font-bold rounded-xl hover:bg-bio-teal-dark transition-all shadow-lg"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
