import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information.`,
};

const sections = [
  {
    heading: "1. Who we are",
    body: [
      `${siteConfig.name} ("we", "us", "our") is a web design and development agency. This policy explains what personal information we collect, why we collect it, and how we handle it when you use our website or contact us.`,
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "When you submit our contact or enquiry form, we collect the details you provide — typically your name, business name, email address, phone number, budget, the service you're interested in and your message.",
      "We also collect limited technical information automatically, such as your IP address, browser type, device information and pages visited, through cookies and analytics tools.",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "We use the information you provide to respond to your enquiry, prepare quotes and proposals, deliver our services, and communicate with you about your project.",
      "We use technical and analytics data to understand how our website is used, improve it, and keep it secure.",
    ],
  },
  {
    heading: "4. Cookies & analytics",
    body: [
      "Our website may use cookies and privacy-friendly analytics to measure traffic and improve performance. You can control or disable cookies through your browser settings; some features may not work as intended if you do.",
    ],
  },
  {
    heading: "5. Sharing your information",
    body: [
      "We do not sell your personal information. We may share it with trusted service providers who help us operate our business — for example, hosting, email and analytics providers — strictly to deliver our services, and only to the extent necessary.",
    ],
  },
  {
    heading: "6. Data retention",
    body: [
      "We keep enquiry and project information only for as long as needed to provide our services and meet legal or accounting obligations, after which it is deleted or anonymised.",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you, and you may ask us to stop contacting you at any time. To make a request, email us using the details below.",
    ],
  },
  {
    heading: "8. Contact us",
    body: [
      `If you have any questions about this policy or how we handle your data, email us at ${siteConfig.contact.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Legal
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
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
