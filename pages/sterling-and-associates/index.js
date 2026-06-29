import Head from "next/head";
import ProjectLink from "@/components/ProjectLink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import PropertyCard from "./components/PropertyCard";
import TestimonialCard from "./components/TestimonialCard";

const stats = [
  { number: "37+", label: "Years of Practice" },
  { number: "12,000+", label: "Cases Resolved" },
  { number: "$2.8B", label: "In Property Transactions" },
  { number: "98%", label: "Client Retention" },
];

const practiceAreas = [
  {
    icon: "⚖",
    title: "Corporate Law",
    description:
      "Mergers & acquisitions, corporate governance, contract negotiation, and regulatory compliance for businesses of all sizes.",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    description:
      "Full-service real estate legal counsel including transactions, title disputes, zoning, and commercial lease negotiations.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    description:
      "Compassionate representation in divorce, child custody, spousal support, prenuptial agreements, and domestic relations.",
  },
];

const featuredProperties = [
  {
    address: "1847 Beacon Hill Drive",
    city: "Greenwich, CT 06830",
    price: "$2,450,000",
    beds: 5,
    baths: 4,
    sqft: 4200,
    status: "For Sale",
  },
  {
    address: "320 Park Avenue, Unit 42A",
    city: "New York, NY 10022",
    price: "$12,500/mo",
    beds: 3,
    baths: 2,
    sqft: 1850,
    status: "For Rent",
  },
  {
    address: "95 Harbor View Lane",
    city: "Mamaroneck, NY 10543",
    price: "$1,875,000",
    beds: 4,
    baths: 3,
    sqft: 3100,
    status: "For Sale",
  },
];

const testimonials = [
  {
    quote:
      "Sterling & Associates guided our company through a complex merger with exceptional precision. Their corporate team is simply world-class.",
    name: "Margaret Chen",
    title: "CEO, Meridian Technologies",
    initials: "MC",
  },
  {
    quote:
      "Our real estate closing was seamless. They identified a title issue that would have cost us hundreds of thousands and resolved it in 48 hours.",
    name: "David & Rachel Thornton",
    title: "Homeowners, Greenwich",
    initials: "DT",
  },
  {
    quote:
      "During the most difficult chapter of my life, Sterling provided not just legal expertise but genuine care. I cannot recommend them highly enough.",
    name: "James Caldwell",
    title: "Private Client",
    initials: "JC",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sterling &amp; Associates — Premier Law Firm &amp; Real Estate
          Advisory
        </title>
      </Head>

      <Header />

      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <div
              className="flex items-center space-x-3 mb-6"
              data-aos="fade-up"
            >
              <div className="gold-line" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Est. 1987
              </span>
            </div>

            <h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Trusted Counsel.{" "}
              <span className="text-gold-400">Exceptional</span> Results.
            </h1>

            <p
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              For over three decades, Sterling &amp; Associates has delivered
              strategic legal counsel and premium real estate advisory to
              individuals, families, and enterprises across the Northeast.
            </p>

            <div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <ProjectLink href="/contact" className="btn-primary text-center">
                Schedule Consultation
              </ProjectLink>
              <ProjectLink
                href="/services"
                className="btn-secondary text-center"
              >
                Our Practice Areas
              </ProjectLink>
            </div>
          </div>
        </div>

        {/* Gold accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      </section>

      {/* ── Stats Bar ─────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="py-10 px-6 text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice Areas ────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal services tailored to protect your interests
              and advance your objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, i) => (
              <ServiceCard key={area.title} service={area} index={i} />
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <ProjectLink
              href="/services"
              className="btn-secondary inline-block"
            >
              View All Services
            </ProjectLink>
          </div>
        </div>
      </section>

      {/* ── Featured Properties ───────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div data-aos="fade-right">
              <div className="gold-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-gray-600 max-w-xl">
                Premium listings curated by our real estate division. Legal
                clearance guaranteed on every transaction.
              </p>
            </div>
            <div data-aos="fade-left" className="mt-6 md:mt-0">
              <ProjectLink
                href="/properties"
                className="btn-secondary inline-block"
              >
                Browse All Listings
              </ProjectLink>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.address} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────── */}
      <section className="section-padding bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The trust of our clients is the foundation of our practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={t.name} data-aos="fade-up" data-aos-delay={i * 100}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────── */}
      <section className="section-padding bg-gold-500">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Ready to Protect Your Interests?
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation with one of our senior
            partners. No obligation, no pressure — just honest counsel.
          </p>
          <ProjectLink
            href="/contact"
            className="inline-block bg-navy-900 text-white font-medium px-10 py-4 rounded-sm hover:bg-navy-800 transition-colors tracking-wide"
          >
            Book Your Free Consultation
          </ProjectLink>
        </div>
      </section>

      <Footer />
    </>
  );
}
