"use client";

import { Fragment, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import * as Popover from "@/components/popover";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { format, parseISO, isSameYear } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Event } from "@/types/event";

// Definindo os tipos de Props para os componentes
type EventPlaceProps = {
  placeName: string;
  placeAddress: string;
  isAnOnlineEvent: boolean;
};

type EventStartDateProps = {
  startDate: Event["startDate"];
  showTime?: boolean;
};

// Componente EventPlace
export const EventPlace = ({
  placeName,
  placeAddress,
  isAnOnlineEvent,
}: EventPlaceProps) => {
  const renderPopoverContent = () => (
    <>
      <Popover.Trigger className={twMerge("flex items-center space-x-1")}>
        <MapPinIcon className="h-5 w-5" />
        <span>{placeName}</span>
      </Popover.Trigger>
      <Popover.Content>
        <div className="space-y-4 overflow-hidden rounded-lg border-gray-200 p-4 shadow-lg">
          <address className="relative">
            <p className="text-sm">{placeAddress}</p>
          </address>
          {isAnOnlineEvent ? (
            <a
              href="https://www.youtube.com/@reactjsceara"
              target="_blank"
              className="inline-block text-sm font-semibold underline"
              rel="noopener noreferrer"
            >
              Acessar canal no YouTube
            </a>
          ) : (
            <a
              href={`https://www.google.com/maps/search/${placeName}`}
              target="_blank"
              className="inline-block text-sm"
              rel="noopener noreferrer"
            >
              Ver no mapa
            </a>
          )}
        </div>
      </Popover.Content>
    </>
  );

  return <Popover.Root>{renderPopoverContent()}</Popover.Root>;
};

// Componente EventStartDate
export const EventStartDate = ({
  startDate,
  showTime,
}: EventStartDateProps) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    try {
      const parsed = parseISO(startDate as string);
      const isNotSame = !isSameYear(parsed, new Date());

      setDate(
        format(
          parsed,
          `dd LLLL ${isNotSame ? "yyyy" : ""}${showTime ? " - k:mm'h'" : ""}`,
          {
            locale: ptBR,
          },
        ),
      );
    } catch (_) {}
  }, [startDate, showTime]);

  return <span>{date}</span>;
};
