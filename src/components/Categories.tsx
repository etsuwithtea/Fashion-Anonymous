import { motion } from "motion/react";

const cats = [
  {
    label: "Femme",
    sub: "01 / Womenswear",
    count: "14 pieces",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Homme",
    sub: "02 / Menswear",
    count: "07 pieces",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Objets",
    sub: "03 / Atelier Objects",
    count: "03 pieces",
    image:
      "https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=900&q=80",
  },
];

export function Categories() {
  return (
    <section className="relative mx-auto max-w-[1500px] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
            <span className="text-rose">§</span> Registers
          </div>
          <h3 className="mt-3 font-display text-[7vw] leading-[0.95] tracking-[-0.035em] text-ink md:text-[3.4vw]">
            Three rooms of the maison.
          </h3>
        </div>
        <a
          href="#collection"
          className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-ink md:inline-flex link-underline"
        >
          See all registers ↘
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {cats.map((c, i) => (
          <motion.a
            key={c.label}
            href="#collection"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.2, 0.85, 0.2, 1] }}
            className="group relative block aspect-[3/4] overflow-hidden rounded-[2px] bg-bone-2"
          >
            <img
              src={c.image}
              alt={c.label}
              className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 text-bone">
              <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.25em]">
                <span>{c.sub}</span>
                <span>{c.count}</span>
              </div>

              <div>
                <h4 className="font-display text-[12vw] leading-[0.85] tracking-[-0.04em] md:text-[4vw]">
                  {c.label}
                </h4>
                <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                  <span className="grid size-9 place-items-center rounded-full bg-bone text-ink transition-colors group-hover:bg-rose group-hover:text-bone">
                    →
                  </span>
                  <span className="link-underline">Enter</span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
