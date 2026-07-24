import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";

export function MainServices() {
  return (
    <section id="services" className="container-page py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Core services
        </p>
        <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
          Our main services
        </h2>
      </div>

      <div className="mt-14 flex flex-col gap-6">
        {services.map((service, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={service.slug}
              className="overflow-hidden rounded-3xl border bg-card shadow-sm"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div
                  className={cn(
                    "relative min-h-[360px] lg:min-h-[480px]",
                    !imageLeft && "lg:order-2",
                  )}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <Badge className="absolute left-4 top-4 rounded-full border-transparent bg-brand px-3 py-1 text-white shadow">
                    {service.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "flex flex-col justify-center gap-5 p-8 sm:p-10",
                    !imageLeft && "lg:order-1",
                  )}
                >
                  <h3 className="font-heading text-3xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.excerpt}
                  </p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm">
                        <Check
                          className="size-4 shrink-0 text-brand"
                          strokeWidth={3}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-center gap-5">
                    <Button asChild className="rounded-full">
                      <Link href={`/services/${service.slug}`}>
                        Learn more
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <span className="text-sm font-semibold text-brand">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
