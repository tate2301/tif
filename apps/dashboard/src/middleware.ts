import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

async function verify(token: string, secret: string): Promise<any> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  return payload;
}

export async function middleware(req: NextRequest) {
  // extract the token from the request headers
  const token = cookies().get("access_token");
  const url = req.nextUrl.clone();

  let user = null;
  if (token) {
    const decodedToken = await verify(token.value, "supersecret").catch(
      () => null
    );
    if (!decodedToken) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

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

  if (!token && pathname !== "/" && pathname !== "/register") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (pathname.includes("/") || pathname.includes("/register") || user) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next|api/auth|images).*)(.+)"],
};
