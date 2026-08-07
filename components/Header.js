"use client";

import { useState } from "react";

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
        <div className="brand">
          <div className="logo">LEOPOLDO ALCANTARA JR.</div>
          <div className="tag">Product Sourcing Specialist</div>
        </div>
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
