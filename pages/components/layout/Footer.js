"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faSteam,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import CookiePreference from "../common/CookiePreference";
import TrustPilotWidget from "../common/TrustPilotWidget";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/gaming", label: "Gaming" },
    { href: "/certificates", label: "Certificates" },
    { href: "/work-experience", label: "Work Experience" },
    { href: "/contact-me", label: "Contact Me" },
  ];

  const projectLinks = [
    {
      href: "https://web-designs.melvinjonesrepol.com",
      label: "Web Design",
      external: true,
    },
    {
      href: "https://wakatime.melvinjonesrepol.com",
      label: "Wakatime Stats",
      external: true,
    },
    { href: "https://www.webvium.com", label: "Webvium Browser" },
    {
      href: "https://www.melvinjonesrepol.com/protocol-discussion-platform",
      label: "Protocol Discussion Platform",
    },
    {
      href: "https://www.melvinjonesrepol.com/axleshift-freight-management",
      label: "Axleshift Freight Management",
    },
    {
      href: "https://www.melvinjonesrepol.com/point-of-sale",
      label: "Point of Sale",
    },
    { href: "https://ulishastore.com", label: "Ulisha Store Laravel" },
    {
      href: "https://www.melvinjonesrepol.com/canis-agent",
      label: "Canis Chatbot",
    },
    {
      href: "https://www.hallofcodes.org",
      label: "Hall of Codes",
      external: true,
    },
    { href: "https://www.melvinjonesrepol.com/sitemap.xml", label: "Sitemap" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/mrepol742",
      icon: faFacebook,
      label: "Facebook",
    },
    { href: "https://github.com/mrepol742", icon: faGithub, label: "GitHub" },
    {
      href: "https://linkedin.com/in/mrepol742",
      icon: faLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com/@mrepol742",
      icon: faYoutube,
      label: "YouTube",
    },
    {
      href: "https://steamcommunity.com/id/mrepol742",
      icon: faSteam,
      label: "Steam",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(10rem,0.8fr)_minmax(10rem,1fr)] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              className="text-lg font-black uppercase tracking-[-0.04em] text-white transition-colors hover:text-[#39ff14]"
              href="https://www.melvinjonesrepol.com/"
            >
              Melvin Jones Repol
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Building modern software experiences with passion and precision.
              Striving for excellence, one project at a time.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-sm text-white/60 transition-colors hover:border-[#39ff14] hover:bg-[#39ff14] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#39ff14] focus:ring-offset-2 focus:ring-offset-[#080808]"
                >
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>

            <div className="mt-7">
              <TrustPilotWidget />
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39ff14]">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className="text-sm text-white/55 transition-colors hover:text-white focus:outline-none focus:text-[#39ff14]"
                    href={`https://www.melvinjonesrepol.com${href}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Projects */}
          <nav aria-label="Featured projects">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#39ff14]">
              Projects
            </h4>
            <ul className="mt-5 space-y-3">
              {projectLinks.map(({ href, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/55 transition-colors hover:text-white focus:outline-none focus:text-[#39ff14]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span className="leading-relaxed">
            © {new Date().getFullYear()} Melvin Jones Repol. All rights
            reserved.
          </span>

          <div className="flex items-center gap-3">
            <CookiePreference />

            <span aria-hidden="true" className="text-white/25">
              •
            </span>

            <Link
              href="https://status.melvinjonesrepol.com"
              target="_blank"
              className="transition-colors hover:text-white focus:outline-none focus:text-[#39ff14]"
            >
              Status
            </Link>

            <span aria-hidden="true" className="text-white/25">
              •
            </span>

            <Link
              href="https://www.melvinjonesrepol.com/legal"
              target="_blank"
              className="transition-colors hover:text-white focus:outline-none focus:text-[#39ff14]"
            >
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
