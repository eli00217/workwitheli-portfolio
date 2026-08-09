"use client";

import { useState } from "react";
import Icon from "./Icon";

const SERVICES = [
  {
    icon: "search",
    title: "Product Research",
    text: "Market and trend research to find the right products for your brand.",
    more:
      "I analyze market demand, trends, competitors, and pricing benchmarks to validate your product idea before you spend on production. You get a clear picture of what to build, for whom, and at what target cost.",
  },
  {
    icon: "users",
    title: "Supplier Sourcing",
    text: "Find and vet reliable suppliers that match your requirements.",
    more:
      "I identify and vet manufacturers across trusted global networks — checking certifications, production capacity, quality history, and communication. You only ever talk to suppliers worth your time.",
  },
  {
    icon: "doc",
    title: "Negotiation",
    text: "Better pricing, lower MOQs, and favorable terms for your business.",
    more:
      "I negotiate unit pricing, minimum order quantities, payment terms, and lead times on your behalf — protecting your margins and reducing your upfront risk, especially on first production runs.",
  },
  {
    icon: "clipboard",
    title: "Sample & Production",
    text: "Manage sampling, production, and quality control with care.",
    more:
      "From first samples to golden sample approval and mass production, I manage revisions, timelines, and quality checkpoints — so what arrives is exactly what you approved.",
  },
  {
    icon: "truck",
    title: "Logistics Support",
    text: "Coordinate shipping and delivery for a smooth experience.",
    more:
      "I coordinate freight, documentation, customs, and delivery schedules with reliable logistics partners — keeping your goods moving and you informed at every milestone.",
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState(null);

  const toggle = (i) => setFlipped(flipped === i ? null : i);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="convo">Okay, here&apos;s where I come in.</p>
          <div className="eyebrow">What I Do</div>
          <h2>Services</h2>
          <div className="rule"></div>
          <p className="section-hint">Click a card to see how each service works.</p>
        </div>
        <div className="services-grid" data-reveal>
          {SERVICES.map((s, i) => (
            <div key={s.title} className="flip" style={{ "--i": i }}>
              <button
                className="flipcard"
                onClick={() => toggle(i)}
                aria-expanded={flipped === i}
                aria-label={`${s.title} — ${flipped === i ? "hide" : "show"} details`}
              >
                {flipped === i ? (
                  <div className="face face-back" key="back">
                    <h3>{s.title}</h3>
                    <p>{s.more}</p>
                    <span className="flip-hint" aria-hidden="true">
                      Back ↩
                    </span>
                  </div>
                ) : (
                  <div className="face face-front" key="front">
                    <div className="icon">
                      <Icon name={s.icon} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span className="flip-hint" aria-hidden="true">
                      Learn more +
                    </span>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
