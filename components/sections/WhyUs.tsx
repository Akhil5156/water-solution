import { Award, LayoutGrid, Wrench, Smartphone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoBg } from "@/components/ui/VideoBg";
import { whyUs } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Award, LayoutGrid, Wrench, Smartphone];

export function WhyUs() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/10">
            <VideoBg src="/media/videos/water-journey.mp4" poster="/media/images/water-poster.jpg" />
          </div>
          <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl lg:-right-6">
            <span className="text-4xl font-bold text-brand-600">30+</span>
            <span className="text-xs font-bold leading-tight text-ink">Years of water<br />&amp; air expertise</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why us"
            title="More than products."
            accent="A complete approach."
            breakAccent
            description="With decades of experience and a broad portfolio of water and air technologies, we create practical solutions that work together — from selection to installation and lifelong service."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="h-full">
                <div className="group hover-lift-sm flex h-full gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-normal text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{item.text}</p>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
