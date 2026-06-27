import Head from "next/head";
import ProjectLink from "@/components/ProjectLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const featuredProjects = [
  {
    title: "Ulisha Store Laravel",
    description:
      "A modern e-commerce solution tailored for small to medium-sized businesses, built with Laravel for seamless setup and cost-effective web hosting.",
    emoji: "🛒",
    tech: ["Laravel", "Blade", "React", "Tailwind CSS"],
    liveUrl: "https://www.melvinjonesrepol.com/ulisha-store-laravel",
    featured: true,
  },
  {
    title: "Ulisha Store Next",
    description:
      "A modern e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
    emoji: "🏪",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://www.melvinjonesrepol.com/ulisha-store-next",
    featured: true,
  },
  {
    title: "Axleshift Freight Management",
    description:
      "A freight management platform providing businesses with a cutting-edge solution for security and reliability.",
    emoji: "🚚",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    liveUrl: "https://www.melvinjonesrepol.com/axleshift-freight-management",
    featured: true,
  },
  {
    title: "Protocol Discussion Platform",
    description:
      "A content-first discussion platform with structured protocols, threaded discussions, comments, reviews, and voting — powered by Typesense.",
    emoji: "💬",
    tech: ["Laravel", "React", "TypeScript", "Typesense", "Tailwind CSS"],
    liveUrl: "https://www.melvinjonesrepol.com/protocol-discussion-platform",
    repoUrl: "https://github.com/mrepol742/protocol-discussion-platform",
    featured: true,
  },
  {
    title: "Webvium Browser",
    description:
      "A lightweight, fast, and privacy-focused Android web browser built entirely from scratch, balancing speed, security, and functionality.",
    emoji: "🌐",
    tech: ["Java"],
    liveUrl: "https://www.melvinjonesrepol.com/webvium-browser",
    featured: true,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Melvin Jones Repol — Full Stack Developer</title>
      </Head>
      <Header />

      <main className="grid-bg">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon/3 rounded-full blur-[96px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <p
                data-aos="fade-up"
                className="text-neon font-mono text-sm mb-4 tracking-wider"
              >
                Hello, I&apos;m
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
              >
                <span className="text-white">Melvin Jones Repol</span>
                <br />
                <span className="gradient-text">Developer</span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
              >
                I build{" "}
                <span className="text-white font-medium">
                  high-performance web apps
                </span>
                , design{" "}
                <span className="text-white font-medium">
                  intuitive interfaces
                </span>
                , and occasionally break things in the name of{" "}
                <span className="neon-text">innovation</span>.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-10 flex flex-wrap gap-4"
              >
                <ProjectLink href="/projects" className="neon-btn">
                  View Projects →
                </ProjectLink>
                <ProjectLink href="/contact" className="neon-btn-outline">
                  Get in Touch
                </ProjectLink>
              </div>

              {/* Scroll indicator */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="mt-20 flex items-center gap-3 text-muted"
              >
                <div className="w-px h-12 bg-gradient-to-b from-neon/50 to-transparent" />
                <span className="text-xs font-mono tracking-wider uppercase">
                  Scroll to explore
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p
                  data-aos="fade-up"
                  className="text-neon font-mono text-sm tracking-wider mb-2"
                >
                  {"// Selected Work"}
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="section-heading"
                >
                  Featured Projects
                </h2>
              </div>
              <ProjectLink
                href="/projects"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-sm text-muted hover:text-neon transition-colors hidden sm:block"
              >
                View all →
              </ProjectLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  aosDelay={i * 100}
                />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <ProjectLink href="/projects" className="neon-btn-outline text-sm">
                View All Projects →
              </ProjectLink>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-aos="zoom-in"
              className="relative glass-card text-center py-16 px-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Let&apos;s build something{" "}
                  <span className="neon-text">together</span>
                </h2>
                <p className="text-muted text-lg max-w-lg mx-auto mt-4 mb-8">
                  I&apos;m always open to new opportunities, collaborations, and
                  interesting conversations about technology and design.
                </p>
                <ProjectLink href="/contact" className="neon-btn text-lg !px-8 !py-4">
                  Start a Conversation →
                </ProjectLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
