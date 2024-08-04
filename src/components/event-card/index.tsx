import { MapPinIcon, CalendarIcon } from "lucide-react"
import moment from "moment"
import "moment/locale/pt-br"

interface EventCardProps {
  title: string,
  date: string,
  locale: string,
  description: string
}

export default function EventCard({title, date, locale, description}: EventCardProps) {

  moment.locale("pt-br")

  return (
    <div
      className="flex flex-col p-10 space-y-4 min-h-[400px] items-center justify-center rounded-2xl border border-background-darker text-lg dark:border-background-lighter"
    >
      <h4
        className="text-2xl font-bold"
      >
        {title}
      </h4>
      <div className="space-y-4">
        <div
          className="flex items-center space-x-4"
        >
          <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
            <CalendarIcon />
          </div>
          <p>{moment(date).format("dddd, D [de] MMMM YYYY")}</p>
        </div>
        <div
          className="flex items-center space-x-4"
        >
          <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
            <MapPinIcon />
          </div>
          <p>{locale}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}
