import type { ReactNode } from "react";

// Le vrai <html>/<body> est rendu par src/app/[locale]/layout.tsx :
// toutes les routes passent par le segment [locale].
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
