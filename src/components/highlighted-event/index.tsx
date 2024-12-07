"use  client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { format, parseISO, isSameYear } from "date-fns";
import { ptBR } from "date-fns/locale";
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
import { Presentations, Presentation } from "./components/presentations";
import { Agenda } from "./components/agenda";

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

export type PlaceAndDateProps = {
  place: string;
  address: string;
  startDate: string;
  showTime?: boolean;
};

function PlaceAndDate({
  place,
  address,
  startDate,
  showTime,
}: PlaceAndDateProps) {
  return (
    <div className="flex items-center space-x-2">
      <Place place={place} address={address} />
      <StartDate startDate={startDate} showTime={showTime} />
    </div>
  );
}

export type PlaceProps = {
  place: string;
  address: string;
};

function Place({ place, address }: PlaceProps) {
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

export type StartDateProps = {
  startDate: string;
  showTime: boolean;
};

function StartDate({
  startDate = "2024-08-17T03:00:00+00:00",
  showTime = true,
}: {
  startDate: string;
  showTime?: boolean;
}) {
  const [date, setDate] = useState("");

  useEffect(() => {
    try {
      const parsed = parseISO(startDate as string);
      const isNotSame = !isSameYear(parsed, new Date());

      setDate(
        format(
          parsed,
          `dd LLLL ${isNotSame ? "yyyy" : ""} 
          ${showTime ? "' - ' k:mm'h'" : ""}`,
          {
            locale: ptBR,
          },
        ),
      );
    } catch (_) {
      console.log(_);
    }
  }, [startDate, showTime]);
  return <p className="flex items-center text-sm">{date}</p>;
}

export type TitleProps = React.PropsWithChildren;
function Title({ children }: TitleProps) {
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

export type BodyProps = React.PropsWithChildren;
function Body({ children }: BodyProps) {
  return <div className="space-y-8">{children}</div>;
}

export type FooterProps = React.PropsWithChildren;
function Footer({ children }: FooterProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">{children}</div>
  );
}

export type SubscribeProps = {
  href?: string;
};
function Subscribe({ href }: SubscribeProps) {
  return (
    <Button size="lg" asChild>
      <a href={href} target="_blank">
        Inscreva-se
      </a>
    </Button>
  );
}

export type SubmitProps = {
  href: string;
};
function Submit({ href }: SubmitProps) {
  return (
    <Button variant="outlined" size="lg" asChild>
      <Link href={href}>Envie sua palestra</Link>
    </Button>
  );
}
