import { GuidePage } from "@/components/sections/GuidePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "guide",
  title: "Balkans Guide",
  description:
    "Practical information for traveling to Serbia and the Balkans: safety, budget, food, routes, and trip preparation.",
});

export default function Page() {
  return <GuidePage locale="en" />;
}
