"use client";

import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { Popover, Transition } from "@headlessui/react";

import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";

import { Event } from "@/types/event";

export const EventPlace = ({
  placeName,
  placeAddress,
  isAnOnlineEvent,
}: Props) => {
  // Definindo a função de render fora para evitar o erro de função não serializável
  const renderPopoverContent = () => (
    <>
      <Popover.Button className={twMerge("flex items-center space-x-1")}>
        <MapPinIcon className="h-5 w-5" />
        <span>{placeName}</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className={twMerge(
            "absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-sm",
          )}
        >
          <div className="space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
            <address className="relative">
              <p className="text-sm text-gray-600">{placeAddress}</p>
            </address>
            {isAnOnlineEvent && (
              <a
                href={"https://www.youtube.com/@reactjsceara"}
                target="_blank"
                className="inline-block text-sm font-semibold underline"
                rel="noopener noreferrer"
              >
                Acessar canal no YouTube
              </a>
            )}
            {!isAnOnlineEvent && (
              <a
                href={`https://www.google.com/maps/search/${placeName}`}
                target="_blank"
                className="inline-block text-sm text-gray-600"
                rel="noopener noreferrer"
              >
                Ver no mapa
              </a>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );

  return <Popover className="relative">{renderPopoverContent()}</Popover>;
};
