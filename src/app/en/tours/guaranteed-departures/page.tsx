import { ToursListingPage } from "@/components/travel/ToursListingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "guaranteedDepartures",
  title: "Guaranteed departures",
  description:
    "Routes with predefined itineraries, dates, and conditions from authorized local operators for Serbia and the Balkans.",
});

export default function Page() {
  return <ToursListingPage locale="en" type="guaranteed" />;
}
