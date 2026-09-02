import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Placeholder } from "@/components/site/placeholder";
import { generateLocaleParams } from "@/lib/i18n-page";

export const generateStaticParams = generateLocaleParams;

export async function generateMetadata(
  props: PageProps<"/[locale]/conseils">,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "placeholder" });
  return { title: t("conseilsTitle") };
}

export default async function ConseilsPage({
  params,
}: PageProps<"/[locale]/conseils">) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Placeholder titleKey="conseilsTitle" />;
}
