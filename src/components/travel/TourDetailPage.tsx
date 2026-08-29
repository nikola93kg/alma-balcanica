import {
  CalendarDays,
  Check,
  FileCheck,
  MapPin,
  MessageCircle,
  Route,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import type { Tour } from "@/types/travel";
import { TourCard } from "@/components/travel/TourCard";
import { TourOperator } from "@/components/travel/TourOperator";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LocalizedImage } from "@/components/ui/LocalizedImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type TourDetailPageProps = {
  locale: Locale;
  tour: Tour;
};

export function TourDetailPage({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        locale={locale}
        image={tour.heroImage}
        eyebrow={dictionary.toursListing.eyebrow}
        title={tour.title[locale]}
        copy={tour.subtitle[locale]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppCta locale={locale} context={tour.title[locale]} />
          <ButtonLink href={getRoute("trust", locale)} variant="light">
            {dictionary.home.trust.cta}
          </ButtonLink>
        </div>
      </PageHero>

      <QuickFacts locale={locale} tour={tour} />
      <Overview locale={locale} tour={tour} />
      <Highlights locale={locale} tour={tour} />
      <Itinerary locale={locale} tour={tour} />
      <Included locale={locale} tour={tour} />
      <DatesAndPrices locale={locale} tour={tour} />
      <PracticalInfo locale={locale} tour={tour} />
      <Audience locale={locale} tour={tour} />
      <Faq locale={locale} tour={tour} />
      <Booking locale={locale} tour={tour} />
      <TourTrust locale={locale} tour={tour} />
      <RelatedTrips locale={locale} tour={tour} />
    </>
  );
}

function QuickFacts({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);
  const facts = [
    { icon: CalendarDays, title: dictionary.tourDetail.duration, label: tour.duration[locale] },
    { icon: Users, title: dictionary.tourDetail.style, label: tour.groupStyle[locale] },
    { icon: MessageCircle, title: dictionary.common.whatsappCta, label: tour.languageSupport[locale] },
    { icon: ShieldCheck, title: dictionary.toursListing.nextDeparture, label: tour.departureStatus[locale] },
  ];

  return (
    <section className="bg-paper">
      <Container className="py-8">
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={`${fact.title}-${fact.label}`}
                className="rounded-md border border-border bg-background p-5"
              >
                <Icon aria-hidden="true" className="size-5 text-accent" />
                <dt className="mt-3 text-xs font-semibold uppercase text-stone-dark">
                  {fact.title}
                </dt>
                <dd className="mt-2 text-sm font-bold leading-6 text-foreground">
                  {fact.label}
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}

function Overview({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);
  const countryNames = tour.countries.flatMap((countryId) => {
    const destination = destinations.find((item) => item.id === countryId);

    return destination ? [destination.name[locale]] : [];
  });

  return (
    <section className="bg-background py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-accent">
              {dictionary.tourDetail.overview}
            </p>
            <h2 className="font-editorial text-4xl font-semibold leading-[1.04] text-foreground sm:text-6xl">
              {tour.travelStyle[locale]}
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-dark">
              {tour.overview[locale]}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {countryNames.map((country) => (
                <span
                  key={country}
                  className="rounded-md border border-border bg-paper px-3 py-2 text-sm font-semibold text-foreground"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-border bg-paper p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Route aria-hidden="true" className="size-5 text-accent" />
              <h3 className="text-lg font-bold text-foreground">
                {dictionary.tourDetail.route}
              </h3>
            </div>
            <ol className="mt-7 grid gap-3">
              {tour.route[locale].map((stop, index) => (
                <li
                  key={`${stop}-${index}`}
                  className="flex items-center gap-3 border-b border-border pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-accent text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-foreground">{stop}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Highlights({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-paper py-18 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={dictionary.tourDetail.highlights}
          title={tour.title[locale]}
          copy={tour.shortDescription[locale]}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {tour.highlights[locale].map((highlight) => (
            <div
              key={highlight}
              className="flex gap-4 rounded-md border border-border bg-background p-5"
            >
              <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
              <p className="text-sm leading-7 text-stone-dark">{highlight}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Itinerary({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-background py-18 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={dictionary.tourDetail.itinerary}
          title={dictionary.tourDetail.itinerary}
          copy={dictionary.tourDetail.itineraryNote}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-md lg:min-h-full">
            <LocalizedImage
              image={tour.gallery[1] ?? tour.heroImage}
              locale={locale}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>

          <ol className="grid gap-4">
            {tour.itinerary.map((day) => (
              <li
                key={day.day}
                className="grid gap-4 rounded-md border border-border bg-paper p-5 sm:grid-cols-[88px_1fr] sm:p-6"
              >
                <div>
                  <span className="text-sm font-semibold uppercase text-accent">
                    {dictionary.tourDetail.day}
                  </span>
                  <p className="font-editorial text-4xl font-semibold text-foreground">
                    {day.day}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {day.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-dark">
                    {day.description[locale]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function Included({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-paper py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <ListPanel
            title={dictionary.tourDetail.included}
            items={tour.included[locale]}
            icon="check"
          />
          <ListPanel
            title={dictionary.tourDetail.notIncluded}
            items={tour.notIncluded[locale]}
            icon="x"
          />
        </div>

        <div className="mt-8 rounded-md border border-border bg-background p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <MapPin aria-hidden="true" className="size-5 text-accent" />
            <h2 className="text-xl font-bold text-foreground">
              {dictionary.tourDetail.accommodation}
            </h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-dark">
            {tour.accommodation[locale]}
          </p>
        </div>
      </Container>
    </section>
  );
}

function DatesAndPrices({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-background py-18 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={dictionary.tourDetail.datesPrices}
          title={dictionary.tourDetail.datesPrices}
        />
        <div className="mt-10 overflow-hidden rounded-md border border-border bg-paper">
          <div className="grid gap-4 border-b border-border p-5 text-sm font-bold text-foreground sm:grid-cols-3">
            <span>{dictionary.toursListing.nextDeparture}</span>
            <span>{dictionary.tourDetail.price}</span>
            <span>{dictionary.tourDetail.style}</span>
          </div>
          {tour.dates.map((date) => (
            <div
              key={date.id}
              className="grid gap-4 border-b border-border p-5 text-sm last:border-b-0 sm:grid-cols-3"
            >
              <span className="font-semibold text-foreground">
                {date.display[locale]}
              </span>
              <span className="text-stone-dark">
                {date.price?.[locale] ?? tour.price.display[locale]}
              </span>
              <span className="text-stone-dark">{date.status[locale]}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PracticalInfo({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-paper py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow={dictionary.tourDetail.practicalInfo}
            title={dictionary.tourDetail.practicalInfo}
          />
          <ul className="grid gap-4">
            {tour.practicalInfo[locale].map((item) => (
              <li
                key={item}
                className="flex gap-4 rounded-md border border-border bg-background p-5"
              >
                <FileCheck
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-accent"
                />
                <span className="text-sm leading-7 text-stone-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Audience({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-charcoal py-18 text-paper sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-accent-soft">
              {dictionary.tourDetail.forWhom}
            </p>
            <h2 className="font-editorial text-4xl font-semibold leading-[1.04] text-paper sm:text-6xl">
              {dictionary.tourDetail.forWhom}
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {tour.forWhom[locale].map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/12 p-5 text-sm leading-7 text-paper/76"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Faq({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-paper py-18 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title={dictionary.tourDetail.faq}
        />
        <div className="mt-10 divide-y divide-border rounded-md border border-border bg-background">
          {tour.faqs.map((faq) => (
            <details key={faq.question[locale]} className="group p-6">
              <summary className="cursor-pointer list-none text-lg font-bold text-foreground">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {faq.question[locale]}
                  <span className="text-accent group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-dark">
                {faq.answer[locale]}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Booking({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-background py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 rounded-md border border-border bg-paper p-6 sm:p-8 lg:grid-cols-[1fr_0.45fr] lg:items-center lg:p-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-accent">
              {dictionary.tourDetail.booking}
            </p>
            <h2 className="font-editorial text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl">
              {dictionary.tourDetail.booking}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-dark">
              {dictionary.tourDetail.bookingCopy}
            </p>
          </div>
          <div className="grid gap-3">
            <WhatsAppCta locale={locale} context={tour.title[locale]} />
            <ButtonLink href={getRoute("contact", locale)} variant="secondary">
              {dictionary.common.requestInfo}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TourTrust({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <section className="bg-paper py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck aria-hidden="true" className="size-5 text-accent" />
              <p className="text-sm font-semibold uppercase text-accent">
                {dictionary.tourDetail.trust}
              </p>
            </div>
            <h2 className="font-editorial mt-4 text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl">
              {dictionary.home.trust.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-dark">
              {dictionary.home.trust.copy}
            </p>
            <div className="mt-7 rounded-md border border-border bg-background p-6">
              <h3 className="text-lg font-bold text-foreground">
                {dictionary.tourDetail.cancellation}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-dark">
                {tour.cancellation[locale]}
              </p>
            </div>
          </div>
          <TourOperator operatorId={tour.operatorId} locale={locale} />
        </div>
      </Container>
    </section>
  );
}

function RelatedTrips({ locale, tour }: TourDetailPageProps) {
  const dictionary = getDictionary(locale);
  const related = tours
    .filter((item) => item.id !== tour.id)
    .map((item) => ({
      item,
      overlap: item.countries.filter((country) => tour.countries.includes(country)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 2)
    .map(({ item }) => item);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-18 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={dictionary.tourDetail.related}
          title={dictionary.tourDetail.related}
        />
        <div className="mt-10 grid gap-8">
          {related.map((item) => (
            <TourCard key={item.id} tour={item} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ListPanel({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: "check" | "x";
}) {
  return (
    <div className="rounded-md border border-border bg-background p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <FileCheck aria-hidden="true" className="size-5 text-accent" />
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-stone-dark">
            {icon === "check" ? (
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
            ) : (
              <X aria-hidden="true" className="mt-1 size-4 shrink-0 text-earth" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
