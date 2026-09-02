import { getTranslations } from "next-intl/server";
import { PageShell } from "./page-shell";

/** Page « en construction » (sections pas encore livrées). */
export async function Placeholder({ titleKey }: { titleKey: string }) {
  const t = await getTranslations("placeholder");
  return (
    <PageShell title={t(titleKey)}>
      <p className="bg-soleil/15 text-anthracite inline-block rounded-full px-3 py-1 text-xs font-semibold">
        {t("badge")}
      </p>
      <p>{t("body")}</p>
    </PageShell>
  );
}
