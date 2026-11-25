import type { Metadata } from "next";
import { SolutionsPage } from "@/components/pages/SolutionsPage";
import { airPage } from "@/data/solutions";

export const metadata: Metadata = { title: airPage.seo.title, description: airPage.seo.description };

export default function AirSolutionsPage() {
  return <SolutionsPage data={airPage} />;
}
