import { media } from "@/data/media";
import type {
  ImageAsset,
  LocalizedValue,
  Tour,
  TourDate,
  TourDay,
} from "@/types/travel";

const sourceCheckedNote =
  "Datos publicos consultados en Victor Tours el 2026-08-29. Reconfirmar cupo, idioma de guia, precio final, condiciones de pago/cancelacion y contrato antes de venta.";

const availabilityStatus = {
  es: "Publicado por Victor Tours; confirmar cupo antes de reservar",
  en: "Published by Victor Tours; confirm space before booking",
};

const tourNotIncluded = {
  es: [
    "Vuelos internacionales",
    "Comidas y bebidas no indicadas como incluidas",
    "Gastos personales, propinas y experiencias opcionales",
    "Entradas no indicadas en el programa confirmado",
    "Visas, requisitos migratorios y seguro de viaje personal",
  ],
  en: [
    "International flights",
    "Meals and drinks not listed as included",
    "Personal expenses, tips, and optional experiences",
    "Entrance fees not listed in the confirmed program",
    "Visas, entry requirements, and personal travel insurance",
  ],
};

const cancellation = {
  es: "Las condiciones completas de pago, cambios y cancelación aplicables son las condiciones vigentes de Victor Tours para esta salida. Se revisan con el viajero antes de confirmar la reserva.",
  en: "The applicable payment, change, and cancellation terms are Victor Tours' current terms for this departure. They are reviewed with the traveler before booking confirmation.",
};

function fromPrice(amount: string, amountNumber: number) {
  return {
    display: {
      es: `Desde ${amount} € por persona`,
      en: `From €${amount} per person`,
    },
    currency: "EUR",
    amount: amountNumber,
    isPlaceholder: false,
  };
}

function date(
  id: string,
  es: string,
  en: string,
  startDate: string,
  endDate: string,
  price: LocalizedValue<string>,
): TourDate {
  return {
    id,
    display: { es, en },
    price,
    status: availabilityStatus,
    startDate,
    endDate,
    isPlaceholder: false,
  };
}

function itinerary(items: Array<LocalizedValue<string>>): TourDay[] {
  return items.map((title, index) => ({
    day: index + 1,
    title,
    description: {
      es: `Jornada del programa: ${title.es}. Los horarios, visitas y servicios se confirman en la documentación final del operador.`,
      en: `Program day: ${title.en}. Timings, visits, and services are confirmed in the operator's final documentation.`,
    },
  }));
}

function commonIncluded({
  nights,
  meals,
  entrances,
}: {
  nights: LocalizedValue<string>;
  meals: LocalizedValue<string>;
  entrances: LocalizedValue<string>;
}) {
  return {
    es: [
      "Grupo pequeño de hasta 15 viajeros por salida, según inventario de Victor Tours",
      "Traslados de llegada y salida indicados en el programa",
      "Transporte durante la ruta en vehículo moderno con aire acondicionado",
      "Guías profesionales durante el recorrido; idioma de guiado a confirmar para cada salida",
      nights.es,
      meals.es,
      entrances.es,
      "Organización y asistencia operativa 24/7 por Victor Tours",
    ],
    en: [
      "Small group of up to 15 travelers per departure, according to Victor Tours inventory",
      "Arrival and departure transfers listed in the program",
      "Transportation during the route in a modern air-conditioned vehicle",
      "Professional guides during the trip; guide language to be confirmed for each departure",
      nights.en,
      meals.en,
      entrances.en,
      "Trip organization and operational 24/7 assistance by Victor Tours",
    ],
  };
}

function practicalInfo() {
  return {
    es: [
      "Precios por persona en habitación doble/twin; suplemento individual separado en la documentación del operador.",
      "Las tarifas 2027 pueden reflejar descuento de reserva anticipada publicado por Victor Tours; se reconfirman antes del pago.",
      "Alma Balcánica atiende y orienta en español; el idioma exacto de guiado de cada salida se confirma antes de reservar.",
      "Cupo, hoteles finales, condiciones y documentación se validan antes de aceptar cualquier pago.",
    ],
    en: [
      "Prices are per person in double/twin room; single supplement is listed separately in the operator documentation.",
      "2027 fares may reflect early-booking discounts published by Victor Tours; they are reconfirmed before payment.",
      "Alma Balcánica provides Spanish-language guidance; the exact guide language for each departure is confirmed before booking.",
      "Space, final hotels, terms, and documentation are validated before accepting any payment.",
    ],
  };
}

function faqs() {
  return [
    {
      question: {
        es: "¿Quién opera formalmente esta salida?",
        en: "Who formally operates this departure?",
      },
      answer: {
        es: "Esta salida es operada por Victor Tours, operador turístico autorizado en Serbia con licencia OTP 22/2025, Categoría A.",
        en: "This departure is operated by Victor Tours, an authorized tour operator in Serbia with license OTP 22/2025, Category A.",
      },
    },
    {
      question: {
        es: "¿La atención es en español?",
        en: "Is Spanish-language support available?",
      },
      answer: {
        es: "Sí. Alma Balcánica atiende y orienta en español. Victor Tours confirmó disponibilidad de guías licenciados hispanohablantes, pero el idioma concreto de guiado se valida antes de confirmar cada salida.",
        en: "Yes. Alma Balcánica provides Spanish-language support and guidance. Victor Tours confirmed licensed Spanish-speaking guides are available, but the specific guiding language is validated before each departure is confirmed.",
      },
    },
    {
      question: {
        es: "¿El precio incluye vuelos?",
        en: "Are flights included?",
      },
      answer: {
        es: "No. Los vuelos internacionales no están incluidos en estos precios publicados.",
        en: "No. International flights are not included in these published prices.",
      },
    },
    {
      question: {
        es: "¿Tengo que confirmar disponibilidad?",
        en: "Do I need to confirm availability?",
      },
      answer: {
        es: "Sí. Las fechas y tarifas vienen del inventario público de Victor Tours, pero cupo, precio final y condiciones se reconfirman antes de avanzar con la reserva.",
        en: "Yes. Dates and fares come from Victor Tours' public inventory, but space, final price, and terms are reconfirmed before moving forward with the booking.",
      },
    },
  ];
}

function makeVictorTour({
  id,
  slug,
  title,
  subtitle,
  shortDescription,
  countries,
  durationDays,
  duration,
  travelStyle,
  departureStatus,
  price,
  nextDeparture,
  dates,
  heroImage,
  gallery,
  route,
  highlights,
  overview,
  itineraryItems,
  accommodation,
  included,
  sourceUrl,
}: {
  id: string;
  slug: LocalizedValue<string>;
  title: LocalizedValue<string>;
  subtitle: LocalizedValue<string>;
  shortDescription: LocalizedValue<string>;
  countries: string[];
  durationDays: number;
  duration?: LocalizedValue<string>;
  travelStyle: LocalizedValue<string>;
  departureStatus: LocalizedValue<string>;
  price: Tour["price"];
  nextDeparture: TourDate;
  dates: TourDate[];
  heroImage: ImageAsset;
  gallery: ImageAsset[];
  route: LocalizedValue<string[]>;
  highlights: LocalizedValue<string[]>;
  overview: LocalizedValue<string>;
  itineraryItems: Array<LocalizedValue<string>>;
  accommodation: LocalizedValue<string>;
  included: LocalizedValue<string[]>;
  sourceUrl: string;
}): Tour {
  return {
    id,
    slug,
    title,
    subtitle,
    shortDescription,
    countries,
    duration: duration ?? {
      es: `${durationDays} días`,
      en: `${durationDays} days`,
    },
    durationDays,
    type: "guaranteed",
    travelStyle,
    groupStyle: {
      es: "Grupo pequeño",
      en: "Small group",
    },
    languageSupport: {
      es: "Atención en español",
      en: "Spanish-language support",
    },
    transport: {
      es: "Transporte durante la ruta",
      en: "Transportation during the route",
    },
    guaranteedDeparture: true,
    departureStatus,
    inventoryStatus: "active",
    placeholderNote: sourceCheckedNote,
    price,
    nextDeparture,
    dates,
    operatorId: "victor-tours",
    sourceUrl,
    heroImage,
    gallery,
    route,
    highlights,
    overview,
    itinerary: itinerary(itineraryItems),
    included,
    notIncluded: tourNotIncluded,
    practicalInfo: practicalInfo(),
    forWhom: {
      es: [
        "Viajeros que quieren una salida programada con fechas y ruta claras",
        "Personas que prefieren grupos pequeños y logística organizada",
        "Viajeros hispanohablantes que buscan orientación antes de reservar",
        "Quienes quieren combinar varios países sin armar todo por cuenta propia",
      ],
      en: [
        "Travelers who want a scheduled departure with clear dates and route",
        "People who prefer small groups and organized logistics",
        "Spanish-speaking travelers seeking guidance before booking",
        "Those who want to combine several countries without arranging everything alone",
      ],
    },
    accommodation,
    cancellation,
    faqs: faqs(),
  };
}

