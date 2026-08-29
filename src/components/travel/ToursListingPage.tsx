import { Filter } from "lucide-react";
import { media } from "@/data/media";
import { getToursByType } from "@/data/tours";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import type { TourType } from "@/types/travel";
import { TourCard } from "@/components/travel/TourCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type ToursListingPageProps = {
  locale: Locale;
  type?: TourType;
};

export function ToursListingPage({ locale, type }: ToursListingPageProps) {
  const dictionary = getDictionary(locale);
  const tours = getToursByType(type);
  const heading =
    type === "guaranteed"
      ? dictionary.toursListing.guaranteedHeading
      : type === "private"
        ? dictionary.toursListing.privateHeading
        : dictionary.toursListing.heading;
  const copy =
    type === "guaranteed"
      ? dictionary.toursListing.guaranteedCopy
      : type === "private"
        ? dictionary.toursListing.privateCopy
        : dictionary.toursListing.copy;

  return (
    <>
      <PageHero
        locale={locale}
        image={type === "private" ? media.kotor : media.balkanHero}
        eyebrow={dictionary.toursListing.eyebrow}
        title={heading}
        copy={copy}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={getRoute("tours", locale)} variant="light">
            {dictionary.common.viewTours}
          </ButtonLink>
          <WhatsAppCta
            locale={locale}
            variant="light"
          />
        </div>
      </PageHero>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:items-start">
            <aside className="rounded-md border border-border bg-paper p-5 lg:sticky lg:top-24">
              <div className="flex items-center gap-3">
                <Filter aria-hidden="true" className="size-5 text-accent" />
                <h2 className="text-lg font-bold text-foreground">
                  {dictionary.toursListing.filtersHeading}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-dark">
                {dictionary.toursListing.filtersCopy}
              </p>
              <div className="mt-6 grid gap-3">
                {dictionary.toursListing.filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    disabled
                    className="min-h-11 rounded-md border border-border bg-background px-4 text-left text-sm font-semibold text-stone-dark"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </aside>

            <div className="grid gap-8">
              {!type ? <CategoryIntro locale={locale} /> : null}
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} locale={locale} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function CategoryIntro({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <ButtonLink
        href={getRoute("guaranteedDepartures", locale)}
        variant="secondary"
        className="min-h-28 justify-start p-5 text-left"
      >
        <span>
          <span className="block text-base">
            {dictionary.toursListing.guaranteedHeading}
          </span>
          <span className="mt-2 block text-sm font-normal leading-6 text-stone-dark">
            {dictionary.toursListing.guaranteedCopy}
          </span>
        </span>
      </ButtonLink>
      <ButtonLink
        href={getRoute("privateTrips", locale)}
        variant="secondary"
        className="min-h-28 justify-start p-5 text-left"
      >
        <span>
          <span className="block text-base">
            {dictionary.toursListing.privateHeading}
          </span>
          <span className="mt-2 block text-sm font-normal leading-6 text-stone-dark">
            {dictionary.toursListing.privateCopy}
          </span>
        </span>
      </ButtonLink>
    </div>
  );
}
