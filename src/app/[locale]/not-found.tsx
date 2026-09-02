import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <main className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-caraibes font-heading text-5xl font-bold">404</p>
      <h1 className="mt-4 text-xl font-semibold">{t("title")}</h1>
      <p className="text-anthracite-soft mt-2 text-sm">{t("description")}</p>
      <Link
        href="/"
        className="bg-caraibes mt-6 rounded-lg px-5 py-2.5 text-sm font-medium text-white"
      >
        {t("back")}
      </Link>
    </main>
  );
}
