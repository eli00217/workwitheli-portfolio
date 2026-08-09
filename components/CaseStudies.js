import ProductImage from "./ProductImage";

const CASES = [
  {
    id: "crystal-nails",
    image: "/products/crystal-nails.jpg",
    icon: "gem",
    category: "beauty",
    product: "Natural Crystal Nails",
    need: "The brand wanted a luxury nail product that went beyond standard press-ons: nails carved from genuine natural crystal.",
    work: "This is lapidary work, not typical nail manufacturing, so the search was unusual. I researched feasibility, located specialist workshops capable of carving thin, curved nail shapes from real stone, and managed sampling and quality checks until the pieces met the standard the product needed.",
    result:
      "A rare, production-ready luxury product with a vetted specialist manufacturer behind it.",
  },
  {
    id: "mouthwash",
    image: "/products/mouthwash.jpg",
    icon: "bottle",
    category: "personal",
    product: "Organic Mouthwash",
    need: "A clean oral care line in two different formats: effervescent tablets and a traditional oil-swish formula.",
    work: "I sourced organic oral care manufacturers able to handle both formats, coordinated formulation samples for each, reviewed compliance requirements, and sourced packaging suited to the clean positioning of the brand.",
    result:
      "Both formats developed with compliant, retail-ready packaging from vetted manufacturers.",
  },
  {
    id: "packaging",
    image: "/products/packaging.jpg",
    icon: "box",
    category: "industrial",
    product: "Custom Packaging",
    need: "Boxes, containers, cosmetic bottles, and food-grade plastic packaging, each built to specification rather than bought off the shelf.",
    work: "I sourced packaging suppliers for each format, evaluated materials against the intended use, negotiated pricing and MOQs, and coordinated samples so every format could be checked in hand before ordering.",
    result:
      "Packaging sourced to spec across multiple formats, from cosmetic bottles to food-grade containers.",
  },
];

export default function CaseStudies() {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="convo">A closer look at a few projects.</p>
          <div className="eyebrow">Case Studies</div>
          <h2>Selected Sourcing Projects</h2>
          <div className="rule"></div>
        </div>
        <div className="cases-grid" data-reveal>
          {CASES.map((c) => (
            <article className="case-card" key={c.id}>
              <div className="case-media">
                <ProductImage
                  src={c.image}
                  alt={c.product}
                  icon={c.icon}
                  category={c.category}
                />
              </div>
              <div className="case-body">
                <h3>{c.product}</h3>
                <div className="case-label">The Need</div>
                <p>{c.need}</p>
                <div className="case-label">What I Worked On</div>
                <p>{c.work}</p>
                <div className="case-label">The Result</div>
                <p>{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
