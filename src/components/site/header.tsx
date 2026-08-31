import Link from "next/link";
import { Phone } from "lucide-react";
import { mainNav } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="border-border bg-background sticky top-0 z-40 border-b">
      <div className="bg-urgence text-white">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs sm:text-sm">
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          <span>
            Urgences : <strong>SAMU 15</strong> · Pompiers 18 · Police 17 ·
            Europe 112
          </span>
        </p>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-heading text-caraibes text-lg font-bold">
          Madinina Santé
        </Link>
        <ul className="text-anthracite-soft flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-caraibes transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
