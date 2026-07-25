import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getIndustryDetail, industrySlugs } from "@/lib/industries";
import { IndustryDetailView } from "@/components/sections/industry-detail";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryDetail(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Web Design`,
    description: industry.lead,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryDetail(slug);
  if (!industry) notFound();

  return <IndustryDetailView industry={industry} />;
}
