import { ToursListingPage } from "@/components/travel/ToursListingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "tours",
  title: "Serbia and Balkans tours",
  description:
    "Guaranteed departures and private trips through Serbia and the Balkans with Spanish-language support.",
});

export default function Page() {
  return <ToursListingPage locale="en" />;
}
