"use client";

import { Toast } from "./toast";
import { useToast } from "./use-toast";
export { useToast } from "./use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <Toast.Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <Toast.Content>
              {title && <Toast.Title>{title}</Toast.Title>}
              {description && (
                <Toast.Description>{description}</Toast.Description>
              )}
            </Toast.Content>
            {action}
            <Toast.Close />
          </Toast>
        );
      })}
      <Toast.Viewport />
    </Toast.Provider>
  );
}
