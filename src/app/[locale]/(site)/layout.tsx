import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export default async function SiteLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </>
  );
}
