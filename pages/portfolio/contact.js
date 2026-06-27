import { useState } from "react";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const contactInfo = [
  {
    label: "Email",
    value: "mrepol742@gmail.com",
    icon: "✉️",
    href: "mailto:mrepol742@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/mrepol742",
    icon: "⚙️",
    href: "https://github.com/mrepol742",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mrepol742",
    icon: "💼",
    href: "https://linkedin.com/in/mrepol742",
  },
  {
    label: "Twitter",
    value: "@mrepol742",
    icon: "🐦",
    href: "https://twitter.com/mrepol742",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) {
      errs.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      errs.message = "At least 10 characters";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 bg-bg-light border rounded-lg text-white text-sm
     placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-neon/30
     transition-all duration-200 ${
       errors[field]
         ? "border-red-500/50"
         : "border-white/10 hover:border-white/20"
     }`;

  return (
    <>
      <Head>
        <title>Contact — Melvin Jones Repol</title>
      </Head>
      <Header />

      <main className="min-h-screen pt-20">
        <section className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <p
                data-aos="fade-up"
                className="text-neon font-mono text-sm tracking-wider mb-2"
              >
                {"// Get in Touch"}
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="section-heading mb-4"
              >
                Let&apos;s Talk
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="section-sub mb-10"
              >
                Have a project idea, a job opportunity, or just want to say hi?
                I&apos;d love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="slide-right"
                    data-aos-delay={300 + i * 80}
                    className="glass-card flex items-center gap-4 group cursor-pointer"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm text-white group-hover:text-neon transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-8 glass-card !p-4"
              >
                <p className="text-xs text-muted font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                  Usually respond within 24 hours
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="lg:col-span-3"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {submitted ? (
                <div className="glass-card text-center py-16">
                  <span className="text-5xl mb-4 block">🎉</span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted mb-6">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="neon-btn-outline"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card space-y-5"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Name <span className="text-neon">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Your name"
                      className={inputClasses("name")}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Email <span className="text-neon">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="you@example.com"
                      className={inputClasses("email")}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Subject <span className="text-neon">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={handleChange("subject")}
                      placeholder="What's this about?"
                      className={inputClasses("subject")}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Message <span className="text-neon">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      rows={6}
                      className={`${inputClasses("message")} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                    <p className="text-xs text-muted/50 mt-1 text-right font-mono">
                      {form.message.length} / 2000
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className={`neon-btn w-full justify-center !py-4 text-base ${
                      sending ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
