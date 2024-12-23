// import { HOME, LOGIN, PROFILE, REGISTRATION } from "@/shared/router/router";
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const refreshToken = request.cookies.get("refreshToken");

//   if (!refreshToken && pathname === PROFILE) {
//     return NextResponse.redirect(new URL(HOME, request.url));
//   }

//   if (refreshToken && (pathname === LOGIN || pathname === REGISTRATION)) {
//     return NextResponse.redirect(new URL(HOME, request.url));
//   }

//   return NextResponse.next();
// }

// export const middlewareConfig = {
//   matcher: [PROFILE, HOME, LOGIN, REGISTRATION],
// };
