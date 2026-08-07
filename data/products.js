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
    description:
      "Handmade and production-grade press-on nail sets sourced from specialized manufacturers.",
  },
  {
    id: "crystal-nails",
    name: "Natural Crystal Nails",
    category: "beauty",
    icon: "gem",
    image: "/products/crystal-nails.jpg",
    description:
      "Luxury nails carved from genuine natural crystals — a rare lapidary-craft beauty product.",
  },
  {
    id: "nail-rings",
    name: "Adjustable Nail Rings",
    category: "beauty",
    icon: "ring",
    image: "/products/nail-rings.jpg",
    description:
      "Wearable nail rings — a no-adhesive alternative for customers who prefer not to attach press-ons directly to their nails.",
  },
  {
    id: "hair-clay",
    name: "Organic Hair Clay",
    category: "personal",
    icon: "jar",
    image: "/products/hair-clay.jpg",
    description:
      "Natural-hold styling clay made with organic ingredients, sourced with clean formulations.",
  },
  {
    id: "mouthwash",
    name: "Organic Mouthwash",
    category: "personal",
    icon: "bottle",
    image: "/products/mouthwash.jpg",
    description:
      "Clean oral care in two formats: effervescent tablets and traditional oil-swish formulas.",
  },
  {
    id: "cologne",
    name: "Natural Cologne",
    category: "personal",
    icon: "spray",
    image: "/products/cologne.jpg",
    description:
      "Fragrance built on natural ingredients, developed with specialized fragrance houses.",
  },
  {
    id: "face-cream",
    name: "Organic Face Cream",
    category: "personal",
    icon: "cream",
    image: "/products/face-cream.jpg",
    description:
      "Certified-organic facial moisturizer sourced from clean-beauty manufacturers.",
  },
  {
    id: "eye-balm",
    name: "Natural Eye-Pearl Balm",
    category: "personal",
    icon: "eye",
    image: "/products/eye-balm.jpg",
    description:
      "Pearl-infused under-eye balm with a natural ingredient base for delicate skin care.",
  },
  {
    id: "floss",
    name: "Plastic-Free Floss",
    category: "personal",
    icon: "floss",
    image: "/products/floss.jpg",
    description:
      "Sustainable dental floss picks made from wheat straw and natural silk — zero plastic.",
  },
  {
    id: "wool-comforter",
    name: "Wool Comforter",
    category: "home",
    icon: "bed",
    image: "/products/wool-comforter.jpg",
    description:
      "Premium natural wool bedding sourced from quality textile manufacturers.",
  },
  {
    id: "laundry-pods",
    name: "Organic Laundry Pods",
    category: "home",
    icon: "pod",
    image: "/products/laundry-pods.jpg",
    description:
      "Plant-based detergent pods with organic, biodegradable cleaning formulations.",
  },
  {
    id: "laundry-sheets",
    name: "Organic Laundry Sheets",
    category: "home",
    icon: "sheet",
    image: "/products/laundry-sheets.jpg",
    description:
      "Dissolvable eco laundry detergent sheets — lightweight, plastic-free, travel-friendly.",
  },
  {
    id: "swim-shorts",
    name: "Plastic-Free Swim Shorts",
    category: "home",
    icon: "shorts",
    image: "/products/swim-shorts.jpg",
    description:
      "Sustainable swimwear made without virgin plastics, sourced from eco-textile suppliers.",
  },
  {
    id: "whey-instantized",
    name: "Whey Protein — Instantized",
    category: "wellness",
    icon: "shaker",
    image: "/products/whey-instantized.jpg",
    description:
      "Fast-mixing instantized whey protein sourced from certified nutrition manufacturers.",
  },
  {
    id: "whey-isolate",
    name: "Whey Protein — Isolate",
    category: "wellness",
    icon: "shakerCheck",
    image: "/products/whey-isolate.jpg",
    description:
      "High-purity whey isolate for premium supplement brands, with quality documentation.",
  },
  {
    id: "gummies",
    name: "Cognitive Gummies",
    category: "wellness",
    icon: "brain",
    image: "/products/gummies.jpg",
    description:
      "Functional gummies formulated for focus and cognitive enhancement.",
  },
  {
    id: "pet-multivitamin",
    name: "Pet Multivitamin Treats",
    category: "pet",
    icon: "paw",
    image: "/products/pet-multivitamin.jpg",
    description:
      "Daily multivitamin soft chews for dogs and cats — immune, joint, heart, and coat support.",
  },
  {
    id: "pet-lick-sticks",
    name: "Organic Pet Lick Sticks",
    category: "pet",
    icon: "paw",
    image: "/products/pet-lick-sticks.jpg",
    description:
      "Creamy daily pet supplement sticks made with real salmon and natural ingredients.",
  },
  {
    id: "butane",
    name: "Butane Gas Refill",
    category: "industrial",
    icon: "flameCan",
    image: "/products/butane.jpg",
    description:
      "Butane refill canisters sourced with compliance and safety certifications in place.",
  },
  {
    id: "packaging",
    name: "Custom Packaging",
    category: "industrial",
    icon: "box",
    image: "/products/packaging.jpg",
    description:
      "Boxes, containers, cosmetic bottles, and food-grade plastic packaging — sourced to spec.",
  },
  {
    id: "cosmetic-packaging",
    name: "Cosmetic Bottles & Jars",
    category: "industrial",
    icon: "jar",
    image: "/products/cosmetic-packaging.jpg",
    description:
      "Premium glass bottles, jars, and droppers for skincare and cosmetic brands.",
  },
];
