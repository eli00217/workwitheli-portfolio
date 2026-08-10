"use client";

import { useEffect, useState } from "react";

const searches = [
  "organic mouthwash",
  "PVA-free laundry sheets",
  "natural hair clay",
  "organic pet supplements",
  "stainless steel products",
];

const sources = [
  "Alibaba",
  "Made-in-China",
  "Global Sources",
];

export default function SourcingSearch() {
  const [query, setQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState(0);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    let timer;

    const current = searches[searchIndex];

    if (!searching && query.length < current.length) {
      timer = setTimeout(() => {
        setQuery(current.slice(0, query.length + 1));
      }, 65);
    } else if (!searching && query.length === current.length) {
      timer = setTimeout(() => {
        setSearching(true);
      }, 700);
    } else if (searching) {
      timer = setTimeout(() => {
        setQuery("");
        setSearching(false);
        setSearchIndex((prev) => (prev + 1) % searches.length);
      }, 2800);
    }

    return () => clearTimeout(timer);
  }, [query, searchIndex, searching]);

  return (
    <div className="sourcing-search" aria-label="Product sourcing search animation">
      <div className="search-window">
        <div className="search-top">
          <span className="search-dot" />
          <span className="search-dot" />
          <span className="search-dot" />
          <span className="search-title">Product Research</span>
        </div>

        <div className="search-bar">
          <span className="search-icon">⌕</span>
          <span className="search-query">
            {query}
            <span className="typing-cursor" />
          </span>
        </div>

        <div className={`search-status ${searching ? "active" : ""}`}>
          {!searching ? (
            <>
              <span className="status-pulse" />
              Researching product...
            </>
          ) : (
            <>
              <span className="status-check">✓</span>
              Supplier sources found
            </>
          )}
        </div>

        <div className="source-results">
          {sources.map((source, index) => (
            <div
              className={`source-result ${searching ? "visible" : ""}`}
              style={{ "--delay": `${index * 180}ms` }}
              key={source}
            >
              <div className="source-logo">
                {source === "Alibaba" ? "A" : source === "Made-in-China" ? "M" : "G"}
              </div>

              <div className="source-info">
                <strong>{source}</strong>
                <span>
                  {index === 0
                    ? "Supplier discovery"
                    : index === 1
                    ? "Manufacturer search"
                    : "Supplier comparison"}
                </span>
              </div>

              <span className="source-check">✓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
