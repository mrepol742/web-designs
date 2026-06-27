import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillBar from "./components/SkillBar";

const skills = {
  Frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Vue.js / Angular", level: 78 },
  ],
  Backend: [
    { name: "Laravel / PHP", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "Java / Kotlin", level: 80 },
    { name: "Python", level: 75 },
  ],
  "DevOps & Tools": [
    { name: "Docker", level: 82 },
    { name: "AWS / Vercel", level: 85 },
    { name: "Git & CI/CD", level: 90 },
    { name: "Linux", level: 88 },
  ],
};

const timeline = [
  {
    year: "2026",
    title: "Mid Level Full Stack Developer",
    company: "UP-TO-DATE WebDesign",
    desc: "Developing and maintaining web applications, implementing new features, supporting system migrations, optimizing performance, and collaborating with stakeholders to deliver scalable software solutions.",
  },
  {
    year: "2026",
    title: "Independent Software Consultant",
    company: "Part Time",
    desc: "Supporting and maintaining client software systems while providing technical consulting on new features, system improvements, infrastructure, and long-term product strategy.",
  },
  {
    year: "2025",
    title: "IT Staff Intern",
    company: "Apptrade Inc.",
    desc: "Maintained IT infrastructure including hardware, software, and network. Responsible for troubleshooting technical issues, providing end-user support, and ensuring the reliability of the organization's IT systems. (250hrs)",
  },
  {
    year: "2021",
    title: "Software Engineer",
    company: "Freelance",
    desc: "Delivered custom web and mobile applications for capstone students, business clients, and independent projects. Led the full software development lifecycle — from requirements gathering and system planning to design, development, and production deployment.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Melvin Jones Repol</title>
      </Head>
      <Header />

      <main className="min-h-screen pt-20">
        {/* Bio Section */}
        <section className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Bio */}
            <div className="lg:col-span-3">
              <p
                data-aos="fade-up"
                className="text-neon font-mono text-sm tracking-wider mb-2"
              >
                {"// About Me"}
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="section-heading mb-6"
              >
                Developer, designer,
                <br />
                <span className="gradient-text">occasional overthinker.</span>
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="space-y-4 text-muted leading-relaxed"
              >
                <p>
                  I&apos;m a full-stack developer with a passion for crafting
                  digital experiences that are both beautiful and performant.
                  Currently based somewhere with good coffee and fast Wi-Fi,
                  building tools that make developers&apos; lives easier.
                </p>
                <p>
                  My journey started with curiosity — poking at HTML files,
                  breaking WordPress themes, and wondering how the internet
                  actually works. That curiosity turned into a career spanning
                  frontend engineering, backend architecture, and everything in
                  between.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me reading about
                  distributed systems, contributing to open source, or arguing
                  with my mechanical keyboard collection about which switches
                  are actually the best. (It&apos;s the NK Silk, obviously.)
                </p>
              </div>

              {/* Quick Stats */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="grid grid-cols-3 gap-4 mt-8"
              >
                {[
                  { label: "Years Exp", value: "5+" },
                  { label: "Projects", value: "30+" },
                  { label: "Coffees/Day", value: "∞" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card text-center !p-4">
                    <div className="text-2xl font-bold neon-text font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo placeholder + quick info */}
            <div
              className="lg:col-span-2"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="glass-card">
                <div className="w-full aspect-square rounded-lg bg-bg-light flex items-center justify-center mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent" />
                  <span className="text-8xl opacity-50 relative">👨‍💻</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Location</span>
                    <span className="text-white font-mono">Remote / Earth</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Focus</span>
                    <span className="text-white font-mono">Full-Stack</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Status</span>
                    <span className="text-neon font-mono flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              data-aos="fade-up"
              className="text-neon font-mono text-sm tracking-wider mb-2"
            >
              {"// Skills & Expertise"}
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="section-heading mb-12"
            >
              My Tech Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], catIdx) => (
                <div
                  key={category}
                  data-aos="fade-up"
                  data-aos-delay={catIdx * 150}
                  className="glass-card"
                >
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon rounded-full" />
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((s, i) => (
                      <SkillBar
                        key={s.name}
                        skill={s.name}
                        level={s.level}
                        aosDelay={catIdx * 150 + i * 80}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              data-aos="fade-up"
              className="text-neon font-mono text-sm tracking-wider mb-2"
            >
              {"// Experience"}
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="section-heading mb-12"
            >
              Where I&apos;ve Worked
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    data-aos={i % 2 === 0 ? "slide-right" : "slide-left"}
                    data-aos-delay={i * 100}
                    className={`relative flex flex-col md:flex-row ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    } items-start md:items-center gap-4 md:gap-8`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-neon rounded-full transform -translate-x-[5px] md:-translate-x-[6px] z-10 mt-1.5 md:mt-0" />

                    {/* Content */}
                    <div
                      className={`flex-1 pl-6 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                    >
                      <span className="text-neon font-mono text-xs">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neon/70 font-mono mt-0.5">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
