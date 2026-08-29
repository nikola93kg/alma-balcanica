import { ContactPage } from "@/components/sections/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "contact",
  title: "Contacto",
  description:
    "Contacta a Alma Balcánica para planear tu viaje por Serbia y los Balcanes con atención en español.",
});

export default function Page() {
  return <ContactPage locale="es" />;
}
