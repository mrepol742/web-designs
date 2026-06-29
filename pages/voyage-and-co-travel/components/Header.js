import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProjectLink from "@/components/ProjectLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ocean-800/95 backdrop-blur-md shadow-xl shadow-ocean-900/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-sunset-500 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
            </div>
            <div>
              <span className="text-xl font-display font-bold text-white tracking-wide">
                Voyage <span className="text-sunset-500">&</span> Co.
              </span>
              <span className="hidden sm:block text-[10px] text-ocean-300 tracking-[0.25em] uppercase -mt-1">
                Travel Agency
              </span>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  router.pathname === link.href
                    ? "bg-sunset-500 text-white shadow-lg shadow-sunset-500/30"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-sunset-500 text-white text-sm font-semibold rounded-full hover:bg-sunset-600 transition-all duration-300 hover:shadow-lg hover:shadow-sunset-500/30"
            >
              Book Now
            </ProjectLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
          >
            <div className="flex flex-col gap-1.5 transition-all duration-300">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <ProjectLink
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  router.pathname === link.href
                    ? "bg-sunset-500 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </ProjectLink>
            ))}
            <ProjectLink
              href="/contact"
              className="mt-2 px-6 py-3 bg-sunset-500 text-white text-sm font-semibold rounded-full text-center hover:bg-sunset-600 transition-all"
            >
              Book Now
            </ProjectLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
