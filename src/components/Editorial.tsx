import { motion } from "motion/react";

export function Editorial() {
  return (
    <section id="atelier" className="relative bg-ink text-bone">
      <div className="grain-section pointer-events-none absolute inset-0 opacity-30" />
      <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-6 px-6 py-32 md:px-10">
        {/* Left big image */}
        <motion.figure
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: [0.2, 0.85, 0.2, 1] }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
            <img
              src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1400&q=80"
              alt="Look 022 — Soliloquy Knit"
              className="img-warm h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone">
              <span>Look 022 / 24</span>
              <span>Soliloquy · Boiled merino</span>
            </div>
          </div>
        </motion.figure>

        {/* Right: stacked content */}
        <div className="col-span-12 flex flex-col justify-between gap-12 lg:col-span-6">
          <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60">
            <span><span className="text-ember">§ 04</span> · Editorial</span>
            <span>Vol. 06 / Penumbra</span>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.2, ease: [0.2, 0.85, 0.2, 1] }}
            className="font-display text-[6vw] leading-[1.02] tracking-[-0.025em] md:text-[3.4vw]"
          >
            <span aria-hidden className="font-italic text-ember">“ </span>
            A coat should outlast the room it was bought in. The body should
            soften the wool, not the other way around.
            <span aria-hidden className="font-italic text-ember"> ”</span>
          </motion.blockquote>

          <div className="grid grid-cols-2 gap-6">
            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative aspect-[3/4] overflow-hidden rounded-[2px]"
            >
              <img
                src="https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=900&q=80"
                alt="Detail · Hand-stitched lining"
                className="img-warm h-full w-full object-cover"
              />
            </motion.figure>
            <div className="flex flex-col justify-between">
              <p className="font-sans text-[14px] leading-[1.6] text-bone/80">
                Penumbra is photographed at the Maison's atelier in the Marais,
                lit only by the courtyard window. Garments are documented as
                they leave the cutting bench — unsteamed, uncreased, exactly as
                they meet the body for the first time.
              </p>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60">
                  Director · Helena Maar
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60">
                  Studio · Lehmann & fils
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
