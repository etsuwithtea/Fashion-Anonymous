import { motion } from "motion/react";
import { collection } from "../lib/data";

export function Categories() {
  const drops = collection.slice(0, 3);

  return (
    <section className="relative mx-auto max-w-[1600px] px-4 pt-28 pb-24 md:px-6 md:pt-36 md:pb-32">
      <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-smoke">
            <span className="size-1.5 rounded-full bg-ember" />
            <span>§ 01 · Latest Drop</span>
          </div>
          <h2 className="font-display text-[14vw] leading-[0.86] tracking-[-0.035em] text-ink md:text-[6vw] lg:text-[5.4vw]">
            New Drops.
          </h2>
          <p className="mt-5 max-w-xl font-sans text-[14px] font-light leading-[1.65] text-smoke md:text-[15px]">
            Stand apart in this season's register — bold cuts, premium fabrications,
            street-ready posture. Once they're gone, they're gone.
            No restocks, no second runs.
          </p>
        </div>
        <a
          href="#collection"
          className="group inline-flex items-center gap-3 self-end font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
        >
          <span className="link-underline">View all 24 pieces</span>
          <span className="grid size-10 place-items-center rounded-full border border-ink transition-all group-hover:bg-ink group-hover:text-paper">
            →
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {drops.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.2, 0.85, 0.2, 1] }}
            className="group"
          >
            <a href="#" className="block">
              <div className="relative aspect-[4/5] overflow-hidden card-lg bg-paper-2">
                <img
                  src={p.image}
                  alt={p.name}
                  className="img-mood absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />

                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-noir px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper">
                  {p.tag ?? "New"}
                </span>

                <button
                  type="button"
                  aria-label="Wishlist"
                  className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-paper/90 text-ink opacity-0 backdrop-blur transition-all group-hover:opacity-100 hover:bg-ink hover:text-paper"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="pointer-events-auto absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between rounded-full bg-paper/95 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink hover:text-paper"
                >
                  <span>+ Add to bag</span>
                  <span>{p.price}</span>
                </button>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-[20px] uppercase tracking-[-0.01em] text-ink md:text-[22px]">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 max-w-xs font-sans text-[13px] font-light leading-[1.55] text-smoke">
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
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
