"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/services/supabase/client";
import { AlertDialog } from "@/components/alert-dialog";
import { useToast } from "@/components/toaster";

export default function Page() {
  const [open, setOPen] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const onCancel = () => {
    router.back();
  };

  const onConfirm = async () => {
    const client = createClient({});
    const { error } = await client.auth.signOut();

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao encerrar sessão",
      });
      return;
    }

    toast({
      variant: "default",
      title: "Sessão encerrada",
    });

    router.push("/signin");
    router.refresh();
  };

  useEffect(() => {
    setOPen(true);
  }, []);

  return (
    <AlertDialog open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Encerrar a sessão?</AlertDialog.Title>
            <AlertDialog.Description>
              Você será automaticamente desconectado
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel onClick={onCancel}>Cancelar</AlertDialog.Cancel>
            <AlertDialog.Action onClick={onConfirm}>
              Confirmar
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
