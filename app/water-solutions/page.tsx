import type { Metadata } from "next";
import { SolutionsPage } from "@/components/pages/SolutionsPage";
import { waterPage } from "@/data/solutions";

export const metadata: Metadata = { title: waterPage.seo.title, description: waterPage.seo.description };

export default function WaterSolutionsPage() {
  return <SolutionsPage data={waterPage} />;
}
