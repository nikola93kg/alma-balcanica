import { media } from "@/data/media";
import { victorGuaranteedTours } from "@/data/victorGuaranteedTours";
import type { Locale } from "@/lib/i18n";
import type { Tour, TourDate, TourType } from "@/types/travel";

const pricePending = {
  display: {
    es: "Cotización caso por caso",
    en: "Quoted case by case",
  },
  isPlaceholder: true,
};

const privateDateRequest: TourDate = {
  id: "private-date-request",
  display: {
    es: "Según fechas del grupo",
    en: "According to the group's dates",
  },
  status: {
    es: "Solicitud privada",
    en: "Private request",
  },
  isPlaceholder: true,
};

const privateBalkansTrip = {
  id: "private-balkans-trip",
  slug: {
    es: "viaje-privado-balcanes",
    en: "private-balkans-trip",
  },
  title: {
    es: "Viaje privado por Serbia y los Balcanes",
    en: "Private journey through Serbia and the Balkans",
  },
  subtitle: {
    es: "Una base para parejas, familias y grupos cerrados que quieren viajar con atención en español.",
    en: "A foundation for couples, families, and closed groups who want Spanish-language support.",
  },
  shortDescription: {
    es: "Ruta privada diseñada alrededor del grupo, intereses, duración y destinos posibles.",
    en: "A private route shaped around the group, interests, duration, and possible destinations.",
  },
  countries: ["serbia", "bosnia-y-herzegovina", "montenegro", "croacia"],
  duration: {
    es: "A definir",
    en: "To be defined",
  },
  type: "private",
  travelStyle: {
    es: "Viaje privado / grupo cerrado",
    en: "Private trip / closed group",
  },
  groupStyle: {
    es: "Parejas, familias y grupos",
    en: "Couples, families, and groups",
  },
  languageSupport: {
    es: "Atención en español",
    en: "Spanish-language support",
  },
  transport: {
    es: "Según propuesta final",
    en: "According to the final proposal",
  },
  guaranteedDeparture: false,
  departureStatus: {
    es: "Salida privada según solicitud",
    en: "Private departure by request",
  },
  inventoryStatus: "placeholder",
  placeholderNote:
    "TODO: convertir en productos privados concretos cuando existan programas, operadores por pais y condiciones verificadas.",
  price: pricePending,
  nextDeparture: privateDateRequest,
  dates: [privateDateRequest],
  heroImage: media.kotor,
  gallery: [media.kotor, media.mostar, media.dubrovnik, media.belgradeFortress],
  route: {
    es: ["Serbia", "Bosnia y Herzegovina", "Montenegro", "Croacia"],
    en: ["Serbia", "Bosnia and Herzegovina", "Montenegro", "Croatia"],
  },
  highlights: {
    es: [
      "Diseño de ruta según intereses del grupo",
      "Atención en español antes y durante la planificación",
      "Ciudades históricas, gastronomía, naturaleza y vida local",
      "Operación y condiciones confirmadas en propuesta formal",
    ],
    en: [
      "Route design according to the group's interests",
      "Spanish-language support before and during planning",
      "Historic cities, food, nature, and local life",
      "Operation and conditions confirmed in a formal proposal",
    ],
  },
  overview: {
    es: "Los viajes privados permiten diseñar una experiencia alrededor de un grupo concreto: parejas, familias, amigos, organizaciones culturales, grupos religiosos o viajeros de México y Latinoamérica que buscan acompañamiento en español. No prometemos disponibilidad ni condiciones cerradas hasta preparar una propuesta formal con el operador correspondiente.",
    en: "Private trips make it possible to shape an experience around a specific group: couples, families, friends, cultural organizations, religious groups, or travelers from Mexico and Latin America seeking Spanish-language support. We do not promise availability or closed conditions until a formal proposal is prepared with the relevant operator.",
  },
  itinerary: [
    {
      day: 1,
      title: {
        es: "Conversación inicial",
        en: "Initial conversation",
      },
      description: {
        es: "Entendemos fechas, número de viajeros, intereses, ritmo y destinos prioritarios.",
        en: "We understand dates, number of travelers, interests, pace, and priority destinations.",
      },
    },
    {
      day: 2,
      title: {
        es: "Diseño de programa",
        en: "Program design",
      },
      description: {
        es: "Preparamos una ruta base y validamos viabilidad operativa con socios locales.",
        en: "We prepare a base route and validate operational feasibility with local partners.",
      },
    },
    {
      day: 3,
      title: {
        es: "Propuesta formal",
        en: "Formal proposal",
      },
      description: {
        es: "La propuesta final debe indicar servicios, operador, precio, condiciones y documentación aplicable.",
        en: "The final proposal should state services, operator, price, conditions, and applicable documentation.",
      },
    },
  ],
  included: {
    es: [
      "Orientación inicial en español",
      "Diseño de ruta base según intereses del grupo",
      "Coordinación con operadores locales autorizados donde corresponda",
      "Propuesta formal antes de cualquier confirmación",
    ],
    en: [
      "Initial guidance in Spanish",
      "Base route design according to group interests",
      "Coordination with authorized local operators where applicable",
      "Formal proposal before any confirmation",
    ],
  },
  notIncluded: {
    es: [
      "Precio cerrado sin diagnóstico previo",
      "Servicios no confirmados en la propuesta formal",
      "Vuelos internacionales salvo indicación futura verificada",
      "Garantías, seguros o condiciones no documentadas",
    ],
    en: [
      "Fixed price without prior assessment",
      "Services not confirmed in the formal proposal",
      "International flights unless a future verified proposal states otherwise",
      "Guarantees, insurance, or conditions that are not documented",
    ],
  },
  practicalInfo: {
    es: [
      "Las condiciones comerciales varían por tamaño de grupo, duración, ruta y servicios.",
      "La operación formal se indicará en la propuesta confirmada.",
      "No se publican precios privados genéricos porque podrían ser engañosos.",
    ],
    en: [
      "Commercial conditions vary by group size, duration, route, and services.",
      "Formal operation will be stated in the confirmed proposal.",
      "Generic private-trip prices are not published because they could be misleading.",
    ],
  },
  forWhom: {
    es: [
      "Parejas y familias que prefieren viajar a su ritmo",
      "Grupos de amigos",
      "Organizaciones culturales, educativas o religiosas",
      "Grupos privados de México y Latinoamérica",
    ],
    en: [
      "Couples and families who prefer to travel at their own pace",
      "Groups of friends",
      "Cultural, educational, or religious organizations",
      "Private groups from Mexico and Latin America",
    ],
  },
  accommodation: {
    es: "Alojamiento a definir según presupuesto, ruta, disponibilidad y propuesta formal. No se inventan hoteles ni categorías antes de confirmación.",
    en: "Accommodation to be defined according to budget, route, availability, and formal proposal. Hotels or categories are not invented before confirmation.",
  },
  cancellation: {
    es: "Las condiciones de cancelación dependerán del programa, operador y servicios contratados. La política formal se indicará cuando exista una propuesta verificable.",
    en: "Cancellation conditions will depend on the program, operator, and contracted services. The formal policy will be stated when a verifiable proposal exists.",
  },
  faqs: [
    {
      question: {
        es: "¿Puedo pedir una ruta completamente a medida?",
        en: "Can I request a fully custom route?",
      },
      answer: {
        es: "Podemos explorar una ruta privada, pero la disponibilidad, precio y operación se confirman caso por caso. Por ahora no prometemos un motor de viaje completamente personalizado.",
        en: "We can explore a private route, but availability, price, and operation are confirmed case by case. For now, we do not promise a fully custom trip engine.",
      },
    },
    {
      question: {
        es: "¿Quién opera un viaje privado?",
        en: "Who operates a private trip?",
      },
      answer: {
        es: "El operador formal se indicará en la propuesta. Victor Tours es el socio operativo autorizado confirmado para productos elegibles en Serbia.",
        en: "The formal operator will be stated in the proposal. Victor Tours is the confirmed authorized operating partner for eligible products in Serbia.",
      },
    },
    {
      question: {
        es: "¿Por qué no hay precio publicado?",
        en: "Why is there no published price?",
      },
      answer: {
        es: "Porque en viajes privados el precio depende de grupo, duración, ruta, hoteles y servicios. Publicar una cifra genérica sería poco responsable.",
        en: "Because private-trip pricing depends on group size, duration, route, hotels, and services. Publishing a generic figure would be irresponsible.",
      },
    },
  ],
} satisfies Tour;

export const tours = [...victorGuaranteedTours, privateBalkansTrip] satisfies Tour[];

export const featuredTours = tours.filter((tour) =>
  [
    "balkans-revealed-10-days",
    "balkan-experience-14-days",
    "serbia-croatia-belgrade-dubrovnik-7-days",
    "balkans-adriatic-14-days",
  ].includes(tour.id),
);

export const featuredTour = featuredTours[0];

export function getToursByType(type?: TourType) {
  if (!type) {
    return tours;
  }

  return tours.filter((tour) => tour.type === type);
}

export function getTourBySlug(slug: string, locale: Locale) {
  return tours.find((tour) => tour.slug[locale] === slug);
}

export function getTourRoute(tour: Tour, locale: Locale) {
  return locale === "es"
    ? `/viajes/${tour.slug.es}`
    : `/en/tours/${tour.slug.en}`;
}

export function getTourAlternateRoutes(tour: Tour) {
  return {
    es: getTourRoute(tour, "es"),
    "es-MX": getTourRoute(tour, "es"),
    en: getTourRoute(tour, "en"),
    "x-default": getTourRoute(tour, "es"),
  };
}
