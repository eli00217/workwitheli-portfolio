import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">WORK WITH ELI CO</div>
            <div className="tag">Product Sourcing Specialist</div>
            <p>
              Helping brands turn ideas into high-quality products — from
              research and sourcing to production and delivery.
            </p>
            <div className="socials">
              <a href="mailto:projects@workwithelico.net" aria-label="Email">
                <Icon name="mail" size={18} />
              </a>
              <a
                href="https://wa.me/639085622930"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Icon name="chat" size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a
                  href="https://calendly.com/projects-workwithelico/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discovery Call
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Product Research</li>
              <li>Supplier Sourcing</li>
              <li>Negotiation</li>
              <li>Sample &amp; Production</li>
              <li>Logistics Support</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:projects@workwithelico.net">
                  projects@workwithelico.net
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/639085622930"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +63 908 562 2930
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <div>
            © {new Date().getFullYear()} Leopoldo Alcantara Jr. — Work With Eli
            Co. All rights reserved.
          </div>
          <div>Product Sourcing &amp; Development</div>
        </div>
      </div>
    </footer>
  );
}
