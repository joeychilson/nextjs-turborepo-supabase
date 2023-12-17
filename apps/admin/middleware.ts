import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@repo/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!signin|auth/callback|_next/static|_next/image|favicon.ico).*)",
  ],
};
