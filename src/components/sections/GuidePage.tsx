import { ArrowRight } from "lucide-react";
import { guideArticles } from "@/data/articles";
import { media } from "@/data/media";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

type GuidePageProps = {
  locale: Locale;
};

export function GuidePage({ locale }: GuidePageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        locale={locale}
        image={media.table}
        eyebrow={dictionary.guidePage.eyebrow}
        title={dictionary.guidePage.heading}
        copy={dictionary.guidePage.copy}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow={dictionary.guidePage.eyebrow}
            title={dictionary.guidePage.heading}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guideArticles.map((article) => (
              <article
                key={article.id}
                id={article.href[locale].split("#")[1]}
                className="flex min-h-72 flex-col justify-between rounded-md border border-border bg-paper p-6"
              >
                <div>
                  <p className="text-xs font-semibold uppercase text-accent">
                    {article.category[locale]}
                  </p>
                  <h2 className="mt-4 text-xl font-bold leading-7 text-foreground">
                    {article.title[locale]}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-stone-dark">
                    {article.description[locale]}
                  </p>
                </div>
                <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {dictionary.guidePage.pending}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
