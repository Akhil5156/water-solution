import { cn } from "@/lib/cn";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

/** Muted, looping, autoplaying video (browsers only autoplay muted + playsInline). */
export function VideoBg({ src, poster, className }: Props) {
  return (
    <video
      className={cn("size-full object-cover", className)}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
