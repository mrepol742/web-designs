import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const timeline = [
  {
    year: "2015",
    title: "Founded",
    desc: "Started with 3 trucks and a 5,000 sq ft warehouse in Dallas, TX.",
  },
  {
    year: "2017",
    title: "Regional Expansion",
    desc: "Expanded to Houston and San Antonio. Fleet grew to 40 vehicles.",
  },
  {
    year: "2019",
    title: "Cold Chain Launch",
    desc: "Introduced temperature-controlled logistics with 25 reefer units.",
  },
  {
    year: "2021",
    title: "National Coverage",
    desc: "Reached 120+ cities across 48 states. 300+ fleet vehicles.",
  },
  {
    year: "2023",
    title: "500 Fleet Milestone",
    desc: "Hit 500 vehicles and 2 million cumulative deliveries.",
  },
  {
    year: "2025",
    title: "Today",
    desc: "Full-service logistics provider with 500K+ sq ft warehouse space.",
  },
];

const team = [
  {
    name: "Robert Haulder",
    role: "Founder & CEO",
    bio: "25 years in logistics. Former VP at FedEx Freight. Built SwiftHaul from 3 trucks to 500+.",
  },
  {
    name: "Sarah Mitchell",
    role: "VP of Operations",
    bio: "15 years supply chain management. Lean Six Sigma Black Belt. Runs 8 distribution centers.",
  },
  {
    name: "James Okafor",
    role: "Director of Safety",
    bio: "Former DOT inspector. Maintains our 99.7% safety compliance record.",
  },
  {
    name: "Maria Gonzalez",
    role: "Head of Business Dev",
    bio: "12 years in freight brokerage. Manages $200M+ in annual contracts.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — SwiftHaul Logistics</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-navy-900 to-navy-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="max-w-3xl">
            <span className="text-accent font-heading text-sm font-bold uppercase tracking-widest">
              About SwiftHaul
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-5">
              DELIVERING <span className="text-accent">EXCELLENCE</span> SINCE
              2015
            </h1>
            <p className="text-navy-400 text-lg leading-relaxed">
              From 3 trucks in Dallas to 500+ vehicles coast to coast. We built
              SwiftHaul on a simple idea: shipping should be reliable,
              transparent, and fair.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <h2 className="font-heading text-3xl font-bold tracking-tight mb-6">
                OUR <span className="text-accent">MISSION</span>
              </h2>
              <p className="text-navy-400 leading-relaxed mb-4">
                SwiftHaul exists to move the world&apos;s goods with speed,
                safety, and integrity. We believe every shipment — whether a
                single parcel or a full trailer load — deserves the same level
                of commitment and care.
              </p>
              <p className="text-navy-400 leading-relaxed">
                Our technology-first approach means real-time visibility,
                proactive communication, and data-driven optimization for every
                route we run. No black holes. No excuses. Just results.
              </p>
            </div>
            <div
              data-aos="slide-right"
              data-aos-delay="100"
              className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-8"
            >
              <div className="space-y-6">
                {[
                  { val: "99.7%", label: "On-Time Delivery Rate" },
                  { val: "4.9/5", label: "Customer Satisfaction" },
                  { val: "0.02%", label: "Cargo Damage Rate" },
                  { val: "$0", label: "Hidden Fees — Ever" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between py-3 border-b border-navy-700/30 last:border-0"
                  >
                    <span className="text-navy-400 text-sm">{s.label}</span>
                    <span className="font-heading text-2xl font-bold text-accent">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-center mb-16"
          >
            OUR <span className="text-accent">JOURNEY</span>
          </h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                data-aos={i % 2 === 0 ? "fade-up" : "slide-right"}
                data-aos-delay={i * 80}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-lg font-bold text-accent">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-navy-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Record */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            data-aos="fade-up"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-8"
          >
            SAFETY <span className="text-accent">FIRST</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-navy-400 max-w-2xl mx-auto mb-12"
          >
            Every SwiftHaul driver undergoes a 120-hour training program, DOT
            physical, and continuous safety education. Our fleet is inspected
            every 30,000 miles — well above federal requirements.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { val: "0.02%", label: "Incident Rate" },
              { val: "100%", label: "DOT Compliance" },
              { val: "120hrs", label: "Driver Training" },
              { val: "30K mi", label: "Inspection Cycle" },
              { val: "ELD", label: "All Vehicles Equipped" },
              { val: "A+ BBB", label: "Rating Since 2016" },
            ].map((s, i) => (
              <div
                key={s.label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-5"
              >
                <p className="font-heading text-2xl font-bold text-accent">
                  {s.val}
                </p>
                <p className="text-navy-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Placeholder */}
      <section className="py-20 bg-navy-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            data-aos="fade-up"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-6"
          >
            COVERAGE <span className="text-accent">AREA</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-navy-400 max-w-xl mx-auto mb-12"
          >
            Full coverage across the contiguous United States with dedicated
            regional hubs in Texas, California, Illinois, Georgia, New Jersey,
            and Washington.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-navy-800/50 border border-navy-700/50 rounded-xl h-80 flex items-center justify-center"
          >
            <div className="text-center">
              <svg
                className="w-16 h-16 text-navy-600 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="text-navy-500 text-sm">Interactive Coverage Map</p>
              <p className="text-navy-600 text-xs mt-1">
                120+ Cities • 48 States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-center mb-16"
          >
            LEADERSHIP <span className="text-accent">TEAM</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, i) => (
              <div
                key={person.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-accent">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {person.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-navy-400 text-xs leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
