import { useState } from "react";
import ProjectLink from "@/components/ProjectLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-blush/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-3 group">
            <span className="text-4xl group-hover:animate-wiggle transition-transform">
              🎂
            </span>
            <div className="flex flex-col">
              <span className="font-display text-xl text-chocolate leading-tight">
                Sweet Bliss
              </span>
              <span className="font-script text-sm text-blush -mt-1">
                Bakery
              </span>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full font-body font-semibold text-chocolate/80
                           hover:bg-blush/30 hover:text-chocolate transition-all duration-300 text-sm"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="btn-sweet ml-4 text-sm py-2 px-6"
            >
              Order Now 🧁
            </ProjectLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-bakery bg-blush/20 text-chocolate"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2" data-aos="fade-down">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-bakery font-body font-semibold text-chocolate/80
                           hover:bg-blush/30 hover:text-chocolate transition-all duration-300"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center btn-sweet mt-4"
            >
              Order Now 🧁
            </ProjectLink>
          </div>
        )}
      </nav>
    </header>
  );
}
