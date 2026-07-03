import ProjectLink from "@/components/ProjectLink";

export default function Footer() {
  return (
    <footer className="bg-burgundy-800 text-cream/80">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-burgundy-800 font-display font-bold">
                P
              </div>
              <span className="font-display text-xl font-bold text-gold">
                The Pantry
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              Curated gourmet foods sourced from the finest artisan producers
              around the world. Serving our community since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold text-lg font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {["Shop", "About", "Events", "Contact"].map((item) => (
                <li key={item}>
                  <ProjectLink
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-gold text-lg font-semibold mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Artisan Cheeses</li>
              <li>Charcuterie</li>
              <li>Imported Olive Oils</li>
              <li>Specialty Sauces</li>
              <li>Gourmet Pasta</li>
              <li>Chocolate &amp; Sweets</li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-display text-gold text-lg font-semibold mb-4">
              Visit Us
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                789 Gourmet Lane
                <br />
                Brooklyn, NY 11201
              </p>
              <p>
                <span className="text-gold">Mon – Sat:</span> 10am – 8pm
                <br />
                <span className="text-gold">Sunday:</span> 11am – 6pm
              </p>
              <p>
                <span className="text-gold">Phone:</span> (718) 555-0142
                <br />
                <span className="text-gold">Email:</span>{" "}
                hello@thepantryfoods.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} The Pantry &mdash; Curated Gourmet
            Since 2018. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/40">
            <span className="hover:text-gold cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-gold cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>

          <p className="text-muted text-xs font-mono">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              className="text-cream/40 hover:underline"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
