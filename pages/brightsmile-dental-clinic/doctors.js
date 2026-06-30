import Head from "next/head";
import DoctorCard from "./components/DoctorCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectLink from "@/components/ProjectLink";

const doctors = [
  {
    name: "Dr. Sarah Chen",
    specialty: "General & Cosmetic Dentistry",
    qualifications: ["DDS", "FAGD", "AACD"],
    experience: 18,
    bio: "Dr. Chen is the founder of BrightSmile Dental and brings nearly two decades of experience in general and cosmetic dentistry. She graduated top of her class from Columbia University College of Dental Medicine and is a Fellow of the Academy of General Dentistry.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
  },
  {
    name: "Dr. James Rivera",
    specialty: "Orthodontics & Aligners",
    qualifications: ["DMD", "MS Ortho", "AAO"],
    experience: 12,
    bio: "Dr. Rivera specializes in orthodontic treatments including Invisalign, ceramic braces, and interceptive orthodontics for children. He completed his orthodontic residency at the University of Pennsylvania and has treated over 3,000 cases.",
    availableDays: ["Monday", "Wednesday", "Friday"],
  },
  {
    name: "Dr. Amara Okafor",
    specialty: "Endodontics",
    qualifications: ["DDS", "MS Endo", "ABE"],
    experience: 14,
    bio: "Board-certified endodontist with expertise in microscopic root canal therapy and retreatment. Dr. Okafor is known for her gentle technique and has published research on regenerative endodontic procedures.",
    availableDays: ["Tuesday", "Thursday", "Friday"],
  },
  {
    name: "Dr. Michael Tanaka",
    specialty: "Oral & Maxillofacial Surgery",
    qualifications: ["DDS", "MD", "FACS"],
    experience: 20,
    bio: "Dr. Tanaka is a dual-degree oral surgeon with extensive experience in implant placement, wisdom tooth extraction, and corrective jaw surgery. He completed his surgical training at Johns Hopkins Hospital.",
    availableDays: ["Monday", "Tuesday", "Thursday"],
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Pediatric Dentistry",
    qualifications: ["DMD", "MPH", "ABPD"],
    experience: 10,
    bio: "Board-certified pediatric dentist passionate about creating positive dental experiences for children. Dr. Sharma holds a Master's in Public Health and volunteers regularly with school dental health programs.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Friday"],
  },
  {
    name: "Dr. Robert Kessler",
    specialty: "Periodontics & Implants",
    qualifications: ["DDS", "MS Perio", "DIPLOMATE"],
    experience: 16,
    bio: "Periodontist specializing in gum disease treatment, bone regeneration, and implant surgery. Dr. Kessler is a Diplomate of the American Board of Periodontology and lectures nationally on implant techniques.",
    availableDays: ["Tuesday", "Wednesday", "Friday"],
  },
];

export default function Doctors() {
  return (
    <>
      <Head>
        <title>Our Doctors — BrightSmile Dental Clinic</title>
      </Head>

      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-white via-teal-50/50 to-medical-blue section-padding">
          <div className="container-narrow text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-teal-100/60 text-medical-teal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Expert Team
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Meet Our Doctors
            </h1>
            <p className="text-lg text-medical-muted max-w-2xl mx-auto">
              Our team of board-certified dental specialists brings together
              decades of experience, advanced training, and a genuine passion
              for patient care.
            </p>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doc, i) => (
                <DoctorCard key={doc.name} {...doc} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-teal-50/30 to-white">
          <div className="container-narrow text-center" data-aos="fade-up">
            <div className="card max-w-2xl mx-auto bg-gradient-to-br from-teal-50 to-medical-blue border-0">
              <span className="text-5xl mb-4 block">🤝</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3">
                Ready to Meet Your New Dentist?
              </h2>
              <p className="text-medical-muted mb-6">
                Schedule a consultation with any of our specialists. We'll
                create a personalized treatment plan just for you.
              </p>
              <ProjectLink href="/booking" className="btn-primary">
                Book a Consultation →
              </ProjectLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
