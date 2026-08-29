import { BadgeCheck, FileCheck, LifeBuoy, ShieldCheck } from "lucide-react";
import { media } from "@/data/media";
import { victorTours } from "@/data/operators";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { TourOperator } from "@/components/travel/TourOperator";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type TrustPageProps = {
  locale: Locale;
};

export function TrustPage({ locale }: TrustPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        locale={locale}
        image={media.belgradeFortress}
        eyebrow={dictionary.trustPage.hero.eyebrow}
        title={dictionary.trustPage.hero.heading}
        copy={dictionary.trustPage.hero.copy}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dictionary.trustPage.sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-md border border-border bg-paper p-6"
              >
                <BadgeCheck aria-hidden="true" className="size-5 text-accent" />
                <p className="mt-5 text-sm font-semibold text-accent">
                  0{index + 1}
                </p>
                <h2 className="font-editorial mt-3 text-3xl font-semibold leading-tight text-foreground">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-dark">
                  {section.copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-18 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <ShieldCheck aria-hidden="true" className="size-8 text-accent" />
              <p className="mt-5 text-sm font-semibold uppercase text-accent">
                {dictionary.trustPage.operatorHeading}
              </p>
              <h2 className="font-editorial mt-4 text-4xl font-semibold leading-[1.04] text-foreground sm:text-6xl">
                {victorTours.name}
              </h2>
            </div>
            <TourOperator operatorId={victorTours.id} locale={locale} />
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-18 text-paper sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <LifeBuoy aria-hidden="true" className="size-8 text-accent-soft" />
              <h2 className="font-editorial mt-5 text-4xl font-semibold leading-[1.04] sm:text-6xl">
                {dictionary.trustPage.supportHeading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-paper/72">
                {dictionary.trustPage.supportCopy}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <WhatsAppCta locale={locale} variant="light" />
              <ButtonLink href={getRoute("contact", locale)} variant="light">
                {dictionary.common.contactUs}
              </ButtonLink>
              <ButtonLink
                href={getRoute("howItWorks", locale)}
                variant="light"
                className="sm:col-span-2"
                icon={<FileCheck aria-hidden="true" className="size-4" />}
              >
                {dictionary.footer.howItWorks}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
