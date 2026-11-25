import Link from "next/link";
import { ArrowRight, Droplets, Wind } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { categories } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, typeof Droplets> = { water: Droplets, air: Wind };

export function CategoryCards() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Our solutions"
        title="Solutions built around"
        accent="your needs."
        description="Whether it's a home, apartment, commercial property or a large development, we bring the right technology together for dependable water and air performance."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {categories.map((c, i) => {
          const Icon = icons[c.slug] ?? Droplets;
          return (
            <Reveal key={c.slug} delay={((i % 2) + 1) as 1 | 2} className="h-full">
            <Link
              href={`/${c.slug}-solutions`}
              className="group relative isolate flex h-full min-h-[480px] flex-col justify-end overflow-hidden rounded-3xl p-7 text-white sm:p-9"
            >
              <Media src={c.image} alt={c.name} className="absolute inset-0 -z-20 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/70 to-transparent" />
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em]">
                <Icon className="size-3.5" /> {c.name}
              </span>
              <h3 className="text-2xl text-white sm:text-3xl">{c.tagline}</h3>
              <p className="mt-3 max-w-md text-sm text-brand-100">{c.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.chips.map((chip) => (
                  <li key={chip} className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium">{chip}</li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300 group-hover:text-accent">
                Explore {c.name} <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
