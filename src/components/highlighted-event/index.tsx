import { MapPinIcon } from "lucide-react";
import { Section } from "@/components/section";
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
  TypographySmall,
} from "@/components/typography";
import { Popover } from "@/components/popover";
import { Button } from "@/components/button";
import { Presentations, Presentation } from "./presentations";
import { Agenda } from "./agenda";
import { StartDate } from "./start-date";

export type HighlightedEventProps = React.PropsWithChildren;

export function HighlightedEvent({ children }: HighlightedEventProps) {
  return (
    <Section className="border-b border-border pb-12">
      <Section.Container>{children}</Section.Container>
    </Section>
  );
}

HighlightedEvent.Agenda = Agenda;
HighlightedEvent.Body = Body;
HighlightedEvent.Description = Description;
HighlightedEvent.Footer = Footer;
HighlightedEvent.Header = Section.Header;
HighlightedEvent.Label = Label;
HighlightedEvent.PlaceAndDate = PlaceAndDate;
HighlightedEvent.Place = Place;
HighlightedEvent.StartDate = StartDate;
HighlightedEvent.Presentation = Presentation;
HighlightedEvent.Presentations = Presentations;
HighlightedEvent.Subscribe = Subscribe;
HighlightedEvent.Submit = Submit;
HighlightedEvent.Title = Title;

function Label() {
  return <TypographyH4 className="mb-4 text-lg">Próximo evento</TypographyH4>;
}

export type HighlightedEventPlaceProps = {
  place: string;
  address: string;
};

function PlaceAndDate({
  place,
  address,
  startDate,
  showTime,
}: {
  place: string;
  address: string;
  startDate: string;
  showTime?: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Place place={place} address={address} />
      <StartDate startDate={startDate} showTime={showTime} />
    </div>
  );
}

function Place({ place, address }: HighlightedEventPlaceProps) {
  return (
    <Popover>
      <div className="flex items-center">
        <Popover.Trigger className="flex items-center">
          <MapPinIcon className="mr-1 h-4 w-4" />
          <p className="text-sm">{place}</p>
        </Popover.Trigger>
      </div>

      <Popover.Content>
        <TypographyH4 className="mb-2">{place}</TypographyH4>
        <TypographySmall className="mb-4">{address}</TypographySmall>
        <TypographySmall>
          <a
            href={`https://www.google.com/maps/place/${address}`}
            target="_blank"
          >
            Ver no Google Maps
          </a>
        </TypographySmall>
      </Popover.Content>
    </Popover>
  );
}

export type HighlightedEventTitleProps = React.PropsWithChildren;
function Title({ children }: HighlightedEventTitleProps) {
  return (
    <TypographyH1 className="mb-4 font-extrabold sm:text-5xl xl:text-7xl">
      {children}
    </TypographyH1>
  );
}

export type DescriptionProps = React.PropsWithChildren;
function Description({ children }: DescriptionProps) {
  return <TypographyLead className="max-w-3xl">{children}</TypographyLead>;
}

export type HighlightedEventBodyProps = React.PropsWithChildren;
function Body({ children }: HighlightedEventBodyProps) {
  return <div className="space-y-8">{children}</div>;
}

export type HighlightedEventFooterProps = React.PropsWithChildren;
function Footer({ children }: HighlightedEventFooterProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">{children}</div>
  );
}

export type HighlightedEventSubscribeProps = {
  href?: string;
};
function Subscribe({ href }: HighlightedEventSubscribeProps) {
  return (
    <Button size="lg" asChild>
      <a href={href} target="_blank">
        Inscreva-se
      </a>
    </Button>
  );
}

export type HighlightedEventSubmitProps = {
  href?: string;
};
function Submit({ href }: HighlightedEventSubmitProps) {
  return (
    <Button variant="outlined" size="lg" asChild>
      <a href={href}>Envie sua palestra</a>
    </Button>
  );
}
