import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const team = [
  {
    name: "Robert J. Sterling",
    title: "Founding Partner",
    credentials: "J.D., Harvard Law School | Admitted: NY, CT, DC",
    bio: "Bob founded Sterling & Associates in 1987 with a vision of combining elite legal counsel with genuine client relationships. With over 40 years of practice in corporate and real estate law, he has personally overseen transactions exceeding $8 billion.",
  },
  {
    name: "Katherine M. Whitfield",
    title: "Senior Partner — Litigation",
    credentials:
      "J.D., Yale Law School | Admitted: NY, NJ | Board Certified Trial Advocate",
    bio: "Kate leads our litigation practice with a reputation for tenacious courtroom advocacy. She has secured landmark verdicts in complex commercial disputes and white-collar defense matters across federal and state courts.",
  },
  {
    name: "Marcus D. Okafor",
    title: "Partner — Real Estate",
    credentials:
      "J.D., Columbia Law School | Licensed Real Estate Broker: NY, CT",
    bio: "Marcus brings a rare combination of legal expertise and real estate industry knowledge. He leads our real estate division, overseeing commercial and residential transactions, development advisory, and land use matters.",
  },
  {
    name: "Elena R. Vasquez",
    title: "Partner — Family Law & Estate Planning",
    credentials:
      "J.D., NYU School of Law | Certified Mediator | Fellow, American Academy of Matrimonial Lawyers",
    bio: "Elena is known for her compassionate approach to family law and her sophisticated estate planning strategies for high-net-worth families. She has been named a Super Lawyer for twelve consecutive years.",
  },
  {
    name: "Daniel S. Park",
    title: "Associate — Corporate & IP",
    credentials:
      "J.D., Stanford Law School | Registered Patent Attorney | Admitted: NY, CA",
    bio: "Daniel advises technology and life sciences companies on corporate transactions, intellectual property strategy, and regulatory compliance. He previously served as in-house counsel at a Fortune 500 technology firm.",
  },
  {
    name: "Sarah L. Brennan",
    title: "Of Counsel — Criminal Defense",
    credentials: "J.D., Georgetown Law | Former Assistant U.S. Attorney, SDNY",
    bio: "Sarah brings fifteen years of federal prosecution experience to our criminal defense practice. Her deep knowledge of government investigations and white-collar cases provides unmatched strategic insight.",
  },
];

const values = [
  {
    title: "Integrity",
    description:
      "We provide honest counsel, even when the truth is difficult. Our advice is guided by ethics, not expedience.",
    icon: "⚖",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard in every brief, every closing, and every client interaction. Mediocrity is not in our vocabulary.",
    icon: "★",
  },
  {
    title: "Client-First",
    description:
      "Our clients' interests are the sole driver of our strategy. We listen first, advise second, and fight always.",
    icon: "⊕",
  },
  {
    title: "Discretion",
    description:
      "Trust is earned through silence. We handle every matter with the utmost confidentiality and professionalism.",
    icon: "◈",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Sterling &amp; Associates</title>
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-3 mb-6" data-aos="fade-up">
            <div className="gold-line" />
            <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
              Our Story
            </span>
          </div>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built on <span className="text-gold-400">Reputation</span>
          </h1>
          <p
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            For 37 years, our name has meant something in courtrooms, closing
            rooms, and boardrooms across the Northeast.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
      </section>

      {/* Firm History */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="gold-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                A Legacy of Trust
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sterling &amp; Associates was founded in 1987 by Robert J.
                  Sterling, a former partner at one of Manhattan&apos;s most
                  prestigious white-shoe firms. Bob&apos;s vision was simple:
                  deliver the caliber of legal counsel expected by Fortune 500
                  companies while maintaining the personal attention and
                  accessibility that individual clients deserve.
                </p>
                <p>
                  From a three-attorney practice in a Midtown walk-up, we have
                  grown into a 28-lawyer firm with offices in New York,
                  Greenwich, and Stamford. Our growth has been organic — driven
                  by referrals, results, and an unwavering commitment to the
                  communities we serve.
                </p>
                <p>
                  Today, Sterling &amp; Associates is recognized as one of the
                  top mid-size firms in the tri-state area. We are proud to
                  count among our clients publicly traded corporations, real
                  estate developers, family offices, and thousands of
                  individuals who trust us with what matters most.
                </p>
              </div>
            </div>

            {/* Visual Placeholder */}
            <div
              data-aos="fade-left"
              className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-sm h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-navy-900 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold-400 font-serif font-bold text-2xl">
                    S&A
                  </span>
                </div>
                <p className="text-navy-400 text-sm">Firm Photo — Est. 1987</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm text-center"
              >
                <div className="text-3xl text-gold-500 mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Partners &amp; Associates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each member of our team brings a depth of experience and a
              commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-gray-50 rounded-sm border border-gray-100 overflow-hidden card-hover"
              >
                {/* Avatar Placeholder */}
                <div className="bg-navy-900 h-48 flex items-center justify-center">
                  <div className="w-20 h-20 bg-navy-800 rounded-full flex items-center justify-center border-2 border-gold-500">
                    <span className="text-gold-400 font-serif font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy-900">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 text-sm font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    {member.credentials}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
