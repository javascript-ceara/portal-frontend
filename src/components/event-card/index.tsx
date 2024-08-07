import React from "react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

type EventCardRootProps = {
  children: React.ReactNode;
  className?: string;
};

export function Root({ children, className }: EventCardRootProps) {
  return (
    <div
      className={`flex flex-col p-10 space-y-4 min-h-[400px] items-center justify-center rounded-2xl border border-background-darker text-lg dark:border-background-lighter ${className}`}
    >
      {children}
    </div>
  )
}

type EventCardTitleProps = {
  children: React.ReactNode;
};

export function Title({ children }: EventCardTitleProps) {
  return (
    <h4
      className="text-2xl font-bold"
    >
      {children}
    </h4>
  )
}

type EventCardDateProps = {
  icon: React.ReactNode;
  date: string;
};

export function EventCardDate({ icon, date }: EventCardDateProps) {

  const parsedDate = parseISO(date)

  const formattedDate = format(parsedDate, "EEEE, d 'de' MMMM yyyy", { locale: ptBR });

  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">{icon}</div>
      <p>{formattedDate}</p>
    </div>
  );
}

type EventCardPlaceProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function EventCardPlace({ icon, children }: EventCardPlaceProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">{icon}</div>
      <p>{children}</p>
    </div>
  );
}

type EventCardDescriptionProps = {
  children: React.ReactNode;
};

export function Description({ children }: EventCardDescriptionProps) {
  return (
    <p>{children}</p>
  )
}