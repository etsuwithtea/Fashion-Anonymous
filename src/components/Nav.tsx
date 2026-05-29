import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Shop", id: "collection" },
  { label: "Drops", id: "collection" },
  { label: "Men", id: "collection" },
  { label: "Women", id: "collection" },
  { label: "Manifesto", id: "manifesto" },
  { label: "Atelier", id: "atelier" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: [0.2, 0.85, 0.2, 1], delay: 0.1 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line/60"
          : "bg-paper/0"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-8 px-6 py-5 md:px-10">
        <a
          href="#"
          className="flex items-baseline gap-3"
          aria-label="Maison Voeid"
        >
          <span className="font-display text-[22px] leading-none tracking-[-0.04em] text-ink md:text-[24px]">
            MAISON
          </span>
          <span className="font-italic italic text-[22px] leading-none tracking-tight text-ember md:text-[24px]">
            Vœid
          </span>
        </a>

        <nav className="hidden items-center gap-7 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-ink lg:flex">
          {links.map(({ label, id }) => (
            <a key={label} href={`#${id}`} className="link-underline">
              {label}
            </a>
          ))}
          <button
            type="button"
            className="link-underline inline-flex items-center gap-1.5 text-ink"
          >
            Collections
            <span aria-hidden className="text-[9px]">▾</span>
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden size-10 place-items-center rounded-full border border-ink/15 text-ink transition-all hover:border-ink hover:bg-ink hover:text-paper md:grid"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Account"
            className="hidden size-10 place-items-center rounded-full border border-ink/15 text-ink transition-all hover:border-ink hover:bg-ink hover:text-paper md:grid"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
          </button>

          <button
            type="button"
            className="group flex items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper transition-all hover:bg-ember"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Bag · 0</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
