import { Event } from "@/types";

function convertEventToText(event: Event): string {
  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const startDateText = startDate.toLocaleDateString("pt-BR", dateOptions);
  const startTimeText = startDate.toLocaleTimeString("pt-BR", timeOptions);
  const endTimeText = endDate.toLocaleTimeString("pt-BR", timeOptions);

  const onlineStatus = event.is_online
    ? "e também será realizado online."
    : "e será um evento presencial.";

  return `Dia ${startDateText}, às ${startTimeText}, estaremos na ${event.place} com o evento '${event.title}'. Este evento ocorrerá ${onlineStatus} 
            O endereço é ${event.address}. Para participar, faça sua inscrição através do link: ${event.subscribe_url}. 
            O evento está programado para terminar às ${endTimeText}. 
            Descrição do evento: ${event.description}`;
}

export { convertEventToText };
