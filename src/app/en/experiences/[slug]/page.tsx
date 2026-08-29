import { notFound } from "next/navigation";
import {
  experienceCategories,
  getExperienceBySlug,
  getExperienceRoute,
} from "@/data/articles";
import { ExperiencesPage } from "@/components/experiences/ExperiencesPage";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return experienceCategories.map((experience) => ({
    slug: experience.slug.en,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug, "en");

  if (!experience) {
    return {};
  }

  return createPageMetadata({
    locale: "en",
    path: getExperienceRoute(experience, "en"),
    languages: {
      es: getExperienceRoute(experience, "es"),
      "es-MX": getExperienceRoute(experience, "es"),
      en: getExperienceRoute(experience, "en"),
      "x-default": getExperienceRoute(experience, "es"),
    },
    title: experience.name.en,
    description: experience.description.en,
    image: experience.image.src,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug, "en");

  if (!experience) {
    notFound();
  }

  return <ExperiencesPage locale="en" experience={experience} />;
}
