import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="container-page py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2">
        {/* Left — intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            How it works
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
            From first conversation to live website in days, not months
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            We&apos;ve refined our process so you get a professional website
            without the endless back and forth that drags most projects out for
            months. Most clients go live within 2 to 3 weeks of briefing.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-full bg-brand px-7 text-base text-white hover:bg-brand/90"
          >
            <Link href="/contact?type=audit">
              Start with a free audit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Right — steps */}
        <ol className="flex flex-col">
          {processSteps.map((step, i) => (
            <li
              key={step.step}
              className={cn("flex gap-5 py-7", i > 0 && "border-t")}
            >
              <span
                className={cn(
                  "grid size-11 shrink-0 place-items-center rounded-full font-heading text-base font-bold",
                  i === 0
                    ? "bg-brand text-white"
                    : "border-2 border-border text-muted-foreground",
                )}
              >
                {step.step}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
