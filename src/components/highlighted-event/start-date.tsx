"use client";

import { useState, useEffect } from "react";
import { format, parseISO, isSameYear } from "date-fns";
import { ptBR } from "date-fns/locale";

export function StartDate({
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
