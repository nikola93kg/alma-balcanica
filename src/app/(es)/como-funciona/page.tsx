import { HowItWorksPage } from "@/components/sections/HowItWorksPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "howItWorks",
  title: "Cómo funciona",
  description:
    "El proceso de Alma Balcánica para pasar de inspiración a propuesta formal y reserva con operadores locales autorizados.",
});

export default function Page() {
  return <HowItWorksPage locale="es" />;
}
