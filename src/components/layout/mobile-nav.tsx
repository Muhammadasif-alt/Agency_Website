"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { mainNav, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle asChild>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4">
          {mainNav.map((item) => (
            <div key={item.title} className="py-1">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
              >
                {item.title}
              </Link>
              {item.items ? (
                <div className="ml-3 flex flex-col border-l pl-3">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 p-4">
          <Button asChild onClick={() => setOpen(false)}>
            <Link href="/contact?type=audit">Get your free audit</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener">
              WhatsApp us
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
