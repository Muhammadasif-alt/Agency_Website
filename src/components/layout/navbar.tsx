"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { mainNav } from "@/config/site";
import { FreeAuditButton } from "@/components/free-audit";
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
  const router = useRouter();
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
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-20 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
        {/* Left — logo */}
        <div className="flex min-w-0 justify-start">
          <Logo />
        </div>

        {/* Center — navigation */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-1">
            {mainNav.map((item) =>
              item.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger
                    className="bg-transparent text-[15px]"
                    onClick={() => router.push(item.href)}
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-56 gap-0.5 p-2">
                      {item.items.map((sub) => (
                        <li key={sub.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={sub.href}
                              className="block rounded-md px-3 py-2 text-sm font-medium no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {sub.title}
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
          <FreeAuditButton className="hidden h-11 rounded-full px-7 text-[15px] sm:inline-flex">
            Free Audit
          </FreeAuditButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
