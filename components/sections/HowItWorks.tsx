import { Database, Filter, Gauge, Droplet } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoBg } from "@/components/ui/VideoBg";
import { steps } from "@/data/content";

const icons = [Database, Filter, Gauge, Droplet];

export function HowItWorks() {
  return (
    <div className="relative isolate overflow-hidden">
    <div className="absolute inset-0 -z-20"><VideoBg src="/media/videos/water-journey.mp4" /></div>
    <div className="absolute inset-0 -z-10 bg-brand-950/85" />
    <Section tone="transparent">
      <SectionHeading
        invert
        eyebrow="How it works"
        title="The complete"
        accent="water journey."
        description="We connect multiple water technologies into one seamless system — clean water, at the right pressure and temperature, every time."
      />
      <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {/* dashed connector (desktop) */}
        <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden border-t-2 border-dashed border-brand-400/40 lg:block" />
        {steps.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal as="li" key={s.title} delay={(i + 1) as 1 | 2 | 3 | 4} className="group relative text-center">
              <span className="relative mx-auto grid size-[72px] place-items-center rounded-full border-2 border-brand-400 bg-brand-900 text-brand-300 ring-8 ring-brand-400/15 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-brand-950">
                <Icon className="size-6" />
              </span>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300">Step {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-normal text-white">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-sm text-brand-100/80">{s.text}</p>
            </Reveal>
          );
        })}
      </ol>
    </Section>
    </div>
  );
}
