import Header from "./components/Header";
import Footer from "./components/Footer";
import ResearchCard from "./components/ResearchCard";
import Link from "next/link";
import Head from "next/head";

const researchAreas = [
  {
    title: "Genomics",
    description:
      "Mapping and analyzing complete genetic codes to understand gene function, evolution, and disease mechanisms. Our genomics division focuses on whole-genome sequencing, comparative genomics, and functional annotation of novel genetic variants.",
    publications: 284,
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
  },
  {
    title: "Proteomics",
    description:
      "Large-scale study of protein structures, functions, and interactions using mass spectrometry and protein arrays. Our proteomics platform enables biomarker discovery, protein-protein interaction mapping, and post-translational modification analysis.",
    publications: 196,
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
  },
  {
    title: "Cell Biology",
    description:
      "Investigating cellular mechanisms, signaling pathways, and tissue engineering approaches. Our cell biology labs specialize in stem cell research, organoid development, and advanced microscopy for real-time cellular imaging.",
    publications: 152,
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
  },
  {
    title: "Pharmacology",
    description:
      "Studying drug action mechanisms, pharmacokinetics, and pharmacodynamics to develop safer, more effective therapeutics. Our pharmacology division conducts in vitro and in vivo studies with GLP-compliant protocols.",
    publications: 218,
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  },
  {
    title: "Bioinformatics",
    description:
      "Computational analysis of biological data using machine learning, statistical modeling, and high-performance computing. Our bioinformatics team develops algorithms for sequence analysis, structural prediction, and systems biology modeling.",
    publications: 175,
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
  },
];

export default function Research() {
  return (
    <>
      <Head>
        <title>Research - BioNex Labs</title>
      </Head>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-bio-teal to-bio-navy">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span
              data-aos="fade-up"
              className="text-sm font-bold text-white/70 uppercase tracking-wider"
            >
              Our Focus Areas
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-6xl font-black text-white mt-4 mb-6"
            >
              Research Programs
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Five interconnected research pillars driving innovation across the
              bioscience spectrum, with over 1,025 peer-reviewed publications.
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, i) => (
                <ResearchCard key={i} {...area} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-20 bg-bio-navy px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Collaborate on Groundbreaking Research
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              We actively seek academic and industry partnerships to expand our
              research impact. Join us in shaping the future of bioscience.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-bio-teal text-white font-bold rounded-xl hover:bg-bio-teal-dark transition-all shadow-lg"
            >
              Propose a Collaboration
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
