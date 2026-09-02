import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

// Next.js 16 : `proxy` remplace `middleware`. next-intl gère la négociation de locale
// et les redirections de préfixe.
export default createMiddleware(routing);

export const config = {
  // Tout sauf les fichiers internes Next, l'API et les fichiers statiques.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
