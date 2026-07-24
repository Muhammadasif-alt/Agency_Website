import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .min(2, "Name kam az kam 2 characters ka hona chahiye")
    .max(80, "Name bohot lamba hai"),
  email: z.email("Valid email address daalein"),
  phone: z
    .string()
    .max(30, "Phone number bohot lamba hai")
    .optional()
    .or(z.literal("")),
  company: z.string().max(100).optional().or(z.literal("")),
  budget: z.string().max(50).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Thora detail mein likhein (kam az kam 10 characters)")
    .max(2000, "Message bohot lamba hai"),
  /** Honeypot — bots isko fill karte hain, insan nahi. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
