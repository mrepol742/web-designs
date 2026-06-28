import Head from "next/head";
import ProjectImage from "@/components/ProjectImage";
import ProjectLink from "@/components/ProjectLink";
import { useState } from "react";

const projects = [
  {
    slug: "melvin-jones-repol",
    title: "Portfolio",
    subtitle: "Melvin Jones Repol",
    description:
      "A dark, minimal developer portfolio with neon accents, animated sections, and a showcase of projects built with Next.js.",
    tags: ["Next.js", "Tailwind CSS", "AOS"],
    accent: "#39ff14",
    bg: "from-[#0a0a0a] to-[#111]",
    textAccent: "text-[#39ff14]",
    borderAccent: "border-[#39ff14]/30",
    hoverBorder: "hover:border-[#39ff14]/70",
    badgeBg: "bg-[#39ff14]/10 text-[#39ff14]",
    image: null, // replace with actual image path when ready
    href: "/melvin-jones-repol",
  },
  {
    slug: "la-dolce-vita",
    title: "Restaurant",
    subtitle: "La Dolce Vita",
    description:
      "An elegant Italian restaurant website with warm gold tones, serif typography, reservation flow, and a rich menu experience.",
    tags: ["Next.js", "Tailwind CSS", "Framer"],
    accent: "#c9a84c",
    bg: "from-[#1a0f0a] to-[#2a1a0e]",
    textAccent: "text-[#c9a84c]",
    borderAccent: "border-[#c9a84c]/30",
    hoverBorder: "hover:border-[#c9a84c]/70",
    badgeBg: "bg-[#c9a84c]/10 text-[#c9a84c]",
    image: null,
    href: "/la-dolce-vita",
  },
  {
    slug: "ironpulse-gym",
    title: "Fitness",
    subtitle: "IronPulse Gym",
    description:
      "A high-energy gym website with bold fire gradients, class schedules, trainer profiles, and a membership pricing section.",
    tags: ["Next.js", "Tailwind CSS", "AOS"],
    accent: "#ef4444",
    bg: "from-[#0a0a0a] to-[#1a0808]",
    textAccent: "text-[#ef4444]",
    borderAccent: "border-[#ef4444]/30",
    hoverBorder: "hover:border-[#ef4444]/70",
    badgeBg: "bg-[#ef4444]/10 text-[#ef4444]",
    image: null,
    href: "/ironpulse-gym",
  },
  {
    slug: "wanderlust-diaries",
    title: "Travel",
    subtitle: "Wanderlust Diaries",
    description:
      "Explore travel stories, guides, and inspiration from every corner of the globe.",
    tags: ["Next.js", "Tailwind CSS", "AOS"],
    accent: "#0d9488",
    bg: "from-[#0a1a19] to-[#051211]",
    textAccent: "text-[#d4a574]",
    borderAccent: "border-[#d4a574]/30",
    hoverBorder: "hover:border-[#d4a574]/70",
    badgeBg: "bg-[#d4a574]/10 text-[#d4a574]",
    image: null,
    href: "/wanderlust-diaries",
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      data-aos={isEven ? "fade-right" : "fade-left"}
      data-aos-delay={index * 100}
      className={`group relative flex flex-col lg:flex-row ${
        !isEven ? "lg:flex-row-reverse" : ""
      } gap-0 rounded-2xl overflow-hidden border ${project.borderAccent} ${project.hoverBorder} transition-all duration-500 bg-gradient-to-br ${project.bg}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Panel */}
      <div className="relative lg:w-1/2 min-h-[260px] sm:min-h-[320px] overflow-hidden bg-black/30">
        {project.image ? (
          <ProjectImage
            src={project.image}
            alt={project.subtitle}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Placeholder — swap for ProjectImage once you have an image */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 select-none">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold border transition-all duration-500"
              style={{
                borderColor: project.accent + "55",
                background: project.accent + "10",
                color: project.accent,
                boxShadow: hovered ? `0 0 40px ${project.accent}33` : "none",
              }}
            >
              {project.title[0]}
            </div>
            <p className="text-xs tracking-[0.3em] uppercase opacity-30">
              Preview coming soon
            </p>
          </div>
        )}

        {/* Gradient bleed into content panel */}
        <div
          className={`absolute inset-y-0 ${
            isEven ? "right-0" : "left-0"
          } w-24 hidden lg:block`}
          style={{
            background: `linear-gradient(to ${isEven ? "right" : "left"}, transparent, ${
              index === 0 ? "#111" : index === 1 ? "#2a1a0e" : "#1a0808"
            })`,
          }}
        />

        {/* Index number watermark */}
        <span
          className="absolute top-4 left-4 font-mono text-7xl font-black leading-none select-none pointer-events-none"
          style={{ color: project.accent + "15" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content Panel */}
      <div className="lg:w-1/2 flex flex-col justify-center p-8 sm:p-10 lg:p-12 gap-5">
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-bold uppercase tracking-[0.25em] ${project.textAccent}`}
          >
            {project.title}
          </span>
          <span className="flex-1 h-px opacity-20 bg-current" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          {project.subtitle}
        </h2>

        <p className="text-sm sm:text-base leading-relaxed opacity-60 text-white max-w-md">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-mono px-3 py-1 rounded-full ${project.badgeBg} border ${project.borderAccent}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <ProjectLink
          href={project.href}
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold group/link w-fit"
          style={{ color: project.accent }}
        >
          <span>View Project</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </ProjectLink>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Designs — by Melvin Jones Repol</title>
        <meta
          name="description"
          content="A curated collection of web design projects — portfolios, restaurants, fitness brands and more."
        />
      </Head>

      <div className="min-h-screen bg-[#080808] text-white">
        {/* ── Hero ── */}
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 text-center overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
          </div>

          <p
            data-aos="fade-down"
            className="text-xs font-mono tracking-[0.4em] uppercase text-white/30 mb-6"
          >
            Web Design Showcase
          </p>

          <h1
            data-aos="fade-up"
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6"
          >
            <span className="text-white">Designs that</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #39ff14 0%, #c9a84c 50%, #ef4444 100%)",
              }}
            >
              speak for themselves.
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-lg text-base sm:text-lg text-white/40 leading-relaxed"
          >
            A handcrafted collection of web projects — each with its own
            personality, palette, and purpose.
          </p>

          {/* Scroll cue */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-mono">
              Scroll
            </span>
            <div className="w-px h-10 bg-white animate-pulse" />
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-white/5 py-10 text-center">
          <p className="text-xs text-white/20 font-mono tracking-widest uppercase">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              Melvin Jones Repol
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
