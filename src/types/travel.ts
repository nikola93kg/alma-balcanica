import type { Locale } from "@/lib/i18n";

export type LocalizedValue<T> = Record<Locale, T>;

export type ImageAsset = {
  src: string;
  alt: LocalizedValue<string>;
  credit?: string;
  sourceUrl?: string;
  license?: string;
};

export type TourType = "guaranteed" | "private";

export type InventoryStatus = "placeholder" | "active";

export type Destination = {
  id: string;
  slug: LocalizedValue<string>;
  name: LocalizedValue<string>;
  tagline: LocalizedValue<string>;
  description: LocalizedValue<string>;
  longDescription: LocalizedValue<string>;
  highlights: LocalizedValue<string[]>;
  image: ImageAsset;
  featured?: boolean;
};

export type GuideArticle = {
  id: string;
  href: LocalizedValue<string>;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  category: LocalizedValue<string>;
};

export type ExperienceCategory = {
  id: string;
  slug: LocalizedValue<string>;
  name: LocalizedValue<string>;
  tagline: LocalizedValue<string>;
  description: LocalizedValue<string>;
  image: ImageAsset;
};

export type TourOperator = {
  id: string;
  name: string;
  country: LocalizedValue<string>;
  license: string;
  licenseCategory: LocalizedValue<string>;
  website?: string;
};

export type TourDate = {
  id: string;
  display: LocalizedValue<string>;
  price?: LocalizedValue<string>;
  status: LocalizedValue<string>;
  startDate?: string;
  endDate?: string;
  isPlaceholder: boolean;
};

export type TourPrice = {
  display: LocalizedValue<string>;
  currency?: string;
  amount?: number;
  isPlaceholder: boolean;
};

export type TourDay = {
  day: number;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
};

export type Tour = {
  id: string;
  slug: LocalizedValue<string>;
  title: LocalizedValue<string>;
  subtitle: LocalizedValue<string>;
  shortDescription: LocalizedValue<string>;
  countries: string[];
  duration: LocalizedValue<string>;
  durationDays?: number;
  type: TourType;
  travelStyle: LocalizedValue<string>;
  groupStyle: LocalizedValue<string>;
  languageSupport: LocalizedValue<string>;
  transport: LocalizedValue<string>;
  guaranteedDeparture: boolean;
  departureStatus: LocalizedValue<string>;
  inventoryStatus: InventoryStatus;
  placeholderNote?: string;
  price: TourPrice;
  nextDeparture: TourDate;
  dates: TourDate[];
  operatorId?: string;
  sourceUrl?: string;
  heroImage: ImageAsset;
  gallery: ImageAsset[];
  route: LocalizedValue<string[]>;
  highlights: LocalizedValue<string[]>;
  overview: LocalizedValue<string>;
  itinerary: TourDay[];
  included: LocalizedValue<string[]>;
  notIncluded: LocalizedValue<string[]>;
  practicalInfo: LocalizedValue<string[]>;
  forWhom: LocalizedValue<string[]>;
  accommodation: LocalizedValue<string>;
  cancellation: LocalizedValue<string>;
  faqs: Array<{
    question: LocalizedValue<string>;
    answer: LocalizedValue<string>;
  }>;
};
