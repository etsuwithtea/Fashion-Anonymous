import { motion } from "motion/react";
import { indices } from "../lib/data";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative mx-auto max-w-[1600px] px-4 py-24 md:px-6 md:py-32"
    >
      <div className="grid grid-cols-12 gap-x-8 gap-y-14">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-smoke md:flex-col md:items-start">
            <span className="flex items-center gap-3 text-ember">
              <span className="size-1.5 rounded-full bg-ember" />
              <span>02</span>
            </span>
            <span className="md:mt-2">Manifesto / Indices</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
            className="text-balance font-display text-[8.5vw] leading-[0.95] tracking-[-0.03em] text-ink md:text-[min(4.4vw,3.5rem)]"
          >
            Built for the
            {" "}
            <span className="font-italic italic font-normal normal-case text-ember tracking-tight">
              long quiet
            </span>{" "}
            — objects that age, repair, and outlast the seasons that made them.
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            {indices.map(([num, title, body], i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative grid grid-cols-[44px_1fr] items-baseline gap-4 border-t border-line/80 py-7"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                  {num}
                </span>
                <div>
                  <h3 className="font-display text-[22px] uppercase tracking-[-0.01em] text-ink md:text-[26px]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-[14px] font-light leading-[1.65] text-smoke">
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
