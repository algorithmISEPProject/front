import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";

export interface EventsProps {
  eventsName?: string;
  eventsNumber?: number;
  eventsDate?: string;
  eventImage?: StaticImageData | undefined;
  eventsPlace?: string;
}

export default function Event(props: EventsProps) {
  const [eventParticipate, setEventParticipate] = useState(false);
  return (
    <div className="flex w-full flex-col space-y-4 p-5 bg-componentBackground border-1 border-btn-outline rounded-xl">
      <div className="h-36 bg-white rounded"></div>
      <Image
        alt="userIcon"
        src={props?.eventImage || ""}
        height={64}
        width={64}
        className="rounded"
      />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <div className="text-white">{props.eventsName}</div>
            <div className="text-subTitle">{props.eventsDate}</div>
          </div>
          <div className="text-subTitle">{props.eventsPlace}</div>
        </div>

        {eventParticipate ? (
          <div className="flex items-center ">
            <div className="flex items-center w-full">
              <div className="text-subTitle ">{props.eventsNumber} members</div>
            </div>
            <button className="text-green-500 tracking-wide p-3 ">
              Participating
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="flex items-center w-full">
              <div className="text-subTitle">{props.eventsNumber} members</div>
            </div>
            <div className=" flex space-x-2">
              <button className="text-subTitle tracking-wide bg-btn-background w-28 h-9 p-2 border-1 border-btn-outline rounded-xl">
                Participate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
