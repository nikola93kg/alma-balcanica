import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppHref } from "@/data/brand";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { getRoute } from "@/lib/routes";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = {
  locale: Locale;
  context?: string;
  label?: string;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  showIcon?: boolean;
};

const variants = {
  primary:
    "border border-accent bg-accent text-paper hover:border-green-dark hover:bg-green-dark focus-visible:outline-earth",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:bg-paper-muted hover:text-accent",
  light:
    "border border-paper/70 bg-paper text-accent hover:border-stone hover:bg-background hover:text-green-dark",
  ghost:
    "border border-paper/35 bg-paper/10 text-paper hover:border-paper hover:bg-paper hover:text-accent",
};

export function WhatsAppCta({
  locale,
  context,
  label,
  variant = "primary",
  className,
  showIcon = true,
}: WhatsAppCtaProps) {
  const dictionary = getDictionary(locale);
  const href = getWhatsAppHref(locale, context);
  const content = (
    <>
      {showIcon ? (
        <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
      ) : null}
      <span>{label ?? dictionary.common.whatsappCta}</span>
    </>
  );
  const classNames = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200",
    variants[variant],
    className,
  );

  if (!href) {
    return (
      <Link href={`${getRoute("contact", locale)}#whatsapp`} className={classNames}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classNames}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}

export function FloatingWhatsAppCta({ locale }: { locale: Locale }) {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <WhatsAppCta
        locale={locale}
        label="WhatsApp"
        className="w-full justify-center shadow-[0_18px_50px_rgba(36,77,58,0.22)]"
      />
    </div>
  );
}
