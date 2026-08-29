import type { PropsWithChildren } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Locale } from "@/lib/i18n";
import { FloatingWhatsAppCta } from "@/components/ui/WhatsAppCta";

type LocaleLayoutProps = PropsWithChildren<{
  locale: Locale;
}>;

export function LocaleLayout({ children, locale }: LocaleLayoutProps) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <FloatingWhatsAppCta locale={locale} />
      <SiteFooter locale={locale} />
    </>
  );
}
