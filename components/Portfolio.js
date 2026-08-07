"use client";

import { useState } from "react";
import ProductImage from "./ProductImage";
import { PRODUCTS, CATEGORIES, CATEGORY_LABELS } from "@/data/products";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Featured Work</div>
          <h2>Products I&apos;ve Sourced</h2>
          <p>
            Over 50 products sourced and developed across beauty, personal
            care, home, wellness, and industrial categories — from concept to
            delivered goods. Below is a selection of what I can share publicly.
          </p>
          <p className="nda-note">
            * Most projects are covered by NDAs (non-disclosure agreements)
            with my clients and cannot be disclosed. The products shown here
            are a representative sample.
          </p>
        </div>

        <div
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

        <div className="products">
          {visible.map((p) => (
            <article className="product" key={p.id}>
              <ProductImage
                src={p.image}
                alt={p.name}
                icon={p.icon}
                category={p.category}
              />
              <h3>{p.name}</h3>
              <p className="p-desc">{p.description}</p>
              <div className="cat">{CATEGORY_LABELS[p.category]}</div>
            </article>
          ))}
        </div>

        <div className="portfolio-cta">
          <a
            className="btn btn-light"
            href="https://calendly.com/projects-workwithelico/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Work With Me
          </a>
        </div>
      </div>
    </section>
  );
}
