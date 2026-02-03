"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogOverlay,
} from "@/components/alert-dialog";
import { useToast } from "@/components/toaster";
import { signout } from "../_actions/signout";

function ConfirmAlertDialog() {
  const [open, setOPen] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const onCancel = () => {
    router.back();
  };

  const onConfirm = async () => {
    try {
      await signout();
    } catch (error) {
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
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Encerrar a sessão?</AlertDialogTitle>
            <AlertDialogDescription>
              Você será automaticamente desconectado
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onCancel}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>Confirmar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}

export { ConfirmAlertDialog };
