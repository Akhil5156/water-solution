import { Reveal } from "@/components/ui/Reveal";

/** Row of short facts. "card" overlaps the bottom edge of a hero; "band" is a flat full-width strip. Place it directly after <PageHero>. */
export function TrustStrip({ items, variant = "card" }: { items: readonly { title: string; text: string }[]; variant?: "card" | "band" }) {
  if (variant === "band") {
    return (
      <div className="border-b border-line bg-white">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className={`px-4 py-7 text-center ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
              <dt className="text-lg font-bold text-ink">{it.title}</dt>
              <dd className="mt-1 text-sm text-ink-muted">{it.text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    );
  }
  return (
    <div className="container-page relative z-10 -mt-12">
      <Reveal>
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-brand-900/10 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.title} className={`px-5 py-6 text-center ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
              <dt className="font-bold text-ink">{it.title}</dt>
              <dd className="mt-1 text-sm text-ink-muted">{it.text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
