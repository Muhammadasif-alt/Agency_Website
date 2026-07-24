import type { LucideIcon } from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  sub: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  excerpt: string;
  icon: LucideIcon;
  points: string[];
  image: string;
  badge: string;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  location?: string;
  content: string;
  rating: number;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image?: string;
  result?: string;
};

export type IndustryItem = {
  slug: string;
  badge: string;
  title: string;
  excerpt: string;
  image: string;
};
