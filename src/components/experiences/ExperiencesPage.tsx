import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  experienceCategories,
  getExperienceRoute,
} from "@/data/articles";
import { media } from "@/data/media";
import { tours } from "@/data/tours";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { ExperienceCategory } from "@/types/travel";
import { Container } from "@/components/ui/Container";
import { LocalizedImage } from "@/components/ui/LocalizedImage";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TourCard } from "@/components/travel/TourCard";

type ExperiencesPageProps = {
  locale: Locale;
  experience?: ExperienceCategory;
};

export function ExperiencesPage({ locale, experience }: ExperiencesPageProps) {
  const dictionary = getDictionary(locale);
  const heroImage = experience?.image ?? media.table;

  return (
    <>
      <PageHero
        locale={locale}
        image={heroImage}
        eyebrow={dictionary.experiencesPage.eyebrow}
        title={experience?.name[locale] ?? dictionary.experiencesPage.heading}
        copy={experience?.description[locale] ?? dictionary.experiencesPage.copy}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          {experience ? (
            <SectionHeader
              eyebrow={experience.name[locale]}
              title={experience.tagline[locale]}
              copy={experience.description[locale]}
            />
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {experienceCategories.map((item) => (
                <ExperienceLink key={item.id} experience={item} locale={locale} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {experience ? (
        <section className="bg-paper py-18 sm:py-24 lg:py-28">
          <Container>
            <SectionHeader
              eyebrow={dictionary.experiencesPage.relatedTours}
              title={dictionary.experiencesPage.relatedTours}
              copy={dictionary.toursListing.copy}
            />
            <div className="mt-10 grid gap-8">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} locale={locale} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}

function ExperienceLink({
  experience,
  locale,
}: {
  experience: ExperienceCategory;
  locale: Locale;
}) {
  return (
    <Link
      href={getExperienceRoute(experience, locale)}
      className="group focus-ring relative min-h-[390px] overflow-hidden rounded-md bg-charcoal text-white"
    >
      <LocalizedImage
        image={experience.image}
        locale={locale}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/86 via-charcoal/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h2 className="font-editorial text-3xl font-semibold leading-tight">
          {experience.name[locale]}
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/74">
          {experience.tagline[locale]}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
          {experience.name[locale]}
          <ArrowRight aria-hidden="true" className="size-4" />
        </span>
      </div>
    </Link>
  );
}
