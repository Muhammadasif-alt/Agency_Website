import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PortfolioCarousel } from "@/components/sections/portfolio-carousel";
import { PortfolioBrowser } from "@/components/sections/portfolio-browser";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real websites and platforms we've built — roofing, landscaping, real estate, job portals, e-commerce, healthcare and more, across the US, Canada, UAE and beyond.",
};

const stats = [
  { value: "16+", label: "Live projects" },
  { value: "8", label: "Industries served" },
  { value: "5", label: "Countries" },
  { value: "Free", label: "Audit always" },
];

export default function PortfolioPage() {
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
              Our work
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Websites we&apos;ve built{" "}
              <span className="italic text-brand">that win clients.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              Real websites and platforms for real businesses — from roofing and
              landscaping contractors in the US to a nationwide job board and a
              UAE delivery service. Every one is live. Click any card to visit it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                <Link href="/contact?type=audit">
                  Get your free audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-base"
              >
                <Link href="/contact">Discuss your project</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="font-heading text-3xl font-bold text-brand sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured — auto-scrolling rows */}
      <section className="overflow-hidden py-16 sm:py-20">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            Featured work
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
            Some of our best work
          </h2>
        </div>
        <div className="mt-12">
          <PortfolioCarousel />
        </div>
      </section>

      {/* Browse all — filterable grid */}
      <section className="container-page pb-24 sm:pb-32">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          All projects
        </p>
        <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
          Browse all our work
        </h2>
        <div className="mt-10">
          <PortfolioBrowser />
        </div>
      </section>

      <Cta />
    </>
  );
}
