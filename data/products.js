export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "beauty", label: "Beauty & Nails" },
  { id: "personal", label: "Personal Care" },
  { id: "home", label: "Home & Apparel" },
  { id: "wellness", label: "Wellness & Nutrition" },
  { id: "pet", label: "Pet Care" },
  { id: "industrial", label: "Industrial & Packaging" },
];

export const CATEGORY_LABELS = {
  beauty: "Beauty & Nails",
  personal: "Personal Care",
  home: "Home & Apparel",
  wellness: "Wellness & Nutrition",
  pet: "Pet Care",
  industrial: "Industrial & Packaging",
};

// To show a photo for a product, add an image file to /public/products/
// named exactly as the "image" path below (e.g. public/products/press-on-nails.jpg).
// Cards fall back to a styled icon tile automatically if the photo is missing.
export const PRODUCTS = [
  {
    id: "press-on-nails",
    name: "Press-On Nails",
    category: "beauty",
    icon: "flame",
    image: "/products/press-on-nails.jpg",
    scope: ["Product research", "Supplier discovery", "Supplier vetting", "Pricing & MOQ negotiation", "Sample coordination", "Production coordination"],
    helped:
      "I researched the press-on nail market, identified specialized manufacturers, compared quotations, and coordinated samples through to production for brand-ready nail sets.",
    description:
      "Handmade and production-grade press-on nail sets sourced from specialized manufacturers.",
  },
  {
    id: "crystal-nails",
    name: "Natural Crystal Nails",
    category: "beauty",
    icon: "gem",
    image: "/products/crystal-nails.jpg",
    scope: ["Product research", "Specialist manufacturer sourcing", "Feasibility evaluation", "Sample coordination", "Quality control"],
    helped:
      "A rare lapidary-craft product: I located workshops capable of carving genuine crystal into wearable nails, evaluated feasibility, and managed sampling and quality checks.",
    description:
      "Luxury nails carved from genuine natural crystals — a rare lapidary-craft beauty product.",
  },
  {
    id: "nail-rings",
    name: "Adjustable Nail Rings",
    category: "beauty",
    icon: "ring",
    image: "/products/nail-rings.jpg",
    scope: ["Supplier discovery", "OEM sourcing", "MOQ evaluation", "Pricing comparison", "Sample coordination"],
    helped:
      "Sourced adjustable nail-ring manufacturers as a no-adhesive alternative to press-ons, comparing OEM options on quality, MOQ, and price before sampling.",
    description:
      "Wearable nail rings — a no-adhesive alternative for customers who prefer not to attach press-ons directly to their nails.",
  },
  {
    id: "hair-clay",
    name: "Organic Hair Clay",
    category: "personal",
    icon: "jar",
    image: "/products/hair-clay.jpg",
    scope: ["Supplier vetting", "Formulation coordination", "Packaging sourcing", "Sample coordination", "Production follow-up"],
    helped:
      "Vetted clean-formulation manufacturers for an organic styling clay, coordinated formulation samples, and sourced packaging to match the brand's positioning.",
    description:
      "Natural-hold styling clay made with organic ingredients, sourced with clean formulations.",
  },
  {
    id: "mouthwash",
    name: "Organic Mouthwash",
    category: "personal",
    icon: "bottle",
    image: "/products/mouthwash.jpg",
    scope: ["Manufacturer sourcing", "Formulation coordination", "Compliance review", "Packaging sourcing", "Production coordination"],
    helped:
      "Sourced organic oral-care manufacturers across two formats \u2014 effervescent tablets and oil-swish \u2014 coordinating formulation, compliance, and packaging.",
    description:
      "Clean oral care in two formats: effervescent tablets and traditional oil-swish formulas.",
  },
  {
    id: "cologne",
    name: "Natural Cologne",
    category: "personal",
    icon: "spray",
    image: "/products/cologne.jpg",
    scope: ["Fragrance house sourcing", "Supplier vetting", "Sample coordination", "Packaging sourcing"],
    helped:
      "Worked with specialized fragrance houses to develop a natural cologne, managing sampling rounds and sourcing bottles and packaging.",
    description:
      "Fragrance built on natural ingredients, developed with specialized fragrance houses.",
  },
  {
    id: "face-cream",
    name: "Organic Face Cream",
    category: "personal",
    icon: "cream",
    image: "/products/face-cream.jpg",
    scope: ["Supplier discovery", "Supplier vetting", "Formulation coordination", "Sample coordination", "Packaging sourcing"],
    helped:
      "Identified certified clean-beauty manufacturers for an organic face cream and coordinated formulation samples and premium packaging.",
    description:
      "Certified-organic facial moisturizer sourced from clean-beauty manufacturers.",
  },
  {
    id: "eye-balm",
    name: "Natural Eye-Pearl Balm",
    category: "personal",
    icon: "eye",
    image: "/products/eye-balm.jpg",
    scope: ["Supplier discovery", "Formulation coordination", "Sample coordination", "Packaging sourcing"],
    helped:
      "Sourced a manufacturer for a pearl-infused under-eye balm and coordinated formulation, sampling, and jar packaging.",
    description:
      "Pearl-infused under-eye balm with a natural ingredient base for delicate skin care.",
  },
  {
    id: "floss",
    name: "Plastic-Free Floss",
    category: "personal",
    icon: "floss",
    image: "/products/floss.jpg",
    scope: ["Sustainable material sourcing", "Supplier vetting", "MOQ evaluation", "Sample coordination"],
    helped:
      "Sourced plastic-free floss picks made from wheat straw and silk, vetting suppliers on materials and sustainability claims before sampling.",
    description:
      "Sustainable dental floss picks made from wheat straw and natural silk — zero plastic.",
  },
  {
    id: "wool-comforter",
    name: "Wool Comforter",
    category: "home",
    icon: "bed",
    image: "/products/wool-comforter.jpg",
    scope: ["Textile supplier sourcing", "Quality evaluation", "Pricing negotiation", "Production coordination", "Logistics coordination"],
    helped:
      "Sourced natural wool bedding manufacturers, evaluated fill and fabric quality, negotiated pricing, and coordinated production and delivery.",
    description:
      "Premium natural wool bedding sourced from quality textile manufacturers.",
  },
  {
    id: "laundry-pods",
    name: "Organic Laundry Pods",
    category: "home",
    icon: "pod",
    image: "/products/laundry-pods.jpg",
    scope: ["Manufacturer sourcing", "Formulation coordination", "Compliance review", "Packaging sourcing", "Production coordination"],
    helped:
      "Sourced plant-based detergent pod manufacturers, coordinating formulation, compliance, and container packaging through production.",
    description:
      "Plant-based detergent pods with organic, biodegradable cleaning formulations.",
  },
  {
    id: "laundry-sheets",
    name: "Organic Laundry Sheets",
    category: "home",
    icon: "sheet",
    image: "/products/laundry-sheets.jpg",
    scope: ["Manufacturer sourcing", "Formulation coordination", "Packaging sourcing", "Production coordination"],
    helped:
      "Sourced dissolvable eco laundry sheet manufacturers and coordinated formulation, retail-ready packaging, and production.",
    description:
      "Dissolvable eco laundry detergent sheets — lightweight, plastic-free, travel-friendly.",
  },
  {
    id: "swim-shorts",
    name: "Plastic-Free Swim Shorts",
    category: "home",
    icon: "shorts",
    image: "/products/swim-shorts.jpg",
    scope: ["Eco-textile sourcing", "Supplier vetting", "Sample coordination", "Production coordination"],
    helped:
      "Sourced plastic-free swimwear fabric and garment manufacturers, managing sampling and production for a sustainable swim-shorts line.",
    description:
      "Sustainable swimwear made without virgin plastics, sourced from eco-textile suppliers.",
  },
  {
    id: "whey-instantized",
    name: "Whey Protein — Instantized",
    category: "wellness",
    icon: "shaker",
    image: "/products/whey-instantized.jpg",
    scope: ["Nutrition manufacturer sourcing", "Certification review", "Pricing & MOQ negotiation", "Production coordination"],
    helped:
      "Sourced certified nutrition manufacturers for instantized whey protein, reviewing documentation and negotiating pricing and MOQs.",
    description:
      "Fast-mixing instantized whey protein sourced from certified nutrition manufacturers.",
  },
  {
    id: "whey-isolate",
    name: "Whey Protein — Isolate",
    category: "wellness",
    icon: "shakerCheck",
    image: "/products/whey-isolate.jpg",
    scope: ["Nutrition manufacturer sourcing", "Quality documentation", "Pricing & MOQ negotiation", "Production coordination"],
    helped:
      "Sourced high-purity whey isolate for premium supplement positioning, with quality documentation and negotiated production terms.",
    description:
      "High-purity whey isolate for premium supplement brands, with quality documentation.",
  },
  {
    id: "gummies",
    name: "Cognitive Gummies",
    category: "wellness",
    icon: "brain",
    image: "/products/gummies.jpg",
    scope: ["Manufacturer sourcing", "Formulation coordination", "Compliance review", "Packaging sourcing"],
    helped:
      "Sourced functional gummy manufacturers for a cognitive-focus formula, coordinating formulation, compliance, and packaging.",
    description:
      "Functional gummies formulated for focus and cognitive enhancement.",
  },
  {
    id: "pet-multivitamin",
    name: "Pet Multivitamin Treats",
    category: "pet",
    icon: "paw",
    image: "/products/pet-multivitamin.jpg",
    scope: ["Pet supplement manufacturer sourcing", "Formulation coordination", "Compliance review", "Packaging sourcing"],
    helped:
      "Sourced pet supplement manufacturers for multivitamin soft chews, coordinating formulation and retail packaging.",
    description:
      "Daily multivitamin soft chews for dogs and cats — immune, joint, heart, and coat support.",
  },
  {
    id: "pet-lick-sticks",
    name: "Organic Pet Lick Sticks",
    category: "pet",
    icon: "paw",
    image: "/products/pet-lick-sticks.jpg",
    scope: ["Pet supplement manufacturer sourcing", "Formulation coordination", "Sample coordination", "Packaging sourcing"],
    helped:
      "Sourced manufacturers for creamy pet supplement sticks made with real salmon, managing samples and stick-pack packaging.",
    description:
      "Creamy daily pet supplement sticks made with real salmon and natural ingredients.",
  },
  {
    id: "butane",
    name: "Butane Gas Refill",
    category: "industrial",
    icon: "flameCan",
    image: "/products/butane.jpg",
    scope: ["Supplier sourcing", "Compliance & safety certification review", "Pricing negotiation", "Logistics coordination"],
    helped:
      "Sourced butane refill suppliers with the required safety certifications and coordinated compliant shipping and logistics.",
    description:
      "Butane refill canisters sourced with compliance and safety certifications in place.",
  },
  {
    id: "packaging",
    name: "Custom Packaging",
    category: "industrial",
    icon: "box",
    image: "/products/packaging.jpg",
    scope: ["Packaging supplier sourcing", "Material evaluation", "Pricing & MOQ negotiation", "Sample coordination"],
    helped:
      "Sourced custom boxes, containers, and food-grade packaging to spec \u2014 evaluating materials, negotiating pricing, and coordinating samples.",
    description:
      "Boxes, containers, cosmetic bottles, and food-grade plastic packaging — sourced to spec.",
  },
  {
    id: "cosmetic-packaging",
    name: "Cosmetic Bottles & Jars",
    category: "industrial",
    icon: "jar",
    image: "/products/cosmetic-packaging.jpg",
    scope: ["Packaging supplier sourcing", "Material evaluation", "Sample coordination", "Production coordination"],
    helped:
      "Sourced premium glass bottles, jars, and droppers for skincare brands, from material selection through sampled production runs.",
    description:
      "Premium glass bottles, jars, and droppers for skincare and cosmetic brands.",
  },
];
