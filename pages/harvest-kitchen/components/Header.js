import ProjectLink from "@/components/ProjectLink";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-green-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-2 group">
            <span className="text-3xl">🌿</span>
            <span className="font-serif text-xl md:text-2xl font-bold text-green-700 group-hover:text-green-500 transition-colors">
              Harvest Kitchen
            </span>
          </ProjectLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-wood-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="ml-3 px-5 py-2 bg-green-500 text-white text-sm font-bold rounded-full hover:bg-green-600 transition-colors shadow-md"
            >
              Order Now
            </ProjectLink>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-wood-600 hover:bg-green-50"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
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

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-wood-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 bg-green-500 text-white font-bold rounded-full text-center mt-2"
            >
              Order Now
            </ProjectLink>
          </nav>
        )}
      </div>
    </header>
  );
}
