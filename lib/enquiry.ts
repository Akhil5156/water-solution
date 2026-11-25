/** Enquiry (lead) shape + validation. Shared by the form (client) and the server action. */
export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

export type EnquiryState = {
  status: "idle" | "success" | "error";
  /** Field values echoed back so the form keeps what the user typed. */
  values?: Partial<Enquiry>;
  errors?: EnquiryErrors;
  /** Form-level message (e.g. save failed). */
  message?: string;
};

const clean = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim() : "");

export function readEnquiry(formData: FormData): Enquiry {
  return {
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    phone: clean(formData.get("phone")),
    subject: clean(formData.get("subject")),
    message: clean(formData.get("message")),
  };
}

export function validateEnquiry(e: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (e.name.length < 2) errors.name = "Please enter your name.";
  else if (e.name.length > 100) errors.name = "Name is too long.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.email)) errors.email = "Please enter a valid email address.";
  else if (e.email.length > 160) errors.email = "Email is too long.";

  const digits = e.phone.replace(/\D/g, "");
  if (!/^[+\d][\d\s\-()]*$/.test(e.phone) || digits.length < 7 || digits.length > 15) errors.phone = "Please enter a valid phone number.";

  if (e.subject.length > 150) errors.subject = "Subject is too long.";

  if (e.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  else if (e.message.length > 2000) errors.message = "Message is too long (max 2000 characters).";
  return errors;
}
