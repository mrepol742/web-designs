import ProjectLink from "@/components/ProjectLink";

export default function Footer() {
  return (
    <footer className="bg-steel-900 border-t border-steel-700/50">
      {/* CTA Banner */}
      <div className="bg-industrial/10 border-b border-industrial/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-steel-400 mb-6 max-w-xl mx-auto">
            From prototype to production — we deliver precision manufacturing
            solutions tailored to your specifications.
          </p>
          <ProjectLink href="/contact" className="btn-primary inline-block">
            Request a Quote
          </ProjectLink>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-industrial flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-steel-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.18 7 12 10.18 4.82 7 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86V12.32l7-3.5v7.36l-7 3.5z" />
                </svg>
              </div>
              <div>
                <span className="font-heading text-lg uppercase tracking-wider text-white font-bold">
                  Apex <span className="text-industrial">MFG</span>
                </span>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Precision manufacturing solutions since 2005. ISO 9001 certified
              facility serving aerospace, automotive, and industrial sectors.
            </p>
            <div className="flex gap-3">
              {["facebook", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-steel-700 flex items-center justify-center text-steel-400 hover:text-industrial hover:border-industrial transition-colors"
                  aria-label={social}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading uppercase tracking-widest text-white text-sm mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "CNC Machining",
                "Metal Fabrication",
                "Welding",
                "Powder Coating",
                "Laser Cutting",
                "Assembly",
              ].map((s) => (
                <li key={s}>
                  <ProjectLink
                    href="/services"
                    className="text-steel-400 text-sm hover:text-industrial transition-colors"
                  >
                    {s}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading uppercase tracking-widest text-white text-sm mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
                { href: "/about#certifications", label: "Certifications" },
              ].map((link) => (
                <li key={link.href}>
                  <ProjectLink
                    href={link.href}
                    className="text-steel-400 text-sm hover:text-industrial transition-colors"
                  >
                    {link.label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading uppercase tracking-widest text-white text-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-steel-400">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-industrial mt-0.5 shrink-0"
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
                <span>
                  123 Industrial Blvd
                  <br />
                  Houston, TX 77001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-industrial shrink-0"
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
                <span>(713) 555-0192</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-industrial shrink-0"
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
                <span>info@apexmfg.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-industrial shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mon–Fri: 7AM–5PM CST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-xs uppercase tracking-wider">
            © 2025 Apex Manufacturing Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-steel-500 uppercase tracking-wider">
            <span>ISO 9001:2015</span>
            <span className="text-steel-700">|</span>
            <span>AS9100D</span>
            <span className="text-steel-700">|</span>
            <span>ITAR Registered</span>
          </div>
        </div>

        <p className="text-muted text-center text-xs font-mono pb-6">
          Built by{" "}
          <a
            href="https://www.melvinjonesrepol.com"
            target="_blank"
            className="text-steel-500 hover:underline"
          >
            Melvin Jones Repol
          </a>
        </p>
      </div>
    </footer>
  );
}
