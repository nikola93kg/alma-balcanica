import { AboutPage } from "@/components/sections/AboutPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "about",
  title: "Sobre Alma Balcánica",
  description:
    "Alma Balcánica acerca Serbia y los Balcanes a viajeros hispanohablantes con contexto local, atención en español y socios profesionales.",
});

export default function Page() {
  return <AboutPage locale="es" />;
}
