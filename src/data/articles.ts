import { media } from "@/data/media";
import type { ExperienceCategory, GuideArticle } from "@/types/travel";
import type { Locale } from "@/lib/i18n";

export const guideArticles = [
  {
    id: "safety-serbia",
    href: {
      es: "/guia#seguridad-serbia",
      en: "/en/guide#serbia-safety",
    },
    title: {
      es: "¿Es seguro viajar a Serbia?",
      en: "Is Serbia safe to visit?",
    },
    description: {
      es: "Contexto práctico para moverte con confianza por ciudades, carreteras y espacios turísticos.",
      en: "Practical context for moving confidently through cities, roads, and visitor areas.",
    },
    category: {
      es: "Seguridad",
      en: "Safety",
    },
  },
  {
    id: "balkans-budget",
    href: {
      es: "/guia#costos-balcanes",
      en: "/en/guide#balkans-budget",
    },
    title: {
      es: "¿Cuánto cuesta viajar por los Balcanes?",
      en: "How much does it cost to travel through the Balkans?",
    },
    description: {
      es: "Una guía inicial para entender alojamiento, comida, transporte y experiencias por la región.",
      en: "An initial guide to accommodation, food, transport, and experiences across the region.",
    },
    category: {
      es: "Presupuesto",
      en: "Budget",
    },
  },
  {
    id: "mexicans-serbia",
    href: {
      es: "/guia#viajar-a-serbia-desde-mexico",
      en: "/en/guide#serbia-from-mexico",
    },
    title: {
      es: "¿Qué necesitan los mexicanos para viajar a Serbia?",
      en: "What do Mexicans need to travel to Serbia?",
    },
    description: {
      es: "Documentos, vuelos, conexiones y recomendaciones para planear con anticipación.",
      en: "Documents, flights, connections, and recommendations for planning ahead.",
    },
    category: {
      es: "México",
      en: "Mexico",
    },
  },
  {
    id: "serbia-food",
    href: {
      es: "/guia#que-comer-en-serbia",
      en: "/en/guide#what-to-eat-in-serbia",
    },
    title: {
      es: "Qué comer en Serbia",
      en: "What to eat in Serbia",
    },
    description: {
      es: "Platos, bebidas, mercados y experiencias gastronómicas para tu primera visita.",
      en: "Dishes, drinks, markets, and food experiences for your first visit.",
    },
    category: {
      es: "Gastronomía",
      en: "Food",
    },
  },
  {
    id: "serbia-croatia-montenegro",
    href: {
      es: "/guia#serbia-croacia-montenegro",
      en: "/en/guide#serbia-croatia-montenegro",
    },
    title: {
      es: "Serbia, Croacia o Montenegro: ¿qué destino elegir?",
      en: "Serbia, Croatia, or Montenegro: which destination should you choose?",
    },
    description: {
      es: "Comparación editorial para entender ritmos, paisajes y tipo de viaje antes de decidir.",
      en: "An editorial comparison of pace, landscapes, and trip style before deciding.",
    },
    category: {
      es: "Destinos",
      en: "Destinations",
    },
  },
  {
    id: "when-to-travel",
    href: {
      es: "/guia#cuando-viajar-a-los-balcanes",
      en: "/en/guide#when-to-visit-the-balkans",
    },
    title: {
      es: "Cuándo viajar a los Balcanes",
      en: "When to travel to the Balkans",
    },
    description: {
      es: "Clima, temporadas, festivales y ritmo de viaje según el tipo de experiencia.",
      en: "Weather, seasons, festivals, and travel rhythm depending on the experience.",
    },
    category: {
      es: "Planificación",
      en: "Planning",
    },
  },
] satisfies GuideArticle[];

export const experienceCategories = [
  {
    id: "cultura-e-historia",
    slug: {
      es: "cultura-e-historia",
      en: "culture-and-history",
    },
    name: {
      es: "Cultura e historia",
      en: "Culture and history",
    },
    tagline: {
      es: "Ciudades, imperios, memoria, monasterios y barrios con relato propio.",
      en: "Cities, empires, memory, monasteries, and neighborhoods with stories of their own.",
    },
    description: {
      es: "Experiencias pensadas para entender el destino con contexto, no solo recorrer monumentos.",
      en: "Experiences designed to understand the destination with context, not just visit monuments.",
    },
    image: media.mostar,
  },
  {
    id: "gastronomia",
    slug: {
      es: "gastronomia",
      en: "gastronomy",
    },
    name: {
      es: "Gastronomía",
      en: "Gastronomy",
    },
    tagline: {
      es: "Mesas locales, mercados, vinos, cafés, rakija y conversaciones.",
      en: "Local tables, markets, wines, cafes, rakija, and conversations.",
    },
    description: {
      es: "La cocina balcánica como forma de acercarse a la hospitalidad, las regiones y la vida cotidiana.",
      en: "Balkan cuisine as a way to approach hospitality, regions, and everyday life.",
    },
    image: media.table,
  },
  {
    id: "naturaleza",
    slug: {
      es: "naturaleza",
      en: "nature",
    },
    name: {
      es: "Naturaleza",
      en: "Nature",
    },
    tagline: {
      es: "Montañas, ríos, lagos, cañones y pueblos donde el viaje baja el ritmo.",
      en: "Mountains, rivers, lakes, canyons, and villages where travel slows down.",
    },
    description: {
      es: "Rutas que combinan paisajes potentes con cultura local y tiempos realistas.",
      en: "Routes that combine powerful landscapes with local culture and realistic pacing.",
    },
    image: media.zlatibor,
  },
  {
    id: "tradiciones",
    slug: {
      es: "tradiciones",
      en: "traditions",
    },
    name: {
      es: "Tradiciones",
      en: "Traditions",
    },
    tagline: {
      es: "Hospitalidad, música, pueblos, oficios y formas de celebrar.",
      en: "Hospitality, music, villages, crafts, and ways of celebrating.",
    },
    description: {
      es: "Detalles humanos que convierten un itinerario en una experiencia con memoria.",
      en: "Human details that turn an itinerary into an experience with memory.",
    },
    image: media.skopjeMarket,
  },
] satisfies ExperienceCategory[];

export function getExperienceBySlug(slug: string, locale: Locale) {
  return experienceCategories.find((experience) => experience.slug[locale] === slug);
}

export function getExperienceRoute(
  experience: ExperienceCategory,
  locale: Locale,
) {
  return locale === "es"
    ? `/experiencias/${experience.slug.es}`
    : `/en/experiences/${experience.slug.en}`;
}
