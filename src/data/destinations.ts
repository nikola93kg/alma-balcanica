import { media } from "@/data/media";
import type { Destination } from "@/types/travel";
import type { Locale } from "@/lib/i18n";

export const destinations = [
  {
    id: "serbia",
    slug: {
      es: "serbia",
      en: "serbia",
    },
    name: {
      es: "Serbia",
      en: "Serbia",
    },
    tagline: {
      es: "Ríos, fortalezas, cafés y montañas con carácter propio.",
      en: "Rivers, fortresses, cafes, and mountains with a character of their own.",
    },
    description: {
      es: "La base natural de Alma Balcánica: Belgrado, Novi Sad, monasterios, gastronomía, pueblos de montaña y la hospitalidad que abre puertas.",
      en: "The natural base for Alma Balcánica: Belgrade, Novi Sad, monasteries, food, mountain villages, and hospitality that opens doors.",
    },
    longDescription: {
      es: "Serbia combina una capital intensa, ciudades danubianas, regiones de vino, monasterios medievales y paisajes de montaña que todavía sorprenden a muchos viajeros hispanohablantes.",
      en: "Serbia combines an intense capital, Danube cities, wine regions, medieval monasteries, and mountain landscapes that still surprise many Spanish-speaking travelers.",
    },
    highlights: {
      es: ["Belgrado", "Novi Sad", "Sremski Karlovci", "Zlatibor", "Mokra Gora"],
      en: ["Belgrade", "Novi Sad", "Sremski Karlovci", "Zlatibor", "Mokra Gora"],
    },
    image: media.belgradeFortress,
    featured: true,
  },
  {
    id: "bosnia-y-herzegovina",
    slug: {
      es: "bosnia-y-herzegovina",
      en: "bosnia-and-herzegovina",
    },
    name: {
      es: "Bosnia y Herzegovina",
      en: "Bosnia and Herzegovina",
    },
    tagline: {
      es: "Puentes, bazares, montañas y ciudades donde se cruzan mundos.",
      en: "Bridges, bazaars, mountains, and cities where worlds meet.",
    },
    description: {
      es: "Mostar, Sarajevo y una historia viva que se entiende mejor con contexto humano y cultural.",
      en: "Mostar, Sarajevo, and living history best understood with human and cultural context.",
    },
    longDescription: {
      es: "Bosnia y Herzegovina invita a mirar los Balcanes con más profundidad: arquitectura otomana y austrohúngara, cafés, memoria reciente, ríos transparentes y hospitalidad cotidiana.",
      en: "Bosnia and Herzegovina invites deeper travel through the Balkans: Ottoman and Austro-Hungarian architecture, cafes, recent memory, clear rivers, and everyday hospitality.",
    },
    highlights: {
      es: ["Mostar", "Sarajevo", "Neretva", "Bazares", "Montañas"],
      en: ["Mostar", "Sarajevo", "Neretva", "Bazaars", "Mountains"],
    },
    image: media.mostar,
    featured: true,
  },
  {
    id: "montenegro",
    slug: {
      es: "montenegro",
      en: "montenegro",
    },
    name: {
      es: "Montenegro",
      en: "Montenegro",
    },
    tagline: {
      es: "Adriático, piedra antigua y montañas que caen al mar.",
      en: "The Adriatic, old stone, and mountains falling into the sea.",
    },
    description: {
      es: "Kotor, la costa adriática y paisajes compactos donde la naturaleza cambia en distancias cortas.",
      en: "Kotor, the Adriatic coast, and compact landscapes where nature changes in short distances.",
    },
    longDescription: {
      es: "Montenegro concentra bahías, cascos antiguos, monasterios, lagos y montañas en un territorio pequeño, ideal para combinar cultura y naturaleza sin perder ritmo.",
      en: "Montenegro concentrates bays, old towns, monasteries, lakes, and mountains in a small territory, ideal for combining culture and nature without losing pace.",
    },
    highlights: {
      es: ["Kotor", "Perast", "Bahía de Kotor", "Monasterios", "Montañas"],
      en: ["Kotor", "Perast", "Bay of Kotor", "Monasteries", "Mountains"],
    },
    image: media.kotor,
    featured: true,
  },
  {
    id: "croacia",
    slug: {
      es: "croacia",
      en: "croatia",
    },
    name: {
      es: "Croacia",
      en: "Croatia",
    },
    tagline: {
      es: "Ciudades de piedra, islas, costa y memoria mediterránea.",
      en: "Stone cities, islands, coast, and Mediterranean memory.",
    },
    description: {
      es: "Dubrovnik y la costa dálmata pueden integrarse en rutas balcánicas con historia, mar y ciudades amuralladas.",
      en: "Dubrovnik and the Dalmatian coast can be woven into Balkan routes with history, sea, and walled towns.",
    },
    longDescription: {
      es: "Croacia aporta una lectura adriática de los Balcanes: ciudades amuralladas, puertos, islas, cocina mediterránea y conexiones naturales con Bosnia, Montenegro y Serbia.",
      en: "Croatia adds an Adriatic reading of the Balkans: walled cities, ports, islands, Mediterranean cuisine, and natural links with Bosnia, Montenegro, and Serbia.",
    },
    highlights: {
      es: ["Dubrovnik", "Costa dálmata", "Ciudades amuralladas", "Islas", "Adriático"],
      en: ["Dubrovnik", "Dalmatian coast", "Walled cities", "Islands", "Adriatic"],
    },
    image: media.dubrovnik,
    featured: true,
  },
  {
    id: "macedonia-del-norte",
    slug: {
      es: "macedonia-del-norte",
      en: "north-macedonia",
    },
    name: {
      es: "Macedonia del Norte",
      en: "North Macedonia",
    },
    tagline: {
      es: "Lagos, mercados y una mezcla balcánica muy viva.",
      en: "Lakes, markets, and a vivid Balkan mix.",
    },
    description: {
      es: "Ohrid, Skopie y rutas que conectan historia, naturaleza y vida urbana con una escala cercana.",
      en: "Ohrid, Skopje, and routes connecting history, nature, and urban life at an approachable scale.",
    },
    longDescription: {
      es: "Macedonia del Norte permite explorar lagos, bazares, iglesias, mezquitas, mercados y montañas con una sensación de descubrimiento muy marcada.",
      en: "North Macedonia offers lakes, bazaars, churches, mosques, markets, and mountains with a strong sense of discovery.",
    },
    highlights: {
      es: ["Ohrid", "Skopie", "Mercados", "Lagos", "Montañas"],
      en: ["Ohrid", "Skopje", "Markets", "Lakes", "Mountains"],
    },
    image: media.ohrid,
  },
  {
    id: "albania",
    slug: {
      es: "albania",
      en: "albania",
    },
    name: {
      es: "Albania",
      en: "Albania",
    },
    tagline: {
      es: "Montañas, costa, ciudades otomanas y una energía de descubrimiento.",
      en: "Mountains, coast, Ottoman cities, and a strong sense of discovery.",
    },
    description: {
      es: "Berat, Gjirokastra, Tirana y paisajes que amplían el mapa balcánico hacia el sur.",
      en: "Berat, Gjirokastra, Tirana, and landscapes that expand the Balkan map southward.",
    },
    longDescription: {
      es: "Albania suma arquitectura otomana, montañas, costa, mercados y una identidad cultural que cada vez interesa más a viajeros que buscan una Europa menos obvia.",
      en: "Albania brings Ottoman architecture, mountains, coast, markets, and a cultural identity increasingly attractive to travelers seeking a less obvious Europe.",
    },
    highlights: {
      es: ["Berat", "Tirana", "Gjirokastra", "Costa", "Montañas"],
      en: ["Berat", "Tirana", "Gjirokastra", "Coast", "Mountains"],
    },
    image: media.berat,
  },
  {
    id: "hungria",
    slug: {
      es: "hungria",
      en: "hungary",
    },
    name: {
      es: "Hungría",
      en: "Hungary",
    },
    tagline: {
      es: "Budapest, Danubio y una puerta elegante hacia Europa Central.",
      en: "Budapest, the Danube, and an elegant gateway into Central Europe.",
    },
    description: {
      es: "Hungría aparece en rutas regionales como extensión natural entre Serbia, Rumania y Bulgaria.",
      en: "Hungary appears in regional routes as a natural extension between Serbia, Romania, and Bulgaria.",
    },
    longDescription: {
      es: "Budapest suma arquitectura imperial, baños termales, cafés históricos y el Danubio como hilo conductor de varias rutas de Europa Central y los Balcanes.",
      en: "Budapest adds imperial architecture, thermal baths, historic cafes, and the Danube as a thread through several Central European and Balkan routes.",
    },
    highlights: {
      es: ["Budapest", "Danubio", "Castillo de Buda", "Parlamento", "Cafés históricos"],
      en: ["Budapest", "Danube", "Buda Castle", "Parliament", "Historic cafes"],
    },
    image: media.budapest,
  },
  {
    id: "rumania",
    slug: {
      es: "rumania",
      en: "romania",
    },
    name: {
      es: "Rumania",
      en: "Romania",
    },
    tagline: {
      es: "Transilvania, castillos, ciudades sajonas y vida urbana.",
      en: "Transylvania, castles, Saxon towns, and urban life.",
    },
    description: {
      es: "Rumania conecta el mapa balcánico con Transilvania, Bucarest y rutas culturales de gran profundidad.",
      en: "Romania connects the Balkan map with Transylvania, Bucharest, and culturally rich routes.",
    },
    longDescription: {
      es: "Rumania aporta castillos, ciudades medievales, pueblos de montaña y una historia que dialoga con Serbia, Hungría y Bulgaria dentro de rutas regionales más amplias.",
      en: "Romania brings castles, medieval towns, mountain villages, and a history connected with Serbia, Hungary, and Bulgaria within wider regional routes.",
    },
    highlights: {
      es: ["Timisoara", "Sibiu", "Sighisoara", "Brasov", "Bucarest"],
      en: ["Timisoara", "Sibiu", "Sighisoara", "Brasov", "Bucharest"],
    },
    image: media.corvinCastle,
  },
  {
    id: "bulgaria",
    slug: {
      es: "bulgaria",
      en: "bulgaria",
    },
    name: {
      es: "Bulgaria",
      en: "Bulgaria",
    },
    tagline: {
      es: "Monasterios, ciudades antiguas y montañas entre Oriente y Europa.",
      en: "Monasteries, ancient cities, and mountains between East and Europe.",
    },
    description: {
      es: "Bulgaria amplía las rutas hacia Sofía, Plovdiv, Rila y pueblos históricos con identidad propia.",
      en: "Bulgaria expands routes toward Sofia, Plovdiv, Rila, and historic towns with their own identity.",
    },
    longDescription: {
      es: "Bulgaria combina patrimonio ortodoxo, ciudades antiguas, valles, mercados y monasterios que enriquecen los circuitos por el sur y este de la región.",
      en: "Bulgaria combines Orthodox heritage, ancient cities, valleys, markets, and monasteries that enrich routes through the south and east of the region.",
    },
    highlights: {
      es: ["Sofía", "Rila", "Plovdiv", "Veliko Tarnovo", "Valle de las Rosas"],
      en: ["Sofia", "Rila", "Plovdiv", "Veliko Tarnovo", "Valley of Roses"],
    },
    image: media.sofia,
  },
] satisfies Destination[];

export const futureDestinations = [
  "slovenia",
  "greece",
] as const;

export const featuredDestinations = destinations.filter(
  (destination) => destination.featured,
);

export function getDestination(id: string) {
  return destinations.find((destination) => destination.id === id);
}

export function getDestinationBySlug(slug: string, locale: Locale) {
  return destinations.find((destination) => destination.slug[locale] === slug);
}

export function getDestinationRoute(destination: Destination, locale: Locale) {
  return locale === "es"
    ? `/destinos/${destination.slug.es}`
    : `/en/destinations/${destination.slug.en}`;
}
