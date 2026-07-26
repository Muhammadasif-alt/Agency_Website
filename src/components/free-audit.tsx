"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AUDIT_EVENT = "dbn:open-free-audit";

/** Open the global free-audit modal from anywhere on the client. */
export function openFreeAudit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUDIT_EVENT));
  }
}

/**
 * Drop-in replacement for the old "Get your free audit" link buttons.
 * Renders a normal Button that opens the global audit modal instead of
 * navigating. Accepts every Button prop (variant, size, className, children).
 */
export function FreeAuditButton({
  children = "Get your free audit",
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      onClick={(e) => {
        onClick?.(e);
        openFreeAudit();
      }}
    >
      {children}
    </Button>
  );
}

const auditSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.email("Enter a valid email address"),
  phone: z.string().max(30).optional().or(z.literal("")),
  site: z.string().min(3, "Enter your website URL").max(200),
  message: z.string().max(1000).optional().or(z.literal("")),
  /** Honeypot — bots fill this, humans don't. */
  website: z.string().max(0).optional().or(z.literal("")),
});
type AuditValues = z.infer<typeof auditSchema>;

/**
 * The global free-audit modal. Mount ONCE (in the root layout). It lives
 * outside every trigger, so closing a menu/sheet that fired openFreeAudit()
 * never unmounts the open dialog.
 */
export function FreeAuditDialog() {
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuditValues>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      site: "",
      message: "",
      website: "",
    },
  });

  React.useEffect(() => {
    const fn = () => {
      setDone(false);
      setOpen(true);
    };
    window.addEventListener(AUDIT_EVENT, fn);
    return () => window.removeEventListener(AUDIT_EVENT, fn);
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      // Reset after the close animation so the form doesn't flicker.
      window.setTimeout(() => {
        reset();
        setDone(false);
      }, 200);
    }
  }

  async function onSubmit(values: AuditValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone ?? "",
          company: "",
          service: "Free website audit",
          budget: "",
          message: `Free website audit request.\nWebsite to review: ${values.site}\n\n${
            values.message
              ? `Goals / notes: ${values.message}`
              : "No extra notes provided."
          }`,
          website: values.website ?? "",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      toast.success("Thanks! Your free audit is on its way.");
    } catch {
      toast.error(
        "Something went wrong. Please try again or email us directly.",
      );
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-6 sm:max-w-md">
        {done ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-12 text-brand" />
            <h2 className="font-heading text-xl font-semibold">
              Request received!
            </h2>
            <p className="text-sm text-muted-foreground">
              We&apos;ll review your website and get back to you within one
              business day with a free, honest audit — no obligation.
            </p>
            <Button
              className="mt-2 rounded-full px-6"
              onClick={() => handleOpenChange(false)}
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">
                Get your free website audit
              </DialogTitle>
              <DialogDescription>
                Tell us where to send it. We&apos;ll review your site and reply
                within one business day — no obligation, no sales pitch.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 grid gap-4">
              {/* Honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
                {...register("website")}
              />

              <div className="space-y-1.5">
                <Label htmlFor="audit-name">Your name *</Label>
                <Input
                  id="audit-name"
                  placeholder="John Smith"
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="text-xs text-destructive">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="audit-email">Email *</Label>
                  <Input
                    id="audit-email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="audit-phone">Phone</Label>
                  <Input
                    id="audit-phone"
                    placeholder="+1 555 000 0000"
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="audit-site">Your website URL *</Label>
                <Input
                  id="audit-site"
                  placeholder="https://yourwebsite.com"
                  {...register("site")}
                />
                {errors.site ? (
                  <p className="text-xs text-destructive">
                    {errors.site.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="audit-message">
                  What would you like us to look at?
                </Label>
                <Textarea
                  id="audit-message"
                  rows={3}
                  placeholder="Speed, SEO, design, leads… anything specific?"
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-1 h-12 w-full rounded-full text-base"
              >
                {isSubmitting ? (
                  "Sending…"
                ) : (
                  <>
                    Get my free audit
                    <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No spam, ever. We reply within one business day.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
