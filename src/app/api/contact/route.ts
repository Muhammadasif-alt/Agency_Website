import { NextResponse } from "next/server";

import { enquirySchema, type EnquiryInput } from "@/lib/validations";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Honeypot filled → silently accept (it's a bot). Save nothing.
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    // The free-audit modal sends service="Free website audit"; tag the
    // source so you can tell audit requests from general enquiries.
    const source =
      data.service === "Free website audit" ? "free-audit" : "contact-form";

    // 1) Persist the lead. Never lose it to a hard error — if the database
    //    isn't reachable yet, log the full enquiry so it's recoverable.
    let saved = false;
    try {
      await db.enquiry.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          budget: data.budget || null,
          service: data.service || null,
          message: data.message,
          source,
        },
      });
      saved = true;
    } catch (err) {
      console.error("[contact] DB save failed — enquiry follows:", err);
      console.error("[contact] enquiry:", JSON.stringify({ ...data, source }));
    }

    // 2) Notify the owner by email (only if Resend is configured — otherwise
    //    skipped silently). Never let a mail failure break the response.
    await notifyByEmail(data, source).catch((err) =>
      console.error("[contact] email notify failed:", err),
    );

    return NextResponse.json({ ok: true, saved });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

/**
 * Send a plain-text notification via the Resend REST API (no npm dependency).
 * No-op until RESEND_API_KEY + CONTACT_TO_EMAIL are set in the environment.
 */
async function notifyByEmail(data: EnquiryInput, source: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return;

  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Development By Niaz <onboarding@resend.dev>";

  const subject =
    source === "free-audit"
      ? `New free-audit request — ${data.name}`
      : `New website enquiry — ${data.name}`;

  const text = [
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    data.phone ? `Phone:   ${data.phone}` : null,
    data.company ? `Company: ${data.company}` : null,
    data.service ? `Service: ${data.service}` : null,
    data.budget ? `Budget:  ${data.budget}` : null,
    `Source:  ${source}`,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}
