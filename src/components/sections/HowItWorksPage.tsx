import { CheckCircle2 } from "lucide-react";
import { media } from "@/data/media";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type HowItWorksPageProps = {
  locale: Locale;
};

export function HowItWorksPage({ locale }: HowItWorksPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        locale={locale}
        image={media.mostar}
        eyebrow={dictionary.howItWorks.hero.eyebrow}
        title={dictionary.howItWorks.hero.heading}
        copy={dictionary.howItWorks.hero.copy}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          <ol className="grid gap-4">
            {dictionary.howItWorks.steps.map((step, index) => (
              <li
                key={step}
                className="grid gap-5 rounded-md border border-border bg-paper p-6 sm:grid-cols-[80px_1fr] sm:items-center"
              >
                <span className="font-editorial text-5xl font-semibold text-accent">
                  {index + 1}
                </span>
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-accent"
                  />
                  <p className="text-base leading-8 text-stone-dark">{step}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <WhatsAppCta locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
