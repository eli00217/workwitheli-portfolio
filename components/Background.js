/**
 * Ambient live-wallpaper layer.
 * Pure CSS/GPU: five soft gradient orbs + a slow light sweep drifting on
 * transform/opacity only. No JS, no filters, no repaints — a single fixed,
 * promoted layer behind all content. Orb count drops on tablet/mobile and
 * everything freezes to a static gradient under prefers-reduced-motion.
 */
export default function Background() {
  return (
    <div className="bg-canvas" aria-hidden="true">
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />
      <span className="orb orb-4" />
      <span className="orb orb-5" />
      <span className="bg-sweep" />
    </div>
  );
}
