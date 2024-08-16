import { redirect } from "next/navigation";
import { createClient } from "@/services/supabase/server";
import PageClient from "./page-client";

export default async function Page() {
  const client = createClient();
  const { data } = await client.auth.getUser();

  if (!data.user?.id) {
    redirect("/");
  }

  return <PageClient />;
}
