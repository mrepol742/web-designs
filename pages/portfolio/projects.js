import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    title: "Ulisha Store Laravel",
    description:
      "A modern e-commerce solution tailored for small to medium-sized businesses, built with Laravel for seamless setup and cost-effective web hosting.",
    emoji: "🛒",
    tech: ["Laravel", "Blade", "React", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://www.melvinjonesrepol.com/ulisha-store-laravel",
    featured: true,
  },
  {
    title: "Ulisha Store Next",
    description:
      "A modern e-commerce solution tailored for startups, enabling seamless setup and free hosting on Vercel and Supabase Cloud.",
    emoji: "🏪",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://www.melvinjonesrepol.com/ulisha-store-next",
    featured: true,
  },
  {
    title: "Axleshift Freight Management",
    description:
      "A freight management platform providing businesses with a cutting-edge solution for security and reliability.",
    emoji: "🚚",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://www.melvinjonesrepol.com/axleshift-freight-management",
    featured: true,
  },
  {
    title: "Protocol Discussion Platform",
    description:
      "A content-first discussion platform where users can post structured protocols, create threads, and engage through comments, reviews, and voting — powered by Typesense.",
    emoji: "💬",
    tech: ["Laravel", "React", "TypeScript", "Typesense", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://www.melvinjonesrepol.com/protocol-discussion-platform",
    repoUrl: "https://github.com/mrepol742/protocol-discussion-platform",
    featured: true,
  },
  {
    title: "Point of Sale",
    description:
      "A lightweight, web-based and offline-capable POS system with multi-department role support and full functionality.",
    emoji: "🧾",
    tech: ["Laravel", "JavaScript", "React", "Bootstrap"],
    category: "fullstack",
    liveUrl: "https://www.melvinjonesrepol.com/point-of-sale",
    featured: false,
  },
  {
    title: "Clearflow",
    description:
      "A modern community water billing and management system built with Expo (React Native) and Laravel.",
    emoji: "💧",
    tech: ["Laravel", "Expo", "React Native"],
    category: "fullstack",
    repoUrl: "https://github.com/mrepol742/clearflow-community-water-billing",
    featured: false,
  },
  {
    title: "NPM Guard",
    description:
      "A security tool to monitor and secure NPM package installations, ensuring the integrity and safety of your dependencies against supply chain attacks.",
    emoji: "🛡️",
    tech: ["Python"],
    category: "devops",
    repoUrl: "https://github.com/mrepol742/npm-guard",
    featured: false,
  },
  {
    title: "Web Surface Scan",
    description:
      "A lightweight developer-focused tool for analyzing a website's technology stack, integrations, and potential security flaws via automated browser inspection.",
    emoji: "🔍",
    tech: ["Node.js", "TypeScript"],
    category: "backend",
    liveUrl: "https://www.melvinjonesrepol.com/web-surface-scan",
    repoUrl: "https://github.com/mrepol742/web-surface-scan",
    featured: false,
  },
  {
    title: "Enterprise Asset Management System",
    description:
      "An enterprise asset management platform with role-based access control, asset tracking, and assignment workflows integrated with AWS Cognito for authentication and SSO.",
    emoji: "🏢",
    tech: ["Laravel", "Angular", "Tailwind CSS", "AWS Cognito"],
    category: "fullstack",
    featured: false,
  },
  {
    title: "Project Canis",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript with lean architecture, Prisma ORM, and Dockerization.",
    emoji: "🤖",
    tech: ["TypeScript", "Prisma", "Docker"],
    category: "backend",
    liveUrl: "https://www.melvinjonesrepol.com/canis-chatbot",
    featured: false,
  },
  {
    title: "Hall of Codes Next",
    description:
      "The Next.js version of the Hall of Codes website, built to promote the community, share knowledge, and showcase projects.",
    emoji: "👨‍💻",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://hallofcodes.vercel.app",
    repoUrl: "https://github.com/hallofcodes/hallofcodes",
    featured: false,
  },
  {
    title: "DJ Mixer Console",
    description:
      "A simple, lightweight, fully offline-capable mixer console showcasing Web Audio API capabilities for real-time audio manipulation.",
    emoji: "🎧",
    tech: ["Angular", "TypeScript", "Web Audio API", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://dj-remix-console.netlify.app",
    repoUrl: "https://github.com/mrepol742/dj-mixer-console",
    featured: false,
  },
  {
    title: "Webvium Browser",
    description:
      "A lightweight, fast, and privacy-focused Android web browser built entirely from scratch, balancing speed, security, and functionality.",
    emoji: "🌐",
    tech: ["Java"],
    category: "mobile",
    liveUrl: "https://www.melvinjonesrepol.com/webvium-browser",
    featured: true,
  },
  {
    title: "Webvium Launcher",
    description:
      "A lightweight, modern, and lightning-fast Android launcher built with speed, simplicity, and customization in mind.",
    emoji: "📱",
    tech: ["Kotlin"],
    category: "mobile",
    repoUrl: "https://github.com/webvium/webvium-launcher",
    featured: false,
  },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
  { key: "mobile", label: "Mobile" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <>
      <Head>
        <title>Projects — Melvin Jones Repol</title>
      </Head>
      <Header />

      <main className="min-h-screen pt-20">
        <section className="page-container">
          <p
            data-aos="fade-up"
            className="text-neon font-mono text-sm tracking-wider mb-2"
          >
            {"// My Work"}
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="section-heading mb-4"
          >
            Projects & Experiments
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="section-sub max-w-2xl mb-12"
          >
            A collection of things I&apos;ve built, broken, and shipped. Some
            are production-ready, some are weekend experiments — all taught me
            something.
          </p>

          {/* Filter Tabs */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === cat.key
                    ? "bg-neon text-bg"
                    : "bg-white/5 text-muted hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-60">
                  {cat.key === "all"
                    ? allProjects.length
                    : allProjects.filter((p) => p.category === cat.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                aosDelay={i * 80}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted">
              <p className="text-lg">No projects in this category yet.</p>
              <p className="text-sm mt-2">
                Check back soon — something&apos;s brewing.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
