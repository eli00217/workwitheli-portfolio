"use client";

import { useState } from "react";

const LINKS = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#process", "Process"],
  ["#portfolio", "Portfolio"],
  ["#about", "About"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main">
        <div className="brand">
          <div className="logo">WORK WITH ELI CO</div>
          <div className="tag">Product Sourcing Specialist</div>
        </div>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-dark" href="#contact">
          Let&apos;s Work Together
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
