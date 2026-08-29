import { TrustPage } from "@/components/sections/TrustPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "trust",
  title: "Travel with confidence",
  description:
    "How Spanish-language support, formal operation, documentation, payments, and support work for Serbia and Balkans trips.",
});

export default function Page() {
  return <TrustPage locale="en" />;
}
