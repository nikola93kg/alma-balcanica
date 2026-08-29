import { DestinationsPage } from "@/components/destinations/DestinationsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "destinations",
  title: "Destinos en Serbia y los Balcanes",
  description:
    "Explora Serbia, Bosnia y Herzegovina, Montenegro, Croacia, Macedonia del Norte y Albania con una guía editorial en español.",
});

export default function Page() {
  return <DestinationsPage locale="es" />;
}
