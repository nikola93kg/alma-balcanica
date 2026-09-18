import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { guideArticles } from "@/data/articles";
import {
  featuredDestinations,
  getDestinationRoute,
} from "@/data/destinations";
import { media } from "@/data/media";
import { featuredTours } from "@/data/tours";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { TourCard } from "@/components/travel/TourCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { LocalizedImage } from "@/components/ui/LocalizedImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} />
      <BrandIntro locale={locale} />
      <TravelWays locale={locale} />
      <FeaturedJourneys locale={locale} />
      <DestinationStorytelling locale={locale} />
      <WhyBalkans locale={locale} />
      <HumanExperience locale={locale} />
      <TrustSection locale={locale} />
      <GuideSection locale={locale} />
      <AboutSection locale={locale} />
      <FinalCta locale={locale} />
      <span className="sr-only">{dictionary.common.brandName}</span>
    </>
  );
}

function Hero({ locale }: HomePageProps) {
  const { common, home } = getDictionary(locale);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-white">
      <HeroSlideshow locale={locale} />
      <div className="image-overlay pointer-events-none absolute inset-0" />
      <Container className="relative flex min-h-[100svh] items-end pb-12 pt-32 sm:pb-14 lg:pb-16">
        <div className="max-w-4xl">
          <p className="font-editorial mb-4 text-2xl font-semibold uppercase leading-none text-white sm:text-3xl">
            {common.wordmark}
          </p>
          <h1 className="font-editorial max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
            {home.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
            {home.hero.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={getRoute("tours", locale)}>
              {common.exploreTours}
            </ButtonLink>
            <WhatsAppCta locale={locale} variant="light" />
          </div>
          <ul className="mt-9 flex max-w-3xl flex-col gap-3 border-t border-white/16 pt-4 text-sm text-white/72 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            {home.hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/8 text-accent-soft ring-1 ring-white/12">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>
                <span className="font-medium leading-5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function BrandIntro({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow={home.intro.eyebrow}
            title={home.intro.heading}
            copy={home.intro.copy}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden rounded-md border border-border bg-paper shadow-[var(--shadow-soft)] sm:min-h-[460px]">
              <LocalizedImage
                image={media.table}
                locale={locale}
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
              />
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-md border border-border bg-paper shadow-[var(--shadow-soft)] sm:mt-16 sm:min-h-[420px]">
              <LocalizedImage
                image={media.skopjeMarket}
                locale={locale}
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TravelWays({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);
  const ways = [
    {
      title: home.travelWays.guaranteed.title,
      copy: home.travelWays.guaranteed.copy,
      cta: home.travelWays.guaranteed.cta,
      href: getRoute("guaranteedDepartures", locale),
      image: media.belgradeFortress,
    },
    {
      title: home.travelWays.private.title,
      copy: home.travelWays.private.copy,
      cta: home.travelWays.private.cta,
      href: getRoute("privateTrips", locale),
      image: media.kotor,
    },
  ];

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={home.travelWays.eyebrow}
          title={home.travelWays.heading}
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {ways.map((way) => (
            <Link
              key={way.title}
              href={way.href}
              className="group focus-ring relative min-h-[430px] overflow-hidden rounded-md border border-stone/40 bg-charcoal text-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <LocalizedImage
                image={way.image}
                locale={locale}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/36 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-editorial text-4xl font-semibold leading-tight sm:text-5xl">
                  {way.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/78">
                  {way.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                  {way.cta}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedJourneys({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={home.featuredTours.eyebrow}
            title={home.featuredTours.heading}
            copy={home.featuredTours.copy}
          />
          <ButtonLink href={getRoute("tours", locale)} variant="secondary">
            {home.featuredTours.eyebrow}
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-8">
          {featuredTours.map((tour, index) => (
            <TourCard
              key={tour.id}
              tour={tour}
              locale={locale}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function DestinationStorytelling({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);
  const [primary, ...secondary] = featuredDestinations;

  return (
    <section className="bg-accent py-20 text-paper sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={home.destinations.eyebrow}
            title={home.destinations.heading}
            copy={home.destinations.copy}
            tone="inverted"
          />
          <ButtonLink href={getRoute("destinations", locale)} variant="light">
            {home.destinations.eyebrow}
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.16fr_0.84fr]">
          {primary ? (
            <DestinationPanel
              destination={primary}
              locale={locale}
              className="min-h-[560px]"
              large
            />
          ) : null}
          <div className="grid gap-5">
            {secondary.map((destination, index) => (
              <DestinationPanel
                key={destination.id}
                destination={destination}
                locale={locale}
                className={cn("min-h-[260px]", index === 1 && "lg:ml-10")}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DestinationPanel({
  destination,
  locale,
  className,
  large,
}: {
  destination: (typeof featuredDestinations)[number];
  locale: Locale;
  className?: string;
  large?: boolean;
}) {
  return (
    <Link
      href={getDestinationRoute(destination, locale)}
      className={cn(
        "group focus-ring relative overflow-hidden rounded-md border border-stone/30 bg-paper text-white",
        className,
      )}
    >
      <LocalizedImage
        image={destination.image}
        locale={locale}
        fill
        sizes={large ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 38vw, 100vw"}
        className="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/88 via-charcoal/28 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-white/72">
          <MapPin aria-hidden="true" className="size-4" />
          {destination.name[locale]}
        </p>
        <h3
          className={cn(
            "font-editorial mt-3 font-semibold leading-tight",
            large ? "text-4xl sm:text-6xl" : "text-3xl sm:text-4xl",
          )}
        >
          {destination.tagline[locale]}
        </h3>
      </div>
    </Link>
  );
}

function WhyBalkans({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow={home.whyBalkans.eyebrow}
            title={home.whyBalkans.heading}
            copy={home.whyBalkans.intro}
          />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {home.whyBalkans.themes.map((theme, index) => (
              <article
                key={theme.title}
                className="rounded-md border border-border bg-background/70 p-6 transition-colors hover:border-olive/55 hover:bg-background"
              >
                <span className="text-sm font-semibold text-stone-dark">
                  0{index + 1}
                </span>
                <h3 className="font-editorial mt-4 text-3xl font-semibold text-foreground">
                  {theme.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-dark">
                  {theme.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function HumanExperience({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow={home.details.eyebrow}
              title={home.details.heading}
              copy={home.details.copy}
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {home.details.moments.map((moment) => (
                <span
                  key={moment}
                  className="rounded-md border border-border bg-paper px-3 py-2 text-sm text-stone-dark transition-colors hover:border-olive/55 hover:bg-paper-muted"
                >
                  {moment}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-h-[520px] grid-cols-5 grid-rows-6 gap-3">
            <div className="relative col-span-3 row-span-6 overflow-hidden rounded-md border border-border bg-paper">
              <LocalizedImage
                image={media.mostar}
                locale={locale}
                fill
                sizes="(min-width: 1024px) 35vw, 60vw"
              />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-md border border-border bg-paper">
              <LocalizedImage
                image={media.table}
                locale={locale}
                fill
                sizes="(min-width: 1024px) 22vw, 40vw"
              />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-md border border-border bg-paper">
              <LocalizedImage
                image={media.berat}
                locale={locale}
                fill
                sizes="(min-width: 1024px) 22vw, 40vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustSection({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SectionHeader
            eyebrow={home.trust.eyebrow}
            title={home.trust.heading}
            copy={home.trust.copy}
          />
          <div className="rounded-md border border-border bg-paper/70 p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {home.trust.concepts.map((concept) => (
                <li key={concept} className="flex gap-3">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-accent"
                  />
                  <span className="text-sm font-semibold leading-6 text-foreground">
                    {concept}
                  </span>
                </li>
              ))}
            </ul>
            <ButtonLink href={getRoute("trust", locale)} className="mt-8">
              {home.trust.cta}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function GuideSection({ locale }: HomePageProps) {
  const { home, guidePage } = getDictionary(locale);

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={home.guide.eyebrow}
          title={home.guide.heading}
          copy={home.guide.copy}
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guideArticles.map((article) => (
            <Link
              key={article.id}
              href={article.href[locale]}
              className="group focus-ring flex min-h-64 flex-col justify-between rounded-md border border-border bg-paper p-5 transition-colors hover:border-olive/65 hover:bg-paper-muted"
            >
              <div>
                <p className="text-xs font-semibold uppercase text-accent">
                  {article.category[locale]}
                </p>
                <h3 className="mt-4 text-lg font-bold leading-6 text-foreground">
                  {article.title[locale]}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-dark">
                  {article.description[locale]}
                </p>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent">
                {guidePage.pending}
                <ArrowRight aria-hidden="true" className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AboutSection({ locale }: HomePageProps) {
  const { common, home } = getDictionary(locale);

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-border bg-paper">
            <LocalizedImage
              image={media.noviSad}
              locale={locale}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
          </div>
          <div>
            <SectionHeader
              eyebrow={home.about.eyebrow}
              title={home.about.heading}
              copy={home.about.copy}
            />
            <ButtonLink
              href={getRoute("about", locale)}
              variant="secondary"
              className="mt-8"
            >
              {common.learnMore}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta({ locale }: HomePageProps) {
  const { home } = getDictionary(locale);

  return (
    <section className="relative min-h-[72svh] overflow-hidden bg-charcoal text-paper">
      <LocalizedImage
        image={media.kotor}
        locale={locale}
        fill
        sizes="100vw"
        className="opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/82 to-charcoal/48" />
      <Container className="relative flex min-h-[72svh] items-end pb-14 pt-28">
        <div className="max-w-3xl">
          <h2 className="font-editorial text-5xl font-semibold leading-[1.02] text-paper sm:text-7xl">
            {home.finalCta.headline}
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={getRoute("tours", locale)}>
              {home.finalCta.primary}
            </ButtonLink>
            <WhatsAppCta
              locale={locale}
              label={home.finalCta.secondary}
              variant="ghost"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
