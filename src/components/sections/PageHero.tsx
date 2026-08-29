import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import type { ImageAsset } from "@/types/travel";
import { Container } from "@/components/ui/Container";
import { LocalizedImage } from "@/components/ui/LocalizedImage";

type PageHeroProps = {
  locale: Locale;
  image: ImageAsset;
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
};

export function PageHero({
  locale,
  image,
  eyebrow,
  title,
  copy,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[68svh] overflow-hidden bg-charcoal text-white">
      <LocalizedImage
        image={image}
        locale={locale}
        fill
        loading="eager"
        sizes="100vw"
      />
      <div className="image-overlay absolute inset-0" />
      <Container className="relative flex min-h-[68svh] items-end pb-12 pt-32 sm:pb-16 lg:pb-18">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase text-white/75">
            {eyebrow}
          </p>
          <h1 className="font-editorial text-5xl font-semibold leading-[1] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            {copy}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
