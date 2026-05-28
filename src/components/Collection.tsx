import { motion } from "motion/react";
import { collection } from "../lib/data";

export function Collection() {
  return (
    <section id="collection" className="relative mx-auto max-w-[1500px] px-6 pb-32 md:px-10">
      {/* Section header */}
      <div className="mb-16 grid grid-cols-12 items-end gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
            <span className="text-ember">§ 03</span> · The Collection · 04 of 24
          </div>
          <h2 className="font-display text-[12vw] leading-[0.88] tracking-[-0.04em] text-ink md:text-[7vw]">
            Penumbra,
            <br />
            <span className="pl-[1.2em] font-italic italic text-ember">a register.</span>
          </h2>
        </div>
        <div className="col-span-12 max-w-md font-sans text-[14px] leading-[1.55] text-ash lg:col-span-4">
          A short register of garments from Volume 06. Each piece is numbered,
          its provenance signed, and accompanied by a record of every hand it
          passed through. Made to register quietly on the body.
        </div>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-12 gap-6">
        {collection.map((p, i) => {
          // staggered alignment: first tall, others alternating
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
                <div className={`relative ${aspect} overflow-hidden rounded-[2px] bg-stone-300`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* gradient veil */}
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${p.palette} opacity-60`} />

                  {/* Tag */}
                  {p.tag && (
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-bone/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink backdrop-blur">
                      <span className="size-1.5 rounded-full bg-ember" />
                      {p.tag}
                    </span>
                  )}

                  {/* Index */}
                  <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone mix-blend-difference">
                    {p.index}
                  </span>

                  {/* Hover circle CTA */}
                  <div className="pointer-events-none absolute bottom-5 right-5 grid size-12 translate-y-3 place-items-center rounded-full bg-bone text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    →
                  </div>

                  {/* Bottom meta on image */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone mix-blend-difference">
                    <span>{p.meta}</span>
                  </div>
                </div>

                {/* Below image */}
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[24px] leading-tight text-ink md:text-[28px]">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-sans text-[13px] text-ash">{p.meta}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[12px] tracking-[0.06em] text-ink">
                      {p.price}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                      Inquire ↗
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          );
        })}
      </div>

      {/* CTA below */}
      <div className="mt-20 flex items-center justify-between border-t border-line/80 pt-10">
        <p className="max-w-md font-display text-[28px] leading-[1.05] text-ink md:text-[32px]">
          Twenty more garments wait inside the register.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
        >
          <span className="link-underline">See the full register</span>
          <span className="grid size-12 place-items-center rounded-full border border-ink transition-all group-hover:bg-ink group-hover:text-bone">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
