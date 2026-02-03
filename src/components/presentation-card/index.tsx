import Link from "next/link";
import { format, isSameYear } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/card";

import { Badge } from "@/components/badge";

import { Database } from "@/types/supabase.database";

const PresentationCard = Card;
const PresentationCardHeader = CardHeader;
const PresentationCardContent = CardContent;
const PresentatonCardFooter = CardFooter;
const PresentationCardTitle = CardTitle;
const PresentationCardDescription = CardDescription;

type PresentationCardStatusProps = {
  status: Database["public"]["Tables"]["presentations"]["Row"]["status"];
};

const PresentationCardStatus = ({ status }: PresentationCardStatusProps) => {
  const title: Record<
    NonNullable<PresentationCardStatusProps["status"]>,
    string
  > = {
    awaiting_review: "Aguardando revisão",
    under_review: "Em revisão",
    accepted: "Aprovada",
    declined: "Rejeitada",
  };
  return (
    <Badge variant={status === "accepted" ? "primary" : "outline"}>
      {status && title[status]}
    </Badge>
  );
};

type PresentationCardSubmissionDetailsProps = {
  eventId: number;
  eventTitle: string;
  createdAt: string;
};

function PresentationCardSubmissionDetails({
  eventId,
  eventTitle,
  createdAt = "2024-08-17T03:00:00+00:00",
}: PresentationCardSubmissionDetailsProps) {
  const date = new Date(createdAt);
  const isTheSame = isSameYear(date, new Date());
  const text = isTheSame ? "dd 'de' MMMM" : "dd 'de' MMMM 'de' yyyy";

  return (
    <p className="text-wrap text-xs">
      Enviado em{" "}
      <span className="font-semibold">
        {format(new Date(createdAt), text, {
          locale: ptBR,
        })}
      </span>{" "}
      para o{" "}
      <Link
        href={`/events/${eventId}`}
        className="hover:text-primary font-semibold"
      >
        {eventTitle}
      </Link>
    </p>
  );
}

export {
  PresentationCard,
  PresentationCardHeader,
  PresentationCardContent,
  PresentatonCardFooter,
  PresentationCardTitle,
  PresentationCardDescription,
  PresentationCardStatus,
  PresentationCardSubmissionDetails,
  type PresentationCardStatusProps,
  type PresentationCardSubmissionDetailsProps,
};
