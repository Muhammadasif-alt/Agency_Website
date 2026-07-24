import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function Testimonials() {
  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        eyebrow="Client love"
        title="Don't just take our word for it"
        description="Real results and real relationships — here's what clients say after working with us."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="flex flex-col">
            <CardContent className="flex h-full flex-col p-7">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-pretty">
                “{t.content}”
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t pt-5">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {initials(t.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}
                    {t.location ? ` · ${t.location}` : ""}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
