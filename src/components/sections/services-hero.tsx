import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FreeAuditButton } from "@/components/free-audit";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38rem_28rem_at_12%_-10%,color-mix(in_oklch,var(--brand)_12%,transparent),transparent_60%)]"
      />
      <div className="container-page py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            Services
          </p>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Everything your business{" "}
            <span className="italic text-brand">needs online.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            From website design to local SEO and industry-specific builds —
            everything your business needs to compete online, all under one
            roof.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <FreeAuditButton size="lg" className="h-12 rounded-full px-7 text-base">
              Get your free audit
              <ArrowRight className="size-4" />
            </FreeAuditButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-7 text-base"
            >
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
