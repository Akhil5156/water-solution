"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/app/contact-us/actions";
import { InputField, TextareaField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import type { EnquiryState } from "@/lib/enquiry";
import { site } from "@/lib/site";

const initial: EnquiryState = { status: "idle" };

/** Lead-capture form. Reusable: pass `defaultSubject` to prefill from a product page later. */
export function EnquiryForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  if (state.status === "success") {
    return (
      <div role="status" className="grid place-items-center rounded-2xl bg-brand-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-14 text-brand-600" />
        <h3 className="mt-5 text-2xl text-ink">Thank You!</h3>
        <p className="mt-2 max-w-sm text-ink-muted">Your enquiry has been submitted successfully. Our team will get back to you soon.</p>
        <Button href="/" variant="secondary" className="mt-6">Back to home</Button>
      </div>
    );
  }

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form action={action} noValidate className="space-y-5">
      {state.message && (
        <p role="alert" className="rounded-xl border border-danger/40 bg-danger/5 px-4 py-3 text-sm font-medium text-danger">
          {state.message}{" "}
          <a href={site.contact.phoneHref} className="underline">{site.contact.phone}</a>
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField label="Your Name" name="name" required autoComplete="name" placeholder="Enter your name" defaultValue={v.name} error={e.name} />
        <InputField label="Email Address" name="email" type="email" required autoComplete="email" placeholder="you@company.com" defaultValue={v.email} error={e.email} />
        <InputField label="Phone Number" name="phone" type="tel" required autoComplete="tel" placeholder="+91" defaultValue={v.phone} error={e.phone} />
        <InputField label="Subject" name="subject" placeholder="How can we help?" defaultValue={v.subject ?? defaultSubject} error={e.subject} />
      </div>
      <TextareaField label="Requirement / Message" name="message" required placeholder="Tell us about your requirement…" defaultValue={v.message} error={e.message} />

      {/* Honeypot — hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-[52px] items-center justify-center gap-2 rounded-btn bg-brand-600 px-7 text-sm font-semibold text-white transition-[background-color,translate,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:transform-none [&_svg:not(.animate-spin)]:transition-transform hover:[&_svg:not(.animate-spin)]:translate-x-1"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Submit Enquiry <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
