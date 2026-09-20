import ProjectLink from "@/components/ProjectLink";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-darkbrown text-cream/80">
      {/* Newsletter Bar */}
      <div className="bg-darkbrown-medium border-t border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-gold mb-1">
                Stay Connected
              </h3>
              <p className="text-cream/60 font-sans text-sm">
                Get exclusive offers, event invites, and seasonal menu updates.
              </p>
            </div>
            {subscribed ? (
              <p className="text-gold font-sans">
                Thank you for subscribing! 🍷
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex gap-2 w-full md:w-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-darkbrown border border-gold/30 rounded-sm px-4 py-2.5 text-cream
                             font-sans text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold
                             flex-1 md:w-64"
                />
                <button type="submit" className="btn-gold text-xs py-2.5 px-6">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl text-gold mb-3">
              La Dolce Vita
            </h2>
            <p className="text-cream/50 font-sans text-sm leading-relaxed">
              Authentic Italian cuisine crafted with passion since 1998. Every
              dish tells a story of tradition and love.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Hours</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li className="flex justify-between">
                <span>Mon – Thu</span>
                <span className="text-cream/60">11:30 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri – Sat</span>
                <span className="text-cream/60">11:30 AM – 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-cream/60">10:00 AM – 9:00 PM</span>
              </li>
              <li className="pt-2 border-t border-gold/10 text-gold/80">
                Brunch: Sat & Sun 10 AM – 2 PM
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-sans text-sm">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/reservations", label: "Reservations" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <ProjectLink
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "TripAdvisor"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center
                             text-cream/60 hover:bg-gold hover:text-white hover:border-gold
                             transition-all duration-300 font-sans text-xs"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
            <div className="mt-6 font-sans text-sm space-y-1">
              <p className="text-cream/60">127 Via Roma Street</p>
              <p className="text-cream/60">Downtown, NY 10012</p>
              <p className="text-gold">(212) 555-0198</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="font-sans text-xs text-cream/40">
            © {new Date().getFullYear()} La Dolce Vita Ristorante. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-cream/40">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              className="text-gold"
              target="_blank"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
