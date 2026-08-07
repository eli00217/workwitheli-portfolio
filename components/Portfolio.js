"use client";

import { useState } from "react";
import Icon from "./Icon";
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
            Across my career I&apos;ve sourced and developed products in beauty,
            personal care, home, wellness, and industrial categories — from
            concept to delivered goods.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter products by category">
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
              <div className={`p-icon tint-${p.category}`}>
                <Icon name={p.icon} size={26} />
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="cat">{CATEGORY_LABELS[p.category]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
