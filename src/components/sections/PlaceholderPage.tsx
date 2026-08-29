import { media } from "@/data/media";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import type { ImageAsset } from "@/types/travel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

type PlaceholderPageProps = {
  locale: Locale;
  title: string;
  copy?: string;
  image?: ImageAsset;
};

export function PlaceholderPage({
  locale,
  title,
  copy,
  image = media.drvengrad,
}: PlaceholderPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        locale={locale}
        image={image}
        eyebrow={dictionary.placeholder.label}
        title={title}
        copy={copy ?? dictionary.placeholder.copy}
      />
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-stone-dark">
              {dictionary.placeholder.copy}
            </p>
            <ButtonLink href={getRoute("home", locale)} className="mt-7">
              {dictionary.placeholder.cta}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
