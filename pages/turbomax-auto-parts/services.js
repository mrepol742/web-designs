import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ProjectLink from "@/components/ProjectLink";

const services = [
  {
    icon: "🔍",
    name: "Engine Diagnostics",
    description:
      "Full computer scan and manual inspection. We identify check engine lights, misfires, and performance issues with dealer-level diagnostic tools.",
    priceRange: "$75 – $150",
    time: "1-2 hours",
  },
  {
    icon: "🛢️",
    name: "Oil Change Service",
    description:
      "Synthetic or conventional oil change with multi-point inspection. Includes filter replacement, fluid top-off, and tire pressure check.",
    priceRange: "$39 – $89",
    time: "30-45 min",
  },
  {
    icon: "🛑",
    name: "Brake Service",
    description:
      "Complete brake inspection, pad/rotor replacement, brake fluid flush, and caliper service. OEM and performance options available.",
    priceRange: "$150 – $450",
    time: "2-4 hours",
  },
  {
    icon: "🔄",
    name: "Tire Rotation & Balance",
    description:
      "Four-wheel rotation, computer balance, and alignment check. Extends tire life and improves handling.",
    priceRange: "$45 – $90",
    time: "30-60 min",
  },
  {
    icon: "⚡",
    name: "Custom Performance Tuning",
    description:
      "ECU remapping, dyno tuning, and bolt-on installation. Unlock your engine's true potential with proven gains.",
    priceRange: "$299 – $999",
    time: "3-6 hours",
  },
  {
    icon: "✨",
    name: "Full Detailing",
    description:
      "Interior deep clean, exterior wash, clay bar, wax, and engine bay detailing. Showroom-ready results.",
    priceRange: "$120 – $350",
    time: "3-5 hours",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — TurboMax Auto Parts</title>
      </Head>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gunmetal-600 bg-hex-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              data-aos="fade-up"
              className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2"
            >
              Expert Mechanics
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-5xl font-heading uppercase tracking-wider"
            >
              Our <span className="text-neon">Services</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-steel mt-3 max-w-xl"
            >
              From routine maintenance to full performance builds. ASE-certified
              technicians working on what you love.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {services.map((service, i) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="py-20 bg-gunmetal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              data-aos="zoom-in"
              className="text-4xl font-heading uppercase tracking-wider"
            >
              Book a <span className="text-neon">Service</span>
            </h2>
            <p data-aos="fade-up" className="text-steel mt-4 max-w-xl mx-auto">
              Walk-ins welcome. Appointments get priority. Same-day service for
              most jobs.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <ProjectLink href="/contact" className="btn-neon">
                Schedule Now
              </ProjectLink>
              <a href="tel:+15551234567" className="btn-outline">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
