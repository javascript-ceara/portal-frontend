"use client";

import * as Modal from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { TypographyH2 } from "../typography";

type GenericModalDefaultProps = {
  children: React.ReactNode;
  className?: string;
};

export type GenericModalRootProps = {
  modalState: boolean;
  onChangeModal?: () => void;
  children: React.ReactNode;
};

type GenericModalHeaderProps = {
  onCloseModal: () => void;
  children: React.ReactNode;
  className?: string;
};

function Root({ modalState, onChangeModal, children }: GenericModalRootProps) {
  return (
    <Modal.Root
      open={modalState}
      defaultOpen={modalState}
      onOpenChange={onChangeModal}
    >
      {children}
    </Modal.Root>
  );
}

function Trigger({ children, className }: GenericModalDefaultProps) {
  return (
    <Modal.Trigger asChild className={className}>
      {children}
    </Modal.Trigger>
  );
}

function Header({
  children,
  className,
  onCloseModal,
}: GenericModalHeaderProps) {
  return (
    <div className="flex w-full justify-between">
      <Modal.Title
        className={twMerge("text-lg font-medium text-black", className)}
      >
        <TypographyH2>{children}</TypographyH2>
      </Modal.Title>
      <Modal.Close asChild>
        <XIcon className="text-black cursor-pointer outline-none" onClick={onCloseModal} />
      </Modal.Close>
    </div>
  );
}

function Content({ children, className }: GenericModalDefaultProps) {
  return (
    <Modal.Portal>
      <Modal.Overlay className="fixed inset-0 bg-black opacity-45 " />
      <Modal.Content
        className={twMerge(
          "fixed left-2/4 top-2/4 flex h-auto w-96 -translate-x-2/4 -translate-y-2/4 flex-col gap-2 rounded-md bg-white p-6",
          className,
        )}
      >
        {children}
      </Modal.Content>
    </Modal.Portal>
  );
}

function Description({ children, className }: GenericModalDefaultProps) {
  return (
    <Modal.Description
      className={twMerge("text-base tracking-normal text-black", className)}
    >
      {children}
    </Modal.Description>
  );
}

export { Content, Description, Header, Root, Trigger };
