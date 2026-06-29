import ProjectLink from "@/components/ProjectLink";

export default function Footer() {
  return (
    <footer className="gradient-choco text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎂</span>
              <div>
                <h3 className="font-display text-2xl text-cream">
                  Sweet Bliss
                </h3>
                <p className="font-script text-blush -mt-1">Bakery</p>
              </div>
            </div>
            <p className="text-cream/70 font-body text-sm leading-relaxed">
              Crafting sweet memories since 2015. Every cake tells a story, and
              we make sure yours is delicious.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-4 text-blush">🧁 Hours</h4>
            <div className="space-y-2 font-body text-sm text-cream/80">
              <p>Mon – Fri: 7:00 AM – 7:00 PM</p>
              <p>Saturday: 8:00 AM – 6:00 PM</p>
              <p>Sunday: 9:00 AM – 3:00 PM</p>
              <div className="pt-2 border-t border-cream/20 mt-3">
                <p className="text-blush font-semibold">🎉 Custom orders</p>
                <p>Available by appointment</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-blush">
              🍰 Quick Links
            </h4>
            <div className="space-y-2 font-body text-sm">
              {[
                { href: "/menu", label: "Full Menu" },
                { href: "/gallery", label: "Cake Gallery" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Place Order" },
              ].map((link) => (
                <ProjectLink
                  key={link.href}
                  href={link.href}
                  className="block text-cream/80 hover:text-blush transition-colors duration-200"
                >
                  → {link.label}
                </ProjectLink>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-blush">📍 Find Us</h4>
            <div className="space-y-2 font-body text-sm text-cream/80 mb-6">
              <p>123 Vanilla Lane</p>
              <p>Sugarville, CA 90210</p>
              <p className="text-blush font-semibold">(555) 123-CAKE</p>
              <p>hello@sweetblissbakery.com</p>
            </div>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
                <span
                  key={social}
                  className="inline-block px-3 py-1.5 bg-cream/10 rounded-full text-xs font-body
                             hover:bg-blush/30 hover:text-cream cursor-pointer transition-all duration-200"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-cream/50">
            © 2015 – {new Date().getFullYear()} Sweet Bliss Bakery. All rights
            reserved.
          </p>
          <p className="font-script text-blush/60 text-lg">
            Made with 💕 and a whole lot of flour
          </p>
        </div>

        <div className="text-xs text-cream/80">
          Built by{" "}
          <a
            href="https://www.melvinjonesrepol.com"
            className="text-cream/80 hover:text-cream"
          >
            Melvin Jones Repol
          </a>
        </div>
      </div>
    </footer>
  );
}
