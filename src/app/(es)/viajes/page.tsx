import { ToursListingPage } from "@/components/travel/ToursListingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "tours",
  title: "Viajes por Serbia y los Balcanes",
  description:
    "Salidas garantizadas y viajes privados por Serbia y los Balcanes con atención en español.",
});

export default function Page() {
  return <ToursListingPage locale="es" />;
}
