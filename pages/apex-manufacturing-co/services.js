import Head from "next/head";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "CNC Machining",
    description:
      'High-precision CNC milling and turning with tolerances down to ±0.001". Our facility houses over 60 CNC machining centers ranging from 3-axis to full 5-axis simultaneous machining. We handle everything from simple turned parts to complex multi-feature components.',
    capabilities: [
      "3, 4, & 5-Axis Milling",
      "CNC Turning & Boring",
      "Swiss Screw Machining",
      "EDM Wire & Sinker",
      "CMM Inspection",
      "First Article Reports",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Metal Fabrication",
    description:
      'Complete sheet metal and heavy plate fabrication capabilities. From brake forming to complex welded assemblies, we handle material from 24 gauge up to 1" plate steel. Our fabrication floor runs 24/7 for high-demand programs.',
    capabilities: [
      "Brake Forming (Up to 200 Ton)",
      "Shearing & Punching",
      "Sheet Metal Bending & Rolling",
      "Custom Enclosures & Chassis",
      "Heavy Plate Fabrication",
      "Prototype to Production",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
    title: "Welding Services",
    description:
      "AWS D1.1 and ASME IX certified welding across MIG, TIG, flux-core, and stick processes. Our certified welders handle carbon steel, stainless steel, aluminum, and exotic alloys. Robotic welding cells available for high-volume consistent joints.",
    capabilities: [
      "MIG/MAG (GMAW)",
      "TIG (GTAW)",
      "Stick (SMAW)",
      "Flux-Core (FCAW)",
      "Robotic Welding Cells",
      "Certified to AWS D1.1 & ASME IX",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Powder Coating",
    description:
      "Full-service industrial powder coating with in-house pretreatment, application, and curing. We process parts up to 20' long with a wide range of polyester, epoxy, and hybrid powders. Any RAL color, textured or smooth.",
    capabilities: [
      "Sandblasting & Media Prep",
      "Multi-Stage Iron Phosphate",
      "Electrostatic Application",
      "Batch & Conveyor Ovens",
      "Textured, Smooth & Metallic",
      "MIL-SPEC Coatings",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Laser Cutting",
    description:
      'Fiber and CO2 laser cutting with rapid changeover and tight nesting for material efficiency. Our fiber lasers cut up to 1" carbon steel, 3/4" stainless, and 1/2" aluminum with burr-free edges ready for downstream processing.',
    capabilities: [
      "Fiber Laser 4kW–6kW",
      "CO2 Laser Cutting",
      "Steel, Stainless, Aluminum",
      "Brass & Copper",
      "Nested Part Optimization",
      "Prototype & Volume Runs",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Assembly Services",
    description:
      "Full mechanical and electromechanical assembly from sub-components to complete turnkey products. Our assembly lines handle hardware installation, wiring harness integration, testing, and custom packaging. Scalable from bench assembly to line production.",
    capabilities: [
      "Mechanical Assembly",
      "Electromechanical Integration",
      "Torque & Calibration",
      "Functional Testing",
      "Custom Packaging & Kitting",
      "BOM Management",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Apex Manufacturing Co.</title>
      </Head>

      <Header />

      {/* Page Hero */}
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
            Our Capabilities
          </span>
          <h1
            className="section-heading text-4xl md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Manufacturing <span className="text-industrial">Services</span>
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
            Six core competencies under one roof. From raw material to finished,
            inspected, and packaged product — Apex is your single-source
            manufacturing partner.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                aos={
                  i % 3 === 0
                    ? "fade-up"
                    : i % 3 === 1
                      ? "slide-left"
                      : "zoom-in"
                }
                aosDelay={String((i % 3) * 100)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-steel-800/30 border-y border-steel-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              Our Process
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              From Concept to{" "}
              <span className="text-industrial">Completion</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Quote & Review",
                desc: "Submit drawings for DFM review and detailed pricing within 24–48 hours.",
              },
              {
                step: "02",
                title: "Engineering",
                desc: "Toolpath programming, fixture design, and process validation.",
              },
              {
                step: "03",
                title: "Production",
                desc: "Machining, fabrication, welding — executed on schedule.",
              },
              {
                step: "04",
                title: "Finishing",
                desc: "Powder coating, plating, or custom surface treatments.",
              },
              {
                step: "05",
                title: "QA & Ship",
                desc: "CMM inspection, first article reports, and on-time delivery.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-industrial/10 border border-industrial/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl text-industrial font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-steel-400 text-sm">{item.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t border-dashed border-steel-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              Materials
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We Work With <span className="text-industrial">All Metals</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Carbon Steel", grade: "A36, 1018, 1045, 4140" },
              { name: "Stainless Steel", grade: "304, 316, 17-4PH, 420" },
              { name: "Aluminum", grade: "6061, 7075, 5052, 2024" },
              { name: "Titanium", grade: "Ti-6Al-4V, Grade 2" },
              { name: "Copper / Brass", grade: "C110, C360, C260" },
              { name: "Inconel", grade: "625, 718" },
              { name: "Tool Steel", grade: "A2, D2, H13, M2" },
              { name: "Plastics", grade: "Delrin, PEEK, Nylon, UHMW" },
            ].map((mat, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={String(i * 75)}
                className="card-dark p-4 text-center"
              >
                <div className="font-heading text-sm uppercase tracking-wider text-white mb-1">
                  {mat.name}
                </div>
                <div className="text-steel-500 text-xs">{mat.grade}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
