"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import hramSvSave from "@/assets/img/hramSvSave.webp";
import hero1 from "@/assets/img/hero1.webp";
import hero2 from "@/assets/img/hero2.webp";
import hero3 from "@/assets/img/hero3.webp";
import { media } from "@/data/media";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type HeroSlide = {
  src: string | StaticImageData;
  alt: Record<Locale, string>;
  position: string;
};

const autoplayDelay = 9500;

const heroSlides: HeroSlide[] = [
  {
    src: hramSvSave,
    alt: {
      es: "Vista aérea del Templo de San Sava en Belgrado.",
      en: "Aerial view of Saint Sava Temple in Belgrade.",
    },
    position: "center center",
  },
  {
    src: hero1,
    alt: {
      es: "Fortaleza de Golubac junto al Danubio en Serbia.",
      en: "Golubac Fortress beside the Danube in Serbia.",
    },
    position: "center center",
  },
  {
    src: media.balkanHero.src,
    alt: {
      es: "Vista aérea de Mostar, el puente Stari Most y las montañas de Bosnia y Herzegovina.",
      en: "Aerial view of Mostar, Stari Most bridge, and the mountains of Bosnia and Herzegovina.",
    },
    position: "center center",
  },
  {
    src: hero2,
    alt: {
      es: "Río Sava y horizonte moderno de Belgrado durante el día.",
      en: "Sava River and modern Belgrade skyline during the day.",
    },
    position: "center center",
  },
  {
    src: hero3,
    alt: {
      es: "Río Sava y horizonte moderno de Belgrado durante el día.",
      en: "Sava River and modern Belgrade skyline during the day.",
    },
    position: "center center",
  },
];

export function HeroSlideshow({ locale }: { locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!isAutoplayEnabled) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length);
    }, autoplayDelay);

    return () => window.clearInterval(interval);
  }, [isAutoplayEnabled]);

  const changeSlide = (direction: "previous" | "next") => {
    setIsAutoplayEnabled(false);
    setActiveIndex((index) => {
      if (direction === "previous") {
        return index === 0 ? heroSlides.length - 1 : index - 1;
      }

      return (index + 1) % heroSlides.length;
    });
  };

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <Image
            key={index}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : undefined}
            placeholder={typeof slide.src === "string" ? undefined : "blur"}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-[1800ms] ease-out",
              activeIndex === index ? "opacity-100" : "opacity-0",
            )}
            style={{ objectPosition: slide.position }}
          />
        ))}
        <div className="absolute inset-0 bg-charcoal/10" />
      </div>

      <button
        type="button"
        onClick={() => changeSlide("previous")}
        className="focus-ring absolute left-3 top-1/2 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-charcoal/35 text-white shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground sm:left-4 sm:size-12 lg:left-8"
        aria-label={locale === "es" ? "Imagen anterior" : "Previous image"}
      >
        <ChevronLeft aria-hidden="true" className="size-6" />
      </button>
      <button
        type="button"
        onClick={() => changeSlide("next")}
        className="focus-ring absolute right-3 top-1/2 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-charcoal/35 text-white shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground sm:right-4 sm:size-12 lg:right-8"
        aria-label={locale === "es" ? "Siguiente imagen" : "Next image"}
      >
        <ChevronRight aria-hidden="true" className="size-6" />
      </button>

      <div className="pointer-events-none absolute bottom-6 right-5 z-20 hidden gap-2 sm:flex lg:right-10">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-1 rounded-full transition-all duration-700",
              activeIndex === index ? "w-10 bg-white" : "w-4 bg-white/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
