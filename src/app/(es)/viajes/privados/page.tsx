import { ToursListingPage } from "@/components/travel/ToursListingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "privateTrips",
  title: "Viajes privados",
  description:
    "Viajes privados y grupos cerrados por Serbia y los Balcanes para parejas, familias, organizaciones y grupos de Latinoamérica.",
});

export default function Page() {
  return <ToursListingPage locale="es" type="private" />;
}
