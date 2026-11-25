import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ExecutionTable } from "@/components/sections/ExecutionTable";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { SplitSection } from "@/components/sections/SplitSection";
import { ProjectPortfolio } from "@/components/sections/ProjectPortfolio";
import { IconCards } from "@/components/sections/IconCards";
import { ReferenceList } from "@/components/sections/ReferenceList";
import { CtaBanner } from "@/components/sections/CtaBanner";
import * as d from "@/data/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Water treatment, pumping and HVAC projects across residential, hospitality, healthcare, education, commercial and industrial sites.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow={d.projectsHero.eyebrow}
        title={
          <>
            Built on trust. <span className="text-accent">Delivered with purpose.</span>
          </>
        }
        text={d.projectsHero.text}
        size="tall"
        video={d.projectsHero.video}
        image={d.projectsHero.poster}
        primary={{ label: "Explore Projects", href: "#portfolio" }}
        secondary={{ label: "Discuss Your Project", href: "/contact-us" }}
        footnote={d.projectsHero.footnote}
      />
      <TrustStrip variant="band" items={d.projectsSectors} />
      <ExecutionTable title="Under Execution" rows={d.underExecution} />
      <ClientLogos layout="side" tone="muted" />
      <SplitSection {...d.projectsIntro} imageSide="right" />
      <ProjectPortfolio {...d.projectsPortfolio} categories={d.projectCategories} tone="muted" />
      <IconCards {...d.projectsCapabilities} />
      <ReferenceList {...d.projectsReferences} tone="muted" />
      <CtaBanner
        tone="default"
        eyebrow={d.projectsCta.eyebrow}
        title={d.projectsCta.title}
        text={d.projectsCta.text}
        primary={{ label: "Talk to Us", href: "/contact-us" }}
        secondary={{ label: "Email Our Team", href: `mailto:${site.contact.email}` }}
      />
    </>
  );
}
