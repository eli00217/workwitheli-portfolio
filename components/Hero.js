"use client";

import { useState } from "react";
import Icon from "./Icon";

const ASK_OPTIONS = [
  {
    id: "idea",
    label: "I have a product idea",
    title: "You have the idea. I make it real.",
    text: "I help turn product ideas into manufacturable, sourced, and delivered products — validating feasibility, finding and vetting the right OEM or private-label manufacturers, comparing MOQs and quotations, coordinating formulation and samples, and managing packaging, production, and logistics.",
    points: ["Product research & feasibility", "Manufacturer discovery & vetting", "MOQ, pricing & quotation comparison", "Sample & development coordination", "Packaging, production & logistics"],
    cta: "Let's Discuss Your Product",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    id: "supplier",
    label: "I need a supplier",
    title: "The right supplier — not just the cheapest one.",
    text: "I identify, verify, and negotiate with manufacturers that actually fit your product: checking capabilities, certifications, and compliance, comparing MOQs, pricing, and lead times, requesting samples, and managing supplier communication through production.",
    points: ["Supplier discovery & verification", "Certifications & compliance checks", "MOQ, pricing & lead-time comparison", "Sample requests & evaluation", "Ongoing supplier communication"],
    cta: "Find a Supplier",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    id: "procurement",
    label: "I need procurement help",
    title: "I handle the details between you and your suppliers.",
    text: "Already have products or suppliers? I manage the procurement side — supplier communication, quotation comparison, price and MOQ negotiation, sampling, production follow-up, and order, packaging, and logistics coordination — so you can focus on the business.",
    points: ["Supplier communication & management", "Quotation, price & MOQ negotiation", "Sampling & production follow-up", "Order & packaging coordination", "Logistics coordination"],
    cta: "Discuss Procurement Support",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    id: "exploring",
    label: "I\u2019m just exploring",
    title: "No pressure — have a look around.",
    text: "Browse the products I\u2019ve sourced and worked on across different categories, see my 5-step sourcing process, and get a feel for how I handle supplier management, product development, and procurement. If something clicks later, you know where to find me.",
    points: ["Products & categories I\u2019ve worked on", "My 5-step sourcing process", "Supplier management & development experience"],
    cta: "Explore My Work",
    href: "#portfolio",
  },
];


const BENEFITS = [
  {
    icon: "globe",
    title: "Reliable Sourcing",
    text: "Access to trusted global suppliers and manufacturers.",
  },
  {
    icon: "tag",
    title: "Cost & Quality Optimized",
    text: "Negotiate the best value without compromising quality.",
  },
  {
    icon: "cube",
    title: "End-to-End Support",
    text: "From research to delivery, I handle the details.",
  },
  {
    icon: "truck",
    title: "On-Time Delivery",
    text: "Strong project and supplier management you can count on.",
  },
];

export default function Hero() {
  const [open, setOpen] = useState(null);
  const current = ASK_OPTIONS.find((o) => o.id === open) || null;
  return (
    <section className="hero" id="home">
      <div className="container">
        <div>
          <div className="eyebrow">Hi, I&apos;m Eli. 👋</div>
          <h1>
            Your Sourcing
            <br />
            Guy.
          </h1>
          <p className="hero-title-line">
            Product Sourcing &amp; Procurement Specialist
          </p>
          <p className="lede">
            Need a supplier? Have a product idea? You&apos;re in the right
            place. I help brands find reliable manufacturers, negotiate better
            pricing, and turn product ideas into real products.
          </p>
          <div className="hero-ask">
            <p className="hero-ask-q">So, what are you working on?</p>
            <div className="hero-ask-options">
              {ASK_OPTIONS.map((o) => (
                <button
                  key={o.id}
                  className={`ask-chip${open === o.id ? " ask-active" : ""}`}
                  onClick={() => setOpen(open === o.id ? null : o.id)}
                  aria-expanded={open === o.id}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <div className={`ask-panel${open ? " open" : ""}`} aria-live="polite">
              {current && (
                <div className="ask-card" key={current.id}>
                  <button
                    className="ask-close"
                    onClick={() => setOpen(null)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                  <h3>{current.title}</h3>
                  <p>{current.text}</p>
                  <ul>
                    {current.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn-dark ask-cta"
                    href={current.href}
                    target={current.href.startsWith("http") ? "_blank" : undefined}
                    rel={current.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {current.cta} <Icon name="arrow" size={15} strokeWidth={2} />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="hero-ctas">
            <a className="btn btn-dark" href="#portfolio">
              View My Work <Icon name="arrow" size={16} strokeWidth={2} />
            </a>
            <a className="btn btn-outline" href="#contact">
              Let&apos;s Talk <Icon name="chat" size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Why work with me">
          {BENEFITS.map((b) => (
            <div className="row" key={b.title}>
              <div className="icon">
                <Icon name={b.icon} />
              </div>
              <div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
      <div className="waves" aria-hidden="true">
        <svg viewBox="0 0 1440 190" preserveAspectRatio="none">
          <path
            d="M0,120 C240,60 480,180 720,140 C960,100 1200,40 1440,90 L1440,190 L0,190 Z"
            fill="#ABDCDC"
            opacity=".55"
          />
          <path
            d="M0,150 C260,100 520,190 780,160 C1040,130 1240,80 1440,120 L1440,190 L0,190 Z"
            fill="#40B8BC"
            opacity=".6"
          />
          <path
            d="M0,175 C300,140 600,200 900,180 C1150,163 1300,140 1440,160 L1440,190 L0,190 Z"
            fill="#1E8F96"
          />
        </svg>
      </div>
    </section>
  );
}
