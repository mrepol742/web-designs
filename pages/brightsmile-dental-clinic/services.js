import Head from "next/head";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectLink from "@/components/ProjectLink";

const services = [
  {
    icon: "🦷",
    name: "General Checkup",
    description:
      "Comprehensive oral examinations, professional cleanings, digital X-rays, and preventive treatments. We recommend bi-annual visits to maintain optimal oral health.",
    priceRange: "$80 - $200",
  },
  {
    icon: "✨",
    name: "Teeth Whitening",
    description:
      "Professional in-office and take-home whitening options using LED-activated gel technology. Achieve up to 8 shades whiter in a single session.",
    priceRange: "$250 - $600",
  },
  {
    icon: "😁",
    name: "Orthodontics",
    description:
      "Traditional braces, ceramic braces, and clear aligner therapy (Invisalign®). Correct misalignment, gaps, and bite issues for a perfectly straight smile.",
    priceRange: "$2,500 - $5,000",
  },
  {
    icon: "🔧",
    name: "Root Canal Therapy",
    description:
      "Pain-free endodontic treatment using modern rotary instruments and microscopic precision. Save infected teeth and eliminate discomfort in 1-2 visits.",
    priceRange: "$700 - $1,200",
  },
  {
    icon: "🏥",
    name: "Dental Implants",
    description:
      "Titanium implant placement with custom porcelain crowns. The gold standard for replacing missing teeth — permanent, functional, and natural-looking.",
    priceRange: "$1,500 - $3,500",
  },
  {
    icon: "👶",
    name: "Pediatric Dentistry",
    description:
      "Gentle, kid-friendly dental care in a fun environment. From first visits to sealants and fluoride treatments, we make dental care enjoyable for children.",
    priceRange: "$60 - $300",
  },
  {
    icon: "🚑",
    name: "Emergency Care",
    description:
      "Same-day emergency appointments for severe toothaches, broken or knocked-out teeth, abscesses, and dental trauma. Available Monday through Saturday.",
    priceRange: "$150 - $800",
  },
  {
    icon: "💄",
    name: "Cosmetic Bonding",
    description:
      "Tooth-colored resin bonding to repair chips, gaps, and minor imperfections. A quick, affordable way to enhance your smile in a single visit.",
    priceRange: "$150 - $500",
  },
  {
    icon: "🛡️",
    name: "Dental Crowns",
    description:
      "Custom porcelain and zirconia crowns designed to restore damaged teeth. Same-day CEREC crowns available — no temporary restorations needed.",
    priceRange: "$800 - $1,500",
  },
  {
    icon: "🦴",
    name: "Bone Grafting",
    description:
      "Preparatory bone grafting for implant placement. We rebuild jaw bone density to create a solid foundation for successful implant surgery.",
    priceRange: "$500 - $2,000",
  },
  {
    icon: "🫁",
    name: "Periodontal Treatment",
    description:
      "Deep cleaning, scaling and root planing, and laser-assisted periodontal therapy to treat gum disease and restore gum health.",
    priceRange: "$200 - $1,000",
  },
  {
    icon: "📋",
    name: "Oral Surgery",
    description:
      "Wisdom tooth extraction, simple and surgical extractions, and pre-prosthetic surgery performed under local anesthesia or IV sedation.",
    priceRange: "$300 - $2,500",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services — BrightSmile Dental Clinic</title>
      </Head>

      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-white via-teal-50/50 to-medical-blue section-padding">
          <div className="container-narrow text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-teal-100/60 text-medical-teal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Complete Dental Care
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our Dental Services
            </h1>
            <p className="text-lg text-medical-muted max-w-2xl mx-auto">
              From routine preventive care to advanced restorative and cosmetic
              procedures — we offer a full spectrum of dental treatments under
              one roof.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <ServiceCard key={s.name} {...s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Insurance / Payment */}
        <section className="section-padding bg-gradient-to-b from-teal-50/30 to-white">
          <div className="container-narrow">
            <div
              className="card bg-gradient-to-r from-medical-teal to-teal-700 text-white text-center"
              data-aos="zoom-in"
            >
              <div className="max-w-2xl mx-auto">
                <span className="text-5xl mb-4 block">💳</span>
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">
                  Flexible Payment Options
                </h2>
                <p className="text-teal-100 mb-6 leading-relaxed">
                  We accept most major insurance plans and offer interest-free
                  financing through CareCredit®. Don't let cost stand between
                  you and a healthy smile.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {[
                    "Delta Dental",
                    "Cigna",
                    "Aetna",
                    "MetLife",
                    "Guardian",
                    "United Healthcare",
                  ].map((ins) => (
                    <span
                      key={ins}
                      className="px-4 py-2 bg-white/15 rounded-xl text-sm font-medium"
                    >
                      {ins}
                    </span>
                  ))}
                </div>
                <ProjectLink
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-white text-medical-teal px-8 py-3 rounded-2xl font-bold hover:bg-teal-50 transition"
                >
                  Book Your Appointment →
                </ProjectLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
