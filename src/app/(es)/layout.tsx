import type { Metadata } from "next";
import { LocaleLayout } from "@/components/layout/LocaleLayout";
import { sans, serif } from "@/lib/fonts";
import { createRootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = createRootMetadata("es");

export default function SpanishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${serif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <LocaleLayout locale="es">{children}</LocaleLayout>
      </body>
    </html>
  );
}
