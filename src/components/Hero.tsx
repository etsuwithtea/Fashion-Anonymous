import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

const indices = [
  ["01", "Limited Drops, Numbered"],
  ["02", "Built for the Streets"],
  ["03", "Hand-Finished in Porto"],
  ["04", "Future-Ready Fabrications"],
  ["05", "Community-Driven Culture"],
];

const stagger = (i: number) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: {
    duration: 1.1,
    ease: [0.2, 0.85, 0.2, 1] as [number, number, number, number],
    delay: 0.25 + i * 0.08,
  },
});

export function Hero() {
  return (
    <section className="relative pt-6 md:pt-10">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.85, 0.2, 1] }}
          className="noir-card relative overflow-hidden card-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=2000&q=85"
            alt="Penumbra · Look 014"
            className="img-dark absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-noir/85 via-noir/30 to-noir/70"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/40"
          />

          <div className="relative grid min-h-[78vh] grid-rows-[auto_1fr_auto] gap-10 p-6 md:min-h-[80vh] md:p-10">
            <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-paper/70">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-1.5 rounded-full bg-ember" />
                <span>Vol. 06 · Penumbra · FW 26</span>
              </div>
              <div className="hidden gap-5 md:flex">
                <span>240 / pieces</span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">Lookbook <ArrowDown size={10} /></span>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-10 pt-16 md:pt-24">
              <h1 className="font-display text-[7.5vw] leading-[0.92] tracking-[-0.04em] text-paper md:text-[8.2vw] lg:text-[min(7.6vw,8.5rem)]">
                <span className="clip-rise block">
                  <motion.span {...stagger(0)} className="block">
                    Community-Driven
                  </motion.span>
                </span>
                <span className="clip-rise block">
                  <motion.span {...stagger(1)} className="block">
                    <span className="font-italic italic font-normal text-ember normal-case tracking-tight">Culture.</span>
                  </motion.span>
                </span>
              </h1>

              <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_auto]">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
                  className="max-w-md font-sans text-[14px] font-light leading-[1.6] text-paper/80 md:text-[15px]"
                >
                  More than a label — a maison built around the creatives,
                  skaters, and rule-breakers who define the streets.
                  Twenty-four objects per drop. Numbered, registered, lived in.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.3, ease: [0.2, 0.85, 0.2, 1] }}
                  className="flex items-center gap-3"
                >
                  <a
                    href="#collection"
                    className="group inline-flex items-center gap-3 rounded-full bg-paper px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-all hover:bg-ember hover:text-paper"
                  >
                    <span>Shop the Drop</span>
                    <span className="grid size-7 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-0.5">
                      <ArrowRight size={12} />
                    </span>
                  </a>
                  <a
                    href="#manifesto"
                    className="hidden h-12 items-center gap-3 rounded-full border border-paper/30 px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper transition-all hover:border-paper hover:bg-paper/10 md:inline-flex"
                  >
                    <span className="size-2 rounded-full bg-ember" />
                    Watch · 02:14
                  </a>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.2, 0.85, 0.2, 1] }}
              className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-paper/15 pt-6 md:grid-cols-5"
            >
              {indices.map(([num, label], i) => (
                <div
                  key={num}
                  className={`group flex items-baseline gap-3 ${
                    i === indices.length - 1 ? "text-paper" : "text-paper/55"
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                    {num}
                  </span>
                  <span className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-2 font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
          <span>Photo · Lehmann & fils — Paris · 04 / 26</span>
          <span className="inline-flex items-center gap-1">Scroll <ArrowDown size={10} /> to enter the register</span>
        </div>
      </div>
    </section>
  );
}
