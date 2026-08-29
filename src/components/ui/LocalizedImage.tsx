import Image from "next/image";
import type { ImageProps } from "next/image";
import type { Locale } from "@/lib/i18n";
import type { ImageAsset } from "@/types/travel";
import { cn } from "@/lib/utils";

type LocalizedImageProps = Omit<ImageProps, "src" | "alt"> & {
  image: ImageAsset;
  locale: Locale;
};

export function LocalizedImage({
  image,
  locale,
  className,
  ...props
}: LocalizedImageProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt[locale]}
      className={cn("object-cover", className)}
      {...props}
    />
  );
}
