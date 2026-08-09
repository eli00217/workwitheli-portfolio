const ITEMS = [
  "A product idea",
  "A photo",
  "A reference product",
  "A supplier link",
  "A rough description",
  "Target quantity",
  "Target price, if you have one",
  "Any specs you already know",
];

export default function StartSimple() {
  return (
    <section className="startsimple" id="start">
      <div className="container">
        <div className="startsimple-inner" data-reveal>
          <div>
            <div className="eyebrow">Not sure where to start?</div>
            <h2>You do not need a perfect product brief.</h2>
            <p>
              Plenty of good sourcing projects start with a single photo or a
              half-formed idea. Send me whatever you have, and I can help you
              figure out what information is still needed.
            </p>
          </div>
          <div>
            <div className="start-label">Any of these is enough to begin:</div>
            <ul className="start-chips">
              {ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
