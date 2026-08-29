import { ContactPage } from "@/components/sections/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "contact",
  title: "Contact",
  description:
    "Contact Alma Balcánica to plan a trip through Serbia and the Balkans with Spanish-language support.",
});

export default function Page() {
  return <ContactPage locale="en" />;
}
