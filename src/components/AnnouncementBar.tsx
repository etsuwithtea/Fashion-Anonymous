const messages = [
  "Vol. 06 · Penumbra now available",
  "Complimentary shipping over €400",
  "Atelier open Thursdays, Paris VI",
  "Hand-finished. Numbered. Repaired in perpetuity.",
  "Studio appointments by request",
];

export function AnnouncementBar() {
  const loop = [...messages, ...messages, ...messages];
  return (
    <div className="relative z-[60] overflow-hidden bg-ink text-bone">
      <div className="flex animate-marquee whitespace-nowrap py-2.5 font-mono text-[10px] uppercase tracking-[0.28em]">
        {loop.map((m, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span>{m}</span>
            <span aria-hidden className="text-rose">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
