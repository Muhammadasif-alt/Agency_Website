"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

import { enquirySchema, type EnquiryInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const services = [
  "Custom Web Development",
  "WordPress",
  "Shopify / E-commerce",
  "SEO & Local SEO",
  "Website Maintenance",
  "Something else / Not sure",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function ContactFullForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: EnquiryInput) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Thanks! We'll be in touch within one business day.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border bg-card p-6 shadow-xl ring-1 ring-black/[0.03] sm:p-8"
    >
      <h2 className="font-heading text-2xl font-semibold">Send us a message</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        We&apos;ll get back to you within one business day.
      </p>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        {...register("website")}
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" placeholder="John Smith" {...register("name")} />
          {errors.name ? (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Business name</Label>
          <Input id="company" placeholder="Smith & Co" {...register("company")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" placeholder="+1 555 000 0000" {...register("phone")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">What do you need?</Label>
          <select id="service" className={selectClass} {...register("service")}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget range</Label>
          <select id="budget" className={selectClass} {...register("budget")}>
            <option value="">Select a budget range…</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Tell us about your project *</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="What does your business do? What are your goals? Any specific requirements?"
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          ) : null}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-6 h-12 w-full rounded-full text-base"
      >
        {isSubmitting ? (
          "Sending…"
        ) : (
          <>
            Send message
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We&apos;ll reply within one business day. No spam, ever.
      </p>
    </form>
  );
}
