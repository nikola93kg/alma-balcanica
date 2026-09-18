import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { getTourRoute } from "@/data/tours";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { Tour } from "@/types/travel";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LocalizedImage } from "@/components/ui/LocalizedImage";

type TourCardProps = {
  tour: Tour;
  locale: Locale;
  featured?: boolean;
  className?: string;
};

export function TourCard({ tour, locale, featured, className }: TourCardProps) {
  const dictionary = getDictionary(locale);
  const href = getTourRoute(tour, locale);
  const badge =
    tour.type === "guaranteed"
      ? dictionary.toursListing.guaranteedBadge
      : dictionary.toursListing.privateBadge;
  const countryNames = tour.countries
    .flatMap((countryId) => {
      const destination = destinations.find((item) => item.id === countryId);

      return destination ? [destination.name[locale]] : [];
    });

  return (
    <article
      className={cn(
        "grid overflow-hidden rounded-md border border-border bg-paper shadow-[var(--shadow-soft)] transition-colors hover:border-olive/55",
        featured ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[0.86fr_1.14fr]",
        className,
      )}
    >
      <Link
        href={href}
        className="focus-ring group relative min-h-[310px] overflow-hidden lg:min-h-full"
      >
        <LocalizedImage
          image={tour.heroImage}
          locale={locale}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-md border border-stone/55 bg-paper px-3 py-2 text-xs font-bold uppercase text-foreground">
          {badge}
        </span>
      </Link>

      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-accent">
            <MapPin aria-hidden="true" className="size-4" />
            {countryNames.join(" · ")}
          </p>
          <h2 className="font-editorial mt-4 text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl">
            {tour.title[locale]}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-dark">
            {tour.shortDescription[locale]}
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            <Fact icon={CalendarDays} label={tour.duration[locale]} />
            <Fact icon={Users} label={tour.groupStyle[locale]} />
            <Fact icon={MessageCircle} label={tour.languageSupport[locale]} />
          </dl>

          <dl className="mt-7 grid gap-3 rounded-md border border-border bg-background/80 p-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase text-stone-dark">
                {dictionary.toursListing.nextDeparture}
              </dt>
              <dd className="mt-2 text-sm font-bold text-foreground">
                {tour.nextDeparture.display[locale]}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase text-stone-dark">
                {dictionary.tourDetail.price}
              </dt>
              <dd className="mt-2 text-sm font-bold text-foreground">
                {tour.price.display[locale]}
              </dd>
            </div>
          </dl>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {tour.highlights[locale].slice(0, 4).map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-stone-dark">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-accent"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <ButtonLink href={href} className="mt-9 self-start">
          {dictionary.common.viewItinerary}
        </ButtonLink>
      </div>
    </article>
  );
}

function Fact({
  icon: Icon,
  label,
}: {
  icon: typeof CalendarDays;
  label: string;
}) {
  return (
    <div className="rounded-md border border-border bg-background/80 p-4">
      <Icon aria-hidden="true" className="size-5 text-accent" />
      <dd className="mt-3 text-sm font-semibold leading-6 text-foreground">
        {label}
      </dd>
    </div>
  );
}
