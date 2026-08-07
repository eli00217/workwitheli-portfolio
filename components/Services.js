import Icon from "./Icon";

const SERVICES = [
  {
    icon: "search",
    title: "Product Research",
    text: "Market and trend research to find the right products for your brand.",
  },
  {
    icon: "users",
    title: "Supplier Sourcing",
    text: "Find and vet reliable suppliers that match your requirements.",
  },
  {
    icon: "doc",
    title: "Negotiation",
    text: "Better pricing, lower MOQs, and favorable terms for your business.",
  },
  {
    icon: "clipboard",
    title: "Sample & Production",
    text: "Manage sampling, production, and quality control with care.",
  },
  {
    icon: "truck",
    title: "Logistics Support",
    text: "Coordinate shipping and delivery for a smooth experience.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">What I Do</div>
          <h2>Services</h2>
          <div className="rule"></div>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="svc" key={s.title}>
              <div className="icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
