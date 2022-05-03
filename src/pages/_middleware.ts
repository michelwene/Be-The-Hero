import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(
  req: NextRequest,
  ev: NextFetchEvent,
  res: NextResponse
) {
  const url = req.nextUrl.clone();
  const token = req.cookies["@auth:accessToken"];

  if (url.pathname === "/" && token) {
    url.pathname = "/cases";

    return NextResponse.redirect(url);
  }

  if (url.pathname === "/cases" && !token) {
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
