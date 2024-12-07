"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "@/components/dialog";

export default function Page() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) {
          router.back();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Content>
          <Dialog.Close />
          dsdsdsddsdsdsds
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
