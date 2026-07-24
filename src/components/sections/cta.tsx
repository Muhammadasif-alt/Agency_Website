import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Cta() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl border bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(30rem_30rem_at_20%_0%,white,transparent_60%),radial-gradient(24rem_24rem_at_100%_100%,white,transparent_55%)]"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Ready for a website that actually gets you clients?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80 text-pretty">
            Get a free, no-obligation audit of your current site — or a fixed
            quote for a brand-new one. First draft in 48 hours.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 px-7 text-base"
            >
              <Link href="/contact?type=audit">
                Get your free audit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
