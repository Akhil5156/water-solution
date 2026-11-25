import { Reveal } from "@/components/ui/Reveal";

/** Full-bleed playable video (with controls). Poster shows until play. */
export function VideoFeature({ video, poster }: { video: string; poster?: string }) {
  return (
    <section className="bg-brand-950">
      <Reveal>
        <video className="mx-auto block aspect-video max-h-[810px] w-full object-cover" src={video} poster={poster} controls playsInline preload="none" />
      </Reveal>
    </section>
  );
}
