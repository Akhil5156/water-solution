import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { applications } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function Applications() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Applications" title="One technology partner." accent="Every space." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applications.map((a, i) => (
          <Reveal key={a.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
          <Link href={a.href} className="group relative block overflow-hidden rounded-card">
            <Media src={a.image} alt={a.title} zoom className="aspect-[3/4]" sizes="(min-width:1024px) 25vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="font-display text-xl text-white">{a.title}</h3>
              <p className="mt-1 text-sm text-brand-100">{a.description}</p>
            </div>
          </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
