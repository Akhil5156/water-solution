import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { OfficeAndForm } from "@/components/sections/OfficeAndForm";
import { AssistanceBanner } from "@/components/sections/AssistanceBanner";
import { ServiceNetwork } from "@/components/sections/ServiceNetwork";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { contactHero } from "@/data/contact";
import { aboutHero } from "@/data/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to our team about water storage, purification, pressure, hot-water or indoor-air solutions. Send an enquiry or call us.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={
          <>
            Let&apos;s talk about <span className="text-accent">your solution.</span>
          </>
        }
        text={contactHero.text}
        image={aboutHero.image}
        primary={{ label: "Send an Enquiry", href: "#enquiry" }}
      />
      <ContactChannels />
      <OfficeAndForm />
      <AssistanceBanner />
      <ServiceNetwork />
      <CtaBanner
        title="Let's find the right solution for you."
        text="Talk to our team about your water, pressure, purification, hot-water or air requirements."
        primary={{ label: "Call Us", href: site.contact.phoneHref }}
        secondary={null}
      />
    </>
  );
}
