import { useRef } from "react";
import { motion } from "motion/react";
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
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              <span className="text-rose">§ 05</span> · Most-Chosen
            </div>
            <h2 className="mt-3 font-display text-[12vw] leading-[0.88] tracking-[-0.04em] text-ink md:text-[6vw]">
              The quiet
              <span className="font-italic italic text-rose"> favourites.</span>
            </h2>
            <p className="mt-4 max-w-md font-sans text-[14px] leading-[1.55] text-ash">
              Six garments the maison restocks without question — chosen, worn,
              and returned to by clients across six seasons.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="grid size-12 place-items-center rounded-full border border-ink/80 font-mono text-ink transition-all hover:bg-ink hover:text-bone"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="grid size-12 place-items-center rounded-full border border-ink/80 font-mono text-ink transition-all hover:bg-ink hover:text-bone"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track — bleeds to edges, padded to align with content */}
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 md:gap-6 md:px-10"
      >
        {bestsellers.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: [0.2, 0.85, 0.2, 1] }}
            className="group w-[78vw] shrink-0 snap-start sm:w-[44vw] md:w-[32vw] lg:w-[24vw] xl:w-[19vw]"
          >
            <a href="#" className="block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-bone-2">
                <img
                  src={p.image}
                  alt={p.name}
                  className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                />

                {p.tag && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-bone/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink backdrop-blur">
                    <span className="size-1.5 rounded-full bg-rose" />
                    {p.tag}
                  </span>
                )}

                <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone mix-blend-difference">
                  {p.index}
                </span>

                {/* Hover quick-add */}
                <button
                  type="button"
                  className="pointer-events-auto absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-bone/95 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink hover:text-bone"
                  onClick={(e) => e.preventDefault()}
                >
                  + Reserve · {p.price}
                </button>
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display text-[20px] leading-tight text-ink md:text-[22px]">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 font-sans text-[12px] text-ash">{p.meta}</p>
                </div>
                <span className="font-mono text-[12px] tracking-[0.05em] text-ink">
                  {p.price}
                </span>
              </div>
            </a>
          </motion.article>
        ))}
        {/* trailing spacer so last card has padding */}
        <div className="w-2 shrink-0 md:w-6" aria-hidden />
      </div>
    </section>
  );
}
