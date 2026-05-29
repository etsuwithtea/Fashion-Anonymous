export type Product = {
  id: string;
  index: string;
  name: string;
  meta: string;
  price: string;
  oldPrice?: string;
  tag?: string;
  image: string;
  palette: string;
};

export const collection: Product[] = [
  {
    id: "01",
    index: "N° 014",
    name: "Penumbra Hoodie",
    meta: "Heavyweight loopback · Onyx",
    price: "€ 240",
    oldPrice: "€ 320",
    tag: "Drop 06",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80",
    palette: "from-neutral-950/30 to-neutral-950/70",
  },
  {
    id: "02",
    index: "N° 022",
    name: "Soliloquy Crewneck",
    meta: "Boiled merino · Bone",
    price: "€ 195",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1400&q=80",
    palette: "from-stone-900/20 to-neutral-900/60",
  },
  {
    id: "03",
    index: "N° 031",
    name: "Vespers Overcoat",
    meta: "Felted wool · Jet",
    price: "€ 690",
    oldPrice: "€ 820",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=80",
    palette: "from-neutral-950/20 to-neutral-950/60",
  },
  {
    id: "04",
    index: "N° 047",
    name: "Quietus Cargo",
    meta: "Heavy ripstop · Ash",
    price: "€ 280",
    image:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1400&q=80",
    palette: "from-stone-900/20 to-stone-900/60",
  },
];

export const indices = [
  ["I", "Provenance", "Loopback, ripstop, and merino milled in Porto and Biella with full traceability."],
  ["II", "Construction", "Cut by hand. Numbered. One garment per bench, finished and quality-stamped."],
  ["III", "Cadence", "Two drops per year. Volume capped. No restock, no second runs."],
  ["IV", "Posture", "Built to soften into a decade. Repaired in perpetuity, on us."],
] as const;

export const marqueeWords = [
  "Vol. 06 — Penumbra",
  "Hand-finished in Porto",
  "Drop closes 12 / 06",
  "240 numbered garments",
  "Worldwide express",
  "Atelier · Paris VI",
];

export const bestsellers: Product[] = [
  {
    id: "b1",
    index: "N° 003",
    name: "Shadow Drip Hoodie",
    meta: "Brushed loopback · Carbon",
    price: "€ 220",
    oldPrice: "€ 280",
    tag: "Best-seller",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1100&q=80",
    palette: "from-neutral-950/30 to-neutral-950/60",
  },
  {
    id: "b2",
    index: "N° 007",
    name: "Urban Phantom Tee",
    meta: "Heavy jersey · Bone",
    price: "€ 90",
    image:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?auto=format&fit=crop&w=1100&q=80",
    palette: "from-stone-900/20 to-stone-900/55",
  },
  {
    id: "b3",
    index: "N° 011",
    name: "Neon Rebellion Vest",
    meta: "Tech nylon · Ember",
    price: "€ 320",
    oldPrice: "€ 410",
    tag: "Restock",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1100&q=80",
    palette: "from-orange-900/30 to-stone-900/55",
  },
  {
    id: "b4",
    index: "N° 018",
    name: "Quartier Trouser",
    meta: "Wool flannel · Smoke",
    price: "€ 240",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1100&q=80",
    palette: "from-neutral-900/20 to-stone-900/55",
  },
  {
    id: "b5",
    index: "N° 024",
    name: "Atlas Trench",
    meta: "Waxed cotton · Cognac",
    price: "€ 580",
    oldPrice: "€ 740",
    tag: "Drop 06",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1100&q=80",
    palette: "from-amber-900/25 to-neutral-900/55",
  },
  {
    id: "b6",
    index: "N° 029",
    name: "Cathedral Knit",
    meta: "Boiled cashmere · Ivory",
    price: "€ 380",
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=1100&q=80",
    palette: "from-stone-900/20 to-stone-900/55",
  },
];

export const footerLinks = {
  Maison: ["Manifesto", "Atelier", "Provenance", "Press"],
  Boutique: ["Hoodies", "Outerwear", "Bottoms", "Objects"],
  Contact: ["Paris VI", "Tokyo Aoyama", "Newsletter", "Care"],
};
