import { ShieldCheck } from "lucide-react";
import { media } from "@/data/media";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LocalizedImage } from "@/components/ui/LocalizedImage";
import { PageHero } from "@/components/sections/PageHero";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        locale={locale}
        image={media.noviSad}
        eyebrow={dictionary.about.hero.eyebrow}
        title={dictionary.about.hero.heading}
        copy={dictionary.about.hero.copy}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden rounded-md">
              <LocalizedImage
                image={media.mostar}
                locale={locale}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="grid gap-6">
              {dictionary.about.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="border-t border-border pt-5"
                >
                  <p className="text-sm font-semibold text-accent">
                    0{index + 1}
                  </p>
                  <h2 className="font-editorial mt-3 text-3xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-stone-dark">
                    {section.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-18 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 rounded-md border border-border bg-background p-6 sm:p-8 lg:grid-cols-[0.25fr_1fr_0.35fr] lg:items-center">
            <ShieldCheck aria-hidden="true" className="size-10 text-accent" />
            <p className="text-base leading-8 text-stone-dark">
              {dictionary.about.note}
            </p>
            <ButtonLink href={getRoute("trust", locale)}>
              {dictionary.footer.trust}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
