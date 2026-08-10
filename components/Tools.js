"use client";

import { useRef, useCallback } from "react";
import { TOOLS } from "@/data/tools";

export default function Tools() {
  const trackRef = useRef(null);

  const scrollByPage = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir * el.clientWidth * 0.9,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="tools-section" id="tools">
      <div className="container">
        <div className="section-head" data-reveal>
          <div className="eyebrow">Tools &amp; Platforms</div>
          <h2>Tools I Use</h2>
          <p>
            A selection of research, sourcing, productivity, AI, and
            communication tools I use throughout the product sourcing process.
          </p>
        </div>

        <div className="carousel">
          <button
            className="car-arrow car-prev"
            onClick={() => scrollByPage(-1)}
            aria-label="Previous tools"
          >
            ‹
          </button>

          <div className="tools car-track" ref={trackRef} tabIndex={0}>
            {TOOLS.map((tool, i) => (
              <article
                className="tool car-item"
                style={{ "--i": i % 8 }}
                key={tool.id}
              >
                <div className="tool-logo">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    loading="lazy"
                  />
                </div>

                <div className="tool-category">{tool.category}</div>

                <h3>{tool.name}</h3>

                <p className="p-desc">{tool.description}</p>
              </article>
            ))}
          </div>

          <button
            className="car-arrow car-next"
            onClick={() => scrollByPage(1)}
            aria-label="Next tools"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
