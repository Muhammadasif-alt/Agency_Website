import {
  ClipboardList,
  Code2,
  FileText,
  Gauge,
  Layers,
  type LucideIcon,
  MapPin,
  Palette,
  PiggyBank,
  Search,
  ShoppingCart,
  TrendingUp,
  Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";

const icons: Record<string, LucideIcon> = {
  gauge: Gauge,
  search: Search,
  wrench: Wrench,
  form: ClipboardList,
  traffic: TrendingUp,
  mapPin: MapPin,
  palette: Palette,
  invest: PiggyBank,
  code: Code2,
  compare: Layers,
  cart: ShoppingCart,
};

/**
 * Blog cover image — a real photo given a consistent, on-brand green duotone
 * treatment, with the category and a topic icon. Reliable (always loads) and
 * cohesive across every post.
 */
export function BlogCover({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  const Icon = icons[post.icon] ?? FileText;

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://picsum.photos/seed/dbn-${post.slug}/1200/760`}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-brand/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand shadow-sm">
        {post.category}
      </span>
      <Icon
        className="absolute bottom-5 right-5 size-9 text-white/85"
        strokeWidth={1.5}
      />
    </div>
  );
}
