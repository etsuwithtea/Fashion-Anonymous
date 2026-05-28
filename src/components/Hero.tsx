import { motion } from "motion/react";

const stagger = (i: number) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: {
    duration: 1.1,
    ease: [0.2, 0.85, 0.2, 1] as [number, number, number, number],
    delay: 0.3 + i * 0.08,
  },
});

export function Hero() {
  return (
    <section className="relative pt-10 md:pt-14">
      {/* Top meta row */}
      <div className="mx-auto flex max-w-[1500px] items-end justify-between px-6 pb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ash md:px-10">
        <div className="flex gap-6">
          <span>Volume 06</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">Penumbra / FW26</span>
        </div>
        <div className="hidden gap-6 md:flex">
          <span>240 / pieces</span>
          <span>·</span>
          <span>Lookbook ↓</span>
        </div>
      </div>

      {/* Editorial grid */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-6 px-6 md:px-10">
        {/* Headline */}
        <div className="col-span-12 lg:col-span-7">
          <h1 className="font-display text-[14vw] leading-[0.86] tracking-[-0.045em] text-ink md:text-[11vw] lg:text-[10.2vw]">
            <span className="clip-rise block">
              <motion.span {...stagger(0)} className="block">
                Worn,
              </motion.span>
            </span>
            <span className="clip-rise block pl-[0.6em]">
              <motion.span {...stagger(1)} className="block">
                <span className="font-italic italic text-ember">not</span> watched.
              </motion.span>
            </span>
          </h1>

          <div className="mt-10 max-w-md font-sans text-[15px] leading-[1.55] text-ink/85 md:max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
            >
              Vol. 06 is a study in restraint — twenty‑four objects cut from
              waxed cotton, boiled merino, and brushed flannel. Each garment
              numbered, registered, and made to soften into a decade.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease: [0.2, 0.85, 0.2, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#collection"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-bone transition-all hover:bg-ember"
            >
              <span>Enter the Collection</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#manifesto"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
            >
              <span className="size-8 grid place-items-center rounded-full border border-ink/40 transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-bone">▶</span>
              <span className="link-underline">Watch · 02:14</span>
            </a>
          </motion.div>
        </div>

        {/* Image column */}
        <div className="col-span-12 lg:col-span-5">
          <motion.figure
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.45, ease: [0.2, 0.85, 0.2, 1] }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-stone-300"
          >
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
              alt="Look 014 — Penumbra Trench"
              className="img-warm h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone mix-blend-difference">
              <span>Look 014 / 24</span>
              <span>↗ Detail</span>
            </div>
          </motion.figure>

          <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
            <span>Photo · Lehmann</span>
            <span className="text-center">Cut · Porto</span>
            <span className="text-right">Run · 240</span>
          </div>
        </div>
      </div>

      {/* Bottom indices row — references the inspiration's "01 / 02 / 03" */}
      <div className="mx-auto mt-20 grid max-w-[1500px] grid-cols-2 gap-px overflow-hidden border-y border-line/70 bg-line/70 px-0 md:grid-cols-5">
        {[
          ["I", "Hand-Cut in Porto"],
          ["II", "Waxed European Cotton"],
          ["III", "240 Pieces, Numbered"],
          ["IV", "Repair, In Perpetuity"],
          ["V", "By Appointment Only"],
        ].map(([num, label], i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.2, 0.85, 0.2, 1] }}
            className="group relative bg-bone px-6 py-7 transition-colors hover:bg-bone-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              {num}
            </span>
            <p className="mt-3 font-display text-[18px] leading-tight text-ink md:text-[20px]">
              {label}
            </p>
            <span className="absolute right-5 top-5 size-1.5 rounded-full bg-ember/0 transition-colors group-hover:bg-ember" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
