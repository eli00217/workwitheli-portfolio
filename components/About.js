export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-visual" data-reveal>
          <div className="monogram">LA</div>
          <div className="plate">
            <strong>Leopoldo Alcantara Jr.</strong>
            <span>Product Sourcing Specialist</span>
          </div>
        </div>
        <div data-reveal>
          <div className="eyebrow">About Me</div>
          <h2>Hi, I&apos;m Leopoldo Alcantara Jr.</h2>
          <p>
            I&apos;m a Product Sourcing Specialist who helps brands turn ideas
            into high-quality, delivered products. Throughout my career
            I&apos;ve sourced everything from natural crystal nails and organic
            personal care to nutrition supplements and custom packaging.
          </p>
          <p>
            My approach is simple: understand your goals deeply, find and vet
            the right manufacturers, negotiate terms that protect your margins,
            and manage sampling, production, and logistics until the goods are
            in your hands.
          </p>
          <p>
            Whether you&apos;re launching a new product line or improving an
            existing supply chain, I handle the details so you can focus on
            growing your brand.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="n">50+</div>
              <div className="l">Products Sourced</div>
            </div>
            <div className="stat">
              <div className="n">5</div>
              <div className="l">Industry Categories</div>
            </div>
            <div className="stat">
              <div className="n">End-to-End</div>
              <div className="l">Project Management</div>
            </div>
          </div>
          <p style={{ fontSize: "13px", fontStyle: "italic", marginTop: "18px" }}>
            * Most sourcing projects are protected by client NDAs and cannot be
            publicly disclosed — the portfolio shows a representative sample.
          </p>
        </div>
      </div>
    </section>
  );
}
