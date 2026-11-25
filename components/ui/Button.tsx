import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "border-2 border-brand-600 text-brand-700 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50",
  light: "bg-white text-ink hover:bg-brand-50",
};

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  variant?: Variant;
};

export function Button({ href, variant = "primary", className, ...props }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-btn px-6 text-sm font-semibold transition-[background-color,color,border-color,translate,box-shadow] duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transform-none [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
