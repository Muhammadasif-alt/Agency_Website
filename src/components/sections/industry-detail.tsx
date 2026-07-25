import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  Calendar,
  CalendarCheck,
  CalendarClock,
  Check,
  ClipboardList,
  Cloud,
  Cog,
  CreditCard,
  Database,
  FileText,
  Filter,
  HeartPulse,
  Home,
  Image as ImageIcon,
  KeyRound,
  Layers,
  LayoutDashboard,
  LineChart,
  Lock,
  type LucideIcon,
  Mail,
  Map,
  MapPin,
  Percent,
  Phone,
  Plug,
  Receipt,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/sections/marquee";
import { ProcessSteps } from "@/components/sections/process-steps";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Platforms } from "@/components/sections/platforms";
import { ContactForm } from "@/components/sections/contact-form";
import { Cta } from "@/components/sections/cta";
import type { IndustryDetail } from "@/lib/industries";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  barChart: BarChart3,
  bot: Bot,
  boxes: Boxes,
  building: Building2,
  calendar: Calendar,
  calendarCheck: CalendarCheck,
  calendarClock: CalendarClock,
  cart: ShoppingCart,
  clipboard: ClipboardList,
  cloud: Cloud,
  cog: Cog,
  creditCard: CreditCard,
  dashboard: LayoutDashboard,
  database: Database,
  fileText: FileText,
  filter: Filter,
  heartPulse: HeartPulse,
  home: Home,
  image: ImageIcon,
  keyRound: KeyRound,
  layers: Layers,
  lineChart: LineChart,
  lock: Lock,
  mail: Mail,
  map: Map,
  mapPin: MapPin,
  percent: Percent,
  phone: Phone,
  plug: Plug,
  receipt: Receipt,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  store: Store,
  trending: TrendingUp,
  users: Users,
  zap: Zap,
};

function iconFor(key: string): LucideIcon {
  return iconMap[key] ?? Check;
}

export function IndustryDetailView({ industry }: { industry: IndustryDetail }) {
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
              {industry.eyebrow}
            </p>
            <h1 className="mt-5 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
              {industry.name} websites{" "}
              <span className="italic text-brand">{industry.tagline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              {industry.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                <Link href="/contact?type=audit">
                  Get a free {industry.name.toLowerCase()} website audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-base"
              >
                <Link href="#portfolio">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Why it matters + stats */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Why it matters
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
              {industry.whyTitle}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              {industry.whyBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {industry.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-5 rounded-2xl border bg-card p-6 shadow-sm"
              >
                <div className="font-heading text-3xl font-bold text-brand sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y bg-muted/30">
        <div className="container-page py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              What we do for you
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
              Everything built into your {industry.name.toLowerCase()} website
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.features.map((feature) => {
              const Icon = iconFor(feature.icon);
              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-black/[0.04] bg-card p-7 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.22)]"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="container-page py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            The advantages
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl">
            What a great {industry.name.toLowerCase()} website does for you
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {industry.advantages.map((advantage) => {
            const Icon = iconFor(advantage.icon);
            return (
              <div
                key={advantage.title}
                className="flex gap-5 rounded-3xl border bg-card p-7 shadow-sm"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {advantage.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProcessSteps />
      <PortfolioGrid />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <Platforms />
      <ContactForm />
      <Cta title={industry.ctaTitle} />
    </>
  );
}
