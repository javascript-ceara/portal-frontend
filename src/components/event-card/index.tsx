import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import {
  TypographyH3,
  TypographyH4,
  TypographySmall,
} from "@/components/typography";
import { Popover } from "@/components/popover";

export type EventCardProps = React.PropsWithChildren<{ className?: string }>;

export function EventCard({ children, className }: EventCardProps) {
  return (
    <div
      className={twMerge(
        "space-y-4 rounded-3xl border border-border p-8 text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

EventCard.Title = TypographyH3;
EventCard.StartDate = StartDate;
EventCard.Place = Place;
EventCard.Description = Description;

export type EventCardStartDateProps = { date: string };
function StartDate({ date }: EventCardStartDateProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-md bg-background-darker p-3 dark:bg-background-lighter">
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

export type EventCardPlaceProps = React.PropsWithChildren;
function Place({ children }: EventCardPlaceProps) {
  return (
    <Popover>
      <div className="flex items-center space-x-4">
        <Popover.Trigger className="rounded-md bg-background-darker p-3 dark:bg-background-lighter">
          <MapPinIcon className="h-6 w-6" />
        </Popover.Trigger>
        <p className="text-base">{children}</p>
      </div>

      <Popover.Content>
        <TypographyH4 className="mb-2">Digital College </TypographyH4>
        <TypographySmall className="mb-4">
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE
        </TypographySmall>
        <TypographySmall>
          <a href="#">Ver no Google Maps</a>
        </TypographySmall>
      </Popover.Content>
    </Popover>
  );
}

export type EventCardDescriptionProps = React.PropsWithChildren;
function Description({ children }: EventCardDescriptionProps) {
  return <p className=" text-base">{children}</p>;
}
