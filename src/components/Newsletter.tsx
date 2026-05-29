import { useState } from "react";
import { motion } from "motion/react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="journal" className="relative mx-auto max-w-[1600px] px-4 py-28 md:px-6 md:py-32">
      <div className="noir-card relative overflow-hidden card-xl px-7 py-16 md:px-14 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-ember/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 bottom-0 size-[320px] rounded-full bg-ember/10 blur-3xl"
        />

        <div className="relative grid grid-cols-12 items-end gap-x-8 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-paper/55">
              <span className="size-1.5 rounded-full bg-ember" />
              <span>§ 06 · Letter</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
              className="font-display text-[11vw] uppercase leading-[0.88] tracking-[-0.035em] text-paper md:text-[min(5.4vw,5rem)]"
            >
              A letter,
              <br />
              <span className="font-italic italic font-normal normal-case text-ember tracking-tight">
                four times a year.
              </span>
            </motion.h2>

            <p className="mt-7 max-w-md font-sans text-[14px] font-light leading-[1.65] text-paper/70 md:text-[15px]">
              One physical envelope per season — film stills, fabric studies,
              atelier dates, early access to the next drop. No marketing
              spam, no algorithms.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pl-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="flex items-center gap-2 rounded-full bg-paper p-1.5 pl-5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.address@maison.fm"
                className="w-full min-w-0 bg-transparent font-sans text-[14px] tracking-[-0.005em] text-ink placeholder:text-smoke/70 focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper transition-all hover:bg-ember"
              >
                <span>{sent ? "Sent" : "Subscribe"}</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  {sent ? "✓" : "→"}
                </span>
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
              <span>Spring · Summer · Autumn · Winter</span>
              <span>Sealed wax · Hand-numbered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
