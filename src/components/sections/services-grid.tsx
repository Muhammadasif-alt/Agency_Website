import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";

export function ServicesGrid() {
  return (
    <section id="services" className="container-page py-24 sm:py-32">
      {/* Header row */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            What we do
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
            Web design and digital services built for businesses that want to
            grow
          </h2>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 shrink-0 rounded-full px-6 text-base"
        >
          <Link href="/services">
            All services
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border bg-card p-2.5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-xl font-semibold leading-snug">
                  {service.title}
                </h3>
                <Badge className="mt-0.5 shrink-0 rounded-full border-transparent bg-brand/10 text-brand hover:bg-brand/15">
                  {service.badge}
                </Badge>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.excerpt}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
