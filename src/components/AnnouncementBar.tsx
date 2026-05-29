import { SiInstagram, SiTiktok, SiX, SiYoutube } from "react-icons/si";

const messages = [
  "Vol. 06 · Penumbra · drop closes 12 / 06",
  "Complimentary express over ฿ 400",
  "Hand-finished. Numbered. Lifetime repair.",
  "Atelier · Paris VI · open Thursdays",
];

export function AnnouncementBar() {
  return (
    <div className="relative z-[60] bg-noir text-paper">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.28em] md:px-10">
        <div className="hidden items-center gap-4 text-paper/80 md:flex">
          <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-100 opacity-70">
            <SiInstagram size={12} />
          </a>
          <a href="#" aria-label="TikTok" className="transition-opacity hover:opacity-100 opacity-70">
            <SiTiktok size={12} />
          </a>
          <a href="#" aria-label="X" className="transition-opacity hover:opacity-100 opacity-70">
            <SiX size={12} />
          </a>
          <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-100 opacity-70">
            <SiYoutube size={12} />
          </a>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...messages, ...messages, ...messages].map((m, i) => (
              <span key={i} className="mx-6 inline-flex items-center gap-6 text-paper/90">
                <span>{m}</span>
                <span aria-hidden className="inline-block size-1 rounded-full bg-ember" />
              </span>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-5 text-paper/70 md:flex">
          <a href="#" className="hover:text-paper">Contact</a>
          <a href="#" className="hover:text-paper">FAQ</a>
          <a href="#" className="hover:text-paper">Care</a>
          <a href="#" className="hover:text-paper">Support</a>
        </div>
      </div>
    </div>
  );
}
