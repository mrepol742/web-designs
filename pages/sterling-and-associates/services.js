import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const services = [
  {
    icon: "⚖",
    title: "Corporate Law",
    description:
      "We advise boards, executives, and investors on the full spectrum of corporate matters — from formation and governance to multi-billion-dollar mergers and acquisitions. Our team has closed over $4.2 billion in combined deal value.",
    highlights: [
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Securities Compliance",
      "Joint Ventures",
      "Contract Negotiation",
    ],
  },
  {
    icon: "🏠",
    title: "Real Estate Law",
    description:
      "Our real estate practice handles residential and commercial transactions, title insurance, zoning disputes, land use, and development advisory. We represent institutional investors, developers, and private clients across the tri-state area.",
    highlights: [
      "Commercial Transactions",
      "Title & Escrow",
      "Zoning & Land Use",
      "Lease Negotiation",
      "Development Advisory",
    ],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    description:
      "Navigating family disputes demands both legal acumen and emotional intelligence. Our family law team handles divorce, custody, support, and domestic violence matters with discretion and compassion.",
    highlights: [
      "Divorce & Separation",
      "Child Custody & Support",
      "Prenuptial Agreements",
      "Adoption",
      "Mediation",
    ],
  },
  {
    icon: "🛡",
    title: "Criminal Defense",
    description:
      "Our white-collar and criminal defense team protects the rights of individuals and corporations facing federal and state charges. We have a proven track record of acquittals and reduced charges in complex cases.",
    highlights: [
      "White-Collar Crime",
      "Federal Investigations",
      "DUI/DWI Defense",
      "Fraud Allegations",
      "Appeals",
    ],
  },
  {
    icon: "📜",
    title: "Estate Planning",
    description:
      "We help high-net-worth individuals and families preserve and transfer wealth through sophisticated estate planning, trust administration, and tax optimization strategies. Our plans are built to endure.",
    highlights: [
      "Wills & Trusts",
      "Probate Administration",
      "Wealth Transfer",
      "Tax Planning",
      "Charitable Giving",
    ],
  },
  {
    icon: "💡",
    title: "Intellectual Property",
    description:
      "From trademarks and patents to trade secrets and licensing, we safeguard your most valuable intangible assets. Our IP team serves technology companies, creative agencies, and manufacturers.",
    highlights: [
      "Trademark Registration",
      "Patent Prosecution",
      "IP Litigation",
      "Licensing Agreements",
      "Trade Secrets",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services — Sterling &amp; Associates</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-3 mb-6" data-aos="fade-up">
            <div className="gold-line" />
            <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Legal Services <span className="text-gold-400">Built on Trust</span>
          </h1>
          <p
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Six decades of combined partner experience. Six core practice areas.
            One unwavering commitment to our clients.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-start`}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-sm flex items-center justify-center">
                    <span className="text-gold-400 text-xl">
                      {service.icon}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900">
                    {service.title}
                  </h2>
                </div>
                <div className="gold-line mb-6" />
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="flex-1 w-full">
                <div className="bg-gray-50 rounded-sm p-8 border border-gray-100">
                  <h4 className="font-serif text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                    Key Specialties
                  </h4>
                  <ul className="space-y-3">
                    {service.highlights.map((h, j) => (
                      <li
                        key={h}
                        className="flex items-center space-x-3 text-gray-700"
                        data-aos="zoom-in"
                        data-aos-delay={j * 80}
                      >
                        <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                        <span className="text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto" data-aos="zoom-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Need Legal Counsel?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Every case begins with a conversation. Contact us for a free,
            confidential consultation.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
