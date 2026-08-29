import type { MetadataRoute } from "next";
import {
  destinations,
  getDestinationRoute,
} from "@/data/destinations";
import {
  experienceCategories,
  getExperienceRoute,
} from "@/data/articles";
import { getTourAlternateRoutes, getTourRoute, tours } from "@/data/tours";
import { locales } from "@/lib/i18n";
import { getAlternateRoutes, getRoute, routes, type RouteKey } from "@/lib/routes";
import { siteConfig } from "@/lib/seo";

const experienceRouteKeys = new Set<RouteKey>([
  "experienceCultureHistory",
  "experienceGastronomy",
  "experienceNature",
  "experienceTraditions",
]);

function absolute(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function localizedAlternates(paths: Record<string, string>) {
  return {
    languages: Object.fromEntries(
      Object.entries(paths).map(([locale, path]) => [locale, absolute(path)]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRouteKeys = (Object.keys(routes) as RouteKey[]).filter(
    (routeKey) => !experienceRouteKeys.has(routeKey),
  );

  const staticRoutes = staticRouteKeys.flatMap((routeKey) =>
    locales.map((locale) => ({
      url: absolute(getRoute(routeKey, locale)),
      lastModified: new Date(),
      alternates: localizedAlternates(getAlternateRoutes(routeKey)),
    })),
  );

  const tourRoutes = tours.flatMap((tour) =>
    locales.map((locale) => ({
      url: absolute(getTourRoute(tour, locale)),
      lastModified: new Date(),
      alternates: localizedAlternates(getTourAlternateRoutes(tour)),
      images: [tour.heroImage.src],
    })),
  );

  const destinationRoutes = destinations.flatMap((destination) => {
    const languages = {
      es: getDestinationRoute(destination, "es"),
      "es-MX": getDestinationRoute(destination, "es"),
      en: getDestinationRoute(destination, "en"),
      "x-default": getDestinationRoute(destination, "es"),
    };

    return locales.map((locale) => ({
      url: absolute(getDestinationRoute(destination, locale)),
      lastModified: new Date(),
      alternates: localizedAlternates(languages),
      images: [destination.image.src],
    }));
  });

  const experienceRoutes = experienceCategories.flatMap((experience) => {
    const languages = {
      es: getExperienceRoute(experience, "es"),
      "es-MX": getExperienceRoute(experience, "es"),
      en: getExperienceRoute(experience, "en"),
      "x-default": getExperienceRoute(experience, "es"),
    };

    return locales.map((locale) => ({
      url: absolute(getExperienceRoute(experience, locale)),
      lastModified: new Date(),
      alternates: localizedAlternates(languages),
      images: [experience.image.src],
    }));
  });

  return [
    ...staticRoutes,
    ...tourRoutes,
    ...destinationRoutes,
    ...experienceRoutes,
  ];
}
