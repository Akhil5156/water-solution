import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/content";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function FaqSection() {
  const { contact } = site;
  return (
    <Section>
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions?"
            accent="We've got answers."
            description={`Everything you need to know about ${site.name} water and air solutions.`}
          />

          <div className="mt-8 rounded-2xl bg-brand-900 p-6 text-white sm:p-7">
            <h3 className="text-lg tracking-normal text-white sm:text-xl">Still have a question?</h3>
            <p className="mt-1.5 text-sm text-brand-100">Our experts are happy to help you choose the right system.</p>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 font-semibold hover:text-brand-300">
                  <Phone className="size-[18px] shrink-0 text-brand-300" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 font-semibold hover:text-brand-300">
                  <Mail className="size-[18px] shrink-0 text-brand-300" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </Section>
  );
}
