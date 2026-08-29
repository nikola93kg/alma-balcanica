import type { Locale } from "@/lib/i18n";
import type { LocalizedValue } from "@/types/travel";

export const brand = {
  name: "Alma Balcánica",
  wordmark: "ALMA BALCÁNICA",
  descriptor: {
    es: "Viajes por Serbia y los Balcanes en español.",
    en: "Travel across Serbia and the Balkans in Spanish.",
  },
  tagline: {
    es: "Viajes por Serbia y los Balcanes en español.",
    en: "Travel across Serbia and the Balkans in Spanish.",
  },
  shortTagline: {
    es: "Viajes con alma por Serbia y los Balcanes.",
    en: "Journeys with soul through Serbia and the Balkans.",
  },
} satisfies {
  name: string;
  wordmark: string;
  descriptor: LocalizedValue<string>;
  tagline: LocalizedValue<string>;
  shortTagline: LocalizedValue<string>;
};

export const contactChannels = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

export function getDefaultWhatsAppMessage(locale: Locale, context?: string) {
  if (context) {
    return locale === "es"
      ? `Hola, estoy interesado en ${context}.`
      : `Hello, I am interested in ${context}.`;
  }

  return locale === "es"
    ? "Hola, estoy interesado en un viaje con Alma Balcánica."
    : "Hello, I am interested in a trip with Alma Balcánica.";
}

export function getWhatsAppHref(locale: Locale, context?: string) {
  const number = contactChannels.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return null;
  }

  const message = encodeURIComponent(getDefaultWhatsAppMessage(locale, context));

  return `https://wa.me/${number}?text=${message}`;
}
