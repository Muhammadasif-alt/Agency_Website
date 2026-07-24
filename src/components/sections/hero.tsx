import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { trustSignals } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="brand-glow pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <div className="container-page flex flex-col items-center gap-8 py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm shadow-sm backdrop-blur">
          <span className="flex -space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-primary text-primary" />
            ))}
          </span>
          <span className="text-muted-foreground">
            Rated 5/5 by 90+ happy clients
          </span>
        </div>

        <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          The web design agency{" "}
          <span className="text-gradient">that actually gets you clients.</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground text-pretty">
          We build fast, conversion-focused websites for businesses across
          Pakistan, the UK, the US and beyond — designed to turn visitors into
          paying customers, not just to look pretty.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-7 text-base">
            <Link href="/contact?type=audit">
              Get your free audit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 px-7 text-base"
          >
            <Link href="/portfolio">See our work</Link>
          </Button>
        </div>

        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {trustSignals.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <item.icon className="size-4 text-primary" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
