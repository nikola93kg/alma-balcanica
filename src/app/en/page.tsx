import { HomePage } from "@/components/sections/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "home",
  title: "Serbia and Balkans tours in Spanish",
  description:
    "Discover Serbia and the Balkans with small-group trips, scheduled departures, and private experiences with Spanish-language support.",
});

export default function Page() {
  return <HomePage locale="en" />;
}
