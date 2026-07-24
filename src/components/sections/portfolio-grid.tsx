import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { portfolioItems } from "@/lib/content";

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="border-y bg-muted/30">
      <div className="container-page py-20 sm:py-28">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Our work"
            title="Websites built to perform"
            description="A snapshot of recent projects across industries — each one designed around a real business goal."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Placeholder visual — real cover images baad mein DB se aayenge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/15 via-brand-2/10 to-background">
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-heading text-2xl font-bold text-primary/40">
                    {item.title}
                  </span>
                </div>
                {item.result ? (
                  <Badge className="absolute left-4 top-4 shadow">
                    {item.result}
                  </Badge>
                ) : null}
                <div className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-background/80 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {item.category}
                </span>
                <h3 className="mt-1 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/portfolio">View full portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
