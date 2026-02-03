import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { TypographyH4, TypographySmall } from "@/components/typography";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/popover";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  type CardProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardHeaderProps,
} from "@/components/card";

type EventCardProps = CardProps;
const EventCard = Card;

type EventCardHeaderProps = CardHeaderProps;
const EventCardHeader = CardHeader;

type EventCardTitleProps = CardTitleProps;
const EventCardTitle = CardTitle;

type EventCardDescriptionProps = CardDescriptionProps;
const EventCardDescription = CardDescription;

type EventCardBodyProps = React.HTMLAttributes<HTMLDivElement>;
function EventCardBody({ children }: EventCardBodyProps) {
  return <div className="space-y-2">{children}</div>;
}

type EventCardStartDateProps = React.HTMLAttributes<HTMLDivElement> & {
  date: string;
};
function EventCardStartDate({ date }: EventCardStartDateProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-background-darker dark:bg-background-lighter rounded-md p-3">
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

type EventCardPlaceAndAddressProps = {
  place: string;
  address: string;
};

function EventCardPlaceAndAddress({
  place,
  address,
}: EventCardPlaceAndAddressProps) {
  return (
    <Popover>
      <div className="flex items-center space-x-4">
        <PopoverTrigger className="bg-background-darker hover:bg-primary-hover dark:bg-background-lighter dark:hover:bg-primary dark:hover:text-background cursor-pointer  rounded-md p-3">
          <MapPinIcon className="h-6 w-6" />
        </PopoverTrigger>
        <p className="text-base">{place}</p>
      </div>

      <PopoverContent>
        <TypographyH4 className="mb-2">{place}</TypographyH4>
        <TypographySmall className="mb-4">{address}</TypographySmall>
        <TypographySmall>
          <TypographySmall>
            <a
              href={`https://www.google.com/maps/place/${address}`}
              target="_blank"
            >
              Ver no Google Maps
            </a>
          </TypographySmall>
        </TypographySmall>
      </PopoverContent>
    </Popover>
  );
}

export {
  EventCard,
  EventCardHeader,
  EventCardBody,
  EventCardTitle,
  EventCardDescription,
  EventCardStartDate,
  EventCardPlaceAndAddress,
  type EventCardProps,
  type EventCardHeaderProps,
  type EventCardBodyProps,
  type EventCardTitleProps,
  type EventCardDescriptionProps,
};
