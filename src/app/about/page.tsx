import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/sections/marquee";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Platforms } from "@/components/sections/platforms";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Development By Niaz is a web design and development agency building fast, conversion-focused websites, stores and custom platforms for businesses across the US, Canada, UAE and beyond.",
};

const stats = [
  { value: "16+", label: "Live projects shipped" },
  { value: "8", label: "Industries served" },
  { value: "5", label: "Countries" },
  { value: "48hr", label: "First design draft" },
];

export default function AboutPage() {
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
              About us
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
              We build websites that{" "}
              <span className="italic text-brand">actually win clients.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              {siteConfig.name} is a web design and development studio. We build
              fast, conversion-focused websites, online stores and custom
              platforms for businesses that want their site to bring in real
              work — not just look pretty.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                <Link href="/contact?type=audit">
                  Get a free audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-base"
              >
                <Link href="/portfolio">See our work</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="font-heading text-3xl font-bold text-brand sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* Story */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Who we are
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
              A small team that treats your project like it matters
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              We&apos;ve built websites and platforms for roofing and landscaping
              contractors across the US and Canada, a cash home-buyer in North
              Carolina, a nationwide US job board, an on-demand delivery service
              in the UAE, and more. Different industries, one goal: a site that
              gets found and turns visitors into customers.
            </p>
            <p>
              You work directly with the people building your site — no account
              managers, no ticket systems. We move fast, quote fixed prices up
              front, and build every project on a modern stack: React, Next.js,
              Node and Laravel, with WordPress and Shopify when they fit best.
            </p>
            <p>
              And we don&apos;t just design and disappear. SEO is built in from
              day one, and we&apos;re on hand after launch to keep your site fast,
              secure and growing.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSteps />
      <Platforms />
      <Testimonials />
      <Cta />
    </>
  );
}
