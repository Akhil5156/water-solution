import Image from "next/image";
import { Droplets } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** Set for above-the-fold images (preloads + loads eagerly). */
  priority?: boolean;
  /** Zoom the photo when the nearest `.group` ancestor is hovered (cards). */
  zoom?: boolean;
};

/**
 * Image slot. Renders the real image when `src` is set, otherwise a green
 * placeholder — so layouts look right before final photography exists.
 */
export function Media({ src, alt, className, sizes = "(min-width:1024px) 50vw, 100vw", priority, zoom }: Props) {
  // Next/Image `fill` needs a positioned parent: default to `relative`, unless the caller positions it itself.
  const selfPositioned = /\b(absolute|fixed|sticky)\b/.test(className ?? "");
  return (
    <div className={cn(!selfPositioned && "relative", "overflow-hidden", !src && "bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", zoom && "img-zoom")} />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-white/50" role="img" aria-label={alt}>
          <Droplets className="size-12" />
        </div>
      )}
    </div>
  );
}
