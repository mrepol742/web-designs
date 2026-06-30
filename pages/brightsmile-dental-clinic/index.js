import Head from "next/head";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectLink from "@/components/ProjectLink";

const servicesPreview = [
  {
    icon: "🦷",
    name: "General Checkup",
    description:
      "Comprehensive exams, cleanings, and preventive care to keep your smile healthy.",
    priceRange: "$80 - $200",
  },
  {
    icon: "✨",
    name: "Teeth Whitening",
    description:
      "Professional-grade whitening treatments for a brighter, more confident smile.",
    priceRange: "$250 - $600",
  },
  {
    icon: "😁",
    name: "Orthodontics",
    description:
      "Braces and clear aligners to straighten teeth and perfect your bite.",
    priceRange: "$2,500 - $5,000",
  },
  {
    icon: "🔧",
    name: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that last a lifetime.",
    priceRange: "$1,500 - $3,500",
  },
  {
    icon: "🏥",
    name: "Root Canal",
    description: "Gentle, pain-free root canal therapy to save damaged teeth.",
    priceRange: "$700 - $1,200",
  },
  {
    icon: "🚑",
    name: "Emergency Care",
    description: "Same-day emergency dental care when you need it most.",
    priceRange: "$150 - $800",
  },
];

const doctors = [
  {
    name: "Dr. Sarah Chen",
    specialty: "General & Cosmetic Dentistry",
    initials: "SC",
  },
  { name: "Dr. James Rivera", specialty: "Orthodontics", initials: "JR" },
  { name: "Dr. Amara Okafor", specialty: "Endodontics", initials: "AO" },
];

