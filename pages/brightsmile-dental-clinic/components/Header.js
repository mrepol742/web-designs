import { useState } from "react";
import ProjectLink from "@/components/ProjectLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/booking", label: "Book Now" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-medical-teal to-teal-700 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C9.5 2 7.5 3.5 7.5 6c0 1.5.5 2.5 1 4 .5 1.5 1 3.5 1.5 6 .3 1.5.5 3 .5 4 0 1 .5 2 1.5 2s1.5-1 1.5-2c0-1 .2-2.5.5-4 .5-2.5 1-4.5 1.5-6 .5-1.5 1-2.5 1-4 0-2.5-2-4-4.5-4z" />
                <path d="M9 6.5c-.5-.5-1-1.2-1-2" />
                <path d="M15 6.5c.5-.5 1-1.2 1-2" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">
                Bright<span className="text-medical-teal">Smile</span>
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-medical-muted font-medium -mt-1">
                Dental Clinic
              </span>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-medical-teal hover:bg-teal-50 transition-all duration-200"
              >
                {link.label}
              </ProjectLink>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <ProjectLink
              href="/booking"
              className="hidden sm:inline-flex btn-primary text-sm !px-6 !py-2.5 rounded-xl"
            >
              Book Appointment
            </ProjectLink>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-medical-teal hover:bg-teal-50 transition-all"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/booking"
              onClick={() => setMobileOpen(false)}
              className="block w-full btn-primary text-sm text-center mt-3"
            >
              Book Appointment
            </ProjectLink>
          </nav>
        </div>
      )}
    </header>
  );
}
