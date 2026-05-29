import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { bestsellers } from "../lib/data";

export function Bestsellers() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-smoke">
              <span className="size-1.5 rounded-full bg-ember" />
              <span>05 · Most-Chosen</span>
            </div>
            <h2 className="font-display text-[12vw] leading-[0.88] tracking-[-0.035em] text-ink md:text-[min(5.6vw,5.5rem)]">
              The Quiet
              <br />
              <span className="font-italic italic font-normal normal-case text-ember tracking-tight">
                favourites.
              </span>
            </h2>
            <p className="mt-5 max-w-md font-sans text-[14px] font-light leading-[1.6] text-smoke">
              Six garments the maison restocks without question — chosen, worn,
              and returned to by clients across six seasons.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-smoke md:inline-block">
              Slide
            </span>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="grid size-12 place-items-center rounded-full border border-ink/30 text-ink transition-all hover:border-ink hover:bg-ink hover:text-paper"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="grid size-12 place-items-center rounded-full bg-ink text-paper transition-all hover:bg-ember"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 md:gap-6 md:px-6"
      >
        {bestsellers.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: [0.2, 0.85, 0.2, 1] }}
            className="group w-[78vw] shrink-0 snap-start sm:w-[44vw] md:w-[32vw] lg:w-[24vw] xl:w-[20vw]"
          >
            <a href="#" className="block">
              <div className="relative aspect-[3/4] overflow-hidden card-lg bg-paper-2">
                <img
                  src={p.image}
                  alt={p.name}
                  className="img-mood absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
                />

                {p.tag && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-noir px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper">
                    {p.tag}
                  </span>
                )}

                <span className="absolute right-4 top-4 rounded-full bg-paper/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink backdrop-blur">
                  {p.index}
                </span>

                <button
                  type="button"
                  className="pointer-events-auto absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between rounded-full bg-paper/95 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink hover:text-paper"
                  onClick={(e) => e.preventDefault()}
                >
                  <span>+ Add to bag</span>
                  <span>{p.price}</span>
                </button>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-[18px] uppercase tracking-[-0.01em] text-ink md:text-[20px]">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-sans text-[12px] font-light text-smoke">
                    {p.meta}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[12px] font-medium tracking-[0.04em] text-ink">
                    {p.price}
                  </span>
                  {p.oldPrice && (
                    <span className="strike ml-1.5 font-mono text-[11px] tracking-[0.04em]">
                      {p.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </a>
          </motion.article>
        ))}
        <div className="w-2 shrink-0 md:w-6" aria-hidden />
      </div>
    </section>
  );
}
