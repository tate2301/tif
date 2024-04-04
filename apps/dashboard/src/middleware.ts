import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest) {
  // extract the token from the request headers
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  let user = null;
  if (token) {
    const decodedToken = jwt.verify(token, "supersecret");
    if (!decodedToken) return NextResponse.redirect("/login");

    user = (
      decodedToken as {
        user: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
        };
      }
    ).user.id;
  }

  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();

  if (!token && pathname !== "/" && pathname !== "/register") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (pathname.includes("/") || pathname.includes("/register") || user) {
    return NextResponse.next();
  }
}