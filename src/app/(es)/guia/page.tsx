import { GuidePage } from "@/components/sections/GuidePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "guide",
  title: "Guía de los Balcanes",
  description:
    "Información práctica para viajar a Serbia y los Balcanes: seguridad, costos, gastronomía, rutas y preparación del viaje.",
});

export default function Page() {
  return <GuidePage locale="es" />;
}
