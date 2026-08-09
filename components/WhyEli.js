import Icon from "./Icon";

const POINTS = [
  {
    icon: "search",
    title: "Supplier Research",
    text: "I look beyond the first search result and compare manufacturers against your actual requirements, not just their listings.",
  },
  {
    icon: "doc",
    title: "Negotiation",
    text: "I help negotiate pricing, MOQ, terms, and other project details where there is genuine room to improve the deal.",
  },
  {
    icon: "clipboard",
    title: "Hands-On Coordination",
    text: "I can stay involved through sampling, production, packaging, and logistics, depending on what your project needs.",
  },
  {
    icon: "bulb",
    title: "Practical Approach",
    text: "I focus on what actually works for your product, budget, timeline, and market. No overcomplicating things.",
  },
];

export default function WhyEli() {
  return (
    <section className="whyeli" id="why">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="convo">Finding a supplier is only the first step.</p>
          <div className="eyebrow">Why Work With Eli?</div>
          <h2>More than supplier links</h2>
          <div className="rule"></div>
          <p className="whyeli-intro">
            Anyone can search a marketplace and find a supplier. The harder
            part is what comes after: comparing and vetting manufacturers,
            negotiating MOQ and pricing, coordinating samples, following up on
            production, and keeping logistics on track. That is the part I
            handle for you.
          </p>
        </div>
        <div className="whyeli-grid" data-reveal>
          {POINTS.map((p) => (
            <div className="why-card" key={p.title}>
              <div className="icon">
                <Icon name={p.icon} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
