import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import FleetCard from "./components/FleetCard";
import TestimonialCard from "./components/TestimonialCard";

const stats = [
  { value: "500+", label: "Fleet Vehicles", icon: "🚛" },
  { value: "2.4M", label: "Deliveries Completed", icon: "📦" },
  { value: "120+", label: "Cities Covered", icon: "🏙️" },
  { value: "99.7%", label: "On-Time Rate", icon: "⏱️" },
];

const services = [
  {
    icon: "🚛",
    title: "Freight Shipping",
    description:
      "Full and less-than-truckload freight solutions with real-time GPS tracking across all 48 contiguous states.",
    features: ["Real-time tracking", "LTL & FTL options", "Dedicated lanes"],
    priceRange: "$1.20/mi",
  },
  {
    icon: "📦",
    title: "Last-Mile Delivery",
    description:
      "Final-mile solutions that get products from distribution centers to doorsteps — fast and damage-free.",
    features: [
      "Same-day available",
      "Photo proof of delivery",
      "API integration",
    ],
    priceRange: "$8.50/unit",
  },
  {
    icon: "❄️",
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled transport for pharmaceuticals, food, and sensitive materials. Full compliance guaranteed.",
    features: ["-20°F to 70°F range", "IoT temperature logs", "FDA compliant"],
    priceRange: "$2.10/mi",
  },
];

const fleetShowcase = [
  {
    name: "Sprinter Van",
    type: "Van",
    capacity: "3,500 lbs",
    dimensions: "14' × 6' × 6.5'",
  },
  {
    name: "Box Truck 26ft",
    type: "Box Truck",
    capacity: "10,000 lbs",
    dimensions: "26' × 8' × 9'",
  },
  {
    name: "18-Wheeler",
    type: "Tractor Trailer",
    capacity: "45,000 lbs",
    dimensions: "53' × 8.5' × 13.5'",
  },
];

const testimonials = [
  {
    name: "Marcus Rivera",
    role: "Supply Chain Director",
    company: "Apex Manufacturing",
    quote:
      "SwiftHaul cut our shipping costs by 22% while improving delivery times. Their fleet tracking is best-in-class.",
    rating: 5,
  },
  {
    name: "Jennifer Chen",
    role: "Operations Manager",
    company: "FreshDirect Foods",
    quote:
      "The cold chain logistics are flawless. We haven't had a single temperature excursion in 18 months of service.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "CEO",
    company: "Urban Retail Group",
    quote:
      "From warehouse to last-mile, SwiftHaul handles it all. They're an extension of our team at this point.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SwiftHaul Logistics — We Move Your World</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(239,68,68,0.3) 80px, rgba(239,68,68,0.3) 81px)",
            }}
          />
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                data-aos="fade-up"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Delivering Excellence Since 2015
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6"
              >
                WE MOVE
                <br />
                YOUR <span className="text-accent">WORLD</span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-navy-400 text-lg leading-relaxed mb-8 max-w-lg"
              >
                Coast-to-coast freight, last-mile delivery, and cold chain
                logistics. 500+ vehicles, 120+ cities, one relentless commitment
                to getting it there.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wider rounded transition-all hover:shadow-xl hover:shadow-accent/25 text-sm"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/fleet"
                  className="px-8 py-4 border border-navy-600 hover:border-accent text-white font-bold uppercase tracking-wider rounded transition-all text-sm"
                >
                  View Fleet
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div
              data-aos="slide-right"
              data-aos-delay="200"
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/20 flex items-center justify-center">
                  <svg
                    className="w-48 h-48 text-accent/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-heading font-bold text-sm">
                  500+ Vehicles
                </div>
                <div className="absolute -bottom-4 -left-4 bg-navy-800 border border-navy-600 text-white px-4 py-2 rounded-lg font-heading font-bold text-sm">
                  99.7% On-Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-navy-800 border border-navy-700/50 rounded-xl p-6 text-center"
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <p className="font-heading text-3xl lg:text-4xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-navy-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4"
            >
              WHAT WE <span className="text-accent">DO</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-navy-400 max-w-2xl mx-auto"
            >
              End-to-end logistics solutions built on reliability, speed, and
              transparency. Every shipment, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 100} />
            ))}
          </div>

          <div data-aos="fade-up" className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-navy-600 hover:border-accent text-white font-bold uppercase tracking-wider rounded transition-all text-sm"
            >
              All Services
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-24 lg:py-32 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div>
              <h2
                data-aos="fade-up"
                className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4"
              >
                OUR <span className="text-accent">FLEET</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-navy-400 max-w-xl"
              >
                From sprinter vans to 18-wheelers — modern, maintained, and
                GPS-tracked 24/7.
              </p>
            </div>
            <Link
              href="/fleet"
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm hover:text-accent-light transition-colors"
            >
              Full Fleet Details
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetShowcase.map((vehicle, i) => (
              <FleetCard key={vehicle.name} {...vehicle} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            data-aos="fade-up"
            className="font-heading text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          >
            READY TO SHIP?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            Get a free quote in under 5 minutes. Our dispatch team is standing
            by 24/7.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="tel:5559114285"
              className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold uppercase tracking-wider rounded transition-all text-sm"
            >
              📞 (555) 911-HAUL
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white hover:bg-navy-50 text-accent font-bold uppercase tracking-wider rounded transition-all text-sm"
            >
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4"
            >
              TRUSTED BY <span className="text-accent">INDUSTRY LEADERS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
