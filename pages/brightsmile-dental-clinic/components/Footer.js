import ProjectLink from "@/components/ProjectLink";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/booking", label: "Book Now" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "General Checkup",
  "Teeth Whitening",
  "Orthodontics",
  "Root Canal",
  "Dental Implants",
  "Emergency Care",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚨</span>
            <div>
              <p className="font-bold text-sm">
                Dental Emergency? We're here 24/7
              </p>
              <p className="text-xs text-red-100">
                Same-day appointments available for emergencies
              </p>
            </div>
          </div>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-red-50 transition"
          >
            <svg
              width="16"
              height="16"
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
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-teal to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                😁
              </div>
              <span className="text-xl font-bold">
                Bright<span className="text-medical-teal-400">Smile</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted dental care partner in the Medical District. Creating
              healthy, beautiful smiles since 2005.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-medical-teal-400 hover:bg-gray-700 transition text-xs uppercase font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <ProjectLink
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-medical-teal-400 transition"
                  >
                    {link.label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <ProjectLink
                    href="/services"
                    className="text-sm text-gray-400 hover:text-medical-teal-400 transition"
                  >
                    {s}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Insurance */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                123 Health Ave
                <br />
                Medical District
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (800) 555-1234
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  className="shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@brightsmiledental.com
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-gray-500">
                Accepted Insurance
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Delta Dental", "Cigna", "Aetna", "MetLife"].map((ins) => (
                  <span
                    key={ins}
                    className="px-3 py-1 bg-gray-800 rounded-lg text-[11px] text-gray-400 font-medium"
                  >
                    {ins}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BrightSmile Dental Clinic. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              HIPAA Notice
            </a>
          </div>

          <p className="text-muted text-xs font-mono">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              className="text-gray-500 hover:underline"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
