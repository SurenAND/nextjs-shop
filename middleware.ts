// import { NextResponse, NextRequest } from "next/server";
import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.has("token");
  const role = request.cookies.get("role");

  // Redirect to home if trying to access login page and token exists
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect to home if trying to access dashboard and user is not admin or moderator
  if (
    pathname.startsWith("/dashboard") &&
    !(role?.value === "admin" || role?.value === "moderator")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard"],
};
