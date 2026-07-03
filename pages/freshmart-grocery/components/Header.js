import ProjectLink from "@/components/ProjectLink";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/deals", label: "Deals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-2">
            <span className="text-3xl">🍊</span>
            <span className="text-xl font-extrabold text-orange-500 tracking-tight">
              Fresh<span className="text-green-500">Mart</span>
            </span>
          </ProjectLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <ProjectLink
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </ProjectLink>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <ProjectLink
              href="/deals"
              className="hidden sm:inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              🛒 Today&apos;s Deals
            </ProjectLink>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-600"
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
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((l) => (
              <ProjectLink
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-orange-500 hover:text-white rounded-lg transition-colors"
              >
                {l.label}
              </ProjectLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
