import Head from "next/head";
import ProjectImage from "@/components/ProjectImage";
import ProjectLink from "@/components/ProjectLink";
import { useState } from "react";
import Footer from "./components/layout/Footer";

const projects = [
  {
    slug: "la-dolce-vita",
    title: "Restaurant",
    subtitle: "La Dolce Vita",
    description:
      "An elegant Italian restaurant website with warm gold tones, serif typography, reservation flow, and a rich menu experience.",
    tags: ["Italian Cuisine", "Fine Dining", "Reservations"],
    accent: "#c9a84c",
    bg: "from-[#1a0f0a] to-[#2a1a0e]",
    textAccent: "text-[#c9a84c]",
    borderAccent: "border-[#c9a84c]/30",
    hoverBorder: "hover:border-[#c9a84c]/70",
    badgeBg: "bg-[#c9a84c]/10 text-[#c9a84c]",
    image: "/images/restaurant.png",
    href: "/la-dolce-vita",
  },
  {
    slug: "ironpulse-gym",
    title: "Fitness",
    subtitle: "IronPulse Gym",
    description:
      "A high-energy gym website with bold fire gradients, class schedules, trainer profiles, and a membership pricing section.",
    tags: ["Gym & Fitness", "Memberships", "Personal Training"],
    accent: "#ef4444",
    bg: "from-[#0a0a0a] to-[#1a0808]",
    textAccent: "text-[#ef4444]",
    borderAccent: "border-[#ef4444]/30",
    hoverBorder: "hover:border-[#ef4444]/70",
    badgeBg: "bg-[#ef4444]/10 text-[#ef4444]",
    image: "/images/fitness.png",
    href: "/ironpulse-gym",
  },
  {
    slug: "wanderlust-diaries",
    title: "Travel",
    subtitle: "Wanderlust Diaries",
    description:
      "Explore travel stories, guides, and inspiration from every corner of the globe.",
    tags: ["Travel Blog", "Destinations", "Trip Guides"],
    accent: "#0d9488",
    bg: "from-[#0a1a19] to-[#051211]",
    textAccent: "text-[#d4a574]",
    borderAccent: "border-[#d4a574]/30",
    hoverBorder: "hover:border-[#d4a574]/70",
    badgeBg: "bg-[#d4a574]/10 text-[#d4a574]",
    image: "/images/travel.png",
    href: "/wanderlust-diaries",
  },
  {
    slug: "sweet-bliss-bakery",
    title: "Cake Shop",
    subtitle: "Sweet Bliss Bakery",
    description:
      "Sweet Bliss Bakery crafts custom cakes, cupcakes, and pastries for every celebration. Wedding cakes, birthday cakes, and sweet treats made with love since 2015.",
    tags: ["Custom Cakes", "Pastries", "Wedding Cakes"],
    accent: "#f8b4c8",
    bg: "from-[#2e1a18] to-[#1a0f0e]",
    textAccent: "text-[#f8b4c8]",
    borderAccent: "border-[#f8b4c8]/30",
    hoverBorder: "hover:border-[#f8b4c8]/70",
    badgeBg: "bg-[#f8b4c8]/10 text-[#f8b4c8]",
    image: "/images/cake-shop.png",
    href: "/sweet-bliss-bakery",
  },
  {
    slug: "sterling-and-associates",
    title: "Real Estate",
    subtitle: "Sterling & Associates",
    description:
      "Premium real estate services for discerning buyers and sellers. Luxury properties, expert guidance, and unmatched market knowledge since 1998.",
    tags: ["Luxury Properties", "Buy & Sell", "Property Management"],
    accent: "#c9a84c",
    bg: "from-[#0f1b2d] to-[#080e18]",
    textAccent: "text-[#c9a84c]",
    borderAccent: "border-[#c9a84c]/30",
    hoverBorder: "hover:border-[#c9a84c]/70",
    badgeBg: "bg-[#c9a84c]/10 text-[#c9a84c]",
    image: "/images/real-estate.png",
    href: "/sterling-and-associates",
  },
  {
    slug: "turbomax-auto-parts",
    title: "Motor Shop",
    subtitle: "Turbomax Auto Parts",
    description:
      "High-performance auto parts, accessories, and gear for serious drivers. Quality components for every build, upgrade, and restoration.",
    tags: ["Auto Parts", "Performance", "Car Accessories"],
    accent: "#ff6b00",
    bg: "from-[#111111] to-[#0d0d0d]",
    textAccent: "text-[#ff6b00]",
    borderAccent: "border-[#ff6b00]/30",
    hoverBorder: "hover:border-[#ff6b00]/70",
    badgeBg: "bg-[#ff6b00]/10 text-[#ff6b00]",
    image: "/images/motor-shop.png",
    href: "/turbomax-auto-parts",
  },
  {
    slug: "voyage-and-co-travel",
    title: "Travel Agency",
    subtitle: "Voyage & Co Travel",
    description:
      "Discover your next adventure with Voyage & Co. Travel. Premium travel packages to Bali, Maldives, Switzerland, and more.",
    tags: ["Luxury Travel", "Tour Packages", "Destinations"],
    accent: "#f47b20",
    bg: "from-[#0c2340] to-[#061320]",
    textAccent: "text-[#f47b20]",
    borderAccent: "border-[#f47b20]/30",
    hoverBorder: "hover:border-[#f47b20]/70",
    badgeBg: "bg-[#f47b20]/10 text-[#f47b20]",
    image: "/images/travel-agency.png",
    href: "/voyage-and-co-travel",
  },
  {
    slug: "brightsmile-dental-clinic",
    title: "Dental Clinic",
    subtitle: "BrightSmile Dental Clinic",
    description:
      "Professional dental care for the whole family. From routine checkups to cosmetic dentistry, we make every smile brighter.",
    tags: ["Dental Care", "Cosmetic Dentistry", "Family Clinic"],
    accent: "#0891b2",
    bg: "from-[#164e63] to-[#0e7490]",
    textAccent: "text-[#0891b2]",
    borderAccent: "border-[#0891b2]/30",
    hoverBorder: "hover:border-[#0891b2]/70",
    badgeBg: "bg-[#0891b2]/10 text-[#0891b2]",
    image: "/images/dental-clinic.png",
    href: "/brightsmile-dental-clinic",
  },
  {
    slug: "swifthaul-logistics",
    title: "Transport",
    subtitle: "SwiftHaul Logistics",
    description:
      "Fast, reliable freight and logistics solutions for businesses of all sizes. On-time delivery, real-time tracking, and nationwide coverage.",
    tags: ["Freight & Cargo", "Logistics", "Nationwide Delivery"],
    accent: "#ef4444",
    bg: "from-[#0f172a] to-[#0a0f1a]",
    textAccent: "text-[#ef4444]",
    borderAccent: "border-[#ef4444]/30",
    hoverBorder: "hover:border-[#ef4444]/70",
    badgeBg: "bg-[#ef4444]/10 text-[#ef4444]",
    image: "/images/transport.png",
    href: "/swifthaul-logistics",
  },
  {
    slug: "apex-manufacturing-co",
    title: "Manufacturing",
    subtitle: "Apex Manufacturing Co.",
    description:
      "Precision-engineered industrial solutions for modern manufacturing. Heavy-duty equipment, custom fabrication, and end-to-end production services.",
    tags: ["Industrial", "Fabrication", "Heavy Equipment"],
    accent: "#eab308",
    bg: "from-[#111827] to-[#0a0d12]",
    textAccent: "text-[#eab308]",
    borderAccent: "border-[#eab308]/30",
    hoverBorder: "hover:border-[#eab308]/70",
    badgeBg: "bg-[#eab308]/10 text-[#eab308]",
    image: "/images/manufacturing.png",
    href: "/apex-manufacturing-co",
  },
  {
    slug: "harvest-kitchen",
    title: "Food & Beverage",
    subtitle: "Harvest Kitchen",
    description:
      "Farm-to-table dining celebrating fresh, seasonal ingredients. Wholesome meals crafted with organic produce and a passion for honest, nourishing food.",
    tags: ["Farm-to-Table", "Organic", "Seasonal Menu"],
    accent: "#16a34a",
    bg: "from-[#1a2e1a] to-[#0f1a0f]",
    textAccent: "text-[#16a34a]",
    borderAccent: "border-[#16a34a]/30",
    hoverBorder: "hover:border-[#16a34a]/70",
    badgeBg: "bg-[#16a34a]/10 text-[#16a34a]",
    image: "/images/food-and-beverages.png",
    href: "/harvest-kitchen",
  },
  {
    slug: "bionex-labs",
    title: "Bioscience",
    subtitle: "Bionex Labs",
    description:
      "We push the boundaries of bioscience and chemistry to develop breakthrough solutions that transform healthcare, agriculture, and environmental sustainability.",
    tags: ["Bioscience", "R&D", "Sustainability"],
    accent: "#0d9488",
    bg: "from-[#152c47] to-[#0f1e30]",
    textAccent: "text-[#0d9488]",
    borderAccent: "border-[#0d9488]/30",
    hoverBorder: "hover:border-[#0d9488]/70",
    badgeBg: "bg-[#0d9488]/10 text-[#0d9488]",
    image: null,
    href: "/bionex-labs",
  },
  {
    slug: "freshmart-grocery",
    title: "Grocery",
    subtitle: "Freshmart Grocery",
    description:
      "Farm-fresh groceries delivered to your door. Locally sourced produce, pantry staples, and everyday essentials. Since 2010.",
    tags: ["Fresh Produce", "Home Delivery", "Organic"],
    accent: "#16a34a",
    bg: "from-[#14532d] to-[#052e16]",
    textAccent: "text-[#16a34a]",
    borderAccent: "border-[#16a34a]/30",
    hoverBorder: "hover:border-[#16a34a]/70",
    badgeBg: "bg-[#16a34a]/10 text-[#16a34a]",
    image: null,
    href: "/freshmart-grocery",
  },
  {
    slug: "the-pantry",
    title: "Food Store",
    subtitle: "The Pantry",
    description:
      "A curated food store stocked with artisan pantry essentials, imported delicacies, and handpicked specialty goods for the discerning home cook.",
    tags: ["Artisan Foods", "Specialty Goods", "Imported Delicacies"],
    accent: "#d4a574",
    bg: "from-[#7f1d1d] to-[#450a0a]",
    textAccent: "text-[#d4a574]",
    borderAccent: "border-[#d4a574]/30",
    hoverBorder: "hover:border-[#d4a574]/70",
    badgeBg: "bg-[#d4a574]/10 text-[#d4a574]",
    image: null,
    href: "/the-pantry",
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
        <title>Web Designs - Melvin Jones Repol</title>
        <meta
          name="description"
          content="Explore web design projects by Melvin Jones Repol, including websites for restaurants, fitness brands, travel, retail, and professional services."
        />
        <meta
          name="keywords"
          content="web design portfolio, website design, responsive web design, Melvin Jones Repol"
        />
        <meta name="author" content="Melvin Jones Repol" />
        <meta property="og:title" content="Web Designs - Melvin Jones Repol" />
        <meta
          property="og:description"
          content="A collection of responsive web design projects across hospitality, retail, travel, fitness, and professional services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Web Designs" />
        <meta
          property="og:image"
          content="https://web-designs.melvinjonesrepol.com/images/melvinjonesrepol.cover.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:alt"
          content="Melvin Jones Repol web design portfolio"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Designs - Melvin Jones Repol" />
        <meta
          name="twitter:description"
          content="A collection of responsive web design projects across hospitality, retail, travel, fitness, and professional services."
        />
        <meta
          name="twitter:image"
          content="https://web-designs.melvinjonesrepol.com/images/melvinjonesrepol.cover.png"
        />
        <meta name="twitter:creator" content="@mrepol742" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </Head>

      <div className="min-h-screen bg-[#080808] text-white">
        {/* ── Hero ── */}
        <section
          aria-labelledby="portfolio-heading"
          className="relative isolate overflow-hidden border-b border-white/10 px-4 py-24 sm:py-32 lg:py-40"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-px bg-[#39ff14]/70" />
            <div className="absolute inset-y-0 left-[8%] w-px bg-white/[0.06]" />
            <div className="absolute inset-y-0 right-[8%] w-px bg-white/[0.06]" />
            <div className="absolute bottom-0 left-1/2 h-32 w-px -translate-x-1/2 bg-[#39ff14]/30" />
          </div>

          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <h1
              id="portfolio-heading"
              data-aos="fade-up"
              className="max-w-5xl text-5xl font-black uppercase tracking-[-0.065em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
            >
              Websites with a{" "}
              <span className="text-[#39ff14]">clear point</span>
              <span className="text-white/25">.</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-8 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
            >
              A collection of responsive web design projects built for brands
              that need a distinct presence and an effortless user experience.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-10 flex flex-col items-center gap-6 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-[#39ff14] px-6 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-black transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#39ff14] focus:ring-offset-2 focus:ring-offset-[#080808]"
              >
                Explore projects
                <span aria-hidden="true" className="text-base leading-none">
                  ↓
                </span>
              </a>
              <p className="border-l border-white/15 pl-4 text-left text-xs leading-relaxed text-white/40">
                {projects.length} concepts across multiple industries
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          aria-label="Web design projects"
          className="max-w-6xl mx-auto px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24 pb-32 flex flex-col gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
}
