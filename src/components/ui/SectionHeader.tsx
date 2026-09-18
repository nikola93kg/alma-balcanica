import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "default",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-sm font-semibold uppercase",
            tone === "inverted" ? "text-stone" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-editorial text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl",
          tone === "inverted" ? "text-paper" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            tone === "inverted" ? "text-paper/76" : "text-stone-dark",
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
