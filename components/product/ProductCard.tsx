import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import type { Product } from "@/types";

/** Reusable anywhere products are listed: home, category pages, related products… */
export function ProductCard({ product, index }: { product: Product; index?: number }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group hover-lift flex h-full flex-col overflow-hidden rounded-card border border-line bg-white"
    >
      <div className="relative">
        <Media src={product.image} alt={product.name} zoom className="aspect-[4/3]" sizes="(min-width:1024px) 33vw, 100vw" />
        {index !== undefined && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-muted">{product.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          Enquire now <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
