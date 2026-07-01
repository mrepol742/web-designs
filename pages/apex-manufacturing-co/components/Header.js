import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProjectLink from "@/components/ProjectLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-steel-900/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-steel-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-industrial flex items-center justify-center">
              <svg
                className="w-6 h-6 text-steel-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.18 7 12 10.18 4.82 7 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86V12.32l7-3.5v7.36l-7 3.5z" />
              </svg>
            </div>
            <div>
              <span className="font-heading text-xl uppercase tracking-wider text-white font-bold">
                Apex <span className="text-industrial">MFG</span>
              </span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-steel-400 -mt-1">
                Precision Since 2005
              </p>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-heading uppercase text-sm tracking-widest transition-all duration-300 ${
                  router.pathname === link.href
                    ? "text-industrial"
                    : "text-steel-300 hover:text-white"
                }`}
              >
                {link.label}
                {router.pathname === link.href && (
                  <div className="h-0.5 bg-industrial mt-1" />
                )}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="ml-4 btn-primary text-sm !px-6 !py-2"
            >
              Get Quote
            </ProjectLink>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-steel-800/95 backdrop-blur-md border-t border-steel-700/50 mb-4">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 font-heading uppercase text-sm tracking-widest border-b border-steel-700/30 ${
                  router.pathname === link.href
                    ? "text-industrial bg-steel-900/50"
                    : "text-steel-300 hover:text-white hover:bg-steel-700/30"
                }`}
              >
                {link.label}
              </ProjectLink>
            ))}
            <div className="p-4">
              <ProjectLink
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary block text-center text-sm"
              >
                Get Quote
              </ProjectLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
