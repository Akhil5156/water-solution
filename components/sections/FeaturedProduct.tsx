import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProduct({ product }: { product: Product }) {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="group">
          <Media src={product.image} alt={product.name} zoom className="aspect-[4/3] rounded-[2rem]" />
        </Reveal>
        <Reveal delay={2}>
          <SectionHeading align="left" breakAccent eyebrow="Featured solution" title="Built for purity." accent="Made to last." description={product.summary} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm font-medium text-ink">
                <span className="grid size-6 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="size-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <Button href={`/products/${product.slug}`} className="mt-8">Discover {product.name}</Button>
        </Reveal>
      </div>
    </Section>
  );
}
