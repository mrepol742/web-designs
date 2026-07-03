import ProjectLink from "@/components/ProjectLink";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍊</span>
              <span className="text-lg font-bold text-white">
                Fresh<span className="text-green-500">Mart</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              FreshMart — Since 2010. Bringing farm-fresh groceries to your
              doorstep with a smile.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Categories", "Deals", "About", "Contact"].map((l) => (
                <li key={l}>
                  <ProjectLink
                    href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {l}
                  </ProjectLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Store hours */}
          <div>
            <h4 className="text-white font-semibold mb-3">Store Hours</h4>
            <ul className="space-y-1 text-sm">
              <li>Mon – Fri: 7 AM – 10 PM</li>
              <li>Saturday: 8 AM – 10 PM</li>
              <li>Sunday: 8 AM – 9 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-1 text-sm">
              <li>📍 456 Market Street</li>
              <li>📞 (555) 234-5678</li>
              <li>✉️ hello@freshmart.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} FreshMart Grocery. All rights reserved.
          </span>

          <p className="text-muted text-xs font-mono">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              className="text-gray-500 hover:underline"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
