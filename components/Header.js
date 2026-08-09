"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#process", "Process"],
  ["#portfolio", "Portfolio"],
  ["#about", "About"],
  ["#contact", "Contact"],
  ["https://calendly.com/projects-workwithelico/30min", "Discovery Call"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main">
        <Link
          href="/"
          className="brand"
          aria-label="Eli Alcantara — back to homepage"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            setOpen(false);
          }}
        >
          <span className="logo">ELI ALCANTARA</span>
          <span className="tag">Product Sourcing &amp; Procurement Specialist</span>
        </Link>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map(([href, label]) => {
            const external = href.startsWith("http");
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={external ? "nav-cta-link" : undefined}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          className="btn btn-dark"
          href="https://calendly.com/projects-workwithelico/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work With Me
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className="palette-strip" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={`s${i + 1}`} />
        ))}
      </div>
    </header>
  );
}
