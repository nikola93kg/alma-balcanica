import { HowItWorksPage } from "@/components/sections/HowItWorksPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  locale: "en",
  routeKey: "howItWorks",
  title: "How it works",
  description:
    "Alma Balcánica's process for moving from inspiration to a formal proposal and booking with authorized local operators.",
});

export default function Page() {
  return <HowItWorksPage locale="en" />;
}
