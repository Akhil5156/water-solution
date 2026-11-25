"use server";

import { readEnquiry, validateEnquiry, type EnquiryState } from "@/lib/enquiry";
import { saveEnquiry } from "@/lib/leads";

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real users never see/fill this field; bots usually do. Pretend success, store nothing.
  if (typeof formData.get("website") === "string" && formData.get("website") !== "") {
    return { status: "success" };
  }

  const values = readEnquiry(formData);
  const errors = validateEnquiry(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", values, errors };
  }

  try {
    await saveEnquiry(values);
  } catch (err) {
    console.error("Failed to save enquiry", err);
    return {
      status: "error",
      values,
      message: "Sorry, we couldn't send your enquiry right now. Please call or email us directly.",
    };
  }
  return { status: "success" };
}
