import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientLogos } from "@/data/clients";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  /** "stacked": centered heading above the strip (home). "side": heading on the left, strip on the right (projects). */
  layout?: "stacked" | "side";
  tone?: "default" | "muted";
};

/** Infinite scrolling logo strip. The list is rendered twice so the loop is seamless. */
export function ClientLogos({ layout = "stacked", tone }: Props) {
  const strip = (
    <div
      className={`marquee overflow-hidden ${layout === "side" ? "[mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]" : ""}`}
      role="region"
      aria-label="Our clients and partners"
    >
      <ul className="marquee-track flex w-max items-center gap-6">
        {[...clientLogos, ...clientLogos].map((logo, i) => (
          <li
            key={i}
            aria-hidden={i >= clientLogos.length}
            className="grid h-20 w-40 shrink-0 place-items-center rounded-2xl border border-line bg-white px-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={i < clientLogos.length ? logo.name : ""} loading="lazy" className="max-h-12 w-auto max-w-full object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );

  if (layout === "side") {
    return (
      <Section tone={tone}>
        <div className="grid items-center gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <Reveal className="border-l-4 border-brand-600 pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Trusted Network</p>
            <h2 className="mt-2 text-3xl uppercase leading-tight text-ink">
              Our Clients
              <br />&amp; Partners
            </h2>
          </Reveal>
          <Reveal delay={1} className="min-w-0">{strip}</Reveal>
        </div>
      </Section>
    );
  }

  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Trusted Network" title="Trusted by leading" accent="clients & partners" />
      <Reveal delay={1} className="mt-12">{strip}</Reveal>
    </Section>
  );
}
