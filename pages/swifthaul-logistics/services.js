import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    icon: "🚛",
    title: "Freight Shipping",
    description:
      "Full truckload (FTL) and less-than-truckload (LTL) freight services across all 48 contiguous states. Dedicated lanes, consistent transit times, and real-time GPS visibility on every shipment.",
    features: [
      "FTL & LTL options",
      "Real-time GPS tracking",
      "Dedicated lane contracts",
      "Cross-docking available",
      "Hazmat certified drivers",
      "Expedited options available",
    ],
    priceRange: "$1.20/mi",
  },
  {
    icon: "📦",
    title: "Last-Mile Delivery",
    description:
      "The final leg is the most important. Our last-mile network ensures products reach doorsteps on time, intact, and with full delivery confirmation. Same-day and next-day options available.",
    features: [
      "Same-day & next-day options",
      "Photo proof of delivery",
      "White-glove service available",
      "API & webhook integration",
      "Branded tracking pages",
      "Returns management",
    ],
    priceRange: "$8.50/unit",
  },
  {
    icon: "🏢",
    title: "Warehouse & Storage",
    description:
      "Over 500,000 sq ft of climate-monitored warehouse space across 8 distribution centers. Inventory management, pick-and-pack, and fulfillment services under one roof.",
    features: [
      "500,000+ sq ft capacity",
      "Climate monitoring",
      "Pick & pack fulfillment",
      "Inventory management system",
      "Cross-docking services",
      "24/7 security & surveillance",
    ],
    priceRange: "$0.45/pallet/day",
  },
  {
    icon: "❄️",
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled transport from -20°F to 70°F for pharmaceuticals, biotech, food & beverage, and chemical products. IoT-monitored with full chain-of-custody documentation.",
    features: [
      "-20°F to 70°F range",
      "IoT temperature monitoring",
      "FDA & USDA compliant",
      "Real-time alerts",
      "Chain-of-custody docs",
      "Backup reefer units on standby",
    ],
    priceRange: "$2.10/mi",
  },
  {
    icon: "🏠",
    title: "Moving Services",
    description:
      "Corporate relocation, employee moves, and office transitions handled with care. Full-service packing, transport, and unpacking with dedicated move coordinators.",
    features: [
      "Corporate relocation",
      "Full packing service",
      "Dedicated move coordinator",
      "Furniture assembly/disassembly",
      "Storage during transition",
      "Insurance coverage included",
    ],
    priceRange: "$1,200/local",
  },
  {
    icon: "🛡️",
    title: "Cargo Insurance",
    description:
      "Protect your shipments with comprehensive cargo insurance. Coverage from basic liability to full replacement value for high-value, fragile, or sensitive freight.",
    features: [
      "Basic liability coverage",
      "Full replacement value",
      "High-value item coverage",
      "Claims processed in 48hrs",
      "No deductibles on premium",
      "Annual policy discounts",
    ],
    priceRange: "0.3% of value",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services — SwiftHaul Logistics</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-navy-900 to-navy-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="max-w-3xl">
            <span className="text-accent font-heading text-sm font-bold uppercase tracking-widest">
              What We Do
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-5">
              SERVICES BUILT FOR <span className="text-accent">SPEED</span>
            </h1>
            <p className="text-navy-400 text-lg leading-relaxed">
              From single-parcel delivery to full truckload freight — SwiftHaul
              offers a complete suite of logistics solutions tailored to your
              supply chain needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-center mb-16"
          >
            HOW IT <span className="text-accent">WORKS</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Request Quote",
                desc: "Tell us origin, destination, and freight details.",
              },
              {
                step: "02",
                title: "Get Matched",
                desc: "We assign the right vehicle and route instantly.",
              },
              {
                step: "03",
                title: "Track Live",
                desc: "GPS tracking and status updates 24/7.",
              },
              {
                step: "04",
                title: "Delivered",
                desc: "Proof of delivery and invoicing in real-time.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-accent">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
