import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  urlMappingStrategy: "redirect",
});

export async function middleware(request: NextRequest) {

  //we get this from browser => f12 => Application => Cookies => Name
  const token = request.cookies.get("sb-oflwxccevksqbbzzvxca-auth-token");

  if (!token && request.nextUrl.pathname.startsWith("/ar/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (!token && request.nextUrl.pathname.startsWith("/en/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && request.nextUrl.pathname.startsWith("/en/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (token && request.nextUrl.pathname.startsWith("/ar/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  await updateSession(request);
  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    "/dashboard", // Protect the dashboard page
    "/en/dashboard",
    "/ar/dashboard",
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!api|static|api-v1|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
};
