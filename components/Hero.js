"use client";

import { useState } from "react";
import Icon from "./Icon";

const ASK_OPTIONS = [
  {
    id: "idea",
    label: "I have a product idea",
    title: "You have the idea. I make it real.",
    text: "I help turn product ideas into manufacturable, sourced, and delivered products: validating feasibility, finding and vetting the right OEM or private-label manufacturers, comparing MOQs and quotations, coordinating formulation and samples, and managing packaging, production, and logistics.",
    points: ["Product research & feasibility", "Manufacturer discovery & vetting", "MOQ, pricing & quotation comparison", "Sample & development coordination", "Packaging, production & logistics"],
    cta: "Let's Discuss Your Product",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    id: "supplier",
    label: "I need a supplier",
    title: "The right supplier, not just the cheapest one.",
    text: "I identify, verify, and negotiate with manufacturers that actually fit your product: checking capabilities, certifications, and compliance, comparing MOQs, pricing, and lead times, requesting samples, and managing supplier communication through production.",
    points: ["Supplier discovery & verification", "Certifications & compliance checks", "MOQ, pricing & lead-time comparison", "Sample requests & evaluation", "Ongoing supplier communication"],
    cta: "Find a Supplier",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    id: "procurement",
    label: "I need procurement help",
    title: "I handle the details between you and your suppliers.",
    text: "Already have products or suppliers? I manage the procurement side: supplier communication, quotation comparison, price and MOQ negotiation, sampling, production follow-up, and order, packaging, and logistics coordination, so you can focus on the business.",
    points: ["Supplier communication & management", "Quotation, price & MOQ negotiation", "Sampling & production follow-up", "Order & packaging coordination", "Logistics coordination"],
    cta: "Discuss Procurement Support",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    id: "exploring",
    label: "I\u2019m just exploring",
    title: "No pressure. Have a look around.",
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
    detail:
      "I help you find suppliers that fit your product, requirements, target market, and budget. I research manufacturers, compare capabilities, and speak with suppliers directly, so you are not sorting through hundreds of listings on your own. This is more than sending you supplier links.",
    points: [
      "Supplier discovery and research",
      "Vetting and capability checks",
      "Certifications and requirements",
      "MOQ evaluation",
      "Quotation comparison",
    ],
    cta: "Need help finding a supplier?",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    icon: "tag",
    title: "Cost & Quality Optimized",
    text: "Negotiate the best value without compromising quality.",
    detail:
      "The lowest price is not always the best deal. I look at the full picture: quality, MOQ, lead time, materials, supplier capability, packaging, and the terms behind each quotation. Where there is room, I negotiate to protect your budget and margins.",
    points: [
      "Price and MOQ negotiation",
      "Quotation and supplier comparison",
      "Cost and packaging analysis",
      "Payment terms review",
    ],
    cta: "Let's talk about your sourcing needs",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    icon: "cube",
    title: "End-to-End Support",
    text: "From research to delivery, I handle the details.",
    detail:
      "Depending on what you need, I can stay involved from the first product search through supplier selection, sampling, production, packaging, and delivery. You do not have to manage every supplier conversation yourself. The exact scope depends on your project.",
    points: [
      "Research and supplier discovery",
      "Vetting, quotations, and negotiation",
      "Sampling and production coordination",
      "Packaging and logistics",
    ],
    cta: "Discuss your project",
    href: "https://calendly.com/projects-workwithelico/30min",
  },
  {
    icon: "truck",
    title: "On-Time Delivery",
    text: "Strong project and supplier management you can count on.",
    detail:
      "Production and shipping timelines ultimately depend on suppliers and logistics partners. My job is to keep the project organized and moving: I follow up with suppliers, track milestones, coordinate orders and shipments, and flag potential delays as early as possible.",
    points: [
      "Production follow-up",
      "Timeline and milestone tracking",
      "Order and shipment coordination",
      "Early delay identification",
    ],
    cta: null,
    href: null,
  },
];

export default function Hero() {
  const [open, setOpen] = useState(null);
  const [benefit, setBenefit] = useState(null);
  const current = ASK_OPTIONS.find((o) => o.id === open) || null;
  return (
    <section className="hero" id="home">
      <span className="hero-atmo" aria-hidden="true" />
      <span className="hero-grain" aria-hidden="true" />
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
          {BENEFITS.map((b, i) => (
            <div className="row-wrap" key={b.title}>
              <button
                className={`row row-btn${benefit === i ? " row-open" : ""}`}
                onClick={() => setBenefit(benefit === i ? null : i)}
                aria-expanded={benefit === i}
              >
                <div className="icon">
                  <Icon name={b.icon} />
                </div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
                <span className="row-caret" aria-hidden="true">
                  +
                </span>
              </button>
              <div className={`row-detail${benefit === i ? " open" : ""}`}>
                <div className="row-detail-inner">
                  <p>{b.detail}</p>
                  <ul>
                    {b.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  {b.cta && (
                    <a
                      className="row-cta"
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {b.cta} →
                    </a>
                  )}
                </div>
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
