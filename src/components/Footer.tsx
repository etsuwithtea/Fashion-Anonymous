import { footerLinks } from "../lib/data";

export function Footer() {
  return (
    <footer id="boutique" className="relative border-t border-line/80 bg-bone-2/40">
      <div className="mx-auto max-w-[1500px] px-6 pt-20 pb-10 md:px-10">
        {/* Huge wordmark */}
        <div className="mb-16 overflow-hidden">
          <h3 className="font-display text-[24vw] leading-[0.8] tracking-[-0.05em] text-ink md:text-[14vw]">
            MAISON <span className="font-italic italic text-ember">Vœid</span>
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Address / mark */}
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash">
              Atelier
            </p>
            <p className="mt-3 font-display text-[20px] leading-[1.25] text-ink">
              22 Rue Bonaparte
              <br />
              Paris VI · 75006
            </p>
            <p className="mt-4 font-sans text-[13px] leading-[1.55] text-ash">
              Open Thursdays, 11h — 18h.
              <br />
              All other days by appointment.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title} className="col-span-6 md:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash">
                {title}
              </p>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="link-underline font-display text-[18px] text-ink"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Time + back to top */}
          <div className="col-span-12 md:col-span-2 md:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash">
              Index
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 font-display text-[18px] text-ink"
            >
              <span className="size-7 grid place-items-center rounded-full border border-ink">
                ↑
              </span>
              Retour en haut
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line/80 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
          <span>© MMXXVI Maison Vœid · SARL Paris</span>
          <span className="flex items-center gap-3">
            <span className="inline-block size-1.5 rounded-full bg-ember" />
            Atelier · 11:42 CET
          </span>
          <span>Cookies · Mentions légales · CGV</span>
        </div>
      </div>
    </footer>
  );
}
