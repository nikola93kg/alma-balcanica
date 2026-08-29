import { TrustPage } from "@/components/sections/TrustPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "trust",
  title: "Viaja con confianza",
  description:
    "Cómo funciona la atención en español, operación formal, documentación, pagos y soporte para viajes por Serbia y los Balcanes.",
});

export default function Page() {
  return <TrustPage locale="es" />;
}
