// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const adminRoutes = ["/admin", "/dashboard", "/api/users"];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Solo permitir admins
  if (adminRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/users/:path*"],
};
