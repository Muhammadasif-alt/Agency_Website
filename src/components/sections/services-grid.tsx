import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/lib/content";

export function ServicesGrid() {
  return (
    <section id="services" className="container-page py-20 sm:py-28">
      <SectionHeading
        eyebrow="What we do"
        title="Everything you need to win online"
        description="From a brand-new website to ranking on Google and keeping it all running — one team, no hand-offs."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.slug}
            className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="flex h-full flex-col p-7">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>

              <h3 className="mt-5 font-heading text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.excerpt}
              </p>

              <ul className="mt-5 space-y-2 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="link"
                className="mt-auto w-fit px-0 pt-6"
              >
                <Link href={`/services/${service.slug}`}>
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
