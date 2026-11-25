import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import type { Enquiry } from "./enquiry";

/**
 * Persist a new enquiry.
 *
 * ⚠ DEV-ONLY STORAGE: appends to ./.data/enquiries.jsonl (git-ignored). This works locally and on a
 * server with a writable disk, but NOT on serverless hosts (Vercel etc.). Before launch, replace the body
 * with a database insert and/or an email/CRM call — the form and server action need no changes.
 * Throwing here makes the form show an error instead of silently losing the lead.
 */
export async function saveEnquiry(enquiry: Enquiry): Promise<void> {
  const dir = join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  const row = { id: crypto.randomUUID(), receivedAt: new Date().toISOString(), ...enquiry };
  await appendFile(join(dir, "enquiries.jsonl"), JSON.stringify(row) + "\n", "utf8");
}
