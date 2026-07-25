import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/sections/hero-video";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38rem_30rem_at_15%_-10%,color-mix(in_oklch,var(--brand)_12%,transparent),transparent_60%)]"
      />

      <div className="container-page grid items-stretch gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        {/* Left — copy + stats */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className="flex">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand sm:text-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Working with clients across the US, Canada &amp; beyond
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-heading text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl sm:leading-[1.06] md:text-7xl lg:text-[5.25rem]">
            The web design agency{" "}
            <span className="italic text-brand">
              that actually gets you clients.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-7 max-w-xl text-lg text-muted-foreground text-pretty sm:text-xl">
            Development By Niaz is a web design and digital agency building
            fast, conversion-focused websites for businesses across the US,
            Canada, UAE and beyond. No middlemen. No templates. Just results.
          </p>

          {/* Buttons */}
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
              <Link href="#portfolio">
                See our work
                <ArrowDown className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Stats cards */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border bg-card p-5 shadow-sm"
              >
                <div className="font-heading text-3xl font-semibold tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — video testimonial (stretches to match the text height) */}
        <div className="flex justify-center lg:justify-end">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
