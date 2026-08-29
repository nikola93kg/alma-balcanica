import type { Metadata } from "next";
import { brand } from "@/data/brand";
import { media } from "@/data/media";
import type { Locale } from "@/lib/i18n";
import { getAlternateRoutes, getRoute, type RouteKey } from "@/lib/routes";

export const siteConfig = {
  name: brand.name,
  wordmark: brand.wordmark,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://almabalcanica.com",
  defaultOgImage: media.balkanHero.src,
};

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  routeKey?: RouteKey;
  path?: string;
  languages?: Record<string, string>;
  image?: string;
};

export function createPageMetadata({
  locale,
  routeKey,
  path,
  languages,
  title,
  description,
  image = siteConfig.defaultOgImage,
}: PageMetadataInput): Metadata {
  const canonicalPath = path ?? (routeKey ? getRoute(routeKey, locale) : "/");
  const alternateLanguages =
    languages ?? (routeKey ? getAlternateRoutes(routeKey) : undefined);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
      images: [
        {
          url: image,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function createRootMetadata(locale: Locale): Metadata {
  const title =
    locale === "en"
      ? "Serbia and Balkans tours in Spanish | Alma Balcánica"
      : "Viajes por Serbia y los Balcanes en español | Alma Balcánica";
  const description =
    locale === "en"
      ? "Discover Serbia and the Balkans with small-group trips, scheduled departures, and private experiences with Spanish-language support."
      : "Explora Serbia y los Balcanes con viajes en grupos pequeños, salidas programadas y experiencias privadas con atención en español.";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: "%s | Alma Balcánica",
    },
    description,
    openGraph: {
      siteName: siteConfig.name,
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.defaultOgImage,
          alt: siteConfig.name,
        },
      ],
    },
  };
}
