import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { ChevronDownIcon } from "lucide-react";
import { ScrollArea } from "@/components/scroll-area";

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  const lastSpace = text.lastIndexOf(" ", limit);
  if (lastSpace === -1) {
    return text.slice(0, limit).trim() + "...";
  }
  return text.slice(0, lastSpace).trim() + "...";
};

type TruncatedTextProps = {
  text: string;
  limit: number;
};

function TruncatedText({ text, limit }: TruncatedTextProps) {
  return (
    <div>
      <Popover>
        <p className="text-base">
          {truncateText(text, limit)}
          <PopoverTrigger className="items  inline-flex text-xs">
            <ChevronDownIcon className="h-4 w-4" />
          </PopoverTrigger>
        </p>

        <PopoverContent className="p-0 sm:w-96">
          <ScrollArea className="h-96 p-4">
            <p className="whitespace-pre-line text-base">{text}</p>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { TruncatedText, type TruncatedTextProps };
