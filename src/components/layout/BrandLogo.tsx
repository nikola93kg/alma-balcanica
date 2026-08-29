import Image from "next/image";
import almaBalcanicaLogo from "@/assets/logo/logo.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  variant?: "header" | "footer";
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  variant = "header",
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center",
        variant === "header" ? "w-[9.75rem] sm:w-[10.75rem]" : "w-[13rem]",
        className,
      )}
    >
      <Image
        src={almaBalcanicaLogo}
        alt=""
        priority={priority}
        sizes={variant === "header" ? "(min-width: 640px) 172px, 156px" : "208px"}
        className={cn("h-auto w-full object-contain", imageClassName)}
      />
    </span>
  );
}
