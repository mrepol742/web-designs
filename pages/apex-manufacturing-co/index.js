import Head from "next/head";
import ServiceCard from "./components/ServiceCard";
import ProductCard from "./components/ProductCard";
import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectLink from "@/components/ProjectLink";

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
      'High-precision CNC milling and turning with tolerances down to ±0.001". Multi-axis capabilities for complex geometries.',
    capabilities: [
      "3, 4, & 5-Axis Milling",
      "CNC Turning",
      "Swiss Screw Machining",
      "EDM Wire/Cut",
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
      "Complete sheet metal fabrication from laser cutting to final assembly. Prototype through high-volume production runs.",
    capabilities: [
      "Brake Forming",
      "Shearing & Punching",
      "Sheet Metal Bending",
      "Custom Enclosures",
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
      </svg>
    ),
    title: "Welding",
    description:
      "AWS-certified welding services across MIG, TIG, and stick processes. Structural and precision welding for all metals.",
    capabilities: [
      "MIG/MAG Welding",
      "TIG Welding",
      "Stick Welding",
      "Robotic Welding",
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
      "Durable industrial powder coating finishes in any RAL color. In-house prep and curing for consistent quality.",
    capabilities: [
      "Sandblasting Prep",
      "Multi-Stage Pretreatment",
      "Batch & Conveyor Curing",
      "Textured & Smooth Finishes",
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
      'Fiber laser cutting up to 1" thick steel with ±0.005" accuracy. Fast turnaround for complex 2D profiles.',
    capabilities: [
      "Fiber Laser 4kW+",
      "CO2 Laser Cutting",
      "Multi-Material",
      "Nested Part Optimization",
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
    title: "Assembly",
    description:
      "Full mechanical and electromechanical assembly services. From sub-assemblies to complete turnkey builds.",
    capabilities: [
      "Mechanical Assembly",
      "Electromechanical",
      "Quality Inspection",
      "Packaging & Kitting",
    ],
  },
];

const products = [
  {
    name: "Custom Brackets",
    description:
      "Precision-formed brackets in steel, stainless, and aluminum. Custom mounting solutions for any application.",
    specs: [
      { label: "Materials", value: "Steel / SS / Aluminum" },
      { label: "Thickness", value: "0.5mm – 6mm" },
      { label: "Tolerance", value: "±0.05mm" },
    ],
    moq: "100 pcs",
  },
  {
    name: "Precision Gears",
    description:
      "CNC-machined spur, helical, and bevel gears. Hardened and ground to AGMA Class 10+.",
    specs: [
      { label: "Diameter", value: "10mm – 500mm" },
      { label: "Module", value: "0.5 – 8" },
      { label: "Tolerance", value: "AGMA 10+" },
    ],
    moq: "50 pcs",
  },
];

function Counter({ end, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-industrial font-bold">
        {count}
        {suffix}
      </div>
      <div className="font-heading text-xs uppercase tracking-widest text-steel-400 mt-2">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Apex Manufacturing Co. — Precision Since 2005</title>
      </Head>

      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Industrial background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-steel-900 via-steel-900 to-steel-800" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(234,179,8,0.3) 50px),
                              repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(234,179,8,0.3) 50px)`,
              backgroundSize: "50px 50px",
            }}
          />
          {/* Diagonal stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-industrial" />
          <div className="absolute top-0 left-0 w-2 h-full bg-industrial/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div data-aos="fade-up" data-aos-delay="100">
                <span className="inline-block bg-industrial/10 border border-industrial/30 text-industrial font-heading text-xs uppercase tracking-[0.3em] px-4 py-2 mb-6">
                  ISO 9001:2015 Certified
                </span>
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-4xl sm:text-5xl lg:text-7xl font-heading uppercase tracking-wider text-white leading-tight mb-6"
              >
                Precision
                <br />
                <span className="text-industrial">Manufacturing</span>
                <br />
                Solutions
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-steel-400 text-lg max-w-lg mb-8 leading-relaxed"
              >
                From prototype to production — Apex delivers
                precision-engineered components and assemblies for the most
                demanding industries.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex flex-wrap gap-4"
              >
                <ProjectLink href="/contact" className="btn-primary">
                  Request Quote
                </ProjectLink>
                <ProjectLink href="/services" className="btn-outline">
                  Our Services
                </ProjectLink>
              </div>
            </div>

            {/* Industrial graphic */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Outer ring */}
                <div className="absolute inset-0 border-2 border-steel-700/30 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-4 border border-industrial/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                {/* Center gear */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-steel-800/80 border-4 border-industrial/40 flex items-center justify-center rotate-45">
                    <div className="w-32 h-32 bg-industrial/10 border-2 border-industrial/30 flex items-center justify-center -rotate-45">
                      <svg
                        className="w-16 h-16 text-industrial"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Corner accents */}
                {[
                  "top-0 left-8",
                  "top-8 right-0",
                  "bottom-8 left-0",
                  "bottom-0 right-8",
                ].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} w-3 h-3 bg-industrial/60`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-steel-500">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-steel-500 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-steel-800/50 border-y border-steel-700/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter end={19} suffix="+" label="Years Experience" />
            <Counter end={2500} suffix="+" label="Projects Delivered" />
            <Counter end={150} suffix="+" label="CNC Machines" />
            <Counter end={99} suffix="%" label="On-Time Delivery" />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              What We Do
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Industrial <span className="text-industrial">Capabilities</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <p
              className="text-steel-400 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Full-service manufacturing from raw material to finished product.
              One partner for your entire production chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                aos={i % 2 === 0 ? "fade-up" : "slide-left"}
                aosDelay={String((i % 3) * 100)}
              />
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <ProjectLink href="/services" className="btn-outline">
              All Services →
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-steel-800/30 border-y border-steel-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              Product Lines
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Featured <span className="text-industrial">Products</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, i) => (
              <ProductCard
                key={product.name}
                {...product}
                aos={i === 0 ? "slide-left" : "zoom-in"}
                aosDelay="0"
              />
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <ProjectLink href="/products" className="btn-outline">
              View All Products →
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* WHY APEX */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subheading" data-aos="fade-up">
                Why Apex
              </span>
              <h2
                className="section-heading"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Built for <span className="text-industrial">Precision</span>
              </h2>
              <div
                className="industrial-divider"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <div className="space-y-6">
                {[
                  {
                    title: "ISO 9001:2015 & AS9100D Certified",
                    desc: "Quality management systems meeting aerospace and defense standards.",
                  },
                  {
                    title: "In-House Engineering Team",
                    desc: "DFM review, CAD/CAM programming, and prototyping under one roof.",
                  },
                  {
                    title: "Scalable Production",
                    desc: "From one-off prototypes to 100,000+ unit production runs.",
                  },
                  {
                    title: "24/7 Machining Capability",
                    desc: "Lights-out manufacturing for urgent and high-volume orders.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={String((i + 2) * 100)}
                    className="flex gap-4"
                  >
                    <div
                      className="w-1 h-full bg-industrial shrink-0 mt-1"
                      style={{ minHeight: "40px" }}
                    />
                    <div>
                      <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-steel-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facility Image Placeholder */}
            <div data-aos="zoom-in" data-aos-delay="200" className="relative">
              <div className="card-dark p-4">
                <div className="aspect-[4/3] bg-steel-700/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-steel-700/30 to-steel-800/50" />
                  <div className="relative text-center">
                    <svg
                      className="w-20 h-20 text-steel-600 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <p className="font-heading text-sm uppercase tracking-widest text-steel-500">
                      45,000 sq ft Facility
                    </p>
                    <p className="text-xs text-steel-600 mt-1">
                      Houston, TX Manufacturing Plant
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-industrial/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-steel-800/30 border-y border-steel-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              Testimonials
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Trusted by{" "}
              <span className="text-industrial">Industry Leaders</span>
            </h2>
            <div
              className="industrial-divider mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Apex delivered 10,000 precision brackets in 3 weeks. Tolerances were perfect, quality flawless. They're our go-to fabrication partner.",
                author: "James Hartley",
                role: "VP Supply Chain",
                company: "AeroDyne Systems",
              },
              {
                quote:
                  "Their engineering team caught a design flaw that would have cost us $200K in field failures. Saved our entire production run.",
                author: "Maria Chen",
                role: "Engineering Director",
                company: "TitanHydraulics",
              },
              {
                quote:
                  "We needed an emergency batch of 500 enclosures. Apex had them cut, formed, and coated in 10 days. Unreal turnaround.",
                author: "Derek Owens",
                role: "Plant Manager",
                company: "Pacific Automation",
              },
            ].map((t, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={String(i * 150)}
                className="card-dark p-8 relative"
              >
                <div className="absolute top-4 right-6 text-6xl text-industrial/10 font-heading leading-none">
                  "
                </div>
                <p className="text-steel-300 text-sm leading-relaxed mb-6 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-steel-700/50 pt-4">
                  <div className="w-10 h-10 bg-industrial/20 flex items-center justify-center">
                    <span className="font-heading text-industrial text-sm">
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading text-sm uppercase tracking-wider text-white">
                      {t.author}
                    </div>
                    <div className="text-steel-500 text-xs">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
