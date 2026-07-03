import ProjectLink from "@/components/ProjectLink";

export default function Footer() {
  return (
    <footer className="bg-bio-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-bio-teal rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold">BioNex</span>
                <span className="text-lg font-light text-bio-teal-light ml-1">
                  Labs
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Pioneering research since 2012. Advancing science to improve lives
              through innovative biotechnology solutions.
            </p>
            <p className="mb-4 text-sm text-white/40">
              © {new Date().getFullYear()} BioNex Laboratories. All rights
              reserved.
            </p>
            <p className="text-muted text-xs font-mono">
              Built by{" "}
              <a
                href="https://www.melvinjonesrepol.com"
                target="_blank"
                className="text-white/40 hover:underline"
              >
                Melvin Jones Repol
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bio-teal-light mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/research", label: "Research" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <ProjectLink
                    href={link.href}
                    className="text-sm text-white/60 hover:text-bio-teal-light transition-colors"
                  >
                    {link.label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bio-teal-light mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "DNA Sequencing",
                "Drug Discovery",
                "Clinical Trials",
                "Chemical Analysis",
                "Biotech Consulting",
                "Environmental Testing",
              ].map((s) => (
                <li key={s}>
                  <ProjectLink
                    href="/services"
                    className="text-sm text-white/60 hover:text-bio-teal-light transition-colors"
                  >
                    {s}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bio-teal-light mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-bio-teal-light mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-white/60">
                  456 Science Park Drive
                  <br />
                  BioTech District, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-bio-teal-light shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-white/60">
                  info@bionexlabs.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-bio-teal-light shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm text-white/60">(555) 924-7100</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
