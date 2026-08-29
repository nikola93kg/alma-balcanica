import { HomePage } from "@/components/sections/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "home",
  title: "Viajes por Serbia y los Balcanes en español",
  description:
    "Explora Serbia y los Balcanes con viajes en grupos pequeños, salidas programadas y experiencias privadas con atención en español.",
});

export default function Page() {
  return <HomePage locale="es" />;
}
