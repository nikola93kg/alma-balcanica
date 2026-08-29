import { notFound } from "next/navigation";
import { getTourAlternateRoutes, getTourBySlug, getTourRoute, tours } from "@/data/tours";
import { TourDetailPage } from "@/components/travel/TourDetailPage";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug.es,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug, "es");

  if (!tour) {
    return {};
  }

  return createPageMetadata({
    locale: "es",
    path: getTourRoute(tour, "es"),
    languages: getTourAlternateRoutes(tour),
    title: tour.title.es,
    description: tour.shortDescription.es,
    image: tour.heroImage.src,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug, "es");

  if (!tour) {
    notFound();
  }

  return <TourDetailPage locale="es" tour={tour} />;
}
