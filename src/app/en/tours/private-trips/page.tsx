import { ToursListingPage } from "@/components/travel/ToursListingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "privateTrips",
  title: "Private trips",
  description:
    "Private trips and closed groups through Serbia and the Balkans for couples, families, organizations, and Latin American groups.",
});

export default function Page() {
  return <ToursListingPage locale="en" type="private" />;
}
