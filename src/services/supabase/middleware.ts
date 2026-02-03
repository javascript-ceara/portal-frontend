import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Middleware to manage Supabase sessions and handle route protection.
 * It refreshes the session and redirects users based on their authentication status.
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          // Sync cookies with the request
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );

          // Create a new response to reflect the new cookies
          response = NextResponse.next({ request });

          // Sync cookies with the response
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Securely fetch the user. This also refreshes the session token if needed.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Route Definitions
  const PROTECTED_ROUTES = [
    "/presentations/new",
    "/profile",
    "/my-presentations",
  ];
  const AUTH_ROUTES = ["/signin", "/signup"];

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  // Redirection Logic
  if (!user && isProtectedRoute) {
    return redirect(request, "/signin");
  }

  if (user && isAuthRoute) {
    return redirect(request, "/");
  }

  return response;
}

/**
 * Helper to create a redirect response.
 */
function redirect(request: NextRequest, path: string) {
  const url = request.nextUrl.clone();
  url.pathname = path;
  return NextResponse.redirect(url);
}
