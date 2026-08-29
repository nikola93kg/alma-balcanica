import { Mail, MessageCircle } from "lucide-react";
import { contactChannels, getWhatsAppHref } from "@/data/brand";
import { media } from "@/data/media";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  const dictionary = getDictionary(locale);
  const whatsappHref = getWhatsAppHref(locale);

  return (
    <>
      <PageHero
        locale={locale}
        image={media.balkanHero}
        eyebrow={dictionary.contact.hero.eyebrow}
        title={dictionary.contact.hero.heading}
        copy={dictionary.contact.hero.copy}
      />

      <section className="bg-background py-18 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="grid content-start gap-4">
              <div
                id="whatsapp"
                className="rounded-md border border-border bg-paper p-6 sm:p-8"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="size-6 text-accent"
                />
                <h2 className="font-editorial mt-5 text-3xl font-semibold text-foreground">
                  {dictionary.contact.whatsapp.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-dark">
                  {whatsappHref
                    ? dictionary.contact.whatsapp.configured
                    : dictionary.contact.whatsapp.missing}
                </p>
                <div className="mt-6">
                  <WhatsAppCta locale={locale} />
                </div>
              </div>
              <div className="rounded-md border border-border bg-paper p-6 sm:p-8">
                <Mail aria-hidden="true" className="size-6 text-accent" />
                <h2 className="font-editorial mt-5 text-3xl font-semibold text-foreground">
                  Email
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-dark">
                  {contactChannels.email || dictionary.contact.email.missing}
                </p>
              </div>
            </aside>

            <div>
              <h2 className="font-editorial text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl">
                {dictionary.contact.formTitle}
              </h2>
              <div className="mt-7">
                <ContactForm locale={locale} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
