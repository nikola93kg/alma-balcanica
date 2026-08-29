import { ToursListingPage } from "@/components/travel/ToursListingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "guaranteedDepartures",
  title: "Salidas garantizadas",
  description:
    "Rutas con itinerarios, fechas y condiciones predefinidas por operadores locales autorizados para viajar por Serbia y los Balcanes.",
});

export default function Page() {
  return <ToursListingPage locale="es" type="guaranteed" />;
}
