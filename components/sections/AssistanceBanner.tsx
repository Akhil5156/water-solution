import { Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function AssistanceBanner() {
  return (
    <Section>
      <Reveal className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-brand-50 px-7 py-8 sm:flex-row sm:items-center sm:px-9">
        <div>
          <h2 className="text-2xl text-ink">Need assistance?</h2>
          <p className="mt-1.5 text-sm text-ink-muted">Our team is available {site.contact.hours.replace("Mon – Sat", "Monday–Saturday")}.</p>
        </div>
        <Button href={site.contact.phoneHref}>
          <Phone className="size-4" /> Call Us
        </Button>
      </Reveal>
    </Section>
  );
}
