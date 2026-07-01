import ProjectLink from "@/components/ProjectLink";

const footerLinks = {
  Services: [
    { label: "Freight Shipping", href: "/services" },
    { label: "Last-Mile Delivery", href: "/services" },
    { label: "Cold Chain", href: "/services" },
    { label: "Warehouse & Storage", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "Careers", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold tracking-wider">
                SWIFT<span className="text-accent">HAUL</span>
              </span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-4">
              Delivering Excellence Since 2015. Your trusted partner for
              freight, logistics, and transportation solutions across the
              nation.
            </p>
            <p className="text-navy-500 text-xs">
              321 Logistics Way, Suite 400
            </p>
            <p className="text-navy-500 text-xs">Dallas, TX 75201</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.Services.map(({ label, href }) => (
                <li key={label}>
                  <ProjectLink
                    href={href}
                    className="text-navy-400 text-sm hover:text-accent transition-colors"
                  >
                    {label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.Company.map(({ label, href }) => (
                <li key={label}>
                  <ProjectLink
                    href={href}
                    className="text-navy-400 text-sm hover:text-accent transition-colors"
                  >
                    {label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-white mb-4">
              24/7 Dispatch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:5559114285"
                className="flex items-center gap-2 text-accent font-bold text-lg hover:text-accent-light transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (555) 911-HAUL
              </a>
              <a
                href="mailto:dispatch@swifthaul.com"
                className="flex items-center gap-2 text-navy-400 text-sm hover:text-accent transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                dispatch@swifthaul.com
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              {["M", "X", "in"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded bg-navy-800 hover:bg-accent flex items-center justify-center text-navy-400 hover:text-white transition-all text-xs font-bold"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy-500 text-xs">
            &copy; {new Date().getFullYear()} SwiftHaul Logistics. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-navy-500">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              DOT #2847561
            </a>
          </div>

          <p className="text-muted text-xs font-mono">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              className="hover:text-accent transition-colors"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
