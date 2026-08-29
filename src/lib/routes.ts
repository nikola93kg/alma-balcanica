import type { Locale } from "@/lib/i18n";

export const routes = {
  home: {
    es: "/",
    en: "/en",
  },
  tours: {
    es: "/viajes",
    en: "/en/tours",
  },
  guaranteedDepartures: {
    es: "/viajes/salidas-garantizadas",
    en: "/en/tours/guaranteed-departures",
  },
  privateTrips: {
    es: "/viajes/privados",
    en: "/en/tours/private-trips",
  },
  destinations: {
    es: "/destinos",
    en: "/en/destinations",
  },
  experiences: {
    es: "/experiencias",
    en: "/en/experiences",
  },
  experienceCultureHistory: {
    es: "/experiencias/cultura-e-historia",
    en: "/en/experiences/culture-and-history",
  },
  experienceGastronomy: {
    es: "/experiencias/gastronomia",
    en: "/en/experiences/gastronomy",
  },
  experienceNature: {
    es: "/experiencias/naturaleza",
    en: "/en/experiences/nature",
  },
  experienceTraditions: {
    es: "/experiencias/tradiciones",
    en: "/en/experiences/traditions",
  },
  guide: {
    es: "/guia",
    en: "/en/guide",
  },
  howItWorks: {
    es: "/como-funciona",
    en: "/en/how-it-works",
  },
  trust: {
    es: "/viaja-con-confianza",
    en: "/en/travel-with-confidence",
  },
  about: {
    es: "/sobre-nosotros",
    en: "/en/about",
  },
  contact: {
    es: "/contacto",
    en: "/en/contact",
  },
} as const;

export type RouteKey = keyof typeof routes;

export function getRoute(routeKey: RouteKey, locale: Locale) {
  return routes[routeKey][locale];
}

export function getAlternateRoutes(routeKey: RouteKey) {
  return {
    es: routes[routeKey].es,
    "es-MX": routes[routeKey].es,
    en: routes[routeKey].en,
    "x-default": routes[routeKey].es,
  };
}

export function getRouteKeyFromPath(pathname: string): RouteKey {
  const exact = (Object.keys(routes) as RouteKey[]).find((routeKey) =>
    (Object.values(routes[routeKey]) as readonly string[]).includes(pathname),
  );

  if (exact) {
    return exact;
  }

  if (pathname.startsWith("/viajes") || pathname.startsWith("/en/tours")) {
    return "tours";
  }

  if (
    pathname.startsWith("/destinos") ||
    pathname.startsWith("/en/destinations")
  ) {
    return "destinations";
  }

  if (
    pathname.startsWith("/experiencias") ||
    pathname.startsWith("/en/experiences")
  ) {
    return "experiences";
  }

  return "home";
}
