import { useState } from "react";
import { motion } from "motion/react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="journal" className="relative mx-auto max-w-[1500px] px-6 py-32 md:px-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1] }}
            className="font-display text-[11vw] leading-[0.88] tracking-[-0.04em] text-ink md:text-[6.5vw]"
          >
            A letter,
            <br />
            <span className="font-italic italic text-ember">four times a year.</span>
          </motion.h2>

          <p className="mt-8 max-w-md font-sans text-[15px] leading-[1.55] text-ash">
            One physical envelope per season — film stills, fabric studies,
            atelier dates. No marketing, no algorithms.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:pl-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="relative border-b border-ink/80 pb-3"
          >
            <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              Postal · Email
            </label>
            <div className="mt-3 flex items-end gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your address"
                className="w-full bg-transparent font-display text-[26px] tracking-[-0.02em] text-ink placeholder:text-ash/50 focus:outline-none"
              />
              <button
                type="submit"
                className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone transition-all hover:bg-ember"
              >
                <span>{sent ? "Sent" : "Subscribe"}</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  {sent ? "✓" : "→"}
                </span>
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
            <span>Spring · Summer · Autumn · Winter</span>
            <span>Sealed wax · Hand-numbered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
