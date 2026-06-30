import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const serviceOptions = [
  "General Checkup & Cleaning",
  "Teeth Whitening",
  "Orthodontic Consultation",
  "Root Canal Therapy",
  "Dental Implant Consultation",
  "Pediatric Dentistry",
  "Emergency Dental Care",
  "Cosmetic Bonding",
  "Dental Crown",
  "Periodontal Treatment",
  "Oral Surgery Consultation",
];

const doctorOptions = [
  "Dr. Sarah Chen — General & Cosmetic",
  "Dr. James Rivera — Orthodontics",
  "Dr. Amara Okafor — Endodontics",
  "Dr. Michael Tanaka — Oral Surgery",
  "Dr. Priya Sharma — Pediatric",
  "Dr. Robert Kessler — Periodontics",
  "No Preference",
];

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

const inputClass =
  "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medical-teal/30 focus:border-medical-teal transition";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Head>
          <title>Booking Confirmed — BrightSmile Dental</title>
        </Head>
        <section className="section-padding min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-lg mx-auto" data-aos="zoom-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
              Appointment Requested!
            </h1>
            <p className="text-medical-muted mb-6">
              We&apos;ve received your booking request. Our team will call you
              within 2 hours to confirm your appointment. Check your email for a
              confirmation summary.
            </p>
            <a
              href="tel:+18005551234"
              className="btn-primary inline-flex items-center gap-2"
            >
              Questions? Call (800) 555-1234
            </a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Book an Appointment — BrightSmile Dental Clinic</title>
      </Head>

      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-white via-teal-50/50 to-medical-blue section-padding">
          <div className="container-narrow text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-teal-100/60 text-medical-teal text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Book Now
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Schedule Your Appointment
            </h1>
            <p className="text-lg text-medical-muted max-w-2xl mx-auto">
              Fill out the form below and our team will confirm your appointment
              within 2 hours. For immediate assistance, call our office
              directly.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="card !p-8 lg:!p-10"
              data-aos="fade-up"
            >
              {/* Section: Appointment Details */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-medical-teal text-white flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Appointment Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Service Needed *</label>
                    <select className={inputClass} required defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Doctor</label>
                    <select className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a doctor
                      </option>
                      {doctorOptions.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Date *</label>
                    <input type="date" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Time *</label>
                    <select className={inputClass} required defaultValue="">
                      <option value="" disabled>
                        Select a time
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Section: Patient Info */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-medical-teal text-white flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Patient Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Date of Birth</label>
                    <input type="date" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Insurance Provider</label>
                    <select className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select insurance
                      </option>
                      <option>Delta Dental</option>
                      <option>Cigna</option>
                      <option>Aetna</option>
                      <option>MetLife</option>
                      <option>Guardian</option>
                      <option>United Healthcare</option>
                      <option>Self-Pay</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-medical-teal text-white flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  Additional Information
                </h2>
                <div>
                  <label className={labelClass}>Notes / Concerns</label>
                  <textarea
                    rows={4}
                    className={inputClass}
                    placeholder="Describe any symptoms, concerns, or special requirements..."
                  />
                </div>
              </div>

              {/* New Patient */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-teal-50 rounded-2xl">
                <input
                  type="checkbox"
                  id="newPatient"
                  className="w-5 h-5 rounded-lg text-medical-teal focus:ring-medical-teal"
                />
                <label
                  htmlFor="newPatient"
                  className="text-sm font-medium text-gray-700 cursor-pointer"
                >
                  I am a new patient at BrightSmile Dental Clinic
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary text-center text-base py-4"
              >
                Request Appointment →
              </button>
              <p className="text-xs text-center text-medical-muted mt-4">
                We&apos;ll call you within 2 hours to confirm. For emergencies,
                call{" "}
                <a
                  href="tel:+18005551234"
                  className="text-medical-teal font-semibold"
                >
                  (800) 555-1234
                </a>
                .
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
