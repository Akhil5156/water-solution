import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  products: Product[];
  eyebrow?: string;
  title?: string;
  accent?: string;
};

/** Pass any product list (all, by category, by application) — section stays the same. */
export function ProductsGrid({ products, eyebrow = "Our products", title = "Engineered systems for", accent = "better living." }: Props) {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading align="left" eyebrow={eyebrow} title={title} accent={accent} />
        <Button href="/products" variant="secondary">View All Products</Button>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={((i % 3) + 1) as 1 | 2 | 3} className="h-full">
            <ProductCard product={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
