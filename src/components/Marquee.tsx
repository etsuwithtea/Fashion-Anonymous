import { marqueeWords } from "../lib/data";

export function Marquee() {
  const words = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative my-24 overflow-hidden border-y border-ink bg-ink py-6 text-bone md:my-32">
      <div className="flex animate-marquee whitespace-nowrap font-display text-[7vw] leading-none tracking-[-0.03em]">
        {words.map((w, i) => (
          <span key={i} className="mx-10 inline-flex items-center gap-10">
            <span>{w}</span>
            <span className="inline-block size-3 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
