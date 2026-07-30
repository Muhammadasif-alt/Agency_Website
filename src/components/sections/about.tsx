import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="bg-white dark:bg-card">
      <div className="container-page grid items-center gap-[50px] py-24 sm:py-32 lg:grid-cols-2">
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

        {/* Right — image only */}
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-xl lg:min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="Modern architecture"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
