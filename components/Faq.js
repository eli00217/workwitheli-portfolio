"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do you only source from China?",
    a: "No. China is a major manufacturing hub and often the right answer, but not always. The best country to source from depends on your product, budget, quantities, and requirements.",
  },
  {
    q: "What types of products can you source?",
    a: "The categories on this site are examples of past work, not a limit. I can research and source across most consumer product categories depending on what your brand needs.",
  },
  {
    q: "Can you work with my existing supplier?",
    a: "Yes. If you already have a supplier, I can step into the communication, help compare quotations, negotiate terms, and follow up on samples and production.",
  },
  {
    q: "Can you negotiate with suppliers?",
    a: "Yes. Where there is genuine room, I negotiate pricing, MOQs, payment terms, and lead times. I will also tell you honestly when a quote is already fair.",
  },
  {
    q: "Can you coordinate samples and production?",
    a: "Yes. I can request and track samples, manage revisions with you, and follow up on production milestones through to shipment.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Whatever you have: an idea, a photo, a reference link, or a rough description. We can work out the missing details together.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="eyebrow">FAQ</div>
          <h2>Common Questions</h2>
          <div className="rule"></div>
        </div>
        <div className="faq-list" data-reveal>
          {FAQS.map((f, i) => (
            <div className="faq-item" key={f.q}>
              <button
                className={`faq-q${open === i ? " open" : ""}`}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq-caret" aria-hidden="true">
                  +
                </span>
              </button>
              <div className={`faq-a${open === i ? " open" : ""}`}>
                <div className="faq-a-inner">
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
