import Icon from "./Icon";

export default function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="cta-inner" data-reveal>
        <div>
          <div className="eyebrow">Have a product in mind?</div>
          <h2>Let&apos;s talk.</h2>
          <p>
            You do not need to have everything figured out. Tell me what you
            are trying to source, and we can work out the next step together.
          </p>
        </div>
        <div className="cta-actions">
          <a
            className="btn btn-light"
            href="https://calendly.com/projects-workwithelico/60"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a Sourcing Conversation <Icon name="arrow" size={16} strokeWidth={2} />
          </a>
          <a className="btn btn-outline-light" href="#portfolio" style={{ borderColor: "rgba(255,255,255,.5)", color: "#fff" }}>
            Explore My Work
          </a>
          <div className="contact-line">
            <Icon name="mail" size={18} />
            <a href="mailto:projects@workwithelico.net">
              projects@workwithelico.net
            </a>
          </div>
          <div className="contact-line">
            <Icon name="chat" size={18} />
            <a
              href="https://wa.me/639085622930"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +63 908 562 2930
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