const testimonials = [
  {
    name: "Emily Thompson",
    rating: 5,
    review:
      "I was terrified of dentists until I found BrightSmile. Dr. Chen made me feel completely at ease. My teeth whitening results are amazing!",
  },
  {
    name: "Michael Park",
    rating: 5,
    review:
      "Best dental experience ever. The staff is incredibly friendly, the office is spotless, and my root canal was completely painless.",
  },
  {
    name: "Lisa Rodriguez",
    rating: 5,
    review:
      "My kids actually look forward to their dental visits now. The pediatric team is phenomenal. Highly recommend for families!",
  },
  {
    name: "David Chen",
    rating: 4,
    review:
      "Professional, efficient, and caring. My dental implant looks and feels completely natural. Worth every penny.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>BrightSmile Dental Clinic — Your Smile, Our Priority</title>
      </Head>

      <Header />
      <main className="min-h-screen">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/50 to-medical-blue">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-medical-teal/10 to-teal-200/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-medical-blue/30 to-teal-100/20 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left */}
              <div data-aos="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-medical-teal animate-pulse-slow" />
                  <span className="text-xs font-semibold text-medical-teal uppercase tracking-wider">
                    Now Accepting New Patients
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
                  Your Smile,
                  <br />
                  <span className="gradient-text">Our Priority</span>
                </h1>

                <p className="text-lg text-medical-muted leading-relaxed mb-8 max-w-lg">
                  Experience gentle, modern dentistry at BrightSmile Dental
                  Clinic. Our team of board-certified professionals is dedicated
                  to creating healthy, beautiful smiles for the whole family.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <ProjectLink
                    href="/booking"
                    className="btn-primary text-center"
                  >
                    Book Your Visit
                  </ProjectLink>
                  <ProjectLink
                    href="/services"
                    className="btn-secondary text-center"
                  >
                    Our Services
                  </ProjectLink>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-gray-200/60">
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-gray-900">18+</p>
                    <p className="text-xs text-medical-muted font-medium">
                      Years Experience
                    </p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-gray-900">
                      15K+
                    </p>
                    <p className="text-xs text-medical-muted font-medium">
                      Happy Patients
                    </p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-gray-900">4.9</p>
                    <p className="text-xs text-medical-muted font-medium">
                      ★ Rating
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — Hero Visual */}
              <div className="relative" data-aos="zoom-in" data-aos-delay="200">
                <div className="relative bg-gradient-to-br from-teal-50 to-medical-blue rounded-[2rem] p-8 lg:p-12 shadow-2xl shadow-teal-200/30">
                  {/* Decorative elements */}
                  <div
                    className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-medical-teal to-teal-400 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    😁
                  </div>
                  <div
                    className="absolute bottom-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
                    data-aos="slide-up"
                    data-aos-delay="400"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">
                        Appointment Confirmed!
                      </p>
                      <p className="text-[10px] text-gray-500">
                        Next available: Tomorrow 10 AM
                      </p>
                    </div>
                  </div>
                  {/* Main content area */}
                  <div className="text-center py-12">
                    <div className="text-8xl mb-6">🦷</div>
                    <div className="space-y-3">
                      <div className="h-3 bg-teal-200/60 rounded-full w-3/4 mx-auto" />
                      <div className="h-3 bg-teal-200/40 rounded-full w-1/2 mx-auto" />
                      <div className="h-3 bg-teal-200/30 rounded-full w-2/3 mx-auto" />
                    </div>
                    <p className="text-sm text-medical-muted mt-6 font-medium">
                      State-of-the-Art Dental Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ SERVICES PREVIEW ═══════════ */}
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-teal-50 text-medical-teal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                What We Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Comprehensive Dental Services
              </h2>
              <p className="text-medical-muted max-w-2xl mx-auto">
                From routine checkups to advanced cosmetic procedures, we
                provide everything you need for a healthy, radiant smile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesPreview.map((s, i) => (
                <ServiceCard key={s.name} {...s} index={i} />
              ))}
            </div>

            <div
              className="text-center mt-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ProjectLink href="/services" className="btn-secondary">
                View All Services →
              </ProjectLink>
            </div>
          </div>
        </section>

        {/* ═══════════ DOCTOR SPOTLIGHT ═══════════ */}
        <section className="section-padding bg-gradient-to-b from-teal-50/40 to-white">
          <div className="container-narrow">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-teal-50 text-medical-teal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Meet the Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Our Expert Doctors
              </h2>
              <p className="text-medical-muted max-w-2xl mx-auto">
                Board-certified professionals with decades of combined
                experience in modern dentistry.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doc, i) => (
                <div
                  key={doc.name}
                  className="card text-center"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-medical-teal to-teal-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4">
                    {doc.initials}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-medical-teal font-medium">
                    {doc.specialty}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="text-center mt-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ProjectLink href="/doctors" className="btn-secondary">
                Meet All Doctors →
              </ProjectLink>
            </div>
          </div>
        </section>

        {/* ═══════════ TESTIMONIALS ═══════════ */}
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 bg-teal-50 text-medical-teal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                What Our Patients Say
              </h2>
              <p className="text-medical-muted max-w-2xl mx-auto">
                Don't just take our word for it — hear from the thousands of
                patients who trust BrightSmile with their smiles.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.name} {...t} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ EMERGENCY CTA ═══════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <div
              className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-3xl overflow-hidden"
              data-aos="zoom-in"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              </div>
              <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center text-white">
                <span className="text-5xl mb-4 block">🚨</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                  Dental Emergency?
                </h2>
                <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
                  Severe toothache, broken tooth, or dental trauma? Don't wait —
                  call our emergency line for immediate assistance. Same-day
                  appointments available.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+18005551234"
                    className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition shadow-lg"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    (800) 555-1234
                  </a>
                  <ProjectLink
                    href="/booking"
                    className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition"
                  >
                    Book Urgent Visit
                  </ProjectLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHY CHOOSE US ═══════════ */}
        <section className="section-padding bg-gradient-to-b from-teal-50/30 to-white">
          <div className="container-narrow">
            <div className="text-center mb-14" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Why Choose BrightSmile?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🏅",
                  title: "Board Certified",
                  desc: "All our dentists are board-certified with advanced specializations.",
                },
                {
                  icon: "🔬",
                  title: "Modern Technology",
                  desc: "Latest digital X-rays, 3D imaging, and laser dentistry.",
                },
                {
                  icon: "💳",
                  title: "Flexible Payment",
                  desc: "We accept most insurance and offer interest-free payment plans.",
                },
                {
                  icon: "🫶",
                  title: "Gentle Care",
                  desc: "Anxiety-free experience with sedation options available.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="card text-center"
                  data-aos="slide-up"
                  data-aos-delay={i * 80}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-medical-muted leading-relaxed">
                    {item.desc}
                  </p>
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
