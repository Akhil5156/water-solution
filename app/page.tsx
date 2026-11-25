import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { CategoryCards } from "@/components/sections/CategoryCards";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { Applications } from "@/components/sections/Applications";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getFeaturedProduct, getProducts } from "@/data/products";

export default function Home() {
  const featured = getFeaturedProduct();
  return (
    <>
      <Hero />
      <WhyUs />
      <CategoryCards />
      <ProductsGrid products={getProducts()} />
      <HowItWorks />
      {featured && <FeaturedProduct product={featured} />}
      <Applications />
      <ClientLogos />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
