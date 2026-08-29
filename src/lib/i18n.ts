import { en } from "@/messages/en";
import { es } from "@/messages/es";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const dictionaries = {
  es,
  en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
