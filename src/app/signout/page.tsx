import { redirect } from "next/navigation";
import { createClient } from "@/services/supabase/server";
import { ConfirmAlertDialog } from "./_components/confirm-alert-dialog";

export default async function Page() {
  const client = await createClient();
  const { data } = await client.auth.getUser();

  if (!data.user?.id) {
    redirect("/");
  }

  return <ConfirmAlertDialog />;
}
