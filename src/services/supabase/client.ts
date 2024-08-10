import {
  createBrowserClient,
  CookieMethodsBrowser,
  CookieOptionsWithName,
} from "@supabase/ssr";
import { SupabaseClientOptions } from "@supabase/supabase-js/dist/module/lib/types";
import { Database } from "@/types/supabase.database";

export function createClient({
  options,
}: {
  options?: SupabaseClientOptions<"public"> & {
    cookies: CookieMethodsBrowser;
    cookieOptions: CookieOptionsWithName;
    isSingleton: boolean;
  };
}) {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    options,
  );
}
