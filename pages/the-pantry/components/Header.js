import { useState } from "react";
import ProjectLink from "@/components/ProjectLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-burgundy-800 text-cream sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-burgundy-800 font-display text-xl font-bold group-hover:scale-110 transition-transform duration-300">
              P
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-wide text-gold">
                The Pantry
              </span>
              <span className="block text-[10px] uppercase tracking-[3px] text-gold-light/70 -mt-1">
                Curated Gourmet
              </span>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className="relative text-sm uppercase tracking-widest text-cream/80 hover:text-gold transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/shop"
              className="ml-4 px-6 py-2.5 bg-gold text-burgundy-800 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Shop Now
            </ProjectLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-burgundy-900/95 backdrop-blur-sm px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <ProjectLink
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg uppercase tracking-widest text-cream/80 hover:text-gold transition-colors py-2 border-b border-cream/10"
            >
              {link.label}
            </ProjectLink>
          ))}
          <ProjectLink
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="block text-center mt-4 px-6 py-3 bg-gold text-burgundy-800 font-bold uppercase tracking-wider rounded"
          >
            Shop Now
          </ProjectLink>
        </div>
      </div>
    </header>
  );
}
