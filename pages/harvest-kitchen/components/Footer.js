import ProjectLink from "@/components/ProjectLink";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-serif text-xl font-bold">
                Harvest Kitchen
              </span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Organic farm-to-table café & juice bar. Locally sourced,
              seasonally inspired, made with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-green-300">
              Navigate
            </h4>
            <ul className="space-y-2">
              {["Menu", "About", "Gallery", "Contact"].map((p) => (
                <li key={p}>
                  <ProjectLink
                    href={`/${p.toLowerCase()}`}
                    className="text-green-200 hover:text-white transition-colors text-sm"
                  >
                    {p}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-green-300">
              Hours
            </h4>
            <ul className="space-y-1 text-sm text-green-200">
              <li>Mon – Fri: 7am – 8pm</li>
              <li>Saturday: 8am – 9pm</li>
              <li>Sunday: 8am – 6pm</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-green-300">
              Find Us
            </h4>
            <ul className="space-y-1 text-sm text-green-200">
              <li>42 Orchard Lane</li>
              <li>Portland, OR 97205</li>
              <li className="mt-2">(503) 555-0174</li>
              <li>hello@harvestkitchen.co</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600 mt-10 pt-6 text-center text-sm text-green-300">
          <p>
            &copy; {new Date().getFullYear()} Harvest Kitchen. All rights
            reserved. 🌱
          </p>
          <p className="text-muted text-xs font-mono">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              className="hover:underline"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
