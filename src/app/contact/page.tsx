import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ContactFullForm } from "@/components/sections/contact-full-form";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project — we reply within one business day. Web design, development, e-commerce and SEO for businesses across the US, Canada, UAE and beyond.",
};

const details = [
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.contact.address,
    sub: "Working with clients across the US, Canada, UAE & beyond",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    sub: "We reply within one business day",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.whatsapp,
    sub: "Mon–Sat, quick replies",
  },
  {
    icon: Clock,
    label: "First draft",
    value: "48-hour turnaround",
    sub: "From briefing to a real design in 2 days",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38rem_28rem_at_12%_-10%,color-mix(in_oklch,var(--brand)_12%,transparent),transparent_60%)]"
        />
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Get in touch
            </p>
            <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
              Let&apos;s talk about{" "}
              <span className="italic text-brand">your project.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              Whether you have a clear brief or just an idea — we&apos;d love to
              hear from you. We typically respond within one business day.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              {["Reply within 1 business day", "Free consultation", "No contracts"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-brand">✓</span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Info + form */}
      <section className="container-page pb-20 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left — details */}
          <div>
            <h2 className="font-heading text-2xl font-semibold">
              We&apos;d love to hear from you
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Fill in the form and we&apos;ll get back to you within one business
              day. Or reach out directly via any of the channels below.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((d) => {
                const Icon = d.icon;
                return (
                  <li key={d.label} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener"
                          className="font-heading text-lg font-semibold hover:text-brand"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-heading text-lg font-semibold">
                          {d.value}
                        </p>
                      )}
                      <p className="mt-0.5 text-sm text-muted-foreground">{d.sub}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#25D366] px-6 text-base text-white hover:bg-[#20bd5a]"
              >
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener">
                  <MessageCircle className="size-5" />
                  Message us on WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-8 border-t pt-6">
              <p className="text-sm text-muted-foreground">Not sure where to start?</p>
              <Link
                href="/contact?type=audit"
                className="mt-1 inline-flex items-center gap-1.5 font-semibold text-brand hover:gap-2.5"
              >
                Get a free website audit instead
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactFullForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section aria-label="Our location" className="container-page pb-20 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl border shadow-sm">
          <iframe
            title="Our location"
            src="https://www.google.com/maps?q=Lahore,Pakistan&z=11&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[340px] w-full border-0 grayscale-[0.15] sm:h-[420px]"
          />
          <div className="pointer-events-none absolute left-4 top-4 max-w-xs rounded-2xl border bg-background/95 p-5 shadow-lg backdrop-blur sm:left-6 sm:top-6">
            <p className="flex items-center gap-2 font-heading text-lg font-semibold">
              <MapPin className="size-5 shrink-0 text-brand" />
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.contact.address}
            </p>
            <p className="mt-1.5 text-sm font-medium text-brand">
              Working with clients across the US, Canada, UAE &amp; beyond
            </p>
          </div>
        </div>
      </section>

      <Cta
        title="Prefer to start with a free audit?"
        description="We'll review your website and tell you exactly what's holding you back — for free, no obligation."
      />
    </>
  );
}
