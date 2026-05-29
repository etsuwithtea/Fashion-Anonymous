import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: [0.2, 0.85, 0.2, 1], delay: 0.1 }}
      className={`sticky top-0 transition-all duration-500 ${
        open ? "z-[70]" : "z-50"
      } ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line/60"
          : "bg-paper/0"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-4 sm:px-6 sm:py-5 md:gap-8 md:px-10">
        <a
          href="#"
          className="flex items-baseline gap-2.5 sm:gap-3"
          aria-label="Maison Voeid"
        >
          <span className="font-display text-[20px] leading-none tracking-[-0.04em] text-ink sm:text-[22px] md:text-[24px]">
            MAISON
          </span>
          <span className="font-italic italic text-[20px] leading-none tracking-tight text-ember sm:text-[22px] md:text-[24px]">
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
            <ChevronDown size={10} aria-hidden />
          </button>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
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
            className="group flex items-center gap-2.5 rounded-full bg-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper transition-all hover:bg-ember sm:px-5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="hidden sm:inline">Bag · 0</span>
            <span className="sm:hidden">0</span>
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-all hover:border-ink hover:bg-ink hover:text-paper lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.85, 0.2, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-noir text-paper lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
              <span className="flex items-baseline gap-2.5">
                <span className="font-display text-[20px] leading-none tracking-[-0.04em] text-paper sm:text-[22px]">
                  MAISON
                </span>
                <span className="font-italic italic text-[20px] leading-none tracking-tight text-ember sm:text-[22px]">
                  Vœid
                </span>
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-paper/20 text-paper transition-all hover:border-paper hover:bg-paper hover:text-ink"
              >
                <X size={16} />
              </button>
            </div>

            <nav className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center gap-1 overflow-y-auto px-5 py-6 sm:px-6">
              {links.map(({ label, id }, i) => (
                <motion.a
                  key={label}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, ease: [0.2, 0.85, 0.2, 1] }}
                  className="group flex items-center justify-between border-b border-paper/10 py-3.5 font-display text-[11vw] uppercase leading-none tracking-[-0.02em] text-paper transition-colors hover:text-ember sm:text-[56px]"
                >
                  <span>{label}</span>
                  <span className="font-mono text-[10px] tracking-[0.22em] text-paper/40">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 border-t border-paper/15 px-5 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60 sm:px-6">
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-paper">Search</a>
                <span aria-hidden>·</span>
                <a href="#" className="hover:text-paper">Account</a>
                <span aria-hidden>·</span>
                <a href="#" className="hover:text-paper">Contact</a>
              </div>
              <span className="text-paper/40">Vol. 06 · Penumbra</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
