import Icon from "./Icon";

export default function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="cta-inner">
        <div>
          <div className="eyebrow">Let&apos;s Work Together</div>
          <h2>Have a project in mind?</h2>
          <p>
            I&apos;d love to help you source and develop products that your
            customers will love. Reach out and let&apos;s discuss your next
            product line.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-light" href="mailto:projects@workwithelico.net">
            Contact Me <Icon name="arrow" size={16} strokeWidth={2} />
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
