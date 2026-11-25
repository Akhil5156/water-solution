import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VideoBg } from "@/components/ui/VideoBg";
import { Reveal } from "@/components/ui/Reveal";

type Cta = { label: string; href: string };
type Props = { eyebrow?: string; tone?: "default" | "muted"; title?: string; text?: string; video?: string; poster?: string; primary?: Cta; secondary?: Cta | null };

/** Full-width call-to-action card: video background + theme gradient overlay. */
export function CtaBanner({
  eyebrow,
  tone = "muted",
  title = "Let's build a better water & air experience.",
  text = "Tell us what you need. From individual products to complete project systems, our team is ready to help.",
  video = "/media/videos/hero-projects.mp4",
  poster = "/media/images/app-offices.png",
  primary = { label: "Contact Us", href: "/contact-us" },
  secondary = { label: "Explore Solutions", href: "/water-solutions" },
}: Props) {
  return (
    <section className={`section-y ${tone === "muted" ? "bg-surface-muted" : "bg-surface"}`}>
      <Reveal className="container-page">
        <div className="relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[28px] px-6 py-11 text-white sm:px-11 sm:py-14 lg:flex-row lg:items-center lg:gap-10 lg:px-16 lg:py-[72px]">
          <VideoBg src={video} poster={poster} className="absolute inset-0 -z-20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-600/95 to-brand-950/90" />

          <div>
            {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
            <h2 className="max-w-[760px] text-balance text-white text-3xl leading-[1.12] sm:text-4xl lg:text-[44px]">{title}</h2>
            <p className="mt-3.5 max-w-[540px] text-white/85">{text}</p>
          </div>

          <div className="flex w-full flex-none flex-wrap gap-3 lg:w-auto">
            <Button href={primary.href} variant="light" className="h-14 px-8 text-base">
              {primary.label} <ArrowRight className="size-4" />
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="secondary" className="h-14 border-white/40 px-8 text-base text-white hover:bg-white/10">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
