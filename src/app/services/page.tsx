import type { Metadata } from "next";

import { ServicesHero } from "@/components/sections/services-hero";
import { MainServices } from "@/components/sections/main-services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, development, local SEO and website maintenance — everything your business needs to compete online, all under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <MainServices />
      <WhyChooseUs />
      <Cta
        title="Not sure which service you need?"
        description="Get a free audit — we'll tell you exactly what your business needs and what it'll cost."
      />
    </>
  );
}
