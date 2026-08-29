import { notFound } from "next/navigation";
import {
  destinations,
  getDestinationBySlug,
  getDestinationRoute,
} from "@/data/destinations";
import { DestinationDetailPage } from "@/components/destinations/DestinationsPage";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug.es,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug, "es");

  if (!destination) {
    return {};
  }

  return createPageMetadata({
    locale: "es",
    path: getDestinationRoute(destination, "es"),
    languages: {
      es: getDestinationRoute(destination, "es"),
      "es-MX": getDestinationRoute(destination, "es"),
      en: getDestinationRoute(destination, "en"),
      "x-default": getDestinationRoute(destination, "es"),
    },
    title: destination.name.es,
    description: destination.description.es,
    image: destination.image.src,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug, "es");

  if (!destination) {
    notFound();
  }

  return <DestinationDetailPage destination={destination} locale="es" />;
}
