import { useState } from "react";
import { useRouter } from "next/router";
import ProjectLink from "@/components/ProjectLink";

const GearLogo = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10 text-neon fill-current">
    <path d="M32 20a12 12 0 100 24 12 12 0 000-24zm0 18a6 6 0 110-12 6 6 0 010 12z" />
    <path d="M58 30h-4.2a24 24 0 00-3.4-8.2l3-3a2 2 0 000-2.8l-2.8-2.8a2 2 0 00-2.8 0l-3 3A24 24 0 0036 14.2V10a2 2 0 00-2-2h-4a2 2 0 00-2 2v4.2a24 24 0 00-8.2 3.4l-3-3a2 2 0 00-2.8 0l-2.8 2.8a2 2 0 000 2.8l3 3A24 24 0 0014.2 30H10a2 2 0 00-2 2v4a2 2 0 002 2h4.2a24 24 0 003.4 8.2l-3 3a2 2 0 000 2.8l2.8 2.8a2 2 0 002.8 0l3-3a24 24 0 008.2 3.4V54a2 2 0 002 2h4a2 2 0 002-2v-4.2a24 24 0 008.2-3.4l3 3a2 2 0 002.8 0l2.8-2.8a2 2 0 000-2.8l-3-3a24 24 0 003.4-8.2H54a2 2 0 002-2v-4a2 2 0 00-2-2z" />
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gunmetal/95 backdrop-blur-md border-b border-gunmetal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <ProjectLink href="/" className="flex items-center gap-3 group">
            <div className="animate-gear-spin group-hover:animate-pulse-glow">
              <GearLogo />
            </div>
            <div>
              <span className="text-2xl font-heading uppercase tracking-widest text-white">
                Turbo<span className="text-neon">Max</span>
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-steel -mt-1">
                Auto Parts
              </p>
            </div>
          </ProjectLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <ProjectLink
                key={href}
                href={href}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                  router.pathname === href
                    ? "text-neon bg-neon/10"
                    : "text-steel-light hover:text-neon"
                }`}
              >
                {label}
              </ProjectLink>
            ))}
            <ProjectLink href="/shop" className="btn-neon ml-4 text-sm py-2 px-6">
              Shop Now
            </ProjectLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-neon transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-neon transition-all ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-neon transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 border-t border-gunmetal-100" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-1 bg-gunmetal-600">
          {navLinks.map(({ href, label }) => (
            <ProjectLink
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-sm ${
                router.pathname === href
                  ? "text-neon bg-neon/10"
                  : "text-steel-light hover:text-neon hover:bg-gunmetal-100"
              }`}
            >
              {label}
            </ProjectLink>
          ))}
          <ProjectLink
            href="/shop"
            onClick={() => setMobileOpen(false)}
            className="block btn-neon text-center mt-3 text-sm"
          >
            Shop Now
          </ProjectLink>
        </nav>
      </div>
    </header>
  );
}
