import Link from "next/link";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 font-heading text-lg font-bold tracking-tight",
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <Sparkles className="size-4" />
      </span>
      <span>
        {siteConfig.name.split(" ")[0]}
        <span className="text-primary"> {siteConfig.name.split(" ")[1]}</span>
      </span>
    </Link>
  );
}
