"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";

type Option = {
  label: string;
  value: string;
};

type ComboboxProps = {
  options: Option[];
  value: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
};

function Combobox({ options, onSelect, value, disabled }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const onSelectHandler = (val: string) => {
    onSelect(val === value ? "" : val);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outlined"
          className="h-14 cursor-pointer justify-between"
          role="combobox"
          aria-expanded={open}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Selecione..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="left-0 w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder="Pesquisar..." />
          <CommandList>
            <CommandEmpty>Sem resultados</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={onSelectHandler}
                >
                  <CheckIcon
                    className={twMerge(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { Combobox, type ComboboxProps };
