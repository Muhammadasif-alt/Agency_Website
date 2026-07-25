import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you engage ${siteConfig.name} for web design, development or related services.`,
};

const sections = [
  {
    heading: "1. Overview",
    body: [
      `These terms apply when you engage ${siteConfig.name} ("we", "us") for web design, development, e-commerce, SEO or related services. By starting a project with us, you agree to these terms alongside the specific scope agreed in your proposal.`,
    ],
  },
  {
    heading: "2. Quotes & scope",
    body: [
      "Each project begins with a written proposal describing the scope, deliverables, timeline and a fixed price. Work outside the agreed scope may require a separate quote before it is carried out.",
    ],
  },
  {
    heading: "3. Payment",
    body: [
      "Unless otherwise agreed, projects are invoiced with a deposit before work begins and the balance due on completion, before final files or the live site are handed over. Ongoing services (such as maintenance or SEO) are billed on the agreed recurring schedule.",
    ],
  },
  {
    heading: "4. Your responsibilities",
    body: [
      "To keep your project on schedule, you agree to provide the content, access and feedback we need in a reasonable time. Delays in providing these may affect the timeline. You confirm that any material you supply does not infringe the rights of others.",
    ],
  },
  {
    heading: "5. Revisions & timelines",
    body: [
      "Your proposal sets out the revision rounds included. Timelines are estimates made in good faith and depend on timely feedback and content from you.",
    ],
  },
  {
    heading: "6. Intellectual property",
    body: [
      "Once your project is paid for in full, ownership of the final website and custom assets we create for you transfers to you. Third-party components, licences, plugins and fonts remain subject to their own licences. We may showcase completed work in our portfolio unless you ask us not to.",
    ],
  },
  {
    heading: "7. Third-party services",
    body: [
      "Your project may rely on third-party platforms and services (such as hosting, domains, payment providers and plugins). These are governed by their own terms, and we are not responsible for their availability or changes they make.",
    ],
  },
  {
    heading: "8. Limitation of liability",
    body: [
      "We deliver our services with reasonable skill and care. To the extent permitted by law, our total liability for any claim relating to a project is limited to the fees paid for that project. We are not liable for indirect or consequential losses.",
    ],
  },
  {
    heading: "9. Termination",
    body: [
      "Either party may end a project in writing. If you end a project after work has started, fees for work completed up to that point remain payable.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      `Questions about these terms? Email us at ${siteConfig.contact.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Legal
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: July 2026</p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading text-xl font-semibold">{s.heading}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground text-pretty">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
