import { NextResponse } from "next/server";

import { enquirySchema } from "@/lib/validations";

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

    // Honeypot filled → silently accept (it's a bot).
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    // TODO: persist to the Enquiry table and/or send email via Resend
    // once DATABASE_URL / RESEND_API_KEY are configured.
    // await db.enquiry.create({ data: { ... } });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
