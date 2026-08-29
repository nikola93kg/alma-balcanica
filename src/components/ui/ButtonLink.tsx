import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "text";
  icon?: ReactNode;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-charcoal focus-visible:outline-accent",
  secondary:
    "border border-border bg-paper text-foreground hover:border-accent hover:text-accent",
  light:
    "border border-white/55 bg-white/10 text-white hover:bg-white hover:text-foreground",
  text: "text-foreground underline hover:text-accent",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ?? <ArrowRight aria-hidden="true" className="size-4" />}
    </Link>
  );
}
