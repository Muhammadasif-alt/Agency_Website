"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const count = testimonials.length;
  const t = testimonials[index];
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="container-page py-24 sm:py-32">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          What clients say
        </p>
        <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Don&apos;t just take our word for it
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="rounded-3xl border bg-card p-8 shadow-[0_10px_45px_-20px_rgba(0,0,0,0.25)] sm:p-12">
          <Quote className="size-8 fill-brand text-brand" />

          <blockquote className="mt-6 text-lg italic leading-relaxed text-foreground/80 text-pretty sm:text-xl">
            {t.content}
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarFallback className="bg-brand/10 font-semibold text-brand">
                {initials(t.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">
                {[t.company, t.location].filter(Boolean).join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => go(-1)}
          >
            <ArrowLeft className="size-4" /> Prev
          </Button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index
                    ? "w-6 bg-brand"
                    : "w-2 bg-border hover:bg-muted-foreground/40",
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => go(1)}
          >
            Next <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
