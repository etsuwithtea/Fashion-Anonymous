import { motion } from "motion/react";
import { indices } from "../lib/data";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-12 gap-x-8 gap-y-16">
        {/* Side label */}
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
            <span className="block text-ember">§ 02</span>
            <span className="mt-2 block">Manifesto / Indices</span>
          </div>
        </div>

        {/* Statement */}
        <div className="col-span-12 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
            className="text-balance font-display text-[7vw] leading-[0.95] tracking-[-0.035em] text-ink md:text-[4.2vw]"
          >
            We design garments for the{" "}
            <span className="font-italic italic text-ember">long quiet</span> —
            objects that age, repair, and outlast the season that made them.
          </motion.h2>

          <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
            {indices.map(([num, title, body], i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative grid grid-cols-[44px_1fr] items-baseline gap-4 border-t border-line/80 py-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                  {num}
                </span>
                <div>
                  <h3 className="font-display text-[26px] leading-tight text-ink md:text-[30px]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-[14px] leading-[1.55] text-ash">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
