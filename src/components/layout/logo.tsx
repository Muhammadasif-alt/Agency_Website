import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Brand logo. The source PNG is a white-text mark made for dark backgrounds,
 * so on light backgrounds we render it solid dark (brightness-0) and keep the
 * original colours in dark mode.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/Development-By-Niaz-Logo-01-2-2048x525.png"
        alt={siteConfig.name}
        width={2048}
        height={525}
        priority
        sizes="(max-width: 640px) 150px, 180px"
        className="h-8 w-auto brightness-0 dark:brightness-100 sm:h-10"
      />
    </Link>
  );
}