const serbiaCroatiaDates = [
  date(
    "serbia-croatia-2026-09-06",
    "6-12 septiembre 2026",
    "6-12 September 2026",
    "2026-09-06",
    "2026-09-12",
    {
      es: "Classic: 2,006 € · Upgraded: 2,381 €",
      en: "Classic: €2,006 · Upgraded: €2,381",
    },
  ),
  date(
    "serbia-croatia-2026-10-04",
    "4-10 octubre 2026",
    "4-10 October 2026",
    "2026-10-04",
    "2026-10-10",
    {
      es: "Classic: 1,835 € · Upgraded: 2,153 €",
      en: "Classic: €1,835 · Upgraded: €2,153",
    },
  ),
  date(
    "serbia-croatia-2027-05-02",
    "2-8 mayo 2027",
    "2-8 May 2027",
    "2027-05-02",
    "2027-05-08",
    {
      es: "Classic: 1,695 € · Upgraded: 1,989 €",
      en: "Classic: €1,695 · Upgraded: €1,989",
    },
  ),
  date(
    "serbia-croatia-2027-07-04",
    "4-10 julio 2027",
    "4-10 July 2027",
    "2027-07-04",
    "2027-07-10",
    {
      es: "Classic: 1,855 € · Upgraded: 2,199 €",
      en: "Classic: €1,855 · Upgraded: €2,199",
    },
  ),
  date(
    "serbia-croatia-2027-10-03",
    "3-9 octubre 2027",
    "3-9 October 2027",
    "2027-10-03",
    "2027-10-09",
    {
      es: "Classic: 1,695 € · Upgraded: 1,989 €",
      en: "Classic: €1,695 · Upgraded: €1,989",
    },
  ),
];

const revealedDates = [
  date(
    "revealed-2026-09-06",
    "6-15 septiembre 2026",
    "6-15 September 2026",
    "2026-09-06",
    "2026-09-15",
    {
      es: "Classic: 2,459 € · Upgraded: 2,994 €",
      en: "Classic: €2,459 · Upgraded: €2,994",
    },
  ),
  date(
    "revealed-2026-10-04",
    "4-13 octubre 2026",
    "4-13 October 2026",
    "2026-10-04",
    "2026-10-13",
    {
      es: "Classic: 2,289 € · Upgraded: 2,767 €",
      en: "Classic: €2,289 · Upgraded: €2,767",
    },
  ),
  date(
    "revealed-2027-05-02",
    "2-11 mayo 2027",
    "2-11 May 2027",
    "2027-05-02",
    "2027-05-11",
    {
      es: "Classic: 2,115 € · Upgraded: 2,555 €",
      en: "Classic: €2,115 · Upgraded: €2,555",
    },
  ),
  date(
    "revealed-2027-07-04",
    "4-13 julio 2027",
    "4-13 July 2027",
    "2027-07-04",
    "2027-07-13",
    {
      es: "Classic: 2,275 € · Upgraded: 2,765 €",
      en: "Classic: €2,275 · Upgraded: €2,765",
    },
  ),
  date(
    "revealed-2027-10-03",
    "3-12 octubre 2027",
    "3-12 October 2027",
    "2027-10-03",
    "2027-10-12",
    {
      es: "Classic: 2,115 € · Upgraded: 2,555 €",
      en: "Classic: €2,115 · Upgraded: €2,555",
    },
  ),
];

const balkanExperienceDates = [
  date(
    "experience-2026-10-10",
    "10-23 octubre 2026",
    "10-23 October 2026",
    "2026-10-10",
    "2026-10-23",
    {
      es: "Classic: 2,712 € · Upgraded: 2,985 €",
      en: "Classic: €2,712 · Upgraded: €2,985",
    },
  ),
  date(
    "experience-2027-04-10",
    "10-23 abril 2027",
    "10-23 April 2027",
    "2027-04-10",
    "2027-04-23",
    {
      es: "Classic: 2,505 € · Upgraded: 3,029 €",
      en: "Classic: €2,505 · Upgraded: €3,029",
    },
  ),
  date(
    "experience-2027-07-10",
    "10-23 julio 2027",
    "10-23 July 2027",
    "2027-07-10",
    "2027-07-23",
    {
      es: "Classic: 2,559 € · Upgraded: 3,125 €",
      en: "Classic: €2,559 · Upgraded: €3,125",
    },
  ),
  date(
    "experience-2027-10-09",
    "9-22 octubre 2027",
    "9-22 October 2027",
    "2027-10-09",
    "2027-10-22",
    {
      es: "Classic: 2,505 € · Upgraded: 3,029 €",
      en: "Classic: €2,505 · Upgraded: €3,029",
    },
  ),
];

const expressDates = [
  date(
    "express-2026-10-10",
    "10-17 octubre 2026",
    "10-17 October 2026",
    "2026-10-10",
    "2026-10-17",
    {
      es: "Classic: 1,465 € · Upgraded: 1,710 €",
      en: "Classic: €1,465 · Upgraded: €1,710",
    },
  ),
  date(
    "express-2027-04-10",
    "10-17 abril 2027",
    "10-17 April 2027",
    "2027-04-10",
    "2027-04-17",
    {
      es: "Classic: 1,355 € · Upgraded: 1,579 €",
      en: "Classic: €1,355 · Upgraded: €1,579",
    },
  ),
  date(
    "express-2027-07-10",
    "10-17 julio 2027",
    "10-17 July 2027",
    "2027-07-10",
    "2027-07-17",
    {
      es: "Classic: 1,355 € · Upgraded: 1,579 €",
      en: "Classic: €1,355 · Upgraded: €1,579",
    },
  ),
  date(
    "express-2027-10-09",
    "9-16 octubre 2027",
    "9-16 October 2027",
    "2027-10-09",
    "2027-10-16",
    {
      es: "Classic: 1,355 € · Upgraded: 1,579 €",
      en: "Classic: €1,355 · Upgraded: €1,579",
    },
  ),
];

const adriaticDates = [
  date(
    "adriatic-2026-09-06",
    "6-19 septiembre 2026",
    "6-19 September 2026",
    "2026-09-06",
    "2026-09-19",
    {
      es: "Classic: 3,517 € · Upgraded agotado",
      en: "Classic: €3,517 · Upgraded sold out",
    },
  ),
  date(
    "adriatic-2026-10-04",
    "4-17 octubre 2026",
    "4-17 October 2026",
    "2026-10-04",
    "2026-10-17",
    {
      es: "Classic: 3,347 € · Upgraded: 3,881 €",
      en: "Classic: €3,347 · Upgraded: €3,881",
    },
  ),
  date(
    "adriatic-2027-05-02",
    "2-15 mayo 2027",
    "2-15 May 2027",
    "2027-05-02",
    "2027-05-15",
    {
      es: "Classic: 3,095 € · Upgraded: 3,585 €",
      en: "Classic: €3,095 · Upgraded: €3,585",
    },
  ),
  date(
    "adriatic-2027-07-04",
    "4-17 julio 2027",
    "4-17 July 2027",
    "2027-07-04",
    "2027-07-17",
    {
      es: "Classic: 3,249 € · Upgraded: 3,795 €",
      en: "Classic: €3,249 · Upgraded: €3,795",
    },
  ),
  date(
    "adriatic-2027-10-03",
    "3-16 octubre 2027",
    "3-16 October 2027",
    "2027-10-03",
    "2027-10-16",
    {
      es: "Classic: 3,095 € · Upgraded: 3,585 €",
      en: "Classic: €3,095 · Upgraded: €3,585",
    },
  ),
];

