import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/melvin", icon: "⚙️" },
  { label: "LinkedIn", href: "https://linkedin.com/in/melvin", icon: "💼" },
  { label: "Twitter", href: "https://twitter.com/melvin", icon: "🐦" },
  { label: "Email", href: "mailto:hello@melvin.dev", icon: "✉️" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold font-mono neon-text">
                {"<"}M{" />"}
              </span>
            </Link>
            <p className="text-muted text-sm mt-3 max-w-xs leading-relaxed">
              Building things on the web that are fast, accessible, and a little
              bit fun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted text-sm hover:text-neon transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-sm hover:text-neon transition-colors duration-200 flex items-center gap-2"
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Melvin Jones Repol. All rights
            reserved.
          </p>
          <p className="text-muted text-xs font-mono">
            Built by{" "}
            <a
              href="https://www.melvinjonesrepol.com"
              target="_blank"
              className="text-neon hover:underline"
            >
              Melvin Jones Repol
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
