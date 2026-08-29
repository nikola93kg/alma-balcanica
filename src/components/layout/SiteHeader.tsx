"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { primaryNavigation } from "@/data/navigation";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute, getRouteKeyFromPath } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dictionary = getDictionary(locale);
  const currentRouteKey = useMemo(() => getRouteKeyFromPath(pathname), [pathname]);
  const isSolid = isScrolled || isMenuOpen;
  const alternateLocale = locale === "es" ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolid
          ? "border-b border-border/70 bg-paper/95 text-foreground shadow-[0_10px_40px_rgba(22,19,15,0.08)] backdrop-blur-md"
          : "bg-transparent text-white",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href={getRoute("home", locale)}
          className={cn(
            "focus-ring inline-flex shrink-0 rounded-sm transition-opacity hover:opacity-88",
            isSolid ? "opacity-100" : "drop-shadow-[0_10px_22px_rgba(0,0,0,0.32)]",
          )}
          aria-label={dictionary.common.brandName}
        >
          <BrandLogo priority />
          <span className="sr-only">{dictionary.common.descriptor}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {primaryNavigation.map((item) => (
            <Link
              key={item.routeKey}
              href={getRoute(item.routeKey, locale)}
              aria-current={currentRouteKey === item.routeKey ? "page" : undefined}
              className={cn(
                "focus-ring rounded-sm text-sm font-semibold transition-colors",
                isSolid ? "hover:text-accent" : "text-white/88 hover:text-white",
                currentRouteKey === item.routeKey &&
                  (isSolid ? "text-accent" : "text-white"),
              )}
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch
            locale={locale}
            href={getRoute(currentRouteKey, alternateLocale)}
            isSolid={isSolid}
          />
          <HeaderTourCta href={getRoute("tours", locale)} isSolid={isSolid}>
            {dictionary.common.viewTours}
          </HeaderTourCta>
          <WhatsAppCta
            locale={locale}
            variant={isSolid ? "secondary" : "ghost"}
            className="px-4"
          />
        </div>

        <button
          type="button"
          className={cn(
            "focus-ring inline-flex size-11 items-center justify-center rounded-md border transition-colors lg:hidden",
            isSolid
              ? "border-border bg-background text-foreground"
              : "border-white/35 bg-white/10 text-white",
          )}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-border bg-paper text-foreground lg:hidden">
          <nav
            className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-5 sm:px-8"
            aria-label="Mobile"
          >
            {primaryNavigation.map((item) => (
              <Link
                key={item.routeKey}
                href={getRoute(item.routeKey, locale)}
                onClick={() => setIsMenuOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-base font-semibold hover:bg-background"
              >
                {item.label[locale]}
              </Link>
            ))}
            <div className="mt-3 grid gap-3 border-t border-border pt-4">
              <LanguageSwitch
                locale={locale}
                href={getRoute(currentRouteKey, alternateLocale)}
                isSolid
                onClick={() => setIsMenuOpen(false)}
                className="justify-self-start"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <HeaderTourCta
                  href={getRoute("tours", locale)}
                  onClick={() => setIsMenuOpen(false)}
                  isSolid
                  className="justify-center"
                >
                  {dictionary.common.viewTours}
                </HeaderTourCta>
                <WhatsAppCta
                  locale={locale}
                  variant="secondary"
                  className="justify-center"
                />
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSwitch({
  locale,
  href,
  isSolid,
  onClick,
  className,
}: {
  locale: Locale;
  href: string;
  isSolid: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const nextLocale = locale === "es" ? "en" : "es";
  const label =
    locale === "es" ? "Ver sitio en inglés" : "View site in Spanish";

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={label}
      className={cn(
        "focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border px-3 text-xs font-bold uppercase transition-colors",
        isSolid
          ? "border-border bg-background text-foreground hover:border-accent hover:text-accent"
          : "border-white/45 bg-charcoal/24 text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] hover:bg-white hover:text-foreground",
        className,
      )}
    >
      <Globe aria-hidden="true" className="size-3.5" />
      <span>{nextLocale.toUpperCase()}</span>
    </Link>
  );
}

function HeaderTourCta({
  href,
  children,
  isSolid,
  onClick,
  className,
}: {
  href: string;
  children: React.ReactNode;
  isSolid: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(33,27,24,0.18)] transition-colors",
        isSolid
          ? "border-accent bg-accent hover:border-charcoal hover:bg-charcoal"
          : "border-white/30 bg-accent hover:border-white hover:bg-white hover:text-foreground",
        className,
      )}
    >
      <span className="whitespace-nowrap">{children}</span>
      <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
    </Link>
  );
}
