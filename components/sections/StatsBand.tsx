import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

type Props = { stats: readonly { value: string; label: string }[] };

/** Full-width dark stats row with dividers. */
export function StatsBand({ stats }: Props) {
  return (
    <div className="bg-brand-950 text-white">
      <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className={`px-4 py-8 sm:px-8 ${i > 0 ? "lg:border-l lg:border-white/15" : ""} ${i % 2 === 1 ? "max-lg:border-l max-lg:border-white/15" : ""}`}>
            <dd className="text-4xl font-bold sm:text-5xl"><CountUp value={s.value} /></dd>
            <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}
