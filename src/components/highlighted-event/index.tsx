"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { format, parseISO, isSameYear } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MapPinIcon } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionContainer,
  SectionProps,
} from "@/components/section";
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
  TypographySmall,
} from "@/components/typography";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { Button } from "@/components/button";

export * from "./components/agenda";
export * from "./components/presentations";

type HighlightedEventProps = SectionProps;
function HighlightedEvent({ children }: HighlightedEventProps) {
  return (
    <Section className="border-border border-b pb-12">
      <SectionContainer>{children}</SectionContainer>
    </Section>
  );
}

const HighlightedEventHeader = SectionHeader;

type HighlightedEventBodyProps = React.HTMLAttributes<HTMLDivElement>;
function HighlightedEventBody({ children }: HighlightedEventBodyProps) {
  return <div className="space-y-8">{children}</div>;
}

type HighlightedEventFooterProps = React.HTMLAttributes<HTMLDivElement>;
function HighlightedEventFooter({ children }: HighlightedEventFooterProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row">{children}</div>
  );
}

type HighlightedEventTitleProps = React.HTMLAttributes<HTMLDivElement>;
function HighlightedEventTitle({ children }: HighlightedEventTitleProps) {
  return (
    <TypographyH1 className="mb-4 font-extrabold sm:text-5xl xl:text-7xl">
      {children}
    </TypographyH1>
  );
}

type HighlightedEventDescriptionProps = React.PropsWithChildren;
function HighlightedEventDescription({
  children,
}: HighlightedEventDescriptionProps) {
  return <TypographyLead className="max-w-3xl">{children}</TypographyLead>;
}

function HighlightedEventLabel() {
  return <TypographyH4 className="mb-4 text-lg">Próximo evento</TypographyH4>;
}

type HighlightedEventPlaceProps = {
  place: string;
  address: string;
};

function HighlightedEventPlace({ place, address }: HighlightedEventPlaceProps) {
  return (
    <Popover>
      <div className="flex items-center">
        <PopoverTrigger className="flex items-center">
          <MapPinIcon className="mr-1 h-4 w-4" />
          <p className="text-sm">{place}</p>
        </PopoverTrigger>
      </div>

      <PopoverContent>
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
      </PopoverContent>
    </Popover>
  );
}

type HighlightedEventStartDateProps = {
  startDate: string;
  showTime?: boolean;
};

function HighlightedEventStartDate({
  startDate,
}: HighlightedEventStartDateProps) {
  const [date, setDate] = useState("");

  useEffect(() => {
    try {
      const parsed = parseISO(startDate as string);
      const isNotSame = !isSameYear(parsed, new Date());

      setDate(
        format(parsed, `dd LLLL ${isNotSame ? "yyyy" : ""} ' - ' k:mm'h'`, {
          locale: ptBR,
        }),
      );
    } catch (_) {}
  }, [startDate]);
  return <p className="flex items-center text-sm">{date}</p>;
}

type HighlightedEventPlaceAndDateProps = HighlightedEventStartDateProps & {
  place: string;
  address: string;
};
function HighlightedEventPlaceAndDate({
  place,
  address,
  startDate,
}: HighlightedEventPlaceAndDateProps) {
  return (
    <div className="flex items-center space-x-2">
      <HighlightedEventPlace place={place} address={address} />
      <HighlightedEventStartDate startDate={startDate} />
    </div>
  );
}

type HighlightedEventSubscribeProps = {
  href?: string;
};

function HighlightedEventSubscribe({ href }: HighlightedEventSubscribeProps) {
  return (
    <Button size="lg" asChild>
      <a href={href} target="_blank">
        Inscreva-se
      </a>
    </Button>
  );
}

type HighlightedEventSubmitProps = {
  href: string;
  disabled?: boolean;
};

function HighlightedEventSubmit({
  href,
  disabled,
}: HighlightedEventSubmitProps) {
  if (disabled) {
    return (
      <Button variant="outlined" disabled size="lg">
        Envie sua palestra
      </Button>
    );
  }
  return (
    <Button variant="outlined" disabled size="lg" asChild>
      <Link href={href}>Envie sua palestra</Link>
    </Button>
  );
}

export {
  HighlightedEvent,
  HighlightedEventBody,
  HighlightedEventDescription,
  HighlightedEventFooter,
  HighlightedEventHeader,
  HighlightedEventLabel,
  HighlightedEventPlaceAndDate,
  HighlightedEventSubscribe,
  HighlightedEventSubmit,
  HighlightedEventTitle,
  type HighlightedEventBodyProps,
  type HighlightedEventDescriptionProps,
  type HighlightedEventFooterProps,
  type HighlightedEventPlaceAndDateProps,
  type HighlightedEventPlaceProps,
  type HighlightedEventProps,
  type HighlightedEventStartDateProps,
  type HighlightedEventSubscribeProps,
  type HighlightedEventSubmitProps,
  type HighlightedEventTitleProps,
};
