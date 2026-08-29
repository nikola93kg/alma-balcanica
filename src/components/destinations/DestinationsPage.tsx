import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import {
  destinations,
  getDestinationRoute,
} from "@/data/destinations";
import { media } from "@/data/media";
import { tours } from "@/data/tours";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { Destination } from "@/types/travel";
import { Container } from "@/components/ui/Container";
import { LocalizedImage } from "@/components/ui/LocalizedImage";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TourCard } from "@/components/travel/TourCard";

type DestinationsPageProps = {
  locale: Locale;
};

export function DestinationsPage({ locale }: DestinationsPageProps) {
  const dictionary = getDictionary(locale);
  const futureDestinationNames =
    locale === "es"
      ? ["Eslovenia", "Grecia"]
      : ["Slovenia", "Greece"];

  return (
    <>
      <PageHero
        locale={locale}
        image={media.balkanHero}
        eyebrow={dictionary.destinationsPage.eyebrow}
        title={dictionary.destinationsPage.heading}
        copy={dictionary.destinationsPage.copy}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow={dictionary.destinationsPage.featuredHeading}
            title={dictionary.destinationsPage.featuredHeading}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationLink
                key={destination.id}
                destination={destination}
                locale={locale}
              />
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-stone-dark">
            {dictionary.destinationsPage.futureCopy}{" "}
            <span className="font-semibold text-foreground">
              {futureDestinationNames.join(", ")}.
            </span>
          </p>
        </Container>
      </section>
    </>
  );
}

export function DestinationDetailPage({
  destination,
  locale,
}: {
  destination: Destination;
  locale: Locale;
}) {
  const dictionary = getDictionary(locale);
  const relatedTours = tours.filter((tour) =>
    tour.countries.includes(destination.id),
  );

  return (
    <>
      <PageHero
        locale={locale}
        image={destination.image}
        eyebrow={dictionary.destinationsPage.eyebrow}
        title={destination.name[locale]}
        copy={destination.longDescription[locale]}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeader
              eyebrow={destination.name[locale]}
              title={destination.tagline[locale]}
              copy={destination.description[locale]}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {destination.highlights[locale].map((highlight) => (
                <div
                  key={highlight}
                  className="flex min-h-24 items-center gap-3 rounded-md border border-border bg-paper p-5"
                >
                  <MapPin aria-hidden="true" className="size-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {relatedTours.length > 0 ? (
        <section className="bg-paper py-18 sm:py-24 lg:py-28">
          <Container>
            <SectionHeader
              eyebrow={dictionary.destinationsPage.currentTours}
              title={dictionary.destinationsPage.currentTours}
            />
            <div className="mt-10 grid gap-8">
              {relatedTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} locale={locale} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}

function DestinationLink({
  destination,
  locale,
}: {
  destination: Destination;
  locale: Locale;
}) {
  return (
    <Link
      href={getDestinationRoute(destination, locale)}
      className="group focus-ring relative min-h-[360px] overflow-hidden rounded-md bg-charcoal text-white"
    >
      <LocalizedImage
        image={destination.image}
        locale={locale}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/84 via-charcoal/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-sm text-white/72">{destination.name[locale]}</p>
        <h2 className="font-editorial mt-3 text-3xl font-semibold leading-tight">
          {destination.tagline[locale]}
        </h2>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
          {destination.name[locale]}
          <ArrowRight aria-hidden="true" className="size-4" />
        </span>
      </div>
    </Link>
  );
}
