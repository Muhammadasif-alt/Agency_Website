import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { aboutServices } from "@/lib/content";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="bg-white dark:bg-card">
      <div className="container-page grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
        {/* Left — copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            About {siteConfig.name}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-[3.25rem]">
            A web design company you&apos;ll actually enjoy working with
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              We&apos;re a focused web design agency and SEO company. Every
              project is handled directly by the people building your site — no
              account managers, no handoffs, no surprises. Just a small,
              dedicated team that genuinely cares about your results.
            </p>
            <p>
              We work with businesses across Pakistan, the UK, the US and
              Europe. Whether you need a brand-new website, a full redesign or
              ongoing SEO, we handle everything under one roof — from strategy
              and design through to launch and beyond.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
              <Link href="/about">
                About us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-7 text-base"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>

        {/* Right — promo card */}
        <div className="relative overflow-hidden rounded-[2rem] border bg-card p-3 shadow-xl">
          <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
            {/* Card content */}
            <div className="relative flex flex-col justify-center gap-6 p-5 sm:p-6">
              {/* dot-grid decoration */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-2 top-2 size-16 text-brand/40 [background-image:radial-gradient(currentColor_1.3px,transparent_1.3px)] [background-size:9px_9px]"
              />

              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="size-4" />
                </span>
                <span className="font-heading text-lg font-bold">
                  {siteConfig.name}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-brand">Web Design</p>
                <h3 className="mt-2 text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-[2rem]">
                  Your brand,
                  <br />
                  <span className="text-brand">our creativity!</span>
                </h3>
              </div>

              <ul className="space-y-3 text-sm font-medium">
                {aboutServices.map((service) => (
                  <li key={service} className="flex items-center gap-2.5">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {service}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-fit rounded-full bg-brand px-6 text-white hover:bg-brand/90"
              >
                <Link href="/services">
                  Learn more
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Card image + location badge */}
            <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] sm:min-h-[460px]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt="Modern architecture — brand and creativity"
                fill
                sizes="(max-width: 640px) 100vw, 460px"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-2xl bg-background/95 p-3.5 text-sm shadow-lg backdrop-blur">
                <MapPin className="size-5 shrink-0 text-brand" />
                <span className="leading-snug">
                  Proudly based in {siteConfig.contact.address}, helping
                  businesses grow online.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
