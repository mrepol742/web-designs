import ProjectLink from "@/components/ProjectLink";

const footerLinks = {
  Shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop", label: "Brake Systems" },
    { href: "/shop", label: "Engine Parts" },
    { href: "/shop", label: "Performance" },
    { href: "/shop", label: "Lighting" },
  ],
  Services: [
    { href: "/services", label: "Engine Diagnostics" },
    { href: "/services", label: "Oil Change" },
    { href: "/services", label: "Brake Service" },
    { href: "/services", label: "Performance Tuning" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "Certifications" },
    { href: "/contact", label: "Request Quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gunmetal-600 border-t border-gunmetal-100">
      {/* Newsletter */}
      <div className="bg-gunmetal-700 border-b border-gunmetal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-heading uppercase tracking-widest text-white">
                Join the <span className="text-neon">TurboMax</span> Crew
              </h3>
              <p className="text-steel text-sm mt-1">
                Get exclusive deals, new arrivals, and performance tips.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input-industrial flex-1 md:w-72 rounded-r-none"
              />
              <button className="btn-neon rounded-l-none text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-heading uppercase tracking-widest text-white mb-4">
              Turbo<span className="text-neon">Max</span>
            </h4>
            <p className="text-steel text-sm leading-relaxed">
              Your one-stop shop for premium auto parts and expert automotive
              services since 2008.
            </p>
            <div className="flex gap-4 mt-6">
              {["Facebook", "Instagram", "YouTube", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-sm bg-gunmetal-100 flex items-center justify-center text-steel hover:text-neon hover:bg-neon/10 transition-all text-xs font-bold uppercase"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-heading uppercase tracking-widest text-white text-sm mb-4">
                {title}
              </h5>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <ProjectLink
                      href={href}
                      className="text-steel text-sm hover:text-neon transition-colors"
                    >
                      {label}
                    </ProjectLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gunmetal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel text-xs">
            &copy; 2024 TurboMax Auto Parts. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-steel">
            <a href="#" className="hover:text-neon transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neon transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neon transition-colors">
              Warranty Info
            </a>
          </div>

          <p className="text-muted text-xs font-mono">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              className="text-steel hover:underline"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