const bigTourDates = [
  date(
    "big-tour-2026-09-06",
    "6-26 septiembre 2026",
    "6-26 September 2026",
    "2026-09-06",
    "2026-09-26",
    {
      es: "Upgraded: 5,858 € · Classic agotado",
      en: "Upgraded: €5,858 · Classic sold out",
    },
  ),
  date(
    "big-tour-2026-10-04",
    "4-24 octubre 2026",
    "4-24 October 2026",
    "2026-10-04",
    "2026-10-24",
    {
      es: "Upgraded: 5,858 € · Classic agotado",
      en: "Upgraded: €5,858 · Classic sold out",
    },
  ),
  date(
    "big-tour-2027-05-02",
    "2-22 mayo 2027",
    "2-22 May 2027",
    "2027-05-02",
    "2027-05-22",
    {
      es: "Classic: 4,735 € · Upgraded: 5,415 €",
      en: "Classic: €4,735 · Upgraded: €5,415",
    },
  ),
  date(
    "big-tour-2027-07-04",
    "4-24 julio 2027",
    "4-24 July 2027",
    "2027-07-04",
    "2027-07-24",
    {
      es: "Classic: 4,895 € · Upgraded: 5,625 €",
      en: "Classic: €4,895 · Upgraded: €5,625",
    },
  ),
  date(
    "big-tour-2027-10-03",
    "3-23 octubre 2027",
    "3-23 October 2027",
    "2027-10-03",
    "2027-10-23",
    {
      es: "Classic: 4,735 € · Upgraded: 5,415 €",
      en: "Classic: €4,735 · Upgraded: €5,415",
    },
  ),
];

const castlesDates = [
  date(
    "castles-2026-09-13",
    "13-26 septiembre 2026",
    "13-26 September 2026",
    "2026-09-13",
    "2026-09-26",
    {
      es: "Upgraded: 3,185 € · Classic agotado",
      en: "Upgraded: €3,185 · Classic sold out",
    },
  ),
  date(
    "castles-2026-10-11",
    "11-24 octubre 2026",
    "11-24 October 2026",
    "2026-10-11",
    "2026-10-24",
    {
      es: "Upgraded: 3,185 € · Classic agotado",
      en: "Upgraded: €3,185 · Classic sold out",
    },
  ),
  date(
    "castles-2027-05-09",
    "9-22 mayo 2027",
    "9-22 May 2027",
    "2027-05-09",
    "2027-05-22",
    {
      es: "Classic: 2,819 € · Upgraded: 3,235 €",
      en: "Classic: €2,819 · Upgraded: €3,235",
    },
  ),
  date(
    "castles-2027-07-11",
    "11-24 julio 2027",
    "11-24 July 2027",
    "2027-07-11",
    "2027-07-24",
    {
      es: "Classic: 2,819 € · Upgraded: 3,235 €",
      en: "Classic: €2,819 · Upgraded: €3,235",
    },
  ),
  date(
    "castles-2027-10-10",
    "10-23 octubre 2027",
    "10-23 October 2027",
    "2027-10-10",
    "2027-10-23",
    {
      es: "Classic: 2,819 € · Upgraded: 3,235 €",
      en: "Classic: €2,819 · Upgraded: €3,235",
    },
  ),
];

const capitalsDates = [
  date(
    "capitals-2027-05-11",
    "11-22 mayo 2027",
    "11-22 May 2027",
    "2027-05-11",
    "2027-05-22",
    {
      es: "Classic: 2,685 € · Upgraded: 3,025 €",
      en: "Classic: €2,685 · Upgraded: €3,025",
    },
  ),
  date(
    "capitals-2027-06-08",
    "8-19 junio 2027",
    "8-19 June 2027",
    "2027-06-08",
    "2027-06-19",
    {
      es: "Classic: 2,685 € · Upgraded: 3,025 €",
      en: "Classic: €2,685 · Upgraded: €3,025",
    },
  ),
  date(
    "capitals-2027-08-10",
    "10-21 agosto 2027",
    "10-21 August 2027",
    "2027-08-10",
    "2027-08-21",
    {
      es: "Classic: 2,685 € · Upgraded: 3,025 €",
      en: "Classic: €2,685 · Upgraded: €3,025",
    },
  ),
  date(
    "capitals-2027-10-12",
    "12-23 octubre 2027",
    "12-23 October 2027",
    "2027-10-12",
    "2027-10-23",
    {
      es: "Classic: 2,685 € · Upgraded: 3,025 €",
      en: "Classic: €2,685 · Upgraded: €3,025",
    },
  ),
];

const serbiaRomaniaBulgariaDates = [
  date(
    "serbia-romania-bulgaria-2027-05-11",
    "11-22 mayo 2027",
    "11-22 May 2027",
    "2027-05-11",
    "2027-05-22",
    {
      es: "Classic: 2,389 € · Upgraded: 2,755 €",
      en: "Classic: €2,389 · Upgraded: €2,755",
    },
  ),
  date(
    "serbia-romania-bulgaria-2027-06-08",
    "8-19 junio 2027",
    "8-19 June 2027",
    "2027-06-08",
    "2027-06-19",
    {
      es: "Classic: 2,389 € · Upgraded: 2,755 €",
      en: "Classic: €2,389 · Upgraded: €2,755",
    },
  ),
  date(
    "serbia-romania-bulgaria-2027-08-10",
    "10-21 agosto 2027",
    "10-21 August 2027",
    "2027-08-10",
    "2027-08-21",
    {
      es: "Classic: 2,389 € · Upgraded: 2,755 €",
      en: "Classic: €2,389 · Upgraded: €2,755",
    },
  ),
  date(
    "serbia-romania-bulgaria-2027-10-12",
    "12-23 octubre 2027",
    "12-23 October 2027",
    "2027-10-12",
    "2027-10-23",
    {
      es: "Classic: 2,389 € · Upgraded: 2,755 €",
      en: "Classic: €2,389 · Upgraded: €2,755",
    },
  ),
];

