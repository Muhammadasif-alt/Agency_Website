"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { mainNav } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
          : "bg-background/0",
      )}
    >
      <div className="container-page grid h-18 grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Left — logo */}
        <div className="flex justify-start">
          <Logo className="text-xl" />
        </div>

        {/* Center — navigation */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-1">
            {mainNav.map((item) =>
              item.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="bg-transparent text-[15px]">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[420px] gap-1 p-2">
                      {item.items.map((sub) => (
                        <li key={sub.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={sub.href}
                              className="block rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <div className="text-sm font-medium">
                                {sub.title}
                              </div>
                              {sub.description ? (
                                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                                  {sub.description}
                                </p>
                              ) : null}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="inline-flex h-9 items-center rounded-md px-3 py-2 text-[15px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right — actions */}
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild className="hidden rounded-full sm:inline-flex">
            <Link href="/contact?type=audit">Free Audit</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
