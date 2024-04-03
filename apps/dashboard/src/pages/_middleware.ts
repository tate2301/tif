import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req, ev) {
  const token = req ? req.cookies?.token : null;

  let userId = null;
  if (token) {
    // this is how we sign= jwt.sign(object,secretKey)
    // now use the same secretKey to decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    userId = decodedToken?.issuer;
  }

  const { pathname } = req.nextUrl;
  // if user sends request to "/api/login", it has no token. so let the request pass
  if (pathname.includes("/api/login") || userId) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