export const victorGuaranteedTours = [
  makeVictorTour({
    id: "serbia-croatia-belgrade-dubrovnik-7-days",
    slug: {
      es: "serbia-y-croacia-belgrado-dubrovnik-7-dias",
      en: "serbia-croatia-belgrade-dubrovnik-7-days",
    },
    title: {
      es: "Serbia y Croacia: de Belgrado a Dubrovnik",
      en: "Serbia & Croatia: Belgrade to Dubrovnik",
    },
    subtitle: {
      es: "Una ruta compacta entre Belgrado, Zagreb, Plitvice, Split y Dubrovnik.",
      en: "A compact route through Belgrade, Zagreb, Plitvice, Split, and Dubrovnik.",
    },
    shortDescription: {
      es: "Capital serbia, costa dálmata, lagos de Plitvice y Dubrovnik en una salida de grupo pequeño.",
      en: "Serbia's capital, the Dalmatian coast, Plitvice Lakes, and Dubrovnik in a small-group departure.",
    },
    countries: ["serbia", "croacia"],
    durationDays: 7,
    travelStyle: {
      es: "Serbia, Croacia y costa adriática",
      en: "Serbia, Croatia, and the Adriatic coast",
    },
    departureStatus: {
      es: "Próxima salida: 6 septiembre 2026",
      en: "Next departure: 6 September 2026",
    },
    price: fromPrice("2,006", 2006),
    nextDeparture: serbiaCroatiaDates[0],
    dates: serbiaCroatiaDates,
    heroImage: media.dubrovnik,
    gallery: [media.dubrovnik, media.heroBelgrade, media.belgradeFortress],
    route: {
      es: ["Belgrado", "Zagreb", "Lagos de Plitvice", "Split", "Dubrovnik"],
      en: ["Belgrade", "Zagreb", "Plitvice Lakes", "Split", "Dubrovnik"],
    },
    highlights: {
      es: [
        "Belgrado y el encuentro del Sava y el Danubio",
        "Zagreb y su centro histórico",
        "Lagos de Plitvice, patrimonio UNESCO",
        "Split y el Palacio de Diocleciano",
        "Dubrovnik y el Adriático amurallado",
      ],
      en: [
        "Belgrade and the Sava-Danube confluence",
        "Zagreb and its historic center",
        "UNESCO-listed Plitvice Lakes",
        "Split and Diocletian's Palace",
        "Dubrovnik and the walled Adriatic",
      ],
    },
    overview: {
      es: "Salida garantizada operada por Victor Tours para viajeros que quieren unir Serbia y la costa croata en una semana, con logística cerrada y ritmo de grupo pequeño.",
      en: "A guaranteed departure operated by Victor Tours for travelers who want to connect Serbia and the Croatian coast in one week, with fixed logistics and a small-group pace.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado esencial", en: "Explore Belgrade" },
      { es: "Traslado a Zagreb y visita a pie", en: "Transfer to Zagreb and walking tour" },
      { es: "Lagos de Plitvice y costa dálmata", en: "Plitvice Lakes and Dalmatian Coast" },
      { es: "Split y Palacio de Diocleciano", en: "Split and Diocletian's Palace" },
      { es: "Dubrovnik, la Perla del Adriático", en: "Dubrovnik, the Pearl of the Adriatic" },
      { es: "Salida desde Dubrovnik", en: "Departure from Dubrovnik" },
    ],
    accommodation: {
      es: "6 noches en hoteles 4* o 5* según paquete Classic o Upgraded y disponibilidad confirmada por Victor Tours.",
      en: "6 nights in 4* or 5* hotels according to Classic or Upgraded package and availability confirmed by Victor Tours.",
    },
    included: commonIncluded({
      nights: {
        es: "6 noches de alojamiento en Belgrado, Zagreb, Split y Dubrovnik",
        en: "6 nights of accommodation in Belgrade, Zagreb, Split, and Dubrovnik",
      },
      meals: {
        es: "6 desayunos",
        en: "6 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo Templo de San Sava y Lagos de Plitvice",
        en: "Operator-listed entrance fees, including Saint Sava Temple and Plitvice Lakes",
      },
    }),
    sourceUrl: "https://www.victortours.com/tours/serbia-croatia-in-one-week/",
  }),
  makeVictorTour({
    id: "balkans-revealed-10-days",
    slug: {
      es: "balcanes-revelados-10-dias",
      en: "balkans-revealed-10-days",
    },
    title: {
      es: "Balcanes revelados: 4 países",
      en: "The Balkans Revealed: 4 countries",
    },
    subtitle: {
      es: "Serbia, Croacia, Montenegro y Bosnia y Herzegovina en diez días.",
      en: "Serbia, Croatia, Montenegro, and Bosnia and Herzegovina in ten days.",
    },
    shortDescription: {
      es: "Belgrado, costa croata, bahía de Kotor, Mostar y Sarajevo en una ruta muy completa.",
      en: "Belgrade, the Croatian coast, Bay of Kotor, Mostar, and Sarajevo in a complete route.",
    },
    countries: ["serbia", "croacia", "montenegro", "bosnia-y-herzegovina"],
    durationDays: 10,
    travelStyle: {
      es: "Ciudades históricas y Adriático",
      en: "Historic cities and the Adriatic",
    },
    departureStatus: {
      es: "Próxima salida: 6 septiembre 2026",
      en: "Next departure: 6 September 2026",
    },
    price: fromPrice("2,459", 2459),
    nextDeparture: revealedDates[0],
    dates: revealedDates,
    heroImage: media.mostar,
    gallery: [media.mostar, media.dubrovnik, media.kotor, media.heroBelgrade],
    route: {
      es: [
        "Belgrado",
        "Zagreb",
        "Plitvice",
        "Split",
        "Dubrovnik",
        "Montenegro",
        "Mostar",
        "Sarajevo",
        "Belgrado",
      ],
      en: [
        "Belgrade",
        "Zagreb",
        "Plitvice",
        "Split",
        "Dubrovnik",
        "Montenegro",
        "Mostar",
        "Sarajevo",
        "Belgrade",
      ],
    },
    highlights: {
      es: [
        "Serbia, Croacia, Montenegro y Bosnia y Herzegovina",
        "Plitvice, Split y Dubrovnik",
        "Bahía de Kotor y Perast",
        "Mostar, Blagaj y el valle del Neretva",
        "Sarajevo con lectura cultural e histórica",
      ],
      en: [
        "Serbia, Croatia, Montenegro, and Bosnia and Herzegovina",
        "Plitvice, Split, and Dubrovnik",
        "Bay of Kotor and Perast",
        "Mostar, Blagaj, and the Neretva valley",
        "Sarajevo with cultural and historical context",
      ],
    },
    overview: {
      es: "Una de las rutas más equilibradas para una primera experiencia balcánica: capitales, costa, ciudades puente y paisajes adriáticos sin convertir el viaje en una carrera.",
      en: "One of the most balanced routes for a first Balkan experience: capitals, coast, bridge cities, and Adriatic landscapes without turning the trip into a race.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado esencial", en: "Explore Belgrade" },
      { es: "Zagreb y paseo histórico", en: "Zagreb and historic walk" },
      { es: "Plitvice y llegada a Split", en: "Plitvice and arrival in Split" },
      { es: "Split y Palacio de Diocleciano", en: "Split and Diocletian's Palace" },
      { es: "Dubrovnik y costa adriática", en: "Dubrovnik and the Adriatic coast" },
      { es: "Experiencia de día completo en Montenegro", en: "Full-day Montenegro experience" },
      { es: "Mostar y Blagaj", en: "Mostar and Blagaj" },
      { es: "Sarajevo", en: "Explore Sarajevo" },
      { es: "Salida desde Belgrado", en: "Departure from Belgrade" },
    ],
    accommodation: {
      es: "9 noches en hoteles 4* o 5* según paquete elegido y disponibilidad confirmada.",
      en: "9 nights in 4* or 5* hotels according to selected package and confirmed availability.",
    },
    included: commonIncluded({
      nights: {
        es: "9 noches de alojamiento en Belgrado, Zagreb, Split, Dubrovnik, Trebinje y Sarajevo",
        en: "9 nights of accommodation in Belgrade, Zagreb, Split, Dubrovnik, Trebinje, and Sarajevo",
      },
      meals: {
        es: "9 desayunos",
        en: "9 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo San Sava, Plitvice, paseo en barco a Our Lady of the Rocks y Blagaj Tekke",
        en: "Operator-listed entrance fees, including Saint Sava, Plitvice, boat ride to Our Lady of the Rocks, and Blagaj Tekke",
      },
    }),
    sourceUrl:
      "https://www.victortours.com/tours/serbia-montenegro-bosnia-croatia-in-10-days/",
  }),
  makeVictorTour({
    id: "balkan-experience-14-days",
    slug: {
      es: "experiencia-balcanica-14-dias",
      en: "balkan-experience-14-days",
    },
    title: {
      es: "Experiencia balcánica: 7 países",
      en: "Balkan Experience: 7 countries",
    },
    subtitle: {
      es: "Serbia, Bulgaria, Macedonia del Norte, Albania, Montenegro, Croacia y Bosnia y Herzegovina.",
      en: "Serbia, Bulgaria, North Macedonia, Albania, Montenegro, Croatia, and Bosnia and Herzegovina.",
    },
    shortDescription: {
      es: "Un circuito intenso y muy visual por capitales, lagos, costa, pueblos históricos y Serbia occidental.",
      en: "An intense, highly visual circuit through capitals, lakes, coast, historic towns, and western Serbia.",
    },
    countries: [
      "serbia",
      "bulgaria",
      "macedonia-del-norte",
      "albania",
      "montenegro",
      "croacia",
      "bosnia-y-herzegovina",
    ],
    durationDays: 14,
    travelStyle: {
      es: "Gran introducción balcánica",
      en: "Grand Balkan introduction",
    },
    departureStatus: {
      es: "Próxima salida: 10 octubre 2026",
      en: "Next departure: 10 October 2026",
    },
    price: fromPrice("2,712", 2712),
    nextDeparture: balkanExperienceDates[0],
    dates: balkanExperienceDates,
    heroImage: media.kotor,
    gallery: [media.kotor, media.ohrid, media.berat, media.mostar],
    route: {
      es: [
        "Belgrado",
        "Novi Sad",
        "Sofía",
        "Skopie",
        "Ohrid",
        "Tirana",
        "Budva",
        "Kotor",
        "Dubrovnik",
        "Mostar",
        "Sarajevo",
        "Zlatibor",
        "Belgrado",
      ],
      en: [
        "Belgrade",
        "Novi Sad",
        "Sofia",
        "Skopje",
        "Ohrid",
        "Tirana",
        "Budva",
        "Kotor",
        "Dubrovnik",
        "Mostar",
        "Sarajevo",
        "Zlatibor",
        "Belgrade",
      ],
    },
    highlights: {
      es: [
        "Siete países en una salida de dos semanas",
        "Belgrado, Novi Sad, Sofía, Skopie y Tirana",
        "Lago Ohrid, cañón Matka y costa montenegrina",
        "Dubrovnik, Mostar, Blagaj y Sarajevo",
        "Zlatibor, Šargan Eight y Serbia occidental",
      ],
      en: [
        "Seven countries in a two-week departure",
        "Belgrade, Novi Sad, Sofia, Skopje, and Tirana",
        "Lake Ohrid, Matka Canyon, and the Montenegrin coast",
        "Dubrovnik, Mostar, Blagaj, and Sarajevo",
        "Zlatibor, Šargan Eight, and western Serbia",
      ],
    },
    overview: {
      es: "Ruta pensada para viajeros que quieren una panorámica amplia de los Balcanes en una sola salida, con múltiples países y una combinación de ciudades, costa, lagos y montaña.",
      en: "A route for travelers who want a wide overview of the Balkans in one departure, combining multiple countries with cities, coast, lakes, and mountains.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado esencial", en: "Explore Belgrade" },
      { es: "Novi Sad y Sremski Karlovci", en: "Novi Sad and Sremski Karlovci" },
      { es: "De Serbia a Bulgaria", en: "From Serbia to Bulgaria" },
      { es: "Sofía y traslado a Macedonia del Norte", en: "Sofia and transfer to North Macedonia" },
      { es: "Cañón Matka y lago Ohrid", en: "Matka Canyon and Lake Ohrid" },
      { es: "Llegada a Albania", en: "Welcome to Albania" },
      { es: "De Albania a Montenegro", en: "From Albania to Montenegro" },
      { es: "Montenegro de día completo", en: "Full-day Montenegro experience" },
      { es: "Dubrovnik", en: "Dubrovnik" },
      { es: "Mostar y Blagaj", en: "Mostar and Blagaj" },
      { es: "Sarajevo", en: "Explore Sarajevo" },
      { es: "Serbia occidental y Šargan Eight", en: "Western Serbia and Šargan Eight" },
      { es: "Salida desde Belgrado", en: "Departure from Belgrade" },
    ],
    accommodation: {
      es: "13 noches en hoteles 4* o 5* según paquete elegido, incluyendo Belgrado, Sofía, Skopie, Ohrid, Tirana, Budva, Trebinje, Sarajevo y Zlatibor.",
      en: "13 nights in 4* or 5* hotels according to selected package, including Belgrade, Sofia, Skopje, Ohrid, Tirana, Budva, Trebinje, Sarajevo, and Zlatibor.",
    },
    included: commonIncluded({
      nights: {
        es: "13 noches de alojamiento según paquete Classic o Upgraded",
        en: "13 nights of accommodation according to Classic or Upgraded package",
      },
      meals: {
        es: "13 desayunos y una cena en Zlatibor",
        en: "13 breakfasts and one dinner in Zlatibor",
      },
      entrances: {
        es: "Entradas indicadas por el operador, con San Sava, degustación de vino, Rila, Matka, Rozafa, Our Lady of the Rocks, Blagaj, Wood Town y Šargan Eight",
        en: "Operator-listed entrance fees, with Saint Sava, wine tasting, Rila, Matka, Rozafa, Our Lady of the Rocks, Blagaj, Wood Town, and Šargan Eight",
      },
    }),
    sourceUrl:
      "https://www.victortours.com/tours/balkan-experience-7-countries-in-14-days/",
  }),
  makeVictorTour({
    id: "balkan-express-4-countries",
    slug: {
      es: "balkan-express-4-paises",
      en: "balkan-express-4-countries",
    },
    title: {
      es: "Balkan Express: 4 países",
      en: "Balkan Express: 4 countries",
    },
    subtitle: {
      es: "Belgrado, Sofía, Skopie, Ohrid y Tirana en una ruta ágil.",
      en: "Belgrade, Sofia, Skopje, Ohrid, and Tirana in a fast-paced route.",
    },
    shortDescription: {
      es: "Cuatro países balcánicos en una salida compacta, ideal para ver mucho en poco tiempo.",
      en: "Four Balkan countries in a compact departure, ideal for seeing a lot in limited time.",
    },
    countries: ["serbia", "bulgaria", "macedonia-del-norte", "albania"],
    durationDays: 8,
    duration: {
      es: "8 días / 7 noches",
      en: "8 days / 7 nights",
    },
    travelStyle: {
      es: "Ruta rápida por capitales y Ohrid",
      en: "Fast route through capitals and Ohrid",
    },
    departureStatus: {
      es: "Próxima salida: 10 octubre 2026",
      en: "Next departure: 10 October 2026",
    },
    price: fromPrice("1,465", 1465),
    nextDeparture: expressDates[0],
    dates: expressDates,
    heroImage: media.sofia,
    gallery: [media.sofia, media.ohrid, media.berat, media.heroBelgrade],
    route: {
      es: ["Belgrado", "Novi Sad", "Sofía", "Skopie", "Ohrid", "Tirana"],
      en: ["Belgrade", "Novi Sad", "Sofia", "Skopje", "Ohrid", "Tirana"],
    },
    highlights: {
      es: [
        "Serbia, Bulgaria, Macedonia del Norte y Albania",
        "Belgrado y Novi Sad",
        "Sofía y patrimonio búlgaro",
        "Skopie, cañón Matka y lago Ohrid",
        "Tirana y una primera mirada a Albania",
      ],
      en: [
        "Serbia, Bulgaria, North Macedonia, and Albania",
        "Belgrade and Novi Sad",
        "Sofia and Bulgarian heritage",
        "Skopje, Matka Canyon, and Lake Ohrid",
        "Tirana and a first look at Albania",
      ],
    },
    overview: {
      es: "Una opción de ritmo ágil para viajeros que quieren conocer cuatro países en una semana larga, con ciudades principales, lago Ohrid y logística organizada.",
      en: "A fast-paced option for travelers who want to discover four countries in a long week, with main cities, Lake Ohrid, and organized logistics.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado esencial", en: "Explore Belgrade" },
      { es: "Novi Sad y Sremski Karlovci", en: "Novi Sad and Sremski Karlovci" },
      { es: "De Serbia a Bulgaria", en: "From Serbia to Bulgaria" },
      { es: "Sofía y traslado a Macedonia del Norte", en: "Sofia and transfer to North Macedonia" },
      { es: "Cañón Matka y lago Ohrid", en: "Matka Canyon and Lake Ohrid" },
      { es: "Llegada a Albania", en: "Welcome to Albania" },
      { es: "Salida desde Tirana", en: "Departure from Tirana" },
    ],
    accommodation: {
      es: "7 noches en hoteles 4* o 5* según paquete elegido, con noches en Belgrado, Sofía, Skopie, Ohrid y Tirana.",
      en: "7 nights in 4* or 5* hotels according to selected package, with nights in Belgrade, Sofia, Skopje, Ohrid, and Tirana.",
    },
    included: commonIncluded({
      nights: {
        es: "7 noches de alojamiento según paquete Classic o Upgraded",
        en: "7 nights of accommodation according to Classic or Upgraded package",
      },
      meals: {
        es: "7 desayunos",
        en: "7 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo San Sava, degustación de vino, Skull Tower, Red Cross Camp, Rila y paseo en barco en Matka",
        en: "Operator-listed entrance fees, including Saint Sava, wine tasting, Skull Tower, Red Cross Camp, Rila, and Matka boat ride",
      },
    }),
    sourceUrl:
      "https://www.victortours.com/tours/https-www-victortours-com-tours-balkan-express-4-countries-in-one-week/",
  }),
  makeVictorTour({
    id: "balkans-adriatic-14-days",
    slug: {
      es: "balcanes-y-adriatico-14-dias",
      en: "balkans-and-adriatic-14-days",
    },
    title: {
      es: "Los Balcanes y el Adriático",
      en: "The Balkans & the Adriatic",
    },
    subtitle: {
      es: "Siete países y una secuencia de ciudades históricas, costa y sitios UNESCO.",
      en: "Seven countries and a sequence of historic cities, coast, and UNESCO sites.",
    },
    shortDescription: {
      es: "Belgrado, Croacia, Montenegro, Bosnia, Bulgaria, Macedonia del Norte y Albania en dos semanas.",
      en: "Belgrade, Croatia, Montenegro, Bosnia, Bulgaria, North Macedonia, and Albania in two weeks.",
    },
    countries: [
      "serbia",
      "croacia",
      "montenegro",
      "bosnia-y-herzegovina",
      "bulgaria",
      "macedonia-del-norte",
      "albania",
    ],
    durationDays: 14,
    travelStyle: {
      es: "UNESCO, Adriático y capitales balcánicas",
      en: "UNESCO, Adriatic, and Balkan capitals",
    },
    departureStatus: {
      es: "Próxima salida: 6 septiembre 2026",
      en: "Next departure: 6 September 2026",
    },
    price: fromPrice("3,517", 3517),
    nextDeparture: adriaticDates[0],
    dates: adriaticDates,
    heroImage: media.dubrovnik,
    gallery: [media.dubrovnik, media.kotor, media.ohrid, media.berat],
    route: {
      es: [
        "Belgrado",
        "Zagreb",
        "Plitvice",
        "Split",
        "Dubrovnik",
        "Kotor",
        "Mostar",
        "Sarajevo",
        "Sofía",
        "Skopie",
        "Ohrid",
        "Tirana",
      ],
      en: [
        "Belgrade",
        "Zagreb",
        "Plitvice",
        "Split",
        "Dubrovnik",
        "Kotor",
        "Mostar",
        "Sarajevo",
        "Sofia",
        "Skopje",
        "Ohrid",
        "Tirana",
      ],
    },
    highlights: {
      es: [
        "Siete países en dos semanas",
        "Dubrovnik, Split, Plitvice, Kotor y Ohrid",
        "Mostar, Blagaj y Sarajevo",
        "Sofía, Skopie, Matka y Tirana",
        "Una ruta con fuerte contenido UNESCO y adriático",
      ],
      en: [
        "Seven countries in two weeks",
        "Dubrovnik, Split, Plitvice, Kotor, and Ohrid",
        "Mostar, Blagaj, and Sarajevo",
        "Sofia, Skopje, Matka, and Tirana",
        "A route with strong UNESCO and Adriatic content",
      ],
    },
    overview: {
      es: "Una salida completa para viajeros que quieren combinar los grandes iconos adriáticos con ciudades balcánicas, patrimonio UNESCO y una llegada final a Albania.",
      en: "A complete departure for travelers who want to combine major Adriatic icons with Balkan cities, UNESCO heritage, and a final arrival in Albania.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado esencial", en: "Explore Belgrade" },
      { es: "Zagreb y visita a pie", en: "Zagreb and walking tour" },
      { es: "Plitvice y costa dálmata", en: "Plitvice and Dalmatian Coast" },
      { es: "Split y Palacio de Diocleciano", en: "Split and Diocletian's Palace" },
      { es: "Dubrovnik", en: "Dubrovnik" },
      { es: "Montenegro y bahía de Kotor", en: "Montenegro and Bay of Kotor" },
      { es: "Mostar y Blagaj", en: "Mostar and Blagaj" },
      { es: "Sarajevo", en: "Explore Sarajevo" },
      { es: "De Serbia a Bulgaria", en: "From Serbia to Bulgaria" },
      { es: "Sofía y Macedonia del Norte", en: "Sofia and North Macedonia" },
      { es: "Cañón Matka y lago Ohrid", en: "Matka Canyon and Lake Ohrid" },
      { es: "Llegada a Albania", en: "Welcome to Albania" },
      { es: "Salida desde Tirana", en: "Departure from Tirana" },
    ],
    accommodation: {
      es: "13 noches en hoteles 4* o 5* según paquete elegido, con alojamiento en Serbia, Croacia, Bosnia y Herzegovina, Bulgaria, Macedonia del Norte y Albania.",
      en: "13 nights in 4* or 5* hotels according to selected package, with accommodation in Serbia, Croatia, Bosnia and Herzegovina, Bulgaria, North Macedonia, and Albania.",
    },
    included: commonIncluded({
      nights: {
        es: "13 noches de alojamiento según paquete Classic o Upgraded",
        en: "13 nights of accommodation according to Classic or Upgraded package",
      },
      meals: {
        es: "13 desayunos",
        en: "13 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo San Sava, Plitvice, Our Lady of the Rocks, Blagaj, Rila y paseo en barco en Matka",
        en: "Operator-listed entrance fees, including Saint Sava, Plitvice, Our Lady of the Rocks, Blagaj, Rila, and Matka boat ride",
      },
    }),
    sourceUrl: "https://www.victortours.com/tours/the-balkans-and-the-adriatics/",
  }),
  makeVictorTour({
    id: "balkan-big-tour-21-days",
    slug: {
      es: "gran-tour-balcanes-21-dias",
      en: "balkan-big-tour-21-days",
    },
    title: {
      es: "Gran tour de los Balcanes",
      en: "Balkan Big Tour",
    },
    subtitle: {
      es: "Tres semanas entre Serbia, Croacia, Bosnia, Montenegro, Hungría, Rumania y Bulgaria.",
      en: "Three weeks through Serbia, Croatia, Bosnia, Montenegro, Hungary, Romania, and Bulgaria.",
    },
    shortDescription: {
      es: "La ruta más extensa: Adriático, Sarajevo, Budapest, Transilvania, Bucarest, Bulgaria y Serbia.",
      en: "The most extensive route: Adriatic, Sarajevo, Budapest, Transylvania, Bucharest, Bulgaria, and Serbia.",
    },
    countries: [
      "serbia",
      "croacia",
      "bosnia-y-herzegovina",
      "montenegro",
      "hungria",
      "rumania",
      "bulgaria",
    ],
    durationDays: 21,
    travelStyle: {
      es: "Gran circuito regional",
      en: "Grand regional circuit",
    },
    departureStatus: {
      es: "Próxima salida: 6 septiembre 2026",
      en: "Next departure: 6 September 2026",
    },
    price: fromPrice("5,858", 5858),
    nextDeparture: bigTourDates[0],
    dates: bigTourDates,
    heroImage: media.budapest,
    gallery: [media.budapest, media.dubrovnik, media.mostar, media.corvinCastle],
    route: {
      es: [
        "Belgrado",
        "Zagreb",
        "Split",
        "Dubrovnik",
        "Montenegro",
        "Mostar",
        "Sarajevo",
        "Novi Sad",
        "Budapest",
        "Timisoara",
        "Transilvania",
        "Bucarest",
        "Veliko Tarnovo",
        "Plovdiv",
        "Sofía",
      ],
      en: [
        "Belgrade",
        "Zagreb",
        "Split",
        "Dubrovnik",
        "Montenegro",
        "Mostar",
        "Sarajevo",
        "Novi Sad",
        "Budapest",
        "Timisoara",
        "Transylvania",
        "Bucharest",
        "Veliko Tarnovo",
        "Plovdiv",
        "Sofia",
      ],
    },
    highlights: {
      es: [
        "Siete países en tres semanas",
        "Costa croata, Montenegro, Mostar y Sarajevo",
        "Novi Sad, Sremski Karlovci y Budapest",
        "Transilvania, castillos y Bucarest",
        "Veliko Tarnovo, Plovdiv, Sofía y opción Rila",
      ],
      en: [
        "Seven countries in three weeks",
        "Croatian coast, Montenegro, Mostar, and Sarajevo",
        "Novi Sad, Sremski Karlovci, and Budapest",
        "Transylvania, castles, and Bucharest",
        "Veliko Tarnovo, Plovdiv, Sofia, and optional Rila",
      ],
    },
    overview: {
      es: "El circuito más amplio del inventario actual: una lectura extensa de los Balcanes y Europa Central, ideal para quien prefiere invertir más días y cubrir el mapa con más profundidad.",
      en: "The widest circuit in the current inventory: an extensive reading of the Balkans and Central Europe for travelers who prefer more days and a deeper map.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado", en: "Belgrade city tour" },
      { es: "Zagreb", en: "Zagreb" },
      { es: "Plitvice y Split", en: "Plitvice and Split" },
      { es: "Split", en: "Split" },
      { es: "Dubrovnik", en: "Dubrovnik" },
      { es: "Montenegro", en: "Montenegro" },
      { es: "Mostar y Blagaj", en: "Mostar and Blagaj" },
      { es: "Sarajevo", en: "Sarajevo" },
      { es: "Sremski Karlovci, Novi Sad y Budapest", en: "Sremski Karlovci, Novi Sad, and Budapest" },
      { es: "Budapest", en: "Budapest" },
      { es: "De Hungría a Rumania", en: "From Hungary to Romania" },
      { es: "Timisoara, Corvin y Sibiu", en: "Timisoara, Corvin, and Sibiu" },
      { es: "Sibiu, Sighisoara y Brasov", en: "Sibiu, Sighisoara, and Brasov" },
      { es: "Bran, Peles y Bucarest", en: "Bran, Peles, and Bucharest" },
      { es: "Bucarest", en: "Bucharest" },
      { es: "Ivanovo, Arbanasi y Veliko Tarnovo", en: "Ivanovo, Arbanasi, and Veliko Tarnovo" },
      { es: "Etar, Kazanlak y Plovdiv", en: "Etar, Kazanlak, and Plovdiv" },
      { es: "Plovdiv, Koprivshtitsa y Sofía", en: "Plovdiv, Koprivshtitsa, and Sofia" },
      { es: "Sofía y opción Rila", en: "Sofia and optional Rila" },
      { es: "Salida desde Sofía", en: "Departure from Sofia" },
    ],
    accommodation: {
      es: "20 noches en hoteles 4* o 5* según paquete elegido y disponibilidad del operador.",
      en: "20 nights in 4* or 5* hotels according to selected package and operator availability.",
    },
    included: commonIncluded({
      nights: {
        es: "20 noches de alojamiento distribuidas por la ruta regional",
        en: "20 nights of accommodation across the regional route",
      },
      meals: {
        es: "20 desayunos",
        en: "20 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo San Sava, degustación de vino, Plitvice, Our Lady of the Rocks, Blagaj, castillos rumanos, Ivanovo, Etar, Arbanasi, Rila, Kazanlak y Museo de la Rosa",
        en: "Operator-listed entrance fees, including Saint Sava, wine tasting, Plitvice, Our Lady of the Rocks, Blagaj, Romanian castles, Ivanovo, Etar, Arbanasi, Rila, Kazanlak, and Rose Museum",
      },
    }),
    sourceUrl:
      "https://www.victortours.com/tours/balkan-big-tour-seven-countries-in-three-weeks/",
  }),
  makeVictorTour({
    id: "castles-capitals-balkans-14-days",
    slug: {
      es: "castillos-y-capitales-de-los-balcanes-14-dias",
      en: "castles-and-capitals-of-the-balkans-14-days",
    },
    title: {
      es: "Castillos y capitales de los Balcanes",
      en: "Castles & Capitals of the Balkans",
    },
    subtitle: {
      es: "Serbia, Hungría, Rumania y Bulgaria con Transilvania como hilo narrativo.",
      en: "Serbia, Hungary, Romania, and Bulgaria with Transylvania as a narrative thread.",
    },
    shortDescription: {
      es: "Belgrado, Budapest, Transilvania, Bucarest, Veliko Tarnovo, Plovdiv y Sofía.",
      en: "Belgrade, Budapest, Transylvania, Bucharest, Veliko Tarnovo, Plovdiv, and Sofia.",
    },
    countries: ["serbia", "hungria", "rumania", "bulgaria"],
    durationDays: 14,
    travelStyle: {
      es: "Castillos, capitales y Transilvania",
      en: "Castles, capitals, and Transylvania",
    },
    departureStatus: {
      es: "Próxima salida: 13 septiembre 2026",
      en: "Next departure: 13 September 2026",
    },
    price: fromPrice("3,185", 3185),
    nextDeparture: castlesDates[0],
    dates: castlesDates,
    heroImage: media.corvinCastle,
    gallery: [media.corvinCastle, media.budapest, media.sofia, media.heroBelgrade],
    route: {
      es: [
        "Belgrado",
        "Novi Sad",
        "Budapest",
        "Timisoara",
        "Sibiu",
        "Sighisoara",
        "Brasov",
        "Bran",
        "Bucarest",
        "Veliko Tarnovo",
        "Plovdiv",
        "Sofía",
      ],
      en: [
        "Belgrade",
        "Novi Sad",
        "Budapest",
        "Timisoara",
        "Sibiu",
        "Sighisoara",
        "Brasov",
        "Bran",
        "Bucharest",
        "Veliko Tarnovo",
        "Plovdiv",
        "Sofia",
      ],
    },
    highlights: {
      es: [
        "Belgrado y norte de Serbia",
        "Budapest junto al Danubio",
        "Corvin, Bran, Peles y ciudades de Transilvania",
        "Bucarest y arquitectura urbana",
        "Veliko Tarnovo, Plovdiv, Sofía y Rila opcional",
      ],
      en: [
        "Belgrade and northern Serbia",
        "Budapest along the Danube",
        "Corvin, Bran, Peles, and Transylvanian towns",
        "Bucharest and urban architecture",
        "Veliko Tarnovo, Plovdiv, Sofia, and optional Rila",
      ],
    },
    overview: {
      es: "Una ruta de capitales, castillos y ciudades históricas que conecta Serbia con Europa Central y el este balcánico, pensada para viajeros interesados en arquitectura, historia y patrimonio.",
      en: "A route of capitals, castles, and historic towns connecting Serbia with Central Europe and the eastern Balkans, designed for travelers interested in architecture, history, and heritage.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado", en: "Belgrade city tour" },
      { es: "Novi Sad, Sremski Karlovci y Budapest", en: "Novi Sad, Sremski Karlovci, and Budapest" },
      { es: "Budapest", en: "Budapest" },
      { es: "De Hungría a Rumania", en: "From Hungary to Romania" },
      { es: "Timisoara, Corvin y Sibiu", en: "Timisoara, Corvin, and Sibiu" },
      { es: "Sibiu, Sighisoara y Brasov", en: "Sibiu, Sighisoara, and Brasov" },
      { es: "Bran, Peles y Bucarest", en: "Bran, Peles, and Bucharest" },
      { es: "Bucarest", en: "Bucharest" },
      { es: "Ivanovo, Arbanasi y Veliko Tarnovo", en: "Ivanovo, Arbanasi, and Veliko Tarnovo" },
      { es: "Etar, Kazanlak y Plovdiv", en: "Etar, Kazanlak, and Plovdiv" },
      { es: "Plovdiv, Koprivshtitsa y Sofía", en: "Plovdiv, Koprivshtitsa, and Sofia" },
      { es: "Sofía y opción Rila", en: "Sofia and optional Rila" },
      { es: "Salida desde Sofía", en: "Departure from Sofia" },
    ],
    accommodation: {
      es: "13 noches en hoteles de categoría elegida, distribuidas entre Belgrado, Budapest, ciudades rumanas y Bulgaria.",
      en: "13 nights in the selected hotel category across Belgrade, Budapest, Romanian cities, and Bulgaria.",
    },
    included: commonIncluded({
      nights: {
        es: "13 noches de alojamiento en hoteles según paquete Classic o Upgraded",
        en: "13 nights of accommodation according to Classic or Upgraded package",
      },
      meals: {
        es: "13 desayunos",
        en: "13 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo San Sava, degustación de vino, castillos de Rumania, Ivanovo, Etar, Arbanasi, Rila, Kazanlak y Museo de la Rosa",
        en: "Operator-listed entrance fees, including Saint Sava, wine tasting, Romanian castles, Ivanovo, Etar, Arbanasi, Rila, Kazanlak, and Rose Museum",
      },
    }),
    sourceUrl:
      "https://www.victortours.com/tours/the-best-of-serbia-hungary-romania-and-bulgaria/",
  }),
  makeVictorTour({
    id: "capitals-eastern-europe-12-days",
    slug: {
      es: "capitales-de-europa-del-este-12-dias",
      en: "capitals-of-eastern-europe-12-days",
    },
    title: {
      es: "Capitales de Europa del Este",
      en: "Capitals of Eastern Europe",
    },
    subtitle: {
      es: "Hungría, Rumania y Bulgaria entre Budapest, Transilvania, Bucarest y Sofía.",
      en: "Hungary, Romania, and Bulgaria through Budapest, Transylvania, Bucharest, and Sofia.",
    },
    shortDescription: {
      es: "Una extensión regional por capitales, castillos, ciudades sajonas y patrimonio búlgaro.",
      en: "A regional extension through capitals, castles, Saxon towns, and Bulgarian heritage.",
    },
    countries: ["hungria", "rumania", "bulgaria"],
    durationDays: 12,
    travelStyle: {
      es: "Capitales, Transilvania y patrimonio búlgaro",
      en: "Capitals, Transylvania, and Bulgarian heritage",
    },
    departureStatus: {
      es: "Próxima salida: 11 mayo 2027",
      en: "Next departure: 11 May 2027",
    },
    price: fromPrice("2,685", 2685),
    nextDeparture: capitalsDates[0],
    dates: capitalsDates,
    heroImage: media.budapest,
    gallery: [media.budapest, media.corvinCastle, media.sofia],
    route: {
      es: [
        "Budapest",
        "Szeged",
        "Timisoara",
        "Sibiu",
        "Sighisoara",
        "Brasov",
        "Bucarest",
        "Veliko Tarnovo",
        "Kazanlak",
        "Plovdiv",
        "Sofía",
      ],
      en: [
        "Budapest",
        "Szeged",
        "Timisoara",
        "Sibiu",
        "Sighisoara",
        "Brasov",
        "Bucharest",
        "Veliko Tarnovo",
        "Kazanlak",
        "Plovdiv",
        "Sofia",
      ],
    },
    highlights: {
      es: [
        "Budapest y el Danubio",
        "Ciudades de Transilvania: Sibiu, Sighisoara y Brasov",
        "Castillos de Corvin, Bran y Peles",
        "Bucarest y Veliko Tarnovo",
        "Plovdiv, Sofía y patrimonio búlgaro",
      ],
      en: [
        "Budapest and the Danube",
        "Transylvanian towns: Sibiu, Sighisoara, and Brasov",
        "Corvin, Bran, and Peles castles",
        "Bucharest and Veliko Tarnovo",
        "Plovdiv, Sofia, and Bulgarian heritage",
      ],
    },
    overview: {
      es: "Aunque esta salida mira más hacia Europa Central y Oriental, funciona como extensión natural para viajeros que quieren completar la región con Hungría, Rumania y Bulgaria.",
      en: "Although this departure leans more toward Central and Eastern Europe, it works as a natural extension for travelers who want to complete the region with Hungary, Romania, and Bulgaria.",
    },
    itineraryItems: [
      { es: "Llegada a Hungría", en: "Welcome to Hungary" },
      { es: "Budapest", en: "Explore Budapest" },
      { es: "Szeged y Timisoara", en: "Szeged and Timisoara" },
      { es: "Timisoara, Corvin y Sibiu", en: "Timisoara, Corvin, and Sibiu" },
      { es: "Sibiu, Sighisoara y Brasov", en: "Sibiu, Sighisoara, and Brasov" },
      { es: "Bran, Peles y Bucarest", en: "Bran, Peles, and Bucharest" },
      { es: "Bucarest", en: "Bucharest" },
      { es: "Ivanovo, Arbanasi y Veliko Tarnovo", en: "Ivanovo, Arbanasi, and Veliko Tarnovo" },
      { es: "Etar, Kazanlak y Plovdiv", en: "Etar, Kazanlak, and Plovdiv" },
      { es: "Plovdiv, Koprivshtitsa y Sofía", en: "Plovdiv, Koprivshtitsa, and Sofia" },
      { es: "Sofía y opción Rila", en: "Sofia and optional Rila" },
      { es: "Salida desde Sofía", en: "Departure from Sofia" },
    ],
    accommodation: {
      es: "11 noches en hoteles de la categoría elegida entre Budapest, ciudades rumanas y Bulgaria.",
      en: "11 nights in the selected hotel category across Budapest, Romanian cities, and Bulgaria.",
    },
    included: commonIncluded({
      nights: {
        es: "11 noches de alojamiento según paquete Classic o Upgraded",
        en: "11 nights of accommodation according to Classic or Upgraded package",
      },
      meals: {
        es: "11 desayunos",
        en: "11 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo castillos de Rumania, Ivanovo, Etar, Arbanasi, Kazanlak y Museo de la Rosa",
        en: "Operator-listed entrance fees, including Romanian castles, Ivanovo, Etar, Arbanasi, Kazanlak, and Rose Museum",
      },
    }),
    sourceUrl: "https://www.victortours.com/tours/capitals-of-eastern-europe/",
  }),
  makeVictorTour({
    id: "serbia-romania-bulgaria-12-days",
    slug: {
      es: "serbia-rumania-bulgaria-12-dias",
      en: "serbia-romania-bulgaria-12-days",
    },
    title: {
      es: "Lo mejor de Serbia, Rumania y Bulgaria",
      en: "Best of Serbia, Romania and Bulgaria",
    },
    subtitle: {
      es: "Belgrado, Novi Sad, Transilvania, Bucarest, Plovdiv y Sofía.",
      en: "Belgrade, Novi Sad, Transylvania, Bucharest, Plovdiv, and Sofia.",
    },
    shortDescription: {
      es: "Una ruta cultural desde Belgrado hasta Sofía, con norte de Serbia, castillos rumanos y patrimonio búlgaro.",
      en: "A cultural route from Belgrade to Sofia, with northern Serbia, Romanian castles, and Bulgarian heritage.",
    },
    countries: ["serbia", "rumania", "bulgaria"],
    durationDays: 12,
    travelStyle: {
      es: "Serbia, Transilvania y Bulgaria",
      en: "Serbia, Transylvania, and Bulgaria",
    },
    departureStatus: {
      es: "Próxima salida: 11 mayo 2027",
      en: "Next departure: 11 May 2027",
    },
    price: fromPrice("2,389", 2389),
    nextDeparture: serbiaRomaniaBulgariaDates[0],
    dates: serbiaRomaniaBulgariaDates,
    heroImage: media.corvinCastle,
    gallery: [media.corvinCastle, media.heroBelgrade, media.noviSad, media.sofia],
    route: {
      es: [
        "Belgrado",
        "Novi Sad",
        "Timisoara",
        "Sibiu",
        "Sighisoara",
        "Brasov",
        "Bucarest",
        "Veliko Tarnovo",
        "Kazanlak",
        "Plovdiv",
        "Sofía",
      ],
      en: [
        "Belgrade",
        "Novi Sad",
        "Timisoara",
        "Sibiu",
        "Sighisoara",
        "Brasov",
        "Bucharest",
        "Veliko Tarnovo",
        "Kazanlak",
        "Plovdiv",
        "Sofia",
      ],
    },
    highlights: {
      es: [
        "Belgrado, Sremski Karlovci y Novi Sad",
        "Timisoara, Sibiu, Sighisoara y Brasov",
        "Castillos de Corvin, Bran y Peles",
        "Bucarest y Veliko Tarnovo",
        "Plovdiv, Sofía y opción Rila",
      ],
      en: [
        "Belgrade, Sremski Karlovci, and Novi Sad",
        "Timisoara, Sibiu, Sighisoara, and Brasov",
        "Corvin, Bran, and Peles castles",
        "Bucharest and Veliko Tarnovo",
        "Plovdiv, Sofia, and optional Rila",
      ],
    },
    overview: {
      es: "Una salida ideal para viajeros que quieren empezar en Serbia y continuar hacia Rumania y Bulgaria con énfasis en historia, ciudades y castillos.",
      en: "An ideal departure for travelers who want to start in Serbia and continue toward Romania and Bulgaria with emphasis on history, cities, and castles.",
    },
    itineraryItems: [
      { es: "Llegada a Serbia", en: "Welcome to Serbia" },
      { es: "Belgrado y cena opcional en Skadarlija", en: "Belgrade and optional Skadarlija dinner" },
      { es: "Novi Sad, Sremski Karlovci y Timisoara", en: "Novi Sad, Sremski Karlovci, and Timisoara" },
      { es: "Timisoara, Corvin y Sibiu", en: "Timisoara, Corvin, and Sibiu" },
      { es: "Sibiu, Sighisoara y Brasov", en: "Sibiu, Sighisoara, and Brasov" },
      { es: "Bran, Peles y Bucarest", en: "Bran, Peles, and Bucharest" },
      { es: "Bucarest", en: "Bucharest" },
      { es: "Ivanovo, Arbanasi y Veliko Tarnovo", en: "Ivanovo, Arbanasi, and Veliko Tarnovo" },
      { es: "Etar, Kazanlak y Plovdiv", en: "Etar, Kazanlak, and Plovdiv" },
      { es: "Plovdiv, Koprivshtitsa y Sofía", en: "Plovdiv, Koprivshtitsa, and Sofia" },
      { es: "Sofía y opción Rila", en: "Sofia and optional Rila" },
      { es: "Salida desde Sofía", en: "Departure from Sofia" },
    ],
    accommodation: {
      es: "11 noches en hoteles de la categoría elegida, con inicio en Belgrado y final en Sofía.",
      en: "11 nights in the selected hotel category, starting in Belgrade and ending in Sofia.",
    },
    included: commonIncluded({
      nights: {
        es: "11 noches de alojamiento según paquete Classic o Upgraded",
        en: "11 nights of accommodation according to Classic or Upgraded package",
      },
      meals: {
        es: "11 desayunos",
        en: "11 breakfasts",
      },
      entrances: {
        es: "Entradas indicadas por el operador, incluyendo San Sava, degustación de vino, castillos rumanos, Ivanovo, Etar, Arbanasi, Kazanlak y Museo de la Rosa",
        en: "Operator-listed entrance fees, including Saint Sava, wine tasting, Romanian castles, Ivanovo, Etar, Arbanasi, Kazanlak, and Rose Museum",
      },
    }),
    sourceUrl:
      "https://www.victortours.com/tours/serbia-romania-and-bulgaria-in-12-days/",
  }),
] satisfies Tour[];
