import { ShieldCheck } from "lucide-react";
import { getOperator } from "@/data/operators";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type TourOperatorProps = {
  operatorId?: string;
  locale: Locale;
  className?: string;
};

export function TourOperator({
  operatorId,
  locale,
  className,
}: TourOperatorProps) {
  const operator = getOperator(operatorId);
  const dictionary = getDictionary(locale);

  if (!operator) {
    return null;
  }

  return (
    <aside
      className={cn(
        "rounded-md border border-border bg-paper p-5 text-foreground",
        className,
      )}
      aria-label={`${dictionary.operator.operatedBy} ${operator.name}`}
    >
      <div className="flex items-start gap-3">
        <ShieldCheck aria-hidden="true" className="mt-1 size-5 text-accent" />
        <div>
          <p className="text-xs font-semibold uppercase text-accent">
            {dictionary.operator.operatedBy} {operator.name}
          </p>
          <h2 className="mt-2 text-lg font-bold leading-6">
            {dictionary.operator.authorized}
          </h2>
          <p className="mt-3 text-sm leading-6 text-stone-dark">
            {dictionary.operator.license} {operator.license} -{" "}
            {operator.licenseCategory[locale]}
          </p>
        </div>
      </div>
    </aside>
  );
}
