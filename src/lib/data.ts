export type Product = {
  id: string;
  index: string;
  name: string;
  meta: string;
  price: string;
  tag?: string;
  image: string;
  palette: string;
};

export const collection: Product[] = [
  {
    id: "01",
    index: "N° 014",
    name: "Penumbra Trench",
    meta: "Heavy waxed cotton · Bone",
    price: "€ 1,290",
    tag: "Édition",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=1200&q=80",
    palette: "from-stone-900/10 to-stone-900/40",
  },
  {
    id: "02",
    index: "N° 022",
    name: "Soliloquy Knit",
    meta: "Boiled merino · Oxide",
    price: "€ 540",
    tag: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    palette: "from-orange-900/20 to-stone-900/40",
  },
  {
    id: "03",
    index: "N° 031",
    name: "Vespers Coat",
    meta: "Felted wool · Jet",
    price: "€ 1,840",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    palette: "from-neutral-900/20 to-neutral-900/50",
  },
  {
    id: "04",
    index: "N° 047",
    name: "Quietus Trouser",
    meta: "Brushed flannel · Ash",
    price: "€ 620",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    palette: "from-stone-800/10 to-stone-900/30",
  },
];

export const indices = [
  ["I", "Provenance", "Wool, linen, and ramie from European mills with full traceability."],
  ["II", "Construction", "Hand-finished. Eighteen seamstresses. One bench per garment."],
  ["III", "Cadence", "Two collections per annum. Never more, occasionally fewer."],
  ["IV", "Posture", "Designed for ten years of wear. Repairable, in perpetuity."],
] as const;

export const marqueeWords = [
  "Vol. 06 — Penumbra",
  "Made slowly in Porto",
  "By appointment, Paris VI",
  "Limited to 240 garments",
  "Shipping worldwide",
  "Atelier open Thursdays",
];

export const bestsellers: Product[] = [
  {
    id: "b1",
    index: "N° 003",
    name: "Camille Slip",
    meta: "Sand-washed silk · Blush",
    price: "€ 420",
    tag: "Best-seller",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    palette: "from-rose-900/10 to-rose-900/40",
  },
  {
    id: "b2",
    index: "N° 007",
    name: "Margaux Blouse",
    meta: "Crinkled linen · Cream",
    price: "€ 380",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    palette: "from-stone-900/10 to-stone-900/40",
  },
  {
    id: "b3",
    index: "N° 011",
    name: "Hélène Knit",
    meta: "Brushed mohair · Rose",
    price: "€ 540",
    tag: "Restock",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80",
    palette: "from-rose-900/15 to-stone-900/40",
  },
  {
    id: "b4",
    index: "N° 018",
    name: "Olivia Wrap Skirt",
    meta: "Wool flannel · Bone",
    price: "€ 610",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    palette: "from-amber-900/10 to-stone-900/40",
  },
  {
    id: "b5",
    index: "N° 024",
    name: "Inès Trench",
    meta: "Waxed cotton · Cognac",
    price: "€ 1,180",
    tag: "Édition",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
    palette: "from-orange-900/15 to-stone-900/40",
  },
  {
    id: "b6",
    index: "N° 029",
    name: "Jeanne Cardigan",
    meta: "Boiled cashmere · Ivory",
    price: "€ 720",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    palette: "from-stone-900/10 to-stone-900/40",
  },
];

export const footerLinks = {
  Maison: ["Manifesto", "Atelier", "Provenance", "Press"],
  Boutique: ["Womenswear", "Menswear", "Objects", "Archive"],
  Contact: ["Paris VI", "Tokyo Aoyama", "Newsletter", "Email"],
};
