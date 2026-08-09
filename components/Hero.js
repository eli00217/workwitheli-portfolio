import Icon from "./Icon";

const BENEFITS = [
  {
    icon: "globe",
    title: "Reliable Sourcing",
    text: "Access to trusted global suppliers and manufacturers.",
  },
  {
    icon: "tag",
    title: "Cost & Quality Optimized",
    text: "Negotiate the best value without compromising quality.",
  },
  {
    icon: "cube",
    title: "End-to-End Support",
    text: "From research to delivery, I handle the details.",
  },
  {
    icon: "truck",
    title: "On-Time Delivery",
    text: "Strong project and supplier management you can count on.",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div>
          <div className="eyebrow">Hi, I&apos;m Eli. 👋</div>
          <h1>
            Your Sourcing
            <br />
            Guy.
          </h1>
          <p className="hero-title-line">
            Product Sourcing &amp; Procurement Specialist
          </p>
          <p className="lede">
            Need a supplier? Have a product idea? You&apos;re in the right
            place. I help brands find reliable manufacturers, negotiate better
            pricing, and turn product ideas into real products.
          </p>
          <div className="hero-ask">
            <p className="hero-ask-q">So, what are you working on?</p>
            <div className="hero-ask-options">
              <a href="#process" className="ask-chip">I have a product idea</a>
              <a href="#services" className="ask-chip">I need a supplier</a>
              <a href="#contact" className="ask-chip">I need procurement help</a>
              <a href="#portfolio" className="ask-chip">I&apos;m just exploring</a>
            </div>
          </div>
          <div className="hero-ctas">
            <a className="btn btn-dark" href="#portfolio">
              View My Work <Icon name="arrow" size={16} strokeWidth={2} />
            </a>
            <a className="btn btn-outline" href="#contact">
              Let&apos;s Talk <Icon name="chat" size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Why work with me">
          {BENEFITS.map((b) => (
            <div className="row" key={b.title}>
              <div className="icon">
                <Icon name={b.icon} />
              </div>
              <div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
      <div className="waves" aria-hidden="true">
        <svg viewBox="0 0 1440 190" preserveAspectRatio="none">
          <path
            d="M0,120 C240,60 480,180 720,140 C960,100 1200,40 1440,90 L1440,190 L0,190 Z"
            fill="#ABDCDC"
            opacity=".55"
          />
          <path
            d="M0,150 C260,100 520,190 780,160 C1040,130 1240,80 1440,120 L1440,190 L0,190 Z"
            fill="#40B8BC"
            opacity=".6"
          />
          <path
            d="M0,175 C300,140 600,200 900,180 C1150,163 1300,140 1440,160 L1440,190 L0,190 Z"
            fill="#1E8F96"
          />
        </svg>
      </div>
    </section>
  );
}
