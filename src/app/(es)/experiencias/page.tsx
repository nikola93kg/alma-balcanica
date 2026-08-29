import { ExperiencesPage } from "@/components/experiences/ExperiencesPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "es",
  routeKey: "experiences",
  title: "Experiencias en Serbia y los Balcanes",
  description:
    "Cultura, historia, gastronomía, naturaleza y tradiciones para descubrir Serbia y los Balcanes con contexto en español.",
});

export default function Page() {
  return <ExperiencesPage locale="es" />;
}
