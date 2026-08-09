"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ProductImage from "./ProductImage";
import Icon from "./Icon";
import { PRODUCTS, CATEGORIES, CATEGORY_LABELS } from "@/data/products";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null); // product object or null
  const trackRef = useRef(null);

  // Single source of truth for filtering — same logic on every device.
  const visible =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  // Reset carousel to the start whenever the category changes.
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
  }, [filter]);

  const scrollByPage = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  }, []);

  // Close modal on Escape; lock body scroll while open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="convo convo-light">
            Here&apos;s some of the work I&apos;ve been involved in.
          </p>
          <div className="eyebrow">Featured Work</div>
          <h2>Products I&apos;ve Sourced</h2>
          <p>
            Over 50 products sourced and developed across beauty, personal
            care, home, wellness, and industrial categories — from concept to
            delivered goods. Below is a selection of what I can share publicly.
            These categories are examples of past work, not limits — I source
            across any product category your brand needs.
          </p>
          <p className="nda-note">
            * Most projects are covered by NDAs (non-disclosure agreements)
            with my clients and cannot be disclosed. The products shown here
            are a representative sample. Click any product to see how I was
            involved.
          </p>
        </div>

        <div
          data-reveal
          className="filters"
          role="group"
          aria-label="Filter products by category"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`chip${filter === c.id ? " active" : ""}`}
              onClick={() => setFilter(c.id)}
              aria-pressed={filter === c.id}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="carousel">
          <button
            className="car-arrow car-prev"
            onClick={() => scrollByPage(-1)}
            aria-label="Previous products"
          >
            <Icon name="arrow" size={18} strokeWidth={2} />
          </button>

          <div className="products car-track" ref={trackRef} tabIndex={0}>
            {visible.map((p, i) => (
              <article className="product car-item" style={{ "--i": i % 8 }} key={p.id}>
                <button
                  className="product-open"
                  onClick={() => setSelected(p)}
                  aria-label={`View project details for ${p.name}`}
                >
                  <ProductImage
                    src={p.image}
                    alt={p.name}
                    icon={p.icon}
                    category={p.category}
                  />
                  <h3>{p.name}</h3>
                  <p className="p-desc">{p.description}</p>
                  <div className="cat">{CATEGORY_LABELS[p.category]}</div>
                </button>
              </article>
            ))}
          </div>

          <button
            className="car-arrow car-next"
            onClick={() => scrollByPage(1)}
            aria-label="Next products"
          >
            <Icon name="arrow" size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="portfolio-cta">
          <a
            className="btn btn-light"
            href="https://calendly.com/projects-workwithelico/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Work With Eli
          </a>
        </div>
      </div>

      {selected && (
        <div
          className="pmodal-overlay"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} project details`}
        >
          <div className="pmodal" onClick={(e) => e.stopPropagation()}>
            <button
              className="pmodal-close"
              onClick={() => setSelected(null)}
              aria-label="Close project details"
            >
              ✕
            </button>
            <div className="pmodal-media">
              <ProductImage
                src={selected.image}
                alt={selected.name}
                icon={selected.icon}
                category={selected.category}
              />
            </div>
            <div className="pmodal-body">
              <div className="pmodal-cat">
                {CATEGORY_LABELS[selected.category]}
              </div>
              <h3>{selected.name}</h3>
              <div className="pmodal-label">Project Overview</div>
              <p>{selected.description}</p>
              <div className="pmodal-label">What I Worked On</div>
              <ul className="pmodal-scope">
                {selected.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="pmodal-label">How I Helped</div>
              <p>{selected.helped}</p>
              <a
                className="btn btn-dark pmodal-cta"
                href="https://calendly.com/projects-workwithelico/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss a Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
