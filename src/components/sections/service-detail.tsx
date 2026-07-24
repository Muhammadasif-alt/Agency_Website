import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/sections/marquee";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { ContactForm } from "@/components/sections/contact-form";
import { Cta } from "@/components/sections/cta";
import type { ServiceDetail } from "@/lib/services";

export function ServiceDetailView({ service }: { service: ServiceDetail }) {
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
              {service.eyebrow}
            </p>
            <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              {service.hero}
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
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Overview + tech stack */}
      <section className="container-page py-8 sm:py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {service.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="pt-2 text-base font-semibold text-brand">
              {service.price}
            </p>
          </div>

          {service.techStack ? (
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold">
                Tech we build with
              </h2>
              <div className="mt-6 space-y-6">
                {service.techStack.map((group) => (
                  <div key={group.category}>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {group.category}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge
                          key={item}
                          className="rounded-full border-transparent bg-brand/10 px-3 py-1 text-brand hover:bg-brand/15"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          What&apos;s included
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-black/[0.04] bg-card p-7 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.22)]"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <Check className="size-5" strokeWidth={2.5} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />
      <WhyChooseUs />
      <PortfolioGrid />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Cta title={service.ctaTitle} />
    </>
  );
}
