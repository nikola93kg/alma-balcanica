import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
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
        <p className="mb-4 text-sm font-semibold uppercase text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-editorial text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-stone-dark sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
