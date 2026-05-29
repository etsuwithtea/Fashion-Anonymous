import { motion } from "motion/react";
import { collection } from "../lib/data";

export function Collection() {
  return (
    <section
      id="collection"
      className="relative mx-auto max-w-[1600px] px-4 pb-28 md:px-6 md:pb-32"
    >
      <div className="mb-14 grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-smoke">
            <span className="size-1.5 rounded-full bg-ember" />
            <span>§ 03 · The Register · 04 of 24</span>
          </div>
          <h2 className="font-display text-[14vw] leading-[0.88] tracking-[-0.04em] text-ink md:text-[7.5vw] lg:text-[6.4vw]">
            Penumbra,
            <br />
            <span className="font-italic italic font-normal normal-case text-ember tracking-tight">
              the full register.
            </span>
          </h2>
        </div>
        <div className="col-span-12 max-w-md font-sans text-[14px] font-light leading-[1.65] text-smoke lg:col-span-4">
          A short register of garments from Volume 06. Each piece is numbered,
          provenance signed, accompanied by a record of every hand it passed
          through. Built to soften into the body, register quietly on the street.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-6">
        {collection.map((p, i) => {
          const span =
            i === 0
              ? "col-span-12 md:col-span-7 md:row-span-2"
              : i === 1
              ? "col-span-12 md:col-span-5"
              : i === 2
              ? "col-span-12 md:col-span-5"
              : "col-span-12 md:col-span-7";
          const aspect = i === 0 ? "aspect-[4/5]" : "aspect-[5/4]";

          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.2, 0.85, 0.2, 1] }}
              className={`group ${span}`}
            >
              <a href="#" className="block">
                <div className={`relative ${aspect} overflow-hidden card-lg bg-paper-2`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="img-mood absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                  />

                  {p.tag && (
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-noir px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper">
                      {p.tag}
                    </span>
                  )}

                  <span className="absolute right-5 top-5 rounded-full bg-paper/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink backdrop-blur">
                    {p.index}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="pointer-events-auto absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between rounded-full bg-paper/95 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink hover:text-paper"
                  >
                    <span>+ Reserve · {p.price}</span>
                    <span aria-hidden>→</span>
                  </button>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[22px] uppercase tracking-[-0.01em] text-ink md:text-[26px]">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 font-sans text-[13px] font-light text-smoke">
                      {p.meta}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[13px] font-medium tracking-[0.04em] text-ink">
                      {p.price}
                    </span>
                    {p.oldPrice && (
                      <span className="strike ml-2 font-mono text-[12px] tracking-[0.04em]">
                        {p.oldPrice}
                      </span>
                    )}
                    <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
                      Inquire ↗
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line/80 pt-10">
        <p className="max-w-xl font-display text-[28px] uppercase leading-[1.05] tracking-[-0.02em] text-ink md:text-[34px]">
          Twenty more garments
          <span className="font-italic italic normal-case font-normal text-ember"> inside the register.</span>
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
        >
          <span className="link-underline">See the full register</span>
          <span className="grid size-12 place-items-center rounded-full border border-ink transition-all group-hover:bg-ink group-hover:text-paper">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
