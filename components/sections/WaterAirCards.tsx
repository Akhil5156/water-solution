import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { aboutTech as d } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";

/** Dark section with two large linked image cards. */
export function WaterAirCards() {
  return (
    <Section tone="dark">
      <SectionHeading invert align="left" eyebrow={d.eyebrow} title={d.title} accent={d.accent} description={d.description} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {d.cards.map((c, i) => (
          <Reveal key={c.tag} delay={((i % 2) + 1) as 1 | 2} className="h-full">
          <Link href={c.href} className="group relative isolate flex h-full min-h-[430px] flex-col justify-end overflow-hidden rounded-3xl p-7 text-white">
            <Media src={c.image} alt={c.title} className="absolute inset-0 -z-20 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/55 to-transparent" />
            <span className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/90 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
              <ArrowRight className="size-5" />
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300">{c.tag}</p>
            <h3 className="mt-2 text-3xl text-white">{c.title}</h3>
            <p className="mt-2 max-w-md text-sm text-brand-100">{c.text}</p>
          </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
