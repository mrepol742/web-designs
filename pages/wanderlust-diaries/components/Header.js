import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProjectLink from "@/components/ProjectLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-ocean-600 flex items-center justify-center text-white font-bold text-lg group-hover:bg-ocean-700 transition-colors">
              W
            </div>
            <span
              className={`font-[Playfair_Display] text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Wanderlust
            </span>
          </ProjectLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  router.pathname === link.href
                    ? "bg-ocean-600 text-white"
                    : scrolled
                      ? "text-gray-600 hover:text-ocean-600 hover:bg-ocean-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </ProjectLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  router.pathname === link.href
                    ? "bg-ocean-600 text-white"
                    : "text-gray-600 hover:bg-ocean-50 hover:text-ocean-600"
                }`}
              >
                {link.label}
              </ProjectLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
