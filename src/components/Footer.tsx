import { footerLinks } from "../lib/data";

export function Footer() {
  return (
    <footer id="boutique" className="relative border-t border-line/80">
      <div className="mx-auto max-w-[1600px] px-4 pt-20 pb-10 md:px-6">
        <div className="mb-14 overflow-hidden">
          <h3 className="font-display text-[26vw] uppercase leading-[0.78] tracking-[-0.045em] text-ink md:text-[15vw]">
            MAISON
            <span className="font-italic italic font-normal normal-case text-ember tracking-tight"> Vœid</span>
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-smoke">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-ember align-middle" />
              Atelier
            </p>
            <p className="mt-4 font-display text-[20px] uppercase leading-[1.2] tracking-[-0.01em] text-ink md:text-[22px]">
              22 Rue Bonaparte
              <br />
              Paris VI · 75006
            </p>
            <p className="mt-4 max-w-xs font-sans text-[13px] font-light leading-[1.6] text-smoke">
              Open Thursdays, 11h — 18h. All other days strictly by appointment.
            </p>

            <div className="mt-7 flex items-center gap-2">
              {["IG", "TT", "X", "YT"].map((n) => (
                <a
                  key={n}
                  href="#"
                  aria-label={n}
                  className="grid size-10 place-items-center rounded-full border border-ink/20 font-mono text-[10px] tracking-[0.15em] text-ink transition-all hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {n}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title} className="col-span-6 md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-smoke">
                {title}
              </p>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="link-underline font-display text-[16px] uppercase tracking-[-0.005em] text-ink md:text-[18px]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 md:col-span-2 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-smoke">
              Index
            </p>
            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-3 font-display text-[16px] uppercase tracking-[-0.005em] text-ink md:flex-row-reverse md:text-[18px]"
            >
              <span className="grid size-10 place-items-center rounded-full border border-ink/40 transition-all group-hover:bg-ink group-hover:text-paper">
                ↑
              </span>
              Top
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line/80 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
          <span>© MMXXVI Maison Vœid · SARL Paris</span>
          <span className="flex items-center gap-3">
            <span className="inline-block size-1.5 rounded-full bg-ember" />
            Atelier live · Paris CET
          </span>
          <span>Cookies · Mentions légales · CGV</span>
        </div>
      </div>
    </footer>
  );
}
