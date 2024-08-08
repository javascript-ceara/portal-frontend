import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { TypographyH3 } from "@/components/typography";

export const Title = TypographyH3;

export function Root({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={twMerge(
        "border-border min-h-[400px]  space-y-4 rounded-3xl border p-8 text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StartDate({ date }: { date: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-md bg-background-lighter p-3">
        <CalendarIcon className="h-6 w-6 " />
      </div>
      <p className="text-base">
        {format(parseISO(date), "EEEE, d 'de' MMMM yyyy", {
          locale: ptBR,
        })}
      </p>
    </div>
  );
}

export function Place({ children }: React.PropsWithChildren) {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-md bg-background-lighter p-3">
        <MapPinIcon className="h-6 w-6" />
      </div>
      <p className="text-base">{children}</p>
    </div>
  );
}

export function Description({ children }: React.PropsWithChildren) {
  return <p className=" text-base">{children}</p>;
}
