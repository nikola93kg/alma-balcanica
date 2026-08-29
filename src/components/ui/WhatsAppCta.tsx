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
    "border border-[#25d366]/45 bg-[#dff6e8] text-[#075e54] hover:border-[#25d366]/70 hover:bg-[#c8efd8] focus-visible:outline-[#25d366]",
  secondary:
    "border border-[#25d366]/30 bg-[#effbf4] text-[#075e54] hover:border-[#25d366]/55 hover:bg-[#dff6e8]",
  light:
    "border border-[#25d366]/55 bg-[#dff6e8] text-[#075e54] hover:border-white hover:bg-white",
  ghost:
    "border border-[#25d366]/40 bg-[#dff6e8]/12 text-white hover:border-[#25d366]/70 hover:bg-[#dff6e8] hover:text-[#075e54]",
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
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors",
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
        className="w-full justify-center shadow-[0_18px_50px_rgba(7,94,84,0.18)]"
      />
    </div>
  );
}
