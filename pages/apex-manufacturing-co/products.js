import Head from "next/head";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const products = [
  {
    name: "Custom Brackets",
    description:
      "Precision-formed brackets in steel, stainless, and aluminum. Custom mounting solutions for any application — from simple L-brackets to complex multi-bend geometries.",
    specs: [
      { label: "Materials", value: "Steel / SS / Aluminum" },
      { label: "Thickness", value: "0.5mm – 6mm" },
      { label: "Tolerance", value: "±0.05mm" },
      { label: "Finish", value: "Zinc / Powder Coat / Raw" },
    ],
    moq: "100 pcs",
  },
  {
    name: "Precision Gears",
    description:
      "CNC-machined spur, helical, and bevel gears. Hardened and ground to AGMA Class 10+. Custom tooth profiles available for specialized applications.",
    specs: [
      { label: "Diameter", value: "10mm – 500mm" },
      { label: "Module", value: "0.5 – 8" },
      { label: "Tolerance", value: "AGMA 10+" },
      { label: "Materials", value: "4140 / 8620 / 17-4PH" },
    ],
    moq: "50 pcs",
  },
  {
    name: "Steel Frames",
    description:
      "Welded structural steel frames for machinery bases, equipment racks, and industrial frames. Designed and fabricated to your engineering prints.",
    specs: [
      { label: "Tube Size", value: '1" – 4" square/round' },
      { label: "Wall Thickness", value: '1/8" – 1/2"' },
      { label: "Tolerance", value: "±1mm" },
      { label: "Finish", value: "Powder Coat / Galvanized" },
    ],
    moq: "25 pcs",
  },
  {
    name: "Sheet Metal Parts",
    description:
      "Laser-cut, brake-formed sheet metal components in any volume. Flat patterns to finished parts with deburring, tapping, and hardware installation.",
    specs: [
      { label: "Gauge", value: '24ga – 1/4" plate' },
      { label: "Materials", value: "CS / SS / Aluminum" },
      { label: "Bend Radius", value: "1× material thickness" },
      { label: "Tolerance", value: "±0.25mm" },
    ],
    moq: "200 pcs",
  },
  {
    name: "Enclosures",
    description:
      "Custom electronic and industrial enclosures designed and fabricated in-house. From NEMA-rated boxes to precision instrument housings with cutouts and finishing.",
    specs: [
      { label: "Materials", value: "Aluminum / Steel / SS" },
      { label: "Max Size", value: '48" × 24" × 24"' },
      { label: "Cutouts", value: "CNC Punch + Laser" },
      { label: "Rating", value: "NEMA 1 – NEMA 4X" },
    ],
    moq: "50 pcs",
  },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products — Apex Manufacturing Co.</title>
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
            What We Make
          </span>
          <h1
            className="section-heading text-4xl md:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Standard & <span className="text-industrial">Custom</span> Products
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
            From high-volume commodity parts to one-off precision components —
            every product is manufactured to print, inspected to spec, and
            delivered on schedule.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard
                key={product.name}
                {...product}
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

      {/* Capabilities Banner */}
      <section className="py-24 bg-steel-800/30 border-y border-steel-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-subheading" data-aos="fade-up">
              Why Apex
            </span>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Built Different{" "}
              <span className="text-industrial">Than The Rest</span>
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
                title: "Rapid Prototyping",
                desc: "From print to prototype in as few as 5 business days. DFM feedback included on every quote to optimize cost and manufacturability.",
                icon: "⚡",
              },
              {
                title: "Volume Scalability",
                desc: "Seamless transition from prototype to 100 to 100,000+. Our capacity planning ensures your parts are always available when you need them.",
                icon: "📈",
              },
              {
                title: "Full Traceability",
                desc: "Material certs, dimensional reports, and process documentation on every order. Full lot traceability for aerospace and defense programs.",
                icon: "🔍",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={String(i * 150)}
                className="card-dark p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-white mb-4"
            data-aos="fade-up"
          >
            Need a <span className="text-industrial">Custom Part</span>?
          </h2>
          <p
            className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Upload your drawings for an instant DFM review and detailed pricing.
            Most quotes are returned within 24–48 hours.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
