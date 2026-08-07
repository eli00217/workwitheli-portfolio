"use client";

import { useState } from "react";
import Icon from "./Icon";

/**
 * Shows the product photo from /public/products/<id>.jpg.
 * If the photo file doesn't exist yet, falls back to a styled icon tile
 * so the card never looks broken.
 */
export default function ProductImage({ src, alt, icon, category }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`p-photo p-photo-fallback tint-${category}`}>
        <Icon name={icon} size={40} />
      </div>
    );
  }

  return (
    <div className="p-photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}
