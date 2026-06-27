import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-darkbrown/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <span className="font-serif text-2xl text-gold tracking-wide group-hover:text-gold-light transition-colors">
              La Dolce Vita
            </span>
            <span className="text-[10px] text-gold/60 tracking-[0.3em] uppercase font-sans">
              Ristorante & Bar
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm tracking-wider uppercase transition-colors duration-300 ${
                  router.pathname === link.href
                    ? 'text-gold border-b-2 border-gold pb-1'
                    : 'text-cream/80 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/reservations" className="btn-gold text-xs py-2 px-5">
              Book a Table
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream hover:text-gold transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 border-t border-gold/10' : 'max-h-0'
        }`}
      >
        <nav className="bg-darkbrown px-4 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-sans text-sm tracking-wider uppercase py-2 transition-colors ${
                router.pathname === link.href
                  ? 'text-gold'
                  : 'text-cream/70 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            onClick={() => setIsOpen(false)}
            className="btn-gold text-xs py-2 px-5 text-center mt-2"
          >
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
