import Icon from "./Icon";

const STEPS = [
  {
    icon: "bulb",
    num: "01",
    title: "Understand",
    text: "We discuss your idea, goals, and product needs.",
  },
  {
    icon: "search",
    num: "02",
    title: "Research",
    text: "I research products and potential suppliers.",
  },
  {
    icon: "handshake",
    num: "03",
    title: "Source & Negotiate",
    text: "I shortlist, negotiate, and secure the best options.",
  },
  {
    icon: "cube",
    num: "04",
    title: "Sample & Produce",
    text: "We test samples and start production.",
  },
  {
    icon: "truck",
    num: "05",
    title: "Deliver",
    text: "Products are shipped and delivered on time.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">My Process</div>
          <h2>A Simple 5-Step Process</h2>
          <div className="rule"></div>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <div className="bubble">
                <Icon name={s.icon} size={26} />
              </div>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
