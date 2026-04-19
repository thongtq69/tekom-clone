import { NextResponse, type NextRequest } from "next/server";

const locales = ["vi", "en"] as const;
const defaultLocale = "vi";

function pickLocale(req: NextRequest): string {
  const accept = req.headers.get("accept-language") || "";
  for (const part of accept.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    const short = tag.split("-")[0];
    if (locales.includes(short as (typeof locales)[number])) return short;
  }
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const locale = pickLocale(req);
  req.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|images|favicon.ico|.*\\.(?:png|jpe?g|svg|webp|ico|pdf)$).*)",
  ],
};
