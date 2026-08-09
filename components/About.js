export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-collage" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="collage-photo collage-a"
            src="/about/toddler.jpg"
            alt="Leopoldo Alcantara Jr. as a toddler"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="collage-photo collage-b"
            src="/about/recognition.jpg"
            alt="Young Leopoldo with his mother at a school recognition day"
          />
          <figure className="collage-quote">
            <blockquote>
              &ldquo;Curiosity started early.
              <br />
              It still drives everything I do today.&rdquo;
            </blockquote>
          </figure>
        </div>

        <div data-reveal>
          <p className="convo">But before all of this...</p>
          <div className="eyebrow">About Me</div>
          <h2>I was just a curious kid.</h2>
          <p className="about-lead">
            Turns out, that curiosity never really went away.
          </p>
          <p className="about-name-line">
            Hi, I&apos;m <strong>Eli Alcantara</strong>. Friends and clients
            call me Eli.
          </p>
          <p>
            Even as a kid, I was fascinated by how things came together: how
            ideas, people, and simple resources could create something
            meaningful. That same curiosity eventually led me to a career in
            product sourcing.
          </p>
          <p>
            I&apos;m a Product Sourcing Specialist who helps brands turn ideas
            into high-quality, delivered products. Throughout my career,
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
              <div className="n">Diverse</div>
              <div className="l">Categories Covered</div>
            </div>
            <div className="stat">
              <div className="n">End-to-End</div>
              <div className="l">Project Management</div>
            </div>
          </div>
          <p className="stats-note">
            Diverse product categories, with sourcing capabilities tailored to
            your needs. The portfolio shows examples, not limits.
          </p>
          <p className="nda-line">
            * Most sourcing projects are protected by client NDAs and cannot be
            publicly disclosed, so the portfolio shows a representative sample.
          </p>
        </div>
      </div>
    </section>
  );
}
