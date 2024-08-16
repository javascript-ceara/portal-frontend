"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/services/supabase/client";
import * as Dialog from "@/components/alert-dialog";
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
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Encerrar a sessão?</Dialog.Title>
            <Dialog.Description>
              Você será automaticamente desconectado
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Cancel onClick={onCancel}>Cancelar</Dialog.Cancel>
            <Dialog.Action onClick={onConfirm}>Confirmar</Dialog.Action>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
