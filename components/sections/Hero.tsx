import { Award, Users, Boxes, CalendarDays } from "lucide-react";
import { HeroSlider } from "./HeroSlider";
import { cn } from "@/lib/cn";
import { stats } from "@/data/content";
import { heroSlides } from "@/data/hero";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

const statIcons = [Award, Users, Boxes, CalendarDays];

export function Hero() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      {/* Stats strip */}
      <div className="bg-brand-600 text-white">
        <dl className="container-page grid grid-cols-2 gap-6 py-7 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
              <Reveal
                key={s.label}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className={cn(
                  "flex items-center gap-4",
                  // desktop: divider before every item except the first
                  i > 0 && "lg:border-l lg:border-white/25 lg:pl-8",
                  // mobile (2 columns): divider before the right-hand column
                  i % 2 === 1 && "max-lg:border-l max-lg:border-white/25 max-lg:pl-6",
                )}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-btn bg-white/15">
                  <Icon className="size-6" />
                </span>
                <div>
                  <dd className="text-3xl font-bold leading-none"><CountUp value={s.value} sup /></dd>
                  <dt className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-100">{s.label}</dt>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </>
  );
}
