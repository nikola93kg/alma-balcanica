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
    slug: tour.slug.en,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug, "en");

  if (!tour) {
    return {};
  }

  return createPageMetadata({
    locale: "en",
    path: getTourRoute(tour, "en"),
    languages: getTourAlternateRoutes(tour),
    title: tour.title.en,
    description: tour.shortDescription.en,
    image: tour.heroImage.src,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug, "en");

  if (!tour) {
    notFound();
  }

  return <TourDetailPage locale="en" tour={tour} />;
}
