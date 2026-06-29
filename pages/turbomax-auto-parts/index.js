import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectLink from "@/components/ProjectLink";

const featuredCategories = [
  { name: "Brake Systems", icon: "🛑", desc: "Pads, rotors, calipers & lines" },
  { name: "Engine Parts", icon: "🔧", desc: "Filters, belts, gaskets & more" },
  { name: "Performance", icon: "⚡", desc: "Exhausts, intakes, tuners" },
  { name: "Lighting", icon: "💡", desc: "LED, HID & custom setups" },
];

const brands = [
  "Brembo",
  "Bosch",
  "NGK",
  "Mobil 1",
  "K&N",
  "Bilstein",
  "Monroe",
  "Duralast",
];

const testimonials = [
  {
    name: "Marcus T.",
    vehicle: "2019 Mustang GT",
    text: "Best auto parts shop in the city. Found performance parts I couldn't find anywhere else. The staff actually knows what they're talking about.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    vehicle: "2021 Honda Civic",
    text: "Got my full brake job done here — fair price, fast turnaround, and they showed me exactly what needed replacing. No upselling.",
    rating: 5,
  },
  {
    name: "Diego R.",
    vehicle: "2017 F-150",
    text: "Running their cold air intake and exhaust setup. Truck feels like a different beast. TurboMax knows performance.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>TurboMax Auto Parts — Premium Parts & Expert Service</title>
      </Head>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center bg-hex-pattern overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gunmetal via-gunmetal-600 to-gunmetal opacity-90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <p
                data-aos="fade-up"
                className="text-neon text-sm font-bold uppercase tracking-[0.3em] mb-4"
              >
                Since 2008 — 742 Racing Blvd
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-5xl sm:text-7xl lg:text-8xl font-heading uppercase leading-[0.9] tracking-wider"
              >
                Power Your
                <br />
                <span className="text-gradient-neon">Ride.</span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-steel text-lg mt-6 max-w-xl leading-relaxed"
              >
                Premium auto parts, expert mechanical services, and custom
                performance solutions. From daily drivers to track machines — we
                keep you moving.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap gap-4 mt-8"
              >
                <ProjectLink href="/shop" className="btn-neon">
                  Browse Parts
                </ProjectLink>
                <ProjectLink href="/services" className="btn-outline">
                  Our Services
                </ProjectLink>
              </div>

              {/* Stats */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="grid grid-cols-3 gap-8 mt-16 max-w-lg"
              >
                {[
                  { num: "15+", label: "Years Open" },
                  { num: "50K+", label: "Parts in Stock" },
                  { num: "10K+", label: "Happy Customers" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p className="text-neon font-heading text-2xl tracking-wider">
                      {num}
                    </p>
                    <p className="text-steel text-[10px] uppercase tracking-widest mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Featured Categories */}
        <section className="py-20 bg-hex-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-up" className="text-center mb-16">
              <p className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2">
                What We Carry
              </p>
              <h2 className="text-4xl font-heading uppercase tracking-wider">
                Parts <span className="text-neon">Categories</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((cat, i) => (
                <div
                  key={cat.name}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="card-industrial text-center group cursor-pointer"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading uppercase tracking-wider text-sm text-white group-hover:text-neon transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-steel text-xs mt-2">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Brands Row */}
        <section className="py-16 bg-gunmetal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              data-aos="fade-up"
              className="text-center text-steel text-xs uppercase tracking-[0.3em] mb-8"
            >
              Trusted Brands We Carry
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            >
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="px-6 py-3 bg-gunmetal border border-gunmetal-100 rounded-sm text-steel-light font-heading uppercase tracking-widest text-sm hover:border-neon hover:text-neon transition-all cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-up" className="text-center mb-16">
              <p className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2">
                What People Say
              </p>
              <h2 className="text-4xl font-heading uppercase tracking-wider">
                Customer <span className="text-neon">Reviews</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="card-industrial"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-neon text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-steel text-sm leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-gunmetal-100">
                    <p className="font-heading uppercase text-xs tracking-wider text-white">
                      {t.name}
                    </p>
                    <p className="text-steel text-[10px] mt-0.5">{t.vehicle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="py-20 bg-gunmetal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              data-aos="zoom-in"
              className="text-4xl sm:text-5xl font-heading uppercase tracking-wider"
            >
              Ready to <span className="text-neon">Upgrade</span>?
            </h2>
            <p data-aos="fade-up" className="text-steel mt-4 max-w-xl mx-auto">
              Walk in or shop online. Over 50,000 parts in stock with same-day
              pickup available.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <ProjectLink href="/shop" className="btn-neon">
                Shop Parts
              </ProjectLink>
              <ProjectLink href="/contact" className="btn-outline">
                Request Quote
              </ProjectLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
