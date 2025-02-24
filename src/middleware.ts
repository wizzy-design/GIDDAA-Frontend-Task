import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.has("accessToken");

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/properties/:path*"],
};
