"use client";

import { useState } from "react";
import Icon from "./Icon";

const STEPS = [
  {
    icon: "bulb",
    num: "01",
    title: "Understand",
    text: "We discuss your idea, goals, and product needs.",
    detail:
      "We start with a discovery call about your brand, target customer, budget, and timeline. I turn that into a clear product brief — specifications, quality expectations, and target costs — so every step after this points in the right direction.",
  },
  {
    icon: "search",
    num: "02",
    title: "Research",
    text: "I research products and potential suppliers.",
    detail:
      "I map the supplier landscape for your product: who makes it well, at what price points, with what certifications and MOQs. You receive a researched shortlist instead of a thousand unvetted listings.",
  },
  {
    icon: "handshake",
    num: "03",
    title: "Source & Negotiate",
    text: "I shortlist, negotiate, and secure the best options.",
    detail:
      "I contact and qualify the shortlisted factories, compare quotations line by line, and negotiate pricing, MOQs, payment terms, and lead times — securing the best overall deal, not just the cheapest quote.",
  },
  {
    icon: "cube",
    num: "04",
    title: "Sample & Produce",
    text: "We test samples and start production.",
    detail:
      "Samples are produced, reviewed, and revised until you approve a golden sample. Production then runs against that standard, with quality checkpoints during and before shipment so surprises don't reach your customers.",
  },
  {
    icon: "truck",
    num: "05",
    title: "Deliver",
    text: "Products are shipped and delivered on time.",
    detail:
      "I coordinate freight, export documents, and customs with logistics partners, tracking your shipment door to door. You get your goods on schedule — and a partner ready for your next production run.",
  },
];

export default function Process() {
  const [active, setActive] = useState(null);

  const toggle = (i) => setActive(active === i ? null : i);

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="eyebrow">My Process</div>
          <h2>A Simple 5-Step Process</h2>
          <div className="rule"></div>
          <p className="section-hint">Click any step for the full breakdown.</p>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <button
              className={`step step-btn${active === i ? " active" : ""}`}
              key={s.num}
              onClick={() => toggle(i)}
              aria-expanded={active === i}
              data-reveal
              style={{ transitionDelay: `calc(var(--stagger, 90ms) * ${i})` }}
            >
              <div className="bubble">
                <Icon name={s.icon} size={26} />
              </div>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </button>
          ))}
        </div>
        <div
          className={`step-detail${active !== null ? " open" : ""}`}
          aria-live="polite"
        >
          {active !== null && (
            <div className="step-detail-card" key={active}>
              <div className="step-detail-num">{STEPS[active].num}</div>
              <div>
                <h3>{STEPS[active].title}</h3>
                <p>{STEPS[active].detail}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
