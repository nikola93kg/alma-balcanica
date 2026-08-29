import { ExperiencesPage } from "@/components/experiences/ExperiencesPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "experiences",
  title: "Experiences in Serbia and the Balkans",
  description:
    "Culture, history, gastronomy, nature, and traditions for discovering Serbia and the Balkans with context in Spanish.",
});

export default function Page() {
  return <ExperiencesPage locale="en" />;
}
