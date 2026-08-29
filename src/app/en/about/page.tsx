import { AboutPage } from "@/components/sections/AboutPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "about",
  title: "About Alma Balcánica",
  description:
    "Alma Balcánica brings Serbia and the Balkans closer to Spanish-speaking travelers through local context, Spanish-language support, and professional partners.",
});

export default function Page() {
  return <AboutPage locale="en" />;
}
