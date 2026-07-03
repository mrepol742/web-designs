import ProjectLink from "@/components/ProjectLink";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-bio-teal to-bio-navy rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
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
              <span className="text-lg font-bold text-bio-navy tracking-tight">
                BioNex
              </span>
              <span className="text-lg font-light text-bio-teal ml-1">
                Laboratories
              </span>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-bio-navy/70 hover:text-bio-teal transition-colors rounded-lg hover:bg-bio-teal/5"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-bio-teal text-white text-sm font-semibold rounded-lg hover:bg-bio-teal-dark transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </ProjectLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-bio-navy hover:text-bio-teal transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-bio-navy/80 hover:text-bio-teal hover:bg-bio-teal/5 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 bg-bio-teal text-white text-center font-semibold rounded-lg"
            >
              Get a Quote
            </ProjectLink>
          </div>
        </div>
      )}
    </header>
  );
}
