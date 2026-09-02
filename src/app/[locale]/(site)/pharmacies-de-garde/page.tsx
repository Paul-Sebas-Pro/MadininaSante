import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Placeholder } from "@/components/site/placeholder";
import { generateLocaleParams } from "@/lib/i18n-page";

export const generateStaticParams = generateLocaleParams;

export async function generateMetadata(
  props: PageProps<"/[locale]/pharmacies-de-garde">,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "placeholder" });
  return { title: t("pharmaciesTitle") };
}

export default async function PharmaciesDeGardePage({
  params,
}: PageProps<"/[locale]/pharmacies-de-garde">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Placeholder titleKey="pharmaciesTitle" />;
}
