import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceDetail, serviceSlugs } from "@/lib/services";
import { ServiceDetailView } from "@/components/sections/service-detail";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.hero,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
