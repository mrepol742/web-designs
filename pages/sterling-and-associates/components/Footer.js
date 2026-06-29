import ProjectLink from "@/components/ProjectLink";

const footerLinks = {
  Services: [
    { href: "/services", label: "Corporate Law" },
    { href: "/services", label: "Real Estate" },
    { href: "/services", label: "Family Law" },
    { href: "/services", label: "Criminal Defense" },
    { href: "/services", label: "Estate Planning" },
  ],
  Company: [
    { href: "/about", label: "Our Story" },
    { href: "/about", label: "Our Team" },
    { href: "/properties", label: "Listings" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "#", label: "Legal Blog" },
    { href: "#", label: "Market Reports" },
    { href: "#", label: "Client Portal" },
    { href: "#", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
                <span className="text-navy-900 font-serif font-bold text-lg">
                  S
                </span>
              </div>
              <div>
                <span className="text-white font-serif text-lg font-semibold">
                  Sterling
                </span>
                <span className="text-gold-400 font-serif text-lg">&amp;</span>
                <span className="text-white font-serif text-lg font-semibold">
                  Associates
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Delivering trusted legal counsel and premium real estate advisory
              since 1987. Our commitment to excellence defines every engagement.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-8 h-8 bg-navy-800 rounded-sm flex items-center justify-center border border-navy-700">
                <span className="text-gold-400 font-bold text-[10px]">ABA</span>
              </div>
              <div className="w-8 h-8 bg-navy-800 rounded-sm flex items-center justify-center border border-navy-700">
                <span className="text-gold-400 font-bold text-[10px]">SLA</span>
              </div>
              <div className="w-8 h-8 bg-navy-800 rounded-sm flex items-center justify-center border border-navy-700">
                <span className="text-gold-400 font-bold text-[10px]">NAR</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-serif text-base font-semibold mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <ProjectLink
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </ProjectLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Office Address Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2 mb-3 md:mb-0">
              <svg
                className="w-4 h-4 text-gold-500"
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
              <span>One Liberty Plaza, Suite 2400, New York, NY 10006</span>
            </div>
            <span>
              &copy; {new Date().getFullYear()} Sterling &amp; Associates. All
              rights reserved.
            </span>
          </div>

          <div className="text-xs text-gray-500">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
            >
              Melvin Jones Repol
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
