import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { destinations, getDestinationRoute } from "@/data/destinations";
import { experienceCategories, getExperienceRoute } from "@/data/articles";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/ui/Container";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const dictionary = getDictionary(locale);

  return (
    <footer className="border-t border-border bg-charcoal pb-20 text-paper lg:pb-0">
      <Container className="py-14 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link
              href={getRoute("home", locale)}
              className="focus-ring inline-flex rounded-sm bg-paper/94 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              aria-label={dictionary.common.brandName}
            >
              <BrandLogo variant="footer" />
              <span className="sr-only">{dictionary.common.descriptor}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-paper/70">
              {dictionary.footer.intro}
            </p>
            <div className="mt-7">
              <WhatsAppCta locale={locale} variant="ghost" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn
              title={dictionary.footer.columns.tours}
              links={[
                { label: dictionary.nav.tours, href: getRoute("tours", locale) },
                {
                  label: dictionary.footer.guaranteedDepartures,
                  href: getRoute("guaranteedDepartures", locale),
                },
                {
                  label: dictionary.footer.privateTrips,
                  href: getRoute("privateTrips", locale),
                },
              ]}
            />
            <FooterColumn
              title={dictionary.footer.columns.destinations}
              links={destinations.slice(0, 6).map((destination) => ({
                label: destination.name[locale],
                href: getDestinationRoute(destination, locale),
              }))}
            />
            <FooterColumn
              title={dictionary.footer.columns.experiences}
              links={experienceCategories.map((experience) => ({
                label: experience.name[locale],
                href: getExperienceRoute(experience, locale),
              }))}
            />
            <FooterColumn
              title={dictionary.footer.columns.legal}
              links={[
                { label: dictionary.nav.guide, href: getRoute("guide", locale) },
                {
                  label: dictionary.footer.howItWorks,
                  href: getRoute("howItWorks", locale),
                },
                { label: dictionary.footer.trust, href: getRoute("trust", locale) },
                { label: dictionary.nav.about, href: getRoute("about", locale) },
                {
                  label: dictionary.footer.columns.contact,
                  href: getRoute("contact", locale),
                },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[auto_1fr]">
          <ShieldCheck aria-hidden="true" className="size-5 text-accent-soft" />
          <div>
            <p className="max-w-4xl text-xs leading-6 text-paper/58">
              {dictionary.footer.operatorNotice}
            </p>
            <p className="mt-4 text-xs text-paper/45">
              © {new Date().getFullYear()} {dictionary.common.brandName}.{" "}
              {dictionary.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-paper">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="focus-ring rounded-sm text-sm text-paper/65 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
