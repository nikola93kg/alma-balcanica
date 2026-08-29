import { DestinationsPage } from "@/components/destinations/DestinationsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "destinations",
  title: "Destinations in Serbia and the Balkans",
  description:
    "Explore Serbia, Bosnia and Herzegovina, Montenegro, Croatia, North Macedonia, and Albania with an editorial guide in Spanish.",
});

export default function Page() {
  return <DestinationsPage locale="en" />;
}
