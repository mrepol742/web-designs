import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FleetCard from "./components/FleetCard";

const fleet = [
  {
    name: "Mercedes-Benz Sprinter Van",
    type: "Cargo Van",
    capacity: "3,500 lbs",
    dimensions: "14' L × 6' W × 6.5' H",
    features: [
      "660 cu ft cargo",
      "GPS tracked",
      "Liftgate",
      "Climate controlled option",
    ],
  },
  {
    name: "Isuzu NPR-HD Box Truck",
    type: "Box Truck",
    capacity: "10,000 lbs",
    dimensions: "20' L × 8' W × 8' H",
    features: [
      "1,600 cu ft",
      "Roll-up door",
      "Liftgate equipped",
      "City maneuverable",
    ],
  },
  {
    name: "Freightliner M2 Flatbed",
    type: "Flatbed",
    capacity: "25,000 lbs",
    dimensions: "48' L × 8.5' W × 8.5' H",
    features: [
      "Heavy haul",
      "Chain & binder",
      "Step deck option",
      "Oversize permits",
    ],
  },
  {
    name: "Thermo King Reefer Truck",
    type: "Refrigerated",
    capacity: "20,000 lbs",
    dimensions: "26' L × 8' W × 8' H",
    features: [
      "-20°F to 70°F",
      "IoT temp sensors",
      "Multi-temp zones",
      "FDA compliant",
    ],
  },
  {
    name: "Kenworth T680 18-Wheeler",
    type: "Tractor Trailer",
    capacity: "45,000 lbs",
    dimensions: "53' L × 8.5' W × 13.5' H",
    features: [
      "3,400 cu ft",
      "Air-ride suspension",
      "Team drivers available",
      "ELD compliant",
    ],
  },
];

export default function Fleet() {
  return (
    <>
      <Head>
        <title>Our Fleet — SwiftHaul Logistics</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-navy-900 to-navy-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="max-w-3xl">
            <span className="text-accent font-heading text-sm font-bold uppercase tracking-widest">
              Our Vehicles
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight mt-3 mb-5">
              A FLEET BUILT FOR <span className="text-accent">ANY LOAD</span>
            </h1>
            <p className="text-navy-400 text-lg leading-relaxed">
              500+ vehicles maintained to DOT standards. Every truck
              GPS-tracked, every driver background-checked and certified. Book
              by the truck or by the load.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.map((vehicle, i) => (
              <FleetCard key={vehicle.name} {...vehicle} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-20 bg-navy-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-center mb-16"
          >
            FLEET <span className="text-accent">NUMBERS</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "500+", label: "Active Vehicles" },
              { val: "8", label: "Distribution Centers" },
              { val: "98.5%", label: "Fleet Uptime" },
              { val: "<24hr", label: "Avg Booking Window" },
            ].map((s, i) => (
              <div
                key={s.label}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="text-center bg-navy-800/50 border border-navy-700/50 rounded-xl p-6"
              >
                <p className="font-heading text-3xl font-bold text-accent">
                  {s.val}
                </p>
                <p className="text-navy-400 text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
