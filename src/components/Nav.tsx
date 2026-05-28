import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const paris = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Paris",
        hour12: false,
      }).format(now);
      setTime(paris);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1], delay: 0.2 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-line/60"
          : "bg-bone/0"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-display text-[22px] leading-none tracking-[-0.04em] text-ink"
            aria-label="Maison Voeid"
          >
            MAISON
            <span className="font-italic italic text-ember"> Vœid</span>
          </a>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ash md:inline-block">
            Est. MMXVII · Paris
          </span>
        </div>

        <nav className="hidden items-center gap-9 font-mono text-[11px] uppercase tracking-[0.22em] text-ink md:flex">
          {[
            { label: "Collection", id: "collection" },
            { label: "Manifesto", id: "manifesto" },
            { label: "Atelier", id: "atelier" },
            { label: "Journal", id: "journal" },
            { label: "Boutique", id: "boutique" },
          ].map(({ label, id }, i) => (
            <a key={label} href={`#${id}`} className="link-underline">
              <span className="mr-1 text-ash">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink">
          <span className="hidden md:inline-block text-ash">
            Paris · {time || "--:--"}
          </span>
          <button className="group flex items-center gap-2 rounded-full border border-ink/80 px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-bone">
            <span className="size-1.5 rounded-full bg-ember transition-colors group-hover:bg-bone" />
            Sac · 0
          </button>
        </div>
      </div>
    </motion.header>
  );
}
