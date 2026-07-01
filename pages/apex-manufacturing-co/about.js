import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const milestones = [
  {
    year: "2005",
    event:
      "Apex Manufacturing founded with 5 employees and a single CNC mill in a 3,000 sq ft shop.",
  },
  {
    year: "2008",
    event:
      "Expanded to 15,000 sq ft facility. Added welding, fabrication, and powder coating capabilities.",
  },
  {
    year: "2012",
    event:
      "Achieved ISO 9001:2008 certification. Won first major aerospace subcontract program.",
  },
  {
    year: "2016",
    event:
      "Relocated to 60,000 sq ft facility. Installed 5-axis machining center and robotic welding cells.",
  },
  {
    year: "2019",
    event:
      "Earned AS9100D certification. Launched in-house quality lab with CMM and optical inspection.",
  },
  {
    year: "2023",
    event:
      "Expanded to 90,000+ sq ft across two facilities. Over 100 CNC machines and 200+ employees.",
  },
];

const team = [
  {
    name: "Robert Kessler",
    role: "Founder & CEO",
    bio: "Started Apex with a single Bridgeport mill and a relentless focus on quality. 35+ years in precision manufacturing.",
  },
  {
    name: "Diane Morales",
    role: "VP of Operations",
    bio: "Former aerospace program manager. Oversees production scheduling, capacity planning, and on-time delivery.",
  },
  {
    name: "Hank Tanaka",
    role: "Head of Quality",
    bio: "Leads our ISO and AS9100 compliance programs. 20+ years in metrology and process validation.",
  },
  {
    name: "Lisa Nguyen",
    role: "Engineering Manager",
    bio: "Manages DFM reviews, toolpath programming, and fixture design. Expertise in multi-axis machining strategies.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Apex Manufacturing Co.</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-800/30 border-b border-steel-700/30 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(234,179,8,0.3) 50px),
                            repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(234,179,8,0.3) 50px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-subheading" data-aos="fade-up">
            Who We Are
          </span>
          <h1
            className="section-heading text-4xl md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The Company Behind the{" "}
            <span className="text-industrial">Precision</span>
          </h1>
          <div
            className="industrial-divider"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <p
            className="text-steel-400 text-lg max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            From a one-machine shop to a 90,000+ sq ft operation — Apex
            Manufacturing has spent two decades earning the trust of aerospace,
            automotive, and defense customers.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <span className="section-subheading">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-white mb-6">
                Built From{" "}
                <span className="text-industrial">Nothing But Grit</span>
              </h2>
              <p className="text-steel-400 leading-relaxed mb-4">
                In 2005, Robert Kessler walked into a 3,000 sq ft shop in
                Houston with a single Bridgeport mill, a used Haas lathe, and a
                stubborn belief that a small shop could compete on quality with
                the big guys.
              </p>
              <p className="text-steel-400 leading-relaxed mb-4">
                Two decades later, Apex Manufacturing operates two facilities
                spanning 90,000+ sq ft with over 100 CNC machines, certified
                welding cells, in-house powder coating, and a quality lab that
                rivals organizations ten times our size.
              </p>
              <p className="text-steel-400 leading-relaxed">
                We&apos;ve never chased volume for its own sake. Every order —
                whether it&apos;s 10 prototypes or 100,000 production parts —
                gets the same attention to detail, the same rigorous inspection,
                and the same on-time commitment.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="card-dark p-10 text-center"
            >
              <div className="text-6xl mb-6">🏭</div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-heading text-3xl text-industrial font-bold">
                    90K+
                  </div>
                  <div className="text-steel-500 text-xs uppercase tracking-widest mt-1">
                    Sq Ft Facility
                  </div>
                </div>
                <div>
                  <div className="font-heading text-3xl text-industrial font-bold">
                    100+
                  </div>
                  <div className="text-steel-500 text-xs uppercase tracking-widest mt-1">
                    CNC Machines
                  </div>
                </div>
                <div>
                  <div className="font-heading text-3xl text-industrial font-bold">
                    200+
                  </div>
                  <div className="text-steel-500 text-xs uppercase tracking-widest mt-1">
                    Employees
                  </div>
                </div>
                <div>
                  <div className="font-heading text-3xl text-industrial font-bold">
                    20+
                  </div>
                  <div className="text-steel-500 text-xs uppercase tracking-widest mt-1">
                    Years Running
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-steel-800/30 border-y border-steel-700/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              History
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Two Decades of <span className="text-industrial">Growth</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                data-aos={i % 2 === 0 ? "fade-up" : "slide-left"}
                data-aos-delay={String(i * 100)}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 bg-industrial text-steel-900 font-heading text-sm font-bold px-4 py-2">
                  {m.year}
                </div>
                <p className="text-steel-400 leading-relaxed pt-1">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              Compliance
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Certified <span className="text-industrial">Quality</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "ISO 9001:2015",
                desc: "Quality management system certification for all manufacturing operations.",
              },
              {
                title: "AS9100D",
                desc: "Aerospace quality management standard. Required by major OEMs and Tier 1 suppliers.",
              },
              {
                title: "ITAR Registered",
                desc: "Registered with the State Department for defense and military manufacturing programs.",
              },
              {
                title: "AWS D1.1",
                desc: "Certified welding procedures for structural steel. All welders qualified to ASME IX.",
              },
            ].map((cert, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
                className="card-dark p-6 text-center"
              >
                <div className="w-16 h-16 bg-industrial/10 border border-industrial/30 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-industrial"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-steel-500 text-xs leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-steel-800/30 border-y border-steel-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              Leadership
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The Team Behind <span className="text-industrial">Apex</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
                className="card-dark p-6 text-center group hover:border-industrial/40 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-industrial/10 border border-industrial/30 flex items-center justify-center mx-auto mb-4 group-hover:border-industrial/60 transition-colors">
                  <span className="font-heading text-2xl text-industrial font-bold">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-white mb-1">
                  {person.name}
                </h3>
                <p className="text-industrial text-xs uppercase tracking-widest mb-3">
                  {person.role}
                </p>
                <p className="text-steel-500 text-xs leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
