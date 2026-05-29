import { motion } from "motion/react";

export function Editorial() {
  return (
    <section id="atelier" className="relative mx-auto max-w-[1600px] px-4 py-10 md:px-6">
      <div className="mb-10 grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-smoke">
            <span className="size-1.5 rounded-full bg-ember" />
            <span>§ 04 · Editorial / Atelier</span>
          </div>
          <h2 className="font-display text-[12vw] uppercase leading-[0.88] tracking-[-0.035em] text-ink md:text-[5.4vw]">
            Built by the streets,
            <br />
            <span className="font-italic italic font-normal normal-case text-ember tracking-tight">
              made for you.
            </span>
          </h2>
        </div>
        <p className="col-span-12 max-w-sm font-sans text-[14px] font-light leading-[1.65] text-smoke lg:col-span-4">
          Photographed at the Maison's Marais atelier, lit by the courtyard
          window. Garments documented exactly as they leave the cutting bench
          — unsteamed, uncreased, meeting the body for the first time.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-6">
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
          className="col-span-12 lg:col-span-8"
        >
          <div className="relative aspect-[5/4] overflow-hidden card-xl bg-paper-2 md:aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=2000&q=85"
              alt="Look 022 — Soliloquy Crewneck"
              className="img-mood absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink backdrop-blur">
              Look 022 / 24
            </div>
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-paper mix-blend-difference">
              <span>Soliloquy · Boiled merino · Bone</span>
              <span aria-hidden>↗ Detail</span>
            </div>
          </div>
        </motion.figure>

        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, delay: 0.12, ease: [0.2, 0.85, 0.2, 1] }}
          className="noir-card col-span-12 flex flex-col justify-between gap-10 card-xl p-7 md:p-9 lg:col-span-4"
        >
          <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-paper/55">
            <span>Vol. 06</span>
            <span>04 / 04</span>
          </div>

          <blockquote className="font-display text-[8vw] leading-[1.0] tracking-[-0.025em] text-paper md:text-[3vw]">
            <span aria-hidden className="font-italic italic font-normal text-ember">“ </span>
            A coat should outlast the room it was bought in.
            <span aria-hidden className="font-italic italic font-normal text-ember"> ”</span>
          </blockquote>

          <div className="space-y-5">
            <p className="max-w-xs font-sans text-[13px] font-light leading-[1.65] text-paper/65">
              Two drops a year. No restocks. Repaired in perpetuity, on us —
              a promise we ink onto every numbered tag.
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink transition-all hover:bg-ember hover:text-paper"
            >
              <span>Read the manifesto</span>
              <span className="grid size-7 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/55">
              <span>Director · Helena Maar</span>
              <span>Studio · Lehmann & fils</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
