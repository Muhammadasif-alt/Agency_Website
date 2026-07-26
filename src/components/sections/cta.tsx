import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FreeAuditButton } from "@/components/free-audit";
import { siteConfig } from "@/config/site";

const guarantees = ["No contracts", "Fixed price guaranteed", "Reply within 1 hour"];

type CtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Cta({
  eyebrow = "Free · No obligation · 24hr turnaround",
  title = "Ready to get a website that actually grows your business?",
  description = "Get a free, honest audit of your current website. We'll show you exactly what is holding you back and what it would take to fix it. No sales pitch, just straight answers.",
}: CtaProps = {}) {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-16 text-center sm:px-16 sm:py-20">
        {/* brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(42rem_22rem_at_50%_-15%,color-mix(in_oklch,var(--brand)_35%,transparent),transparent_60%)]"
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-lime-400">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-semibold text-balance text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-white/60">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <FreeAuditButton
              size="lg"
              className="h-12 rounded-full bg-brand px-7 text-base text-white hover:bg-brand/90"
            >
              Get my free website audit
              <ArrowRight className="size-4" />
            </FreeAuditButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">
                Or just say hello
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener">
                <MessageCircle className="size-4" />
                WhatsApp us
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Trusted by businesses across the US, Canada, UAE and beyond
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {guarantees.map((g) => (
              <li key={g} className="flex items-center gap-1.5">
                <Check className="size-4 text-lime-400" strokeWidth={3} />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
