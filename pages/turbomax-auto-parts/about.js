import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const team = [
  {
    name: 'Ray "Torque" Hawkins',
    role: "Founder & Lead Mechanic",
    certs: "ASE Master Tech, 25+ yrs",
    bio: "Former NASCAR pit crew. Built TurboMax from a 2-bay garage into a full-service shop.",
  },
  {
    name: "Nina Vasquez",
    role: "Performance Specialist",
    certs: "Cobb Tuning Certified, HP Tuners Pro",
    bio: "15 years of dyno tuning experience. Specializes in import and domestic performance builds.",
  },
  {
    name: "Jake Morrison",
    role: "Service Manager",
    certs: "ASE Certified, BMW STEP Graduate",
    bio: "Keeps the shop running smooth. Expert in European and Asian vehicle platforms.",
  },
  {
    name: "Aisha Thompson",
    role: "Parts & Inventory Director",
    certs: "APAA Certified, 10+ yrs",
    bio: "Sources the best parts at the right prices. Built relationships with 200+ manufacturers.",
  },
];

const certifications = [
  "ASE Blue Seal of Excellence",
  "NAPA AutoCare Certified",
  "BBB Accredited Business — A+ Rating",
  "EPA Certified Refrigerant Handling",
  "Cobb Tuning ProTuner",
  "Snap-on DIAGNOSTICS Partner",
];

const brandsCarried = [
  "Brembo",
  "Bosch",
  "NGK",
  "Mobil 1",
  "K&N",
  "Bilstein",
  "Monroe",
  "Duralast",
  "Goodyear",
  "Michelin",
  "Continental",
  "ACDelco",
  "Dorman",
  "Gates",
  "Dayco",
  "Walker",
  "Denso",
  "Hella",
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — TurboMax Auto Parts</title>
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
              Est. 2008 — 742 Racing Blvd
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-5xl font-heading uppercase tracking-wider"
            >
              About <span className="text-neon">TurboMax</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-steel mt-3 max-w-2xl"
            >
              From a two-bay garage to the city&apos;s most trusted performance
              shop. Here&apos;s our story.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div data-aos="slide-left">
                <div className="bg-gunmetal-200 border border-gunmetal-100 rounded-sm h-72 flex items-center justify-center">
                  <span className="text-8xl opacity-30">🏁</span>
                </div>
              </div>
              <div data-aos="fade-up">
                <p className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2">
                  Our Story
                </p>
                <h2 className="text-3xl font-heading uppercase tracking-wider mb-4">
                  Born From <span className="text-neon">Petrol</span>
                </h2>
                <p className="text-steel leading-relaxed mb-4">
                  TurboMax Auto Parts started in 2008 when founder Ray
                  &ldquo;Torque&rdquo; Hawkins turned his passion for speed into
                  a business. What began as a two-bay garage on the corner of
                  Racing Blvd has grown into a full-service auto parts store and
                  performance shop.
                </p>
                <p className="text-steel leading-relaxed mb-4">
                  We started with one mission:{" "}
                  <strong className="text-white">
                    give car enthusiasts access to real parts at fair prices,
                    backed by people who actually know cars.
                  </strong>{" "}
                  No corporate upselling. No clueless counter staff. Just honest
                  expertise and the parts that keep your ride running right.
                </p>
                <p className="text-steel leading-relaxed">
                  Today, we stock over 50,000 parts, run 8 service bays, and
                  have a team of ASE-certified mechanics who live and breathe
                  automotive performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Team */}
        <section className="py-20 bg-gunmetal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-up" className="text-center mb-16">
              <p className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2">
                The Crew
              </p>
              <h2 className="text-4xl font-heading uppercase tracking-wider">
                Meet the <span className="text-neon">Team</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="card-industrial"
                >
                  <div className="bg-gunmetal-500 h-32 rounded-sm flex items-center justify-center mb-4">
                    <span className="text-4xl opacity-30">👤</span>
                  </div>
                  <h3 className="font-heading uppercase text-sm tracking-wider text-white">
                    {member.name}
                  </h3>
                  <p className="text-neon text-xs mt-1">{member.role}</p>
                  <p className="text-steel text-[10px] mt-2 uppercase tracking-wider">
                    {member.certs}
                  </p>
                  <p className="text-steel text-xs mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Certifications */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-up" className="text-center mb-12">
              <p className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2">
                Credentials
              </p>
              <h2 className="text-4xl font-heading uppercase tracking-wider">
                Certifications
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert}
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                  className="flex items-center gap-4 card-industrial"
                >
                  <div className="w-10 h-10 bg-neon/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-neon text-lg">✓</span>
                  </div>
                  <span className="text-sm text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Brands */}
        <section className="py-20 bg-gunmetal-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-up" className="text-center mb-12">
              <p className="text-neon text-xs font-bold uppercase tracking-[0.3em] mb-2">
                Our Partners
              </p>
              <h2 className="text-4xl font-heading uppercase tracking-wider">
                Brands <span className="text-neon">Carried</span>
              </h2>
            </div>
            <div
              data-aos="fade-up"
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
            >
              {brandsCarried.map((brand) => (
                <div
                  key={brand}
                  className="bg-gunmetal border border-gunmetal-100 rounded-sm py-3 px-2 text-center text-xs font-heading uppercase tracking-wider text-steel-light hover:border-neon hover:text-neon transition-all cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
