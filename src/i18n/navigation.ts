import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/** `Link`, `redirect`, `usePathname`, `useRouter` conscients de la locale. */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
