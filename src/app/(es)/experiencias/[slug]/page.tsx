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
    slug: experience.slug.es,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug, "es");

  if (!experience) {
    return {};
  }

  return createPageMetadata({
    locale: "es",
    path: getExperienceRoute(experience, "es"),
    languages: {
      es: getExperienceRoute(experience, "es"),
      "es-MX": getExperienceRoute(experience, "es"),
      en: getExperienceRoute(experience, "en"),
      "x-default": getExperienceRoute(experience, "es"),
    },
    title: experience.name.es,
    description: experience.description.es,
    image: experience.image.src,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug, "es");

  if (!experience) {
    notFound();
  }

  return <ExperiencesPage locale="es" experience={experience} />;
}
