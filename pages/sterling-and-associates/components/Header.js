import { useState } from "react";
import ProjectLink from "@/components/ProjectLink";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
              <span className="text-navy-900 font-serif font-bold text-lg">
                S
              </span>
            </div>
            <div>
              <span className="text-white font-serif text-lg font-semibold tracking-wide">
                Sterling
              </span>
              <span className="text-gold-400 font-serif text-lg">
                &nbsp;&amp;&nbsp;
              </span>
              <span className="text-white font-serif text-lg font-semibold tracking-wide">
                Associates
              </span>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm ${
                  router.pathname === link.href
                    ? "text-gold-400 bg-navy-800"
                    : "text-gray-300 hover:text-white hover:bg-navy-800/50"
                }`}
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="ml-4 bg-gold-500 text-navy-900 px-6 py-2 text-sm font-semibold tracking-wide rounded-sm hover:bg-gold-400 transition-colors"
            >
              Free Consultation
            </ProjectLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:bg-navy-800 rounded-sm transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-navy-800 pb-4">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                  router.pathname === link.href
                    ? "text-gold-400 bg-navy-800"
                    : "text-gray-300 hover:text-white hover:bg-navy-800/50"
                }`}
              >
                {link.label}
              </ProjectLink>
            ))}
            <div className="px-4 pt-3">
              <ProjectLink
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-gold-500 text-navy-900 px-6 py-3 text-sm font-semibold tracking-wide rounded-sm hover:bg-gold-400 transition-colors"
              >
                Free Consultation
              </ProjectLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
