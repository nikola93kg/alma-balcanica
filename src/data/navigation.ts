import type { Locale } from "@/lib/i18n";
import type { RouteKey } from "@/lib/routes";

export type NavigationItem = {
  routeKey: RouteKey;
  label: Record<Locale, string>;
};

export const primaryNavigation = [
  {
    routeKey: "tours",
    label: {
      es: "Viajes",
      en: "Tours",
    },
  },
  {
    routeKey: "destinations",
    label: {
      es: "Destinos",
      en: "Destinations",
    },
  },
  {
    routeKey: "experiences",
    label: {
      es: "Experiencias",
      en: "Experiences",
    },
  },
  {
    routeKey: "guide",
    label: {
      es: "Guía de los Balcanes",
      en: "Balkans Guide",
    },
  },
  {
    routeKey: "about",
    label: {
      es: "Sobre nosotros",
      en: "About",
    },
  },
] satisfies NavigationItem[];
