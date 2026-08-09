/**
 * Ambient live-wallpaper layer: "liquid aurora" edition.
 * Pure CSS on a single fixed, contained layer:
 *  - two huge multi-gradient aurora sheets rotating at different speeds
 *    (rotation is perfectly seamless: 360deg === 0deg, no loop jump)
 *  - soft palette orbs drifting on long ease-in-out paths
 *  - a faint diagonal light sweep (desktop only)
 * Everything animates transform/opacity only (compositor-only work).
 * Layer counts and speeds step down on tablet and mobile; reduced-motion
 * users get a beautiful static layered gradient.
 */
export default function Background() {
  return (
    <div className="bg-canvas" aria-hidden="true">
      <span className="aurora aurora-1" />
      <span className="aurora aurora-2" />
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />
      <span className="bg-sweep" />
    </div>
  );
}
