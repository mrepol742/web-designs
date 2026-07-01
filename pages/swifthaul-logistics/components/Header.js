import { useState } from "react";
import { useRouter } from "next/router";
import ProjectLink from "@/components/ProjectLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-2 group">
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
            <div>
              <span className="font-heading text-xl font-bold tracking-wider text-white">
                SWIFT<span className="text-accent">HAUL</span>
              </span>
              <span className="hidden sm:block text-[10px] text-navy-400 tracking-widest uppercase -mt-1">
                Logistics
              </span>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <ProjectLink
                key={href}
                href={href}
                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded ${
                  router.pathname === href
                    ? "text-accent"
                    : "text-navy-300 hover:text-white"
                }`}
              >
                {label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-bold uppercase tracking-wider rounded transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get Quote
            </ProjectLink>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-navy-700/50 mt-2 pt-4">
            {navLinks.map(({ href, label }) => (
              <ProjectLink
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase rounded transition-colors ${
                  router.pathname === href
                    ? "text-accent bg-navy-800"
                    : "text-navy-300 hover:text-white hover:bg-navy-800"
                }`}
              >
                {label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-3 px-5 py-3 bg-accent text-white text-sm font-bold uppercase tracking-wider rounded text-center"
            >
              Get Quote
            </ProjectLink>
          </div>
        )}
      </div>
    </header>
  );
}
