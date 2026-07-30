import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { ContactForm } from "@/components/sections/contact-form";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <PortfolioGrid />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Cta />
    </>
  );
}
