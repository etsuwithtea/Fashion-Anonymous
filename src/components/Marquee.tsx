import { marqueeWords } from "../lib/data";

export function Marquee() {
  const words = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative my-24 md:my-28">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6">
        <div className="noir-card overflow-hidden card-xl py-8">
          <div className="flex animate-marquee whitespace-nowrap font-display text-[9vw] uppercase leading-none tracking-[-0.025em] text-paper md:text-[min(5.6vw,5.5rem)]">
            {words.map((w, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-8 md:mx-12">
                <span>{w}</span>
                <span aria-hidden className="inline-block size-3.5 rounded-full bg-ember md:size-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
