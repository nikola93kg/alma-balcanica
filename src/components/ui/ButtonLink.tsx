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
    "border border-accent bg-accent text-paper hover:border-green-dark hover:bg-green-dark focus-visible:outline-earth",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:bg-paper-muted hover:text-accent",
  light:
    "border border-paper/70 bg-paper text-accent hover:border-stone hover:bg-background hover:text-green-dark",
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
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200",
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
